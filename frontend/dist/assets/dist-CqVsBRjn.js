var e={MEDIA_PLAY_REQUEST:`mediaplayrequest`,MEDIA_PAUSE_REQUEST:`mediapauserequest`,MEDIA_MUTE_REQUEST:`mediamuterequest`,MEDIA_UNMUTE_REQUEST:`mediaunmuterequest`,MEDIA_LOOP_REQUEST:`medialooprequest`,MEDIA_VOLUME_REQUEST:`mediavolumerequest`,MEDIA_SEEK_REQUEST:`mediaseekrequest`,MEDIA_AIRPLAY_REQUEST:`mediaairplayrequest`,MEDIA_ENTER_FULLSCREEN_REQUEST:`mediaenterfullscreenrequest`,MEDIA_EXIT_FULLSCREEN_REQUEST:`mediaexitfullscreenrequest`,MEDIA_PREVIEW_REQUEST:`mediapreviewrequest`,MEDIA_ENTER_PIP_REQUEST:`mediaenterpiprequest`,MEDIA_EXIT_PIP_REQUEST:`mediaexitpiprequest`,MEDIA_ENTER_CAST_REQUEST:`mediaentercastrequest`,MEDIA_EXIT_CAST_REQUEST:`mediaexitcastrequest`,MEDIA_SHOW_TEXT_TRACKS_REQUEST:`mediashowtexttracksrequest`,MEDIA_HIDE_TEXT_TRACKS_REQUEST:`mediahidetexttracksrequest`,MEDIA_SHOW_SUBTITLES_REQUEST:`mediashowsubtitlesrequest`,MEDIA_DISABLE_SUBTITLES_REQUEST:`mediadisablesubtitlesrequest`,MEDIA_TOGGLE_SUBTITLES_REQUEST:`mediatogglesubtitlesrequest`,MEDIA_PLAYBACK_RATE_REQUEST:`mediaplaybackraterequest`,MEDIA_RENDITION_REQUEST:`mediarenditionrequest`,MEDIA_AUDIO_TRACK_REQUEST:`mediaaudiotrackrequest`,MEDIA_SEEK_TO_LIVE_REQUEST:`mediaseektoliverequest`,REGISTER_MEDIA_STATE_RECEIVER:`registermediastatereceiver`,UNREGISTER_MEDIA_STATE_RECEIVER:`unregistermediastatereceiver`},t={MEDIA_CHROME_ATTRIBUTES:`mediachromeattributes`,MEDIA_CONTROLLER:`mediacontroller`},n={MEDIA_AIRPLAY_UNAVAILABLE:`mediaAirplayUnavailable`,MEDIA_AUDIO_TRACK_ENABLED:`mediaAudioTrackEnabled`,MEDIA_AUDIO_TRACK_LIST:`mediaAudioTrackList`,MEDIA_AUDIO_TRACK_UNAVAILABLE:`mediaAudioTrackUnavailable`,MEDIA_BUFFERED:`mediaBuffered`,MEDIA_CAST_UNAVAILABLE:`mediaCastUnavailable`,MEDIA_CHAPTERS_CUES:`mediaChaptersCues`,MEDIA_CURRENT_TIME:`mediaCurrentTime`,MEDIA_DURATION:`mediaDuration`,MEDIA_ENDED:`mediaEnded`,MEDIA_ERROR:`mediaError`,MEDIA_ERROR_CODE:`mediaErrorCode`,MEDIA_ERROR_MESSAGE:`mediaErrorMessage`,MEDIA_FULLSCREEN_UNAVAILABLE:`mediaFullscreenUnavailable`,MEDIA_HAS_PLAYED:`mediaHasPlayed`,MEDIA_HEIGHT:`mediaHeight`,MEDIA_IS_AIRPLAYING:`mediaIsAirplaying`,MEDIA_IS_CASTING:`mediaIsCasting`,MEDIA_IS_FULLSCREEN:`mediaIsFullscreen`,MEDIA_IS_PIP:`mediaIsPip`,MEDIA_LOADING:`mediaLoading`,MEDIA_MUTED:`mediaMuted`,MEDIA_LOOP:`mediaLoop`,MEDIA_PAUSED:`mediaPaused`,MEDIA_PIP_UNAVAILABLE:`mediaPipUnavailable`,MEDIA_PLAYBACK_RATE:`mediaPlaybackRate`,MEDIA_PREVIEW_CHAPTER:`mediaPreviewChapter`,MEDIA_PREVIEW_COORDS:`mediaPreviewCoords`,MEDIA_PREVIEW_IMAGE:`mediaPreviewImage`,MEDIA_PREVIEW_TIME:`mediaPreviewTime`,MEDIA_RENDITION_LIST:`mediaRenditionList`,MEDIA_RENDITION_SELECTED:`mediaRenditionSelected`,MEDIA_RENDITION_UNAVAILABLE:`mediaRenditionUnavailable`,MEDIA_SEEKABLE:`mediaSeekable`,MEDIA_STREAM_TYPE:`mediaStreamType`,MEDIA_SUBTITLES_LIST:`mediaSubtitlesList`,MEDIA_SUBTITLES_SHOWING:`mediaSubtitlesShowing`,MEDIA_TARGET_LIVE_WINDOW:`mediaTargetLiveWindow`,MEDIA_TIME_IS_LIVE:`mediaTimeIsLive`,MEDIA_VOLUME:`mediaVolume`,MEDIA_VOLUME_LEVEL:`mediaVolumeLevel`,MEDIA_VOLUME_UNAVAILABLE:`mediaVolumeUnavailable`,MEDIA_LANG:`mediaLang`,MEDIA_WIDTH:`mediaWidth`},r=Object.entries(n),i=r.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{}),a=r.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{USER_INACTIVE_CHANGE:`userinactivechange`,BREAKPOINTS_CHANGE:`breakpointchange`,BREAKPOINTS_COMPUTED:`breakpointscomputed`});Object.entries(a).reduce((e,[t,n])=>{let r=i[t];return r&&(e[n]=r),e},{userinactivechange:`userinactive`});var o=Object.entries(i).reduce((e,[t,n])=>{let r=a[t];return r&&(e[n]=r),e},{userinactive:`userinactivechange`}),s={SUBTITLES:`subtitles`,CAPTIONS:`captions`,DESCRIPTIONS:`descriptions`,CHAPTERS:`chapters`,METADATA:`metadata`},c={DISABLED:`disabled`,HIDDEN:`hidden`,SHOWING:`showing`},l={MOUSE:`mouse`,PEN:`pen`,TOUCH:`touch`},u={UNAVAILABLE:`unavailable`,UNSUPPORTED:`unsupported`},d={LIVE:`live`,ON_DEMAND:`on-demand`,UNKNOWN:`unknown`},f={INLINE:`inline`,FULLSCREEN:`fullscreen`,PICTURE_IN_PICTURE:`picture-in-picture`};function p(e){return e?.map(h).join(` `)}function m(e){return e?.split(/\s+/).map(ee)}function h(e){if(e){let{id:t,width:n,height:r}=e;return[t,n,r].filter(e=>e!=null).join(`:`)}}function ee(e){if(e){let[t,n,r]=e.split(`:`);return{id:t,width:+n,height:+r}}}function te(e){return e?.map(re).join(` `)}function ne(e){return e?.split(/\s+/).map(ie)}function re(e){if(e){let{id:t,kind:n,language:r,label:i}=e;return[t,n,r,i].filter(e=>e!=null).join(`:`)}}function ie(e){if(e){let[t,n,r,i]=e.split(`:`);return{id:t,kind:n,language:r,label:i}}}function ae(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function oe(e){return typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e)}function se(e){return typeof e==`string`?!isNaN(e)&&!isNaN(parseFloat(e)):!1}var ce=e=>new Promise(t=>setTimeout(t,e)),le={en:{"Start airplay":`Start airplay`,"Stop airplay":`Stop airplay`,Audio:`Audio`,Captions:`Captions`,"Enable captions":`Enable captions`,"Disable captions":`Disable captions`,"Start casting":`Start casting`,"Stop casting":`Stop casting`,"Enter fullscreen mode":`Enter fullscreen mode`,"Exit fullscreen mode":`Exit fullscreen mode`,Mute:`Mute`,Unmute:`Unmute`,Loop:`Loop`,"Enter picture in picture mode":`Enter picture in picture mode`,"Exit picture in picture mode":`Exit picture in picture mode`,Play:`Play`,Pause:`Pause`,"Playback rate":`Playback rate`,"Playback rate {playbackRate}":`Playback rate {playbackRate}`,Quality:`Quality`,"Seek backward":`Seek backward`,"Seek forward":`Seek forward`,Settings:`Settings`,Auto:`Auto`,"audio player":`audio player`,"video player":`video player`,volume:`volume`,seek:`seek`,"closed captions":`closed captions`,"current playback rate":`current playback rate`,"playback time":`playback time`,"media loading":`media loading`,settings:`settings`,"audio tracks":`audio tracks`,quality:`quality`,play:`play`,pause:`pause`,mute:`mute`,unmute:`unmute`,"chapter: {chapterName}":`chapter: {chapterName}`,live:`live`,Off:`Off`,"start airplay":`start airplay`,"stop airplay":`stop airplay`,"start casting":`start casting`,"stop casting":`stop casting`,"enter fullscreen mode":`enter fullscreen mode`,"exit fullscreen mode":`exit fullscreen mode`,"enter picture in picture mode":`enter picture in picture mode`,"exit picture in picture mode":`exit picture in picture mode`,"seek to live":`seek to live`,"playing live":`playing live`,"seek back {seekOffset} seconds":`seek back {seekOffset} seconds`,"seek forward {seekOffset} seconds":`seek forward {seekOffset} seconds`,"Network Error":`Network Error`,"Decode Error":`Decode Error`,"Source Not Supported":`Source Not Supported`,"Encryption Error":`Encryption Error`,"A network error caused the media download to fail.":`A network error caused the media download to fail.`,"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`,"An unsupported error occurred. The server or network failed, or your browser does not support this format.":`An unsupported error occurred. The server or network failed, or your browser does not support this format.`,"The media is encrypted and there are no keys to decrypt it.":`The media is encrypted and there are no keys to decrypt it.`,hour:`hour`,hours:`hours`,minute:`minute`,minutes:`minutes`,second:`second`,seconds:`seconds`,"{time} remaining":`{time} remaining`,"{currentTime} of {totalTime}":`{currentTime} of {totalTime}`,"video not loaded, unknown time.":`video not loaded, unknown time.`}},ue=globalThis.navigator?.language||`en`,de=e=>{ue=e},fe=e=>{let[t]=ue.split(`-`);return le[ue]?.[e]||le[t]?.[e]||le.en?.[e]||e},g=(e,t={})=>fe(e).replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):`{${n}}`),pe=[{singular:`hour`,plural:`hours`},{singular:`minute`,plural:`minutes`},{singular:`second`,plural:`seconds`}],me=(e,t)=>`${e} ${g(e===1?pe[t].singular:pe[t].plural)}`,he=e=>{if(!oe(e))return``;let t=Math.abs(e),n=t!==e,r=new Date(0,0,0,0,0,t,0),i=[r.getHours(),r.getMinutes(),r.getSeconds()].map((e,t)=>e&&me(e,t)).filter(e=>e).join(`, `);return n?g(`{time} remaining`,{time:i}):i};function ge(e,t){let n=!1;e<0&&(n=!0,e=0-e),e=e<0?0:e;let r=Math.floor(e%60),i=Math.floor(e/60%60),a=Math.floor(e/3600),o=Math.floor(t/60%60),s=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(a=i=r=`0`),a=a>0||s>0?a+`:`:``,i=((a||o>=10)&&i<10?`0`+i:i)+`:`,r=r<10?`0`+r:r,(n?`-`:``)+a+i+r}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var _e=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},ve=class extends _e{},ye=class extends ve{constructor(){super(...arguments),this.role=null}},be=class{observe(){}unobserve(){}disconnect(){}},xe={createElement:function(){return new Se.HTMLElement},createElementNS:function(){return new Se.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},Se={ResizeObserver:be,document:xe,Node:ve,Element:ye,HTMLElement:class extends ye{constructor(){super(...arguments),this.innerHTML=``}get content(){return new Se.DocumentFragment}},DocumentFragment:class extends _e{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return``}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},Ce=`global`in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>`u`||window.customElements===void 0,we=Object.keys(Se).every(e=>e in globalThis),_=Ce&&!we?Se:globalThis,v=Ce&&!we?xe:globalThis.document,Te=new WeakMap,Ee=e=>{let t=Te.get(e);return t||Te.set(e,t=new Set),t},De=new _.ResizeObserver(e=>{for(let t of e)for(let e of Ee(t.target))e(t)});function Oe(e,t){Ee(e).add(t),De.observe(e)}function ke(e,t){let n=Ee(e);n.delete(t),n.size||De.unobserve(e)}function y(e){let t={};for(let n of e)t[n.name]=n.value;return t}function Ae(e){return je(e)??Ie(e,`media-controller`)}function je(e){let{MEDIA_CONTROLLER:n}=t,r=e.getAttribute(n);if(r)return Re(e)?.getElementById(r)}var Me=(e,t,n=`.value`)=>{let r=e.querySelector(n);r&&(r.textContent=t)},Ne=(e,t)=>{let n=`slot[name="${t}"]`,r=e.shadowRoot.querySelector(n);return r?r.children:[]},Pe=(e,t)=>Ne(e,t)[0],Fe=(e,t)=>!e||!t?!1:e?.contains(t)?!0:Fe(e,t.getRootNode().host),Ie=(e,t)=>e?e.closest(t)||Ie(e.getRootNode().host,t):null;function Le(e=document){let t=e?.activeElement;return t?Le(t.shadowRoot)??t:null}function Re(e){let t=(e?.getRootNode)?.call(e);return t instanceof ShadowRoot||t instanceof Document?t:null}function ze(e,{depth:t=3,checkOpacity:n=!0,checkVisibilityCSS:r=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:n,checkVisibilityCSS:r});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if(n&&e.opacity===`0`||r&&e.visibility===`hidden`||e.display===`none`)return!1;i=i.parentElement,t--}return!0}function Be(e,t,n,r){let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o===0)return 0;let s=((e-n.x)*i+(t-n.y)*a)/o;return Math.max(0,Math.min(1,s))}function b(e,t){return Ve(e,e=>e===t)||He(e,t)}function Ve(e,t){let n;for(n of e.querySelectorAll(`style:not([media])`)??[]){let e;try{e=n.sheet?.cssRules}catch{continue}for(let n of e??[])if(t(n.selectorText))return n}}function He(e,t){let n=e.querySelectorAll(`style:not([media])`)??[],r=n?.[n.length-1];if(!r?.sheet)return console.warn(`Media Chrome: No style sheet found on style tag of`,e),{style:{setProperty:()=>{},removeProperty:()=>``,getPropertyValue:()=>``}};let i=r?.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length);return r.sheet.cssRules?.[i]}function x(e,t,n=NaN){let r=e.getAttribute(t);return r==null?n:+r}function S(e,t,n){let r=+n;if(n==null||Number.isNaN(r)){e.hasAttribute(t)&&e.removeAttribute(t);return}x(e,t,void 0)!==r&&e.setAttribute(t,`${r}`)}function C(e,t){return e.hasAttribute(t)}function w(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}C(e,t)!=n&&e.toggleAttribute(t,n)}function T(e,t,n=null){return e.getAttribute(t)??n}function E(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=`${n}`;T(e,t,void 0)!==r&&e.setAttribute(t,r)}var Ue=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},D=(e,t,n)=>(Ue(e,t,`read from private field`),n?n.call(e):t.get(e)),We=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ge=(e,t,n,r)=>(Ue(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),O;function Ke(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var qe=class extends _.HTMLElement{constructor(){if(super(),We(this,O,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[t.MEDIA_CONTROLLER,i.MEDIA_PAUSED]}attributeChangedCallback(e,n,r){var i,a,o,s;e===t.MEDIA_CONTROLLER&&(n&&((a=(i=D(this,O))?.unassociateElement)==null||a.call(i,this),Ge(this,O,null)),r&&this.isConnected&&(Ge(this,O,this.getRootNode()?.getElementById(r)),(s=(o=D(this,O))?.associateElement)==null||s.call(o,this)))}connectedCallback(){var e,n;this.tabIndex=-1,this.setAttribute(`aria-hidden`,`true`),Ge(this,O,Je(this)),this.getAttribute(t.MEDIA_CONTROLLER)&&((n=(e=D(this,O))?.associateElement)==null||n.call(e,this)),D(this,O)&&(D(this,O).addEventListener(`pointerdown`,this),D(this,O).addEventListener(`click`,this),D(this,O).hasAttribute(`tabindex`)||(D(this,O).tabIndex=0))}disconnectedCallback(){var e,n,r,i;this.getAttribute(t.MEDIA_CONTROLLER)&&((n=(e=D(this,O))?.unassociateElement)==null||n.call(e,this)),(r=D(this,O))==null||r.removeEventListener(`pointerdown`,this),(i=D(this,O))==null||i.removeEventListener(`click`,this),Ge(this,O,null)}handleEvent(e){let t=e.composedPath()?.[0];if([`video`,`media-controller`].includes(t?.localName)){if(e.type===`pointerdown`)this._pointerType=e.pointerType;else if(e.type===`click`){let{clientX:t,clientY:n}=e,{left:r,top:i,width:a,height:o}=this.getBoundingClientRect(),s=t-r,c=n-i;if(s<0||c<0||s>a||c>o||a===0&&o===0)return;let u=this._pointerType||`mouse`;if(this._pointerType=void 0,u===l.TOUCH){this.handleTap(e);return}else if(u===l.MOUSE||u===l.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return C(this,i.MEDIA_PAUSED)}set mediaPaused(e){w(this,i.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(t){let n=this.mediaPaused?e.MEDIA_PLAY_REQUEST:e.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new _.CustomEvent(n,{composed:!0,bubbles:!0}))}};O=new WeakMap,qe.shadowRootOptions={mode:`open`},qe.getTemplateHTML=Ke;function Je(e){let n=e.getAttribute(t.MEDIA_CONTROLLER);return n?e.getRootNode()?.getElementById(n):Ie(e,`media-controller`)}_.customElements.get(`media-gesture-receiver`)||_.customElements.define(`media-gesture-receiver`,qe);var Ye=qe,Xe=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},k=(e,t,n)=>(Xe(e,t,`read from private field`),n?n.call(e):t.get(e)),A=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},j=(e,t,n,r)=>(Xe(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),M=(e,t,n)=>(Xe(e,t,`access private method`),n),Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,N={AUDIO:`audio`,AUTOHIDE:`autohide`,BREAKPOINTS:`breakpoints`,GESTURES_DISABLED:`gesturesdisabled`,KEYBOARD_CONTROL:`keyboardcontrol`,NO_AUTOHIDE:`noautohide`,USER_INACTIVE:`userinactive`,AUTOHIDE_OVER_CONTROLS:`autohideovercontrols`};function _t(e){return`
    <style>
      
      :host([${i.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${N.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${N.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${N.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${N.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${N.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${N.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${N.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${N.USER_INACTIVE}]:not([${i.MEDIA_PAUSED}]):not([${i.MEDIA_IS_AIRPLAYING}]):not([${i.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${N.USER_INACTIVE}]:not([${N.NO_AUTOHIDE}]):not([${i.MEDIA_PAUSED}]):not([${i.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${N.USER_INACTIVE}][${N.AUTOHIDE_OVER_CONTROLS}]:not([${N.NO_AUTOHIDE}]):not([${i.MEDIA_PAUSED}]):not([${i.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${N.AUDIO}])[${i.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ye.shadowRootOptions.mode}">
          ${Ye.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var vt=Object.values(i),yt=`sm:384 md:576 lg:768 xl:960`;function bt(e){xt(e.target,e.contentRect.width)}function xt(e,t){if(!e.isConnected)return;let n=St(e.getAttribute(N.BREAKPOINTS)??yt),r=Ct(n,t),i=!1;if(Object.keys(n).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,``),i=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),i=!0)}),i){let t=new CustomEvent(a.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(a.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function St(e){let t=e.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(`:`)))}function Ct(e,t){return Object.keys(e).filter(n=>t>=parseInt(e[n]))}var wt=class extends _.HTMLElement{constructor(){if(super(),A(this,at),A(this,st),A(this,lt),A(this,dt),A(this,pt),A(this,Ze,void 0),A(this,Qe,0),A(this,$e,null),A(this,et,null),A(this,tt,void 0),this.breakpointsComputed=!1,A(this,nt,e=>{let t=this.media;for(let n of e){if(n.type!==`childList`)continue;let e=n.removedNodes;for(let r of e){if(r.slot!=`media`||n.target!=this)continue;let e=n.previousSibling&&n.previousSibling.previousElementSibling;if(!e||!t)this.mediaUnsetCallback(r);else{let t=e.slot!==`media`;for(;(e=e.previousSibling)!==null;)e.slot==`media`&&(t=!1);t&&this.mediaUnsetCallback(r)}}if(t)for(let e of n.addedNodes)e===t&&this.handleMediaUpdated(t)}}),A(this,rt,!1),A(this,it,e=>{k(this,rt)||(setTimeout(()=>{bt(e),j(this,rt,!1)},0),j(this,rt,!0))}),A(this,ht,void 0),A(this,gt,()=>{if(!k(this,ht).assignedElements({flatten:!0}).length){k(this,$e)&&this.mediaUnsetCallback(k(this,$e));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}j(this,Ze,new MutationObserver(k(this,nt)))}static get observedAttributes(){return[N.AUTOHIDE,N.GESTURES_DISABLED].concat(vt).filter(e=>![i.MEDIA_RENDITION_LIST,i.MEDIA_AUDIO_TRACK_LIST,i.MEDIA_CHAPTERS_CUES,i.MEDIA_WIDTH,i.MEDIA_HEIGHT,i.MEDIA_ERROR,i.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,n){e.toLowerCase()==N.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(`:scope > [slot=media]`);return e?.nodeName==`SLOT`&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(j(this,$e,e),e.localName.includes(`-`)&&await _.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;k(this,Ze).observe(this,{childList:!0,subtree:!0}),Oe(this,k(this,it));let t=this.getAttribute(N.AUDIO)==null?g(`video player`):g(`audio player`);this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,t),this.handleMediaUpdated(this.media),this.setAttribute(N.USER_INACTIVE,``),xt(this,this.getBoundingClientRect().width);let n=this.querySelector(`:scope > slot[slot=media]`);n&&(j(this,ht,n),k(this,ht).addEventListener(`slotchange`,k(this,gt))),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointermove`,this),this.addEventListener(`pointerup`,this),this.addEventListener(`mouseleave`,this),this.addEventListener(`keyup`,this),(e=_.window)==null||e.addEventListener(`mouseup`,this)}disconnectedCallback(){var e;ke(this,k(this,it)),clearTimeout(k(this,et)),k(this,Ze).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=_.window)==null||e.removeEventListener(`mouseup`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointermove`,this),this.removeEventListener(`pointerup`,this),this.removeEventListener(`mouseleave`,this),this.removeEventListener(`keyup`,this),k(this,ht)&&(k(this,ht).removeEventListener(`slotchange`,k(this,gt)),j(this,ht,null)),j(this,rt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){j(this,$e,null)}handleEvent(e){switch(e.type){case`pointerdown`:j(this,Qe,e.timeStamp);break;case`pointermove`:M(this,at,ot).call(this,e);break;case`pointerup`:M(this,st,ct).call(this,e);break;case`mouseleave`:M(this,lt,ut).call(this);break;case`mouseup`:this.removeAttribute(N.KEYBOARD_CONTROL);break;case`keyup`:M(this,pt,mt).call(this),this.setAttribute(N.KEYBOARD_CONTROL,``);break}}set autohide(e){let t=Number(e);j(this,tt,isNaN(t)?0:t)}get autohide(){return(k(this,tt)===void 0?2:k(this,tt)).toString()}get breakpoints(){return T(this,N.BREAKPOINTS)}set breakpoints(e){E(this,N.BREAKPOINTS,e)}get audio(){return C(this,N.AUDIO)}set audio(e){w(this,N.AUDIO,e)}get gesturesDisabled(){return C(this,N.GESTURES_DISABLED)}set gesturesDisabled(e){w(this,N.GESTURES_DISABLED,e)}get keyboardControl(){return C(this,N.KEYBOARD_CONTROL)}set keyboardControl(e){w(this,N.KEYBOARD_CONTROL,e)}get noAutohide(){return C(this,N.NO_AUTOHIDE)}set noAutohide(e){w(this,N.NO_AUTOHIDE,e)}get autohideOverControls(){return C(this,N.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){w(this,N.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return C(this,N.USER_INACTIVE)}set userInteractive(e){w(this,N.USER_INACTIVE,e)}};Ze=new WeakMap,Qe=new WeakMap,$e=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap,at=new WeakSet,ot=function(e){if(e.pointerType!==`mouse`&&e.timeStamp-k(this,Qe)<250)return;M(this,dt,ft).call(this),clearTimeout(k(this,et));let t=this.hasAttribute(N.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&M(this,pt,mt).call(this)},st=new WeakSet,ct=function(e){if(e.pointerType===`touch`){let t=!this.hasAttribute(N.USER_INACTIVE);[this,this.media].includes(e.target)&&t?M(this,lt,ut).call(this):M(this,pt,mt).call(this)}else e.composedPath().some(e=>[`media-play-button`,`media-fullscreen-button`].includes(e?.localName))&&M(this,pt,mt).call(this)},lt=new WeakSet,ut=function(){if(k(this,tt)<0||this.hasAttribute(N.USER_INACTIVE))return;this.setAttribute(N.USER_INACTIVE,``);let e=new _.CustomEvent(a.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},dt=new WeakSet,ft=function(){if(!this.hasAttribute(N.USER_INACTIVE))return;this.removeAttribute(N.USER_INACTIVE);let e=new _.CustomEvent(a.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},pt=new WeakSet,mt=function(){M(this,dt,ft).call(this),clearTimeout(k(this,et));let e=parseInt(this.autohide);e<0||j(this,et,setTimeout(()=>{M(this,lt,ut).call(this)},e*1e3))},ht=new WeakMap,gt=new WeakMap,wt.shadowRootOptions={mode:`open`},wt.getTemplateHTML=_t,_.customElements.get(`media-container`)||_.customElements.define(`media-container`,wt);var Tt=wt,Et=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},P=(e,t,n)=>(Et(e,t,`read from private field`),n?n.call(e):t.get(e)),Dt=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ot=(e,t,n,r)=>(Et(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),kt,At,jt,Mt,Nt,Pt,Ft=class{constructor(e,t,{defaultValue:n}={defaultValue:void 0}){Dt(this,Nt),Dt(this,kt,void 0),Dt(this,At,void 0),Dt(this,jt,void 0),Dt(this,Mt,new Set),Ot(this,kt,e),Ot(this,At,t),Ot(this,jt,new Set(n))}[Symbol.iterator](){return P(this,Nt,Pt).values()}get length(){return P(this,Nt,Pt).size}get value(){return[...P(this,Nt,Pt)].join(` `)??``}set value(e){e!==this.value&&(Ot(this,Mt,new Set),this.add(...e?.split(` `)??[]))}toString(){return this.value}item(e){return[...P(this,Nt,Pt)][e]}values(){return P(this,Nt,Pt).values()}forEach(e,t){P(this,Nt,Pt).forEach(e,t)}add(...e){var t;e.forEach(e=>P(this,Mt).add(e)),!(this.value===``&&!P(this,kt)?.hasAttribute(`${P(this,At)}`))&&((t=P(this,kt))==null||t.setAttribute(`${P(this,At)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>P(this,Mt).delete(e)),(t=P(this,kt))==null||t.setAttribute(`${P(this,At)}`,`${this.value}`)}contains(e){return P(this,Nt,Pt).has(e)}toggle(e,t){return t===void 0?this.contains(e)?(this.remove(e),!1):(this.add(e),!0):t?(this.add(e),!0):(this.remove(e),!1)}replace(e,t){return this.remove(e),this.add(t),e===t}};kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap,Nt=new WeakSet,Pt=function(){return P(this,Mt).size?P(this,Mt):P(this,jt)};var It=(e=``)=>e.split(/\s+/),Lt=(e=``)=>{let[t,n,r]=e.split(`:`),i=r?decodeURIComponent(r):void 0;return{kind:t===`cc`?s.CAPTIONS:s.SUBTITLES,language:n,label:i}},Rt=(e=``,t={})=>It(e).map(e=>{let n=Lt(e);return{...t,...n}}),zt=e=>e?Array.isArray(e)?e.map(e=>typeof e==`string`?Lt(e):e):typeof e==`string`?Rt(e):[e]:[],Bt=({kind:e,label:t,language:n}={kind:`subtitles`})=>t?`${e===`captions`?`cc`:`sb`}:${n}:${encodeURIComponent(t)}`:n,Vt=(e=[])=>Array.prototype.map.call(e,Bt).join(` `),Ht=(e,t)=>n=>n[e]===t,Ut=e=>{let t=Object.entries(e).map(([e,t])=>Ht(e,t));return e=>t.every(t=>t(e))},Wt=(e,t=[],n=[])=>{let r=zt(n).map(Ut);Array.from(t).filter(e=>r.some(t=>t(e))).forEach(t=>{t.mode=e})},Gt=(e,t=()=>!0)=>{if(!e?.textTracks)return[];let n=typeof t==`function`?t:Ut(t);return Array.from(e.textTracks).filter(n)},Kt=e=>!!e.mediaSubtitlesShowing?.length||e.hasAttribute(i.MEDIA_SUBTITLES_SHOWING),qt=e=>{let{media:t,fullscreenElement:n}=e;try{let e=n&&`requestFullscreen`in n?`requestFullscreen`:n&&`webkitRequestFullScreen`in n?`webkitRequestFullScreen`:void 0;if(e){let t=n[e]?.call(n);if(t instanceof Promise)return t.catch(()=>{})}else t?.webkitEnterFullscreen?t.webkitEnterFullscreen():t?.requestFullscreen&&t.requestFullscreen()}catch(e){console.error(e)}},Jt=`exitFullscreen`in v?`exitFullscreen`:`webkitExitFullscreen`in v?`webkitExitFullscreen`:`webkitCancelFullScreen`in v?`webkitCancelFullScreen`:void 0,Yt=e=>{let{documentElement:t}=e;if(Jt){let e=(t?.[Jt])?.call(t);if(e instanceof Promise)return e.catch(()=>{})}},Xt=`fullscreenElement`in v?`fullscreenElement`:`webkitFullscreenElement`in v?`webkitFullscreenElement`:void 0,Zt=e=>{let{documentElement:t,media:n}=e,r=t?.[Xt];return!r&&`webkitDisplayingFullscreen`in n&&`webkitPresentationMode`in n&&n.webkitDisplayingFullscreen&&n.webkitPresentationMode===f.FULLSCREEN?n:r},Qt=e=>{let{media:t,documentElement:n,fullscreenElement:r=t}=e;if(!t||!n)return!1;let i=Zt(e);if(!i)return!1;if(i===r||i===t)return!0;if(i.localName.includes(`-`)){let e=i.shadowRoot;if(!(Xt in e))return Fe(i,r);for(;e?.[Xt];){if(e[Xt]===r)return!0;e=e[Xt]?.shadowRoot}}return!1},$t=`fullscreenEnabled`in v?`fullscreenEnabled`:`webkitFullscreenEnabled`in v?`webkitFullscreenEnabled`:void 0,en=e=>{let{documentElement:t,media:n}=e;return!!t?.[$t]||n&&`webkitSupportsFullscreen`in n},tn,nn=()=>{var e;return tn||(tn=((e=v)?.createElement)?.call(e,`video`),tn)},rn=async(e=nn())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let n=new AbortController,r=await Promise.race([an(e,n.signal),on(e,t)]);return n.abort(),r},an=(e,t)=>new Promise(n=>{e.addEventListener(`volumechange`,()=>n(!0),{signal:t})}),on=async(e,t)=>{for(let n=0;n<10;n++){if(e.volume===t)return!1;await ce(10)}return e.volume!==t},sn=/.*Version\/.*Safari\/.*/.test(_.navigator.userAgent),cn=(e=nn())=>_.matchMedia(`(display-mode: standalone)`).matches&&sn?!1:typeof e?.requestPictureInPicture==`function`,ln=(e=nn())=>en({documentElement:v,media:e}),un=ln(),dn=cn(),fn=!!_.WebKitPlaybackTargetAvailabilityEvent,pn=!!_.chrome,mn=e=>Gt(e.media,e=>[s.SUBTITLES,s.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),hn=e=>Gt(e.media,e=>e.mode===c.SHOWING&&[s.SUBTITLES,s.CAPTIONS].includes(e.kind)),gn=(e,t)=>{let n=mn(e),r=hn(e),i=!!r.length;if(n.length){if(t===!1||i&&t!==!0)Wt(c.DISABLED,n,r);else if(t===!0||!i&&t!==!1){let t=n[0],{options:i}=e;if(!i?.noSubtitlesLangPref){let e=_.localStorage.getItem(`media-chrome-pref-subtitles-lang`),r=e?[e,..._.navigator.languages]:_.navigator.languages,i=n.filter(e=>r.some(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))).sort((e,t)=>r.findIndex(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))-r.findIndex(e=>t.language.toLowerCase().startsWith(e.split(`-`)[0])));i[0]&&(t=i[0])}let{language:a,label:o,kind:s}=t;Wt(c.DISABLED,n,r),Wt(c.SHOWING,n,[{language:a,label:o,kind:s}])}}},_n=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e==`number`&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e==`object`?Array.isArray(e)?vn(e,t):Object.entries(e).every(([e,n])=>e in t&&_n(n,t[e])):!1,vn=(e,t)=>{let n=Array.isArray(e),r=Array.isArray(t);return n===r?n||r?e.length===t.length?e.every((e,n)=>_n(e,t[n])):!1:!0:!1},yn=Object.values(d),bn,xn=rn().then(e=>(bn=e,bn)),Sn=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!(`localName`in e&&e instanceof _.HTMLElement))return;let t=e.localName;if(!t.includes(`-`))return;let n=_.customElements.get(t);n&&e instanceof n||(await _.customElements.whenDefined(t),_.customElements.upgrade(e))}))},Cn=new _.DOMParser,wn=e=>e&&(Cn.parseFromString(e,`text/html`).body.textContent||e),Tn={mediaError:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorCode:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.code},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorMessage:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.message??``},mediaEvents:[`emptied`,`error`,`playing`]},mediaWidth:{get(e){let{media:t}=e;return t?.videoWidth??0},mediaEvents:[`resize`]},mediaHeight:{get(e){let{media:t}=e;return t?.videoHeight??0},mediaEvents:[`resize`]},mediaPaused:{get(e){let{media:t}=e;return t?.paused??!0},set(e,t){var n;let{media:r}=t;r&&(e?r.pause():(n=r.play())==null||n.catch(()=>{}))},mediaEvents:[`play`,`playing`,`pause`,`emptied`]},mediaHasPlayed:{get(e,t){let{media:n}=e;return n?t?t.type===`playing`:!n.paused:!1},mediaEvents:[`playing`,`emptied`]},mediaEnded:{get(e){let{media:t}=e;return t?.ended??!1},mediaEvents:[`seeked`,`ended`,`emptied`]},mediaPlaybackRate:{get(e){let{media:t}=e;return t?.playbackRate??1},set(e,t){let{media:n}=t;n&&Number.isFinite(+e)&&(n.playbackRate=+e)},mediaEvents:[`ratechange`,`loadstart`]},mediaMuted:{get(e){let{media:t}=e;return t?.muted??!1},set(e,t){let{media:n,options:{noMutedPref:r}={}}=t;if(n){n.muted=e;try{let t=_.localStorage.getItem(`media-chrome-pref-muted`)!==null,i=n.hasAttribute(`muted`);if(r){t&&_.localStorage.removeItem(`media-chrome-pref-muted`);return}if(i&&!t)return;_.localStorage.setItem(`media-chrome-pref-muted`,e?`true`:`false`)}catch(e){console.debug(`Error setting muted pref`,e)}}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:n}}=t,{media:r}=t;if(!(!r||r.muted||n))try{let n=_.localStorage.getItem(`media-chrome-pref-muted`)===`true`;Tn.mediaMuted.set(n,t),e(n)}catch(e){console.debug(`Error getting muted pref`,e)}}]},mediaLoop:{get(e){let{media:t}=e;return t?.loop},set(e,t){let{media:n}=t;n&&(n.loop=e)},mediaEvents:[`medialooprequest`]},mediaVolume:{get(e){let{media:t}=e;return t?.volume??1},set(e,t){let{media:n,options:{noVolumePref:r}={}}=t;if(n){try{e==null?_.localStorage.removeItem(`media-chrome-pref-volume`):!n.hasAttribute(`muted`)&&!r&&_.localStorage.setItem(`media-chrome-pref-volume`,e.toString())}catch(e){console.debug(`Error setting volume pref`,e)}Number.isFinite(+e)&&(n.volume=+e)}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:n}}=t;if(!n)try{let{media:n}=t;if(!n)return;let r=_.localStorage.getItem(`media-chrome-pref-volume`);if(r==null)return;Tn.mediaVolume.set(+r,t),e(+r)}catch(e){console.debug(`Error getting volume pref`,e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return t?.volume===void 0?`high`:t.muted||t.volume===0?`off`:t.volume<.5?`low`:t.volume<.75?`medium`:`high`},mediaEvents:[`volumechange`]},mediaCurrentTime:{get(e){let{media:t}=e;return t?.currentTime??0},set(e,t){let{media:n}=t;!n||!oe(e)||(n.currentTime=e)},mediaEvents:[`timeupdate`,`loadedmetadata`]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:n}={}}=e;return n&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?n:Number.isFinite(t?.duration)?t.duration:NaN},mediaEvents:[`durationchange`,`loadedmetadata`,`emptied`]},mediaLoading:{get(e){let{media:t}=e;return t?.readyState<3},mediaEvents:[`waiting`,`playing`,`emptied`]},mediaSeekable:{get(e){let{media:t}=e;if(!t?.seekable?.length)return;let n=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!n&&!r))return[Number(n.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:[`loadedmetadata`,`emptied`,`progress`,`seekablechange`]},mediaBuffered:{get(e){let{media:t}=e,n=t?.buffered??[];return Array.from(n).map((e,t)=>[Number(n.start(t).toFixed(3)),Number(n.end(t).toFixed(3))])},mediaEvents:[`progress`,`emptied`]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:n}={}}=e,r=[d.LIVE,d.ON_DEMAND].includes(n)?n:void 0;if(!t)return r;let{streamType:i}=t;if(yn.includes(i))return i===d.UNKNOWN?r:i;let a=t.duration;return a===1/0?d.LIVE:Number.isFinite(a)?d.ON_DEMAND:r},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:n}=t,r=Tn.mediaStreamType.get(e);return(n==null||Number.isNaN(n))&&r===d.LIVE?0:n},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`,`targetlivewindowchange`]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:n=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart==`number`)return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(Tn.mediaStreamType.get(e)!==d.LIVE)return!1;let r=t.seekable;if(!r)return!0;if(!r.length)return!1;let i=r.end(r.length-1)-n;return t.currentTime>=i},mediaEvents:[`playing`,`timeupdate`,`progress`,`waiting`,`emptied`]},mediaSubtitlesList:{get(e){return mn(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`]},mediaSubtitlesShowing:{get(e){return hn(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{var n,r;let{media:i,options:a}=t;if(!i)return;let o=e=>{a.defaultSubtitles&&(e&&![s.CAPTIONS,s.SUBTITLES].includes(e?.track?.kind)||gn(t,!0))};return i.addEventListener(`loadstart`,o),(n=i.textTracks)==null||n.addEventListener(`addtrack`,o),(r=i.textTracks)==null||r.addEventListener(`removetrack`,o),()=>{var e,t;i.removeEventListener(`loadstart`,o),(e=i.textTracks)==null||e.removeEventListener(`addtrack`,o),(t=i.textTracks)==null||t.removeEventListener(`removetrack`,o)}}]},mediaChaptersCues:{get(e){let{media:t}=e;if(!t)return[];let[n]=Gt(t,{kind:s.CHAPTERS});return Array.from(n?.cues??[]).map(({text:e,startTime:t,endTime:n})=>({text:wn(e),startTime:t,endTime:n}))},mediaEvents:[`loadstart`,`loadedmetadata`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{let{media:n}=t;if(!n)return;let r=n.querySelector(`track[kind="chapters"][default][src]`),i=n.shadowRoot?.querySelector(`:is(video,audio) > track[kind="chapters"][default][src]`);return r?.addEventListener(`load`,e),i?.addEventListener(`load`,e),()=>{r?.removeEventListener(`load`,e),i?.removeEventListener(`load`,e)}}]},mediaIsPip:{get(e){let{media:t,documentElement:n}=e;if(!t||!n||!n.pictureInPictureElement)return!1;if(n.pictureInPictureElement===t)return!0;if(n.pictureInPictureElement instanceof HTMLMediaElement)return t.localName?.includes(`-`)?Fe(t,n.pictureInPictureElement):!1;if(n.pictureInPictureElement.localName.includes(`-`)){let e=n.pictureInPictureElement.shadowRoot;for(;e?.pictureInPictureElement;){if(e.pictureInPictureElement===t)return!0;e=e.pictureInPictureElement?.shadowRoot}}return!1},set(e,t){let{media:n}=t;if(n)if(e){if(!v.pictureInPictureEnabled){console.warn(`MediaChrome: Picture-in-picture is not enabled`);return}if(!n.requestPictureInPicture){console.warn(`MediaChrome: The current media does not support picture-in-picture`);return}let e=()=>{console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.`)};n.requestPictureInPicture().catch(t=>{if(t.code===11){if(!n.src){console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a src set.`);return}if(n.readyState===0&&n.preload===`none`){let t=()=>{n.removeEventListener(`loadedmetadata`,r),n.preload=`none`},r=()=>{n.requestPictureInPicture().catch(e),t()};n.addEventListener(`loadedmetadata`,r),n.preload=`metadata`,setTimeout(()=>{n.readyState===0&&e(),t()},1e3)}else throw t}else throw t})}else v.pictureInPictureElement&&v.exitPictureInPicture()},mediaEvents:[`enterpictureinpicture`,`leavepictureinpicture`]},mediaRenditionList:{get(e){let{media:t}=e;return[...t?.videoRenditions??[]].map(e=>({...e}))},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaRenditionSelected:{get(e){let{media:t}=e;return t?.videoRenditions?.[t.videoRenditions?.selectedIndex]?.id},set(e,t){let{media:n}=t;if(!n?.videoRenditions){console.warn(`MediaController: Rendition selection not supported by this media.`);return}let r=e,i=Array.prototype.findIndex.call(n.videoRenditions,e=>e.id==r);n.videoRenditions.selectedIndex!=i&&(n.videoRenditions.selectedIndex=i)},mediaEvents:[`emptied`],videoRenditionsEvents:[`addrendition`,`removerendition`,`change`]},mediaAudioTrackList:{get(e){let{media:t}=e;return[...t?.audioTracks??[]]},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaAudioTrackEnabled:{get(e){let{media:t}=e;return[...t?.audioTracks??[]].find(e=>e.enabled)?.id},set(e,t){let{media:n}=t;if(!n?.audioTracks){console.warn(`MediaChrome: Audio track selection not supported by this media.`);return}let r=e;for(let e of n.audioTracks)e.enabled=r==e.id},mediaEvents:[`emptied`],audioTracksEvents:[`addtrack`,`removetrack`,`change`]},mediaIsFullscreen:{get(e){return Qt(e)},set(e,t,n){var r;e?(qt(t),n.detail&&!t.media?.inert&&((r=t.media)==null||r.focus())):Yt(t)},rootEvents:[`fullscreenchange`,`webkitfullscreenchange`],mediaEvents:[`webkitbeginfullscreen`,`webkitendfullscreen`,`webkitpresentationmodechanged`]},mediaIsCasting:{get(e){let{media:t}=e;return!t?.remote||t.remote?.state===`disconnected`?!1:!!t.remote.state},set(e,t){let{media:n}=t;if(n&&!(e&&n.remote?.state!==`disconnected`)&&!(!e&&n.remote?.state!==`connected`)){if(typeof n.remote.prompt!=`function`){console.warn(`MediaChrome: Casting is not supported in this environment`);return}n.remote.prompt().catch(()=>{})}},remoteEvents:[`connect`,`connecting`,`disconnect`]},mediaIsAirplaying:{get(){return!1},set(e,t){let{media:n}=t;if(n){if(!(n.webkitShowPlaybackTargetPicker&&_.WebKitPlaybackTargetAvailabilityEvent)){console.error(`MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment`);return}n.webkitShowPlaybackTargetPicker()}},mediaEvents:[`webkitcurrentplaybacktargetiswirelesschanged`]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!un||!ln(t))return u.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!dn||!cn(t))return u.UNSUPPORTED;if(t?.disablePictureInPicture)return u.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(bn===!1||t?.volume==null)return u.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{bn??xn.then(t=>e(t?void 0:u.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t=`not-available`}={}){let{media:n}=e;if(!pn||!n?.remote?.state)return u.UNSUPPORTED;if(!(t==null||t===`available`))return u.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get(e,t){if(!fn)return u.UNSUPPORTED;if(t?.availability===`not-available`)return u.UNAVAILABLE},mediaEvents:[`webkitplaybacktargetavailabilitychanged`],stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){let{media:t}=e;if(!t?.videoRenditions)return u.UNSUPPORTED;if(!t.videoRenditions?.length)return u.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaAudioTrackUnavailable:{get(e){let{media:t}=e;if(!t?.audioTracks)return u.UNSUPPORTED;if((t.audioTracks?.length??0)<=1)return u.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return t??`en`}}},En={[e.MEDIA_PREVIEW_REQUEST](e,t,{detail:n}){let{media:r}=t,i=n??void 0,a,o;if(r&&i!=null){let[e]=Gt(r,{kind:s.METADATA,label:`thumbnails`}),t=Array.prototype.find.call(e?.cues??[],(e,t,n)=>t===0?e.endTime>i:t===n.length-1?e.startTime<=i:e.startTime<=i&&e.endTime>i);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:r?.querySelector(`track[label="thumbnails"]`)?.src,n=new URL(t.text,e);o=new URLSearchParams(n.hash).get(`#xywh`).split(`,`).map(e=>+e),a=n.href}}let c=e.mediaDuration.get(t),l=e.mediaChaptersCues.get(t).find((e,t,n)=>t===n.length-1&&c===e.endTime?e.startTime<=i&&e.endTime>=i:e.startTime<=i&&e.endTime>i)?.text;return n!=null&&l==null&&(l=``),{mediaPreviewTime:i,mediaPreviewImage:a,mediaPreviewCoords:o,mediaPreviewChapter:l}},[e.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[e.MEDIA_PLAY_REQUEST](e,t){let n=e.mediaStreamType.get(t)===d.LIVE,r=!t.options?.noAutoSeekToLive,i=e.mediaTargetLiveWindow.get(t)>0;if(n&&r&&!i){let n=e.mediaSeekable.get(t)?.[1];if(n){let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)}}e.mediaPaused.set(!1,t)},[e.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:n}){let r=n;e.mediaPlaybackRate.set(r,t)},[e.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[e.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[e.MEDIA_LOOP_REQUEST](e,t,{detail:n}){let r=!!n;return e.mediaLoop.set(r,t),{mediaLoop:r}},[e.MEDIA_VOLUME_REQUEST](e,t,{detail:n}){let r=n;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(r,t)},[e.MEDIA_SEEK_REQUEST](e,t,{detail:n}){let r=n;e.mediaCurrentTime.set(r,t)},[e.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){let n=e.mediaSeekable.get(t)?.[1];if(Number.isNaN(Number(n)))return;let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)},[e.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:n}){let{options:r}=t,i=mn(t),a=zt(n),o=a[0]?.language;o&&!r.noSubtitlesLangPref&&_.localStorage.setItem(`media-chrome-pref-subtitles-lang`,o),Wt(c.SHOWING,i,a)},[e.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:n}){let r=mn(t),i=n??[];Wt(c.DISABLED,r,i)},[e.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:n}){gn(t,n)},[e.MEDIA_RENDITION_REQUEST](e,t,{detail:n}){let r=n;e.mediaRenditionSelected.set(r,t)},[e.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:n}){let r=n;e.mediaAudioTrackEnabled.set(r,t)},[e.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[e.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[e.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,n){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,n)},[e.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[e.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[e.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[e.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},Dn=({media:e,fullscreenElement:t,documentElement:n,stateMediator:r=Tn,requestMap:i=En,options:a={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{let s=[],c={options:{...a}},l=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),u=e=>{e!=null&&(_n(e,l)||(l=Object.freeze({...l,...e}),s.forEach(e=>e(l))))},d=()=>{u(Object.entries(r).reduce((e,[t,{get:n}])=>(e[t]=n(c),e),{}))},f={},p,m=async(e,t)=>{let n=!!p;if(p={...c,...p??{},...e},n)return;await Sn(...Object.values(e));let i=s.length>0&&t===0&&o,a=c.media!==p.media,l=c.media?.textTracks!==p.media?.textTracks,m=c.media?.videoRenditions!==p.media?.videoRenditions,h=c.media?.audioTracks!==p.media?.audioTracks,ee=c.media?.remote!==p.media?.remote,te=c.documentElement!==p.documentElement,ne=!!c.media&&(a||i),re=!!c.media?.textTracks&&(l||i),ie=!!c.media?.videoRenditions&&(m||i),ae=!!c.media?.audioTracks&&(h||i),oe=!!c.media?.remote&&(ee||i),se=!!c.documentElement&&(te||i),ce=ne||re||ie||ae||oe||se,le=s.length===0&&t===1&&o,ue=!!p.media&&(a||le),de=!!p.media?.textTracks&&(l||le),fe=!!p.media?.videoRenditions&&(m||le),g=!!p.media?.audioTracks&&(h||le),pe=!!p.media?.remote&&(ee||le),me=!!p.documentElement&&(te||le),he=ue||de||fe||g||pe||me;if(!(ce||he)){Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0;return}Object.entries(r).forEach(([e,{get:t,mediaEvents:n=[],textTracksEvents:r=[],videoRenditionsEvents:i=[],audioTracksEvents:a=[],remoteEvents:o=[],rootEvents:s=[],stateOwnersUpdateHandlers:l=[]}])=>{f[e]||(f[e]={});let d=n=>{let r=t(c,n);u({[e]:r})},m;m=f[e].mediaEvents,n.forEach(t=>{m&&ne&&(c.media.removeEventListener(t,m),f[e].mediaEvents=void 0),ue&&(p.media.addEventListener(t,d),f[e].mediaEvents=d)}),m=f[e].textTracksEvents,r.forEach(t=>{var n,r;m&&re&&((n=c.media.textTracks)==null||n.removeEventListener(t,m),f[e].textTracksEvents=void 0),de&&((r=p.media.textTracks)==null||r.addEventListener(t,d),f[e].textTracksEvents=d)}),m=f[e].videoRenditionsEvents,i.forEach(t=>{var n,r;m&&ie&&((n=c.media.videoRenditions)==null||n.removeEventListener(t,m),f[e].videoRenditionsEvents=void 0),fe&&((r=p.media.videoRenditions)==null||r.addEventListener(t,d),f[e].videoRenditionsEvents=d)}),m=f[e].audioTracksEvents,a.forEach(t=>{var n,r;m&&ae&&((n=c.media.audioTracks)==null||n.removeEventListener(t,m),f[e].audioTracksEvents=void 0),g&&((r=p.media.audioTracks)==null||r.addEventListener(t,d),f[e].audioTracksEvents=d)}),m=f[e].remoteEvents,o.forEach(t=>{var n,r;m&&oe&&((n=c.media.remote)==null||n.removeEventListener(t,m),f[e].remoteEvents=void 0),pe&&((r=p.media.remote)==null||r.addEventListener(t,d),f[e].remoteEvents=d)}),m=f[e].rootEvents,s.forEach(t=>{m&&se&&(c.documentElement.removeEventListener(t,m),f[e].rootEvents=void 0),me&&(p.documentElement.addEventListener(t,d),f[e].rootEvents=d)});let h=f[e].stateOwnersUpdateHandlers;if(h&&ce&&(Array.isArray(h)?h:[h]).forEach(e=>{typeof e==`function`&&e()}),he){let t=l.map(e=>e(d,p)).filter(e=>typeof e==`function`);f[e].stateOwnersUpdateHandlers=t.length===1?t[0]:t}else ce&&(f[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0};return m({media:e,fullscreenElement:t,documentElement:n,options:a}),{dispatch(e){let{type:t,detail:n}=e;if(i[t]&&l.mediaErrorCode==null){u(i[t](r,c,e));return}t===`mediaelementchangerequest`?m({media:n}):t===`fullscreenelementchangerequest`?m({fullscreenElement:n}):t===`documentelementchangerequest`?m({documentElement:n}):t===`optionschangerequest`&&(Object.entries(n??{}).forEach(([e,t])=>{c.options[e]=t}),d())},getState(){return l},subscribe(e){return m({},s.length+1),s.push(e),e(l),()=>{let t=s.indexOf(e);t>=0&&(m({},s.length-1),s.splice(t,1))}}}},On=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},F=(e,t,n)=>(On(e,t,`read from private field`),n?n.call(e):t.get(e)),I=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},L=(e,t,n,r)=>(On(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),kn=(e,t,n)=>(On(e,t,`access private method`),n),An,jn,R,z,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un=[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Enter`,` `,`f`,`m`,`k`,`c`,`l`,`j`,`>`,`<`,`p`],Wn=10,Gn=.025,Kn=.25,qn=.25,Jn=2,B={DEFAULT_SUBTITLES:`defaultsubtitles`,DEFAULT_STREAM_TYPE:`defaultstreamtype`,DEFAULT_DURATION:`defaultduration`,FULLSCREEN_ELEMENT:`fullscreenelement`,HOTKEYS:`hotkeys`,KEYBOARD_BACKWARD_SEEK_OFFSET:`keyboardbackwardseekoffset`,KEYBOARD_FORWARD_SEEK_OFFSET:`keyboardforwardseekoffset`,KEYBOARD_DOWN_VOLUME_STEP:`keyboarddownvolumestep`,KEYBOARD_UP_VOLUME_STEP:`keyboardupvolumestep`,KEYS_USED:`keysused`,LANG:`lang`,LOOP:`loop`,LIVE_EDGE_OFFSET:`liveedgeoffset`,NO_AUTO_SEEK_TO_LIVE:`noautoseektolive`,NO_DEFAULT_STORE:`nodefaultstore`,NO_HOTKEYS:`nohotkeys`,NO_MUTED_PREF:`nomutedpref`,NO_SUBTITLES_LANG_PREF:`nosubtitleslangpref`,NO_VOLUME_PREF:`novolumepref`,SEEK_TO_LIVE_OFFSET:`seektoliveoffset`},Yn=class extends wt{constructor(){super(),I(this,In),I(this,zn),I(this,Vn),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,I(this,An,new Ft(this,B.HOTKEYS)),I(this,jn,void 0),I(this,R,void 0),I(this,z,null),I(this,Mn,void 0),I(this,Nn,void 0),I(this,Pn,e=>{var t;(t=F(this,R))==null||t.dispatch(e)}),I(this,Fn,void 0),I(this,Rn,e=>{let{key:t,shiftKey:n}=e;if(!(n&&(t===`/`||t===`?`)||Un.includes(t))){this.removeEventListener(`keyup`,F(this,Rn));return}this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};L(this,Mn,t=>{Object.entries(t).forEach(([t,n])=>{if(t in e&&e[t]===n)return;this.propagateMediaState(t,n);let r=t.toLowerCase(),i=new _.CustomEvent(o[r],{composed:!0,detail:n});this.dispatchEvent(i)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(B.NO_HOTKEYS,B.HOTKEYS,B.DEFAULT_STREAM_TYPE,B.DEFAULT_SUBTITLES,B.DEFAULT_DURATION,B.NO_MUTED_PREF,B.NO_VOLUME_PREF,B.LANG,B.LOOP,B.LIVE_EDGE_OFFSET,B.SEEK_TO_LIVE_OFFSET,B.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return F(this,R)}set mediaStore(e){var t;if(F(this,R)&&((t=F(this,Nn))==null||t.call(this),L(this,Nn,void 0)),L(this,R,e),!F(this,R)&&!this.hasAttribute(B.NO_DEFAULT_STORE)){kn(this,In,Ln).call(this);return}L(this,Nn,F(this,R)?.subscribe(F(this,Mn)))}get fullscreenElement(){return F(this,jn)??this}set fullscreenElement(e){var t;this.hasAttribute(B.FULLSCREEN_ELEMENT)&&this.removeAttribute(B.FULLSCREEN_ELEMENT),L(this,jn,e),(t=F(this,R))==null||t.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}get defaultSubtitles(){return C(this,B.DEFAULT_SUBTITLES)}set defaultSubtitles(e){w(this,B.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return T(this,B.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){E(this,B.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return x(this,B.DEFAULT_DURATION)}set defaultDuration(e){S(this,B.DEFAULT_DURATION,e)}get noHotkeys(){return C(this,B.NO_HOTKEYS)}set noHotkeys(e){w(this,B.NO_HOTKEYS,e)}get keysUsed(){return T(this,B.KEYS_USED)}set keysUsed(e){E(this,B.KEYS_USED,e)}get liveEdgeOffset(){return x(this,B.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){S(this,B.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return C(this,B.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){w(this,B.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return C(this,B.NO_VOLUME_PREF)}set noVolumePref(e){w(this,B.NO_VOLUME_PREF,e)}get noMutedPref(){return C(this,B.NO_MUTED_PREF)}set noMutedPref(e){w(this,B.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return C(this,B.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){w(this,B.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return C(this,B.NO_DEFAULT_STORE)}set noDefaultStore(e){w(this,B.NO_DEFAULT_STORE,e)}attributeChangedCallback(t,n,r){var i,a,o,s,c,l,u,d,f,p;if(super.attributeChangedCallback(t,n,r),t===B.NO_HOTKEYS)r!==n&&r===``?(this.hasAttribute(B.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):r!==n&&r===null&&this.enableHotkeys();else if(t===B.HOTKEYS)F(this,An).value=r;else if(t===B.DEFAULT_SUBTITLES&&r!==n)(i=F(this,R))==null||i.dispatch({type:`optionschangerequest`,detail:{defaultSubtitles:this.hasAttribute(B.DEFAULT_SUBTITLES)}});else if(t===B.DEFAULT_STREAM_TYPE)(a=F(this,R))==null||a.dispatch({type:`optionschangerequest`,detail:{defaultStreamType:this.getAttribute(B.DEFAULT_STREAM_TYPE)??void 0}});else if(t===B.LIVE_EDGE_OFFSET&&r!==n)(o=F(this,R))==null||o.dispatch({type:`optionschangerequest`,detail:{liveEdgeOffset:this.hasAttribute(B.LIVE_EDGE_OFFSET)?+this.getAttribute(B.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(B.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(B.SEEK_TO_LIVE_OFFSET):this.hasAttribute(B.LIVE_EDGE_OFFSET)?+this.getAttribute(B.LIVE_EDGE_OFFSET):void 0}});else if(t===B.SEEK_TO_LIVE_OFFSET&&r!==n)(s=F(this,R))==null||s.dispatch({type:`optionschangerequest`,detail:{seekToLiveOffset:this.hasAttribute(B.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(B.SEEK_TO_LIVE_OFFSET):this.hasAttribute(B.LIVE_EDGE_OFFSET)?+this.getAttribute(B.LIVE_EDGE_OFFSET):void 0}});else if(t===B.NO_AUTO_SEEK_TO_LIVE)(c=F(this,R))==null||c.dispatch({type:`optionschangerequest`,detail:{noAutoSeekToLive:this.hasAttribute(B.NO_AUTO_SEEK_TO_LIVE)}});else if(t===B.FULLSCREEN_ELEMENT){let e=r?this.getRootNode()?.getElementById(r):void 0;L(this,jn,e),(l=F(this,R))==null||l.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}else t===B.LANG&&r!==n?(de(r),(u=F(this,R))==null||u.dispatch({type:`optionschangerequest`,detail:{mediaLang:r}})):t===B.LOOP&&r!==n?(d=F(this,R))==null||d.dispatch({type:e.MEDIA_LOOP_REQUEST,detail:r!=null}):t===B.NO_VOLUME_PREF&&r!==n?(f=F(this,R))==null||f.dispatch({type:`optionschangerequest`,detail:{noVolumePref:this.hasAttribute(B.NO_VOLUME_PREF)}}):t===B.NO_MUTED_PREF&&r!==n&&((p=F(this,R))==null||p.dispatch({type:`optionschangerequest`,detail:{noMutedPref:this.hasAttribute(B.NO_MUTED_PREF)}}))}connectedCallback(){var t,n;this.associateElement(this),!F(this,R)&&!this.hasAttribute(B.NO_DEFAULT_STORE)&&kn(this,In,Ln).call(this),(t=F(this,R))==null||t.dispatch({type:`documentelementchangerequest`,detail:v}),(n=F(this,R))==null||n.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement}),super.connectedCallback(),F(this,R)&&!F(this,Nn)&&L(this,Nn,F(this,R)?.subscribe(F(this,Mn))),F(this,Fn)!==void 0&&F(this,R)&&this.media&&setTimeout(()=>{var t;this.media?.textTracks?.length&&((t=F(this,R))==null||t.dispatch({type:e.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:F(this,Fn)}))},0),this.hasAttribute(B.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var t,n,r,i,a;if((t=super.disconnectedCallback)==null||t.call(this),this.disableHotkeys(),F(this,R)){let t=F(this,R).getState();L(this,Fn,!!t.mediaSubtitlesShowing?.length),(n=F(this,R))==null||n.dispatch({type:`fullscreenelementchangerequest`,detail:void 0}),(r=F(this,R))==null||r.dispatch({type:`documentelementchangerequest`,detail:void 0}),(i=F(this,R))==null||i.dispatch({type:e.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}F(this,Nn)&&((a=F(this,Nn))==null||a.call(this),L(this,Nn,void 0)),this.unassociateElement(this),F(this,z)&&(F(this,z).remove(),L(this,z,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=F(this,R))==null||t.dispatch({type:`mediaelementchangerequest`,detail:e}),e.hasAttribute(`tabindex`)||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=F(this,R))==null||t.dispatch({type:`mediaelementchangerequest`,detail:void 0})}propagateMediaState(e,t){or(this.mediaStateReceivers,e,t)}associateElement(t){if(!t)return;let{associatedElementSubscriptions:n}=this;if(n.has(t))return;let r=sr(t,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(e).forEach(e=>{t.addEventListener(e,F(this,Pn))}),n.set(t,r)}unassociateElement(t){if(!t)return;let{associatedElementSubscriptions:n}=this;n.has(t)&&(n.get(t)(),n.delete(t),Object.values(e).forEach(e=>{t.removeEventListener(e,F(this,Pn))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),F(this,R)&&Object.entries(F(this,R).getState()).forEach(([t,n])=>{or([e],t,n)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,n=t.indexOf(e);n<0||t.splice(n,1)}enableHotkeys(){this.addEventListener(`keydown`,kn(this,zn,Bn))}disableHotkeys(){this.removeEventListener(`keydown`,kn(this,zn,Bn)),this.removeEventListener(`keyup`,F(this,Rn))}get hotkeys(){return F(this,An)}set hotkeys(e){E(this,B.HOTKEYS,e)}keyboardShortcutHandler(t){let n=t.target;if((n.getAttribute(B.KEYS_USED)?.split(` `)??n?.keysUsed??[]).map(e=>e===`Space`?` `:e).filter(Boolean).includes(t.key))return;let r,i,a;if(!F(this,An).contains(`no${t.key.toLowerCase()}`)&&!(t.key===` `&&F(this,An).contains(`nospace`))&&!(t.shiftKey&&(t.key===`/`||t.key===`?`)&&F(this,An).contains(`noshift+/`)))switch(t.key){case` `:case`k`:r=F(this,R).getState().mediaPaused?e.MEDIA_PLAY_REQUEST:e.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new _.CustomEvent(r,{composed:!0,bubbles:!0}));break;case`m`:r=this.mediaStore.getState().mediaVolumeLevel===`off`?e.MEDIA_UNMUTE_REQUEST:e.MEDIA_MUTE_REQUEST,this.dispatchEvent(new _.CustomEvent(r,{composed:!0,bubbles:!0}));break;case`f`:r=this.mediaStore.getState().mediaIsFullscreen?e.MEDIA_EXIT_FULLSCREEN_REQUEST:e.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new _.CustomEvent(r,{composed:!0,bubbles:!0}));break;case`c`:this.dispatchEvent(new _.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case`ArrowLeft`:case`j`:{let t=this.hasAttribute(B.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(B.KEYBOARD_BACKWARD_SEEK_OFFSET):Wn;i=Math.max((this.mediaStore.getState().mediaCurrentTime??0)-t,0),a=new _.CustomEvent(e.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`ArrowRight`:case`l`:{let t=this.hasAttribute(B.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(B.KEYBOARD_FORWARD_SEEK_OFFSET):Wn;i=Math.max((this.mediaStore.getState().mediaCurrentTime??0)+t,0),a=new _.CustomEvent(e.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`ArrowUp`:{let t=this.hasAttribute(B.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(B.KEYBOARD_UP_VOLUME_STEP):Gn;i=Math.min((this.mediaStore.getState().mediaVolume??1)+t,1),a=new _.CustomEvent(e.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`ArrowDown`:{let t=this.hasAttribute(B.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(B.KEYBOARD_DOWN_VOLUME_STEP):Gn;i=Math.max((this.mediaStore.getState().mediaVolume??1)-t,0),a=new _.CustomEvent(e.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`<`:{let t=this.mediaStore.getState().mediaPlaybackRate??1;i=Math.max(t-Kn,qn).toFixed(2),a=new _.CustomEvent(e.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`>`:{let t=this.mediaStore.getState().mediaPlaybackRate??1;i=Math.min(t+Kn,Jn).toFixed(2),a=new _.CustomEvent(e.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:i}),this.dispatchEvent(a);break}case`/`:case`?`:t.shiftKey&&kn(this,Vn,Hn).call(this);break;case`p`:r=this.mediaStore.getState().mediaIsPip?e.MEDIA_EXIT_PIP_REQUEST:e.MEDIA_ENTER_PIP_REQUEST,a=new _.CustomEvent(r,{composed:!0,bubbles:!0}),this.dispatchEvent(a);break;default:break}}};An=new WeakMap,jn=new WeakMap,R=new WeakMap,z=new WeakMap,Mn=new WeakMap,Nn=new WeakMap,Pn=new WeakMap,Fn=new WeakMap,In=new WeakSet,Ln=function(){this.mediaStore=Dn({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(B.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(B.DEFAULT_DURATION)?+this.getAttribute(B.DEFAULT_DURATION):void 0,defaultStreamType:this.getAttribute(B.DEFAULT_STREAM_TYPE)??void 0,liveEdgeOffset:this.hasAttribute(B.LIVE_EDGE_OFFSET)?+this.getAttribute(B.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(B.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(B.SEEK_TO_LIVE_OFFSET):this.hasAttribute(B.LIVE_EDGE_OFFSET)?+this.getAttribute(B.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(B.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(B.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(B.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(B.NO_SUBTITLES_LANG_PREF)}})},Rn=new WeakMap,zn=new WeakSet,Bn=function(e){let{metaKey:t,altKey:n,key:r,shiftKey:i}=e,a=i&&(r===`/`||r===`?`);if(a&&F(this,z)?.open){this.removeEventListener(`keyup`,F(this,Rn));return}if(t||n||!a&&!Un.includes(r)){this.removeEventListener(`keyup`,F(this,Rn));return}let o=e.target,s=o instanceof HTMLElement&&(o.tagName.toLowerCase()===`media-volume-range`||o.tagName.toLowerCase()===`media-time-range`);[` `,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(r)&&!(F(this,An).contains(`no${r.toLowerCase()}`)||r===` `&&F(this,An).contains(`nospace`))&&!s&&e.preventDefault(),this.addEventListener(`keyup`,F(this,Rn),{once:!0})},Vn=new WeakSet,Hn=function(){F(this,z)||(L(this,z,v.createElement(`media-keyboard-shortcuts-dialog`)),this.appendChild(F(this,z))),F(this,z).open=!0};var Xn=Object.values(i),Zn=Object.values(n),Qn=e=>{var n;let{observedAttributes:r}=e.constructor;!r&&e.nodeName?.includes(`-`)&&(_.customElements.upgrade(e),{observedAttributes:r}=e.constructor);let i=((n=(e?.getAttribute)?.call(e,t.MEDIA_CHROME_ATTRIBUTES))?.split)?.call(n,/\s+/);return Array.isArray(r||i)?(r||i).filter(e=>Xn.includes(e)):[]},$n=e=>(e.nodeName?.includes(`-`)&&_.customElements.get(e.nodeName?.toLowerCase())&&!(e instanceof _.customElements.get(e.nodeName.toLowerCase()))&&_.customElements.upgrade(e),Zn.some(t=>t in e)),er=e=>$n(e)||!!Qn(e).length,tr=e=>(e?.join)?.call(e,`:`),nr={[i.MEDIA_SUBTITLES_LIST]:Vt,[i.MEDIA_SUBTITLES_SHOWING]:Vt,[i.MEDIA_SEEKABLE]:tr,[i.MEDIA_BUFFERED]:e=>e?.map(tr).join(` `),[i.MEDIA_PREVIEW_COORDS]:e=>e?.join(` `),[i.MEDIA_RENDITION_LIST]:p,[i.MEDIA_AUDIO_TRACK_LIST]:te},rr=async(e,t,n)=>{if(e.isConnected||await ce(0),typeof n==`boolean`||n==null)return w(e,t,n);if(typeof n==`number`)return S(e,t,n);if(typeof n==`string`)return E(e,t,n);if(Array.isArray(n)&&!n.length)return e.removeAttribute(t);let r=nr[t]?.call(nr,n)??n;return e.setAttribute(t,r)},ir=e=>!!e.closest?.call(e,`*[slot="media"]`),ar=(e,t)=>{if(ir(e))return;let n=(e,t)=>{er(e)&&t(e);let{children:n=[]}=e??{},r=e?.shadowRoot?.children??[];[...n,...r].forEach(e=>ar(e,t))},r=e?.nodeName.toLowerCase();if(r.includes(`-`)&&!er(e)){_.customElements.whenDefined(r).then(()=>{n(e,t)});return}n(e,t)},or=(e,t,n)=>{e.forEach(e=>{if(t in e){e[t]=n;return}let r=Qn(e),i=t.toLowerCase();r.includes(i)&&rr(e,i,n)})},sr=(n,r,i)=>{ar(n,r);let a=e=>{r(e?.composedPath()[0]??e.target)},o=e=>{i(e?.composedPath()[0]??e.target)};n.addEventListener(e.REGISTER_MEDIA_STATE_RECEIVER,a),n.addEventListener(e.UNREGISTER_MEDIA_STATE_RECEIVER,o);let s=e=>{e.forEach(e=>{let{addedNodes:n=[],removedNodes:a=[],type:o,target:s,attributeName:c}=e;o===`childList`?(Array.prototype.forEach.call(n,e=>ar(e,r)),Array.prototype.forEach.call(a,e=>ar(e,i))):o===`attributes`&&c===t.MEDIA_CHROME_ATTRIBUTES&&(er(s)?r(s):i(s))})},c=[],l=e=>{let t=e.target;t.name!==`media`&&(c.forEach(e=>ar(e,i)),c=[...t.assignedElements({flatten:!0})],c.forEach(e=>ar(e,r)))};n.addEventListener(`slotchange`,l);let u=new MutationObserver(s);return u.observe(n,{childList:!0,attributes:!0,subtree:!0}),()=>{ar(n,i),n.removeEventListener(`slotchange`,l),u.disconnect(),n.removeEventListener(e.REGISTER_MEDIA_STATE_RECEIVER,a),n.removeEventListener(e.UNREGISTER_MEDIA_STATE_RECEIVER,o)}};_.customElements.get(`media-controller`)||_.customElements.define(`media-controller`,Yn);var cr=Yn,lr={PLACEMENT:`placement`,BOUNDS:`bounds`};function ur(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var dr=class extends _.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{if(!ze(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let e=this.placement;if(e===`left`||e===`right`){this.style.removeProperty(`--media-tooltip-offset-x`);return}let t=getComputedStyle(this),n=Ie(this,`#`+this.bounds)??Ae(this);if(!n)return;let{x:r,width:i}=n.getBoundingClientRect(),{x:a,width:o}=this.getBoundingClientRect(),s=a+o,c=r+i,l=t.getPropertyValue(`--media-tooltip-offset-x`),u=l?parseFloat(l.replace(`px`,``)):0,d=t.getPropertyValue(`--media-tooltip-container-margin`),f=d?parseFloat(d.replace(`px`,``)):0,p=a-r+u-f,m=s-c+u+f;if(p<0){this.style.setProperty(`--media-tooltip-offset-x`,`${p}px`);return}if(m>0){this.style.setProperty(`--media-tooltip-offset-x`,`${m}px`);return}this.style.removeProperty(`--media-tooltip-offset-x`)},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector(`#arrow`),Object.prototype.hasOwnProperty.call(this,`placement`)){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[lr.PLACEMENT,lr.BOUNDS]}get placement(){return T(this,lr.PLACEMENT)}set placement(e){E(this,lr.PLACEMENT,e)}get bounds(){return T(this,lr.BOUNDS)}set bounds(e){E(this,lr.BOUNDS,e)}};dr.shadowRootOptions={mode:`open`},dr.getTemplateHTML=ur,_.customElements.get(`media-tooltip`)||_.customElements.define(`media-tooltip`,dr);var fr=dr,pr=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},V=(e,t,n)=>(pr(e,t,`read from private field`),n?n.call(e):t.get(e)),mr=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},hr=(e,t,n,r)=>(pr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),gr=(e,t,n)=>(pr(e,t,`access private method`),n),_r,vr,yr,br,xr,Sr,Cr,wr={TOOLTIP_PLACEMENT:`tooltipplacement`,DISABLED:`disabled`,NO_TOOLTIP:`notooltip`};function Tr(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${fr.shadowRootOptions.mode}">
          ${fr.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Er(e,t){return`
    <slot></slot>
  `}function Dr(){return``}var H=class extends _.HTMLElement{constructor(){if(super(),mr(this,Sr),mr(this,_r,void 0),this.preventClick=!1,this.tooltipEl=null,mr(this,vr,e=>{this.preventClick||this.handleClick(e),setTimeout(V(this,yr),0)}),mr(this,yr,()=>{var e,t;(t=(e=this.tooltipEl)?.updateXOffset)==null||t.call(e)}),mr(this,br,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener(`keyup`,V(this,br));return}this.preventClick||this.handleClick(e)}),mr(this,xr,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!this.keysUsed.includes(r)){this.removeEventListener(`keyup`,V(this,br));return}this.addEventListener(`keyup`,V(this,br),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector(`media-tooltip`)}static get observedAttributes(){return[`disabled`,wr.TOOLTIP_PLACEMENT,t.MEDIA_CONTROLLER,i.MEDIA_LANG]}enable(){this.addEventListener(`click`,V(this,vr)),this.addEventListener(`keydown`,V(this,xr)),this.tabIndex=0}disable(){this.removeEventListener(`click`,V(this,vr)),this.removeEventListener(`keydown`,V(this,xr)),this.removeEventListener(`keyup`,V(this,br)),this.tabIndex=-1}attributeChangedCallback(e,n,r){var a,o,s,c;e===t.MEDIA_CONTROLLER?(n&&((o=(a=V(this,_r))?.unassociateElement)==null||o.call(a,this),hr(this,_r,null)),r&&this.isConnected&&(hr(this,_r,this.getRootNode()?.getElementById(r)),(c=(s=V(this,_r))?.associateElement)==null||c.call(s,this))):e===`disabled`&&r!==n?r==null?this.enable():this.disable():e===wr.TOOLTIP_PLACEMENT&&this.tooltipEl&&r!==n?this.tooltipEl.placement=r:e===i.MEDIA_LANG&&(this.shadowRoot.querySelector(`slot[name="tooltip-content"]`).innerHTML=this.constructor.getTooltipContentHTML()),V(this,yr).call(this)}connectedCallback(){var e,n;let{style:r}=b(this.shadowRoot,`:host`);r.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute(`disabled`)?this.disable():this.enable(),this.setAttribute(`role`,`button`);let i=this.getAttribute(t.MEDIA_CONTROLLER);i&&(hr(this,_r,this.getRootNode()?.getElementById(i)),(n=(e=V(this,_r))?.associateElement)==null||n.call(e,this)),_.customElements.whenDefined(`media-tooltip`).then(()=>gr(this,Sr,Cr).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=V(this,_r))?.unassociateElement)==null||t.call(e,this),hr(this,_r,null),this.removeEventListener(`mouseenter`,V(this,yr)),this.removeEventListener(`focus`,V(this,yr)),this.removeEventListener(`click`,V(this,vr))}get keysUsed(){return[`Enter`,` `]}get tooltipPlacement(){return T(this,wr.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){E(this,wr.TOOLTIP_PLACEMENT,e)}get mediaController(){return T(this,t.MEDIA_CONTROLLER)}set mediaController(e){E(this,t.MEDIA_CONTROLLER,e)}get disabled(){return C(this,wr.DISABLED)}set disabled(e){w(this,wr.DISABLED,e)}get noTooltip(){return C(this,wr.NO_TOOLTIP)}set noTooltip(e){w(this,wr.NO_TOOLTIP,e)}handleClick(e){}};_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,br=new WeakMap,xr=new WeakMap,Sr=new WeakSet,Cr=function(){this.addEventListener(`mouseenter`,V(this,yr)),this.addEventListener(`focus`,V(this,yr)),this.addEventListener(`click`,V(this,vr));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},H.shadowRootOptions={mode:`open`},H.getTemplateHTML=Tr,H.getSlotTemplateHTML=Er,H.getTooltipContentHTML=Dr,_.customElements.get(`media-chrome-button`)||_.customElements.define(`media-chrome-button`,H);var Or=H,kr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function Ar(e){return`
    <style>
      :host([${i.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${i.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${kr}</slot>
      <slot name="exit">${kr}</slot>
    </slot>
  `}function jr(){return`
    <slot name="tooltip-enter">${g(`start airplay`)}</slot>
    <slot name="tooltip-exit">${g(`stop airplay`)}</slot>
  `}var Mr=e=>{let t=e.mediaIsAirplaying?g(`stop airplay`):g(`start airplay`);e.setAttribute(`aria-label`,t)},Nr=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_IS_AIRPLAYING,i.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Mr(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_IS_AIRPLAYING&&Mr(this)}get mediaIsAirplaying(){return C(this,i.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){w(this,i.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return T(this,i.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){E(this,i.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let t=new _.CustomEvent(e.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}};Nr.getSlotTemplateHTML=Ar,Nr.getTooltipContentHTML=jr,_.customElements.get(`media-airplay-button`)||_.customElements.define(`media-airplay-button`,Nr);var Pr=Nr,Fr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ir=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Lr(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Fr}</slot>
      <slot name="off">${Ir}</slot>
    </slot>
  `}function Rr(){return`
    <slot name="tooltip-enable">${g(`Enable captions`)}</slot>
    <slot name="tooltip-disable">${g(`Disable captions`)}</slot>
  `}var zr=e=>{e.setAttribute(`aria-checked`,Kt(e).toString())},Br=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_SUBTITLES_LIST,i.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`button`),this.setAttribute(`aria-label`,g(`closed captions`)),zr(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_SUBTITLES_SHOWING&&zr(this)}get mediaSubtitlesList(){return Vr(this,i.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Hr(this,i.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Vr(this,i.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Hr(this,i.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new _.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};Br.getSlotTemplateHTML=Lr,Br.getTooltipContentHTML=Rr;var Vr=(e,t)=>{let n=e.getAttribute(t);return n?Rt(n):[]},Hr=(e,t,n)=>{if(!n?.length){e.removeAttribute(t);return}let r=Vt(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)};_.customElements.get(`media-captions-button`)||_.customElements.define(`media-captions-button`,Br);var Ur=Br,Wr=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`,Gr=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`;function Kr(e){return`
    <style>
      :host([${i.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${i.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Wr}</slot>
      <slot name="exit">${Gr}</slot>
    </slot>
  `}function qr(){return`
    <slot name="tooltip-enter">${g(`Start casting`)}</slot>
    <slot name="tooltip-exit">${g(`Stop casting`)}</slot>
  `}var Jr=e=>{let t=e.mediaIsCasting?g(`stop casting`):g(`start casting`);e.setAttribute(`aria-label`,t)},Yr=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_IS_CASTING,i.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Jr(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_IS_CASTING&&Jr(this)}get mediaIsCasting(){return C(this,i.MEDIA_IS_CASTING)}set mediaIsCasting(e){w(this,i.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return T(this,i.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){E(this,i.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let t=this.mediaIsCasting?e.MEDIA_EXIT_CAST_REQUEST:e.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new _.CustomEvent(t,{composed:!0,bubbles:!0}))}};Yr.getSlotTemplateHTML=Kr,Yr.getTooltipContentHTML=qr,_.customElements.get(`media-cast-button`)||_.customElements.define(`media-cast-button`,Yr);var Xr=Yr,Zr=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Qr=(e,t,n)=>(Zr(e,t,`read from private field`),n?n.call(e):t.get(e)),$r=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ei=(e,t,n,r)=>(Zr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ti=(e,t,n)=>(Zr(e,t,`access private method`),n),ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi;function _i(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function vi(e){return`
    <slot id="content"></slot>
  `}var yi={OPEN:`open`,ANCHOR:`anchor`},bi=class extends _.HTMLElement{constructor(){super(),$r(this,ai),$r(this,si),$r(this,li),$r(this,di),$r(this,pi),$r(this,hi),$r(this,ni,!1),$r(this,ri,null),$r(this,ii,null)}static get observedAttributes(){return[yi.OPEN,yi.ANCHOR]}get open(){return C(this,yi.OPEN)}set open(e){w(this,yi.OPEN,e)}handleEvent(e){switch(e.type){case`invoke`:ti(this,di,fi).call(this,e);break;case`focusout`:ti(this,pi,mi).call(this,e);break;case`keydown`:ti(this,hi,gi).call(this,e);break}}connectedCallback(){ti(this,ai,oi).call(this),this.role||=`dialog`,this.addEventListener(`invoke`,this),this.addEventListener(`focusout`,this),this.addEventListener(`keydown`,this)}disconnectedCallback(){this.removeEventListener(`invoke`,this),this.removeEventListener(`focusout`,this),this.removeEventListener(`keydown`,this)}attributeChangedCallback(e,t,n){ti(this,ai,oi).call(this),e===yi.OPEN&&n!==t&&(this.open?ti(this,si,ci).call(this):ti(this,li,ui).call(this))}focus(){ei(this,ri,Le());let e=!this.dispatchEvent(new Event(`focus`,{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event(`focusin`,{composed:!0,bubbles:!0,cancelable:!0}));e||t||this.querySelector(`[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]`)?.focus()}get keysUsed(){return[`Escape`,`Tab`]}};ni=new WeakMap,ri=new WeakMap,ii=new WeakMap,ai=new WeakSet,oi=function(){if(!Qr(this,ni)&&(ei(this,ni,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=b(this.shadowRoot,`:host`);e.setProperty(`transition`,`display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in`)})}},si=new WeakSet,ci=function(){var e;(e=Qr(this,ii))==null||e.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new Event(`open`,{composed:!0,bubbles:!0})),this.addEventListener(`transitionend`,()=>this.focus(),{once:!0})},li=new WeakSet,ui=function(){var e;(e=Qr(this,ii))==null||e.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new Event(`close`,{composed:!0,bubbles:!0}))},di=new WeakSet,fi=function(e){ei(this,ii,e.relatedTarget),Fe(this,e.relatedTarget)||(this.open=!this.open)},pi=new WeakSet,mi=function(e){var t;Fe(this,e.relatedTarget)||((t=Qr(this,ri))==null||t.focus(),Qr(this,ii)&&Qr(this,ii)!==e.relatedTarget&&this.open&&(this.open=!1))},hi=new WeakSet,gi=function(e){var t,n,r,i,a;let{key:o,ctrlKey:s,altKey:c,metaKey:l}=e;s||c||l||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o===`Tab`?(e.shiftKey?(n=(t=this.previousElementSibling)?.focus)==null||n.call(t):(i=(r=this.nextElementSibling)?.focus)==null||i.call(r),this.blur()):o===`Escape`&&((a=Qr(this,ri))==null||a.focus(),this.open=!1))},bi.shadowRootOptions={mode:`open`},bi.getTemplateHTML=_i,bi.getSlotTemplateHTML=vi,_.customElements.get(`media-chrome-dialog`)||_.customElements.define(`media-chrome-dialog`,bi);var xi=bi,Si=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},U=(e,t,n)=>(Si(e,t,`read from private field`),n?n.call(e):t.get(e)),W=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ci=(e,t,n,r)=>(Si(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),G=(e,t,n)=>(Si(e,t,`access private method`),n),wi,Ti,Ei,Di,K,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi;function Ji(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function Yi(e){return``}var Xi=class extends _.HTMLElement{constructor(){if(super(),W(this,Mi),W(this,Pi),W(this,Ii),W(this,Ri),W(this,Bi),W(this,Hi),W(this,Wi),W(this,Ki),W(this,wi,void 0),W(this,Ti,void 0),W(this,Ei,void 0),W(this,Di,void 0),W(this,K,{}),W(this,Oi,[]),W(this,ki,()=>{if(this.range.matches(`:focus-visible`)){let{style:e}=b(this.shadowRoot,`:host`);e.setProperty(`--_focus-visible-box-shadow`,`var(--_focus-box-shadow)`)}}),W(this,Ai,()=>{let{style:e}=b(this.shadowRoot,`:host`);e.removeProperty(`--_focus-visible-box-shadow`)}),W(this,ji,()=>{let e=this.shadowRoot.querySelector(`#segments-clipping`);e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector(`#container`),Ci(this,Ei,this.shadowRoot.querySelector(`#startpoint`)),Ci(this,Di,this.shadowRoot.querySelector(`#endpoint`)),this.range=this.shadowRoot.querySelector(`#range`),this.appearance=this.shadowRoot.querySelector(`#appearance`)}static get observedAttributes(){return[`disabled`,`aria-disabled`,t.MEDIA_CONTROLLER]}attributeChangedCallback(e,n,r){var i,a,o,s;e===t.MEDIA_CONTROLLER?(n&&((a=(i=U(this,wi))?.unassociateElement)==null||a.call(i,this),Ci(this,wi,null)),r&&this.isConnected&&(Ci(this,wi,this.getRootNode()?.getElementById(r)),(s=(o=U(this,wi))?.associateElement)==null||s.call(o,this))):(e===`disabled`||e===`aria-disabled`&&n!==r)&&(r==null?(this.range.removeAttribute(e),G(this,Pi,Fi).call(this)):(this.range.setAttribute(e,r),G(this,Ii,Li).call(this)))}connectedCallback(){var e,n;let{style:r}=b(this.shadowRoot,`:host`);r.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),U(this,K).pointer=b(this.shadowRoot,`#pointer`),U(this,K).progress=b(this.shadowRoot,`#progress`),U(this,K).thumb=b(this.shadowRoot,`#thumb, ::slotted([slot="thumb"])`),U(this,K).activeSegment=b(this.shadowRoot,`#segments-clipping rect:nth-child(0)`);let i=this.getAttribute(t.MEDIA_CONTROLLER);i&&(Ci(this,wi,this.getRootNode()?.getElementById(i)),(n=(e=U(this,wi))?.associateElement)==null||n.call(e,this)),this.updateBar(),this.shadowRoot.addEventListener(`focusin`,U(this,ki)),this.shadowRoot.addEventListener(`focusout`,U(this,Ai)),G(this,Pi,Fi).call(this),Oe(this.container,U(this,ji))}disconnectedCallback(){var e,t;G(this,Ii,Li).call(this),(t=(e=U(this,wi))?.unassociateElement)==null||t.call(e,this),Ci(this,wi,null),this.shadowRoot.removeEventListener(`focusin`,U(this,ki)),this.shadowRoot.removeEventListener(`focusout`,U(this,Ai)),ke(this.container,U(this,ji))}updatePointerBar(e){var t;(t=U(this,K).pointer)==null||t.style.setProperty(`width`,`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;let n=this.range.valueAsNumber*100;(e=U(this,K).progress)==null||e.style.setProperty(`width`,`${n}%`),(t=U(this,K).thumb)==null||t.style.setProperty(`left`,`${n}%`)}updateSegments(e){let t=this.shadowRoot.querySelector(`#segments-clipping`);if(t.textContent=``,this.container.classList.toggle(`segments`,!!e?.length),!e?.length)return;let n=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];Ci(this,Oi,[...n]);let r=n.pop();for(let[e,i]of n.entries()){let[a,o]=[e===0,e===n.length-1],s=a?`calc(var(--segments-gap) / -1)`:`${i*100}%`,c=`calc(${((o?r:n[e+1])-i)*100}%${a||o?``:` - var(--segments-gap)`})`,l=v.createElementNS(`http://www.w3.org/2000/svg`,`rect`),u=He(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);u.style.setProperty(`x`,s),u.style.setProperty(`width`,c),t.append(l)}}getPointerRatio(e){return Be(e.clientX,e.clientY,U(this,Ei).getBoundingClientRect(),U(this,Di).getBoundingClientRect())}get dragging(){return this.hasAttribute(`dragging`)}handleEvent(e){switch(e.type){case`pointermove`:G(this,Ki,qi).call(this,e);break;case`input`:this.updateBar();break;case`pointerenter`:G(this,Bi,Vi).call(this,e);break;case`pointerdown`:G(this,Ri,zi).call(this,e);break;case`pointerup`:G(this,Hi,Ui).call(this);break;case`pointerleave`:G(this,Wi,Gi).call(this);break}}get keysUsed(){return[`ArrowUp`,`ArrowRight`,`ArrowDown`,`ArrowLeft`]}};wi=new WeakMap,Ti=new WeakMap,Ei=new WeakMap,Di=new WeakMap,K=new WeakMap,Oi=new WeakMap,ki=new WeakMap,Ai=new WeakMap,ji=new WeakMap,Mi=new WeakSet,Ni=function(e){let t=U(this,K).activeSegment;if(!t)return;let n=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${U(this,Oi).findIndex((e,t,r)=>{let i=r[t+1];return i!=null&&n>=e&&n<=i})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty(`transform`,`var(--media-range-segment-hover-transform, scaleY(2))`))},Pi=new WeakSet,Fi=function(){this.hasAttribute(`disabled`)||!this.isConnected||(this.addEventListener(`input`,this),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointerenter`,this))},Ii=new WeakSet,Li=function(){var e,t;this.removeEventListener(`input`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointerenter`,this),this.removeEventListener(`pointerleave`,this),(e=_.window)==null||e.removeEventListener(`pointerup`,this),(t=_.window)==null||t.removeEventListener(`pointermove`,this)},Ri=new WeakSet,zi=function(e){var t;Ci(this,Ti,e.composedPath().includes(this.range)),(t=_.window)==null||t.addEventListener(`pointerup`,this,{once:!0})},Bi=new WeakSet,Vi=function(e){var t;e.pointerType!==`mouse`&&G(this,Ri,zi).call(this,e),this.addEventListener(`pointerleave`,this,{once:!0}),(t=_.window)==null||t.addEventListener(`pointermove`,this)},Hi=new WeakSet,Ui=function(){var e;(e=_.window)==null||e.removeEventListener(`pointerup`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`)},Wi=new WeakSet,Gi=function(){var e,t;this.removeEventListener(`pointerleave`,this),(e=_.window)==null||e.removeEventListener(`pointermove`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`),(t=U(this,K).activeSegment)==null||t.style.removeProperty(`transform`)},Ki=new WeakSet,qi=function(e){e.pointerType===`pen`&&e.buttons===0||(this.toggleAttribute(`dragging`,e.buttons===1||e.pointerType!==`mouse`),this.updatePointerBar(e),G(this,Mi,Ni).call(this,e),this.dragging&&(e.pointerType!==`mouse`||!U(this,Ti))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))))},Xi.shadowRootOptions={mode:`open`},Xi.getTemplateHTML=Ji,Xi.getContainerTemplateHTML=Yi,_.customElements.get(`media-chrome-range`)||_.customElements.define(`media-chrome-range`,Xi);var Zi=Xi,Qi=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},$i=(e,t,n)=>(Qi(e,t,`read from private field`),n?n.call(e):t.get(e)),ea=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ta=(e,t,n,r)=>(Qi(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),na;function ra(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var ia=class extends _.HTMLElement{constructor(){if(super(),ea(this,na,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[t.MEDIA_CONTROLLER]}attributeChangedCallback(e,n,r){var i,a,o,s;e===t.MEDIA_CONTROLLER&&(n&&((a=(i=$i(this,na))?.unassociateElement)==null||a.call(i,this),ta(this,na,null)),r&&this.isConnected&&(ta(this,na,this.getRootNode()?.getElementById(r)),(s=(o=$i(this,na))?.associateElement)==null||s.call(o,this)))}connectedCallback(){var e,n;let r=this.getAttribute(t.MEDIA_CONTROLLER);r&&(ta(this,na,this.getRootNode()?.getElementById(r)),(n=(e=$i(this,na))?.associateElement)==null||n.call(e,this))}disconnectedCallback(){var e,t;(t=(e=$i(this,na))?.unassociateElement)==null||t.call(e,this),ta(this,na,null)}};na=new WeakMap,ia.shadowRootOptions={mode:`open`},ia.getTemplateHTML=ra,_.customElements.get(`media-control-bar`)||_.customElements.define(`media-control-bar`,ia);var aa=ia,oa=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},sa=(e,t,n)=>(oa(e,t,`read from private field`),n?n.call(e):t.get(e)),ca=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},la=(e,t,n,r)=>(oa(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ua;function da(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function fa(e,t){return`
    <slot></slot>
  `}var pa=class extends _.HTMLElement{constructor(){if(super(),ca(this,ua,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[t.MEDIA_CONTROLLER]}attributeChangedCallback(e,n,r){var i,a,o,s;e===t.MEDIA_CONTROLLER&&(n&&((a=(i=sa(this,ua))?.unassociateElement)==null||a.call(i,this),la(this,ua,null)),r&&this.isConnected&&(la(this,ua,this.getRootNode()?.getElementById(r)),(s=(o=sa(this,ua))?.associateElement)==null||s.call(o,this)))}connectedCallback(){var e,n;let{style:r}=b(this.shadowRoot,`:host`);r.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let i=this.getAttribute(t.MEDIA_CONTROLLER);i&&(la(this,ua,this.getRootNode()?.getElementById(i)),(n=(e=sa(this,ua))?.associateElement)==null||n.call(e,this))}disconnectedCallback(){var e,t;(t=(e=sa(this,ua))?.unassociateElement)==null||t.call(e,this),la(this,ua,null)}};ua=new WeakMap,pa.shadowRootOptions={mode:`open`},pa.getTemplateHTML=da,pa.getSlotTemplateHTML=fa,_.customElements.get(`media-text-display`)||_.customElements.define(`media-text-display`,pa);var ma=pa,ha=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},ga=(e,t,n)=>(ha(e,t,`read from private field`),n?n.call(e):t.get(e)),_a=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},va=(e,t,n,r)=>(ha(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ya;function ba(e,t){return`
    <slot>${ge(t.mediaDuration)}</slot>
  `}var xa=class extends pa{constructor(){super(),_a(this,ya,void 0),va(this,ya,this.shadowRoot.querySelector(`slot`)),ga(this,ya).textContent=ge(this.mediaDuration??0)}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_DURATION]}attributeChangedCallback(e,t,n){e===i.MEDIA_DURATION&&(ga(this,ya).textContent=ge(+n)),super.attributeChangedCallback(e,t,n)}get mediaDuration(){return x(this,i.MEDIA_DURATION)}set mediaDuration(e){S(this,i.MEDIA_DURATION,e)}};ya=new WeakMap,xa.getSlotTemplateHTML=ba,_.customElements.get(`media-duration-display`)||_.customElements.define(`media-duration-display`,xa);var Sa=xa,Ca={2:g(`Network Error`),3:g(`Decode Error`),4:g(`Source Not Supported`),5:g(`Encryption Error`)},wa={2:g(`A network error caused the media download to fail.`),3:g(`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`),4:g(`An unsupported error occurred. The server or network failed, or your browser does not support this format.`),5:g(`The media is encrypted and there are no keys to decrypt it.`)},Ta=e=>e.code===1?null:{title:Ca[e.code]??`Error ${e.code}`,message:wa[e.code]??e.message},Ea=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Da=(e,t,n)=>(Ea(e,t,`read from private field`),n?n.call(e):t.get(e)),Oa=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ka=(e,t,n,r)=>(Ea(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Aa;function ja(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${Na({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function Ma(e){return e.code&&Ta(e)!==null}function Na(e){let{title:t,message:n}=Ta(e)??{},r=``;return t&&(r+=`<slot name="error-${e.code}-title"><h3>${t}</h3></slot>`),n&&(r+=`<slot name="error-${e.code}-message"><p>${n}</p></slot>`),r}var Pa=[i.MEDIA_ERROR_CODE,i.MEDIA_ERROR_MESSAGE],Fa=class extends bi{constructor(){super(...arguments),Oa(this,Aa,null)}static get observedAttributes(){return[...super.observedAttributes,...Pa]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),!Pa.includes(e))return;let r=this.mediaError??{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=Ma(r),this.open&&(this.shadowRoot.querySelector(`slot`).name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector(`#content`).innerHTML=this.formatErrorMessage(r),!this.hasAttribute(`aria-label`))){let{title:e}=Ta(r);e&&this.setAttribute(`aria-label`,e)}}get mediaError(){return Da(this,Aa)}set mediaError(e){ka(this,Aa,e)}get mediaErrorCode(){return x(this,`mediaerrorcode`)}set mediaErrorCode(e){S(this,`mediaerrorcode`,e)}get mediaErrorMessage(){return T(this,`mediaerrormessage`)}set mediaErrorMessage(e){E(this,`mediaerrormessage`,e)}};Aa=new WeakMap,Fa.getSlotTemplateHTML=ja,Fa.formatErrorMessage=Na,_.customElements.get(`media-error-dialog`)||_.customElements.define(`media-error-dialog`,Fa);var Ia=Fa,La=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Ra=(e,t,n)=>(La(e,t,`read from private field`),n?n.call(e):t.get(e)),za=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ba,Va;function Ha(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Ua()}
    </slot>
  `}function Ua(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:[`Space`,`k`],description:`Toggle Playback`},{keys:[`m`],description:`Toggle mute`},{keys:[`f`],description:`Toggle fullscreen`},{keys:[`c`],description:`Toggle captions or subtitles, if available`},{keys:[`p`],description:`Toggle Picture in Picture`},{keys:[`←`,`j`],description:`Seek back 10s`},{keys:[`→`,`l`],description:`Seek forward 10s`},{keys:[`↑`],description:`Turn volume up`},{keys:[`↓`],description:`Turn volume down`},{keys:[`< (SHIFT+,)`],description:`Decrease playback rate`},{keys:[`> (SHIFT+.)`],description:`Increase playback rate`}].map(({keys:e,description:t})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join(``)}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join(``)}</table>
  `}var Wa=class extends bi{constructor(){super(...arguments),za(this,Ba,e=>{if(!this.open)return;let t=this.shadowRoot?.querySelector(`#content`);if(!t)return;let n=e.composedPath(),r=n[0]===this||n.includes(this),i=n.includes(t);r&&!i&&(this.open=!1)}),za(this,Va,e=>{if(!this.open)return;let t=e.shiftKey&&(e.key===`/`||e.key===`?`);(e.key===`Escape`||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener(`click`,Ra(this,Ba)),document.addEventListener(`keydown`,Ra(this,Va)))}disconnectedCallback(){this.removeEventListener(`click`,Ra(this,Ba)),document.removeEventListener(`keydown`,Ra(this,Va))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`open`&&(this.open?(this.addEventListener(`click`,Ra(this,Ba)),document.addEventListener(`keydown`,Ra(this,Va))):(this.removeEventListener(`click`,Ra(this,Ba)),document.removeEventListener(`keydown`,Ra(this,Va))))}};Ba=new WeakMap,Va=new WeakMap,Wa.getSlotTemplateHTML=Ha,_.customElements.get(`media-keyboard-shortcuts-dialog`)||_.customElements.define(`media-keyboard-shortcuts-dialog`,Wa);var Ga=Wa,Ka=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},qa=(e,t,n)=>(Ka(e,t,`read from private field`),n?n.call(e):t.get(e)),Ja=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ya=(e,t,n,r)=>(Ka(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Xa,Za=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Qa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function $a(e){return`
    <style>
      :host([${i.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${i.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Za}</slot>
      <slot name="exit">${Qa}</slot>
    </slot>
  `}function eo(){return`
    <slot name="tooltip-enter">${g(`Enter fullscreen mode`)}</slot>
    <slot name="tooltip-exit">${g(`Exit fullscreen mode`)}</slot>
  `}var to=e=>{let t=e.mediaIsFullscreen?g(`exit fullscreen mode`):g(`enter fullscreen mode`);e.setAttribute(`aria-label`,t)},no=class extends H{constructor(){super(...arguments),Ja(this,Xa,null)}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_IS_FULLSCREEN,i.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),to(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_IS_FULLSCREEN&&to(this)}get mediaFullscreenUnavailable(){return T(this,i.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){E(this,i.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return C(this,i.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){w(this,i.MEDIA_IS_FULLSCREEN,e)}handleClick(t){Ya(this,Xa,t);let n=qa(this,Xa)instanceof PointerEvent,r=this.mediaIsFullscreen?new _.CustomEvent(e.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new _.CustomEvent(e.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(r)}};Xa=new WeakMap,no.getSlotTemplateHTML=$a,no.getTooltipContentHTML=eo,_.customElements.get(`media-fullscreen-button`)||_.customElements.define(`media-fullscreen-button`,no);var ro=no,{MEDIA_TIME_IS_LIVE:io,MEDIA_PAUSED:ao}=i,{MEDIA_SEEK_TO_LIVE_REQUEST:oo,MEDIA_PLAY_REQUEST:so}=e,co=`<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>`;function lo(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${io}]:not([${ao}])) slot[name=indicator] > *,
      :host([${io}]:not([${ao}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${io}]:not([${ao}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${co}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${g(`live`)}</slot>
  `}var uo=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,n=g(t?`seek to live`:`playing live`);e.setAttribute(`aria-label`,n);let r=e.shadowRoot?.querySelector(`slot[name="text"]`);r&&(r.textContent=g(`live`)),t?e.removeAttribute(`aria-disabled`):e.setAttribute(`aria-disabled`,`true`)},fo=class extends H{static get observedAttributes(){return[...super.observedAttributes,io,ao]}connectedCallback(){super.connectedCallback(),uo(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),uo(this)}get mediaPaused(){return C(this,i.MEDIA_PAUSED)}set mediaPaused(e){w(this,i.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return C(this,i.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){w(this,i.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new _.CustomEvent(oo,{composed:!0,bubbles:!0})),this.hasAttribute(ao)&&this.dispatchEvent(new _.CustomEvent(so,{composed:!0,bubbles:!0})))}};fo.getSlotTemplateHTML=lo,_.customElements.get(`media-live-button`)||_.customElements.define(`media-live-button`,fo);var po=fo,mo=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},ho=(e,t,n)=>(mo(e,t,`read from private field`),n?n.call(e):t.get(e)),go=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},_o=(e,t,n,r)=>(mo(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),vo,yo,bo={LOADING_DELAY:`loadingdelay`,NO_AUTOHIDE:`noautohide`},xo=500,So=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Co(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${xo}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${i.MEDIA_LOADING}]:not([${i.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${i.MEDIA_LOADING}]:not([${i.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${i.MEDIA_LOADING}]:not([${i.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${So}</slot>
    <div id="status" role="status" aria-live="polite">${g(`media loading`)}</div>
  `}var wo=class extends _.HTMLElement{constructor(){if(super(),go(this,vo,void 0),go(this,yo,xo),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[t.MEDIA_CONTROLLER,i.MEDIA_PAUSED,i.MEDIA_LOADING,bo.LOADING_DELAY]}attributeChangedCallback(e,n,r){var i,a,o,s;e===bo.LOADING_DELAY&&n!==r?this.loadingDelay=Number(r):e===t.MEDIA_CONTROLLER&&(n&&((a=(i=ho(this,vo))?.unassociateElement)==null||a.call(i,this),_o(this,vo,null)),r&&this.isConnected&&(_o(this,vo,this.getRootNode()?.getElementById(r)),(s=(o=ho(this,vo))?.associateElement)==null||s.call(o,this)))}connectedCallback(){var e,n;let r=this.getAttribute(t.MEDIA_CONTROLLER);r&&(_o(this,vo,this.getRootNode()?.getElementById(r)),(n=(e=ho(this,vo))?.associateElement)==null||n.call(e,this))}disconnectedCallback(){var e,t;(t=(e=ho(this,vo))?.unassociateElement)==null||t.call(e,this),_o(this,vo,null)}get loadingDelay(){return ho(this,yo)}set loadingDelay(e){_o(this,yo,e);let{style:t}=b(this.shadowRoot,`:host`);t.setProperty(`--_loading-indicator-delay`,`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return C(this,i.MEDIA_PAUSED)}set mediaPaused(e){w(this,i.MEDIA_PAUSED,e)}get mediaLoading(){return C(this,i.MEDIA_LOADING)}set mediaLoading(e){w(this,i.MEDIA_LOADING,e)}get mediaController(){return T(this,t.MEDIA_CONTROLLER)}set mediaController(e){E(this,t.MEDIA_CONTROLLER,e)}get noAutohide(){return C(this,bo.NO_AUTOHIDE)}set noAutohide(e){w(this,bo.NO_AUTOHIDE,e)}};vo=new WeakMap,yo=new WeakMap,wo.shadowRootOptions={mode:`open`},wo.getTemplateHTML=Co,_.customElements.get(`media-loading-indicator`)||_.customElements.define(`media-loading-indicator`,wo);var To=wo,Eo=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Do=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Oo=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function ko(e){return`
    <style>
      :host(:not([${i.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${i.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${i.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${i.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${i.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${i.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${i.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Eo}</slot>
      <slot name="low">${Do}</slot>
      <slot name="medium">${Do}</slot>
      <slot name="high">${Oo}</slot>
    </slot>
  `}function Ao(){return`
    <slot name="tooltip-mute">${g(`Mute`)}</slot>
    <slot name="tooltip-unmute">${g(`Unmute`)}</slot>
  `}var jo=e=>{let t=e.mediaVolumeLevel===`off`?g(`unmute`):g(`mute`);e.setAttribute(`aria-label`,t)},Mo=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),jo(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_VOLUME_LEVEL&&jo(this)}get mediaVolumeLevel(){return T(this,i.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){E(this,i.MEDIA_VOLUME_LEVEL,e)}handleClick(){let t=this.mediaVolumeLevel===`off`?e.MEDIA_UNMUTE_REQUEST:e.MEDIA_MUTE_REQUEST;this.dispatchEvent(new _.CustomEvent(t,{composed:!0,bubbles:!0}))}};Mo.getSlotTemplateHTML=ko,Mo.getTooltipContentHTML=Ao,_.customElements.get(`media-mute-button`)||_.customElements.define(`media-mute-button`,Mo);var No=Mo,Po=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Fo(e){return`
    <style>
      :host([${i.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${i.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${i.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Po}</slot>
      <slot name="exit">${Po}</slot>
    </slot>
  `}function Io(){return`
    <slot name="tooltip-enter">${g(`Enter picture in picture mode`)}</slot>
    <slot name="tooltip-exit">${g(`Exit picture in picture mode`)}</slot>
  `}var Lo=e=>{let t=e.mediaIsPip?g(`exit picture in picture mode`):g(`enter picture in picture mode`);e.setAttribute(`aria-label`,t)},Ro=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_IS_PIP,i.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Lo(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_IS_PIP&&Lo(this)}get mediaPipUnavailable(){return T(this,i.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){E(this,i.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return C(this,i.MEDIA_IS_PIP)}set mediaIsPip(e){w(this,i.MEDIA_IS_PIP,e)}handleClick(){let t=this.mediaIsPip?e.MEDIA_EXIT_PIP_REQUEST:e.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new _.CustomEvent(t,{composed:!0,bubbles:!0}))}};Ro.getSlotTemplateHTML=Fo,Ro.getTooltipContentHTML=Io,_.customElements.get(`media-pip-button`)||_.customElements.define(`media-pip-button`,Ro);var zo=Ro,Bo=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Vo=(e,t,n)=>(Bo(e,t,`read from private field`),n?n.call(e):t.get(e)),Ho=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Uo,Wo={RATES:`rates`},Go=[1,1.2,1.5,1.7,2];function Ko(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function qo(){return g(`Playback rate`)}var Jo=class extends H{constructor(){super(),Ho(this,Uo,new Ft(this,Wo.RATES,{defaultValue:Go})),this.container=this.shadowRoot.querySelector(`slot[name="icon"]`),this.container.innerHTML=`${this.mediaPlaybackRate??1}x`}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_PLAYBACK_RATE,Wo.RATES]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===Wo.RATES&&(Vo(this,Uo).value=n),e===i.MEDIA_PLAYBACK_RATE){let e=n?+n:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute(`aria-label`,g(`Playback rate {playbackRate}`,{playbackRate:t}))}}get rates(){return Vo(this,Uo)}set rates(e){e?Array.isArray(e)?Vo(this,Uo).value=e.join(` `):typeof e==`string`&&(Vo(this,Uo).value=e):Vo(this,Uo).value=``}get mediaPlaybackRate(){return x(this,i.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){S(this,i.MEDIA_PLAYBACK_RATE,e)}handleClick(){let t=Array.from(Vo(this,Uo).values(),e=>+e).sort((e,t)=>e-t),n=t.find(e=>e>this.mediaPlaybackRate)??t[0]??1,r=new _.CustomEvent(e.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(r)}};Uo=new WeakMap,Jo.getSlotTemplateHTML=Ko,Jo.getTooltipContentHTML=qo,_.customElements.get(`media-playback-rate-button`)||_.customElements.define(`media-playback-rate-button`,Jo);var Yo=Jo,Xo=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Zo=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Qo(e){return`
    <style>
      :host([${i.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${i.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${i.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${i.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Xo}</slot>
      <slot name="pause">${Zo}</slot>
    </slot>
  `}function $o(){return`
    <slot name="tooltip-play">${g(`Play`)}</slot>
    <slot name="tooltip-pause">${g(`Pause`)}</slot>
  `}var es=e=>{let t=e.mediaPaused?g(`play`):g(`pause`);e.setAttribute(`aria-label`,t)},ts=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_PAUSED,i.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),es(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===i.MEDIA_PAUSED||e===i.MEDIA_LANG)&&es(this)}get mediaPaused(){return C(this,i.MEDIA_PAUSED)}set mediaPaused(e){w(this,i.MEDIA_PAUSED,e)}handleClick(){let t=this.mediaPaused?e.MEDIA_PLAY_REQUEST:e.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new _.CustomEvent(t,{composed:!0,bubbles:!0}))}};ts.getSlotTemplateHTML=Qo,ts.getTooltipContentHTML=$o,_.customElements.get(`media-play-button`)||_.customElements.define(`media-play-button`,ts);var ns=ts,rs={PLACEHOLDER_SRC:`placeholdersrc`,SRC:`src`};function is(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var as=e=>{e.style.removeProperty(`background-image`)},os=(e,t)=>{e.style[`background-image`]=`url('${t}')`},ss=class extends _.HTMLElement{static get observedAttributes(){return[rs.PLACEHOLDER_SRC,rs.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector(`#image`)}attributeChangedCallback(e,t,n){e===rs.SRC&&(n==null?this.image.removeAttribute(rs.SRC):this.image.setAttribute(rs.SRC,n)),e===rs.PLACEHOLDER_SRC&&(n==null?as(this.image):os(this.image,n))}get placeholderSrc(){return T(this,rs.PLACEHOLDER_SRC)}set placeholderSrc(e){E(this,rs.SRC,e)}get src(){return T(this,rs.SRC)}set src(e){E(this,rs.SRC,e)}};ss.shadowRootOptions={mode:`open`},ss.getTemplateHTML=is,_.customElements.get(`media-poster-image`)||_.customElements.define(`media-poster-image`,ss);var cs=ss,ls=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},us=(e,t,n)=>(ls(e,t,`read from private field`),n?n.call(e):t.get(e)),ds=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},fs=(e,t,n,r)=>(ls(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ps,ms=class extends pa{constructor(){super(),ds(this,ps,void 0),fs(this,ps,this.shadowRoot.querySelector(`slot`))}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_PREVIEW_CHAPTER,i.MEDIA_LANG]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),(e===i.MEDIA_PREVIEW_CHAPTER||e===i.MEDIA_LANG)&&n!==t&&n!=null)if(us(this,ps).textContent=n,n!==``){let e=g(`chapter: {chapterName}`,{chapterName:n});this.setAttribute(`aria-valuetext`,e)}else this.removeAttribute(`aria-valuetext`)}get mediaPreviewChapter(){return T(this,i.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){E(this,i.MEDIA_PREVIEW_CHAPTER,e)}};ps=new WeakMap,_.customElements.get(`media-preview-chapter-display`)||_.customElements.define(`media-preview-chapter-display`,ms);var hs=ms,gs=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},_s=(e,t,n)=>(gs(e,t,`read from private field`),n?n.call(e):t.get(e)),vs=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ys=(e,t,n,r)=>(gs(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),bs;function xs(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Ss=class extends _.HTMLElement{constructor(){if(super(),vs(this,bs,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=y(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[t.MEDIA_CONTROLLER,i.MEDIA_PREVIEW_IMAGE,i.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,n;let r=this.getAttribute(t.MEDIA_CONTROLLER);r&&(ys(this,bs,this.getRootNode()?.getElementById(r)),(n=(e=_s(this,bs))?.associateElement)==null||n.call(e,this))}disconnectedCallback(){var e,t;(t=(e=_s(this,bs))?.unassociateElement)==null||t.call(e,this),ys(this,bs,null)}attributeChangedCallback(e,n,r){var a,o,s,c;[i.MEDIA_PREVIEW_IMAGE,i.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===t.MEDIA_CONTROLLER&&(n&&((o=(a=_s(this,bs))?.unassociateElement)==null||o.call(a,this),ys(this,bs,null)),r&&this.isConnected&&(ys(this,bs,this.getRootNode()?.getElementById(r)),(c=(s=_s(this,bs))?.associateElement)==null||c.call(s,this)))}get mediaPreviewImage(){return T(this,i.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){E(this,i.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(i.MEDIA_PREVIEW_COORDS);return}this.setAttribute(i.MEDIA_PREVIEW_COORDS,e.join(` `))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[n,r,i,a]=e,o=t.split(`#`)[0],s=getComputedStyle(this),{maxWidth:c,maxHeight:l,minWidth:u,minHeight:d}=s,f=s.getPropertyValue(`--media-preview-thumbnail-object-fit`).trim()||`contain`,p,m;if(f===`fill`){let e=parseInt(c)/i,t=parseInt(l)/a,n=parseInt(u)/i,r=parseInt(d)/a;p=e<1?e:Math.max(e,n),m=t<1?t:Math.max(t,r)}else{let e=Math.min(parseInt(c)/i,parseInt(l)/a),t=Math.max(parseInt(u)/i,parseInt(d)/a),n=e<1?e:t>1?t:1;p=n,m=n}let{style:h}=b(this.shadowRoot,`:host`),ee=b(this.shadowRoot,`img`).style,te=this.shadowRoot.querySelector(`img`),ne=Math.min(p,m)<1?`min`:`max`;h.setProperty(`${ne}-width`,`initial`,`important`),h.setProperty(`${ne}-height`,`initial`,`important`),h.width=`${i*p}px`,h.height=`${a*m}px`;let re=()=>{ee.width=`${this.imgWidth*p}px`,ee.height=`${this.imgHeight*m}px`,ee.display=`block`};te.src!==o&&(te.onload=()=>{this.imgWidth=te.naturalWidth,this.imgHeight=te.naturalHeight,re(),te.onload=null},te.src=o,re()),re(),ee.transform=`translate(-${n*p}px, -${r*m}px)`}};bs=new WeakMap,Ss.shadowRootOptions={mode:`open`},Ss.getTemplateHTML=xs,_.customElements.get(`media-preview-thumbnail`)||_.customElements.define(`media-preview-thumbnail`,Ss);var Cs=Ss,ws=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Ts=(e,t,n)=>(ws(e,t,`read from private field`),n?n.call(e):t.get(e)),Es=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ds=(e,t,n,r)=>(ws(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Os,ks=class extends pa{constructor(){super(),Es(this,Os,void 0),Ds(this,Os,this.shadowRoot.querySelector(`slot`)),Ts(this,Os).textContent=ge(0)}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_PREVIEW_TIME&&n!=null&&(Ts(this,Os).textContent=ge(parseFloat(n)))}get mediaPreviewTime(){return x(this,i.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){S(this,i.MEDIA_PREVIEW_TIME,e)}};Os=new WeakMap,_.customElements.get(`media-preview-time-display`)||_.customElements.define(`media-preview-time-display`,ks);var As=ks,js={SEEK_OFFSET:`seekoffset`},Ms=30,Ns=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Ps(e,t){return`
    <slot name="icon">${Ns(t.seekOffset)}</slot>
  `}var Fs=(e,t)=>{e.setAttribute(`aria-label`,g(`seek back {seekOffset} seconds`,{seekOffset:t}))};function Is(){return g(`Seek backward`)}var Ls=0,Rs=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_CURRENT_TIME,js.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=x(this,js.SEEK_OFFSET,Ms)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),Fs(this,this.seekOffset),e===js.SEEK_OFFSET&&(this.seekOffset=x(this,js.SEEK_OFFSET,Ms))}get seekOffset(){return x(this,js.SEEK_OFFSET,Ms)}set seekOffset(e){S(this,js.SEEK_OFFSET,e),this.setAttribute(`aria-label`,g(`seek back {seekOffset} seconds`,{seekOffset:this.seekOffset})),Me(Pe(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return x(this,i.MEDIA_CURRENT_TIME,Ls)}set mediaCurrentTime(e){S(this,i.MEDIA_CURRENT_TIME,e)}handleClick(){let t=Math.max(this.mediaCurrentTime-this.seekOffset,0),n=new _.CustomEvent(e.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}};Rs.getSlotTemplateHTML=Ps,Rs.getTooltipContentHTML=Is,_.customElements.get(`media-seek-backward-button`)||_.customElements.define(`media-seek-backward-button`,Rs);var zs=Rs,Bs={SEEK_OFFSET:`seekoffset`},Vs=30,Hs=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Us(e,t){return`
    <slot name="icon">${Hs(t.seekOffset)}</slot>
  `}var Ws=(e,t)=>{e.setAttribute(`aria-label`,g(`seek forward {seekOffset} seconds`,{seekOffset:t}))};function Gs(){return g(`Seek forward`)}var Ks=0,qs=class extends H{static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_CURRENT_TIME,Bs.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=x(this,Bs.SEEK_OFFSET,Vs)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),Ws(this,this.seekOffset),e===Bs.SEEK_OFFSET&&(this.seekOffset=x(this,Bs.SEEK_OFFSET,Vs))}get seekOffset(){return x(this,Bs.SEEK_OFFSET,Vs)}set seekOffset(e){S(this,Bs.SEEK_OFFSET,e),this.setAttribute(`aria-label`,g(`seek forward {seekOffset} seconds`,{seekOffset:this.seekOffset})),Me(Pe(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return x(this,i.MEDIA_CURRENT_TIME,Ks)}set mediaCurrentTime(e){S(this,i.MEDIA_CURRENT_TIME,e)}handleClick(){let t=this.mediaCurrentTime+this.seekOffset,n=new _.CustomEvent(e.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}};qs.getSlotTemplateHTML=Us,qs.getTooltipContentHTML=Gs,_.customElements.get(`media-seek-forward-button`)||_.customElements.define(`media-seek-forward-button`,qs);var Js=qs,Ys=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},q=(e,t,n)=>(Ys(e,t,`read from private field`),n?n.call(e):t.get(e)),Xs=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Zs=(e,t,n,r)=>(Ys(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Qs=(e,t,n)=>(Ys(e,t,`access private method`),n),$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc={REMAINING:`remaining`,SHOW_DURATION:`showduration`,NO_TOGGLE:`notoggle`},dc=[...Object.values(uc),i.MEDIA_CURRENT_TIME,i.MEDIA_DURATION,i.MEDIA_SEEKABLE],fc=[`Enter`,` `],pc=`&nbsp;/&nbsp;`,mc=(e,{timesSep:t=pc}={})=>{let n=e.mediaCurrentTime??0,[,r]=e.mediaSeekable??[],i=0;Number.isFinite(e.mediaDuration)?i=e.mediaDuration:Number.isFinite(r)&&(i=r);let a=e.remaining?ge(0-(i-n)):ge(n);return e.showDuration?`${a}${t}${ge(i)}`:a},hc=e=>{let t=e.mediaCurrentTime,[,n]=e.mediaSeekable??[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(n)&&(r=n),t==null||r===null){e.setAttribute(`aria-description`,g(`video not loaded, unknown time.`));return}let i=e.remaining?he(0-(r-t)):he(t);if(!e.showDuration){e.setAttribute(`aria-description`,i);return}let a=g(`{currentTime} of {totalTime}`,{currentTime:i,totalTime:he(r)});e.setAttribute(`aria-description`,a)};function gc(e,t){return`
    <slot>${mc(t)}</slot>
  `}var _c=e=>{e.setAttribute(`aria-label`,g(`playback time`))},vc=class extends pa{constructor(){super(),Xs(this,nc),Xs(this,ic),Xs(this,oc),Xs(this,cc),Xs(this,$s,void 0),Xs(this,ec,null),Xs(this,tc,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!fc.includes(r)){this.removeEventListener(`keyup`,q(this,ec));return}this.addEventListener(`keyup`,q(this,ec))}),Zs(this,$s,this.shadowRoot.querySelector(`slot`)),q(this,$s).innerHTML=`${mc(this)}`}static get observedAttributes(){return[...super.observedAttributes,...dc,`disabled`]}connectedCallback(){let{style:e}=b(this.shadowRoot,`:host(:hover:not([notoggle]))`);e.setProperty(`cursor`,`var(--media-cursor, pointer)`),e.setProperty(`background`,`var(--media-control-hover-background, rgba(50 50 70 / .7))`),this.setAttribute(`aria-label`,g(`playback time`)),Qs(this,oc,sc).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute(`remaining`)?this.removeAttribute(`remaining`):this.setAttribute(`remaining`,``))}disconnectedCallback(){this.disable(),Qs(this,ic,ac).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,n){_c(this),dc.includes(e)?this.update():e===`disabled`&&n!==t?n==null?Qs(this,oc,sc).call(this):Qs(this,cc,lc).call(this):e===uc.NO_TOGGLE&&n!==t&&(this.noToggle?Qs(this,cc,lc).call(this):Qs(this,oc,sc).call(this)),super.attributeChangedCallback(e,t,n)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return C(this,uc.REMAINING)}set remaining(e){w(this,uc.REMAINING,e)}get showDuration(){return C(this,uc.SHOW_DURATION)}set showDuration(e){w(this,uc.SHOW_DURATION,e)}get noToggle(){return C(this,uc.NO_TOGGLE)}set noToggle(e){w(this,uc.NO_TOGGLE,e)}get mediaDuration(){return x(this,i.MEDIA_DURATION)}set mediaDuration(e){S(this,i.MEDIA_DURATION,e)}get mediaCurrentTime(){return x(this,i.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){S(this,i.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(i.MEDIA_SEEKABLE);return}this.setAttribute(i.MEDIA_SEEKABLE,e.join(`:`))}update(){let e=mc(this);hc(this),e!==q(this,$s).innerHTML&&(q(this,$s).innerHTML=e)}};$s=new WeakMap,ec=new WeakMap,tc=new WeakMap,nc=new WeakSet,rc=function(){q(this,ec)||(Zs(this,ec,e=>{let{key:t}=e;if(!fc.includes(t)){this.removeEventListener(`keyup`,q(this,ec));return}this.toggleTimeDisplay()}),this.addEventListener(`keydown`,q(this,tc)),this.addEventListener(`click`,this.toggleTimeDisplay))},ic=new WeakSet,ac=function(){q(this,ec)&&(this.removeEventListener(`keyup`,q(this,ec)),this.removeEventListener(`keydown`,q(this,tc)),this.removeEventListener(`click`,this.toggleTimeDisplay),Zs(this,ec,null))},oc=new WeakSet,sc=function(){!this.noToggle&&!this.hasAttribute(`disabled`)&&(this.setAttribute(`role`,`button`),this.enable(),Qs(this,nc,rc).call(this))},cc=new WeakSet,lc=function(){this.removeAttribute(`role`),this.disable(),Qs(this,ic,ac).call(this)},vc.getSlotTemplateHTML=gc,_.customElements.get(`media-time-display`)||_.customElements.define(`media-time-display`,vc);var yc=vc,bc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},J=(e,t,n)=>(bc(e,t,`read from private field`),n?n.call(e):t.get(e)),xc=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Y=(e,t,n,r)=>(bc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Sc=(e,t,n,r)=>({set _(r){Y(e,t,r,n)},get _(){return J(e,t,r)}}),Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc=class{constructor(e,t,n){xc(this,Cc,void 0),xc(this,wc,void 0),xc(this,Tc,void 0),xc(this,Ec,void 0),xc(this,Dc,void 0),xc(this,Oc,void 0),xc(this,kc,void 0),xc(this,Ac,void 0),xc(this,jc,0),xc(this,Mc,(e=performance.now())=>{Y(this,jc,requestAnimationFrame(J(this,Mc))),Y(this,Ec,performance.now()-J(this,Tc));let t=1e3/this.fps;if(J(this,Ec)>t){Y(this,Tc,e-J(this,Ec)%t);let n=1e3/((e-J(this,wc))/++Sc(this,Dc)._),r=(e-J(this,Oc))/1e3/this.duration,i=J(this,kc)+r*this.playbackRate;i-J(this,Cc).valueAsNumber>0?Y(this,Ac,this.playbackRate/this.duration/n):(Y(this,Ac,.995*J(this,Ac)),i=J(this,Cc).valueAsNumber+J(this,Ac)),this.callback(i)}}),Y(this,Cc,e),this.callback=t,this.fps=n}start(){J(this,jc)===0&&(Y(this,Tc,performance.now()),Y(this,wc,J(this,Tc)),Y(this,Dc,0),J(this,Mc).call(this))}stop(){J(this,jc)!==0&&(cancelAnimationFrame(J(this,jc)),Y(this,jc,0))}update({start:e,duration:t,playbackRate:n}){let r=e-J(this,Cc).valueAsNumber,i=Math.abs(t-this.duration);(r>0||r<-.03||i>=.5)&&this.callback(e),Y(this,kc,e),Y(this,Oc,performance.now()),this.duration=t,this.playbackRate=n}};Cc=new WeakMap,wc=new WeakMap,Tc=new WeakMap,Ec=new WeakMap,Dc=new WeakMap,Oc=new WeakMap,kc=new WeakMap,Ac=new WeakMap,jc=new WeakMap,Mc=new WeakMap;var Pc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},X=(e,t,n)=>(Pc(e,t,`read from private field`),n?n.call(e):t.get(e)),Z=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Q=(e,t,n,r)=>(Pc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),$=(e,t,n)=>(Pc(e,t,`access private method`),n),Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl=e=>{let t=e.range,n=he(+ul(e)),r=he(+e.mediaSeekableEnd),i=n&&r?g(`{currentTime} of {totalTime}`,{currentTime:n,totalTime:r}):g(`video not loaded, unknown time.`);t.setAttribute(`aria-valuetext`,i)};function cl(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${i.MEDIA_PREVIEW_IMAGE}], [${i.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${i.MEDIA_PREVIEW_IMAGE}], [${i.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${i.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${i.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${i.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${i.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${i.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${i.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${i.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${i.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${i.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${i.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${i.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${i.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Cs.shadowRootOptions.mode}">
            ${Cs.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var ll=(e,t=e.mediaCurrentTime)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(r))return 0;let i=(t-n)/(r-n);return Math.max(0,Math.min(i,1))},ul=(e,t=e.range.valueAsNumber)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(r)?0:t*(r-n)+n},dl=class extends Xi{constructor(){super(),Z(this,Kc),Z(this,Yc),Z(this,Zc),Z(this,$c),Z(this,tl),Z(this,rl),Z(this,al),Z(this,Fc,null),Z(this,Ic,void 0),Z(this,Lc,void 0),Z(this,Rc,void 0),Z(this,zc,void 0),Z(this,Bc,void 0),Z(this,Vc,void 0),Z(this,Hc,void 0),Z(this,Uc,void 0),Z(this,Wc,void 0),Z(this,Gc,()=>{$(this,Kc,qc).call(this)?X(this,Ic).start():X(this,Ic).stop()}),Z(this,Jc,e=>{this.dragging||(oe(e)&&(this.range.valueAsNumber=e),X(this,Wc)||this.updateBar())}),this.shadowRoot.querySelector(`#track`).insertAdjacentHTML(`afterbegin`,`<div id="buffered" part="buffered"></div>`),Q(this,Lc,this.shadowRoot.querySelectorAll(`[part~="box"]`)),Q(this,zc,this.shadowRoot.querySelector(`[part~="preview-box"]`)),Q(this,Bc,this.shadowRoot.querySelector(`[part~="current-box"]`));let e=getComputedStyle(this);Q(this,Vc,parseInt(e.getPropertyValue(`--media-box-padding-left`))),Q(this,Hc,parseInt(e.getPropertyValue(`--media-box-padding-right`))),Q(this,Ic,new Nc(this.range,X(this,Jc),60))}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_PAUSED,i.MEDIA_DURATION,i.MEDIA_SEEKABLE,i.MEDIA_CURRENT_TIME,i.MEDIA_PREVIEW_IMAGE,i.MEDIA_PREVIEW_TIME,i.MEDIA_PREVIEW_CHAPTER,i.MEDIA_BUFFERED,i.MEDIA_PLAYBACK_RATE,i.MEDIA_LOADING,i.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute(`aria-label`,g(`seek`)),X(this,Gc).call(this),Q(this,Fc,this.getRootNode()),(e=X(this,Fc))==null||e.addEventListener(`transitionstart`,this)}disconnectedCallback(){var e;super.disconnectedCallback(),X(this,Ic).stop(),(e=X(this,Fc))==null||e.removeEventListener(`transitionstart`,this),Q(this,Fc,null)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),t!=n&&(e===i.MEDIA_CURRENT_TIME||e===i.MEDIA_PAUSED||e===i.MEDIA_ENDED||e===i.MEDIA_LOADING||e===i.MEDIA_DURATION||e===i.MEDIA_SEEKABLE?(X(this,Ic).update({start:ll(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),X(this,Gc).call(this),sl(this)):e===i.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===i.MEDIA_DURATION||e===i.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=X(this,Uc),this.updateBar()))}get mediaChaptersCues(){return X(this,Uc)}set mediaChaptersCues(e){Q(this,Uc,e),this.updateSegments(X(this,Uc)?.map(e=>({start:ll(this,e.startTime),end:ll(this,e.endTime)})))}get mediaPaused(){return C(this,i.MEDIA_PAUSED)}set mediaPaused(e){w(this,i.MEDIA_PAUSED,e)}get mediaLoading(){return C(this,i.MEDIA_LOADING)}set mediaLoading(e){w(this,i.MEDIA_LOADING,e)}get mediaDuration(){return x(this,i.MEDIA_DURATION)}set mediaDuration(e){S(this,i.MEDIA_DURATION,e)}get mediaCurrentTime(){return x(this,i.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){S(this,i.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return x(this,i.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){S(this,i.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i.MEDIA_BUFFERED);return e?e.split(` `).map(e=>e.split(`:`).map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(i.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(`:`)).join(` `);this.setAttribute(i.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(i.MEDIA_SEEKABLE);return}this.setAttribute(i.MEDIA_SEEKABLE,e.join(`:`))}get mediaSeekableEnd(){let[,e=this.mediaDuration]=this.mediaSeekable??[];return e}get mediaSeekableStart(){let[e=0]=this.mediaSeekable??[];return e}get mediaPreviewImage(){return T(this,i.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){E(this,i.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return x(this,i.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){S(this,i.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return C(this,i.MEDIA_ENDED)}set mediaEnded(e){w(this,i.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){let e=this.mediaBuffered;if(!e.length)return;let t;if(this.mediaEnded)t=1;else{let n=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=e.find(([e,t])=>e<=n&&n<=t)??[];t=ll(this,r)}let{style:n}=b(this.shadowRoot,`#buffered`);n.setProperty(`width`,`${t*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector(`slot[name="current"]`).assignedElements().length)return;let e=b(this.shadowRoot,`#current-rail`),t=b(this.shadowRoot,`[part~="current-box"]`),n=$(this,Yc,Xc).call(this,X(this,Bc)),r=$(this,Zc,Qc).call(this,n,this.range.valueAsNumber),i=$(this,$c,el).call(this,n,this.range.valueAsNumber);e.style.transform=`translateX(${r})`,e.style.setProperty(`--_range-width`,`${n.range.width}`),t.style.setProperty(`--_box-shift`,`${i}`),t.style.setProperty(`--_box-width`,`${n.box.width}px`),t.style.setProperty(`visibility`,`initial`)}handleEvent(e){switch(super.handleEvent(e),e.type){case`input`:$(this,al,ol).call(this);break;case`pointermove`:$(this,tl,nl).call(this,e);break;case`pointerup`:X(this,Wc)&&Q(this,Wc,!1);break;case`pointerdown`:Q(this,Wc,!0);break;case`pointerleave`:$(this,rl,il).call(this,null);break;case`transitionstart`:Fe(e.target,this)&&setTimeout(()=>X(this,Gc).call(this),0);break}}};Fc=new WeakMap,Ic=new WeakMap,Lc=new WeakMap,Rc=new WeakMap,zc=new WeakMap,Bc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,Uc=new WeakMap,Wc=new WeakMap,Gc=new WeakMap,Kc=new WeakSet,qc=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ze(this)},Jc=new WeakMap,Yc=new WeakSet,Xc=function(e){let t=((this.getAttribute(`bounds`)?Ie(this,`#${this.getAttribute(`bounds`)}`):this.parentElement)??this).getBoundingClientRect(),n=this.range.getBoundingClientRect(),r=e.offsetWidth;return{box:{width:r,min:-(n.left-t.left-r/2),max:t.right-n.left-r/2},bounds:t,range:n}},Zc=new WeakSet,Qc=function(e,t){let n=`${t*100}%`,{width:r,min:i,max:a}=e.box;if(!r)return n;if(Number.isNaN(i)||(n=`max(${`calc(1 / var(--_range-width) * 100 * ${i}% + var(--media-box-padding-left))`}, ${n})`),!Number.isNaN(a)){let e=`calc(1 / var(--_range-width) * 100 * ${a}% - var(--media-box-padding-right))`;n=`min(${n}, ${e})`}return n},$c=new WeakSet,el=function(e,t){let{width:n,min:r,max:i}=e.box,a=t*e.range.width;if(a<r+X(this,Vc)){let t=e.range.left-e.bounds.left-X(this,Vc);return`${a-n/2+t}px`}if(a>i-X(this,Hc)){let t=e.bounds.right-e.range.right-X(this,Hc);return`${a+n/2-t-e.range.width}px`}return 0},tl=new WeakSet,nl=function(e){let t=[...X(this,Lc)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){$(this,rl,il).call(this,null);return}let n=this.mediaSeekableEnd;if(!n)return;let r=b(this.shadowRoot,`#preview-rail`),i=b(this.shadowRoot,`[part~="preview-box"]`),a=$(this,Yc,Xc).call(this,X(this,zc)),o=(e.clientX-a.range.left)/a.range.width;o=Math.max(0,Math.min(1,o));let s=$(this,Zc,Qc).call(this,a,o),c=$(this,$c,el).call(this,a,o);r.style.transform=`translateX(${s})`,r.style.setProperty(`--_range-width`,`${a.range.width}`),i.style.setProperty(`--_box-shift`,`${c}`),i.style.setProperty(`--_box-width`,`${a.box.width}px`);let l=Math.round(X(this,Rc))-Math.round(o*n);Math.abs(l)<1&&o>.01&&o<.99||(Q(this,Rc,o*n),$(this,rl,il).call(this,X(this,Rc)))},rl=new WeakSet,il=function(t){this.dispatchEvent(new _.CustomEvent(e.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))},al=new WeakSet,ol=function(){X(this,Ic).stop();let t=ul(this);this.dispatchEvent(new _.CustomEvent(e.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))},dl.shadowRootOptions={mode:`open`},dl.getContainerTemplateHTML=cl,_.customElements.get(`media-time-range`)||_.customElements.define(`media-time-range`,dl);var fl=dl,pl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},ml=(e,t,n)=>(pl(e,t,`read from private field`),n?n.call(e):t.get(e)),hl=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},gl,_l=1,vl=e=>e.mediaMuted?0:e.mediaVolume,yl=e=>`${Math.round(e*100)}%`,bl=class extends Xi{constructor(){super(...arguments),hl(this,gl,()=>{let t=this.range.value,n=new _.CustomEvent(e.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)})}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_VOLUME,i.MEDIA_MUTED,i.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute(`aria-label`,g(`volume`)),this.range.addEventListener(`input`,ml(this,gl))}disconnectedCallback(){this.range.removeEventListener(`input`,ml(this,gl)),super.disconnectedCallback()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===i.MEDIA_VOLUME||e===i.MEDIA_MUTED)&&(this.range.valueAsNumber=vl(this),this.range.setAttribute(`aria-valuetext`,yl(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return x(this,i.MEDIA_VOLUME,_l)}set mediaVolume(e){S(this,i.MEDIA_VOLUME,e)}get mediaMuted(){return C(this,i.MEDIA_MUTED)}set mediaMuted(e){w(this,i.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return T(this,i.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){E(this,i.MEDIA_VOLUME_UNAVAILABLE,e)}};gl=new WeakMap,_.customElements.get(`media-volume-range`)||_.customElements.define(`media-volume-range`,bl);var xl=bl;function Sl(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${i.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Cl(){return g(`Loop`)}var wl=class extends H{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,i.MEDIA_LOOP]}connectedCallback(){super.connectedCallback(),this.container=this.shadowRoot?.querySelector(`#icon`)||null,this.container&&(this.container.textContent=g(`Loop`))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===i.MEDIA_LOOP&&this.container&&this.setAttribute(`aria-checked`,this.mediaLoop?`true`:`false`)}get mediaLoop(){return C(this,i.MEDIA_LOOP)}set mediaLoop(e){w(this,i.MEDIA_LOOP,e)}handleClick(){let t=!this.mediaLoop,n=new _.CustomEvent(e.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}};wl.getSlotTemplateHTML=Sl,wl.getTooltipContentHTML=Cl,_.customElements.get(`media-loop-button`)||_.customElements.define(`media-loop-button`,wl);var Tl=wl;export{Oe as $,Or as A,Ye as B,aa as C,Ur as D,Xr as E,Rt as F,Re as G,Fe as H,Vt as I,T as J,Ae as K,Ft as L,cr as M,Kt as N,Pr as O,Bt as P,E as Q,N as R,ma as S,xi as T,Le as U,Ie as V,je as W,y as X,He as Y,S as Z,po as _,Js as a,se as at,Ia as b,Cs as c,a as ct,ns as d,e as dt,ke as et,Go as f,To as g,No as h,yc as i,ae as it,fr as j,H as k,hs as l,t as lt,zo as m,xl as n,_ as nt,zs as o,ne as ot,Yo as p,x as q,fl as r,g as rt,As as s,m as st,Tl as t,v as tt,cs as u,i as ut,ro as v,Zi as w,Sa as x,Ga as y,Tt as z};