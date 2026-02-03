async function loadIncludes(){
  const nodes=document.querySelectorAll('[data-include]');
  await Promise.all([...nodes].map(async node=>{
    const file=node.getAttribute('data-include');
    const url='/' + file.replace(/^\/+/, '');
    const res=await fetch(url);
    if(!res.ok) throw new Error(`Failed to load include: ${file}`);
    node.outerHTML=await res.text();
  }));
}
loadIncludes().then(()=>document.dispatchEvent(new Event('includes:loaded'))).catch(console.error);
