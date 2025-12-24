import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";
import { DemoBlock } from "@/components/DemoBlock";

export default function ColorsPage() {
  const families = Object.entries(tokens.colors);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Colors</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What are Color tokens?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Color tokens are raw palette values. They should be used directly for backgrounds, text, and borders.
          Developers copy CSS vars like <code>var(--color-gray-900)</code>.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-sm)" }}>
              {["900", "700", "500", "300", "100"].map((step) => (
                <div
                  key={step}
                  style={{
                    height: 60,
                    borderRadius: "var(--radius-md)",
                    background: `var(--color-gray-${step})`,
                    display: "grid",
                    placeItems: "center",
                    color: Number(step) >= 500 ? "white" : "#111827",
                    fontSize: "var(--font-size-12)",
                    fontWeight: "var(--font-weight-600)" as any,
                  }}
                >
                  {step}
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
            <code style={{ fontSize: 14 }}>/* Button colors */</code>
            <CopyButton text="button {\n  background-color: var(--color-blue-600);\n  color: var(--color-gray-50);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`button {
  background-color: var(--color-blue-600);
  color: var(--color-gray-50);
}`}
          </pre>
        </div>
      </section>

      <div style={{ marginTop: 32, display: "grid", gap: 18 }}>
        {families.map(([family, scale]) => {
          const steps = Object.entries(scale as Record<string, string>)
            .map(([k, v]) => [k, v] as const)
            .sort((a, b) => Number(b[0]) - Number(a[0])); // 900 -> 50

          return (
            <section key={family} style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "12px 14px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb", fontWeight: 700 }}>
                {family}
              </div>

              <div style={{ display: "grid" }}>
                {steps.map(([step, hex]) => {
                  const varName = `--color-${family}-${step}`;
                  const code = `var(${varName})`;

                  return (
                    <div
                      key={step}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr 220px",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 14px",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 8,
                            border: "1px solid rgba(0,0,0,0.08)",
                            background: hex,
                          }}
                        />
                        <div style={{ fontSize: 12, color: "#6b7280" }}>{step}</div>
                      </div>

                      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                        <code>{varName}</code>
                        <code style={{ color: "#6b7280" }}>{hex}</code>
                      </div>

                      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end" }}>
                        <code style={{ fontSize: 12 }}>{code}</code>
                        <CopyButton text={code} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
