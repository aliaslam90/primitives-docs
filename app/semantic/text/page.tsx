"use client";

import { useState, useEffect } from "react";
import { semanticTextTokens } from "@/lib/semantic/text";
import { CopyButton } from "@/components/CopyButton";
import { DemoBlock } from "@/components/DemoBlock";
import { tokens } from "@/lib/tokens";

// Helper to get hex color from primitive reference
function getPrimitiveHex(primitiveRef: string): string {
  const [family, step] = primitiveRef.split("/");
  const familyKey = family.toLowerCase();
  const stepKey = step;
  
  const colorFamily = tokens.colors[familyKey as keyof typeof tokens.colors];
  if (colorFamily && typeof colorFamily === "object") {
    const stepValue = (colorFamily as Record<string, string>)[stepKey];
    return stepValue || "#000000";
  }
  return "#000000";
}

export default function SemanticTextPage() {
  const [demoOverride, setDemoOverride] = useState(false);
  const [demoState, setDemoState] = useState<"default" | "links" | "status">("default");

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Semantic Text Colors</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What are Semantic Text Colors?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Semantic text colors provide meaning-based color tokens that map to primitive palette values.
          They allow you to change the entire color system by updating primitive values, while maintaining semantic meaning.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Why Semantic Tokens?</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          Semantic tokens separate meaning from values. If you need to change your primary text color globally,
          you update one primitive value, and all semantic tokens that reference it update automatically.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Token Table</h2>
        <div style={{ marginTop: 12, border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 2fr",
              padding: "10px 12px",
              background: "#f9fafb",
              borderBottom: "1px solid #e5e7eb",
              fontSize: 12,
              color: "#6b7280",
              fontWeight: 600,
            }}
          >
            <div>Name</div>
            <div>Value</div>
            <div>Code</div>
          </div>

          {semanticTextTokens.map((token) => {
            const hexColor = getPrimitiveHex(token.primitiveRef);

            return (
              <div
                key={token.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr 2fr",
                  padding: "12px",
                  borderBottom: "1px solid #f1f5f9",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div>
                  <code style={{ fontSize: 14 }}>{token.cssVar}</code>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: hexColor,
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#6b7280" }}>{token.primitiveRef}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <code style={{ fontSize: 12, color: "#374151" }}>{token.value}</code>
                    <CopyButton text={token.value} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <code style={{ fontSize: 12, color: "#374151" }}>{`color: ${token.value};`}</code>
                    <CopyButton text={`color: ${token.value};`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Why & When to Use</h2>
        <div style={{ marginTop: 16, display: "grid", gap: 20 }}>
          {semanticTextTokens.map((token) => (
            <div key={token.name} style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
              <div style={{ marginBottom: 12 }}>
                <code style={{ fontSize: 14, fontWeight: 600 }}>{token.cssVar}</code>
              </div>
              <div style={{ marginBottom: 8 }}>
                <strong style={{ fontSize: 12, color: "#6b7280" }}>Why:</strong>
                <p style={{ margin: "4px 0 0 0", fontSize: 14, color: "#374151" }}>{token.why}</p>
              </div>
              <div style={{ marginBottom: 8 }}>
                <strong style={{ fontSize: 12, color: "#6b7280" }}>When to use:</strong>
                <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 14, color: "#374151" }}>
                  {token.whenToUse.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>
              </div>
              {token.avoid && (
                <div>
                  <strong style={{ fontSize: 12, color: "#6b7280" }}>Avoid:</strong>
                  <p style={{ margin: "4px 0 0 0", fontSize: 14, color: "#374151" }}>{token.avoid}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Demo Playground</h2>
        <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
          See semantic text colors in action. Switch between states and try the override demo.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <button
            onClick={() => setDemoState("default")}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: demoState === "default" ? "#f9fafb" : "white",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Default Text
          </button>
          <button
            onClick={() => setDemoState("links")}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: demoState === "links" ? "#f9fafb" : "white",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Links/Active
          </button>
          <button
            onClick={() => setDemoState("status")}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: demoState === "status" ? "#f9fafb" : "white",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Status Labels
          </button>
          <button
            onClick={() => setDemoOverride(!demoOverride)}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: demoOverride ? "#f9fafb" : "white",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            {demoOverride ? "Remove Override" : "Change Demo Value"}
          </button>
        </div>

        <div
          style={{
            ...(demoOverride && {
              "--color-text-active": "var(--color-blue-700)",
            } as React.CSSProperties),
          }}
        >
          <DemoBlock>
            {demoState === "default" && (
              <div style={{ display: "grid", gap: "var(--space-md)" }}>
                <div>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    Primary text
                  </div>
                  <p style={{ margin: 0, color: "var(--color-text-primary)", fontSize: "var(--font-size-16)" }}>
                    This is primary text using var(--color-text-primary)
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    Secondary text
                  </div>
                  <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: "var(--font-size-14)" }}>
                    This is secondary text using var(--color-text-secondary)
                  </p>
                </div>
              </div>
            )}

            {demoState === "links" && (
              <div style={{ display: "grid", gap: "var(--space-md)" }}>
                <div>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    Active link
                  </div>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "var(--color-text-active)",
                      textDecoration: "none",
                      fontSize: "var(--font-size-16)",
                    }}
                  >
                    Click here (active state)
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "var(--font-size-12)", color: "#6b7280", marginBottom: 4 }}>
                    Inverse text on dark background
                  </div>
                  <div
                    style={{
                      padding: "var(--space-md)",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-blue-600)",
                    }}
                  >
                    <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-16)" }}>
                      Inverse text on blue background
                    </span>
                  </div>
                </div>
              </div>
            )}

            {demoState === "status" && (
              <div style={{ display: "grid", gap: "var(--space-sm)" }}>
                <div>
                  <span style={{ color: "var(--color-text-info)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Info: System update available
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--color-text-success)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Success: Operation completed
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--color-text-warning)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Warning: Action required
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--color-text-danger)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Danger: Destructive action
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--color-text-error)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Error: Validation failed
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--color-text-accent)", fontSize: "var(--font-size-14)", fontWeight: 600 }}>
                    Accent: Special feature
                  </span>
                </div>
              </div>
            )}
          </DemoBlock>
        </div>

        {demoOverride && (
          <div style={{ marginTop: 12, padding: 12, background: "#f9fafb", borderRadius: 8, fontSize: 12, color: "#6b7280" }}>
            <strong>Override active:</strong> <code>--color-text-active</code> is temporarily set to{" "}
            <code>var(--color-blue-700)</code> instead of <code>var(--color-blue-600)</code>
          </div>
        )}
      </section>
    </main>
  );
}
