function setupPagination({dataUrl,containerId,prevBtnId,nextBtnId,pageInfoId,ctaText,perPage=6}){
  const container=document.getElementById(containerId);
  const prevBtn=document.getElementById(prevBtnId);
  const nextBtn=document.getElementById(nextBtnId);
  const pageInfo=document.getElementById(pageInfoId);
  if(!container || !prevBtn || !nextBtn || !pageInfo) return;
  let items=[],page=0;
  function render(){
    container.innerHTML='';
    const start=page*perPage;
    items.slice(start,start+perPage).forEach(item=>{
      const card=document.createElement('a');
      card.className='case-link';
      card.href=item.url;
      card.innerHTML=`<h3 class="case-title">${item.title}</h3><p class="case-desc">${item.description}</p><span class="case-cta">${ctaText}</span>`;
      container.appendChild(card);
    });
    prevBtn.disabled=page===0;
    nextBtn.disabled=start+perPage>=items.length;
    pageInfo.textContent=`Page ${page+1} of ${Math.max(1,Math.ceil(items.length/perPage))}`;
  }
  fetch(dataUrl).then(r=>r.json()).then(data=>{items=data.slice().reverse();render();}).catch(()=>{container.innerHTML='<p class="section-note">Unable to load content right now.</p>'});
  prevBtn.onclick=()=>{if(page>0){page--;render();}};
  nextBtn.onclick=()=>{if((page+1)*perPage<items.length){page++;render();}};
}
