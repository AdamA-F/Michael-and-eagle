'use strict';
(() => {
  // Resolve against this file, including when the site lives in a GitHub subfolder.
  const base = new URL('.', document.currentScript?.src || document.baseURI);
  const pending = new WeakMap();
  const url = path => new URL(path, base).href;
  const large = property => `assets/large/${property.id}.${property.id === 'eagle' ? 'png' : 'jpg'}`;

  function preload(src) {
    return new Promise((resolve, reject) => {
      const probe = new Image();
      let finished = false;
      const finish = ok => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        probe.onload = probe.onerror = null;
        ok ? resolve(src) : reject(new Error('Photo unavailable'));
      };
      const timer = setTimeout(() => finish(false), 12000);
      probe.onload = async () => {
        try { if (probe.decode) await probe.decode(); } catch { /* A loaded image can still be displayed. */ }
        finish(probe.naturalWidth > 0);
      };
      probe.onerror = () => finish(false);
      probe.loading = 'eager';
      probe.src = src;
    });
  }

  async function show(image, property, status) {
    const ticket = {};
    pending.set(image, ticket);
    image.hidden = true;
    image.loading = 'eager';
    image.decoding = 'async';
    image.alt = property.alt;
    if (status) {
      status.hidden = false;
      status.textContent = 'Al is bringing the photograph over.';
    }
    for (const path of [large(property), property.image]) {
      try {
        const src = await preload(url(path));
        if (pending.get(image) !== ticket) return false;
        image.src = src;
        image.hidden = false;
        if (status) { status.hidden = true; status.textContent = ''; }
        return true;
      } catch {
        if (pending.get(image) !== ticket) return false;
      }
    }
    if (status) {
      status.textContent = 'Al has misplaced the photograph. ';
      const retry = document.createElement('button');
      retry.type = 'button';
      retry.textContent = 'Ask him again';
      retry.addEventListener('click', () => show(image, property, status));
      status.append(retry);
    }
    return false;
  }
  window.eagleImages = { show, large, url };
})();
