package main

import (
	"log"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/ros-agency/backend/internal/auth"
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
		authHandler := auth.NewHandler(db, cfg.JWTSecret)
		authGroup := v1.Group("/auth")
		{
			authGroup.POST("/register", authHandler.Register)
			authGroup.POST("/login", authHandler.Login)
			authGroup.GET("/me", middleware.Auth(cfg.JWTSecret), authHandler.Me)
		}
	}

	log.Printf("🚀 ROS Backend running on port %s", cfg.Port)
	if err := r.Run(":" + cfg.Port); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
