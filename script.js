document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menuBtn'),n=document.querySelector('nav');
  if(b&&n)b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});
  // Homepage album navigation: frame the NEXT section with its down arrow visible.
  // This changes scrolling only; the hero's text, video and button remain untouched.
  const albumScroll=(section)=>{
    if(!section)return;
    const arrow=section.querySelector('.album-jump');
    if(!arrow){section.scrollIntoView({behavior:'smooth'});return;}
    const r=arrow.getBoundingClientRect();
    const arrowBottomOnPage=r.bottom+window.scrollY;
    // Position the arrow above the lower edge of the visible viewport.
    // Reserve extra room for Safari's dynamic bars / short viewport.
    const bottomSpace=Math.max(64,Math.min(105,window.innerHeight*.11));
    let desiredTop=arrowBottomOnPage-window.innerHeight+bottomSpace;
    const maxScroll=document.documentElement.scrollHeight-window.innerHeight;
    window.scrollTo({top:Math.max(0,Math.min(maxScroll,desiredTop)),behavior:'smooth'});
  };
  const prompt=document.querySelector('[data-scroll]');
  if(prompt)prompt.addEventListener('click',()=>albumScroll(document.getElementById(prompt.dataset.scroll)));
  document.querySelectorAll('.album-jump[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    if(id==='top')return; // keep the existing Back to top behavior
    const section=document.getElementById(id);
    if(section){e.preventDefault();albumScroll(section);}
  }));
  const s=document.getElementById('scoreSearch');if(s){let rows=[...document.querySelectorAll('.score')];const empty=document.getElementById('noResults');s.addEventListener('input',()=>{let q=s.value.trim().toLocaleLowerCase(),num=0;rows.forEach(x=>{let ok=x.dataset.title.toLocaleLowerCase().includes(q);x.hidden=!ok;if(ok)num++});if(empty)empty.hidden=num>0;});}
  const video=document.querySelector('video.videoBg');if(video){video.muted=true;video.defaultMuted=true;video.play().catch(()=>{});}
});