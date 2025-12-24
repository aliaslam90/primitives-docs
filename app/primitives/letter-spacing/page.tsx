import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function LetterSpacingPage() {
  const rows = Object.entries(tokens.letterSpacing).map(([k, v]) => {
    const name = `--letter-spacing-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `letter-spacing: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Letter spacing</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Letter spacing?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Use letter-spacing tokens for headings/buttons to improve clarity and consistency.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gap: "var(--space-md)" }}>
              {["tighter", "tight", "normal", "wide", "wider", "widest"].map((k) => (
                <div key={k}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    <code>{`letter-spacing: var(--letter-spacing-${k})`}</code>
                  </div>
                  <div style={{ fontWeight: 700, letterSpacing: `var(--letter-spacing-${k})` }}>
                    BUTTON LABEL — {k}
                  </div>
                </div>
              ))}
            </div>
          </DemoBlock>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Copy-paste code</h2>
        <div style={{ marginTop: 12, padding: 16, background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <code style={{ fontSize: 14 }}>/* Button label */</code>
            <CopyButton text="button {\n  letter-spacing: var(--letter-spacing-wide);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`button {
  letter-spacing: var(--letter-spacing-wide);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Letter spacing tokens"
        description="Use for button labels/headings. Example: letter-spacing: var(--letter-spacing-wide);"
        rows={rows}
      />
    </main>
  );
}
