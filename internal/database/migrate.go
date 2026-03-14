package database

import (
	"log"
	"os"
	"github.com/jmoiron/sqlx"
)

func RunMigrations(db *sqlx.DB) {
	sql, err := os.ReadFile("migrations/001_init.sql")
	if err != nil {
		log.Fatalf("Migration file not found: %v", err)
	}
	if _, err := db.Exec(string(sql)); err != nil {
		log.Fatalf("Migration failed: %v", err)
	}
	log.Println("✓ Migrations applied")
}
