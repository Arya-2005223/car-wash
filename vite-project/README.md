# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Shine Lane — Car Wash Website

A React + Vite frontend for a fictional car wash business, "Shine Lane."

## Stack

- React 18
- Vite
- React Router (client-side routing)
- Plain CSS Modules (no framework) — design tokens live in `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/       Reusable UI pieces (Header, Hero, Services, Pricing,
                     About, Gallery, Testimonials, ContactForm,
                     ContactSection, Footer, WaveDivider)
  pages/             Home.jsx, GalleryPage.jsx, ContactPage.jsx
  data/content.js    Placeholder copy: services, pricing, gallery, testimonials
  index.css          Design tokens (colors, type, spacing) + global resets
  App.jsx            Route definitions
  main.jsx           App entry point
```

## Notes

- **Routing**: `/` (full one-page layout with anchor sections for
  Services/Pricing/About), `/gallery` (full gallery), `/contact` (full
  contact page). Header nav adapts between the two.
- **Signature interaction**: the hero has a drag-to-reveal "squeegee" slider
  comparing a dirty vs. clean car — drag with mouse/touch, or focus it and
  use the arrow keys.
- **Contact form**: fully client-side validated (required fields, email
  format, minimum message length). No backend call is made; submitting a
  valid form just shows a success state. Wire up `handleSubmit` in
  `ContactForm.jsx` to your API/email service when ready.
- **Content**: all copy, prices, and stats in `src/data/content.js` are
  placeholders — swap in real business details.
- Respects `prefers-reduced-motion` and includes visible focus states.
