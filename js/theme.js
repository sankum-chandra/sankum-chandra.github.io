function initTheme(){
  const root=document.documentElement;
  const btn=document.getElementById('themeToggle');
  if(!btn) return;
  const stored=localStorage.getItem('theme');
  const prefersDark=window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  function setTheme(mode){
    root.classList.remove('theme-light','theme-dark');
    root.classList.add(mode==='dark'?'theme-dark':'theme-light');
    localStorage.setItem('theme',mode);
    btn.textContent=mode==='dark'?'🌙':'☀️';
  }
  if(stored==='dark' || stored==='light') setTheme(stored);
  else setTheme(prefersDark?'dark':'light');
  btn.addEventListener('click',()=>{
    const isDark=root.classList.contains('theme-dark');
    setTheme(isDark?'light':'dark');
  });
}
document.addEventListener('includes:loaded',initTheme);
document.addEventListener('DOMContentLoaded',initTheme);
