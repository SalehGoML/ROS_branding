package models

import "time"

type ContactRequest struct {
	ID        string    `db:"id" json:"id"`
	Name      string    `db:"name" json:"name"`
	Email     string    `db:"email" json:"email"`
	Phone     string    `db:"phone" json:"phone"`
	Subject   string    `db:"subject" json:"subject"`
	Message   string    `db:"message" json:"message"`
	Status    string    `db:"status" json:"status"` // new | read | replied
	CreatedAt time.Time `db:"created_at" json:"created_at"`
}

type ContactForm struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Phone   string `json:"phone"`
	Subject string `json:"subject" binding:"required"`
	Message string `json:"message" binding:"required"`
}
