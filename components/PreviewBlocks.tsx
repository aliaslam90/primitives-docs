export function PreviewBlocks() {
  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    padding: "var(--space-sm) var(--space-lg)",
    borderRadius: "var(--radius-md)",
    border: "var(--stroke-xs) solid var(--color-gray-300)",
    background: "var(--color-blue-600)",
    color: "white",
    boxShadow: "var(--shadow-sm)",
    fontSize: "var(--font-size-14)",
    fontWeight: "var(--font-weight-600)" as any,
    lineHeight: "var(--line-height-20)",
    letterSpacing: "var(--letter-spacing-normal)",
    cursor: "pointer",
  };

  const cardStyle: React.CSSProperties = {
    padding: "var(--space-lg)",
    borderRadius: "var(--radius-lg)",
    border: "var(--stroke-xs) solid var(--color-gray-200)",
    boxShadow: "var(--shadow-xs)",
    background: "white",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "var(--space-sm) var(--space-md)",
    borderRadius: "var(--radius-md)",
    border: "var(--stroke-xs) solid var(--color-gray-300)",
    outline: "none",
    fontSize: "var(--font-size-14)",
    lineHeight: "var(--line-height-20)",
  };

  return (
    <div style={{ display: "grid", gap: "var(--space-lg)" }}>
      <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
        <button style={buttonStyle}>Primary Button</button>
        <button
          style={{
            ...buttonStyle,
            background: "white",
            color: "var(--color-gray-900)",
          }}
        >
          Secondary Button
        </button>
      </div>

      <div style={cardStyle}>
        <div style={{ fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-700)" as any }}>
          Card title
        </div>
        <div style={{ marginTop: "var(--space-xs)", color: "#4b5563" }}>
          This card uses space, radius, stroke, shadow, font-size, and line-height tokens.
        </div>

        <div style={{ marginTop: "var(--space-md)" }}>
          <input style={inputStyle} placeholder="Input using tokens…" />
        </div>
      </div>
    </div>
  );
}

