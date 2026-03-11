"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const industries = [
  "صنایع غذایی",
  "سلامت و بهداشت",
  "آموزش",
  "تکنولوژی",
  "خدمات مالی",
  "خرده‌فروشی",
  "ساختمان و مسکن",
  "حمل‌ونقل",
  "رسانه و سرگرمی",
  "سایر",
];

export default function BrandInfoPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    brandName: "",
    website: "",
    industry: "",
    hasStrategy: "",
  });
  const [loading, setLoading] = useState(false);

  function set(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit() {
    if (!form.brandName || !form.industry || !form.hasStrategy) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    if (form.hasStrategy === "yes") {
      router.push("/dashboard");
    } else {
      router.push("/onboarding/need-strategy");
    }
  }

  const inputStyle = {
    width: "100%",
    padding: ".85rem 1rem",
    background: "var(--c-surface-2)",
    border: "1px solid var(--c-border)",
    borderRadius: "var(--r-sm)",
    fontSize: ".92rem",
    color: "var(--c-text)",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const chipStyle = (selected: boolean) => ({
    padding: ".45rem .95rem",
    background: selected ? "var(--c-primary)" : "var(--c-surface-2)",
    color: selected ? "white" : "var(--c-text)",
    border: `1.5px solid ${selected ? "var(--c-primary)" : "var(--c-border)"}`,
    borderRadius: 100,
    fontSize: ".82rem",
    fontWeight: 500 as const,
    cursor: "pointer" as const,
    transition: "all .15s",
  });

  const isValid = form.brandName && form.industry && form.hasStrategy;

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
          maxWidth: 520,
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
                  background: s <= 2 ? "var(--c-primary)" : "var(--c-border)",
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: ".75rem", color: "var(--c-text-light)" }}>
            مرحله ۲ از ۳ — اطلاعات برند
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
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-.02em",
              marginBottom: ".4rem",
            }}
          >
            برند شما را بهتر بشناسیم
          </h1>
          <p
            style={{
              fontSize: ".88rem",
              color: "var(--c-text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            این اطلاعات به ما کمک می‌کند تحلیل دقیق‌تری از برند شما ارائه دهیم.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Brand name */}
            <div>
              <label
                style={{
                  fontSize: ".78rem",
                  fontWeight: 500,
                  color: "var(--c-text-muted)",
                  display: "block",
                  marginBottom: ".4rem",
                }}
              >
                نام برند <span style={{ color: "var(--c-primary)" }}>*</span>
              </label>
              <input
                value={form.brandName}
                onChange={(e) => set("brandName", e.target.value)}
                placeholder="مثال: زودکس، گل‌نار"
                style={inputStyle}
              />
            </div>

            {/* Website */}
            <div>
              <label
                style={{
                  fontSize: ".78rem",
                  fontWeight: 500,
                  color: "var(--c-text-muted)",
                  display: "block",
                  marginBottom: ".4rem",
                }}
              >
                وب‌سایت یا صفحه اینستاگرام
                <span
                  style={{
                    color: "var(--c-text-light)",
                    fontWeight: 400,
                    marginRight: ".3rem",
                  }}
                >
                  (اختیاری)
                </span>
              </label>
              <input
                value={form.website}
                onChange={(e) => set("website", e.target.value)}
                placeholder="www.brandname.com یا instagram.com/brandname"
                style={{ ...inputStyle, direction: "ltr" }}
              />
            </div>

            {/* Industry */}
            <div>
              <label
                style={{
                  fontSize: ".78rem",
                  fontWeight: 500,
                  color: "var(--c-text-muted)",
                  display: "block",
                  marginBottom: ".65rem",
                }}
              >
                حوزه فعالیت برند{" "}
                <span style={{ color: "var(--c-primary)" }}>*</span>
              </label>
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                {industries.map((ind) => (
                  <div
                    key={ind}
                    style={chipStyle(form.industry === ind)}
                    onClick={() => set("industry", ind)}
                  >
                    {ind}
                  </div>
                ))}
              </div>
            </div>

            {/* Has strategy */}
            <div>
              <label
                style={{
                  fontSize: ".78rem",
                  fontWeight: 500,
                  color: "var(--c-text-muted)",
                  display: "block",
                  marginBottom: ".65rem",
                }}
              >
                آیا برند شما دارای سند استراتژیک است؟{" "}
                <span style={{ color: "var(--c-primary)" }}>*</span>
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: ".75rem",
                }}
              >
                {[
                  { value: "yes", label: "بله", desc: "سند برند دارم" },
                  { value: "no", label: "خیر", desc: "هنوز سند ندارم" },
                ].map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => set("hasStrategy", opt.value)}
                    style={{
                      padding: "1rem",
                      background:
                        form.hasStrategy === opt.value
                          ? "var(--c-primary-bg)"
                          : "var(--c-surface-2)",
                      border: `1.5px solid ${form.hasStrategy === opt.value ? "var(--c-primary)" : "var(--c-border)"}`,
                      borderRadius: "var(--r-sm)",
                      cursor: "pointer",
                      transition: "all .15s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".95rem",
                        fontWeight: 600,
                        color:
                          form.hasStrategy === opt.value
                            ? "var(--c-primary)"
                            : "var(--c-text)",
                        marginBottom: ".2rem",
                      }}
                    >
                      {opt.label}
                    </div>
                    <div
                      style={{
                        fontSize: ".75rem",
                        color: "var(--c-text-muted)",
                      }}
                    >
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isValid || loading}
            style={{
              width: "100%",
              marginTop: "2rem",
              padding: ".9rem",
              background:
                isValid && !loading ? "var(--c-primary)" : "var(--c-border)",
              color: isValid && !loading ? "white" : "var(--c-text-light)",
              border: "none",
              borderRadius: "var(--r-sm)",
              fontSize: ".95rem",
              fontWeight: 700,
              cursor: isValid && !loading ? "pointer" : "not-allowed",
            }}
          >
            {loading ? "در حال پردازش..." : "ادامه ←"}
          </button>
        </div>
      </div>
    </main>
  );
}
