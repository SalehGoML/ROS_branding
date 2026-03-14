package jwt

import (
	"testing"
)

func TestGenerateAndVerify(t *testing.T) {
	secret := "test-secret-key"
	token, err := Generate("user-123", "test@test.com", "user", secret)
	if err != nil {
		t.Fatalf("Generate failed: %v", err)
	}

	claims, err := Verify(token, secret)
	if err != nil {
		t.Fatalf("Verify failed: %v", err)
	}

	if claims.UserID != "user-123" {
		t.Errorf("expected user-123, got %s", claims.UserID)
	}
	if claims.Email != "test@test.com" {
		t.Errorf("expected test@test.com, got %s", claims.Email)
	}
}

func TestVerify_InvalidToken(t *testing.T) {
	_, err := Verify("invalid.token.here", "secret")
	if err == nil {
		t.Error("expected error for invalid token")
	}
}

func TestVerify_WrongSecret(t *testing.T) {
	token, _ := Generate("user-123", "test@test.com", "user", "secret1")
	_, err := Verify(token, "secret2")
	if err == nil {
		t.Error("expected error for wrong secret")
	}
}
