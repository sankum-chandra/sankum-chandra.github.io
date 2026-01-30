(() => {
  const overlay = document.getElementById('detailOverlay');
  if (!overlay) return;

  const body = document.body;
  const sections = Array.from(overlay.querySelectorAll('[data-detail]'));
  const byId = new Map(sections.map(s => [s.dataset.detail, s]));

  const initOrder = ['init-cs1','init-cs2','init-cs3','init-cs4','init-cs5','init-cs6'];
  const insOrder  = ['ins-1','ins-2'];

  let currentId = null;
  let lastActive = null;

  function getOrder(id){
    return id && id.startsWith('ins-') ? insOrder : initOrder;
  }

  function show(id){
    sections.forEach(s => s.hidden = true);
    const el = byId.get(id);
    if (!el) return;
    el.hidden = false;

    // update prev/next disabled state
    const order = getOrder(id);
    const idx = order.indexOf(id);
    const prevBtn = el.querySelector('[data-action="prev"]');
    const nextBtn = el.querySelector('[data-action="next"]');
    if (prevBtn) prevBtn.disabled = idx <= 0;
    if (nextBtn) nextBtn.disabled = idx === -1 || idx >= order.length - 1;

    // scroll to top of overlay
    const scroller = overlay.querySelector('.detail-scroll');
    if (scroller) scroller.scrollTop = 0;
  }

  function open(id){
    const el = byId.get(id);
    if (!el) return;
    lastActive = document.activeElement;
    currentId = id;
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    body.setAttribute('data-lock', 'true');
    show(id);

    const closeBtn = el.querySelector('[data-action="close"], .detail-close');
    if (closeBtn) closeBtn.focus();
  }

  function close(){
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    body.removeAttribute('data-lock');
    currentId = null;
    if (lastActive) lastActive.focus();
  }

  function go(delta){
    if (!currentId) return;
    const order = getOrder(currentId);
    const idx = order.indexOf(currentId);
    const nextIdx = idx + delta;
    if (nextIdx < 0 || nextIdx >= order.length) return;
    currentId = order[nextIdx];
    show(currentId);
  }

  // open from cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open]');
    if (btn){
      e.preventDefault();
      open(btn.dataset.open);
      return;
    }

    // actions inside overlay
    if (!overlay.hidden){
      const actionEl = e.target.closest('[data-action]');
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (action === 'close') { close(); }
      if (action === 'prev') { go(-1); }
      if (action === 'next') { go(1); }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') close();
    // Optional: left/right arrow for navigation
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
})();
