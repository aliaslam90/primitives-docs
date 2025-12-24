import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function FontWeightPage() {
  const rows = Object.entries(tokens.fontWeight).map(([k, v]) => {
    const name = `--font-weight-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `font-weight: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Font weight</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Font weight?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Use consistent weights for hierarchy. Avoid "random boldness".
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gap: "var(--space-md)" }}>
              {["400", "500", "600", "700", "800"].map((k) => (
                <div key={k}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    <code>{`font-weight: var(--font-weight-${k})`}</code>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: `var(--font-weight-${k})` as any }}>
                    Weight {k} — iClosed Design System
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
            <code style={{ fontSize: 14 }}>/* Heading */</code>
            <CopyButton text="h1 {\n  font-weight: var(--font-weight-700);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`h1 {
  font-weight: var(--font-weight-700);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Font weight tokens"
        description="Use for typography weights. Example: font-weight: var(--font-weight-600);"
        rows={rows}
      />
    </main>
  );
}
