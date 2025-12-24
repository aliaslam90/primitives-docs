import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function FontWeightPage() {
  const rows = Object.entries(tokens.fontWeight).map(([k, v]) => {
    const name = `--font-weight-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `font-weight: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Font weight</h1>
      <p style={{ color: "#4b5563" }}>
        Use consistent weights for hierarchy. Avoid "random boldness".
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
        {["400", "500", "600", "700", "800"].map((k) => (
          <div key={k} style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              <code>{`font-weight: var(--font-weight-${k})`}</code>
            </div>
            <div style={{ marginTop: 8, fontSize: 18, fontWeight: `var(--font-weight-${k})` as any }}>
              Weight {k} — iClosed Design System
            </div>
          </div>
        ))}
      </div>

      <TokenTable
        title="Font weight tokens"
        description="Use for typography weights. Example: font-weight: var(--font-weight-600);"
        rows={rows}
      />
    </main>
  );
}
