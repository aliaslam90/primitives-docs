export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>iClosed Design Tokens</h1>
      <p style={{ color: "#4b5563" }}>
        Code-first primitives docs. Copy CSS variables and keep UI consistent.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10, maxWidth: 420 }}>
        <a href="/playground" style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>→ Playground</a>
        <a href="/primitives" style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>→ Primitives</a>
      </div>
    </main>
  );
}
