# Project: All-Serve Supply Website

## What this is
Marketing/order-request website for a food truck & catering supply business.
Phase 1 build — 3–5 pages, no live payments, no CMS.

## Stack constraints (do not deviate without asking)
- Plain HTML/CSS/JS only — no frameworks (React, Vue, etc.), no build tools, no bundlers
- Single stylesheet: css/styles.css
- Hosting: Cloudflare (static)
- No backend, no database

## Design direction
- Mobile-first: design and build for ~375px width first, then scale up
- Desktop should feel more established/polished — this audience includes
  business owners (e.g. restaurants) evaluating credibility, not just mobile
  on-the-go customers. Don't just stretch the mobile layout — give desktop
  intentional use of the extra space (spacing, imagery, layout).
- Simple, functional, utility-focused — not a stylized/trendy design
- Fast load, obvious contact/order path, easy navigation are the priorities
- Color palette: TBD — pending client logo/brand assets. Do not invent a
  palette; ask before styling with color beyond neutrals.

## Catalog data
- Phase 1: catalog items are hardcoded directly into the page HTML
  (about.html or a dedicated catalog section) — NOT rendered dynamically,
  no fetch(), no JS-driven rendering
- data/catalog.json exists as a reference/documentation copy of the data
  shape for possible future use (e.g. if a payment system is added later)
  — it is not wired up to the page and should not be treated as live data
- Every catalog item MUST use the same HTML structure/class names/tag order
  as every other item — no one-off shortcuts on individual items. This is
  what keeps a future migration to dynamic rendering a simple mechanical
  change instead of a rebuild.
- Suggested per-item markup pattern:
  ```html
  <div class="catalog-item">
    <img src="images/catalog/[item].jpg" alt="[name]">
    <h3 class="item-name">[name]</h3>
    <p class="item-price">$[price] <span class="item-unit">/ [unit]</span></p>
    <p class="item-description">[description]</p>
  </div>
  ```
- Add a comment above the catalog section in HTML noting items are
  hardcoded for Phase 1, with data/catalog.json as the structured reference.
- 21 items total — restaurant/food-truck supply items only
  (industrial supply line is out of scope for Phase 1).

## Content rules
- English only — no bilingual content
- Contact form = order REQUEST only, not live checkout. Do not imply
  real-time payment or instant ordering anywhere in copy or UI.
- NEVER reference or publish the client's physical/supply address anywhere
  on the site, in any page, comment, metadata, or schema markup.

## File structure
```
index.html          Home
about.html           About / Supplies Catalog
contact.html         Contact / Order Request
gallery.html         (optional)
css/styles.css
js/main.js
data/catalog.json    (reference only — see Catalog data above)
images/logo/
images/catalog/
images/gallery/
```

## Workflow
- Use Plan Mode for new pages or new logic — propose the plan before
  writing files, don't just start generating
- Keep changes scoped to one page/feature at a time; don't refactor
  unrelated files without asking first
- Ask before introducing any dependency, library, or tool not already
  listed in this file
