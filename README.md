# Improx Technologies — Business Process Outsourcing website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide React · Framer Motion

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        Root layout, Manrope font, page metadata
  page.tsx          Assembles the five sections
  globals.css       Tailwind v4 theme: palette, typography and utilities
components/site/    One component per section, plus shared pieces
content/site.ts     All copy, services and photo references
lib/                Image loader and small helpers
```

## Status

- Five sections: Hero, Our Services, Business Process Workflow, Why Improx Technologies, Enquiry Form.
- The workflow section holds a reserved area for the business architecture diagram (next stage).
- The enquiry form is a frontend layout only; submission is implemented in a later stage.
