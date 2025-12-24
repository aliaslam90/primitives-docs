"use client";

import { buildCssVars } from "@/lib/toCssVars";

export function TokensStyle() {
  const css = buildCssVars();
  return <style>{css}</style>;
}

