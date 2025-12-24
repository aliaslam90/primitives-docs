import { PreviewBlocks } from "@/components/PreviewBlocks";

export default function PlaygroundPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Playground</h1>
      <p style={{ color: "#4b5563" }}>
        Everything below is styled using <code>var(--token)</code>. Change values in <code>lib/tokens.ts</code> and refresh.
      </p>

      <div
        style={{
          marginTop: 16,
          padding: "var(--space-md)",
          borderRadius: "var(--radius-md)",
          border: "var(--stroke-xs) solid var(--color-gray-200)",
          background: "#f9fafb",
        }}
      >
        <strong>Demo moment:</strong>{" "}
        Change <code>space.sm</code> from <code>8</code> → <code>10</code> in <code>lib/tokens.ts</code>, refresh, and watch
        button padding + input padding + card spacing update everywhere.
      </div>

      <div style={{ marginTop: "var(--space-xl)" }}>
        <PreviewBlocks />
      </div>
    </main>
  );
}

