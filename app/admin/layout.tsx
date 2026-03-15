"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminGuard from "@/components/shared/AdminGuard";

const navItems = [
  { href: "/admin/dashboard", label: "داشبورد", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { href: "/admin/users", label: "کاربران", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { href: "/admin/analysis", label: "تحلیل‌ها", icon: "M18 20V10M12 20V4M6 20v-6" },
  { href: "/admin/support", label: "پشتیبانی", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  { href: "/admin/settings", label: "تنظیمات", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const sw = collapsed ? 64 : 220;

  return (
    <AdminGuard>
      <div style={{ display: "flex", minHeight: "100vh", background: "#0F1117" }}>
        {isMobile && mobileOpen && (
          <div onClick={() => setMobileOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", zIndex: 150 }} />
        )}
        <aside style={{ width: isMobile ? 220 : sw, background: "#161B27", borderLeft: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 200, transition: "transform .25s ease, width .2s ease", overflow: "hidden", transform: isMobile ? (mobileOpen ? "translateX(0)" : "translateX(100%)") : "translateX(0)" }}>
          <div style={{ padding: "1.1rem", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {(isMobile || !collapsed) && (
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <div style={{ width: 28, height: 28, background: "#2E6B5E", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontWeight: 800, fontSize: ".8rem" }}>R</span>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: ".85rem" }}>رُس</div>
                  <div style={{ color: "rgba(255,255,255,.3)", fontSize: ".62rem" }}>Admin Panel</div>
                </div>
              </div>
            )}
            {!isMobile && (
              <button onClick={() => setCollapsed(c => !c)} style={{ width: 26, height: 26, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 6, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2">
                  <path d={collapsed ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
                </svg>
              </button>
            )}
          </div>
          <nav style={{ flex: 1, padding: ".6rem .4rem", overflowY: "auto" }}>
            {navItems.map(item => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", gap: ".65rem", padding: (!isMobile && collapsed) ? ".65rem" : ".65rem .75rem", justifyContent: (!isMobile && collapsed) ? "center" : "flex-start", borderRadius: 8, marginBottom: ".1rem", background: active ? "rgba(46,107,94,.25)" : "transparent", color: active ? "#4A8C7C" : "rgba(255,255,255,.45)", textDecoration: "none", fontSize: ".82rem", fontWeight: active ? 600 : 400, whiteSpace: "nowrap" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
                    <path d={item.icon} />
                  </svg>
                  {(isMobile || !collapsed) && item.label}
                </Link>
              );
            })}
          </nav>
          <div style={{ padding: ".6rem .4rem", borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: ".65rem", padding: ".65rem .75rem", borderRadius: 8, textDecoration: "none", color: "rgba(255,255,255,.3)", fontSize: ".8rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
              {(isMobile || !collapsed) && "خروج از ادمین"}
            </Link>
          </div>
        </aside>
        <main style={{ flex: 1, marginRight: isMobile ? 0 : sw, transition: "margin-right .2s ease", minHeight: "100vh", color: "white" }}>
          {isMobile && (
            <div style={{ position: "sticky", top: 0, zIndex: 100, background: "#161B27", borderBottom: "1px solid rgba(255,255,255,.06)", padding: ".75rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: ".85rem" }}>رُس | ادمین</span>
              <button onClick={() => setMobileOpen(o => !o)} style={{ width: 34, height: 34, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2">
                  <path d={mobileOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
                </svg>
              </button>
            </div>
          )}
          {children}
        </main>
      </div>
    </AdminGuard>
  );
}
