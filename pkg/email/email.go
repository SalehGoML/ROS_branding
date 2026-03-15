package email

import (
	"fmt"

	"gopkg.in/gomail.v2"
)

type Config struct {
	Host     string
	Port     int
	Username string
	Password string
	From     string
}

type Service struct {
	cfg Config
}

func NewService(cfg Config) *Service {
	return &Service{cfg: cfg}
}

func (s *Service) Send(to, subject, body string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", "ROS Agency <"+s.cfg.From+">")
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer(s.cfg.Host, s.cfg.Port, s.cfg.Username, s.cfg.Password)

	return d.DialAndSend(m)
}

func (s *Service) SendResetPassword(to, resetLink string) error {
	subject := "بازیابی رمز عبور - رُس"
	body := fmt.Sprintf(`
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head><meta charset="UTF-8"></head>
<body style="font-family: Tahoma, Arial, sans-serif; background: #f5f5f5; padding: 40px 0;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden;">
    <div style="background: #2E6B5E; padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 1.4rem;">رُس</h1>
      <p style="color: rgba(255,255,255,.7); margin: 4px 0 0; font-size: .85rem;">آژانس هوشمند برندینگ</p>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #1a1a1a; font-size: 1.1rem; margin-bottom: 12px;">بازیابی رمز عبور</h2>
      <p style="color: #555; line-height: 1.8; font-size: .9rem;">
        درخواست بازیابی رمز عبور برای حساب شما ثبت شد. برای تنظیم رمز جدید روی دکمه زیر کلیک کنید:
      </p>
      <div style="text-align: center; margin: 28px 0;">
        <a href="%s" style="background: #2E6B5E; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: .95rem; display: inline-block;">
          تنظیم رمز جدید
        </a>
      </div>
      <p style="color: #999; font-size: .8rem; line-height: 1.7;">
        این لینک تا ۱ ساعت معتبر است.<br>
        اگر این درخواست را شما ثبت نکرده‌اید، این ایمیل را نادیده بگیرید.
      </p>
    </div>
    <div style="background: #f9f9f9; padding: 16px; text-align: center; border-top: 1px solid #eee;">
      <p style="color: #bbb; font-size: .75rem; margin: 0;">© رُس | rosbrand.ir</p>
    </div>
  </div>
</body>
</html>`, resetLink)
	return s.Send(to, subject, body)
}

func (s *Service) SendWelcome(to, name string) error {
	subject := "خوش آمدید به رُس"
	body := fmt.Sprintf(`
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head><meta charset="UTF-8"></head>
<body style="font-family: Tahoma, Arial, sans-serif; background: #f5f5f5; padding: 40px 0;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden;">
    <div style="background: #2E6B5E; padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 1.4rem;">رُس</h1>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #1a1a1a; font-size: 1.1rem;">سلام %s عزیز 👋</h2>
      <p style="color: #555; line-height: 1.8; font-size: .9rem;">
        خوش آمدید به رُس — آژانس هوشمند برندینگ.<br>
        حساب شما با موفقیت ایجاد شد. همین الان می‌توانید وارد داشبورد شوید و تحلیل برند خود را شروع کنید.
      </p>
      <div style="text-align: center; margin: 28px 0;">
        <a href="%s/dashboard" style="background: #2E6B5E; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: .95rem; display: inline-block;">
          ورود به داشبورد
        </a>
      </div>
    </div>
  </div>
</body>
</html>`, name, "https://rosbrand.ir")
	return s.Send(to, subject, body)
}
