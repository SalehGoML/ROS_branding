package sms

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

const smsirBaseURL = "https://api.sms.ir/v1"

type Service struct {
	apiKey     string
	lineNumber string
}

func NewService(apiKey, lineNumber string) *Service {
	return &Service{apiKey: apiKey, lineNumber: lineNumber}
}

func (s *Service) sendRequest(endpoint string, body interface{}) error {
	jsonBody, _ := json.Marshal(body)
	req, err := http.NewRequest("POST", smsirBaseURL+endpoint, bytes.NewBuffer(jsonBody))
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-api-key", s.apiKey)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return fmt.Errorf("sms.ir error: status %d", resp.StatusCode)
	}
	return nil
}

func (s *Service) SendOTP(phone, code string) error {
	body := map[string]interface{}{
		"mobile":     phone,
		"templateId": 100000,
		"parameters": []map[string]string{{"name": "Code", "value": code}},
	}
	return s.sendRequest("/send/verify", body)
}

func (s *Service) SendResetCode(phone, code string) error {
	return s.SendOTP(phone, code)
}
