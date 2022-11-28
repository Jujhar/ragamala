const Hl=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const c of m)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(m){const c={};return m.integrity&&(c.integrity=m.integrity),m.referrerpolicy&&(c.referrerPolicy=m.referrerpolicy),m.crossorigin==="use-credentials"?c.credentials="include":m.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(m){if(m.ep)return;m.ep=!0;const c=t(m);fetch(m.href,c)}};Hl();function B(){}function kl(l){return l()}function _l(){return Object.create(null)}function $(l){l.forEach(kl)}function Tl(l){return typeof l=="function"}function Gl(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}function $l(l){return Object.keys(l).length===0}function a(l,e){l.appendChild(e)}function Al(l,e,t){l.insertBefore(e,t||null)}function Bl(l){l.parentNode.removeChild(l)}function s(l){return document.createElement(l)}function r(l){return document.createTextNode(l)}function u(){return r(" ")}function S(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function xl(l){return Array.from(l.childNodes)}function f(l,e,t,o){t===null?l.style.removeProperty(e):l.style.setProperty(e,t,o?"important":"")}let P;function L(l){P=l}function Kl(){if(!P)throw new Error("Function called outside component initialization");return P}function wl(l){Kl().$$.on_mount.push(l)}const k=[],vl=[],G=[],Sl=[],Cl=Promise.resolve();let va=!1;function Il(){va||(va=!0,Cl.then(Ll))}function Sa(l){G.push(l)}const _a=new Set;let T=0;function Ll(){const l=P;do{for(;T<k.length;){const e=k[T];T++,L(e),Dl(e.$$)}for(L(null),k.length=0,T=0;vl.length;)vl.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];_a.has(t)||(_a.add(t),t())}G.length=0}while(k.length);for(;Sl.length;)Sl.pop()();va=!1,_a.clear(),L(l)}function Dl(l){if(l.fragment!==null){l.update(),$(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Sa)}}const jl=new Set;function Nl(l,e){l&&l.i&&(jl.delete(l),l.i(e))}function Jl(l,e,t,o){const{fragment:m,on_mount:c,on_destroy:d,after_update:p}=l.$$;m&&m.m(e,t),o||Sa(()=>{const g=c.map(kl).filter(Tl);d?d.push(...g):$(g),l.$$.on_mount=[]}),p.forEach(Sa)}function Vl(l,e){const t=l.$$;t.fragment!==null&&($(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function El(l,e){l.$$.dirty[0]===-1&&(k.push(l),Il(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function Ol(l,e,t,o,m,c,d,p=[-1]){const g=P;L(l);const h=l.$$={fragment:null,ctx:null,props:c,update:B,not_equal:m,bound:_l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:_l(),dirty:p,skip_bound:!1,root:e.target||g.$$.root};d&&d(h.root);let R=!1;if(h.ctx=t?t(l,e.props||{},(b,y,...M)=>{const _=M.length?M[0]:y;return h.ctx&&m(h.ctx[b],h.ctx[b]=_)&&(!h.skip_bound&&h.bound[b]&&h.bound[b](_),R&&El(l,b)),y}):[],h.update(),R=!0,$(h.before_update),h.fragment=o?o(h.ctx):!1,e.target){if(e.hydrate){const b=xl(e.target);h.fragment&&h.fragment.l(b),b.forEach(Bl)}else h.fragment&&h.fragment.c();e.intro&&Nl(l.$$.fragment),Jl(l,e.target,e.anchor,e.customElement),Ll()}L(g)}class Wl{$destroy(){Vl(this,1),this.$destroy=B}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const m=o.indexOf(t);m!==-1&&o.splice(m,1)}}$set(e){this.$$set&&!$l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Yl(l){let e,t,o,m,c,d,p,g,h,R,b,y,M,_,A,ka,x,Ba,K,La,w,Pa,C,Ha,i,I,Ta,D,Ga,j,$a,N,Aa,J,xa,V,Ka,E,wa,Ca,Ia,O,Da,W,ja,Y,Na,F,Ja,q,Va,z,Ea,U,Q,Oa,X,Wa,Z,Ya,Fa,aa,qa,n,la,za,ta,Ua,ea,Qa,sa,Xa,na,Za,ia,al,ra,ma,ll,oa,tl,el,sl,ua,nl,ca,il,ha,rl,da,ml,ba,ol,ul,cl,ga,hl,fa,dl,bl,gl,pa,fl,Ma,pl,Ra,Ml,Rl,v,yl,H;return{c(){e=s("html"),t=s("body"),o=s("table"),o.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-t6r88k" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C</div></td></tr></tbody>`,m=u(),c=s("h3"),c.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small>\u0A74</small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',d=u(),p=s("ul"),p.innerHTML="<li>(1) <b>Bhairao \u{1F9D8}\u200D\u2640\uFE0F<small><small>(1)</small></small></b><br/></li>",g=u(),h=s("p"),h.innerHTML=`<b>Wives</b>: Bhairavi <small><small>(1)</small></small>,
   <u>Bilawali</u>  <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>,
   Punyaki <small><small>(1)</small></small>,
   <u>Bangli</u>  <small><small>(L \u263F\u{1F506})</small></small>, Aslekhi <small><small>(Puniya?)</small></small>.<br/> 
<b>Sons</b>: <u>Pancham</u>  <small><small>(R0)</small></small>,
Harakh <small><small>(R1)</small></small>,
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG" style="vertical-align: middle;width:30px"/> 
<u>Devsakh</u>  <small><small>(1 \u{1F31C}\u{1F505})</small></small>,
<u>Bangalam</u>  <small><small>(L?)</small></small>,
Maadhmadhava <small><small>(2 \u263F\u{1F31C})</small></small>,
<u>Lalat</u>  <small><small>(R3 \u2642\u{1F505})</small></small>,
Bilaval <small><small>(1)</small></small>.<br/> 
<b>Retro</b>: Gauri <small><small>(3 \u263F\u{1F31C})</small></small>,
Ramkali <small><small>(3 \u{1F31C}\u{1F505})</small></small>,
Pahadi <small><small>(R0)</small></small>,
Malashree <small><small>(R0 SP)</small></small>,
Hamsadvani <small><small>(R0?-R1?)</small></small>,
Durga <small><small>(R1 \u2642\u{1F505})</small></small>,
Bhinna Shadja <small><small>(R2 \u2642\u{1F505})</small></small>,<br/>
Jogkauns <small><small>(R2 \u2642\u{1F505})</small></small>,
Hemant <small><small>(R2 \u2642\u{1F505})</small></small>,
Bihagaraa / Bihag <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R1)</small></small>, Poorvi, Bairagi.`,R=u(),b=s("ul"),b.innerHTML="<li>(2) <b>Malkaus raga</b> \u{1F369}<small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",y=u(),M=s("p"),M.innerHTML=`<b>Wives</b>: Gaundkari <small><small>(1 DR)</small></small>, Devgandhari <small><small>(1)</small></small>,
  Gandhari <small><small>(1)</small></small>, Seehute, Dhanasri <small><small>(2 \u{1F505}\u{1F31C})</small></small>.<br/> 
<b>Sons</b>: Maru <small><small>(2 \u{1F31C}\u{1FA90})</small></small>, Marwa <small><small>(R0)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br/> 
<b>Retro</b>: Mali Gaura <small><small>(1)</small></small>, Suhi <small><small>(1)</small></small>,
 Puriya <small><small>(R1)</small></small>.
<br/> 
<b>Combo</b>: Dhanasri Ambika <small><small>(1)</small></small>.`,_=u(),A=s("ul"),A.innerHTML="<li>(3) <b>Hindol raga</b> \u{1F334}<br/></li>",ka=u(),x=s("p"),x.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u2642/\u{1F31C})</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Ba=u(),K=s("ul"),K.innerHTML="<li>(4) <b>Deepak raga</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",La=u(),w=s("p"),w.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   Gujri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,Pa=u(),C=s("ul"),C.innerHTML="<li>(5) <b>Sri raga \u26F5\u{1F49A}<small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",Ha=u(),i=s("p"),I=s("b"),I.textContent="Wives",Ta=r(": Baradi / Varali / Bairari "),D=s("small"),D.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",Ga=r(", Karnati "),j=s("small"),j.innerHTML="<small>(0 DR)</small>",$a=r(`,
  Gavri `),N=s("small"),N.innerHTML="<small>(2 SP)</small>",Aa=r(", "),J=s("u"),J.textContent="Asavari",xa=u(),V=s("small"),V.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",Ka=r(`,
   Sindhve / Sindhura `),E=s("small"),E.innerHTML="<small>(3 SP)</small>",wa=r("."),Ca=s("br"),Ia=u(),O=s("b"),O.textContent="Sons",Da=r(": "),W=s("u"),W.textContent="Salag",ja=u(),Y=s("small"),Y.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",Na=r(", "),F=s("u"),F.textContent="Sarang",Ja=u(),q=s("small"),q.innerHTML="<small>(1 \u263F\u{1F31C})</small>",Va=r(`,
Sagra`),z=s("small"),z.innerHTML="<small>(R0 GD)</small>",Ea=r(`,
Gond `),U=s("small"),Q=s("small"),Q.textContent=`(1 \u{1F505}${l[0][27][4]})`,Oa=r(", Gambhir, Gund, Kumbah "),X=s("small"),X.innerHTML="<small>(R2 MS)</small>",Wa=r(`,
Hamir `),Z=s("small"),Z.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",Ya=r("."),Fa=u(),aa=s("ul"),aa.innerHTML="<li>(6) <b>Megh \u2614<small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",qa=u(),n=s("p"),la=s("b"),la.textContent="Wives",za=r(": "),ta=s("u"),ta.textContent="Sorath",Ua=u(),ea=s("small"),ea.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",Qa=r(`,
  Gond `),sa=s("small"),sa.innerHTML="<small>(1)</small>",Xa=r(`,
  `),na=s("u"),na.textContent="Malari",Za=u(),ia=s("small"),ia.innerHTML="<small>(L \u263F\u{1F505}?)</small>",al=r(`,
   Asa `),ra=s("small"),ma=s("small"),ma.textContent=`(R3 ${l[0][10][3]}\u{1F505})`,ll=r(", Soohou "),oa=s("small"),oa.innerHTML="<small>(Puniya? or Soob)</small>",tl=r("."),el=s("br"),sl=u(),ua=s("b"),ua.textContent="Sons",nl=r(": Bayra-dhar, Gaj-dhar "),ca=s("small"),ca.innerHTML="<small>(1?)</small>",il=r(`,
Kedara `),ha=s("small"),ha.innerHTML="<small>(C0)</small>",rl=r(", Jabli-dhar, Nat "),da=s("small"),da.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ml=r(`,
Jaldhar,
Shankara `),ba=s("small"),ba.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",ol=r(`,
Syama.`),ul=s("br"),cl=u(),ga=s("b"),ga.textContent="Retro",hl=r(": Vibhas "),fa=s("small"),fa.innerHTML="<small>(0)</small>",dl=r("."),bl=s("br"),gl=u(),pa=s("b"),pa.textContent="Combo",fl=r(": Asa Aaswari (Sri) "),Ma=s("small"),Ma.innerHTML="<small>(1?)</small>",pl=r(", Tribungi, "),Ra=s("u"),Ra.textContent="Sorath",Ml=r(", Gujri (Deepak), Shalokh, Nat Bhariav."),Rl=u(),v=s("pre"),v.textContent=`
  0 \u{1F305} 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairav, Bhariari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F)
																	Gauri Bharagon? (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u0A2E\u0A3E)
																	Vibhas (\u2614 \u{1FA99}\u263F),

1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal ${l[0][3][3]+""+l[0][3][4]}, Puniya,
																Gauri Bharagon (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40) ? Bhairu? Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? ${l[0][1][3]}${l[0][1][4]},  Sarang \u263F\u{1F31C}
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}), Mali Gaura \u263F\u{1F31C}?, Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																Gujri? (\u2764\uFE0F\u200D\u{1F525}), , 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self

2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15/Green) Vadhans (RP), Suha Sughrai (PS), Bhimpalasi (\u2642S)
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?,
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari ${l[0][24][3]+l[0][24][4]}


3 3.36 PM - 6 PM aparahna  3*               1:50 4:50   V
															Gauri, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
															Maajh, (\u0A39\u0A3F\u0A70 \u2642\u{1F505})
															Shri? (\u26F5\u{1F49A} \u263F\u{1F31C})
															Tukhari \u2764\uFE0F\u200D\u{1F525}\u{1F31C}\u{1F506}, Ambika / Madhuvanti
															Kedara? (\u2614)
															Purvi? (\u0A2A \u2640\uFE0F\u{1FA90}), Jaitsri (\u2640\uFE0F\u{1FA90})
															'Sindhura (\u0A15)
                              											        Vachaspati (\u0A35 \u{1F506}\u{1F31C})
															3-4? 2:30-5:30


--------------------------------------------------------------------------------------------------------------------------------
Darkside \u0627\u0644\u0644\u0647


\u{1F307} R0 6 PM - 8.24 PM sayan/utarang \u263E0  (Night)            4:50 - 8     K
																Basant,(\u2614),  Kedara
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) ${l[0][5][3],l[0][5][3]}, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)

R1 8.24 PM - 10.48 PM pradosa \u263E1              8 -10:30      K
																Sorath (\u2614),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi \u263F\u{1F31C}, 'Bageshree, 'Madhukauns, Jog (\u0A15)  Pancham Jogeshwari (MS)
																Chandrakauns?, (\u0A1A strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(\u{1F334})
																Kalavati \u{1F31C}\u{1F506}, Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?! (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40) , Durga, Bihag / Bihagara ${l[0][20][3]+l[0][20][4]}, Hamsadvani?,
																Kanra (\u2764\uFE0F\u200D\u{1F525}),  Khamaj?, Gauri?!, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
															    Hameer (\u26F5\u{1FA99}\u2640\uFE0F)  (lights in dark + virras),
																Malkos (\u{1F369}) Puriya
																Saraswati (\u0A35 \u{1F31C}\u{1F6B9})
																Gauri?!, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)   'Gauri Manjari?,
								                                                    Kirwani (\u0A4D - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, \u0A15, \u0A36)


R2 10.48 PM - 3.36 AM ratri  \u263E2          8     10:30 2      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F)
															   'Jaijawanti, 'Des?, Khamoj (\u{1F334}),
																Chandrakauns? (\u0A1A)
																'Darbari Kanada? (\u26F5),  Adana
																Deepak (\u2764\uFE0F\u200D\u{1F525})
															    Malkaus(\u{1F369})
																'Sahana? (\u0A15), 'Bahar?, Shiv Ranjani



R3 3.36 AM - 6 AM nisanta 3		\u263E3			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Parbati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F,  'Lalit \u0A2D\u0A47,\u0A2A\u0A42, (\u2642\u{1F505})
															Hindol (\u{1F334})
															Paraj (\u0A2A\u0A42 \u{1F506}\u{1F31C})


L - Bengali / Bangla (\u0A2D\u0A47) ${l[0][4][3]+l[0][4][4]}

`,yl=u(),H=s("div"),H.innerHTML=`Legend<br/>
  \u2614 Megh<br/>
  \xA0\u25E6\xA0\xA0Ignore underlines and \`&#39;s`,f(o,"clear","right"),f(o,"margin-bottom",".5em"),f(o,"float","right"),f(o,"padding",".5em 0 .8em 1.4em"),f(o,"background","none"),f(o,"width","auto"),S(o,"cellspacing","0"),S(o,"cellpadding","0"),f(c,"margin-bottom","28px"),f(v,"background-color","#2727da"),f(v,"padding","10px"),f(H,"background-color","#3eab7e"),S(t,"class","svelte-t6r88k"),S(e,"data-theme","retro"),S(e,"lang","en")},m(ya,Pl){Al(ya,e,Pl),a(e,t),a(t,o),a(t,m),a(t,c),a(t,d),a(t,p),a(t,g),a(t,h),a(t,R),a(t,b),a(t,y),a(t,M),a(t,_),a(t,A),a(t,ka),a(t,x),a(t,Ba),a(t,K),a(t,La),a(t,w),a(t,Pa),a(t,C),a(t,Ha),a(t,i),a(i,I),a(i,Ta),a(i,D),a(i,Ga),a(i,j),a(i,$a),a(i,N),a(i,Aa),a(i,J),a(i,xa),a(i,V),a(i,Ka),a(i,E),a(i,wa),a(i,Ca),a(i,Ia),a(i,O),a(i,Da),a(i,W),a(i,ja),a(i,Y),a(i,Na),a(i,F),a(i,Ja),a(i,q),a(i,Va),a(i,z),a(i,Ea),a(i,U),a(U,Q),a(i,Oa),a(i,X),a(i,Wa),a(i,Z),a(i,Ya),a(t,Fa),a(t,aa),a(t,qa),a(t,n),a(n,la),a(n,za),a(n,ta),a(n,Ua),a(n,ea),a(n,Qa),a(n,sa),a(n,Xa),a(n,na),a(n,Za),a(n,ia),a(n,al),a(n,ra),a(ra,ma),a(n,ll),a(n,oa),a(n,tl),a(n,el),a(n,sl),a(n,ua),a(n,nl),a(n,ca),a(n,il),a(n,ha),a(n,rl),a(n,da),a(n,ml),a(n,ba),a(n,ol),a(n,ul),a(n,cl),a(n,ga),a(n,hl),a(n,fa),a(n,dl),a(n,bl),a(n,gl),a(n,pa),a(n,fl),a(n,Ma),a(n,pl),a(n,Ra),a(n,Ml),a(t,Rl),a(t,v),a(t,yl),a(t,H)},p:B,i:B,o:B,d(ya){ya&&Bl(e)}}}function Fl(l){return wl(()=>{console.log("yepppi")}),[[["Sri","\u26F5","III","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","R0","\u2642","\u{1F506}"],["Megh","\u2614","R0","\u2642","\u{1F506}"],["Basant","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Asa","\u2614","RIII","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Lalat","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","III","\u2642","\u{1F31C}","R0?"],["Basanti","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Patmanjari","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Salag","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","III","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","III","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"]]]}class ql extends Wl{constructor(e){super(),Ol(this,e,Fl,Yl,Gl,{})}}new ql({target:document.body});
