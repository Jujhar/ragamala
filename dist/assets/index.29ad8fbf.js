const Nl=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}};Nl();function B(){}function Cl(l){return l()}function xl(){return Object.create(null)}function $(l){l.forEach(Cl)}function Jl(l){return typeof l=="function"}function Vl(l,s){return l!=l?s==s:l!==s||l&&typeof l=="object"||typeof l=="function"}function El(l){return Object.keys(l).length===0}function a(l,s){l.appendChild(s)}function Ol(l,s,t){l.insertBefore(s,t||null)}function Il(l){l.parentNode.removeChild(l)}function e(l){return document.createElement(l)}function m(l){return document.createTextNode(l)}function i(){return m(" ")}function S(l,s,t){t==null?l.removeAttribute(s):l.getAttribute(s)!==t&&l.setAttribute(s,t)}function Wl(l){return Array.from(l.childNodes)}function f(l,s,t,u){t===null?l.style.removeProperty(s):l.style.setProperty(s,t,u?"important":"")}let P;function L(l){P=l}function Yl(){if(!P)throw new Error("Function called outside component initialization");return P}function Fl(l){Yl().$$.on_mount.push(l)}const k=[],Kl=[],G=[],wl=[],ql=Promise.resolve();let Sa=!1;function zl(){Sa||(Sa=!0,ql.then(Dl))}function ka(l){G.push(l)}const va=new Set;let T=0;function Dl(){const l=P;do{for(;T<k.length;){const s=k[T];T++,L(s),Ul(s.$$)}for(L(null),k.length=0,T=0;Kl.length;)Kl.pop()();for(let s=0;s<G.length;s+=1){const t=G[s];va.has(t)||(va.add(t),t())}G.length=0}while(k.length);for(;wl.length;)wl.pop()();Sa=!1,va.clear(),L(l)}function Ul(l){if(l.fragment!==null){l.update(),$(l.before_update);const s=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,s),l.after_update.forEach(ka)}}const Ql=new Set;function Xl(l,s){l&&l.i&&(Ql.delete(l),l.i(s))}function Zl(l,s,t,u){const{fragment:o,on_mount:c,on_destroy:d,after_update:p}=l.$$;o&&o.m(s,t),u||ka(()=>{const g=c.map(Cl).filter(Jl);d?d.push(...g):$(g),l.$$.on_mount=[]}),p.forEach(ka)}function at(l,s){const t=l.$$;t.fragment!==null&&($(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function lt(l,s){l.$$.dirty[0]===-1&&(k.push(l),zl(),l.$$.dirty.fill(0)),l.$$.dirty[s/31|0]|=1<<s%31}function tt(l,s,t,u,o,c,d,p=[-1]){const g=P;L(l);const h=l.$$={fragment:null,ctx:null,props:c,update:B,not_equal:o,bound:xl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:xl(),dirty:p,skip_bound:!1,root:s.target||g.$$.root};d&&d(h.root);let R=!1;if(h.ctx=t?t(l,s.props||{},(b,y,...M)=>{const _=M.length?M[0]:y;return h.ctx&&o(h.ctx[b],h.ctx[b]=_)&&(!h.skip_bound&&h.bound[b]&&h.bound[b](_),R&&lt(l,b)),y}):[],h.update(),R=!0,$(h.before_update),h.fragment=u?u(h.ctx):!1,s.target){if(s.hydrate){const b=Wl(s.target);h.fragment&&h.fragment.l(b),b.forEach(Il)}else h.fragment&&h.fragment.c();s.intro&&Xl(l.$$.fragment),Zl(l,s.target,s.anchor,s.customElement),Dl()}L(g)}class et{$destroy(){at(this,1),this.$destroy=B}$on(s,t){const u=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return u.push(t),()=>{const o=u.indexOf(t);o!==-1&&u.splice(o,1)}}$set(s){this.$$set&&!El(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function st(l){let s,t,u,o,c,d,p,g,h,R,b,y,M,_,A,Ba,La,Pa,x,Ha,K,Ta,Ga,$a,w,Aa,C,xa,Ka,wa,I,Ca,r,D,Ia,j,Da,N,ja,J,Na,V,Ja,E,Va,O,Ea,Oa,Wa,W,Ya,Y,Fa,F,qa,q,za,z,Ua,U,Qa,Q,X,Xa,Z,Za,aa,al,ll,tl,el,la,sl,n,ta,nl,ea,rl,sa,il,na,ml,ra,ol,ia,ul,ma,oa,cl,ua,hl,dl,bl,ca,gl,ha,fl,da,pl,ba,Ml,ga,Rl,yl,_l,fa,vl,pa,Sl,kl,Bl,Ma,Ll,Ra,Pl,ya,Hl,Tl,Gl,$l,v,Al,H;return{c(){s=e("html"),t=e("body"),u=e("table"),u.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-t6r88k" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C</div></td></tr></tbody>`,o=i(),c=e("h3"),c.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small>\u0A74</small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',d=i(),p=e("ul"),p.innerHTML="<li>(1) <b>Bhairao \u{1F9D8}\u200D\u2640\uFE0F<small><small>(1)</small></small></b><br/></li>",g=i(),h=e("p"),h.innerHTML=`<b>Wives</b>: Bhairavi <small><small>(1)</small></small>,
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
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R1)</small></small>, Poorvi, Bairagi.`,R=i(),b=e("br"),y=i(),M=e("ul"),M.innerHTML="<li>(2) <b>Malkaus raga</b> \u{1F369}<small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",_=i(),A=e("p"),A.innerHTML=`<b>Wives</b>: Gaundkari <small><small>(1 DR)</small></small>, Devgandhari <small><small>(1)</small></small>,
  Gandhari <small><small>(1)</small></small>, Seehute, Dhanasri <small><small>(2 \u{1F505}\u{1F31C})</small></small>.<br/> 
<b>Sons</b>: Maru <small><small>(2 \u{1F31C}\u{1FA90})</small></small>, Marwa <small><small>(R0)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br/> 
<b>Retro</b>: Mali Gaura <small><small>(1)</small></small>, Suhi <small><small>(1)</small></small>,
 Puriya <small><small>(R1)</small></small>.
<br/> 
<b>Combo</b>: Dhanasri Ambika <small><small>(1)</small></small>.`,Ba=i(),La=e("br"),Pa=i(),x=e("ul"),x.innerHTML="<li>(3) <b>Hindol raga</b> \u{1F334}<br/></li>",Ha=i(),K=e("p"),K.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u2642/\u{1F31C})</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Ta=i(),Ga=e("br"),$a=i(),w=e("ul"),w.innerHTML="<li>(4) <b>Deepak raga</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",Aa=i(),C=e("p"),C.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   Gujri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,xa=i(),Ka=e("br"),wa=i(),I=e("ul"),I.innerHTML="<li>(5) <b>Sri raga \u26F5\u{1F49A}<small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",Ca=i(),r=e("p"),D=e("b"),D.textContent="Wives",Ia=m(": Baradi / Varali / Bairari "),j=e("small"),j.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",Da=m(", Karnati "),N=e("small"),N.innerHTML="<small>(0 DR)</small>",ja=m(`,
  Gavri `),J=e("small"),J.innerHTML="<small>(2 SP)</small>",Na=m(", "),V=e("u"),V.textContent="Asavari",Ja=i(),E=e("small"),E.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",Va=m(`,
   Sindhve / Sindhura `),O=e("small"),O.innerHTML="<small>(3 SP)</small>",Ea=m("."),Oa=e("br"),Wa=i(),W=e("b"),W.textContent="Sons",Ya=m(": "),Y=e("u"),Y.textContent="Salag",Fa=i(),F=e("small"),F.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",qa=m(", "),q=e("u"),q.textContent="Sarang",za=i(),z=e("small"),z.innerHTML="<small>(1 \u263F\u{1F31C})</small>",Ua=m(`,
Sagra`),U=e("small"),U.innerHTML="<small>(R0 GD)</small>",Qa=m(`,
Gond `),Q=e("small"),X=e("small"),X.textContent=`(1 \u{1F505}${l[0][27][4]})`,Xa=m(", Gambhir, Gund, Kumbah "),Z=e("small"),Z.innerHTML="<small>(R2 MS)</small>",Za=m(`,
Hamir `),aa=e("small"),aa.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",al=m("."),ll=i(),tl=e("br"),el=i(),la=e("ul"),la.innerHTML="<li>(6) <b>Megh \u2614<small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",sl=i(),n=e("p"),ta=e("b"),ta.textContent="Wives",nl=m(": "),ea=e("u"),ea.textContent="Sorath",rl=i(),sa=e("small"),sa.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",il=m(`,
  Gond `),na=e("small"),na.innerHTML="<small>(1)</small>",ml=m(`,
  `),ra=e("u"),ra.textContent="Malari",ol=i(),ia=e("small"),ia.innerHTML="<small>(L \u263F\u{1F505}?)</small>",ul=m(`,
   Asa `),ma=e("small"),oa=e("small"),oa.textContent=`(R3 ${l[0][10][3]}\u{1F505})`,cl=m(", Soohou "),ua=e("small"),ua.innerHTML="<small>(Puniya? or Soob)</small>",hl=m("."),dl=e("br"),bl=i(),ca=e("b"),ca.textContent="Sons",gl=m(": Bayra-dhar, Gaj-dhar "),ha=e("small"),ha.innerHTML="<small>(1?)</small>",fl=m(`,
Kedara `),da=e("small"),da.innerHTML="<small>(C0)</small>",pl=m(", Jabli-dhar, Nat "),ba=e("small"),ba.innerHTML="<small>(R2 \u2642\u{1F505})</small>",Ml=m(`,
Jaldhar,
Shankara `),ga=e("small"),ga.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",Rl=m(`,
Syama.`),yl=e("br"),_l=i(),fa=e("b"),fa.textContent="Retro",vl=m(": Vibhas "),pa=e("small"),pa.innerHTML="<small>(0)</small>",Sl=m("."),kl=e("br"),Bl=i(),Ma=e("b"),Ma.textContent="Combo",Ll=m(": Asa Aaswari (Sri) "),Ra=e("small"),Ra.innerHTML="<small>(1?)</small>",Pl=m(", Tribungi, "),ya=e("u"),ya.textContent="Sorath",Hl=m(", Gujri (Deepak), Shalokh, Nat Bhariav."),Tl=i(),Gl=e("br"),$l=i(),v=e("pre"),v.textContent=`
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

`,Al=i(),H=e("div"),H.innerHTML=`Legend<br/>
  \u2614 Megh<br/>
  \xA0\u25E6\xA0\xA0Ignore underlines and \`&#39;s`,f(u,"clear","right"),f(u,"margin-bottom",".5em"),f(u,"float","right"),f(u,"padding",".5em 0 .8em 1.4em"),f(u,"background","none"),f(u,"width","auto"),S(u,"cellspacing","0"),S(u,"cellpadding","0"),f(c,"margin-bottom","28px"),f(v,"background-color","#2727da"),f(v,"padding","10px"),f(H,"background-color","#3eab7e"),S(t,"class","svelte-t6r88k"),S(s,"data-theme","retro"),S(s,"lang","en")},m(_a,jl){Ol(_a,s,jl),a(s,t),a(t,u),a(t,o),a(t,c),a(t,d),a(t,p),a(t,g),a(t,h),a(t,R),a(t,b),a(t,y),a(t,M),a(t,_),a(t,A),a(t,Ba),a(t,La),a(t,Pa),a(t,x),a(t,Ha),a(t,K),a(t,Ta),a(t,Ga),a(t,$a),a(t,w),a(t,Aa),a(t,C),a(t,xa),a(t,Ka),a(t,wa),a(t,I),a(t,Ca),a(t,r),a(r,D),a(r,Ia),a(r,j),a(r,Da),a(r,N),a(r,ja),a(r,J),a(r,Na),a(r,V),a(r,Ja),a(r,E),a(r,Va),a(r,O),a(r,Ea),a(r,Oa),a(r,Wa),a(r,W),a(r,Ya),a(r,Y),a(r,Fa),a(r,F),a(r,qa),a(r,q),a(r,za),a(r,z),a(r,Ua),a(r,U),a(r,Qa),a(r,Q),a(Q,X),a(r,Xa),a(r,Z),a(r,Za),a(r,aa),a(r,al),a(t,ll),a(t,tl),a(t,el),a(t,la),a(t,sl),a(t,n),a(n,ta),a(n,nl),a(n,ea),a(n,rl),a(n,sa),a(n,il),a(n,na),a(n,ml),a(n,ra),a(n,ol),a(n,ia),a(n,ul),a(n,ma),a(ma,oa),a(n,cl),a(n,ua),a(n,hl),a(n,dl),a(n,bl),a(n,ca),a(n,gl),a(n,ha),a(n,fl),a(n,da),a(n,pl),a(n,ba),a(n,Ml),a(n,ga),a(n,Rl),a(n,yl),a(n,_l),a(n,fa),a(n,vl),a(n,pa),a(n,Sl),a(n,kl),a(n,Bl),a(n,Ma),a(n,Ll),a(n,Ra),a(n,Pl),a(n,ya),a(n,Hl),a(t,Tl),a(t,Gl),a(t,$l),a(t,v),a(t,Al),a(t,H)},p:B,i:B,o:B,d(_a){_a&&Il(s)}}}function nt(l){return Fl(()=>{console.log("yepppi")}),[[["Sri","\u26F5","III","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","R0","\u2642","\u{1F506}"],["Megh","\u2614","R0","\u2642","\u{1F506}"],["Basant","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Asa","\u2614","RIII","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Lalat","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","III","\u2642","\u{1F31C}","R0?"],["Basanti","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Patmanjari","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Salag","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","III","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","III","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"]]]}class rt extends et{constructor(s){super(),tt(this,s,nt,st,Vl,{})}}new rt({target:document.body});
