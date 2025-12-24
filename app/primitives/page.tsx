export default function PrimitivesOverview() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Primitives</h1>
      <p style={{ color: "#4b5563" }}>
        These are raw, reusable tokens exposed as CSS variables. Developers copy <code>var(--token)</code> and your UI stays consistent.
      </p>

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
