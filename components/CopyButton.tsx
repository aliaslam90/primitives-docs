"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(text);
    setDone(true);
    window.setTimeout(() => setDone(false), 900);
  }

  return (
    <button
      onClick={onCopy}
      style={{
        border: "1px solid #e5e7eb",
        background: "#fff",
        borderRadius: "8px",
        padding: "6px 10px",
        cursor: "pointer",
        fontSize: 12,
      }}
      title="Copy"
    >
      {done ? "Copied" : "Copy"}
    </button>
  );
}
