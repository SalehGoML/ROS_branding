package main

import (
	"log"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/ros-agency/backend/internal/auth"
	"github.com/ros-agency/backend/pkg/sms"
	"github.com/ros-agency/backend/internal/analysis"
	"github.com/ros-agency/backend/internal/brand"
	"github.com/ros-agency/backend/internal/contact"
	"github.com/ros-agency/backend/internal/config"
	"github.com/ros-agency/backend/internal/database"
	"github.com/ros-agency/backend/internal/middleware"
)

func main() {
	cfg := config.Load()

	if cfg.Env == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	db := database.Connect(cfg.DatabaseURL)

	// SMS service
	var smsService *sms.Service
	if cfg.SMSIRApiKey != "" {
		smsService = sms.NewService(cfg.SMSIRApiKey, cfg.SMSIRLineNumber)
	}
	database.RunMigrations(db)

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{cfg.FrontendURL},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok", "service": "ROS Backend"})
	})

	v1 := r.Group("/api/v1")
	{
		// Auth
		authHandler := auth.NewHandler(db, cfg.JWTSecret, smsService)
		authGroup := v1.Group("/auth")
		{
			authGroup.POST("/register", authHandler.Register)
			authGroup.POST("/login", authHandler.Login)
			authGroup.GET("/me", middleware.Auth(cfg.JWTSecret), authHandler.Me)
			authGroup.POST("/otp/send", authHandler.SendOTP)
			authGroup.POST("/otp/verify", authHandler.VerifyOTP)
		}
		// Contact
		contactHandler := contact.NewHandler(db)
		v1.POST("/contact", contactHandler.Submit)

		// Brand (protected)
		brandHandler := brand.NewHandler(db)
		brandGroup := v1.Group("/brands")
		brandGroup.Use(middleware.Auth(cfg.JWTSecret))
		{
			brandGroup.POST("", brandHandler.Create)
			brandGroup.GET("/me", brandHandler.Get)
			brandGroup.PUT("/:id", brandHandler.Update)
			brandGroup.PUT("/:id/phase", brandHandler.UpdatePhase)
		}

		// Analysis (protected)
		analysisHandler := analysis.NewHandler(db)
		analysisGroup := v1.Group("/analyses")
		analysisGroup.Use(middleware.Auth(cfg.JWTSecret))
		{
			analysisGroup.POST("", analysisHandler.Create)
			analysisGroup.GET("/brand/:brand_id", analysisHandler.GetByBrand)
			analysisGroup.GET("/brand/:brand_id/scores", analysisHandler.GetChannelScores)
		}

		// Admin contact
		admin := v1.Group("/admin")
		admin.Use(middleware.Auth(cfg.JWTSecret), middleware.AdminOnly())
		{
			admin.GET("/contacts", contactHandler.List)
			admin.PUT("/contacts/:id/status", contactHandler.UpdateStatus)
		}
	}

	log.Printf("🚀 ROS Backend running on port %s", cfg.Port)
	if err := r.Run(":" + cfg.Port); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
