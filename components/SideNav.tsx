"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/playground", label: "Playground" },
  { href: "/primitives", label: "Overview" },

  { href: "/primitives/space", label: "Space" },
  { href: "/primitives/radius", label: "Radius" },
  { href: "/primitives/stroke", label: "Stroke" },
  { href: "/primitives/opacity", label: "Opacity" },

  { href: "/primitives/font-size", label: "Font size" },
  { href: "/primitives/font-weight", label: "Font weight" },
  { href: "/primitives/line-height", label: "Line height" },
  { href: "/primitives/letter-spacing", label: "Letter spacing" },

  { href: "/primitives/shadow", label: "Shadow" },
  { href: "/primitives/colors", label: "Colors" },
];

export function SideNav() {
  const [logoError, setLogoError] = useState(false);

  return (
    <aside
      style={{
        width: 220,
        borderRight: "1px solid #e5e7eb",
        padding: "20px 14px",
        position: "sticky",
        top: 0,
        height: "100vh",
        background: "#fff",
      }}
    >
      <Link href="/" style={{ display: "block", marginBottom: 16, textDecoration: "none" }}>
        {!logoError ? (
          <img
            src="/logo.png"
            alt="iClosed"
            style={{
              height: 32,
              width: "auto",
              objectFit: "contain",
            }}
            onError={() => setLogoError(true)}
          />
        ) : (
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>iClosed</div>
        )}
      </Link>
      
      <div style={{ borderBottom: "1px solid #e5e7eb", marginBottom: 16 }} />

      <div style={{ fontWeight: 700, marginBottom: 12 }}>Primitives</div>

      <nav style={{ display: "grid", gap: 8 }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid transparent",
              color: "#111827",
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div style={{ marginTop: 14, fontSize: 12, color: "#6b7280" }}>
        Copy ready code: <code>var(--token)</code>
      </div>
    </aside>
  );
}
