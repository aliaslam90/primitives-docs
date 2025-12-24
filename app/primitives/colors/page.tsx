import { tokens } from "@/lib/tokens";
import { CopyButton } from "@/components/CopyButton";

export default function ColorsPage() {
  const families = Object.entries(tokens.colors);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Colors</h1>
      <p style={{ color: "#4b5563" }}>
        Raw palette tokens. Developers copy CSS vars like <code>var(--color-gray-900)</code>.
      </p>

      <div style={{ marginTop: 20, display: "grid", gap: 18 }}>
        {families.map(([family, scale]) => {
          const steps = Object.entries(scale as Record<string, string>)
            .map(([k, v]) => [k, v] as const)
            .sort((a, b) => Number(b[0]) - Number(a[0])); // 900 -> 50

          return (
            <section key={family} style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "12px 14px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb", fontWeight: 700 }}>
                {family}
              </div>

              <div style={{ display: "grid" }}>
                {steps.map(([step, hex]) => {
                  const varName = `--color-${family}-${step}`;
                  const code = `var(${varName})`;

                  return (
                    <div
                      key={step}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr 220px",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 14px",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 8,
                            border: "1px solid rgba(0,0,0,0.08)",
                            background: hex,
                          }}
                        />
                        <div style={{ fontSize: 12, color: "#6b7280" }}>{step}</div>
                      </div>

                      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                        <code>{varName}</code>
                        <code style={{ color: "#6b7280" }}>{hex}</code>
                      </div>

                      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end" }}>
                        <code style={{ fontSize: 12 }}>{code}</code>
                        <CopyButton text={code} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
