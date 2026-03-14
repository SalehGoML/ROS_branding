"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const industries = [
  "صنایع غذایی",
  "سلامت و بهداشت",
  "آموزش",
  "تکنولوژی",
  "خدمات ROSلی",
  "خرده‌فروشی",
  "ساختمان",
  "حمل‌ونقل",
  "رسانه",
  "سایر",
];
const tones = [
  "رسمی و حرفه‌ای",
  "دوستانه و صمیمی",
  "الهام‌بخش",
  "علمی و تخصصی",
  "شاد و پرانرژی",
  "آرام و مطمئن",
];
const personalities = [
  "نوآور",
  "قابل اعتماد",
  "پویا",
  "شفاف",
  "مراقب",
  "جسور",
  "خلاق",
  "متخصص",
  "انسانی",
  "الهام‌بخش",
];
const values = [
  "کیفیت",
  "صداقت",
  "مشتری‌محوری",
  "پایداری",
  "نوآوری",
  "احترام",
  "مسئولیت",
  "سادگی",
  "تعالی",
  "همکاری",
];

const steps = [
  { id: 1, title: "اطلاعات پایه" },
  { id: 2, title: "شخصیت برند" },
  { id: 3, title: "لحن و ارزش‌ها" },
  { id: 4, title: "تولید سند" },
];

export default function CreateBrandProfilePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [form, setForm] = useState({
    brandName: "",
    industry: "",
    founded: "",
    description: "",
    targetAudience: "",
    competitors: "",
    personality: [] as string[],
    tone: "",
    values: [] as string[],
    promise: "",
    essence: "",
  });

  function set(k: string, v: unknown) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function toggleArr(k: string, val: string) {
    const arr = form[k as keyof typeof form] as string[];
    set(k, arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  }

  async function handleGenerate() {
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 3500));
    setGenerating(false);
    setGenerated(true);
  }

  const inputStyle = {
    width: "100%",
    padding: ".8rem 1rem",
    background: "var(--c-surface-2)",
    border: "1px solid var(--c-border)",
    borderRadius: "var(--r-sm)",
    fontSize: ".9rem",
    color: "var(--c-text)",
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  };

  const chipStyle = (selected: boolean, color = "primary") => ({
    padding: ".4rem .9rem",
    background: selected
      ? color === "primary"
        ? "var(--c-primary)"
        : "#6366F1"
      : "var(--c-surface-2)",
    color: selected ? "white" : "var(--c-text-muted)",
    border: `1.5px solid ${selected ? (color === "primary" ? "var(--c-primary)" : "#6366F1") : "var(--c-border)"}`,
    borderRadius: 100,
    fontSize: ".8rem",
    fontWeight: 500 as const,
    cursor: "pointer" as const,
    transition: "all .15s",
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(90deg, var(--c-border) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 600,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: "var(--c-primary)",
                borderRadius: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: ".9rem",
                  fontFamily: "serif",
                }}
              >
                R
              </span>
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--c-text)",
              }}
            >
              ROS
            </span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{ display: "flex", gap: ".4rem", marginBottom: ".75rem" }}
          >
            {steps.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background:
                    s.id <= step ? "var(--c-primary)" : "var(--c-border)",
                  transition: "background .3s",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {steps.map((s) => (
              <div
                key={s.id}
                style={{
                  fontSize: ".68rem",
                  color:
                    s.id <= step ? "var(--c-primary)" : "var(--c-text-light)",
                  fontWeight: s.id === step ? 600 : 400,
                }}
              >
                {s.title}
              </div>
            ))}
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
          {/* Step 1 */}
          {step === 1 && (
            <>
              <h1
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: ".4rem",
                }}
              >
                اطلاعات پایه برند
              </h1>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "var(--c-text-muted)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                }}
              >
                اطلاعات اولیه‌ای که پایه سند برند شما را می‌سازند.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    نام برند{" "}
                    <span style={{ color: "var(--c-primary)" }}>*</span>
                  </label>
                  <input
                    value={form.brandName}
                    onChange={(e) => set("brandName", e.target.value)}
                    placeholder="مثال: زودکس، گل‌نار"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".5rem",
                    }}
                  >
                    حوزه فعالیت{" "}
                    <span style={{ color: "var(--c-primary)" }}>*</span>
                  </label>
                  <div
                    style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}
                  >
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
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    درباره برند{" "}
                    <span style={{ color: "var(--c-primary)" }}>*</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="چند جمله درباره محصول یا خدمت، بازار هدف و چیزی که برند شما را متمایز می‌کند..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      lineHeight: 1.7,
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "var(--c-text-muted)",
                        display: "block",
                        marginBottom: ".4rem",
                      }}
                    >
                      مخاطبان هدف
                    </label>
                    <input
                      value={form.targetAudience}
                      onChange={(e) => set("targetAudience", e.target.value)}
                      placeholder="مثال: مدیران میانی ۳۰-۴۵ ساله"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "var(--c-text-muted)",
                        display: "block",
                        marginBottom: ".4rem",
                      }}
                    >
                      رقبای اصلی
                    </label>
                    <input
                      value={form.competitors}
                      onChange={(e) => set("competitors", e.target.value)}
                      placeholder="نام رقبا را با کاما جدا کنید"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={
                  !form.brandName || !form.industry || !form.description
                }
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  padding: ".85rem",
                  background:
                    form.brandName && form.industry && form.description
                      ? "var(--c-primary)"
                      : "var(--c-border)",
                  color:
                    form.brandName && form.industry && form.description
                      ? "white"
                      : "var(--c-text-light)",
                  border: "none",
                  borderRadius: "var(--r-sm)",
                  fontSize: ".95rem",
                  fontWeight: 700,
                  cursor:
                    form.brandName && form.industry && form.description
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                مرحله بعد ←
              </button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h1
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: ".4rem",
                }}
              >
                شخصیت برند
              </h1>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "var(--c-text-muted)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                }}
              >
                برند شما چه صفاتی دارد؟ حداقل ۳ مورد انتخاب کنید.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                }}
              >
                {personalities.map((p) => (
                  <div
                    key={p}
                    style={chipStyle(form.personality.includes(p))}
                    onClick={() => toggleArr("personality", p)}
                  >
                    {p}
                  </div>
                ))}
              </div>

              {form.personality.length > 0 && (
                <div
                  style={{
                    padding: "1rem",
                    marginBottom: "1.5rem",
                    background: "var(--c-primary-bg)",
                    border: "1px solid rgba(46,107,94,.15)",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".82rem",
                    color: "var(--c-primary)",
                  }}
                >
                  انتخاب‌شده: {form.personality.join("، ")}
                </div>
              )}

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: ".8rem 1.5rem",
                    background: "transparent",
                    border: "1.5px solid var(--c-border)",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".9rem",
                    cursor: "pointer",
                    color: "var(--c-text-muted)",
                  }}
                >
                  ← قبلی
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={form.personality.length < 3}
                  style={{
                    flex: 1,
                    padding: ".85rem",
                    background:
                      form.personality.length >= 3
                        ? "var(--c-primary)"
                        : "var(--c-border)",
                    color:
                      form.personality.length >= 3
                        ? "white"
                        : "var(--c-text-light)",
                    border: "none",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    cursor:
                      form.personality.length >= 3 ? "pointer" : "not-allowed",
                  }}
                >
                  مرحله بعد ←
                </button>
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h1
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: ".4rem",
                }}
              >
                لحن و ارزش‌های برند
              </h1>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "var(--c-text-muted)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                }}
              >
                برند شما چطور صحبت می‌کند و چه چیزی برایش مهم است؟
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".6rem",
                    }}
                  >
                    لحن برند
                  </label>
                  <div
                    style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}
                  >
                    {tones.map((t) => (
                      <div
                        key={t}
                        style={chipStyle(form.tone === t, "purple")}
                        onClick={() => set("tone", t)}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".6rem",
                    }}
                  >
                    ارزش‌های برند (حداقل ۲ مورد)
                  </label>
                  <div
                    style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}
                  >
                    {values.map((v) => (
                      <div
                        key={v}
                        style={chipStyle(form.values.includes(v))}
                        onClick={() => toggleArr("values", v)}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 500,
                      color: "var(--c-text-muted)",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    قول برند{" "}
                    <span
                      style={{ color: "var(--c-text-light)", fontWeight: 400 }}
                    >
                      (اختیاری)
                    </span>
                  </label>
                  <input
                    value={form.promise}
                    onChange={(e) => set("promise", e.target.value)}
                    placeholder="چه قولی به مشتریان می‌دهید؟"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: ".8rem 1.5rem",
                    background: "transparent",
                    border: "1.5px solid var(--c-border)",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".9rem",
                    cursor: "pointer",
                    color: "var(--c-text-muted)",
                  }}
                >
                  ← قبلی
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!form.tone || form.values.length < 2}
                  style={{
                    flex: 1,
                    padding: ".85rem",
                    background:
                      form.tone && form.values.length >= 2
                        ? "var(--c-primary)"
                        : "var(--c-border)",
                    color:
                      form.tone && form.values.length >= 2
                        ? "white"
                        : "var(--c-text-light)",
                    border: "none",
                    borderRadius: "var(--r-sm)",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    cursor:
                      form.tone && form.values.length >= 2
                        ? "pointer"
                        : "not-allowed",
                  }}
                >
                  ساخت سند برند ✦
                </button>
              </div>
            </>
          )}

          {/* Step 4 — Generate */}
          {step === 4 && (
            <>
              {!generating && !generated && (
                <>
                  <div style={{ textAlign: "center", padding: "1rem 0" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        background: "var(--c-primary-bg)",
                        borderRadius: "50%",
                        margin: "0 auto 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--c-primary)"
                        strokeWidth="1.8"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h1
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        marginBottom: ".75rem",
                      }}
                    >
                      آماده ساخت سند برند
                    </h1>
                    <p
                      style={{
                        fontSize: ".88rem",
                        color: "var(--c-text-muted)",
                        lineHeight: 1.8,
                        maxWidth: 380,
                        margin: "0 auto 1.5rem",
                      }}
                    >
                      ROS AI بر اساس اطلاعاتی که دادید یک سند برند اولیه حرفه‌ای
                      می‌سازد. این فرایند حدود ۱۵ ثانیه طول می‌کشد.
                    </p>

                    {/* Summary */}
                    <div
                      style={{
                        padding: "1.25rem",
                        background: "var(--c-surface-2)",
                        border: "1px solid var(--c-border)",
                        borderRadius: "var(--r-lg)",
                        textAlign: "right",
                        marginBottom: "1.75rem",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: ".65rem",
                      }}
                    >
                      {[
                        { label: "برند", value: form.brandName },
                        { label: "حوزه", value: form.industry },
                        { label: "لحن", value: form.tone },
                        {
                          label: "ارزش‌ها",
                          value:
                            form.values.slice(0, 2).join("، ") +
                            (form.values.length > 2 ? "..." : ""),
                        },
                      ].map((d) => (
                        <div
                          key={d.label}
                          style={{
                            padding: ".6rem .75rem",
                            background: "var(--c-surface)",
                            borderRadius: "var(--r-sm)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: ".65rem",
                              color: "var(--c-text-light)",
                              marginBottom: ".2rem",
                            }}
                          >
                            {d.label}
                          </div>
                          <div style={{ fontSize: ".82rem", fontWeight: 600 }}>
                            {d.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                      onClick={() => setStep(3)}
                      style={{
                        padding: ".8rem 1.5rem",
                        background: "transparent",
                        border: "1.5px solid var(--c-border)",
                        borderRadius: "var(--r-sm)",
                        fontSize: ".9rem",
                        cursor: "pointer",
                        color: "var(--c-text-muted)",
                      }}
                    >
                      ← قبلی
                    </button>
                    <button
                      onClick={handleGenerate}
                      style={{
                        flex: 1,
                        padding: ".85rem",
                        background: "var(--c-primary)",
                        color: "white",
                        border: "none",
                        borderRadius: "var(--r-sm)",
                        fontSize: ".95rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      ✦ ساخت سند با ROS AI
                    </button>
                  </div>
                </>
              )}

              {generating && (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: "var(--c-primary)",
                      borderRadius: "50%",
                      margin: "0 auto 1.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      style={{ animation: "spin 1s linear infinite" }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: ".75rem",
                    }}
                  >
                    در حال ساخت سند برند...
                  </h2>
                  <p
                    style={{
                      fontSize: ".85rem",
                      color: "var(--c-text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    ROS AI داده‌های شما را تحلیل می‌کند
                    <br />و سند برند اولیه را آماده می‌کند.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5rem",
                      marginTop: "1.75rem",
                      maxWidth: 300,
                      margin: "1.75rem auto 0",
                    }}
                  >
                    {[
                      "تحلیل حوزه فعالیت...",
                      "تعریف شخصیت برند...",
                      "تنظیم لحن و ارزش‌ها...",
                      "تولید سند نهایی...",
                    ].map((step, i) => (
                      <div
                        key={step}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".65rem",
                          fontSize: ".8rem",
                          color: "var(--c-text-muted)",
                        }}
                      >
                        <div
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            background: "var(--c-primary-bg)",
                            border: "2px solid var(--c-primary)",
                            flexShrink: 0,
                          }}
                        />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {generated && (
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: "var(--c-primary)",
                      borderRadius: "50%",
                      margin: "0 auto 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      marginBottom: ".75rem",
                    }}
                  >
                    سند برند آماده شد!
                  </h2>
                  <p
                    style={{
                      fontSize: ".88rem",
                      color: "var(--c-text-muted)",
                      lineHeight: 1.8,
                      marginBottom: "2rem",
                    }}
                  >
                    سند برند اولیه {form.brandName} با موفقیت تولید شد.
                    می‌توانید آن را در داشبورد مشاهده و ویرایش کنید.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: ".75rem",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => router.push("/dashboard/brand")}
                      style={{
                        padding: ".8rem 1.75rem",
                        background: "var(--c-primary)",
                        color: "white",
                        border: "none",
                        borderRadius: "var(--r-sm)",
                        fontSize: ".9rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      مشاهده سند برند ←
                    </button>
                    <button
                      onClick={() => router.push("/dashboard")}
                      style={{
                        padding: ".8rem 1.4rem",
                        background: "transparent",
                        border: "1.5px solid var(--c-border)",
                        borderRadius: "var(--r-sm)",
                        fontSize: ".9rem",
                        cursor: "pointer",
                        color: "var(--c-text-muted)",
                      }}
                    >
                      رفتن به داشبورد
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
