"use client";

import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "امیر رضایی",
    role: "مدیر سیستم",
    email: "amir@rosbrand.ir",
    status: "active",
  },
  {
    id: 2,
    name: "فاطمه نوری",
    role: "تحلیل‌گر",
    email: "fatemeh@rosbrand.ir",
    status: "active",
  },
  {
    id: 3,
    name: "حسین محمدی",
    role: "پشتیبانی",
    email: "hossein@rosbrand.ir",
    status: "active",
  },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    analysisExpiry: "30",
    aiEnabled: true,
    maintenanceMode: false,
    newRegistrations: true,
    analysisModule: true,
    billingModule: true,
  });
  const [saved, setSaved] = useState(false);

  function toggle(k: string) {
    setSettings((s) => ({ ...s, [k]: !s[k as keyof typeof s] }));
    setSaved(false);
  }

  async function handleSave() {
    await new Promise((r) => setTimeout(r, 600));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const Toggle = ({ k }: { k: string }) => (
    <button
      onClick={() => toggle(k)}
      style={{
        width: 44,
        height: 24,
        background: settings[k as keyof typeof settings]
          ? "#2E6B5E"
          : "rgba(255,255,255,.1)",
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        position: "relative",
        transition: "background .2s",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "white",
          position: "absolute",
          top: 3,
          right: settings[k as keyof typeof settings] ? 3 : "auto",
          left: settings[k as keyof typeof settings] ? "auto" : 3,
          transition: "all .2s",
        }}
      />
    </button>
  );

  const cardStyle = {
    background: "#1C2333",
    border: "1px solid rgba(255,255,255,.06)",
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".85rem 0",
    borderBottom: "1px solid rgba(255,255,255,.05)",
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.75rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "white",
              marginBottom: ".2rem",
            }}
          >
            تنظیمات سیستم
          </h1>
          <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)" }}>
            کنترل کلی سیستم ROS
          </p>
        </div>
        <button
          onClick={handleSave}
          style={{
            padding: ".6rem 1.4rem",
            background: saved ? "#059669" : "#2E6B5E",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: ".85rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background .3s",
          }}
        >
          {saved ? "✓ ذخیره شد" : "ذخیره تغییرات"}
        </button>
      </div>

      {/* System settings */}
      <div style={cardStyle}>
        <h2
          style={{
            fontSize: ".95rem",
            fontWeight: 700,
            color: "white",
            marginBottom: "1rem",
          }}
        >
          تنظیمات عمومی
        </h2>
        <div>
          {[
            {
              key: "aiEnabled",
              label: "فعال‌بودن موتور AI",
              desc: "تحلیل‌های هوش مصنوعی را فعال یا غیرفعال کنید",
            },
            {
              key: "newRegistrations",
              label: "ثبت‌نام کاربران جدید",
              desc: "امکان ثبت‌نام کاربران جدید",
            },
            {
              key: "maintenanceMode",
              label: "حالت تعمیر و نگهداری",
              desc: "سایت برای کاربران عادی غیرقابل دسترس می‌شود",
            },
          ].map((s) => (
            <div key={s.key} style={rowStyle}>
              <div>
                <div
                  style={{
                    fontSize: ".85rem",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: ".72rem",
                    color: "rgba(255,255,255,.35)",
                    marginTop: ".15rem",
                  }}
                >
                  {s.desc}
                </div>
              </div>
              <Toggle k={s.key} />
            </div>
          ))}
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <div>
              <div
                style={{ fontSize: ".85rem", color: "white", fontWeight: 500 }}
              >
                مدت اعتبار تحلیل (روز)
              </div>
              <div
                style={{
                  fontSize: ".72rem",
                  color: "rgba(255,255,255,.35)",
                  marginTop: ".15rem",
                }}
              >
                بعد از این مدت تحلیل منقضی می‌شود
              </div>
            </div>
            <input
              value={settings.analysisExpiry}
              onChange={(e) =>
                setSettings((s) => ({ ...s, analysisExpiry: e.target.value }))
              }
              type="number"
              style={{
                width: 70,
                padding: ".5rem .75rem",
                background: "#0F1117",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 8,
                fontSize: ".85rem",
                color: "white",
                outline: "none",
                textAlign: "center" as const,
              }}
            />
          </div>
        </div>
      </div>

      {/* Modules */}
      <div style={cardStyle}>
        <h2
          style={{
            fontSize: ".95rem",
            fontWeight: 700,
            color: "white",
            marginBottom: "1rem",
          }}
        >
          ماژول‌ها
        </h2>
        {[
          { key: "analysisModule", label: "ماژول تحلیل برند" },
          { key: "billingModule", label: "ماژول پرداخت و اشتراک" },
        ].map((m, i) => (
          <div
            key={m.key}
            style={{
              ...rowStyle,
              borderBottom:
                i === 0 ? "1px solid rgba(255,255,255,.05)" : "none",
            }}
          >
            <div style={{ fontSize: ".85rem", color: "white" }}>{m.label}</div>
            <Toggle k={m.key} />
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.1rem",
          }}
        >
          <h2 style={{ fontSize: ".95rem", fontWeight: 700, color: "white" }}>
            تیم داخلی
          </h2>
          <button
            style={{
              padding: ".4rem .85rem",
              background: "rgba(46,107,94,.2)",
              color: "#4A8C7C",
              border: "1px solid rgba(46,107,94,.3)",
              borderRadius: 6,
              fontSize: ".75rem",
              cursor: "pointer",
            }}
          >
            + افزودن عضو
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
          {teamMembers.map((m) => (
            <div
              key={m.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: ".85rem 1rem",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.05)",
                borderRadius: 8,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: ".85rem" }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    background: "rgba(46,107,94,.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4A8C7C",
                    fontWeight: 700,
                    fontSize: ".85rem",
                  }}
                >
                  {m.name[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: ".85rem",
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontSize: ".7rem",
                      color: "rgba(255,255,255,.35)",
                    }}
                  >
                    {m.email}
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".75rem" }}
              >
                <span
                  style={{
                    fontSize: ".72rem",
                    color: "rgba(255,255,255,.4)",
                    background: "rgba(255,255,255,.06)",
                    padding: ".2rem .65rem",
                    borderRadius: 100,
                  }}
                >
                  {m.role}
                </span>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#F87171",
                    cursor: "pointer",
                    fontSize: ".75rem",
                  }}
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
