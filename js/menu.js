(function(){
  const btn=document.getElementById('menuToggle');
  const menu=document.getElementById('mobileMenu');
  const closeEls=menu.querySelectorAll('[data-close="true"]');
  function open(){menu.hidden=false;menu.setAttribute('data-open','true');btn.setAttribute('aria-expanded','true');document.body.setAttribute('data-lock','true');const f=menu.querySelector('.mobile-nav a');f&&f.focus()}
  function close(){menu.removeAttribute('data-open');btn.setAttribute('aria-expanded','false');document.body.removeAttribute('data-lock');setTimeout(()=>{menu.hidden=true},220);btn.focus()}
  window.AppMenu={openMenu:open,closeMenu:close};
  btn.addEventListener('click',()=>{menu.getAttribute('data-open')==='true'?close():open()});
  closeEls.forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('data-open')==='true')close()});
  const homeLink=document.getElementById('homeLink');
  if(homeLink){homeLink.addEventListener('click',e=>{if(menu.getAttribute('data-open')==='true'){e.preventDefault();close();setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),10)}})}
})();
