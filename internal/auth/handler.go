package auth

import (
	"net/http"
	"time"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"golang.org/x/crypto/bcrypt"
	jwtpkg "github.com/ros-agency/backend/pkg/jwt"
	"github.com/ros-agency/backend/internal/models"
	"github.com/ros-agency/backend/pkg/email"
	"github.com/ros-agency/backend/pkg/sms"
)

type Handler struct {
	db          *sqlx.DB
	jwtSecret   string
	sms         *sms.Service
	email       *email.Service
	frontendURL string
}

func NewHandler(db *sqlx.DB, jwtSecret, frontendURL string, smsService *sms.Service, emailService *email.Service) *Handler {
	return &Handler{db: db, jwtSecret: jwtSecret, sms: smsService, email: emailService, frontendURL: frontendURL}
}

func (h *Handler) Register(c *gin.Context) {
	var req models.RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// چک ایمیل تکراری
	var count int
	h.db.Get(&count, "SELECT COUNT(*) FROM users WHERE email=$1", req.Email)
	if count > 0 {
		c.JSON(http.StatusConflict, gin.H{"error": "این ایمیل قبلاً ثبت شده است"})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "server error"})
		return
	}

	user := models.User{
		ID:           uuid.New().String(),
		Email:        req.Email,
		PasswordHash: string(hash),
		FullName:     req.FullName,
		Phone:        req.Phone,
		Role:         "user",
		IsVerified:   false,
		CreatedAt:    time.Now(),
		UpdatedAt:    time.Now(),
	}

	_, err = h.db.Exec(`INSERT INTO users (id,email,password_hash,full_name,phone,role,is_verified,created_at,updated_at)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
		user.ID, user.Email, user.PasswordHash, user.FullName, user.Phone,
		user.Role, user.IsVerified, user.CreatedAt, user.UpdatedAt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ثبت کاربر"})
		return
	}

	token, _ := jwtpkg.Generate(user.ID, user.Email, user.Role, h.jwtSecret)
	c.JSON(http.StatusCreated, models.AuthResponse{Token: token, User: user})
}

func (h *Handler) Login(c *gin.Context) {
	var req models.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User
	err := h.db.Get(&user, "SELECT * FROM users WHERE email=$1", req.Email)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ایمیل یا رمز عبور اشتباه است"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(req.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ایمیل یا رمز عبور اشتباه است"})
		return
	}

	token, _ := jwtpkg.Generate(user.ID, user.Email, user.Role, h.jwtSecret)
	c.JSON(http.StatusOK, models.AuthResponse{Token: token, User: user})
}

func (h *Handler) Me(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var user models.User
	err := h.db.Get(&user, "SELECT * FROM users WHERE id=$1", userID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, user)
}
