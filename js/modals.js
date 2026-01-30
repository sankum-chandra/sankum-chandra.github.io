(() => {
  const openButtons = document.querySelectorAll('[data-modal]');
  const body = document.body;
  let lastActive = null;

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastActive = document.activeElement;
    modal.hidden = false;
    body.setAttribute('data-lock', 'true');

    const closeBtn = modal.querySelector('[data-close]');
    if (closeBtn) closeBtn.focus();

    function onKeyDown(e) {
      if (e.key === 'Escape') closeModal(modal);
    }
    modal._esc = onKeyDown;
    document.addEventListener('keydown', onKeyDown);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    body.removeAttribute('data-lock');
    if (modal._esc) document.removeEventListener('keydown', modal._esc);
    modal._esc = null;
    if (lastActive) lastActive.focus();
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  document.addEventListener('click', (e) => {
    const closeTarget = e.target.closest('[data-close]');
    if (!closeTarget) return;
    const modal = e.target.closest('.modal');
    if (!modal) return;
    closeModal(modal);
  });
})();
