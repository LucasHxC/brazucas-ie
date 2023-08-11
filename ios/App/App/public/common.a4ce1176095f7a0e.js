"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(L,h,c)=>{c.d(h,{c:()=>i});var r=c(4083),d=c(7864),a=c(1898);const i=(n,s)=>{let o,t;const g=(v,p,_)=>{if(typeof document>"u")return;const y=document.elementFromPoint(v,p);y&&s(y)?y!==o&&(m(),w(y,_)):m()},w=(v,p)=>{o=v,t||(t=o);const _=o;(0,r.w)(()=>_.classList.add("ion-activated")),p()},m=(v=!1)=>{if(!o)return;const p=o;(0,r.w)(()=>p.classList.remove("ion-activated")),v&&t!==o&&o.click(),o=void 0};return(0,a.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:v=>g(v.currentX,v.currentY,d.a),onMove:v=>g(v.currentX,v.currentY,d.b),onEnd:()=>{m(!0),(0,d.h)(),t=void 0}})}},5062:(L,h,c)=>{c.d(h,{i:()=>r});const r=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(L,h,c)=>{c.r(h),c.d(h,{startFocusVisible:()=>i});const r="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let s=[],o=!0;const t=n?n.shadowRoot:document,g=n||document.body,w=E=>{s.forEach(l=>l.classList.remove(r)),E.forEach(l=>l.classList.add(r)),s=E},m=()=>{o=!1,w([])},v=E=>{o=a.includes(E.key),o||w([])},p=E=>{if(o&&void 0!==E.composedPath){const l=E.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));w(l)}},_=()=>{t.activeElement===g&&w([])};return t.addEventListener("keydown",v),t.addEventListener("focusin",p),t.addEventListener("focusout",_),t.addEventListener("touchstart",m),t.addEventListener("mousedown",m),{destroy:()=>{t.removeEventListener("keydown",v),t.removeEventListener("focusin",p),t.removeEventListener("focusout",_),t.removeEventListener("touchstart",m),t.removeEventListener("mousedown",m)},setFocus:w}}},8689:(L,h,c)=>{c.d(h,{c:()=>d});var r=c(3577);const d=s=>{const o=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const w=void 0!==o.label||a(o),m=o.hasAttribute("aria-label")||o.hasAttribute("aria-labelledby")&&null===o.shadowRoot,v=(0,r.h)(o);t=!0===o.legacy||!w&&!m&&null!==v}return t}}},a=s=>null!==s.shadowRoot&&!!(i.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||n.includes(s.tagName)&&""!==s.textContent),i=["ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(L,h,c)=>{c.d(h,{a:()=>i,b:()=>n,c:()=>a,d:()=>o,h:()=>s});const r={getEngine(){var t;const g=window;return g.TapticEngine||(null===(t=g.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&g.Capacitor.Plugins.Haptics},available(){var t;const g=window;return!!this.getEngine()&&("web"!==(null===(t=g.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const g=this.getEngine();if(!g)return;const w=this.isCapacitor()?t.style.toUpperCase():t.style;g.impact({style:w})},notification(t){const g=this.getEngine();if(!g)return;const w=this.isCapacitor()?t.style.toUpperCase():t.style;g.notification({style:w})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},d=()=>r.available(),a=()=>{d()&&r.selection()},i=()=>{d()&&r.selectionStart()},n=()=>{d()&&r.selectionChanged()},s=()=>{d()&&r.selectionEnd()},o=t=>{d()&&r.impact(t)}},7366:(L,h,c)=>{c.d(h,{a:()=>r,b:()=>p,c:()=>o,d:()=>_,e:()=>M,f:()=>s,g:()=>y,h:()=>a,i:()=>d,j:()=>f,k:()=>O,l:()=>t,m:()=>m,n:()=>E,o:()=>w,p:()=>n,q:()=>i,r:()=>e,s:()=>C,t:()=>v,u:()=>l,v:()=>u,w:()=>g});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(L,h,c)=>{c.d(h,{I:()=>s,a:()=>w,b:()=>n,c:()=>p,d:()=>y,f:()=>m,g:()=>g,i:()=>t,p:()=>_,r:()=>E,s:()=>v});var r=c(5861),d=c(3577),a=c(1178);const n="ion-content",s=".ion-content-scroll-host",o=`${n}, ${s}`,t=l=>"ION-CONTENT"===l.tagName,g=function(){var l=(0,r.Z)(function*(u){return t(u)?(yield new Promise(e=>(0,d.c)(u,e)),u.getScrollElement()):u});return function(e){return l.apply(this,arguments)}}(),w=l=>l.querySelector(s)||l.querySelector(o),m=l=>l.closest(o),v=(l,u)=>t(l)?l.scrollToTop(u):Promise.resolve(l.scrollTo({top:0,left:0,behavior:u>0?"smooth":"auto"})),p=(l,u,e,f)=>t(l)?l.scrollByPoint(u,e,f):Promise.resolve(l.scrollBy({top:e,left:u,behavior:f>0?"smooth":"auto"})),_=l=>(0,a.b)(l,n),y=l=>{if(t(l)){const e=l.scrollY;return l.scrollY=!1,e}return l.style.setProperty("overflow","hidden"),!0},E=(l,u)=>{t(l)?l.scrollY=u:l.style.removeProperty("overflow")}},9240:(L,h,c)=>{c.d(h,{g:()=>d});var r=c(1178);const d=(i,n,s)=>{const o=null==i?0:i.toString().length,t=a(o,n);if(void 0===s)return t;try{return s(o,n)}catch(g){return(0,r.a)("Exception in provided `counterFormatter`.",g),t}},a=(i,n)=>`${i} / ${n}`},5234:(L,h,c)=>{c.r(h),c.d(h,{KEYBOARD_DID_CLOSE:()=>d,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>u,keyboardDidClose:()=>_,keyboardDidOpen:()=>v,keyboardDidResize:()=>p,resetKeyboardAssist:()=>o,setKeyboardClose:()=>m,setKeyboardOpen:()=>w,startKeyboardAssist:()=>t,trackViewportChanges:()=>l});const r="ionKeyboardDidShow",d="ionKeyboardDidHide";let i={},n={},s=!1;const o=()=>{i={},n={},s=!1},t=e=>{g(e),e.visualViewport&&(n=u(e.visualViewport),e.visualViewport.onresize=()=>{l(e),v()||p(e)?w(e):_(e)&&m(e)})},g=e=>{e.addEventListener("keyboardDidShow",f=>w(e,f)),e.addEventListener("keyboardDidHide",()=>m(e))},w=(e,f)=>{y(e,f),s=!0},m=e=>{E(e),s=!1},v=()=>!s&&i.width===n.width&&(i.height-n.height)*n.scale>150,p=e=>s&&!_(e),_=e=>s&&n.height===e.innerHeight,y=(e,f)=>{const C=new CustomEvent(r,{detail:{keyboardHeight:f?f.keyboardHeight:e.innerHeight-n.height}});e.dispatchEvent(C)},E=e=>{const f=new CustomEvent(d);e.dispatchEvent(f)},l=e=>{i=Object.assign({},n),n=u(e.visualViewport)},u=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})},9852:(L,h,c)=>{c.d(h,{c:()=>d});var r=c(3457);const d=a=>{let i,n,s;const o=()=>{i=()=>{s=!0,a&&a(!0)},n=()=>{s=!1,a&&a(!1)},null==r.w||r.w.addEventListener("keyboardWillShow",i),null==r.w||r.w.addEventListener("keyboardWillHide",n)};return o(),{init:o,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",i),null==r.w||r.w.removeEventListener("keyboardWillHide",n),i=n=void 0},isKeyboardVisible:()=>s}}},7741:(L,h,c)=>{c.d(h,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(a,i,n)=>{const s=a*i/n-a+"ms",o=2*Math.PI*i/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,i,n)=>{const s=i/n,o=a*s-a+"ms",t=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":a*i/n-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":a*i/n-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":a*i/n-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":a*i/n-a+"ms"}})}}},7539:(L,h,c)=>{c.r(h),c.d(h,{createSwipeBackGesture:()=>n});var r=c(3577),d=c(5062),a=c(1898);c(4349);const n=(s,o,t,g,w)=>{const m=s.ownerDocument.defaultView;let v=(0,d.i)(s);const _=e=>v?-e.deltaX:e.deltaX;return(0,a.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>(v=(0,d.i)(s),(e=>{const{startX:O}=e;return v?O>=m.innerWidth-50:O<=50})(e)&&o()),onStart:t,onMove:e=>{const O=_(e)/m.innerWidth;g(O)},onEnd:e=>{const f=_(e),O=m.innerWidth,C=f/O,M=(e=>v?-e.velocityX:e.velocityX)(e),x=M>=0&&(M>.2||f>O/2),D=(x?1-C:C)*O;let b=0;if(D>5){const S=D/Math.abs(M);b=Math.min(S,540)}w(x,C<=0?.01:(0,r.l)(0,C,.9999),b)}})}}}]);