export function DemoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "var(--space-md)",
        border: "1px solid var(--color-gray-300)",
        borderRadius: "var(--radius-md)",
        background: "var(--color-gray-50)",
      }}
    >
      {children}
    </div>
  );
}

