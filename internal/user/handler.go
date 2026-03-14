package user

import (
	"net/http"
	"time"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"golang.org/x/crypto/bcrypt"
)

type Handler struct {
	db *sqlx.DB
}

func NewHandler(db *sqlx.DB) *Handler {
	return &Handler{db: db}
}

type UpdateProfileRequest struct {
	FullName string `json:"full_name"`
	Phone    string `json:"phone"`
}

type ChangePasswordRequest struct {
	CurrentPassword string `json:"current_password" binding:"required"`
	NewPassword     string `json:"new_password" binding:"required,min=8"`
}

func (h *Handler) GetProfile(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var user struct {
		ID         string    `db:"id" json:"id"`
		Email      string    `db:"email" json:"email"`
		FullName   string    `db:"full_name" json:"full_name"`
		Phone      string    `db:"phone" json:"phone"`
		Role       string    `db:"role" json:"role"`
		IsVerified bool      `db:"is_verified" json:"is_verified"`
		CreatedAt  time.Time `db:"created_at" json:"created_at"`
	}
	err := h.db.Get(&user, "SELECT id,email,full_name,phone,role,is_verified,created_at FROM users WHERE id=$1", userID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "کاربر یافت نشد"})
		return
	}
	c.JSON(http.StatusOK, user)
}

func (h *Handler) UpdateProfile(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var req UpdateProfileRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err := h.db.Exec("UPDATE users SET full_name=$1, phone=$2, updated_at=$3 WHERE id=$4",
		req.FullName, req.Phone, time.Now(), userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در بروزرسانی"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "پروفایل بروزرسانی شد"})
}

func (h *Handler) ChangePassword(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var req ChangePasswordRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var hash string
	h.db.QueryRow("SELECT password_hash FROM users WHERE id=$1", userID).Scan(&hash)

	if err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(req.CurrentPassword)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "رمز فعلی اشتباه است"})
		return
	}

	newHash, _ := bcrypt.GenerateFromPassword([]byte(req.NewPassword), bcrypt.DefaultCost)
	h.db.Exec("UPDATE users SET password_hash=$1, updated_at=$2 WHERE id=$3",
		string(newHash), time.Now(), userID)

	c.JSON(http.StatusOK, gin.H{"message": "رمز عبور تغییر کرد"})
}
