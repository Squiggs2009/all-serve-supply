/* ==========================================================================
   All-Serve Supply — Phase 1 scripts
   Plain JS, no dependencies, no build step.

   Three responsibilities:
     1. Mobile navigation toggle
     2. Contact page quantity steppers (#1-#23, one per priced catalog
        option — see the note above the order-items block in contact.html)
     3. Contact / order-request form handoff

   The supplies catalog itself is deliberately NOT handled here. Catalog
   items are hardcoded in supplies.html for Phase 1 — no fetch(), no
   rendering. The contact page's order-items rows are likewise hardcoded
   HTML, not generated from the catalog; this file only reads their
   already-rendered numbers, names and quantities to build the request
   summary. See the note above the catalog section in supplies.html.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. MOBILE NAV
     The toggle is hidden by CSS at desktop widths, where the nav is a
     persistent inline row.
     ------------------------------------------------------------------------ */

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Tapping a link navigates away, but same-page anchors (the catalog jump
    // links) do not — close the panel so the target is not hidden behind it.
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      setOpen(false);
      toggle.focus();
    });

    document.addEventListener('click', function (event) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    // Crossing into the desktop layout leaves the panel styled as an inline
    // row; clear the open state so returning to mobile starts closed.
    window.matchMedia('(min-width: 64em)').addEventListener('change', function (event) {
      if (event.matches) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------------
     2. ORDER ITEM QUANTITY STEPPERS
     Each .order-item row is hardcoded HTML (see contact.html) with a
     +/- button pair and a number input, default 0. This just wires the
     buttons — the input itself already works via native number-input
     typing and arrow keys.
     ------------------------------------------------------------------------ */

  function initOrderItems() {
    var items = document.querySelectorAll('.order-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var input = item.querySelector('.qty-input');
      if (!input) return;

      var buttons = item.querySelectorAll('.qty-btn');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var step = parseInt(btn.getAttribute('data-step'), 10) || 0;
          var current = parseInt(input.value, 10) || 0;
          input.value = Math.max(0, current + step);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
      });

      // A number input's min attribute blocks the native spinner and
      // checkValidity(), but not direct typing — clamp by hand too.
      input.addEventListener('input', function () {
        if (input.value !== '' && parseInt(input.value, 10) < 0) {
          input.value = 0;
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. ORDER REQUEST FORM
     Phase 1 is static-hosted with no backend, so the form does not post
     anywhere. It validates, then hands the details to the visitor's email
     client via mailto:. Nothing is claimed to have been sent that wasn't —
     the confirmation copy says the message is ready to send, not delivered.

     Replacing this with a real form endpoint is a launch task; see
     PLACEHOLDER-DATA.md.
     ------------------------------------------------------------------------ */

  function initForm() {
    var form = document.getElementById('order-request-form');
    var success = document.getElementById('form-success');
    var itemsError = document.getElementById('order-items-error');
    if (!form || !success) return;

    function value(name) {
      var field = form.elements[name];
      return field && field.value ? field.value.trim() : '';
    }

    // Reads the hardcoded #1-#23 rows directly from the DOM (name/number
    // are already-rendered text, not a duplicated data source) and returns
    // one formatted line per item with a quantity greater than 0.
    function collectOrderItems() {
      var lines = [];
      document.querySelectorAll('.order-item').forEach(function (item) {
        var input = item.querySelector('.qty-input');
        var qty = input ? parseInt(input.value, 10) || 0 : 0;
        if (qty <= 0) return;

        var number = item.querySelector('.order-item-number').textContent.trim();
        var name = item.querySelector('.order-item-name').textContent.trim();
        lines.push(number + ' — ' + name + ' — Qty: ' + qty);
      });
      return lines;
    }

    function hideItemsError() {
      if (itemsError) itemsError.hidden = true;
    }

    function buildBody() {
      var orderLines = collectOrderItems();
      var freeTextItems = value('items');

      var lines = [
        'Order request from the All-Serve Supply website.',
        '',
        'Name: ' + value('name'),
        'Business: ' + (value('company') || '—'),
        'Email: ' + value('email'),
        'Phone: ' + (value('phone') || '—'),
        '',
        'Items needed and quantities:'
      ];

      if (orderLines.length) lines.push.apply(lines, orderLines);
      if (freeTextItems) {
        if (orderLines.length) lines.push('');
        lines.push(freeTextItems);
      }

      var notes = value('notes');
      if (notes) lines.push('', 'Additional notes:', notes);

      return lines.join('\r\n');
    }

    // Selecting a quantity or typing in the fallback box clears a
    // previously shown "pick something" error without waiting for submit.
    document.querySelectorAll('.qty-input').forEach(function (input) {
      input.addEventListener('input', hideItemsError);
    });
    var itemsField = form.elements['items'];
    if (itemsField) itemsField.addEventListener('input', hideItemsError);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // The form carries novalidate so submit always fires here; ask the
      // browser to run its own checks and surface its native messages.
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (!collectOrderItems().length && !value('items')) {
        if (itemsError) {
          itemsError.hidden = false;
          itemsError.scrollIntoView({ block: 'center' });
        }
        return;
      }
      hideItemsError();

      var address = form.getAttribute('data-order-email') || '';
      var subject = 'Order request — ' + (value('company') || value('name'));

      // The address is left unencoded: it comes from our own markup, and
      // percent-encoding the "@" trips up some mail clients. The subject and
      // body carry user input, so those are encoded.
      window.location.href =
        'mailto:' + address +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(buildBody());

      form.hidden = true;
      success.hidden = false;
      success.focus();
    });
  }

  initNav();
  initOrderItems();
  initForm();
})();
