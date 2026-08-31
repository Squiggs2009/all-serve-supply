# Placeholder data — replace before launch

Everything listed here is a **stand-in**, not real client data. The Phase 1
site is built and reviewable, but it must not go live until these are
replaced with figures and assets the client has confirmed.

---

## 1. Catalog prices — done

The 21-item catalog in `supplies.html` / `data/catalog.json` now uses real
client prices and descriptions (replacing the earlier 17 invented
placeholders). All 21 items have confirmed prices.

- **ASS-0020, Poly Gloves, S/M/L — Food Service** (Gloves & Cleaning
  Supplies) was the last item without a confirmed price; it's now
  **$16.99 / box** in both `supplies.html` and `data/catalog.json`. The
  item name/description were also updated from "Large" to "S/M/L" since
  the price covers all three sizes.
- **ASS-0003, Hot Dog Container, 125 ct** — corrected from $16.00 to
  **$19.00**.
- **ASS-0004, Hot Dog Container, 500 ct bulk** — briefly corrected to
  $42.00, then reverted back to **$43.00** (the client confirmed this is
  the correct, unchanged figure) in both `supplies.html` and
  `data/catalog.json`.
- **1-Compartment container** (ASS-0005 / ASS-0022) gained a second pack
  size: **$17.00 / 100 ct case**, alongside the existing $35.99 / 200 ct
  case.
- **3-Compartment container** (ASS-0006 / ASS-0023) gained a second pack
  size: **$19.00 / 100 ct case**, alongside the existing $42.99 / 200 ct
  case.

## 2. Pack counts, materials and descriptions — done

Every item's `.item-description` now states the real material/format and
pack count the client provided. No longer placeholder text.

## 3. Contact details — done

In `contact.html`, the contact panel:

- Phone — **done.** Real number in place, `.pending` class removed.
- Business hours — **done.** Mon–Fri 8am–5pm, Sat 12–5pm, Sun closed.
- Email address — **done.** `pedroalvarez@allservesupply.com`.

> **Project rule:** the client's physical / supply address must **never**
> appear anywhere on this site — not in page copy, comments, `<meta>` tags,
> or schema markup. The mockups included an address field; it was removed
> deliberately. Do not add it back.

## 4. Order-request email address — done

`contact.html`'s form now carries
`data-order-email="pedroalvarez@allservesupply.com"`. `js/main.js` reads
that attribute to build the `mailto:` link — no JS edit needed.

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
  - **Food Containers (6 of 6 photos — done; 5 cards on the page, see
    note below):**
    - `White Foam Take-Out Container — 9×6×3"` uses
      `images/catalog/food-containers/foam-container.jpg`.
    - `White Foam Take-Out Container — 9×6×2.5"` uses
      `images/catalog/food-containers/stacked-foam-containers.jpg`.
    - `White Foam Hot Dog Container — 7×4×2"` (125 ct and 500 ct bulk,
      merged into one card — see note below) uses
      `images/catalog/food-containers/stacked-hotdog-container.jpg`
      (renamed from a typo'd client filename,
      `stacked-hotdof-contianer.jpg`). The 125ct-only photo,
      `hotdog-container.jpg`, remains on disk but is no longer referenced.
    - `White Foam Square Take-Out Container, 1-Compartment` (100 ct and
      200 ct, merged into one card — see note below) uses
      `images/catalog/food-containers/1-compartment-container.jpg`
      (renamed from `1-compartment-foam.jpg` for naming consistency
      with its siblings).
    - `White Foam Square Take-Out Container, 3-Compartment` (100 ct and
      200 ct, merged into one card — see note below) uses
      `images/catalog/food-containers/3-compartment-container.jpg`.
    - All 6 resized to 700px on the long edge, ~21–61 KB each (client
      originals were 2–2.8 MB).
    - **Multi-price-line cards (one-off exception, 3 of 5 cards in this
      category):** the Hot Dog Container (125 ct / 500 ct bulk), the
      1-Compartment container (100 ct / 200 ct), and the 3-Compartment
      container (100 ct / 200 ct) each used to render — or would
      otherwise render — as two separate cards with two different prices
      sitting next to each other, which read as confusing. Per client
      request, each is one `.catalog-item` card with two stacked price
      lines, via an opt-in `.item-price-line` CSS class (see
      `css/styles.css`, near `.item-price`). These are the only catalog
      cards that deviate from the one-price-per-card structure
      `CLAUDE.md` otherwise requires — confirmed directly with the
      client, not an oversight. Current prices: Hot Dog Container $19.00
      / 125 ct case and $43.00 / 500 ct bulk case; 1-Compartment $17.00 /
      100 ct case and $35.99 / 200 ct case; 3-Compartment $19.00 / 100 ct
      case and $42.99 / 200 ct case. `data/catalog.json` still lists each
      pair as two separate SKU rows (item-003/item-004,
      item-005/item-022, item-006/item-023); that 1-row-per-SKU vs.
      1-card mismatch is expected, not a bug.
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
      `images/catalog/cups-and-lids/portion-cup-lids.jpg` (two separate
      cards sharing one representative photo — same pattern as the two
      Paper Bag sizes below; unlike the Hot Dog Container above, which was
      merged into a single card).
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
    - `Poly Gloves, S/M/L — Food Service` uses
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

## 8. Catalog item numbering + contact-page order selector — done

`supplies.html` now shows a visible `#N` number on every priced catalog
option (inside `.item-price`, immediately before the price value), and
`contact.html` gained a structured order-request section: 23 rows, each
with a quantity stepper (`+`/`−` buttons plus a number input, default 0),
grouped under the same 5 category headings as the catalog page.

**This is a new, separate #1–#23 numbering system — not the same as
`data/catalog.json`'s `id`/`sku` fields.** The catalog has 20
`.catalog-item` cards, but 3 of them (Hot Dog Container, 1-Compartment,
3-Compartment) each show two prices for two pack sizes, so numbering runs
by *priced option* (23 total), not by card:

```
#1  White Foam Take-Out Container, Hinged Lid — 9×6×3"
#2  White Foam Take-Out Container, Hinged Lid — 9×6×2.5"
#3  White Foam Hot Dog Container, Hinged Lid — 7×4×2" (125 ct)
#4  White Foam Hot Dog Container, Hinged Lid — 7×4×2" (500 ct, bulk)
#5  1-Compartment (100 ct)      #6  1-Compartment (200 ct)
#7  3-Compartment (100 ct)      #8  3-Compartment (200 ct)
#9–#11  Paper Bags (#2, #4, #8)
#12–#19 Cups & Lids (8 items)
#20–#21 Beverages & Carriers (2 items)
#22–#23 Gloves & Cleaning Supplies (2 items)
```

`data/catalog.json` keeps its own `id`/`sku` numbering (which, for the
split pack sizes, appends new SKUs at the end rather than inserting them
inline — see the note in that file's `_comment`). **Do not assume the two
numbering systems line up** — they're independent, for different
purposes.

This also means the top "Supplies Catalog · 21 Items" eyebrow and the
category-count badges (e.g. "5 items") on `supplies.html` are stale
against the real 23 priced options / 20 cards. This was already true
before this change (tracked in §6 above) and stays out of scope here —
the client's instruction for this feature was explicitly to leave catalog
counts/structure untouched.

**The order-request form** (`contact.html` / `js/main.js`): the stepper
list is the primary way to specify items now, but the original free-text
"Items needed and quantities" textarea (`id="items"`) still exists as an
optional fallback/supplement — relabeled "Anything not listed above".
Submitting with zero quantities selected **and** that box empty is
blocked with a visible error message (not a native `alert()`); picking
any quantity or typing in the fallback box clears it. The generated
`mailto:` body lists selected items as `#N — Name — Qty: X` lines, then
appends any fallback free text under the same heading, then the unrelated
"Anything else" notes box last — unchanged from before. Submission is
still 100% `mailto:`, no backend, no fetch — same Phase 1 constraint as
everywhere else on this page.

## 9. Out of scope for Phase 1

- `gallery.html` — listed as optional in `CLAUDE.md`, not built. A gallery
  with no photographs has nothing to show; revisit once images exist.
- Industrial supply line — `CLAUDE.md` puts it outside Phase 1. The mockup
  footer read "Food service & industrial supply"; the built footer says
  "Food service supply."
