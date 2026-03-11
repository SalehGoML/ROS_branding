"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/admin/dashboard",
    label: "داشبورد",
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  },
  {
    href: "/admin/users",
    label: "کاربران",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    href: "/admin/analysis",
    label: "تحلیل‌ها",
    icon: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    href: "/admin/brand-documents",
    label: "اسناد برند",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  },
  {
    href: "/admin/reports",
    label: "پیشنهادنامه‌ها",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    href: "/admin/billing",
    label: "پرداخت‌ها",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    href: "/admin/support",
    label: "پشتیبانی",
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    href: "/admin/content",
    label: "محتوا",
    icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
  },
  {
    href: "/admin/settings",
    label: "تنظیمات",
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0F1117" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: collapsed ? 64 : 220,
          background: "#161B27",
          borderLeft: "1px solid rgba(255,255,255,.06)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          transition: "width .2s ease",
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: collapsed ? "1.1rem .75rem" : "1.1rem 1.1rem",
            borderBottom: "1px solid rgba(255,255,255,.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
          }}
        >
          {!collapsed && (
            <div
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "#2E6B5E",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: ".8rem",
                    fontFamily: "serif",
                  }}
                >
                  R
                </span>
              </div>
              <div>
                <div
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    lineHeight: 1.2,
                  }}
                >
                  ROS
                </div>
                <div
                  style={{ color: "rgba(255,255,255,.3)", fontSize: ".62rem" }}
                >
                  Admin Panel
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed((c) => !c)}
            style={{
              width: 26,
              height: 26,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 6,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,.4)"
              strokeWidth="2"
            >
              <path d={collapsed ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: ".6rem .4rem", overflowY: "auto" }}>
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".65rem",
                  padding: collapsed ? ".65rem" : ".65rem .75rem",
                  justifyContent: collapsed ? "center" : "flex-start",
                  borderRadius: 8,
                  marginBottom: ".1rem",
                  background: active ? "rgba(46,107,94,.25)" : "transparent",
                  color: active ? "#4A8C7C" : "rgba(255,255,255,.45)",
                  textDecoration: "none",
                  fontSize: ".82rem",
                  fontWeight: active ? 600 : 400,
                  transition: "all .15s",
                  whiteSpace: "nowrap",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ flexShrink: 0 }}
                >
                  <path d={item.icon} />
                </svg>
                {!collapsed && item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div
          style={{
            padding: ".6rem .4rem",
            borderTop: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <Link
            href="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".65rem",
              padding: collapsed ? ".65rem" : ".65rem .75rem",
              justifyContent: collapsed ? "center" : "flex-start",
              borderRadius: 8,
              textDecoration: "none",
              color: "rgba(255,255,255,.3)",
              fontSize: ".8rem",
              whiteSpace: "nowrap",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            {!collapsed && "خروج از ادمین"}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main
        style={{
          flex: 1,
          marginRight: collapsed ? 64 : 220,
          transition: "margin-right .2s ease",
          minHeight: "100vh",
          color: "white",
        }}
      >
        {children}
      </main>
    </div>
  );
}

