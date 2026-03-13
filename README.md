# Tristan Parajes — Portfolio (Next.js)

HTML → Next.js 14 (App Router) + TypeScript conversion.
**Zero visual changes** — same CSS, same HTML structure, same JS logic.

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## File map

```
app/
  globals.css          ← Exact <style> block from original HTML
  layout.tsx           ← <head> meta + Google Fonts + GSAP CDN scripts
  page.tsx             ← Composes all sections in original body order

components/
  ui/
    LogoDefs.tsx       ← Hidden SVG <defs> (#tp-dark, #tp-light)
    FxLayer.tsx        ← #noise + .vline × 4 + #cur + #cur-ring
    Scripts.tsx        ← Entire original <script> block (client component)
  sections/
    Nav.tsx            ← .mob-nav + <nav> with hamburger
    Hero.tsx           ← .hero section (GSAP targets preserved)
    MarqueeStrip.tsx   ← .marquee-strip client name ticker
    About.tsx          ← .about section
    Work.tsx           ← .work section (asymmetric 12-col grid)
    Services.tsx       ← .services section
    Process.tsx        ← .process section
    Testimonials.tsx   ← .testimonials section
    Contact.tsx        ← .contact section + form
    Footer.tsx         ← <footer>
```

## Deploy

Push to GitHub → import in Vercel → zero config needed.
