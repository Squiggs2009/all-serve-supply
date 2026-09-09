# Placeholder data — replace before launch

Everything listed here is a **stand-in**, not real client data. The Phase 1
site is built and reviewable, but it must not go live until these are
replaced with figures and assets the client has confirmed.

---

## 1. Catalog prices — done

The 26-card / 33-priced-option catalog in `supplies.html` / `data/catalog.json`
now uses real client prices and descriptions. All items have confirmed
prices.

- **ASS-0010, 32 oz Cup Kit** — corrected from $25.00 to **$7.99 / case**;
  description updated to explicitly list 50 cups, 50 lids and 50 straws
  per case (previously just said "cup, lid and straw included").
- **ASS-0011 / ASS-0024, "Foam Cup"** — this item was mislabeled; it's a
  4 oz. foam **food** container (for beans, sauces, small portions), not
  a drink cup. Renamed to "Dart 4J6 4oz. White Customizable Foam Food
  Container" and given a second pack-size option: **$3.99 / single
  pack**, alongside the existing $44.99 / 1,000 ct case. Photo swapped
  to `images/catalog/cups-and-lids/white-foam-cup.png` — a real shot of
  the container filled with a bean/grain salad, sourced specifically for
  this corrected item (replaces the old drink-cup photo,
  `foam-cups.jpg`, which has been deleted from disk).

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
- **Catalog items — 26 of 26 cards done (33 priced options).** Catalog
  images now live in category subfolders under `images/catalog/`
  (`food-containers/`, `cups-and-lids/`, `paper-bags/`, etc.) rather than
  flat in `images/catalog/`.
  - **Food Containers (10 of 10 cards done):**
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
    - Original 5 resized to 700px on the long edge, ~21–61 KB each
      (client originals were 2–2.8 MB).
    - `12" x 1000' Food Service Standard Aluminum Foil Roll` uses
      `images/catalog/food-containers/aluminum-foil.jpg`. Resized to
      700px wide, ~47 KB (original was 1553×1397, ~257 KB).
    - `8" x 10¾" Customizable Interfolded Deli Wrap Wax Paper` (500 ct
      box and 6,000 ct case, one card, two prices) uses
      `images/catalog/food-containers/wax-paper.png`. Resized to 700px
      wide, ~389 KB (original was 1599×976, ~1.7 MB).
    - `3 lb. Red Plaid Paper Food Tray` (250 ct and 500 ct case, one
      card, two prices) uses `images/catalog/food-containers/paper-tray.png`.
      Client original was already a compact 600×600 — kept at that native
      size (not upscaled) and just recompressed, ~98 KB.
    - `5⅝" Medium Weight White Polypropylene Plastic Teaspoon` uses
      `images/catalog/food-containers/plastic-spoons.png`. Kept at its
      native 600×600, recompressed, ~468 KB.
    - `16 oz. Black Round Microwavable Heavy Weight Container with Lid`
      uses `images/catalog/food-containers/microwaved-container.png`.
      Kept at its native 600×600, recompressed, ~478 KB.
    - **Multi-price-line cards (one-off exception, 5 of 10 cards in this
      category):** the Hot Dog Container (125 ct / 500 ct bulk), the
      1-Compartment container (100 ct / 200 ct), the 3-Compartment
      container (100 ct / 200 ct), the Wax Paper (box / case) and the
      Paper Food Tray (250 ct / 500 ct case) each render as one
      `.catalog-item` card with two stacked price lines, via the opt-in
      `.item-price-line` CSS class (see `css/styles.css`, near
      `.item-price`) — the only catalog cards that deviate from the
      one-price-per-card structure `CLAUDE.md` otherwise requires,
      confirmed directly with the client each time, not an oversight.
      Current prices: Hot Dog Container $19.00 / 125 ct case and $43.00 /
      500 ct bulk case; 1-Compartment $17.00 / 100 ct case and $35.99 /
      200 ct case; 3-Compartment $19.00 / 100 ct case and $42.99 / 200 ct
      case; Wax Paper $7.00 / box (500 ct) and $64.00 / 6,000 ct case;
      Paper Food Tray $18.00 / 250 ct and $33.99 / 500 ct case.
      `data/catalog.json` still lists each pair as two separate SKU rows
      (item-003/item-004, item-005/item-022, item-006/item-023,
      item-026/item-027, item-028/item-029); that 1-row-per-SKU vs.
      1-card mismatch is expected, not a bug. Two more multi-price cards
      exist outside this category — see Cups & Lids (Foam Food Container)
      and Gloves & Cleaning Supplies (Paper Towel) below.
  - **Cups & Lids (8 of 8 — done):**
    - `32 oz Cup Kit — Cup, Lid & Straw` uses
      `images/catalog/cups-and-lids/32oz-cup-with-lids.jpg`. Its `src`
      had gone stale after the category-subfolder reorganization (still
      pointing at the old flat `images/catalog/32oz-cup-with-lids.jpg`
      path) — fixed. Supersedes an earlier photo,
      `images/catalog/plastic-cup.jpg`, now unreferenced — left in
      place, not deleted.
    - `Dart 4J6 4oz. White Customizable Foam Food Container` (renamed
      from "Foam Cup" — it's a food container, not a drink cup; see §1)
      uses `images/catalog/cups-and-lids/white-foam-cup.png`, sourced
      specifically for this item (a filled bean/grain salad shot,
      replacing the old drink-cup photo `foam-cups.jpg`, now deleted).
      Two-price-line card: $3.99 / single pack and $44.99 / 1,000 ct
      case.
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
  - **Gloves & Cleaning Supplies (3 of 3 — done):**
    - `Poly Gloves, S/M/L — Food Service` uses
      `images/catalog/gloves-and-cleaning/poly-gloves.jpg`.
    - `Sanitizing Multi-Surface Wipes` uses
      `images/catalog/gloves-and-cleaning/sanitizing-wipes.jpg`. Note:
      the canister in this stock photo is labeled "100 WIPES," while our
      copy says "175 per canister" — representative photography, not
      the client's literal packaging (same as the fictional "Orange
      Glow" brand on the juice bottle photo above); not treated as an
      error.
    - Those two resized to 700px wide, ~65–67 KB each (client originals
      were ~4.3–4.4 MB).
    - `8" White Hardwound Paper Towel, 800ft/Roll` (single roll and
      6-roll case, one card, two prices) uses
      `images/catalog/gloves-and-cleaning/paper-towel.png`. Client
      original was already a compact 600×600 — kept at that native size
      (not upscaled) and just recompressed, ~110 KB.

**All 26 catalog cards now have real photos — catalog photography is complete.**

`.item-media` is styled `aspect-ratio: 1 / 1`, so every photo above slotted
in without any layout shift.

**Known follow-up, not yet done:** most of `data/catalog.json`'s `image`
fields still record placeholder filenames guessed before the client's
real photos and folder structure (`food-containers/`, `cups-and-lids/`,
etc.) existed — e.g. `images/catalog/foam-container-9x6x3.jpg` rather than
the real `images/catalog/food-containers/foam-container.jpg`. Since that
file is reference-only and not fetched by the live page, this doesn't
affect the site, but it should be brought back in sync with the real paths
above before it's relied on for anything. (Exception: item-011's `image`
field was fixed to the real path while that row was being touched for the
Foam Food Container correction, and all of item-024 through item-033 —
added in the same update — use real paths from the start.)

## 7. Brand palette — done

`css/styles.css`'s `:root` block now uses the real logo's red rather than
the mockup's guessed one. `--color-accent` is the exact icon-back/tagline
red (`#b92f28`); the lighter/darker steps are a computed scale at the same
hue. The brighter icon-front red (`#ef2e32`) is deliberately not used as a
token — at that lightness, white button text drops to 4.12:1 and fails the
4.5:1 AA minimum, while `#b92f28` clears it at 6:1 — see the comment above
the `:root` block in `css/styles.css` for the full reasoning.

## 8. Catalog item numbering + contact-page order selector — done

`supplies.html` shows a visible `#N` number on every priced catalog
option (inside `.item-price`, immediately before the price value), and
`contact.html` has a matching structured order-request section: one row
per priced option, each with a quantity stepper (`+`/`−` buttons plus a
number input, default 0), grouped under the same 5 category headings as
the catalog page.

**This is a display-only #1–#33 numbering system — not the same as
`data/catalog.json`'s `id`/`sku` fields.** The catalog has 26
`.catalog-item` cards, but 7 of them show two prices for two pack sizes
(Hot Dog Container, 1-Compartment, 3-Compartment, Wax Paper, Paper Food
Tray, Foam Food Container, Paper Towel), so numbering runs by *priced
option* (33 total), not by card:

```
#1  White Foam Take-Out Container, Hinged Lid — 9×6×3"
#2  White Foam Take-Out Container, Hinged Lid — 9×6×2.5"
#3  White Foam Hot Dog Container, Hinged Lid — 7×4×2" (125 ct)
#4  White Foam Hot Dog Container, Hinged Lid — 7×4×2" (500 ct, bulk)
#5  1-Compartment (100 ct)      #6  1-Compartment (200 ct)
#7  3-Compartment (100 ct)      #8  3-Compartment (200 ct)
#9  Aluminum Foil Roll
#10 Deli Wrap Wax Paper (box, 500 ct)   #11 Deli Wrap Wax Paper (6,000 ct case)
#12 Paper Food Tray (250 ct)            #13 Paper Food Tray (500 ct case)
#14 Plastic Teaspoon
#15 Microwavable Container with Lid
#16–#18 Paper Bags (#2, #4, #8)
#19 32 oz Cup Kit
#20 Foam Food Container (single pack)   #21 Foam Food Container (1,000 ct case)
#22–#27 remaining Cups & Lids (6 items)
#28–#29 Beverages & Carriers (2 items)
#30–#31 Poly Gloves, Sanitizing Wipes
#32 Paper Towel (single roll)           #33 Paper Towel (6-roll case)
```

`data/catalog.json` keeps its own `id`/`sku` numbering (which, for split
pack sizes, appends new SKUs at the end rather than inserting them
inline — see the note in that file's `_comment`). **Do not assume the two
numbering systems line up** — they're independent, for different
purposes.

The top "Supplies Catalog" eyebrow and the category-count badges on
`supplies.html` now both track *card* count and are internally
consistent: eyebrow "26 Items" = sum of the 5 category badges (10 Food
Containers, 3 Paper Bags, 8 Cups & Lids, 2 Beverages & Carriers, 3 Gloves
& Cleaning Supplies). The `#1`–`#33` numbering (33 priced options) is a
separate figure, visible via the numbers themselves rather than the
badges — this was a deliberate resolution of the previous eyebrow/badge
staleness noted here before the 6-item catalog update.

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
