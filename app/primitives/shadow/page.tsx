import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function ShadowPage() {
  const rows = Object.entries(tokens.shadow).map(([k, v]) => {
    const name = `--shadow-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `box-shadow: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Shadow</h1>
      <p style={{ color: "#4b5563" }}>
        Shadow tokens define elevation levels. Replace values later to match iClosed UI exactly.
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["none", "xs", "sm", "md", "lg", "xl", "2xl"].map((k) => (
          <div
            key={k}
            style={{
              width: 220,
              padding: 16,
              borderRadius: "var(--radius-lg)",
              border: "1px solid #e5e7eb",
              boxShadow: `var(--shadow-${k})`,
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 700 }}>{k}</div>
            <div style={{ marginTop: 6, fontSize: 12, color: "#6b7280" }}>
              <code>{`box-shadow: var(--shadow-${k})`}</code>
            </div>
          </div>
        ))}
      </div>

      <TokenTable
        title="Shadow tokens"
        description="Use for elevation. Example: box-shadow: var(--shadow-md);"
        rows={rows}
      />
    </main>
  );
}
