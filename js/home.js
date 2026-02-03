function renderTopN({dataUrl,containerId,ctaText,n=3}){
  const el=document.getElementById(containerId);
  if(!el) return;
  fetch(dataUrl).then(r=>r.json()).then(data=>{
    const items=data.slice().reverse().slice(0,n);
    el.innerHTML='';
    items.forEach(item=>{
      const card=document.createElement('a');
      card.className='case-link';
      card.href=item.url;
      card.innerHTML=`<h3 class="case-title">${item.title}</h3><p class="case-desc">${item.description}</p><span class="case-cta">${ctaText}</span>`;
      el.appendChild(card);
    });
  }).catch(()=>{ el.innerHTML='<p class="section-note">Unable to load content right now.</p>'; });
}
document.addEventListener('DOMContentLoaded',()=>{
  renderTopN({dataUrl:'/data/initiatives.json',containerId:'homeInitiatives',ctaText:'More details →',n:3});
  renderTopN({dataUrl:'/data/articles.json',containerId:'homeInsights',ctaText:'Read article →',n:3});
});
