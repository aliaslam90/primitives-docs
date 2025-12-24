import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function ShadowPage() {
  const rows = Object.entries(tokens.shadow).map(([k, v]) => {
    const name = `--shadow-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `box-shadow: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Shadow</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Shadow?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Shadow tokens represent elevation levels and visual hierarchy.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>When to use</h2>
        <ul style={{ marginTop: 12, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8 }}>
          <li><code>shadow-xs</code> → subtle borders replacement</li>
          <li><code>shadow-sm</code> → cards</li>
          <li><code>shadow-md</code> → dropdowns</li>
          <li><code>shadow-lg</code> → modals</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              {["sm", "md", "lg"].map((k) => (
                <div
                  key={k}
                  style={{
                    width: 180,
                    padding: "var(--space-md)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--color-gray-200)",
                    boxShadow: `var(--shadow-${k})`,
                    background: "#fff",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "var(--font-size-14)" }}>shadow-{k}</div>
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
            <code style={{ fontSize: 14 }}>/* Card elevation */</code>
            <CopyButton text=".card {\n  box-shadow: var(--shadow-md);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`.card {
  box-shadow: var(--shadow-md);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Shadow tokens"
        description="Use for elevation. Example: box-shadow: var(--shadow-md);"
        rows={rows}
      />
    </main>
  );
}
