package config

import (
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	Port        string
	DatabaseURL string
	JWTSecret   string
	Env         string
	FrontendURL string
	SMTPHost    string
	SMTPPort    int
	SMTPUser    string
	SMTPPass    string
	SMTPFrom        string
	SMSIRApiKey string
	SMSIRLineNumber string
}

func Load() *Config {
	godotenv.Load()
	return &Config{
		Port:        getEnv("PORT", "8080"),
		DatabaseURL: getEnv("DATABASE_URL", "postgres://postgres:postgres@localhost:5432/ros?sslmode=disable"),
		JWTSecret:   getEnv("JWT_SECRET", "ros-secret-key-change-in-production"),
		Env:         getEnv("ENV", "development"),
		FrontendURL: getEnv("FRONTEND_URL", "http://localhost:3000"),
		SMTPHost:    getEnv("SMTP_HOST", "smtp.gmail.com"),
		SMTPPort:    587,
		SMTPUser:    getEnv("SMTP_USER", ""),
		SMTPPass:    getEnv("SMTP_PASS", ""),
		SMTPFrom:        getEnv("SMTP_FROM", ""),
		SMSIRApiKey: getEnv("SMSIR_API_KEY", ""),
		SMSIRLineNumber: getEnv("SMSIR_LINE_NUMBER", ""),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
