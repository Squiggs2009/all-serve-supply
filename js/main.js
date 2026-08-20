/* ==========================================================================
   All-Serve Supply — Phase 1 scripts
   Plain JS, no dependencies, no build step.

   Two responsibilities only:
     1. Mobile navigation toggle
     2. Contact / order-request form handoff

   The supplies catalog is deliberately NOT handled here. Catalog items are
   hardcoded in about.html for Phase 1 — no fetch(), no rendering. See the
   note above the catalog section in that file.
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
     2. ORDER REQUEST FORM
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
    if (!form || !success) return;

    function value(name) {
      var field = form.elements[name];
      return field && field.value ? field.value.trim() : '';
    }

    function buildBody() {
      var lines = [
        'Order request from the All-Serve Supply website.',
        '',
        'Name: ' + value('name'),
        'Business: ' + (value('company') || '—'),
        'Email: ' + value('email'),
        'Phone: ' + (value('phone') || '—'),
        '',
        'Items needed and quantities:',
        value('items')
      ];

      var notes = value('notes');
      if (notes) lines.push('', 'Additional notes:', notes);

      return lines.join('\r\n');
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // The form carries novalidate so submit always fires here; ask the
      // browser to run its own checks and surface its native messages.
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

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
  initForm();
})();
