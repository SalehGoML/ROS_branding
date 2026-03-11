"use client";

import { useState } from "react";

const transactions = [
  {
    id: 1,
    user: "علی احمدی",
    email: "ali@zoodex.com",
    plan: "حرفه‌ای",
    amount: "۴۹۰,۰۰۰",
    status: "success",
    date: "۱۴۰۳/۰۹/۰۱",
    gateway: "زرین‌پال",
  },
  {
    id: 2,
    user: "سارا موسوی",
    email: "sara@golnar.ir",
    plan: "استارتر",
    amount: "۱۹۰,۰۰۰",
    status: "success",
    date: "۱۴۰۳/۰۹/۰۱",
    gateway: "زرین‌پال",
  },
  {
    id: 3,
    user: "رضا کریمی",
    email: "reza@technopars.com",
    plan: "سازمانی",
    amount: "۲,۵۰۰,۰۰۰",
    status: "success",
    date: "۱۴۰۳/۰۸/۳۰",
    gateway: "ملت",
  },
  {
    id: 4,
    user: "مریم حسینی",
    email: "maryam@gmail.com",
    plan: "استارتر",
    amount: "۱۹۰,۰۰۰",
    status: "failed",
    date: "۱۴۰۳/۰۸/۲۸",
    gateway: "زرین‌پال",
  },
  {
    id: 5,
    user: "کامران نصیری",
    email: "kamran@atieh.com",
    plan: "حرفه‌ای",
    amount: "۴۹۰,۰۰۰",
    status: "suspicious",
    date: "۱۴۰۳/۰۸/۲۵",
    gateway: "ملت",
  },
  {
    id: 6,
    user: "نیلوفر رضایی",
    email: "niloofar@nika.ir",
    plan: "حرفه‌ای",
    amount: "۴۹۰,۰۰۰",
    status: "success",
    date: "۱۴۰۳/۰۸/۲۰",
    gateway: "زرین‌پال",
  },
];

const statusMap: Record<string, { label: string; bg: string; color: string }> =
  {
    success: { label: "موفق", bg: "rgba(52,211,153,.1)", color: "#34D399" },
    failed: { label: "ناموفق", bg: "rgba(239,68,68,.1)", color: "#F87171" },
    suspicious: { label: "مشکوک", bg: "rgba(245,158,11,.1)", color: "#FBBF24" },
  };

const planColor: Record<string, { bg: string; color: string }> = {
  استارتر: { bg: "rgba(107,114,128,.15)", color: "#9CA3AF" },
  حرفه‌ای: { bg: "rgba(46,107,94,.2)", color: "#4A8C7C" },
  سازمانی: { bg: "rgba(124,58,237,.2)", color: "#A78BFA" },
};

export default function AdminBillingPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = transactions.filter((t) => {
    const matchSearch = t.user.includes(search) || t.email.includes(search);
    const matchStatus = statusFilter === "all" || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalSuccess = transactions.filter(
    (t) => t.status === "success",
  ).length;
  const thStyle = {
    padding: ".65rem 1.1rem",
    textAlign: "right" as const,
    fontSize: ".7rem",
    fontWeight: 600 as const,
    color: "rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.02)",
    whiteSpace: "nowrap" as const,
  };
  const tdStyle = {
    padding: ".8rem 1.1rem",
    fontSize: ".8rem",
    color: "rgba(255,255,255,.7)",
    borderTop: "1px solid rgba(255,255,255,.04)",
    whiteSpace: "nowrap" as const,
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1.75rem",
          flexWrap: "wrap",
          gap: "1rem",
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
            مدیریت پرداخت‌ها
          </h1>
          <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)" }}>
            تراکنش‌ها و وضعیت اشتراک‌ها
          </p>
        </div>
        <button
          onClick={() => {
            const csv = filtered
              .map(
                (t) =>
                  `${t.user},${t.email},${t.plan},${t.amount},${t.status},${t.date}`,
              )
              .join("\n");
            const blob = new Blob(
              [`user,email,plan,amount,status,date\n${csv}`],
              { type: "text/csv" },
            );
            const el = document.createElement("a");
            el.href = URL.createObjectURL(blob);
            el.download = "billing.csv";
            el.click();
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".4rem",
            padding: ".6rem 1.1rem",
            background: "rgba(46,107,94,.2)",
            color: "#4A8C7C",
            border: "1px solid rgba(46,107,94,.3)",
            borderRadius: 8,
            fontSize: ".8rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          خروجی Excel
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {[
          { label: "تراکنش موفق", value: totalSuccess, color: "#34D399" },
          {
            label: "تراکنش مشکوک",
            value: transactions.filter((t) => t.status === "suspicious").length,
            color: "#FBBF24",
          },
          {
            label: "تراکنش ناموفق",
            value: transactions.filter((t) => t.status === "failed").length,
            color: "#F87171",
          },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#1C2333",
              border: "1px solid rgba(255,255,255,.06)",
              borderRadius: 10,
              padding: "1rem 1.25rem",
            }}
          >
            <div
              style={{ fontSize: "1.4rem", fontWeight: 800, color: s.color }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.35)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: ".75rem",
          marginBottom: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو نام یا ایمیل..."
          style={{
            padding: ".6rem 1rem",
            minWidth: 220,
            background: "#1C2333",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 8,
            fontSize: ".82rem",
            color: "white",
            outline: "none",
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: ".6rem .85rem",
            background: "#1C2333",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 8,
            fontSize: ".8rem",
            color: "rgba(255,255,255,.6)",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <option value="all">همه وضعیت‌ها</option>
          <option value="success">موفق</option>
          <option value="failed">ناموفق</option>
          <option value="suspicious">مشکوک</option>
        </select>
      </div>

      <div
        style={{
          background: "#1C2333",
          border: "1px solid rgba(255,255,255,.06)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {[
                  "#",
                  "کاربر",
                  "ایمیل",
                  "پلن",
                  "مبلغ (تومان)",
                  "وضعیت",
                  "تاریخ",
                  "درگاه",
                  "عملیات",
                ].map((h) => (
                  <th key={h} style={thStyle}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td style={{ ...tdStyle, color: "rgba(255,255,255,.3)" }}>
                    #{t.id}
                  </td>
                  <td style={{ ...tdStyle, color: "white", fontWeight: 500 }}>
                    {t.user}
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      direction: "ltr",
                      textAlign: "right" as const,
                    }}
                  >
                    {t.email}
                  </td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        fontSize: ".68rem",
                        fontWeight: 700,
                        padding: ".18rem .55rem",
                        borderRadius: 100,
                        ...planColor[t.plan],
                      }}
                    >
                      {t.plan}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 600, color: "white" }}>
                    {t.amount}
                  </td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        fontSize: ".68rem",
                        fontWeight: 600,
                        padding: ".18rem .55rem",
                        borderRadius: 100,
                        ...statusMap[t.status],
                      }}
                    >
                      {statusMap[t.status].label}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, color: "rgba(255,255,255,.35)" }}>
                    {t.date}
                  </td>
                  <td style={{ ...tdStyle, color: "rgba(255,255,255,.4)" }}>
                    {t.gateway}
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={{
                        padding: ".3rem .65rem",
                        background: "rgba(46,107,94,.15)",
                        color: "#4A8C7C",
                        border: "1px solid rgba(46,107,94,.2)",
                        borderRadius: 6,
                        fontSize: ".7rem",
                        cursor: "pointer",
                      }}
                    >
                      فاکتور
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
