import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function LetterSpacingPage() {
  const rows = Object.entries(tokens.letterSpacing).map(([k, v]) => {
    const name = `--letter-spacing-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `letter-spacing: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Letter spacing</h1>
      <p style={{ color: "#4b5563" }}>
        Use letter-spacing tokens for headings/buttons to improve clarity and consistency.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
        {["tighter", "tight", "normal", "wide", "wider", "widest"].map((k) => (
          <div key={k} style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              <code>{`letter-spacing: var(--letter-spacing-${k})`}</code>
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, letterSpacing: `var(--letter-spacing-${k})` }}>
              BUTTON LABEL — {k}
            </div>
          </div>
        ))}
      </div>

      <TokenTable
        title="Letter spacing tokens"
        description="Use for button labels/headings. Example: letter-spacing: var(--letter-spacing-wide);"
        rows={rows}
      />
    </main>
  );
}
