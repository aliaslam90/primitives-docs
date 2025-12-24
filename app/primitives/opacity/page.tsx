import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function OpacityPage() {
  const rows = Object.entries(tokens.opacity).map(([k, v]) => {
    const name = `--opacity-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `opacity: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Opacity</h1>
      <p style={{ color: "#4b5563" }}>
        Use opacity tokens for disabled states, overlays and subtle UI emphasis—avoid random decimals.
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["20", "40", "60", "80"].map((k) => (
          <div key={k} style={{ width: 180, padding: 14, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>opacity {k}</div>
            <div style={{ marginTop: 10, height: 46, borderRadius: 12, background: "var(--color-blue-600)", opacity: `var(--opacity-${k})` }} />
          </div>
        ))}
      </div>

      <TokenTable
        title="Opacity tokens"
        description="Use for disabled/overlay levels. Example: opacity: var(--opacity-60);"
        rows={rows}
      />
    </main>
  );
}
