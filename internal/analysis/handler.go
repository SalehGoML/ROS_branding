package analysis

import (
	"encoding/json"
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

func (h *Handler) Create(c *gin.Context) {
	var req models.AnalysisCreateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	dataJSON, _ := json.Marshal(req.Data)

	analysis := models.Analysis{
		ID:        uuid.New().String(),
		BrandID:   req.BrandID,
		Channel:   req.Channel,
		Score:     req.Score,
		Data:      dataJSON,
		CreatedAt: time.Now(),
	}

	_, err := h.db.Exec(`INSERT INTO analyses (id,brand_id,channel,score,data,created_at)
		VALUES ($1,$2,$3,$4,$5,$6)`,
		analysis.ID, analysis.BrandID, analysis.Channel,
		analysis.Score, analysis.Data, analysis.CreatedAt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در ثبت تحلیل"})
		return
	}

	c.JSON(http.StatusCreated, analysis)
}

func (h *Handler) GetByBrand(c *gin.Context) {
	brandID := c.Param("brand_id")
	rows, err := h.db.Query(`SELECT id,brand_id,channel,score,data,created_at
		FROM analyses WHERE brand_id=$1 ORDER BY created_at DESC`, brandID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا در دریافت تحلیل‌ها"})
		return
	}
	defer rows.Close()

	var analyses []models.Analysis
	for rows.Next() {
		var a models.Analysis
		rows.Scan(&a.ID, &a.BrandID, &a.Channel, &a.Score, &a.Data, &a.CreatedAt)
		analyses = append(analyses, a)
	}
	c.JSON(http.StatusOK, analyses)
}

func (h *Handler) GetChannelScores(c *gin.Context) {
	brandID := c.Param("brand_id")
	rows, err := h.db.Query(`SELECT DISTINCT ON (channel) channel, score, data
		FROM analyses WHERE brand_id=$1 ORDER BY channel, created_at DESC`, brandID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "خطا"})
		return
	}
	defer rows.Close()

	var scores []models.ChannelScore
	for rows.Next() {
		var channel string
		var score int
		var dataBytes []byte
		rows.Scan(&channel, &score, &dataBytes)

		var data map[string]interface{}
		json.Unmarshal(dataBytes, &data)

		cs := models.ChannelScore{Channel: channel, Tone: score}
		if p, ok := data["personality"].(float64); ok { cs.Personality = int(p) }
		if t, ok := data["tone"].(float64); ok { cs.Tone = int(t) }
		if v, ok := data["values"].(float64); ok { cs.Values = int(v) }
		if score >= 70 { cs.Status = "good" } else if score >= 50 { cs.Status = "medium" } else { cs.Status = "bad" }
		scores = append(scores, cs)
	}
	c.JSON(http.StatusOK, scores)
}
