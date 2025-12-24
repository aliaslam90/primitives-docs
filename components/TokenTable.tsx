import { CopyButton } from "./CopyButton";

type Row = {
  name: string;   // like --space-sm
  value: string;  // like 8px
  copies: string[]; // code snippets dev will copy
};

export function TokenTable({
  title,
  description,
  rows,
}: {
  title: string;
  description: string;
  rows: Row[];
}) {
  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ margin: 0, fontSize: 20 }}>{title}</h2>
      <p style={{ marginTop: 8, color: "#4b5563" }}>{description}</p>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.6fr 1.2fr",
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
          <div>Copy code</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.6fr 1.2fr",
              padding: "12px",
              borderBottom: "1px solid #f1f5f9",
              alignItems: "center",
              gap: 12,
            }}
          >
            <code>{r.name}</code>
            <code>{r.value}</code>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {r.copies.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <code style={{ fontSize: 12, color: "#374151" }}>{c}</code>
                  <CopyButton text={c} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

