import { TokenTable } from "@/components/TokenTable";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function SpacePage() {
  const rows = Object.entries(tokens.space).map(([k, v]) => {
    const name = `--space-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `padding: var(${name});`,
        `margin: var(${name});`,
        `gap: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Space</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What is Space?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Space tokens define consistent spacing between elements such as padding, margins, and gaps.
          They prevent arbitrary spacing values and ensure layout rhythm stays consistent across the product.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Why Space tokens exist</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Without space tokens, spacing becomes inconsistent, hard to scale, and difficult to change globally.
          Space tokens allow teams to adjust spacing system-wide by changing a single value.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>When to use each space token</h2>
        <ul style={{ marginTop: 12, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8 }}>
          <li><code>space-xs</code> → icon gaps, tight inline elements</li>
          <li><code>space-sm</code> → buttons, form controls</li>
          <li><code>space-md</code> → cards, list items</li>
          <li><code>space-lg</code> → section spacing</li>
          <li><code>space-xl+</code> → page-level layout spacing</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Live demo</h2>
        <div style={{ marginTop: 12 }}>
          <DemoBlock>
            <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "var(--space-sm) var(--space-md)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-gray-300)",
                  background: "var(--color-blue-600)",
                  color: "white",
                  fontSize: "var(--font-size-14)",
                  fontWeight: "var(--font-weight-600)" as any,
                  cursor: "pointer",
                }}
              >
                Button
              </button>
              <button
                style={{
                  padding: "var(--space-sm) var(--space-md)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-gray-300)",
                  background: "white",
                  color: "var(--color-gray-900)",
                  fontSize: "var(--font-size-14)",
                  fontWeight: "var(--font-weight-600)" as any,
                  cursor: "pointer",
                }}
              >
                Button
              </button>
            </div>
          </DemoBlock>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Copy-paste code</h2>
        <div style={{ marginTop: 12, padding: 16, background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <code style={{ fontSize: 14 }}>/* Button spacing */</code>
            <CopyButton text="button {\n  padding: var(--space-sm) var(--space-md);\n  gap: var(--space-xs);\n}" />
          </div>
          <pre style={{ margin: 0, fontSize: 14, color: "#374151" }}>
{`button {
  padding: var(--space-sm) var(--space-md);
  gap: var(--space-xs);
}`}
          </pre>
        </div>
      </section>

      <TokenTable
        title="Space tokens"
        description="Use these for padding, margin, and gap. Example: padding: var(--space-sm) var(--space-lg);"
        rows={rows}
      />
    </main>
  );
}
