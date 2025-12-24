import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function StrokePage() {
  const rows = Object.entries(tokens.stroke).map(([k, v]) => {
    const name = `--stroke-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `border-width: var(${name});`,
        `border: var(${name}) solid var(--color-gray-300);`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Stroke</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Stroke?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Stroke tokens are used for borders and dividers. Keep border thickness consistent in all components.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "grid", gap: "var(--space-md)" }}>
              {["xxs", "xs", "sm", "md", "lg"].map((k) => (
                <div key={k} style={{ display: "grid", gap: 6 }}>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280" }}>
                    {k} · <code>{`border: var(--stroke-${k}) solid var(--color-gray-300)`}</code>
                  </div>
                  <div
                    style={{
                      height: 44,
                      border: `var(--stroke-${k}) solid var(--color-gray-300)`,
                      borderRadius: "var(--radius-md)",
                      background: "white",
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
            <code style={{ fontSize: 14 }}>/* Border */</code>
            <CopyButton text=".card {\n  border: var(--stroke-xs) solid var(--color-gray-300);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`.card {
  border: var(--stroke-xs) solid var(--color-gray-300);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Stroke tokens"
        description="Use for borders/dividers. Example: border: var(--stroke-xs) solid var(--color-gray-300);"
        rows={rows}
      />
    </main>
  );
}
