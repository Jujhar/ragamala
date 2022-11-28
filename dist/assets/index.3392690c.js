const tn=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&h(f)}).observe(document,{childList:!0,subtree:!0});function n(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function h(c){if(c.ep)return;c.ep=!0;const d=n(c);fetch(c.href,d)}};tn();function B(){}function Xe(t){return t()}function ze(){return Object.create(null)}function A(t){t.forEach(Xe)}function en(t){return typeof t=="function"}function nn(t,r){return t!=t?r==r:t!==r||t&&typeof t=="object"||typeof t=="function"}let $;function sn(t,r){return $||($=document.createElement("a")),$.href=r,t===$.href}function rn(t){return Object.keys(t).length===0}function l(t,r){t.appendChild(r)}function mn(t,r,n){t.insertBefore(r,n||null)}function Ze(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function m(){return s(" ")}function v(t,r,n){n==null?t.removeAttribute(r):t.getAttribute(r)!==n&&t.setAttribute(r,n)}function on(t){return Array.from(t.childNodes)}function p(t,r,n,h){n===null?t.style.removeProperty(r):t.style.setProperty(r,n,h?"important":"")}let P;function C(t){P=t}function un(){if(!P)throw new Error("Function called outside component initialization");return P}function cn(t){un().$$.on_mount.push(t)}const k=[],Ue=[],x=[],Qe=[],hn=Promise.resolve();let va=!1;function dn(){va||(va=!0,hn.then(ln))}function Ta(t){x.push(t)}const Ha=new Set;let G=0;function ln(){const t=P;do{for(;G<k.length;){const r=k[G];G++,C(r),bn(r.$$)}for(C(null),k.length=0,G=0;Ue.length;)Ue.pop()();for(let r=0;r<x.length;r+=1){const n=x[r];Ha.has(n)||(Ha.add(n),n())}x.length=0}while(k.length);for(;Qe.length;)Qe.pop()();va=!1,Ha.clear(),C(t)}function bn(t){if(t.fragment!==null){t.update(),A(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(Ta)}}const gn=new Set;function fn(t,r){t&&t.i&&(gn.delete(t),t.i(r))}function pn(t,r,n,h){const{fragment:c,on_mount:d,on_destroy:f,after_update:R}=t.$$;c&&c.m(r,n),h||Ta(()=>{const g=d.map(Xe).filter(en);f?f.push(...g):A(g),t.$$.on_mount=[]}),R.forEach(Ta)}function Mn(t,r){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(r),n.on_destroy=n.fragment=null,n.ctx=[])}function Rn(t,r){t.$$.dirty[0]===-1&&(k.push(t),dn(),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function Ln(t,r,n,h,c,d,f,R=[-1]){const g=P;C(t);const b=t.$$={fragment:null,ctx:null,props:d,update:B,not_equal:c,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:ze(),dirty:R,skip_bound:!1,root:r.target||g.$$.root};f&&f(b.root);let L=!1;if(b.ctx=n?n(t,r.props||{},(M,_,...y)=>{const T=y.length?y[0]:_;return b.ctx&&c(b.ctx[M],b.ctx[M]=T)&&(!b.skip_bound&&b.bound[M]&&b.bound[M](T),L&&Rn(t,M)),_}):[],b.update(),L=!0,A(b.before_update),b.fragment=h?h(b.ctx):!1,r.target){if(r.hydrate){const M=on(r.target);b.fragment&&b.fragment.l(M),M.forEach(Ze)}else b.fragment&&b.fragment.c();r.intro&&fn(t.$$.fragment),pn(t,r.target,r.anchor,r.customElement),ln()}C(g)}class _n{$destroy(){Mn(this,1),this.$destroy=B}$on(r,n){const h=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return h.push(n),()=>{const c=h.indexOf(n);c!==-1&&h.splice(c,1)}}$set(r){this.$$set&&!rn(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}function yn(t){let r,n,h,c,d,f,R,g,b,L,M,_,y,T,Sa,e,K,ka,w,Ba,D,Ca,j,Pa,N,Ia,J,$a,V,Ga,E,xa,Aa,Ka,O,wa,W,Da,Y,ja,q,Na,H,Ja,Va,F,Ea,z,Oa,U,Wa,Q,Ya,X,qa,Z,Fa,ll,al,za,tl,Ua,Qa,Xa,el,Za,nl,lt,sl,at,rl,tt,il,et,ml,nt,ol,st,ul,rt,it,mt,cl,ot,hl,ut,dl,ct,ht,dt,bl,bt,gl,gt,ft,pt,Mt,fl,Rt,o,pl,Lt,Ml,_t,Rl,yt,Ll,Ht,_l,vt,Tt,St,yl,kt,Hl,Bt,vl,Ct,Tl,Pt,It,$t,Sl,Gt,kl,Bl,xt,Cl,At,Pl,Kt,wt,Dt,Il,jt,$l,Nt,Jt,Vt,Et,Gl,Ot,xl,Wt,Yt,qt,Al,Ft,Kl,zt,Ut,Qt,wl,Xt,u,Dl,Zt,jl,le,Nl,ae,Jl,te,Vl,ee,El,ne,Ol,se,re,ie,Wl,me,Yl,oe,ql,ue,Fl,ce,zl,Ul,he,Ql,de,Xl,Zl,be,la,ge,aa,fe,pe,Me,Re,ta,Le,i,ea,_e,na,ye,sa,He,ra,ve,ia,Te,ma,Se,oa,ua,ke,ca,Be,Ce,Pe,ha,Ie,da,$e,ba,Ge,ga,xe,fa,Ae,Ke,we,pa,De,Ma,je,Ne,Je,Ra,Ve,La,Ee,_a,Oe,We,Ye,qe,S,Fe,I;return{c(){r=a("html"),n=a("body"),h=a("table"),h.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-t6r88k" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C</div></td></tr></tbody>`,c=m(),d=a("h3"),d.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small>\u0A74</small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',f=m(),R=a("ul"),g=a("li"),b=s("(1) "),L=a("b"),M=s("Bhairao \u{1F9D8}\u200D\u2640\uFE0F"),_=a("small"),y=a("small"),y.textContent=`(1 ${t[0][33][3]+t[0][33][4]})`,T=a("br"),Sa=m(),e=a("p"),K=a("b"),K.textContent="Wives",ka=s(": Bhairavi "),w=a("small"),w.innerHTML="<small>(1)</small>",Ba=s(`,
   `),D=a("u"),D.textContent="Bilawali",Ca=m(),j=a("small"),j.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",Pa=s(`,
   Punyaki `),N=a("small"),N.innerHTML="<small>(1)</small>",Ia=s(`,
   `),J=a("u"),J.textContent="Bangli",$a=m(),V=a("small"),V.innerHTML="<small>(L \u263F\u{1F506})</small>",Ga=s(", Aslekhi "),E=a("small"),E.innerHTML="<small>(Puniya?)</small>",xa=s("."),Aa=a("br"),Ka=m(),O=a("b"),O.textContent="Sons",wa=s(": "),W=a("u"),W.textContent="Pancham",Da=m(),Y=a("small"),Y.innerHTML="<small>(R0)</small>",ja=s(`,
Harakh `),q=a("small"),q.innerHTML="<small>(R1)</small>",Na=s(`,
              `),H=a("img"),Va=m(),F=a("u"),F.textContent="Devsakh",Ea=m(),z=a("small"),z.innerHTML="<small>(1 \u{1F31C}\u{1F505})</small>",Oa=s(`,
`),U=a("u"),U.textContent="Bangalam",Wa=m(),Q=a("small"),Q.innerHTML="<small>(L?)</small>",Ya=s(`,
Maadhmadhava `),X=a("small"),X.innerHTML="<small>(2 \u263F\u{1F31C})</small>",qa=s(`,
`),Z=a("u"),Z.textContent="Lalit",Fa=m(),ll=a("small"),al=a("small"),al.textContent=`(R3 ${t[0][12][3]}\u{1F505})`,za=s(`,
Bilaval `),tl=a("small"),tl.innerHTML="<small>(1)</small>",Ua=s("."),Qa=a("br"),Xa=m(),el=a("b"),el.textContent="Retro",Za=s(": Gauri "),nl=a("small"),nl.innerHTML="<small>(3 \u263F\u{1F31C})</small>",lt=s(`,
Ramkali `),sl=a("small"),sl.innerHTML="<small>(3 \u{1F31C}\u{1F505})</small>",at=s(`,
Pahadi `),rl=a("small"),rl.innerHTML="<small>(R0)</small>",tt=s(`,
Malashree `),il=a("small"),il.innerHTML="<small>(R0 SP)</small>",et=s(`,
Hamsadvani `),ml=a("small"),ml.innerHTML="<small>(R0?-R1?)</small>",nt=s(`,
Durga `),ol=a("small"),ol.innerHTML="<small>(R1 \u2642\u{1F505})</small>",st=s(`,
Bhinna Shadja `),ul=a("small"),ul.innerHTML="<small>(R2 \u2642\u{1F505})</small>",rt=s(","),it=a("br"),mt=s(`
Jogkauns `),cl=a("small"),cl.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ot=s(`,
Hemant `),hl=a("small"),hl.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ut=s(`,
Bihagaraa / Bihag `),dl=a("small"),dl.innerHTML="<small>(R1 \u2640\uFE0F\u{1FA90})</small>",ct=s("."),ht=a("br"),dt=m(),bl=a("b"),bl.textContent="Combo",bt=s(": Gauri Deepak / (Gauri Yeman)  "),gl=a("small"),gl.innerHTML="<small>(R1)</small>",gt=s(", Poorvi, Bairagi."),ft=m(),pt=a("br"),Mt=m(),fl=a("ul"),fl.innerHTML="<li>(2) <b>Malkaus raga</b> \u{1F369}<small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",Rt=m(),o=a("p"),pl=a("b"),pl.textContent="Wives",Lt=s(": Gaundkari "),Ml=a("small"),Ml.innerHTML="<small>(1 DR)</small>",_t=s(", Devgandhari "),Rl=a("small"),Rl.innerHTML="<small>(1)</small>",yt=s(`,
  Gandhari `),Ll=a("small"),Ll.innerHTML="<small>(1)</small>",Ht=s(", Seehute, Dhanasri "),_l=a("small"),_l.innerHTML="<small>(2 \u{1F505}\u{1F31C})</small>",vt=s("."),Tt=a("br"),St=m(),yl=a("b"),yl.textContent="Sons",kt=s(": Maru "),Hl=a("small"),Hl.innerHTML="<small>(2 \u{1F31C}\u{1FA90})</small>",Bt=s(", Marwa "),vl=a("small"),vl.innerHTML="<small>(R0)</small>",Ct=s(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Tl=a("small"),Tl.innerHTML="<small>(Bhamarananda?)</small>",Pt=s("."),It=a("br"),$t=m(),Sl=a("b"),Sl.textContent="Retro",Gt=s(": Mali Gaura "),kl=a("small"),Bl=a("small"),Bl.textContent=`(${t[0][29][2]+t[0][29][3],+t[0][29][4]})`,xt=s(", Suhi "),Cl=a("small"),Cl.innerHTML="<small>(1)</small>",At=s(`,
 Puriya `),Pl=a("small"),Pl.innerHTML="<small>(R1)</small>",Kt=s(`.
`),wt=a("br"),Dt=m(),Il=a("b"),Il.textContent="Combo",jt=s(": Dhanasri Ambika "),$l=a("small"),$l.innerHTML="<small>(1)</small>",Nt=s("."),Jt=m(),Vt=a("br"),Et=m(),Gl=a("ul"),Gl.innerHTML="<li>(3) <b>Hindol raga</b> \u{1F334}<br/></li>",Ot=m(),xl=a("p"),xl.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Wt=m(),Yt=a("br"),qt=m(),Al=a("ul"),Al.innerHTML="<li>(4) <b>Deepak raga</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",Ft=m(),Kl=a("p"),Kl.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   Gujri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,zt=m(),Ut=a("br"),Qt=m(),wl=a("ul"),wl.innerHTML="<li>(5) <b>Sri raga \u26F5\u{1F49A}<small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",Xt=m(),u=a("p"),Dl=a("b"),Dl.textContent="Wives",Zt=s(": Baradi / Varali / Bairari "),jl=a("small"),jl.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",le=s(", Karnati "),Nl=a("small"),Nl.innerHTML="<small>(0 DR)</small>",ae=s(`,
  Gavri `),Jl=a("small"),Jl.innerHTML="<small>(2 SP)</small>",te=s(", "),Vl=a("u"),Vl.textContent="Asavari",ee=m(),El=a("small"),El.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",ne=s(`,
   Sindhve / Sindhura `),Ol=a("small"),Ol.innerHTML="<small>(3 SP)</small>",se=s("."),re=a("br"),ie=m(),Wl=a("b"),Wl.textContent="Sons",me=s(": "),Yl=a("u"),Yl.textContent="Salag",oe=m(),ql=a("small"),ql.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",ue=s(", "),Fl=a("u"),Fl.textContent="Sarang",ce=m(),zl=a("small"),Ul=a("small"),Ul.textContent=`(${t[0][14][2]+t[0][14][3]}\u{1F31C})`,he=s(`,
Sagra `),Ql=a("small"),Ql.innerHTML="<small>(R0 GD)</small>",de=s(`,
Gond `),Xl=a("small"),Zl=a("small"),Zl.textContent=`(1 \u{1F505}${t[0][27][4]})`,be=s(", Gambhir, Gund, Kumbah "),la=a("small"),la.innerHTML="<small>(R2 MS)</small>",ge=s(`,
Hamir `),aa=a("small"),aa.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",fe=s("."),pe=m(),Me=a("br"),Re=m(),ta=a("ul"),ta.innerHTML="<li>(6) <b>Megh \u2614<small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Le=m(),i=a("p"),ea=a("b"),ea.textContent="Wives",_e=s(": "),na=a("u"),na.textContent="Sorath",ye=m(),sa=a("small"),sa.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",He=s(`,
  Gond `),ra=a("small"),ra.innerHTML="<small>(1)</small>",ve=s(`,
  `),ia=a("u"),ia.textContent="Malari",Te=m(),ma=a("small"),ma.innerHTML="<small>(L \u263F\u{1F505}?)</small>",Se=s(`,
   Asa `),oa=a("small"),ua=a("small"),ua.textContent=`(R3 ${t[0][10][3]}\u{1F505})`,ke=s(", Soohou "),ca=a("small"),ca.innerHTML="<small>(Puniya? or Soob)</small>",Be=s("."),Ce=a("br"),Pe=m(),ha=a("b"),ha.textContent="Sons",Ie=s(": Bayra-dhar, Gaj-dhar "),da=a("small"),da.innerHTML="<small>(1?)</small>",$e=s(`,
Kedara `),ba=a("small"),ba.innerHTML="<small>(C0)</small>",Ge=s(", Jabli-dhar, Nat "),ga=a("small"),ga.innerHTML="<small>(R2 \u2642\u{1F505})</small>",xe=s(`,
Jaldhar,
Shankara `),fa=a("small"),fa.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",Ae=s(`,
Syama.`),Ke=a("br"),we=m(),pa=a("b"),pa.textContent="Retro",De=s(": Vibhas "),Ma=a("small"),Ma.innerHTML="<small>(0)</small>",je=s("."),Ne=a("br"),Je=m(),Ra=a("b"),Ra.textContent="Combo",Ve=s(": Asa Aaswari (Sri) "),La=a("small"),La.innerHTML="<small>(1?)</small>",Ee=s(", Tribungi, "),_a=a("u"),_a.textContent="Sorath",Oe=s(", Gujri (Deepak), Shalokh, Nat Bhariav."),We=m(),Ye=a("br"),qe=m(),S=a("pre"),S.textContent=`
  0 \u{1F305} 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao ${t[0][33][3]+t[0][33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F)
																	Gauri Bharagon? (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u0A2E\u0A3E)
																	Vibhas (\u2614 \u{1FA99}\u263F),

1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal ${t[0][3][3]+""+t[0][3][4]}, Puniya,
																Gauri Bharagon (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)? Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? ${t[0][1][3]}${t[0][1][4]}
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																Gujri? (\u2764\uFE0F\u200D\u{1F525}), , 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self

2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15/Green) Vadhans (RP), Suha Sughrai (PS), Bhimpalasi (\u2642S)
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura ${t[0][29][3],+t[0][29][4]}
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari ${t[0][24][3]+t[0][24][4]}, Sarang ${t[0][14][3]}\u{1F31C}


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
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) ${t[0][5][3],t[0][5][3]}, Pahadi Bhupali (PS),
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
																Kalavati \u{1F31C}\u{1F506}, 'Jaijaivanti ${t[0][39][3]+t[0][39][4]} Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?! (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40) , Durga, Bihag / Bihagara ${t[0][20][3]+t[0][20][4]}, Hamsadvani?,
																Kanra (\u2764\uFE0F\u200D\u{1F525}),  Khamaj?, Gauri?!, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
															    Hameer (\u26F5\u{1FA99}\u2640\uFE0F)  (lights in dark + virras),
																Malkos (\u{1F369}) Puriya
																Saraswati (\u0A35 \u{1F31C}\u{1F6B9})
																Gauri?!, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)   'Gauri Manjari?,
								                                                    Kirwani (\u0A4D - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, \u0A15, \u0A36)


R2 10.48 PM - 3.36 AM ratri  \u263E2          8     10:30 2      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F)
															   'Des?, Khamoj (\u{1F334}),
																Chandrakauns? (\u0A1A)
																'Darbari Kanada? (\u26F5),  Adana
																Deepak (\u2764\uFE0F\u200D\u{1F525})
															    Malkaus(\u{1F369})
																'Sahana? (\u0A15), 'Bahar?, Shiv Ranjani



R3 3.36 AM - 6 AM nisanta 3		\u263E3			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Prabhati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F,  'Lalit \u0A2D\u0A47,\u0A2A\u0A42, (\u2642\u{1F505})
															Hindol (\u{1F334})
															Paraj (\u0A2A\u0A42 \u{1F506}\u{1F31C})


L - Bengali / Bangla (\u0A2D\u0A47) ${t[0][4][3]+t[0][4][4]}

`,Fe=m(),I=a("div"),I.innerHTML=`Legend<br/>
  \u2614 Megh<br/>
  \xA0\u25E6\xA0\xA0Ignore underlines and \`&#39;s`,p(h,"clear","right"),p(h,"margin-bottom",".5em"),p(h,"float","right"),p(h,"padding",".5em 0 .8em 1.4em"),p(h,"background","none"),p(h,"width","auto"),v(h,"cellspacing","0"),v(h,"cellpadding","0"),p(d,"margin-bottom","28px"),sn(H.src,Ja="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||v(H,"src",Ja),p(H,"vertical-align","middle"),p(H,"width","30px"),p(S,"background-color","#2727da"),p(S,"padding","10px"),p(I,"background-color","#3eab7e"),v(n,"class","svelte-t6r88k"),v(r,"data-theme","retro"),v(r,"lang","en")},m(ya,an){mn(ya,r,an),l(r,n),l(n,h),l(n,c),l(n,d),l(n,f),l(n,R),l(R,g),l(g,b),l(g,L),l(L,M),l(L,_),l(_,y),l(g,T),l(n,Sa),l(n,e),l(e,K),l(e,ka),l(e,w),l(e,Ba),l(e,D),l(e,Ca),l(e,j),l(e,Pa),l(e,N),l(e,Ia),l(e,J),l(e,$a),l(e,V),l(e,Ga),l(e,E),l(e,xa),l(e,Aa),l(e,Ka),l(e,O),l(e,wa),l(e,W),l(e,Da),l(e,Y),l(e,ja),l(e,q),l(e,Na),l(e,H),l(e,Va),l(e,F),l(e,Ea),l(e,z),l(e,Oa),l(e,U),l(e,Wa),l(e,Q),l(e,Ya),l(e,X),l(e,qa),l(e,Z),l(e,Fa),l(e,ll),l(ll,al),l(e,za),l(e,tl),l(e,Ua),l(e,Qa),l(e,Xa),l(e,el),l(e,Za),l(e,nl),l(e,lt),l(e,sl),l(e,at),l(e,rl),l(e,tt),l(e,il),l(e,et),l(e,ml),l(e,nt),l(e,ol),l(e,st),l(e,ul),l(e,rt),l(e,it),l(e,mt),l(e,cl),l(e,ot),l(e,hl),l(e,ut),l(e,dl),l(e,ct),l(e,ht),l(e,dt),l(e,bl),l(e,bt),l(e,gl),l(e,gt),l(n,ft),l(n,pt),l(n,Mt),l(n,fl),l(n,Rt),l(n,o),l(o,pl),l(o,Lt),l(o,Ml),l(o,_t),l(o,Rl),l(o,yt),l(o,Ll),l(o,Ht),l(o,_l),l(o,vt),l(o,Tt),l(o,St),l(o,yl),l(o,kt),l(o,Hl),l(o,Bt),l(o,vl),l(o,Ct),l(o,Tl),l(o,Pt),l(o,It),l(o,$t),l(o,Sl),l(o,Gt),l(o,kl),l(kl,Bl),l(o,xt),l(o,Cl),l(o,At),l(o,Pl),l(o,Kt),l(o,wt),l(o,Dt),l(o,Il),l(o,jt),l(o,$l),l(o,Nt),l(n,Jt),l(n,Vt),l(n,Et),l(n,Gl),l(n,Ot),l(n,xl),l(n,Wt),l(n,Yt),l(n,qt),l(n,Al),l(n,Ft),l(n,Kl),l(n,zt),l(n,Ut),l(n,Qt),l(n,wl),l(n,Xt),l(n,u),l(u,Dl),l(u,Zt),l(u,jl),l(u,le),l(u,Nl),l(u,ae),l(u,Jl),l(u,te),l(u,Vl),l(u,ee),l(u,El),l(u,ne),l(u,Ol),l(u,se),l(u,re),l(u,ie),l(u,Wl),l(u,me),l(u,Yl),l(u,oe),l(u,ql),l(u,ue),l(u,Fl),l(u,ce),l(u,zl),l(zl,Ul),l(u,he),l(u,Ql),l(u,de),l(u,Xl),l(Xl,Zl),l(u,be),l(u,la),l(u,ge),l(u,aa),l(u,fe),l(n,pe),l(n,Me),l(n,Re),l(n,ta),l(n,Le),l(n,i),l(i,ea),l(i,_e),l(i,na),l(i,ye),l(i,sa),l(i,He),l(i,ra),l(i,ve),l(i,ia),l(i,Te),l(i,ma),l(i,Se),l(i,oa),l(oa,ua),l(i,ke),l(i,ca),l(i,Be),l(i,Ce),l(i,Pe),l(i,ha),l(i,Ie),l(i,da),l(i,$e),l(i,ba),l(i,Ge),l(i,ga),l(i,xe),l(i,fa),l(i,Ae),l(i,Ke),l(i,we),l(i,pa),l(i,De),l(i,Ma),l(i,je),l(i,Ne),l(i,Je),l(i,Ra),l(i,Ve),l(i,La),l(i,Ee),l(i,_a),l(i,Oe),l(n,We),l(n,Ye),l(n,qe),l(n,S),l(n,Fe),l(n,I)},p:B,i:B,o:B,d(ya){ya&&Ze(r)}}}function Hn(t){return cn(()=>{console.log("yepppi")}),[[["Sri","\u26F5","III","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","RIII","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","III","\u2642","\u{1F31C}","R0?"],["Sarang","\u26F5","2","\u2642","\u{1F31C}","I?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","2","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","2","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","III","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","III","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","III","\u2642","\u{1F31C}"],["Maru","\u{1F369}","2","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","III","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R0"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","0","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","RI","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Prabhati","\u0A15","RIII","\u{1F505}","\u{1F31C}","0\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","RI"," \u2642"," \u{1F505}","R2?"],["Jaijaivanti","\u{1F334}","RI","\u2642","\u{1F31C}"]]]}class vn extends _n{constructor(r){super(),Ln(this,r,Hn,yn,nn,{})}}new vn({target:document.body});
