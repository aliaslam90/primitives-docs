import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function OpacityPage() {
  const rows = Object.entries(tokens.opacity).map(([k, v]) => {
    const name = `--opacity-${k}`;
    const value = `${v}`;
    return {
      name,
      value,
      copies: [
        `opacity: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Opacity</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Opacity?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Use opacity tokens for disabled states, overlays and subtle UI emphasis—avoid random decimals.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              {["20", "40", "60", "80"].map((k) => (
                <div key={k} style={{ width: 180 }}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 8 }}>
                    opacity {k}
                  </div>
                  <div
                    style={{
                      height: 60,
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-blue-600)",
                      opacity: `var(--opacity-${k})`,
                    }}
                  />
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
            <code style={{ fontSize: 14 }}>/* Disabled state */</code>
            <CopyButton text="button:disabled {\n  opacity: var(--opacity-60);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`button:disabled {
  opacity: var(--opacity-60);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Opacity tokens"
        description="Use for disabled/overlay levels. Example: opacity: var(--opacity-60);"
        rows={rows}
      />
    </main>
  );
}
