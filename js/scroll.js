(function(){
  const header=document.getElementById('siteHeader');
  function setHeaderHeight(){if(!header)return;const h=header.offsetHeight;document.documentElement.style.setProperty('--header-height',h+'px')}
  window.addEventListener('resize',setHeaderHeight);
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(setHeaderHeight)}
  window.addEventListener('load',setHeaderHeight);setHeaderHeight();
  function scrollToId(id){const el=document.getElementById(id);if(!el)return;el.scrollIntoView({behavior:'smooth',block:'start'})}
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);if(id){e.preventDefault();scrollToId(id)}})});
  document.querySelectorAll('.mobile-nav a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);if(id){e.preventDefault();window.AppMenu&&window.AppMenu.closeMenu&&window.AppMenu.closeMenu();setTimeout(()=>{scrollToId(id)},10)}})});
  if(location.hash){const id=location.hash.replace('#','');setTimeout(()=>{scrollToId(id);history.replaceState(null,'',location.pathname+location.search)},50)}
})();
