package models

import "time"

type Brand struct {
	ID             string    `db:"id" json:"id"`
	UserID         string    `db:"user_id" json:"user_id"`
	Name           string    `db:"name" json:"name"`
	Industry       string    `db:"industry" json:"industry"`
	Description    string    `db:"description" json:"description"`
	HasStrategy    bool      `db:"has_strategy" json:"has_strategy"`
	Phase          int       `db:"phase" json:"phase"` // 0-6
	Score          int       `db:"score" json:"score"`
	Personality    []string  `db:"personality" json:"personality"`
	Values         []string  `db:"values" json:"values"`
	Tone           string    `db:"tone" json:"tone"`
	CreatedAt      time.Time `db:"created_at" json:"created_at"`
	UpdatedAt      time.Time `db:"updated_at" json:"updated_at"`
}

type BrandCreateRequest struct {
	HasStrategy bool     `json:"has_strategy"`
	Name        string   `json:"name" binding:"required"`
	Industry    string   `json:"industry" binding:"required"`
	Description string   `json:"description"`
	Personality []string `json:"personality"`
	Values      []string `json:"values"`
	Tone        string   `json:"tone"`
}
