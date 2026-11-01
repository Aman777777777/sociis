(() => {
  'use strict';
  const archive=document.querySelector('.living-archive');
  if(!archive)return;
  const root=document.documentElement,stage=archive.querySelector('.archive-stage'),wheel=archive.querySelector('.archive-wheel');
  const photos=[...archive.querySelectorAll('.archive-photo')],previous=document.querySelector('#archive-prev'),next=document.querySelector('#archive-next'),pause=document.querySelector('#archive-pause');
  const count=document.querySelector('#archive-count'),description=document.querySelector('#archive-description'),status=document.querySelector('#archive-status'),hint=archive.querySelector('.archive-hint'),dialog=document.querySelector('#archive-dialog'),fullImage=document.querySelector('#archive-full-image'),caption=document.querySelector('#archive-caption');
  if(!stage||!wheel||!photos.length||!previous||!next||!pause||!dialog||!fullImage||!caption)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),step=360/photos.length;
  let phase=0,target=0,tilt=0,impulse=0,frame=0,lastFrame=0,lastY=scrollY,lastInput=performance.now();
  let visible=false,paused=false,focusWithin=false,lightboxOpen=false,motion=null,viewportHeight=innerHeight,restorePhoto=null,front=-1,pendingAnnouncement=null;
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  const indexFor=angle=>((Math.round(-angle/step)%photos.length)+photos.length)%photos.length;
  function render(){
    wheel.style.setProperty('--archive-turn',`${phase}deg`);
    wheel.style.setProperty('--archive-tilt',`${tilt}deg`);
    const active=indexFor(phase);
    if(active!==front){front=active;photos.forEach((photo,i)=>photo.classList.toggle('is-front',i===active));showCaption(active);if(status&&pendingAnnouncement!==active)status.textContent='';}
    if(pendingAnnouncement===active){if(status)status.textContent=photos[active].dataset.caption||photos[active].querySelector('img')?.alt||'';pendingAnnouncement=null;}
  }
  function showCaption(index){
    const number=`${String(index+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;
    const text=photos[index].dataset.caption||photos[index].querySelector('img')?.alt||'';
    if(count&&count.textContent!==number)count.textContent=number;
    if(description&&description.textContent!==text)description.textContent=text;
  }
  function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastFrame=0;}
  function canRun(){return motion&&visible&&!document.hidden&&!lightboxOpen;}
  function request(){if(!frame&&canRun())frame=requestAnimationFrame(tick);}
  function tick(now){
    frame=0;if(!canRun()){lastFrame=0;return;}
    const dt=Math.min(48,lastFrame?now-lastFrame:16.7);lastFrame=now;
    const drifting=!paused&&!focusWithin;
    if(drifting)target-=dt*.0075;
    phase+=(target-phase)*(1-Math.exp(-dt/170));
    if(Math.abs(target-phase)<.002)phase=target;
    impulse*=Math.exp(-dt/110);
    tilt+=(impulse-tilt)*(1-Math.exp(-dt/90));
    if(Math.abs(tilt)<.002&&Math.abs(impulse)<.002)tilt=impulse=0;
    if(Math.abs(phase)>36000){const turns=Math.trunc(phase/360)*360;phase-=turns;target-=turns;}
    render();
    if(drifting||Math.abs(target-phase)>.002||tilt!==0||impulse!==0)request();else lastFrame=0;
  }
  function measure(){
    const width=stage.clientWidth,phone=matchMedia('(max-width:760px)').matches;
    viewportHeight=innerHeight;
    archive.style.setProperty('--archive-radius',`${Math.min(phone?145:335,width*.42)}px`);
  }
  function syncMotion(){
    const on=!reduced.matches&&!root.classList.contains('no-motion');
    if(on===motion)return;
    motion=on;archive.dataset.archiveMotion=on?'on':'off';pause.disabled=!on;
    if(hint)hint.textContent=on?'Scroll to turn. Select a photograph to look closer.':'Select a photograph to look closer.';
    stop();tilt=impulse=0;pendingAnnouncement=null;lastY=scrollY;target=phase;render();
    if(on)request();
  }
  function select(direction){
    const selected=indexFor(target),index=(selected+direction+photos.length)%photos.length;
    const base=-selected*step+Math.round((target+selected*step)/360)*360;
    target=base-direction*step;pendingAnnouncement=index;
    if(!motion){phase=target;render();photos[index].focus({preventScroll:true});}else request();
  }
  previous.addEventListener('click',()=>select(-1));next.addEventListener('click',()=>select(1));
  pause.addEventListener('click',()=>{
    paused=!paused;pause.textContent=paused?'Resume rotation':'Pause rotation';pause.title=pause.textContent;pause.setAttribute('aria-label',pause.textContent);pause.setAttribute('aria-pressed',String(paused));
    if(paused){target=phase;pendingAnnouncement=null;impulse=0;tilt=0;render();stop();}else{focusWithin=false;request();}
  });
  archive.addEventListener('focusin',event=>{
    focusWithin=true;
    const photo=event.target.closest?.('.archive-photo');
    if(photo){const index=photos.indexOf(photo);target=-index*step+Math.round((phase+index*step)/360)*360;phase=target;tilt=impulse=0;pendingAnnouncement=index;render();}
    request();
  });
  archive.addEventListener('focusout',event=>{focusWithin=archive.contains(event.relatedTarget);if(!focusWithin)request();});
  photos.forEach((photo,index)=>{
    photo.style.setProperty('--archive-index',String(index));
    photo.addEventListener('click',()=>{
      const image=photo.querySelector('img');if(!image)return;
      restorePhoto=photo;lightboxOpen=true;stop();target=-index*step+Math.round((phase+index*step)/360)*360;phase=target;pendingAnnouncement=null;render();
      fullImage.src=image.currentSrc||image.src;fullImage.alt=image.alt;
      caption.textContent=photo.dataset.caption||image.alt;
      const ambient=document.querySelector('#ambient');if(ambient?.pause)ambient.pause();
      if(!dialog.open)dialog.showModal();
    });
  });
  dialog.addEventListener('close',()=>{lightboxOpen=false;restorePhoto?.focus({preventScroll:true});request();});
  addEventListener('scroll',()=>{
    const now=performance.now(),y=scrollY,delta=y-lastY,elapsed=Math.max(16,now-lastInput);lastY=y;lastInput=now;
    if(!canRun()||paused||focusWithin)return;
    if(Math.abs(delta)>viewportHeight*1.5){impulse=0;return;}
    target-=clamp(delta,-220,220)*.055;
    impulse=clamp(delta/elapsed*1.35,-4,4);request();
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{lastY=scrollY;if(document.hidden)stop();else request();});
  new IntersectionObserver(([entry])=>{
    visible=entry.isIntersecting;root.classList.toggle('archive-visible',visible);lastY=scrollY;
    if(visible)request();else stop();
  },{threshold:0}).observe(archive);
  new MutationObserver(syncMotion).observe(root,{attributes:true,attributeFilter:['class']});
  new ResizeObserver(measure).observe(stage);
  reduced.addEventListener('change',syncMotion);
  addEventListener('resize',measure,{passive:true});
  measure();syncMotion();render();
})();
