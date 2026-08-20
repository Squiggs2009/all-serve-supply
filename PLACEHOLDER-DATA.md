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

## 6. Product photography — hero done, catalog items still pending

- **Home hero — done.** `index.html` now uses a real photo
  (`images/gallery/hero.jpg`, resized/compressed to 1600px wide, ~180 KB —
  the client-supplied original was 5728×3819, ~3.4 MB, far larger than the
  hero slot ever renders).
- **Catalog items — still placeholders.** Every `.catalog-item` still
  renders `<div class="item-media" aria-hidden="true"></div>` in place of a
  photo.

All 21 item blocks are byte-identical in structure, so dropping in real
photos is a mechanical find-and-replace of that one line with:

```html
<img src="images/catalog/[item].jpg" alt="[name]">
```

The `image` field in `data/catalog.json` already records the intended
filename for each item. `.item-media` is styled `aspect-ratio: 1 / 1`, so
square crops will slot in without any layout shift.

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
