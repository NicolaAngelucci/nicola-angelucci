document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menuBtn'),n=document.querySelector('nav');
  if(b&&n)b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});
  const prompt=document.querySelector('[data-scroll]'); if(prompt)prompt.addEventListener('click',()=>document.getElementById(prompt.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
  const s=document.getElementById('scoreSearch');if(s){let rows=[...document.querySelectorAll('.score')];const empty=document.getElementById('noResults');s.addEventListener('input',()=>{let q=s.value.trim().toLocaleLowerCase(),num=0;rows.forEach(x=>{let ok=x.dataset.title.toLocaleLowerCase().includes(q);x.hidden=!ok;if(ok)num++});if(empty)empty.hidden=num>0;});}
  const video=document.querySelector('video.videoBg');if(video){video.muted=true;video.defaultMuted=true;video.play().catch(()=>{});}
});