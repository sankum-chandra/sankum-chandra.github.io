function initMenu(){
  const oldToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if(!oldToggle || !menu) return;

  // Remove old listeners by cloning
  const toggle = oldToggle.cloneNode(true);
  oldToggle.parentNode.replaceChild(toggle, oldToggle);

  function openMenu(){
    menu.hidden = false;
    menu.setAttribute('data-open','true');
    document.body.setAttribute('data-lock','true');
    toggle.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    menu.removeAttribute('data-open');
    menu.hidden = true;
    document.body.removeAttribute('data-lock');
    toggle.setAttribute('aria-expanded','false');
  }

  toggle.addEventListener('click',()=>{
    const isOpen = menu.getAttribute('data-open') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  menu.addEventListener('click',(e)=>{
    if(e.target.closest('[data-close="true"]')) closeMenu();
    if(e.target.closest('.mobile-nav a')) closeMenu();
  });

  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape' && menu.getAttribute('data-open')==='true') closeMenu();
  });
}

document.addEventListener('includes:loaded', initMenu);
document.addEventListener('DOMContentLoaded', initMenu);
