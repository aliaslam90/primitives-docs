import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function FontSizePage() {
  const rows = Object.entries(tokens.fontSize).map(([k, v]) => {
    const name = `--font-size-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `font-size: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Font size</h1>
      <p style={{ color: "#4b5563" }}>
        You're using numeric sizes (like Tailwind) so designers + devs can map to px exactly.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
        {["12", "14", "16", "20", "24", "32", "48"].map((k) => (
          <div key={k} style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              <code>{`font-size: var(--font-size-${k})`}</code>
            </div>
            <div style={{ marginTop: 8, fontSize: `var(--font-size-${k})`, fontWeight: 700 }}>
              The quick brown fox ({k}px)
            </div>
          </div>
        ))}
      </div>

      <TokenTable
        title="Font size tokens"
        description="Use for typography sizes. Example: font-size: var(--font-size-14);"
        rows={rows}
      />
    </main>
  );
}
