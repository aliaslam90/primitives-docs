import { TokenTable } from "@/components/TokenTable";
import { PreviewBlocks } from "@/components/PreviewBlocks";
import { tokens } from "@/lib/tokens";

export default function SpacePage() {
  const rows = Object.entries(tokens.space).map(([k, v]) => {
    const name = `--space-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `padding: var(${name});`,
        `gap: var(${name});`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Space</h1>
      <p style={{ color: "#4b5563" }}>
        Space tokens control padding, margin and Auto Layout gaps. Use tokens instead of hardcoded px.
      </p>

      <div style={{ marginTop: 20 }}>
        <PreviewBlocks />
      </div>

      <TokenTable
        title="Space tokens"
        description="Use these for padding, margin, and gap. Example: padding: var(--space-sm) var(--space-lg);"
        rows={rows}
      />
    </main>
  );
}
