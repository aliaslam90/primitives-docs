import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function RadiusPage() {
  const rows = Object.entries(tokens.radius).map(([k, v]) => {
    const name = `--radius-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `border-radius: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Radius</h1>
      <p style={{ color: "#4b5563" }}>
        Border radius tokens ensure corners stay consistent across components (buttons, cards, inputs, modals).
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["none", "sm", "md", "lg", "xl", "2xl", "full"].map((k) => (
          <div
            key={k}
            style={{
              width: 140,
              height: 90,
              border: "1px solid #e5e7eb",
              borderRadius: `var(--radius-${k})`,
              display: "grid",
              placeItems: "center",
              background: "#fff",
            }}
          >
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              {k} · <code>{`var(--radius-${k})`}</code>
            </div>
          </div>
        ))}
      </div>

      <TokenTable
        title="Radius tokens"
        description="Use for corners. Example: border-radius: var(--radius-md);"
        rows={rows}
      />
    </main>
  );
}
