import { TokenTable } from "@/components/TokenTable";
import { tokens } from "@/lib/tokens";

export default function StrokePage() {
  const rows = Object.entries(tokens.stroke).map(([k, v]) => {
    const name = `--stroke-${k}`;
    const value = `${v}px`;
    return {
      name,
      value,
      copies: [
        `var(${name})`,
        `border-width: var(${name});`,
        `border: var(${name}) solid var(--color-gray-300);`,
      ],
    };
  });

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Stroke</h1>
      <p style={{ color: "#4b5563" }}>
        Stroke tokens are used for borders and dividers. Keep border thickness consistent in all components.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10, maxWidth: 520 }}>
        {["xxs", "xs", "sm", "md", "lg"].map((k) => (
          <div key={k} style={{ display: "grid", gap: 6 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              {k} · <code>{`border: var(--stroke-${k}) solid var(--color-gray-300)`}</code>
            </div>
            <div style={{ height: 44, border: `var(--stroke-${k}) solid var(--color-gray-300)`, borderRadius: 10 }} />
          </div>
        ))}
      </div>

      <TokenTable
        title="Stroke tokens"
        description="Use for borders/dividers. Example: border: var(--stroke-xs) solid var(--color-gray-300);"
        rows={rows}
      />
    </main>
  );
}
