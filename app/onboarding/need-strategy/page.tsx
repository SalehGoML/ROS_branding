"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NeedStrategyPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
          linear-gradient(var(--c-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--c-border) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 560,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Progress */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: ".5rem", marginBottom: ".5rem" }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  height: 4,
                  flex: 1,
                  borderRadius: 2,
                  background: s <= 3 ? "var(--c-primary)" : "var(--c-border)",
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: ".75rem", color: "var(--c-text-light)" }}>
            مرحله ۳ از ۳ — تعیین مسیر
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            background: "var(--c-surface)",
            border: "1px solid var(--c-border)",
            borderRadius: "var(--r-xl)",
            padding: "2.5rem",
            boxShadow: "0 4px 32px rgba(0,0,0,.06)",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              background: "var(--c-primary-bg)",
              borderRadius: "var(--r-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="1.8"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              letterSpacing: "-.02em",
              marginBottom: ".6rem",
            }}
          >
            برای استفاده از سرویس، به یک سند برند نیاز دارید
          </h1>
          <p
            style={{
              fontSize: ".88rem",
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            سرویس ما بر اساس ویژگی‌های پایه برند مانند شخصیت، ارزش‌ها و لحن
            تحلیل انجام می‌دهد. اگر این ویژگی‌ها در قالب یک سند مشخص نشده باشند،
            نمی‌توان تحلیل دقیقی ارائه کرد.
          </p>

          {/* Options */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Option 1 — ساخت سند */}
            <div
              style={{
                background: "var(--c-primary)",
                borderRadius: "var(--r-lg)",
                padding: "1.75rem",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  right: "-10%",
                  width: 200,
                  height: 200,
                  background:
                    "radial-gradient(ellipse, rgba(255,255,255,.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".4rem",
                  padding: ".25rem .7rem",
                  background: "rgba(255,255,255,.15)",
                  borderRadius: 100,
                  fontSize: ".7rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                ✦ پیشنهادی
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: ".5rem",
                }}
              >
                ساخت سند برند با کمک هوش مصنوعی
              </h3>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "rgba(255,255,255,.8)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                با تکمیل یک فرم هدفمند، سیستم ROS برای برند شما یک سند اولیه
                طراحی می‌کند — سریع، دقیق و داده‌محور.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div
                  style={{ fontSize: ".82rem", color: "rgba(255,255,255,.7)" }}
                >
                  ⏱ حدود ۱۵ دقیقه
                </div>
                <Link
                  href="/onboarding/create-brand-profile"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".5rem",
                    padding: ".7rem 1.5rem",
                    background: "white",
                    color: "var(--c-primary)",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".88rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  ساخت سند برند ←
                </Link>
              </div>
            </div>

            {/* Option 2 — بعداً */}
            <div
              style={{
                background: "var(--c-surface-2)",
                border: "1px solid var(--c-border)",
                borderRadius: "var(--r-lg)",
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--c-text)",
                  marginBottom: ".4rem",
                }}
              >
                صرف‌نظر موقت
              </h3>
              <p
                style={{
                  fontSize: ".83rem",
                  color: "var(--c-text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                در حال حاضر نمی‌خواهید سند برند بسازید؟ همچنان می‌توانید وارد
                پنل شوید، اما امکانات تحلیل تا ساخت سند برند غیرفعال خواهند بود.
              </p>

              <button
                onClick={() => router.push("/dashboard")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".4rem",
                  padding: ".6rem 1.25rem",
                  background: "transparent",
                  border: "1.5px solid var(--c-border)",
                  borderRadius: "var(--r-sm)",
                  fontSize: ".85rem",
                  fontWeight: 500,
                  color: "var(--c-text-muted)",
                  cursor: "pointer",
                }}
              >
                بعداً انجام می‌دهم
              </button>
            </div>
          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".4rem",
            margin: "1.25rem auto 0",
            fontSize: ".8rem",
            color: "var(--c-text-light)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ← بازگشت به مرحله قبل
        </button>
      </div>
    </main>
  );
}
