import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function FontSizePage() {
  const rows = Object.entries(tokens.fontSize).map(([k, v]) => {
    const name = `--font-size-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `font-size: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Font size</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Font size?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Typography primitives use numeric values instead of labels (sm, md, lg) because typography needs precise scaling across devices and contexts.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gap: "var(--space-md)" }}>
              {["12", "14", "16", "20", "24"].map((k) => (
                <div key={k}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    <code>{`font-size: var(--font-size-${k})`}</code>
                  </div>
                  <div style={{ fontSize: `var(--font-size-${k})`, fontWeight: 700 }}>
                    The quick brown fox ({k}px)
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
            <code style={{ fontSize: 14 }}>/* Body text */</code>
            <CopyButton text="p {\n  font-size: var(--font-size-16);\n  line-height: var(--line-height-24);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Font size tokens"
        description="Use for typography sizes. Example: font-size: var(--font-size-14);"
        rows={rows}
      />
    </main>
  );
}
