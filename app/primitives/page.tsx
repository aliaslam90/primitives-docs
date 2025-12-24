export default function PrimitivesOverview() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Primitives</h1>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        These are raw, reusable tokens exposed as CSS variables. Developers copy <code>var(--token)</code> and your UI stays consistent.
      </p>

      <section style={{ marginTop: 24, padding: 20, border: "1px solid #e5e7eb", borderRadius: 12, background: "#f9fafb" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Mental model: Primitives vs Semantic tokens</h2>
        <p style={{ marginTop: 12, color: "#374151", lineHeight: 1.6 }}>
          <strong>Primitives are raw values.</strong> They should never be used for meaning.
          Meaning comes later through semantic tokens.
        </p>
        <div style={{ marginTop: 16, padding: 16, background: "white", borderRadius: 8, border: "1px solid #e5e7eb" }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, marginBottom: 4 }}>❌ Not recommended</div>
            <code style={{ fontSize: 14, color: "#374151" }}>padding: var(--space-md);</code>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, marginBottom: 4 }}>✅ Recommended</div>
            <code style={{ fontSize: 14, color: "#374151" }}>padding: var(--space-button-y);</code>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
              (You'll introduce <code>space-button-y</code> later as a semantic token.)
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, background: "#f9fafb" }}>
        <div style={{ fontWeight: 700 }}>Demo moment</div>
        <div style={{ marginTop: 6, color: "#374151" }}>
          Change <code>space.sm</code> from <code>8</code> → <code>10</code> inside <code>lib/tokens.ts</code>, refresh{" "}
          <code>/playground</code>, and spacing updates everywhere.
        </div>
      </div>

      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        <a href="/playground" style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>→ Open Playground</a>
        <a href="/primitives/space" style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>→ Start with Space</a>
      </div>
    </main>
  );
}
