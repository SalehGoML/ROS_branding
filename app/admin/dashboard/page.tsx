"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { adminAPI, AdminStats, AdminUser } from "@/lib/api";

const alertStyle: Record<string, { border: string; bg: string; color: string; icon: string }> = {
  warning: { border: "#F59E0B", bg: "rgba(245,158,11,.08)", color: "#F59E0B", icon: "⚠" },
  error:   { border: "#EF4444", bg: "rgba(239,68,68,.08)",  color: "#EF4444", icon: "✕" },
  info:    { border: "#3B82F6", bg: "rgba(59,130,246,.08)", color: "#3B82F6", icon: "ℹ" },
};

const planColor: Record<string, string> = {
  "استارتر": "#6B7280",
  "حرفه‌ای": "#2E6B5E",
  "سازمانی": "#7C3AED",
};

function toFa(n: number | string) {
  return String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}

function Skeleton({ w = "100%", h = 20 }: { w?: string | number; h?: number }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 6,
      background: "rgba(255,255,255,.06)",
      animation: "pulse 1.4s ease-in-out infinite",
    }} />
  );
}

export default function AdminDashboardPage() {
  const [stats, setStats]         = useState<AdminStats | null>(null);
  const [users, setUsers]         = useState<AdminUser[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [s, u] = await Promise.all([
          adminAPI.getStats(),
          adminAPI.getUsers({ limit: 5 }),
        ]);
        if (!cancelled) { setStats(s); setUsers(u.users); }
      } catch (e: unknown) {
        if (!cancelled) setError(e instanceof Error ? e.message : "خطای سرور");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const maxUsers = stats?.monthly_growth?.length
    ? Math.max(...stats.monthly_growth.map(d => d.users))
    : 1;

  const statCards = stats ? [
    { label: "کاربران",               value: toFa(stats.total_users.toLocaleString("en")),       icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { label: "برندها",                value: toFa(stats.total_brands.toLocaleString("en")),       icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
    { label: "تحلیل‌های انجام‌شده",   value: toFa(stats.total_analyses.toLocaleString("en")),   icon: "M18 20V10M12 20V4M6 20v-6" },
    { label: "تماس‌های جدید",         value: toFa(stats.new_contacts),                           icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6" },
  ] : [];

  const staticAlerts = [
    { id: "a1", type: "warning", text: "تحلیل‌های در صف انتظار",       href: "/admin/analysis" },
    { id: "a2", type: "info",    text: "درخواست‌های پشتیبانی بی‌پاسخ", href: "/admin/support"  },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)", marginBottom: ".25rem" }}>پنل مدیریت ROS</div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", letterSpacing: "-.02em" }}>داشبورد مدیریتی</h1>
      </div>

      {/* Error */}
      {error && (
        <div style={{ padding: ".9rem 1.2rem", marginBottom: "1.5rem", borderRadius: 8, background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)", color: "#F87171", fontSize: ".83rem" }}>
          ⚠ {error}
        </div>
      )}

      {/* Alerts */}
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem", marginBottom: "1.75rem" }}>
        {staticAlerts.filter(a => !dismissed.includes(a.id)).map(alert => {
          const s = alertStyle[alert.type];
          return (
            <div key={alert.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: ".75rem 1.1rem", background: s.bg, border: `1px solid ${s.border}22`, borderRight: `3px solid ${s.border}`, borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".65rem" }}>
                <span style={{ color: s.color, fontSize: ".85rem" }}>{s.icon}</span>
                <Link href={alert.href} style={{ fontSize: ".82rem", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>{alert.text}</Link>
              </div>
              <button onClick={() => setDismissed(d => [...d, alert.id])} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,.2)", fontSize: "1rem" }}>×</button>
            </div>
          );
        })}
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ background: "#1C2333", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: "1.25rem" }}>
                <Skeleton w={36} h={36} /><div style={{ marginTop: 12 }}><Skeleton h={28} w="60%" /></div><div style={{ marginTop: 6 }}><Skeleton h={14} w="80%" /></div>
              </div>
            ))
          : statCards.map(s => (
              <div key={s.label} style={{ background: "#1C2333", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ width: 36, height: 36, background: "rgba(46,107,94,.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ".75rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A8C7C" strokeWidth="1.8"><path d={s.icon} /></svg>
                </div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "white", marginBottom: ".2rem" }}>{s.value}</div>
                <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.4)" }}>{s.label}</div>
              </div>
            ))
        }
      </div>

      {/* Chart + Quick access */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.25rem", alignItems: "start" }}>
        <div style={{ background: "#1C2333", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: ".95rem", fontWeight: 700, color: "white" }}>رشد ماهانه کاربران</h2>
            <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)" }}>۱۴۰۳</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: ".5rem", height: 140 }}>
            {loading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} style={{ flex: 1, height: `${30 + i * 10}px`, background: "rgba(255,255,255,.06)", borderRadius: "3px 3px 0 0", animation: "pulse 1.4s ease-in-out infinite" }} />
                ))
              : (stats?.monthly_growth ?? []).map((d, i, arr) => (
                  <div key={d.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: ".3rem", height: "100%", justifyContent: "flex-end" }}>
                    <div style={{ width: "100%", height: `${(d.users / maxUsers) * 130}px`, background: i === arr.length - 1 ? "linear-gradient(180deg,#4A8C7C,#2E6B5E)" : "rgba(46,107,94,.35)", borderRadius: "3px 3px 0 0", transition: "height .4s ease" }} />
                    <span style={{ fontSize: ".55rem", color: "rgba(255,255,255,.25)", writingMode: "vertical-rl" }}>{d.month.slice(0, 3)}</span>
                  </div>
                ))
            }
          </div>
        </div>

        <div style={{ background: "#1C2333", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: "1.5rem" }}>
          <h2 style={{ fontSize: ".95rem", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>دسترسی سریع</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
            {[
              { label: "مدیریت کاربران",    href: "/admin/users",    value: stats ? toFa(stats.total_users) : null },
              { label: "تحلیل‌های ثبت‌شده", href: "/admin/analysis", value: stats ? toFa(stats.total_analyses) : null },
              { label: "تماس‌ها",           href: "/admin/contacts", value: null },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: ".7rem .85rem", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)", borderRadius: 8, textDecoration: "none" }}>
                <span style={{ fontSize: ".82rem", color: "rgba(255,255,255,.6)" }}>{item.label}</span>
                {loading || item.value === null
                  ? <Skeleton w={36} h={20} />
                  : <span style={{ fontSize: ".75rem", fontWeight: 700, padding: ".15rem .55rem", borderRadius: 100, background: "rgba(46,107,94,.2)", color: "#4A8C7C" }}>{item.value}</span>
                }
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent users table */}
      <div style={{ marginTop: "1.25rem", background: "#1C2333", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "1.1rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: ".95rem", fontWeight: 700, color: "white" }}>آخرین کاربران</h2>
          <Link href="/admin/users" style={{ fontSize: ".78rem", color: "#4A8C7C" }}>مشاهده همه ←</Link>
        </div>
        <div style={{ overflowX: "auto" }}>
          {loading ? (
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} h={18} />)}
            </div>
          ) : users.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "rgba(255,255,255,.3)", fontSize: ".85rem" }}>کاربری یافت نشد</div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,.02)" }}>
                  {["نام", "برند", "پلن", "وضعیت", "تاریخ عضویت", "عملیات"].map(h => (
                    <th key={h} style={{ padding: ".75rem 1.5rem", textAlign: "right", fontSize: ".72rem", fontWeight: 600, color: "rgba(255,255,255,.3)", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={u.id} style={{ borderTop: "1px solid rgba(255,255,255,.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,.01)" }}>
                    <td style={{ padding: ".85rem 1.5rem", fontSize: ".83rem", color: "white", fontWeight: 500 }}>{u.full_name}</td>
                    <td style={{ padding: ".85rem 1.5rem", fontSize: ".83rem", color: "rgba(255,255,255,.5)" }}>{u.brand_name ?? "—"}</td>
                    <td style={{ padding: ".85rem 1.5rem" }}>
                      {u.plan ? (
                        <span style={{ fontSize: ".7rem", fontWeight: 600, padding: ".2rem .6rem", borderRadius: 100, background: `${planColor[u.plan] ?? "#6B7280"}22`, color: planColor[u.plan] ?? "#6B7280" }}>{u.plan}</span>
                      ) : <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".75rem" }}>—</span>}
                    </td>
                    <td style={{ padding: ".85rem 1.5rem" }}>
                      <span style={{ fontSize: ".7rem", fontWeight: 600, padding: ".2rem .6rem", borderRadius: 100, background: u.is_verified ? "rgba(52,211,153,.1)" : "rgba(255,255,255,.06)", color: u.is_verified ? "#34D399" : "rgba(255,255,255,.3)" }}>
                        {u.is_verified ? "تأییدشده" : "تأییدنشده"}
                      </span>
                    </td>
                    <td style={{ padding: ".85rem 1.5rem", fontSize: ".78rem", color: "rgba(255,255,255,.35)" }}>
                      {new Date(u.created_at).toLocaleDateString("fa-IR")}
                    </td>
                    <td style={{ padding: ".85rem 1.5rem" }}>
                      <Link href={`/admin/users`} style={{ fontSize: ".75rem", color: "#4A8C7C", fontWeight: 500, textDecoration: "none" }}>مشاهده</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
