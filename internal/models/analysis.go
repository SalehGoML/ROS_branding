package models

import "time"

type Analysis struct {
	ID        string    `db:"id" json:"id"`
	BrandID   string    `db:"brand_id" json:"brand_id"`
	Channel   string    `db:"channel" json:"channel"`
	Score     int       `db:"score" json:"score"`
	Data      []byte    `db:"data" json:"data"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
}

type AnalysisCreateRequest struct {
	BrandID string                 `json:"brand_id" binding:"required"`
	Channel string                 `json:"channel" binding:"required"`
	Score   int                    `json:"score"`
	Data    map[string]interface{} `json:"data"`
}

type ChannelScore struct {
	Channel     string `json:"channel"`
	Personality int    `json:"personality"`
	Tone        int    `json:"tone"`
	Values      int    `json:"values"`
	Status      string `json:"status"`
}
