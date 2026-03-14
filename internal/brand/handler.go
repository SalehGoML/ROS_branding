package brand

import (
	"net/http"
	"time"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"
	"github.com/ros-agency/backend/internal/models"
)

type Handler struct {
	db *sqlx.DB
}

func NewHandler(db *sqlx.DB) *Handler {
	return &Handler{db: db}
}

func (h *Handler) Create(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var req models.BrandCreateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	brand := models.Brand{
		ID:          uuid.New().String(),
		UserID:      userID.(string),
		Name:        req.Name,
		Industry:    req.Industry,
		Description: req.Description,
		Personality: req.Personality,
		Values:      req.Values,
		Tone:        req.Tone,
		Phase:       0,
		Score:       0,
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	_, err := h.db.Exec(`INSERT INTO brands (id,user_id,name,industry,description,personality,values,tone,phase,score,created_at,updated_at)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
		brand.ID, brand.UserID, brand.Name, brand.Industry, brand.Description,
		pq.Array(brand.Personality), pq.Array(brand.Values), brand.Tone,
		brand.Phase, brand.Score, brand.CreatedAt, brand.UpdatedAt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ثبت برند"})
		return
	}

	c.JSON(http.StatusCreated, brand)
}

func (h *Handler) Get(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var brand models.Brand
	err := h.db.QueryRow(`SELECT id,user_id,name,industry,description,has_strategy,phase,score,tone,created_at,updated_at
		FROM brands WHERE user_id=$1 ORDER BY created_at DESC LIMIT 1`, userID).
		Scan(&brand.ID, &brand.UserID, &brand.Name, &brand.Industry, &brand.Description,
			&brand.HasStrategy, &brand.Phase, &brand.Score, &brand.Tone,
			&brand.CreatedAt, &brand.UpdatedAt)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "برندی یافت نشد"})
		return
	}
	c.JSON(http.StatusOK, brand)
}

func (h *Handler) Update(c *gin.Context) {
	userID, _ := c.Get("user_id")
	id := c.Param("id")
	var req models.BrandCreateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err := h.db.Exec(`UPDATE brands SET name=$1,industry=$2,description=$3,tone=$4,updated_at=$5
		WHERE id=$6 AND user_id=$7`,
		req.Name, req.Industry, req.Description, req.Tone, time.Now(), id, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در بروزرسانی"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "برند بروزرسانی شد"})
}

func (h *Handler) UpdatePhase(c *gin.Context) {
	id := c.Param("id")
	var body struct {
		Phase int `json:"phase" binding:"required,min=0,max=6"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err := h.db.Exec("UPDATE brands SET phase=$1, updated_at=$2 WHERE id=$3", body.Phase, time.Now(), id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در بروزرسانی فاز"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "فاز بروزرسانی شد", "phase": body.Phase})
}
