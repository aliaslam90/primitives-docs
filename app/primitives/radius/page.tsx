import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function RadiusPage() {
  const rows = Object.entries(tokens.radius).map(([k, v]) => {
    const name = `--radius-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `border-radius: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Radius</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Radius?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Radius tokens control the roundness of UI elements such as buttons, inputs, and cards.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>When to use</h2>
        <ul style={{ marginTop: 12, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8 }}>
          <li><code>radius-sm</code> → inputs, small buttons</li>
          <li><code>radius-md</code> → default buttons, cards</li>
          <li><code>radius-lg</code> → modals, panels</li>
          <li><code>radius-full</code> → pills, avatars</li>
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
                    width: 120,
                    height: 80,
                    border: "1px solid var(--color-gray-300)",
                    borderRadius: `var(--radius-${k})`,
                    display: "grid",
                    placeItems: "center",
                    background: "white",
                    fontSize: "var(--font-size-12)",
                    color: "#6b7280",
                  }}
                >
                  radius-{k}
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
            <code style={{ fontSize: 14 }}>/* Card corners */</code>
            <CopyButton text=".card {\n  border-radius: var(--radius-md);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`.card {
  border-radius: var(--radius-md);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Radius tokens"
        description="Use for corners. Example: border-radius: var(--radius-md);"
        rows={rows}
      />
    </main>
  );
}
