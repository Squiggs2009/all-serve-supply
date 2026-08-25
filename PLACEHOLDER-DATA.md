# Placeholder data — replace before launch

Everything listed here is a **stand-in**, not real client data. The Phase 1
site is built and reviewable, but it must not go live until these are
replaced with figures and assets the client has confirmed.

---

## 1. Catalog prices — done, except one item

The 21-item catalog in `supplies.html` / `data/catalog.json` now uses real
client prices and descriptions (replacing the earlier 17 invented
placeholders). One item remains unresolved:

- **ASS-0020, Poly Gloves, Large — Food Service** (Gloves & Cleaning
  Supplies) has no confirmed price. It renders as **"Price: TBD"**
  (`.pending` class) in `supplies.html`, and `price: null` in
  `data/catalog.json`. Do not invent a number — get the real figure from
  the client and update both places (they are kept in sync by hand) once
  it's available.

## 2. Pack counts, materials and descriptions — done

Every item's `.item-description` now states the real material/format and
pack count the client provided. No longer placeholder text.

## 3. Contact details — almost done

In `contact.html`, the contact panel:

- Phone — **done.** Real number in place, `.pending` class removed.
- Business hours — **done.** Mon–Fri 8am–5pm, Sat 12–5pm, Sun closed.
- Email address — still a placeholder, marked `.pending`.

Replace the placeholder email text and remove `class="pending"` from that
`<dd>` once a real address is supplied.

> **Project rule:** the client's physical / supply address must **never**
> appear anywhere on this site — not in page copy, comments, `<meta>` tags,
> or schema markup. The mockups included an address field; it was removed
> deliberately. Do not add it back.

## 4. Order-request email address

`contact.html` carries `data-order-email="orders@example.com"` on the form.
`js/main.js` reads that attribute to build the `mailto:` link. Change the
attribute value — no JS edit needed.

## 5. Form submission mechanism — decision needed

Phase 1 has no backend, so the form does not post anywhere. On submit,
`js/main.js` validates the fields and opens the visitor's email client with
the details pre-filled. The confirmation panel says the message is *ready to
send*, not that it was sent — that wording is deliberate and should not be
softened while the mailto: approach is in place.

This works, but it depends on the visitor having a mail client configured,
and it exposes the destination address. Better options for launch:

- **Cloudflare Pages Forms** — native to the stated host, no third-party
  dependency, no address exposed. Recommended.
- A hosted form service (Formspree, Basin, etc.) — introduces a third-party
  dependency, which per `CLAUDE.md` needs sign-off first.

## 6. Product photography — done

- **Home hero — done.** `index.html` now uses a real photo
  (`images/gallery/hero.jpg`, resized/compressed to 1600px wide, ~180 KB —
  the client-supplied original was 5728×3819, ~3.4 MB, far larger than the
  hero slot ever renders).
- **Catalog items — 21 of 21 done.** Catalog images now live in
  category subfolders under `images/catalog/` (`food-containers/`,
  `cups-and-lids/`, `paper-bags/`, etc.) rather than flat in
  `images/catalog/`.
  - **Food Containers (6 of 6 — done):**
    - `White Foam Take-Out Container — 9×6×3"` uses
      `images/catalog/food-containers/foam-container.jpg`.
    - `White Foam Take-Out Container — 9×6×2.5"` uses
      `images/catalog/food-containers/stacked-foam-containers.jpg`.
    - `White Foam Hot Dog Container — 7×4×2" (125 ct)` uses
      `images/catalog/food-containers/hotdog-container.jpg`.
    - `White Foam Hot Dog Container — 7×4×2" (500 ct, bulk)` uses
      `images/catalog/food-containers/stacked-hotdog-container.jpg`
      (renamed from a typo'd client filename,
      `stacked-hotdof-contianer.jpg`).
    - `White Foam Square Take-Out Container, 1-Compartment` uses
      `images/catalog/food-containers/1-compartment-container.jpg`
      (renamed from `1-compartment-foam.jpg` for naming consistency
      with its siblings).
    - `White Foam Square Take-Out Container, 3-Compartment` uses
      `images/catalog/food-containers/3-compartment-container.jpg`.
    - All 6 resized to 700px on the long edge, ~21–61 KB each (client
      originals were 2–2.8 MB).
  - **Cups & Lids (8 of 8 — done):**
    - `32 oz Cup Kit — Cup, Lid & Straw` uses
      `images/catalog/cups-and-lids/32oz-cup-with-lids.jpg`. Its `src`
      had gone stale after the category-subfolder reorganization (still
      pointing at the old flat `images/catalog/32oz-cup-with-lids.jpg`
      path) — fixed. Supersedes an earlier photo,
      `images/catalog/plastic-cup.jpg`, now unreferenced — left in
      place, not deleted.
    - `Foam Cup` uses `images/catalog/cups-and-lids/foam-cups.jpg`.
    - `White Vented Lid — Hot Cups` uses
      `images/catalog/cups-and-lids/white-lids.jpg`.
    - `Boba Straws — Assorted Colors` uses
      `images/catalog/cups-and-lids/boba-straws.jpg`.
    - `Portion Cup — 1 oz` uses
      `images/catalog/cups-and-lids/portion-cup.jpg`.
    - `Portion Cup — 2 oz` uses
      `images/catalog/cups-and-lids/2oz-portion-cup.jpg`.
    - `Portion Cup Lid — Fits 0.5–1.25 oz` and
      `Portion Cup Lid — Fits 1.5–2.5 oz` both use
      `images/catalog/cups-and-lids/portion-cup-lids.jpg` (two lid-size
      listings sharing one representative photo, same pattern as the two
      Hot Dog Container pack sizes above).
    - All resized to 700px on the long edge, ~31–61 KB each (client
      originals were 2–3 MB).
  - **Paper Bags (3 of 3 — done):**
    - `Paper Bag — Size #2` uses
      `images/catalog/paper-bags/paperbag.jpg`.
    - `Paper Bag — Size #4` and `Paper Bag — Size #8` both use
      `images/catalog/paper-bags/paper-bag2.jpg` (two size listings
      sharing one representative photo, same pattern as above).
    - Both resized to 700px wide, ~38–83 KB each (client originals were
      2–3.2 MB).
  - **Beverages & Carriers (2 of 2 — done):**
    - `Juice Bottle — 16 oz PET, Tall Square` uses
      `images/catalog/beverages-and-carriers/white-bev-container.jpg`.
    - `Pulp Fiber 4-Cup Carrier` uses
      `images/catalog/beverages-and-carriers/cup-carrier.jpg`.
    - Both resized to 700px wide, ~33–51 KB each (client originals were
      3–4.2 MB).
  - **Gloves & Cleaning Supplies (2 of 2 — done):**
    - `Poly Gloves, Large — Food Service` uses
      `images/catalog/gloves-and-cleaning/poly-gloves.jpg`.
    - `Sanitizing Multi-Surface Wipes` uses
      `images/catalog/gloves-and-cleaning/sanitizing-wipes.jpg`. Note:
      the canister in this stock photo is labeled "100 WIPES," while our
      copy says "175 per canister" — representative photography, not
      the client's literal packaging (same as the fictional "Orange
      Glow" brand on the juice bottle photo above); not treated as an
      error.
    - Both resized to 700px wide, ~65–67 KB each (client originals were
      ~4.3–4.4 MB).

**All 21 catalog items now have real photos — catalog photography is complete.**

`.item-media` is styled `aspect-ratio: 1 / 1`, so every photo above slotted
in without any layout shift.

**Known follow-up, not yet done:** `data/catalog.json`'s `image` field for
each item still records placeholder filenames guessed before the client's
real photos and folder structure (`food-containers/`, `cups-and-lids/`,
etc.) existed — e.g. `images/catalog/foam-container-9x6x3.jpg` rather than
the real `images/catalog/food-containers/foam-container.jpg`. Since that
file is reference-only and not fetched by the live page, this doesn't
affect the site, but it should be brought back in sync with the real paths
above before it's relied on for anything.

## 7. Brand palette — done

`css/styles.css`'s `:root` block now uses the real logo's red rather than
the mockup's guessed one. `--color-accent` is the exact icon-back/tagline
red (`#b92f28`); the lighter/darker steps are a computed scale at the same
hue. The brighter icon-front red (`#ef2e32`) is deliberately not used as a
token — at that lightness, white button text drops to 4.12:1 and fails the
4.5:1 AA minimum, while `#b92f28` clears it at 6:1 — see the comment above
the `:root` block in `css/styles.css` for the full reasoning.

## 8. Out of scope for Phase 1

- `gallery.html` — listed as optional in `CLAUDE.md`, not built. A gallery
  with no photographs has nothing to show; revisit once images exist.
- Industrial supply line — `CLAUDE.md` puts it outside Phase 1. The mockup
  footer read "Food service & industrial supply"; the built footer says
  "Food service supply."
