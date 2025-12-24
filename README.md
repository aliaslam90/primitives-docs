# Primitives Docs

Primer-style primitives documentation for your design tokens.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `lib/primitives.ts` - Single source of truth for all design tokens
- `lib/toCssVars.ts` - Utility to convert primitives to CSS variables
- `components/TokenStyleProvider.tsx` - Injects CSS variables into the page
- `components/PrimerTable.tsx` - Primer-style table component for displaying tokens
- `app/primitives/size/page.tsx` - Size primitives documentation page

## How It Works

1. Define your primitives in `lib/primitives.ts`
2. The `TokenStyleProvider` automatically generates and injects CSS variables
3. The documentation pages display tokens in Primer-style tables
4. Change values in `primitives.ts` and the site updates automatically

