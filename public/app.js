const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const phone=matchMedia('(max-width:760px)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
let manualReduce=false,lastTrigger=null,frame=0,stableWidth=innerWidth,stableHeight=innerHeight,restoringFocus=false,keyboardNavigation=false;
const allowed=()=>!manualReduce&&!reduced.matches;
function syncMotion(){const on=allowed();root.classList.toggle('motion-on',on);root.classList.toggle('no-motion',!on);root.classList.toggle('story-pinned',on&&stableHeight>=580);requestMeasure()}
$('#reduce-motion').addEventListener('click',e=>{manualReduce=!manualReduce;e.currentTarget.setAttribute('aria-pressed',String(manualReduce));e.currentTarget.textContent=manualReduce?'Motion reduced':'Reduce motion';syncMotion()});phone.addEventListener('change',syncMotion);reduced.addEventListener('change',syncMotion);document.addEventListener('visibilitychange',syncMotion);
const header=$('.header'),progress=$('.reading-line'),chapter=$('.culture-chapter'),cultureStage=$('.culture-stage'),journey=$('#story-journey'),storyStage=$('.story-stage'),storyViewport=$('.story-viewport'),navigation=$$('.desktop-nav a'),reveals=$$('[data-reveal]');let activeStory=-1,activeNav=null,geometry=null,measureFrame=0,visualCulture=null,visualGallery=null,lastTime=0,lastScroll=scrollY;
const returnTop=$('#return-top'),pageFullscreen=$('#page-fullscreen');
function fullscreenActive(){return !!(document.fullscreenElement||document.webkitFullscreenElement)}
function syncPageFullscreen(){const active=fullscreenActive();pageFullscreen.querySelector('.fullscreen-label').textContent=active?'Exit full screen':'Full screen';pageFullscreen.setAttribute('aria-pressed',String(active));pageFullscreen.setAttribute('aria-label',active?'Exit full screen':'View website in full screen');pageFullscreen.title=active?'Exit full screen':'Full screen'}
const fullscreenSupported=!!((root.requestFullscreen&&document.fullscreenEnabled!==false)||(root.webkitRequestFullscreen&&document.webkitFullscreenEnabled!==false));
pageFullscreen.hidden=!fullscreenSupported;
pageFullscreen.addEventListener('click',async()=>{try{if(fullscreenActive()){if(document.exitFullscreen)await document.exitFullscreen();else document.webkitExitFullscreen?.()}else if(root.requestFullscreen)await root.requestFullscreen();else root.webkitRequestFullscreen?.();$('#page-fullscreen-status').textContent='';syncPageFullscreen()}catch{$('#page-fullscreen-status').textContent='Full screen is unavailable in this browser.'}});
document.addEventListener('fullscreenchange',syncPageFullscreen);document.addEventListener('webkitfullscreenchange',syncPageFullscreen);
function clamp(n){return Math.max(0,Math.min(1,n))}
function smoothstep(n){const t=clamp(n);return t*t*(3-2*t)}
function layoutTop(el){let y=0;for(let node=el;node;node=node.offsetParent)y+=node.offsetTop;return y}
function measure(){
 const y=scrollY,top=el=>el.getBoundingClientRect().top+y;
 const stageWidth=cultureStage.clientWidth,stageHeight=cultureStage.clientHeight;
 const lastCultureLine=chapter.querySelector('.culture-backdrop span:last-child');
 const lineBottom=lastCultureLine.offsetTop+lastCultureLine.offsetHeight;
 const orbRadius=Math.max(22,Math.min(48,stageWidth*.055));
 const orbY=Math.min(stageHeight-orbRadius-18,Math.max(stageHeight*.78,lineBottom+orbRadius+18));
 const coverRadius=Math.hypot(stageWidth/2,Math.max(orbY,stageHeight-orbY))+2;
 geometry={orbRadius,orbY,coverRadius,vh:stableHeight,end:document.documentElement.scrollHeight-stableHeight,cultureTop:top(chapter),cultureTravel:Math.max(1,chapter.offsetHeight-cultureStage.offsetHeight),galleryTop:top(journey),galleryHeight:journey.offsetHeight,galleryTravel:Math.max(1,journey.offsetHeight-storyStage.offsetHeight),pinTop:parseFloat(getComputedStyle(storyStage).top)||0,railDistance:Math.max(0,track.scrollWidth-storyViewport.clientWidth),nav:navigation.flatMap(a=>{const href=a.getAttribute('href');const id=a.dataset.scrollSection||(href?.startsWith('#')?href.slice(1):null);const section=id?document.getElementById(id):null;return section?[{a,top:top(section)}]:[]}),reveals:reveals.map(el=>({el,top:layoutTop(el),value:null})),pinned:root.classList.contains('story-pinned')};
 schedule();
}
function requestMeasure(){if(!measureFrame)measureFrame=requestAnimationFrame(()=>{measureFrame=0;measure()})}
function damp(current,target,alpha){if(current===null||Math.abs(target-current)<.00015)return target;return current+(target-current)*alpha}
function draw(time){
 frame=0;if(!geometry)return;
 const g=geometry,y=scrollY,vh=g.vh,on=allowed(),dt=Math.min(48,lastTime?time-lastTime:16.7),alpha=on?1-Math.exp(-dt/(phone.matches?85:125)):1;
 lastTime=time;
 const cultureTarget=on?clamp((y-g.cultureTop)/g.cultureTravel):1;
 const galleryTarget=clamp((y-g.galleryTop+g.pinTop)/g.galleryTravel);
 const jumped=Math.abs(y-lastScroll)>vh*1.25;lastScroll=y;
 visualCulture=cultureTarget===0||cultureTarget===1?cultureTarget:damp(jumped?cultureTarget:visualCulture,cultureTarget,alpha);
 visualGallery=galleryTarget;
 const p=visualCulture,t=visualGallery;
 // All layout reads are cached above; animation frames only update visual styles/state.
 header.classList.toggle('scrolled',y>60);progress.style.transform=`scaleX(${g.end>0?y/g.end:0})`;
 let nextNav=null;g.nav.forEach(entry=>{if(entry.top<y+vh*.4)nextNav=entry.a});if(nextNav!==activeNav){activeNav=nextNav;navigation.forEach(a=>{if(a===activeNav)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
 const hideFullscreen=!fullscreenSupported||!!$('dialog[open]');if(pageFullscreen.hidden!==hideFullscreen)pageFullscreen.hidden=hideFullscreen;
 const hideReturn=y<120||!!$('dialog[open]');if(returnTop.hidden!==hideReturn)returnTop.hidden=hideReturn;
 // Slide beneath the words, settle on the centerline, then open the image.
 const arrival=smoothstep((p-.06)/.16),expand=smoothstep((p-.27)/.30),leave=smoothstep((p-.27)/.16);
 chapter.style.setProperty('--culture-radius',`${g.orbRadius+(g.coverRadius-g.orbRadius)*expand}px`);
 chapter.style.setProperty('--culture-x',`${112-62*arrival}%`);
 chapter.style.setProperty('--culture-y',`${g.orbY}px`);
 chapter.style.setProperty('--culture-image-opacity',String(clamp((p-.06)/.06)));chapter.style.setProperty('--culture-scale',String(1.17-expand*.17));chapter.style.setProperty('--culture-type-y',`${-leave*18}vh`);chapter.style.setProperty('--culture-type-opacity',String(1-leave));chapter.style.setProperty('--culture-copy',String(smoothstep((p-.44)/.16)));chapter.style.setProperty('--culture-cue',String(1-clamp((p-.1)/.12)));
 if(g.pinned){const q=clamp((t-.04)/.66);journey.style.setProperty('--story-x',`${-q*g.railDistance}px`);journey.style.setProperty('--story-progress',String(q));setActiveStory(q>=.5?1:0)}
 g.reveals.forEach(entry=>{const value=on?smoothstep((y+vh*.96-entry.top)/(vh*.54)):1;if(value!==entry.value){entry.el.style.setProperty('--reveal-progress',String(value));entry.value=value}});
 if(on&&(Math.abs(visualCulture-cultureTarget)>.00015||Math.abs(visualGallery-galleryTarget)>.00015))schedule();
}
function schedule(){if(!frame)frame=requestAnimationFrame(draw)}addEventListener('scroll',schedule,{passive:true});
addEventListener('resize',()=>{const w=innerWidth,h=innerHeight;if(phone.matches&&w===stableWidth&&Math.abs(h-stableHeight)<Math.max(100,stableHeight*.2)){schedule();return}stableWidth=w;stableHeight=h;syncMotion()});
document.fonts.ready.then(requestMeasure);addEventListener('load',requestMeasure);$$('img').forEach(img=>img.addEventListener('load',requestMeasure,{once:true}));new ResizeObserver(requestMeasure).observe(document.body);
let storyNavigationPending=false;
function userScrollIntent(){keyboardNavigation=false;if(storyNavigationPending){storyNavigationPending=false;scrollTo({top:scrollY,behavior:'instant'})}}
document.addEventListener('keydown',e=>{if(e.key==='Tab')keyboardNavigation=true;else if(['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(e.key))userScrollIntent()});
document.addEventListener('pointerdown',()=>{keyboardNavigation=false},{passive:true});addEventListener('wheel',userScrollIntent,{passive:true});addEventListener('touchstart',userScrollIntent,{passive:true});addEventListener('scrollend',()=>{storyNavigationPending=false});
$$('h2[data-reveal]').forEach(heading=>{const copy=heading.cloneNode(true);copy.querySelectorAll('br').forEach(br=>br.replaceWith(' '));heading.setAttribute('aria-label',copy.textContent.replace(/\s+/g,' ').trim());const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{const fragment=document.createDocumentFragment();node.textContent.split(/(\s+)/).forEach(word=>{if(!word.trim()){fragment.append(document.createTextNode(word));return}const mask=document.createElement('span'),inner=document.createElement('span');mask.className='word-mask';mask.setAttribute('aria-hidden','true');inner.className='word-inner';inner.textContent=word;mask.append(inner);fragment.append(mask)});node.replaceWith(fragment)});const words=[...heading.querySelectorAll('.word-inner')];words.forEach((word,i)=>word.style.setProperty('--word-delay',String(i/Math.max(1,words.length-1)*.2)))});
const dialogTriggers=new WeakMap();
function openDialog(dialog,trigger){lastTrigger=trigger||document.activeElement;dialogTriggers.set(dialog,lastTrigger);dialog.showModal();schedule()}
$$('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()});d.addEventListener('close',()=>{restoringFocus=true;const trigger=dialogTriggers.get(d);if(trigger?.isConnected&&!trigger.closest('dialog:not([open])'))trigger.focus({preventScroll:true});restoringFocus=false;syncMotion()})});$('.menu-button').addEventListener('click',e=>openDialog($('#menu-dialog'),e.currentTarget));$$('#menu-dialog nav a').forEach(a=>a.addEventListener('click',()=>$('#menu-dialog').close()));$$('[data-legal]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openDialog($('#'+a.dataset.legal+'-dialog'),a)}));
const topic=$('#topic'),message=$('#message'),draft=$('#email-draft'),subjects={general:'What could we change together?',company:'Company partnership with sociisgroup',bee:'BEE development and testing',investor:'sociisgroup investment conversation'};
function syncDraft(){const email=topic.value==='bee'?'bee@sociisgroup.com':'hello@sociisgroup.com';$('#recipient').textContent=email;draft.href=`mailto:${email}?subject=${encodeURIComponent(subjects[topic.value])}&body=${encodeURIComponent(message.value)}`}function contact(kind,trigger){topic.value=kind||'general';syncDraft();openDialog($('#contact-dialog'),trigger)}$$('[data-contact]').forEach(b=>b.addEventListener('click',()=>contact(b.dataset.contact,b)));topic.addEventListener('change',syncDraft);message.addEventListener('input',syncDraft);
const stories={'64':{label:'The 64 / Corinthia Brussels',title:'A smaller room. A deeper exchange.',image:'media/family-shared-smile.webp',alt:'Jeremie Landweer and his mother at The 64',description:'The 64 brings a carefully chosen group together around the table. Hospitality creates time and trust to listen, challenge assumptions and explore what we could do together. We connect people who can contribute through their decisions, organisations, ideas and capabilities.',note:'Jeremie Landweer and his mother · The 64 · Corinthia Brussels · 2026.'},'300':{label:'The 300 / With Love Tomorrow',title:'A wider stage. A shared direction.',image:'media/the300.jpg',alt:'The flower-filled canopy at The 300',description:'Our founding gathering on the iconic grounds of Tomorrowland, in collaboration with Love Tomorrow, brought people from different worlds together through culture, hospitality and human connection. The aim is to create relationships and collaborations that carry the work beyond the gathering.',note:'The 300 · 23 July 2026.'}};$$('[data-story]').forEach(b=>b.addEventListener('click',()=>{const s=stories[b.dataset.story];$('#story-label').textContent=s.label;$('#story-title').textContent=s.title;$('#story-image').src=s.image;$('#story-image').alt=s.alt;$('#story-description').textContent=s.description;$('#story-note').textContent=s.note;openDialog($('#story-dialog'),b)}));$('#story-contact').addEventListener('click',()=>{const trigger=dialogTriggers.get($('#story-dialog'));$('#story-dialog').close();contact('general',trigger)});
const track=$('#story-track'),storySteps=$$('[data-story-step]'),storyCards=$$('.story-card');
function setActiveStory(index){if(index===activeStory)return;activeStory=index;$('#story-position').textContent=index?'02':'01';storySteps.forEach((b,i)=>{if(i===index)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});$('#previous-story').disabled=index===0;$('#next-story').disabled=index===1}
function goToStory(index,instant=false){index=Math.max(0,Math.min(storyCards.length-1,index));if(geometry?.pinned){const t=index?.76:.02,target=geometry.galleryTop-geometry.pinTop+geometry.galleryTravel*t;if(instant){visualGallery=t;setActiveStory(index)}storyNavigationPending=allowed()&&!instant;scrollTo({top:target,behavior:storyNavigationPending?'smooth':'instant'})}else storyCards[index].scrollIntoView({behavior:allowed()&&!instant?'smooth':'instant',block:'center'})}
$('#previous-story').addEventListener('click',()=>goToStory(activeStory-1));$('#next-story').addEventListener('click',()=>goToStory(activeStory+1));storySteps.forEach((b,i)=>b.addEventListener('click',()=>goToStory(i)));storyCards.forEach((card,i)=>card.addEventListener('focusin',()=>{if(!geometry?.pinned||!keyboardNavigation||restoringFocus)return;const r=card.getBoundingClientRect(),v=storyViewport.getBoundingClientRect();if(r.left<v.left-2||r.right>v.right+2)goToStory(i,true)}));
syncDraft();setActiveStory(0);syncMotion();
