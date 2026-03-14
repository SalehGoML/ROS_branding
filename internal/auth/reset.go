package auth

import (
	"crypto/rand"
	"encoding/hex"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

func generateToken() string {
	b := make([]byte, 32)
	rand.Read(b)
	return hex.EncodeToString(b)
}

func (h *Handler) ForgotPassword(c *gin.Context) {
	var body struct {
		Email string `json:"email" binding:"required,email"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var userID string
	err := h.db.QueryRow("SELECT id FROM users WHERE email=$1", body.Email).Scan(&userID)
	if err != nil {
		// برای امنیت همیشه 200 برگردون
		c.JSON(http.StatusOK, gin.H{"message": "اگر این ایمیل ثبت شده، لینک بازیابی ارسال شد"})
		return
	}

	token := generateToken()
	expiresAt := time.Now().Add(time.Hour)

	h.db.Exec(`INSERT INTO reset_tokens (id, user_id, token, expires_at)
		VALUES ($1, $2, $3, $4)`,
		uuid.New().String(), userID, token, expiresAt)

	resetLink := h.frontendURL + "/reset-password?token=" + token

	// ارسال ایمیل
	if h.email != nil {
		go h.email.SendResetPassword(body.Email, resetLink)
	}

	// همیشه dev_token برگردون
	c.JSON(http.StatusOK, gin.H{
		"message":   "اگر این ایمیل ثبت شده، لینک بازیابی ارسال شد",
		"dev_link":  resetLink,
		"dev_token": token,
	})
}

func (h *Handler) ResetPassword(c *gin.Context) {
	var body struct {
		Token    string `json:"token" binding:"required"`
		Password string `json:"password" binding:"required,min=8"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var tokenID, userID string
	err := h.db.QueryRow(`SELECT id, user_id FROM reset_tokens
		WHERE token=$1 AND used=false AND expires_at > NOW()`, body.Token).
		Scan(&tokenID, &userID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "لینک نامعتبر یا منقضی شده است"})
		return
	}

	hash, _ := bcrypt.GenerateFromPassword([]byte(body.Password), bcrypt.DefaultCost)

	h.db.Exec("UPDATE users SET password_hash=$1, updated_at=$2 WHERE id=$3",
		string(hash), time.Now(), userID)
	h.db.Exec("UPDATE reset_tokens SET used=true WHERE id=$1", tokenID)

	c.JSON(http.StatusOK, gin.H{"message": "رمز عبور با موفقیت تغییر کرد"})
}
