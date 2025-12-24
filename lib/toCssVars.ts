import { tokens } from "./tokens";

type CssVarLine = string;

function px(n: number) {
  // Keeps decimals (for stroke 0.5 etc)
  return `${n}px`;
}

export function buildCssVars(): string {
  const lines: CssVarLine[] = [];

  // space
  Object.entries(tokens.space).forEach(([k, v]) => lines.push(`--space-${k}: ${px(v)};`));

  // radius
  Object.entries(tokens.radius).forEach(([k, v]) => lines.push(`--radius-${k}: ${px(v)};`));

  // stroke
  Object.entries(tokens.stroke).forEach(([k, v]) => lines.push(`--stroke-${k}: ${px(v)};`));

  // opacity (already 0..1)
  Object.entries(tokens.opacity).forEach(([k, v]) => lines.push(`--opacity-${k}: ${v};`));

  // typography
  Object.entries(tokens.fontSize).forEach(([k, v]) => lines.push(`--font-size-${k}: ${px(v)};`));
  Object.entries(tokens.fontWeight).forEach(([k, v]) => lines.push(`--font-weight-${k}: ${v};`));
  Object.entries(tokens.lineHeight).forEach(([k, v]) => lines.push(`--line-height-${k}: ${px(v)};`));
  Object.entries(tokens.letterSpacing).forEach(([k, v]) => lines.push(`--letter-spacing-${k}: ${px(v)};`));

  // shadow
  Object.entries(tokens.shadow).forEach(([k, v]) => lines.push(`--shadow-${k}: ${v};`));

  // colors
  Object.entries(tokens.colors).forEach(([family, scale]) => {
    Object.entries(scale as Record<string, string>).forEach(([step, hex]) => {
      lines.push(`--color-${family}-${step}: ${hex};`);
    });
  });

  return `:root{\n  ${lines.join("\n  ")}\n}`;
}
