import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function LineHeightPage() {
  const rows = Object.entries(tokens.lineHeight).map(([k, v]) => {
    const name = `--line-height-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `line-height: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Line height</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Line height?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Line height tokens keep paragraphs consistent across different font sizes.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gap: "var(--space-md)" }}>
              {["16", "20", "24", "32"].map((k) => (
                <div key={k}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    <code>{`line-height: var(--line-height-${k})`}</code>
                  </div>
                  <p style={{ margin: 0, lineHeight: `var(--line-height-${k})` }}>
                    This is an example paragraph showing how line-height affects readability. (Token {k}px)
                  </p>
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
            <code style={{ fontSize: 14 }}>/* Paragraph */</code>
            <CopyButton text="p {\n  line-height: var(--line-height-24);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`p {
  line-height: var(--line-height-24);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Line height tokens"
        description="Use for readable text rhythm. Example: line-height: var(--line-height-24);"
        rows={rows}
      />
    </main>
  );
}
