package contact

import (
	"net/http"
	"time"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"github.com/ros-agency/backend/internal/models"
)

type Handler struct {
	db *sqlx.DB
}

func NewHandler(db *sqlx.DB) *Handler {
	return &Handler{db: db}
}

func (h *Handler) Submit(c *gin.Context) {
	var req models.ContactForm
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	contact := models.ContactRequest{
		ID:        uuid.New().String(),
		Name:      req.Name,
		Email:     req.Email,
		Phone:     req.Phone,
		Subject:   req.Subject,
		Message:   req.Message,
		Status:    "new",
		CreatedAt: time.Now(),
	}

	_, err := h.db.Exec(`INSERT INTO contact_requests (id,name,email,phone,subject,message,status,created_at)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
		contact.ID, contact.Name, contact.Email, contact.Phone,
		contact.Subject, contact.Message, contact.Status, contact.CreatedAt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ثبت درخواست"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "درخواست شما با موفقیت ثبت شد",
		"id":      contact.ID,
	})
}

func (h *Handler) List(c *gin.Context) {
	var contacts []models.ContactRequest
	err := h.db.Select(&contacts, "SELECT * FROM contact_requests ORDER BY created_at DESC")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در دریافت درخواست‌ها"})
		return
	}
	c.JSON(http.StatusOK, contacts)
}

func (h *Handler) UpdateStatus(c *gin.Context) {
	id := c.Param("id")
	var body struct {
		Status string `json:"status" binding:"required"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err := h.db.Exec("UPDATE contact_requests SET status=$1 WHERE id=$2", body.Status, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در بروزرسانی"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "وضعیت بروزرسانی شد"})
}
