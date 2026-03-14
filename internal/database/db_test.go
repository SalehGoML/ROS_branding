package database

import (
	"testing"
	"os"
)

func TestMigrationFileExists(t *testing.T) {
	_, err := os.ReadFile("../../migrations/001_init.sql")
	if err != nil {
		t.Errorf("migration file not found: %v", err)
	}
}

func TestConnectPanicsOnBadDSN(t *testing.T) {
	defer func() {
		if r := recover(); r == nil {
			t.Error("expected panic on bad DSN")
		}
	}()
	Connect("postgres://invalid:invalid@localhost:5432/notexist?sslmode=disable")
}
