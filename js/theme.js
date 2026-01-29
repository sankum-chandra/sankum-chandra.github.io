(function(){
  const STORAGE_KEY='site-theme';
  const USER_LOCK='site-theme-userlock';
  const root=document.documentElement;
  const btn=document.getElementById('themeToggle');
  function prefersDark(){return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches}
  function apply(theme){
    root.classList.remove('theme-light','theme-dark');
    if(theme==='dark'){root.classList.add('theme-dark');btn.setAttribute('aria-pressed','true');btn.textContent='☀️';btn.title='Switch to light mode'}
    else if(theme==='light'){root.classList.add('theme-light');btn.setAttribute('aria-pressed','false');btn.textContent='🌙';btn.title='Switch to dark mode'}
    else{btn.textContent=prefersDark()?'☀️':'🌙';btn.setAttribute('aria-pressed',prefersDark()?'true':'false')}
  }
  const stored=localStorage.getItem(STORAGE_KEY);const locked=localStorage.getItem(USER_LOCK)==='true';
  apply(stored||null);
  if(!locked&&window.matchMedia){window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(!localStorage.getItem(USER_LOCK)&&!localStorage.getItem(STORAGE_KEY))apply(null)})}
  btn.addEventListener('click',()=>{const isDark=root.classList.contains('theme-dark')||(!root.classList.contains('theme-light')&&prefersDark());const next=isDark?'light':'dark';localStorage.setItem(STORAGE_KEY,next);localStorage.setItem(USER_LOCK,'true');apply(next)})
})();
