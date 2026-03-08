import Link from "next/link";

const projects = [
  {
    slug: "rahkar-sanat",
    name: "راهکار صنعت",
    field: "اینترنت اشیا (IoT)",
    tags: ["هویت بصری", "طراحی لوگو", "ست اداری", "بروشور"],
    result: "هویت بصری یکپارچه برای ورود به بازار B2B",
    cover: "/portfolio/rahkar-sanat/cover.jpg",
    accent: "#003d71",
    accentLight: "#EEF2F8",
  },
];

export default function PortfolioSection() {
  return (
    <section style={{ background: "#1A1916", padding: "7rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem",
        }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              fontSize: ".72rem", fontWeight: 500,
              letterSpacing: ".12em", textTransform: "uppercase",
              color: "var(--c-primary-lt)", marginBottom: "1rem",
            }}>
              <span style={{ display: "block", width: 18, height: 2, background: "var(--c-primary-lt)", borderRadius: 2 }} />
              نمونه‌کارها
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700, lineHeight: 1.25,
              letterSpacing: "-.02em", color: "white",
            }}>
              برندهایی که با هم ساختیم
            </h2>
          </div>

          <Link href="/portfolio" style={{
            display: "flex", alignItems: "center", gap: ".5rem",
            fontSize: ".88rem", fontWeight: 500,
            color: "rgba(255,255,255,.6)",
            border: "1.5px solid rgba(255,255,255,.15)",
            borderRadius: "var(--r-sm)", padding: ".55rem 1.2rem",
          }}>
            همه پروژه‌ها ←
          </Link>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem",
        }}>

          {/* Placeholder اول — سمت چپ */}
          <div style={{
            background: "rgba(255,255,255,.03)",
            border: "1px dashed rgba(255,255,255,.1)",
            borderRadius: "var(--r-lg)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            minHeight: 360, gap: "1rem",
            padding: "2rem", textAlign: "center",
          }}>
            <div style={{
              width: 48, height: 48,
              background: "rgba(255,255,255,.06)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.3)", lineHeight: 1.6 }}>
              پروژه‌های بیشتر<br />به‌زودی اضافه می‌شوند
            </div>
          </div>

          {/* Projects — سمت راست */}
          {projects.map((p) => (
            <Link href={`/portfolio/${p.slug}`} key={p.slug} style={{
              display: "block", background: "white",
              borderRadius: "var(--r-lg)", overflow: "hidden",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,.06)",
            }}>
              <div style={{ height: 240, overflow: "hidden" }}>
                <img
                  src={p.cover} alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: ".72rem", color: p.accent, fontWeight: 500, marginBottom: ".4rem", letterSpacing: ".04em" }}>
                  {p.field}
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1916", marginBottom: ".75rem" }}>
                  {p.name}
                </div>
                <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: ".7rem", fontWeight: 500,
                      padding: ".2rem .65rem",
                      background: p.accentLight, color: p.accent,
                      borderRadius: 100,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: ".5rem",
                  padding: ".65rem .85rem",
                  background: p.accentLight, borderRadius: "var(--r-sm)",
                  fontSize: ".78rem", fontWeight: 500, color: p.accent,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  {p.result}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}