package auth

import (
	"crypto/rand"
	"fmt"
	"math/big"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	jwtpkg "github.com/ros-agency/backend/pkg/jwt"
)

func generateOTP() string {
	n, _ := rand.Int(rand.Reader, big.NewInt(900000))
	return fmt.Sprintf("%06d", n.Int64()+100000)
}

func (h *Handler) SendOTP(c *gin.Context) {
	var body struct {
		Phone string `json:"phone" binding:"required"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	code := generateOTP()
	expiresAt := time.Now().Add(2 * time.Minute)

	// ذخیره در DB
	_, err := h.db.Exec(`INSERT INTO otp_codes (id, phone, code, purpose, expires_at)
		VALUES ($1, $2, $3, 'login', $4)`,
		uuid.New().String(), body.Phone, code, expiresAt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ثبت کد"})
		return
	}

	// ارسال پیامک
	if h.sms != nil {
		if err := h.sms.SendOTP(body.Phone, code); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ارسال پیامک"})
			return
		}
	} else {
		// dev mode — کد رو توی response برگردون
		c.JSON(http.StatusOK, gin.H{"message": "کد ارسال شد", "dev_code": code})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "کد تایید ارسال شد"})
}

func (h *Handler) VerifyOTP(c *gin.Context) {
	var body struct {
		Phone string `json:"phone" binding:"required"`
		Code  string `json:"code" binding:"required"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// چک کد
	var otpID string
	err := h.db.QueryRow(`SELECT id FROM otp_codes
		WHERE phone=$1 AND code=$2 AND used=false AND expires_at > NOW()
		ORDER BY created_at DESC LIMIT 1`, body.Phone, body.Code).Scan(&otpID)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "کد نامعتبر یا منقضی شده است"})
		return
	}

	// mark as used
	h.db.Exec("UPDATE otp_codes SET used=true WHERE id=$1", otpID)

	// پیدا کردن یا ساخت کاربر
	var user User
	err = h.db.Get(&user, "SELECT * FROM users WHERE phone=$1", body.Phone)
	if err != nil {
		// کاربر جدید
		newUser := User{
			ID:           uuid.New().String(),
			Phone:        body.Phone,
			Role:         "user",
			IsVerified:   true,
			PasswordHash: "",
			CreatedAt:    time.Now(),
			UpdatedAt:    time.Now(),
		}
		h.db.Exec(`INSERT INTO users (id,email,password_hash,full_name,phone,role,is_verified,created_at,updated_at)
			VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
			newUser.ID, "", "", "", newUser.Phone, newUser.Role,
			newUser.IsVerified, newUser.CreatedAt, newUser.UpdatedAt)
		user = newUser
	}

	token, _ := jwtpkg.Generate(user.ID, user.Email, user.Role, h.jwtSecret)
	c.JSON(http.StatusOK, gin.H{"token": token, "user": user, "is_new": err != nil})
}

type User = struct {
	ID           string    `db:"id" json:"id"`
	Email        string    `db:"email" json:"email"`
	PasswordHash string    `db:"password_hash" json:"-"`
	FullName     string    `db:"full_name" json:"full_name"`
	Phone        string    `db:"phone" json:"phone"`
	Role         string    `db:"role" json:"role"`
	IsVerified   bool      `db:"is_verified" json:"is_verified"`
	CreatedAt    time.Time `db:"created_at" json:"created_at"`
	UpdatedAt    time.Time `db:"updated_at" json:"updated_at"`
}
