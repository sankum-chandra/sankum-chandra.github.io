function setActiveNav(){
  const path=(location.pathname.replace(/\/$/,'')||'/');
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a=>{
    const href=a.getAttribute('href');
    if(!href || !href.startsWith('/')) return;
    const normalized=(href.replace(/\/$/,'')||'/');
    const isActive=(normalized==='/' && path==='/') || (normalized!=='/' && path.startsWith(normalized));
    a.classList.toggle('is-active',isActive);
    if(isActive) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
}
document.addEventListener('includes:loaded',setActiveNav);
document.addEventListener('DOMContentLoaded',setActiveNav);
