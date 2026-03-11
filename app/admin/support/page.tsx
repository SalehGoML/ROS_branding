"use client";

import { useState } from "react";

const tickets = [
  {
    id: 1,
    user: "علی احمدی",
    subject: "مشکل در بارگذاری سند برند",
    status: "open",
    priority: "high",
    assignee: null,
    date: "۱۴۰۳/۰۹/۱۵",
    messages: 2,
  },
  {
    id: 2,
    user: "سارا موسوی",
    subject: "سوال درباره پلن سازمانی",
    status: "answered",
    priority: "low",
    assignee: "تیم فروش",
    date: "۱۴۰۳/۰۹/۱۴",
    messages: 4,
  },
  {
    id: 3,
    user: "مریم حسینی",
    subject: "خطا در تحلیل اینستاگرام",
    status: "open",
    priority: "high",
    assignee: null,
    date: "۱۴۰۳/۰۹/۱۴",
    messages: 1,
  },
  {
    id: 4,
    user: "کامران نصیری",
    subject: "درخواست استرداد وجه",
    status: "open",
    priority: "medium",
    assignee: null,
    date: "۱۴۰۳/۰۹/۱۳",
    messages: 3,
  },
  {
    id: 5,
    user: "داود شریفی",
    subject: "حساب قفل شده — درخواست رفع",
    status: "closed",
    priority: "high",
    assignee: "پشتیبانی",
    date: "۱۴۰۳/۰۹/۱۲",
    messages: 6,
  },
  {
    id: 6,
    user: "نیلوفر رضایی",
    subject: "عدم دریافت ایمیل پیشنهادنامه",
    status: "open",
    priority: "medium",
    assignee: null,
    date: "۱۴۰۳/۰۹/۱۲",
    messages: 1,
  },
];

const statusMap: Record<string, { label: string; bg: string; color: string }> =
  {
    open: { label: "باز", bg: "rgba(239,68,68,.1)", color: "#F87171" },
    answered: {
      label: "پاسخ‌داده",
      bg: "rgba(52,211,153,.1)",
      color: "#34D399",
    },
    closed: {
      label: "بسته",
      bg: "rgba(255,255,255,.06)",
      color: "rgba(255,255,255,.3)",
    },
  };

const priorityMap: Record<string, { label: string; color: string }> = {
  high: { label: "فوری", color: "#F87171" },
  medium: { label: "متوسط", color: "#FBBF24" },
  low: { label: "کم", color: "#6B7280" },
};

export default function AdminSupportPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");

  const filtered = tickets.filter(
    (t) => statusFilter === "all" || t.status === statusFilter,
  );

  async function handleReply(id: number) {
    if (!reply.trim()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setReply("");
    setMsg(`پاسخ به تیکت #${id} ارسال شد.`);
    setTimeout(() => setMsg(""), 3000);
  }

  async function handleAssign(id: number) {
    setMsg(`تیکت #${id} به تیم پشتیبانی اختصاص یافت.`);
    setTimeout(() => setMsg(""), 3000);
  }

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
      <div style={{ marginBottom: "1.75rem" }}>
        <h1
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "white",
            marginBottom: ".2rem",
          }}
        >
          پشتیبانی کاربران
        </h1>
        <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)" }}>
          {tickets.filter((t) => t.status === "open").length} تیکت باز
        </p>
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
          {
            label: "باز",
            value: tickets.filter((t) => t.status === "open").length,
            color: "#F87171",
          },
          {
            label: "پاسخ‌داده",
            value: tickets.filter((t) => t.status === "answered").length,
            color: "#34D399",
          },
          {
            label: "بسته",
            value: tickets.filter((t) => t.status === "closed").length,
            color: "#6B7280",
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

      {msg && (
        <div
          style={{
            padding: ".65rem 1rem",
            marginBottom: "1rem",
            background: "rgba(52,211,153,.1)",
            border: "1px solid rgba(52,211,153,.2)",
            borderRadius: 8,
            fontSize: ".82rem",
            color: "#34D399",
          }}
        >
          {msg}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: ".5rem",
          marginBottom: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        {[
          ["all", "همه"],
          ["open", "باز"],
          ["answered", "پاسخ‌داده"],
          ["closed", "بسته"],
        ].map(([val, label]) => (
          <button
            key={val}
            onClick={() => setStatusFilter(val)}
            style={{
              padding: ".4rem .9rem",
              background:
                statusFilter === val
                  ? "rgba(46,107,94,.3)"
                  : "rgba(255,255,255,.04)",
              color: statusFilter === val ? "#4A8C7C" : "rgba(255,255,255,.4)",
              border: `1px solid ${statusFilter === val ? "rgba(46,107,94,.4)" : "rgba(255,255,255,.08)"}`,
              borderRadius: 100,
              fontSize: ".78rem",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
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
                  "موضوع",
                  "اولویت",
                  "وضعیت",
                  "مسئول",
                  "تاریخ",
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
                <>
                  <tr
                    key={t.id}
                    onClick={() => setSelected(selected === t.id ? null : t.id)}
                    style={{
                      cursor: "pointer",
                      background:
                        selected === t.id
                          ? "rgba(46,107,94,.08)"
                          : "transparent",
                    }}
                  >
                    <td style={{ ...tdStyle, color: "rgba(255,255,255,.3)" }}>
                      #{t.id}
                    </td>
                    <td style={{ ...tdStyle, color: "white", fontWeight: 500 }}>
                      {t.user}
                    </td>
                    <td
                      style={{
                        ...tdStyle,
                        maxWidth: 200,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {t.subject}
                    </td>
                    <td
                      style={{
                        ...tdStyle,
                        color: priorityMap[t.priority].color,
                        fontWeight: 600,
                        fontSize: ".75rem",
                      }}
                    >
                      {priorityMap[t.priority].label}
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
                    <td style={{ ...tdStyle, color: "rgba(255,255,255,.4)" }}>
                      {t.assignee ?? "—"}
                    </td>
                    <td style={{ ...tdStyle, color: "rgba(255,255,255,.3)" }}>
                      {t.date}
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: "flex", gap: ".4rem" }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAssign(t.id);
                          }}
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
                          اختصاص
                        </button>
                      </div>
                    </td>
                  </tr>
                  {selected === t.id && (
                    <tr key={`${t.id}-reply`}>
                      <td
                        colSpan={8}
                        style={{
                          padding: "1rem 1.5rem",
                          background: "rgba(46,107,94,.05)",
                          borderTop: "1px solid rgba(255,255,255,.04)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: ".82rem",
                            color: "rgba(255,255,255,.5)",
                            marginBottom: ".75rem",
                          }}
                        >
                          موضوع: {t.subject}
                        </div>
                        <div style={{ display: "flex", gap: ".75rem" }}>
                          <textarea
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="پاسخ خود را بنویسید..."
                            rows={3}
                            style={{
                              flex: 1,
                              padding: ".75rem",
                              background: "#0F1117",
                              border: "1px solid rgba(255,255,255,.1)",
                              borderRadius: 8,
                              fontSize: ".82rem",
                              color: "white",
                              resize: "vertical",
                              outline: "none",
                              fontFamily: "inherit",
                            }}
                          />
                          <button
                            onClick={() => handleReply(t.id)}
                            disabled={sending}
                            style={{
                              padding: ".75rem 1.25rem",
                              background: "#2E6B5E",
                              color: "white",
                              border: "none",
                              borderRadius: 8,
                              fontSize: ".82rem",
                              fontWeight: 600,
                              cursor: "pointer",
                              alignSelf: "flex-end",
                            }}
                          >
                            {sending ? "..." : "ارسال"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
