import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function LineHeightPage() {
  const rows = Object.entries(tokens.lineHeight).map(([k, v]) => {
    const name = `--line-height-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `line-height: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Line height</h1>
      <p style={{ color: "#4b5563" }}>
        Line height tokens keep paragraphs consistent across different font sizes.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        {["16", "20", "24", "32", "40"].map((k) => (
          <div key={k} style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              <code>{`line-height: var(--line-height-${k})`}</code>
            </div>
            <p style={{ marginTop: 8, marginBottom: 0, lineHeight: `var(--line-height-${k})` }}>
              This is an example paragraph showing how line-height affects readability. (Token {k}px)
            </p>
          </div>
        ))}
      </div>

      <TokenTable
        title="Line height tokens"
        description="Use for readable text rhythm. Example: line-height: var(--line-height-24);"
        rows={rows}
      />
    </main>
  );
}
