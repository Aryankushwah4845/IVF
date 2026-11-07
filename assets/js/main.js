(function () {
  'use strict';

  // ----- Mobile navigation -----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // ----- Gallery lightbox (falls back to opening the image if <dialog> is unsupported) -----
  var box = document.getElementById('lightbox');
  var supportsDialog = box && typeof box.showModal === 'function';
  var lastTrigger = null;

  document.querySelectorAll('.g-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var full = btn.getAttribute('data-full');
      if (!supportsDialog) { window.location.href = full; return; }
      var img = box.querySelector('img');
      img.src = full;
      img.alt = btn.querySelector('img').alt;
      box.querySelector('.lightbox-caption').textContent = btn.getAttribute('data-caption') || '';
      lastTrigger = btn;
      box.showModal();
      box.querySelector('.lightbox-close').focus();
    });
  });

  if (supportsDialog) {
    box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
    box.addEventListener('close', function () { if (lastTrigger) lastTrigger.focus(); });
  }

  // ----- Footer year -----
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
