const fs=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const v of g.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&b(v)}).observe(document,{childList:!0,subtree:!0});function s(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerpolicy&&(g.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?g.credentials="include":c.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(c){if(c.ep)return;c.ep=!0;const g=s(c);fetch(c.href,g)}};fs();function B(){}function Zn(a){return a()}function Un(){return Object.create(null)}function q(a){a.forEach(Zn)}function Ss(a){return typeof a=="function"}function Ms(a,i){return a!=a?i==i:a!==i||a&&typeof a=="object"||typeof a=="function"}let O;function vs(a,i){return O||(O=document.createElement("a")),O.href=i,a===O.href}function Rs(a){return Object.keys(a).length===0}function t(a,i){a.appendChild(i)}function ys(a,i,s){a.insertBefore(i,s||null)}function ts(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function S(a,i,s){s==null?a.removeAttribute(i):a.getAttribute(i)!==s&&a.setAttribute(i,s)}function _s(a){return Array.from(a.childNodes)}function h(a,i,s,b){s===null?a.style.removeProperty(i):a.style.setProperty(i,s,b?"important":"")}let wl;function x(a){wl=a}const C=[],Qn=[],E=[],Xn=[],Ps=Promise.resolve();let Kl=!1;function Gs(){Kl||(Kl=!0,Ps.then(ls))}function $l(a){E.push(a)}const Al=new Set;let V=0;function ls(){const a=wl;do{for(;V<C.length;){const i=C[V];V++,x(i),Ls(i.$$)}for(x(null),C.length=0,V=0;Qn.length;)Qn.pop()();for(let i=0;i<E.length;i+=1){const s=E[i];Al.has(s)||(Al.add(s),s())}E.length=0}while(C.length);for(;Xn.length;)Xn.pop()();Kl=!1,Al.clear(),x(a)}function Ls(a){if(a.fragment!==null){a.update(),q(a.before_update);const i=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,i),a.after_update.forEach($l)}}const Hs=new Set;function ks(a,i){a&&a.i&&(Hs.delete(a),a.i(i))}function Ts(a,i,s,b){const{fragment:c,on_mount:g,on_destroy:v,after_update:G}=a.$$;c&&c.m(i,s),b||$l(()=>{const M=g.map(Zn).filter(Ss);v?v.push(...M):q(M),a.$$.on_mount=[]}),G.forEach($l)}function Ns(a,i){const s=a.$$;s.fragment!==null&&(q(s.on_destroy),s.fragment&&s.fragment.d(i),s.on_destroy=s.fragment=null,s.ctx=[])}function Ds(a,i){a.$$.dirty[0]===-1&&(C.push(a),Gs(),a.$$.dirty.fill(0)),a.$$.dirty[i/31|0]|=1<<i%31}function Cs(a,i,s,b,c,g,v,G=[-1]){const M=wl;x(a);const p=a.$$={fragment:null,ctx:null,props:g,update:B,not_equal:c,bound:Un(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(M?M.$$.context:[])),callbacks:Un(),dirty:G,skip_bound:!1,root:i.target||M.$$.root};v&&v(p.root);let L=!1;if(p.ctx=s?s(a,i.props||{},(R,k,...T)=>{const D=T.length?T[0]:k;return p.ctx&&c(p.ctx[R],p.ctx[R]=D)&&(!p.skip_bound&&p.bound[R]&&p.bound[R](D),L&&Ds(a,R)),k}):[],p.update(),L=!0,q(p.before_update),p.fragment=b?b(p.ctx):!1,i.target){if(i.hydrate){const R=_s(i.target);p.fragment&&p.fragment.l(R),R.forEach(ts)}else p.fragment&&p.fragment.c();i.intro&&ks(a.$$.fragment),Ts(a,i.target,i.anchor,i.customElement),ls()}x(M)}class Bs{$destroy(){Ns(this,1),this.$destroy=B}$on(i,s){const b=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return b.push(s),()=>{const c=b.indexOf(s);c!==-1&&b.splice(c,1)}}$set(i){this.$$set&&!Rs(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function xs(a){let i,s,b,c,g,v,G,M,p,L,R,k,T,D,jl,n,W,Jl,z,Y,Ol,F,Vl,I,El,U,ql,Q,Wl,X,zl,Z,Yl,Fl,Il,tt,Ul,lt,Ql,at,Xl,et,Zl,N,ta,la,nt,aa,st,ea,it,na,rt,sa,mt,ia,ot,ra,ut,ma,dt,ht,oa,ct,ua,da,ha,bt,ca,gt,ba,pt,ga,ft,pa,St,fa,Mt,Sa,vt,Ma,Rt,va,yt,Ra,ya,_a,_t,Pa,Pt,Ga,Gt,La,Ha,ka,Lt,Ta,Ht,Na,Da,Ca,Ba,kt,xa,u,Tt,Aa,Nt,Ka,Dt,$a,Ct,wa,Bt,ja,Ja,Oa,xt,Va,At,Ea,Kt,qa,$t,Wa,za,Ya,wt,Fa,jt,Jt,Ia,Ot,Ua,Vt,Qa,Xa,Za,Et,te,qt,le,ae,ee,ne,Wt,se,zt,ie,re,me,Yt,oe,Ft,ue,de,he,It,ce,d,Ut,be,Qt,ge,Xt,pe,Zt,fe,tl,Se,ll,Me,al,ve,Re,ye,el,_e,nl,Pe,sl,Ge,il,Le,rl,ml,He,ol,ke,ul,dl,Te,hl,Ne,cl,De,Ce,Be,xe,bl,Ae,r,gl,Ke,pl,$e,fl,we,Sl,je,Ml,Je,vl,Oe,Rl,yl,Ve,_l,Ee,qe,We,Pl,ze,Gl,Ye,Ll,Fe,Hl,Ie,kl,Ue,Qe,Xe,Tl,Ze,Nl,tn,ln,an,Dl,en,Cl,nn,Bl,sn,A,rn,mn,on,un,o,dn,as=a[0][33][3]+a[0][33][4]+"",hn,cn,y,bn,es=a[0][3][3]+""+a[0][3][4],gn,pn,ns=a[0][48][3]+a[0][48][4]+"",fn,Sn,ss=a[0][1][3]+"",Mn,is=a[0][1][4]+"",vn,Rn,K,yn,rs=a[0][17][3]+a[0][17][4]+"",_n,Pn,_,Gn,$,Ln,ms=(a[0][29][3],+a[0][29][4]+""),Hn,kn,os=a[0][24][3]+a[0][24][4]+"",Tn,Nn,us=a[0][14][3]+"",Dn,Cn,P,Bn,ds=(a[0][5][3],a[0][5][3]+""),xn,An,w,Kn,f,$n,hs=a[0][39][3]+a[0][39][4]+"",wn,jn,cs=a[0][20][3]+a[0][20][4]+"",Jn,On,j,Vn,J,En,bs=a[0][53][3]+a[0][53][4]+"",qn,Wn,zn,gs=a[0][4][3]+a[0][4][4]+"",Yn,Fn,In,H;return{c(){i=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-1dqagpy" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,c=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',v=m(),G=l("ul"),M=l("li"),p=e("(2) "),L=l("b"),R=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F "),k=l("small"),T=l("small"),T.textContent=`(2 ${a[0][33][3]+a[0][33][4]})`,D=l("br"),jl=m(),n=l("p"),W=l("b"),W.textContent="Wives",Jl=e(": Bhairavi "),z=l("small"),Y=l("small"),Y.textContent=`(2 ${a[0][48][3]+a[0][48][4]})`,Ol=e(`,
   `),F=l("u"),F.textContent="Bilawali",Vl=m(),I=l("small"),I.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",El=e(`,
   Punyaki `),U=l("small"),U.innerHTML="<small>(2)</small>",ql=e(`,
   `),Q=l("u"),Q.textContent="Bangli",Wl=m(),X=l("small"),X.innerHTML="<small>(L \u263F\u{1F506})</small>",zl=e(", Aslekhi "),Z=l("small"),Z.innerHTML="<small>(Puniya?)</small>",Yl=e("."),Fl=l("br"),Il=m(),tt=l("b"),tt.textContent="Sons",Ul=e(": "),lt=l("u"),lt.textContent="Pancham",Ql=m(),at=l("small"),at.innerHTML="<small>(R1)</small>",Xl=e(`,
Harakh `),et=l("small"),et.innerHTML="<small>(R2)</small>",Zl=e(`,
              `),N=l("img"),la=m(),nt=l("u"),nt.textContent="Devsakh",aa=m(),st=l("small"),st.innerHTML="<small>(2 \u{1F31C}\u{1F505})</small>",ea=e(`,
`),it=l("u"),it.textContent="Bangalam",na=m(),rt=l("small"),rt.innerHTML="<small>(L?)</small>",sa=e(`,
`),mt=l("u"),mt.textContent="Madhumadhvi",ia=m(),ot=l("small"),ot.innerHTML="<small>(3 \u263F\u{1F31C})</small>",ra=e(`,
`),ut=l("u"),ut.textContent="Lalit",ma=m(),dt=l("small"),ht=l("small"),ht.textContent=`(R4 ${a[0][12][3]}\u{1F505})`,oa=e(`,
Bilaval `),ct=l("small"),ct.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",ua=e("."),da=l("br"),ha=m(),bt=l("b"),bt.textContent="Retro",ca=e(": Gauri "),gt=l("small"),gt.innerHTML="<small>(4 \u263F\u{1F31C}7\uFE0F\u20E3)</small>",ba=e(`,
Ramkali `),pt=l("small"),pt.innerHTML="<small>(R4 \u{1F31C}\u{1F505}7\uFE0F\u20E3)</small>",ga=e(`,
`),ft=l("u"),ft.textContent="Pahadi",pa=m(),St=l("small"),St.innerHTML="<small>(R1)</small>",fa=e(`,
Malashree `),Mt=l("small"),Mt.innerHTML='<small>(R1 SP <span title="S - G - P - N - S&#39; / S&#39; - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3\uFE0F\u20E3</span>)</small>',Sa=e(`,
Hamsadvani `),vt=l("small"),vt.innerHTML="<small>(R1?-R2?)</small>",Ma=e(`,
Durga `),Rt=l("small"),Rt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",va=e(`,
Bhinna Shadja `),yt=l("small"),yt.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Ra=e(","),ya=l("br"),_a=e(`
Jogkauns `),_t=l("small"),_t.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Pa=e(`,
Hemant `),Pt=l("small"),Pt.innerHTML='<small>(R3 \u2642\u{1F505}<span title="S G m D N S&#39; - S&#39; N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S&#39; ; S&#39; R&#39; S&#39; N D ; N S&#39; D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)</small>',Ga=e(`,
Bihagaraa / Bihag `),Gt=l("small"),Gt.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",La=e("."),Ha=l("br"),ka=m(),Lt=l("b"),Lt.textContent="Combo",Ta=e(": Gauri Deepak / (Gauri Yeman)  "),Ht=l("small"),Ht.innerHTML="<small>(R2)</small>",Na=e(", Poorvi, Bairagi."),Da=m(),Ca=l("br"),Ba=m(),kt=l("ul"),kt.innerHTML="<li>(3) <b>Malkaus</b> \u{1F369} <small><small>(R3 \u2642\u{1F505})</small></small><br/></li>",xa=m(),u=l("p"),Tt=l("b"),Tt.textContent="Wives",Aa=e(": Gaundkari "),Nt=l("small"),Nt.innerHTML="<small>(2 DR)</small>",Ka=e(", Devgandhari "),Dt=l("small"),Dt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",$a=e(`,
  Gandhari `),Ct=l("small"),Ct.innerHTML="<small>(2)</small>",wa=e(", Seehute, Dhanasri "),Bt=l("small"),Bt.innerHTML="<small>(3 \u{1F505}\u{1F31C})</small>",ja=e("."),Ja=l("br"),Oa=m(),xt=l("b"),xt.textContent="Sons",Va=e(": Maru "),At=l("small"),At.innerHTML="<small>(3 \u{1F31C}\u{1FA90})</small>",Ea=e(", Marwa "),Kt=l("small"),Kt.innerHTML="<small>(R1)</small>",qa=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),$t=l("small"),$t.innerHTML="<small>(Bhamarananda?)</small>",Wa=e("."),za=l("br"),Ya=m(),wt=l("b"),wt.textContent="Retro",Fa=e(": Mali Gaura "),jt=l("small"),Jt=l("small"),Jt.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,Ia=e(", Suhi "),Ot=l("small"),Ot.innerHTML="<small>(2)</small>",Ua=e(`,
 Puriya `),Vt=l("small"),Vt.innerHTML="<small>(R2)</small>",Qa=e(`.
`),Xa=l("br"),Za=m(),Et=l("b"),Et.textContent="Combo",te=e(": Dhanasri Ambika "),qt=l("small"),qt.innerHTML="<small>(2)</small>",le=e("."),ae=m(),ee=l("br"),ne=m(),Wt=l("ul"),Wt.innerHTML="<li>(4) <b>Hindol</b> \u{1F334}<br/></li>",se=m(),zt=l("p"),zt.innerHTML=`<b>Wives</b>: Tilangi <small><small>(4 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R1? R2?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R2 \u{1F31C}\u{1F506}5\uFE0F\u20E3)</small></small>,`,ie=m(),re=l("br"),me=m(),Yt=l("ul"),Yt.innerHTML="<li>(4) <b>Deepak</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",oe=m(),Ft=l("p"),Ft.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(3 \u{1F505}\u{1F31C}<span title="S R G m P D N S&#39;/S&#39; n D P m g R S">7\uFE0F\u20E3</span>)</small></small>,
   Todi <small><small>(2 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span>  <small><small>(2 \u{1FA99}\u2642)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R3)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R2 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika / Madhuvanti <small><small>(4)</small></small>.`,ue=m(),de=l("br"),he=m(),It=l("ul"),It.innerHTML="<li>(5) <b>Sri raga \u26F5 <small><small>(4 \u263F\u{1F31C})</small></small></b><br/></li>",ce=m(),d=l("p"),Ut=l("b"),Ut.textContent="Wives",be=e(": Baradi / Varali / Bairari "),Qt=l("small"),Qt.innerHTML="<small>(3 \u2640\uFE0F\u{1FA99})</small>",ge=e(", Karnati "),Xt=l("small"),Xt.innerHTML="<small>(1 DR)</small>",pe=e(`,
  Gavri `),Zt=l("small"),Zt.innerHTML="<small>(3 SP)</small>",fe=e(", "),tl=l("u"),tl.textContent="Asavari",Se=m(),ll=l("small"),ll.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F 5\uFE0F\u20E3-7\uFE0F\u20E3)</small>",Me=e(`,
   Sindhve / Sindhura `),al=l("small"),al.innerHTML="<small>(4 SP)</small>",ve=e("."),Re=l("br"),ye=m(),el=l("b"),el.textContent="Sons",_e=e(": "),nl=l("u"),nl.textContent="Salag",Pe=m(),sl=l("small"),sl.innerHTML="<small>(3 \u{1F31C}\u{1F506})</small>",Ge=e(", "),il=l("u"),il.textContent="Sarang",Le=m(),rl=l("small"),ml=l("small"),ml.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,He=e(`,
Sagra `),ol=l("small"),ol.innerHTML="<small>(R1 GD)</small>",ke=e(`,
Gond `),ul=l("small"),dl=l("small"),dl.textContent=`(2 \u{1F505}${a[0][27][4]})`,Te=e(", Gambhir, Gund, Kumbah "),hl=l("small"),hl.innerHTML="<small>(R3 MS)</small>",Ne=e(`,
Hamir `),cl=l("small"),cl.innerHTML="<small>(R2 \u{1FA99}\u2640\uFE0F)</small>",De=e("."),Ce=m(),Be=l("br"),xe=m(),bl=l("ul"),bl.innerHTML="<li>(6) <b>Megh \u2614 <small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Ae=m(),r=l("p"),gl=l("b"),gl.textContent="Wives",Ke=e(": "),pl=l("u"),pl.textContent="Sorath",$e=m(),fl=l("small"),fl.innerHTML="<small>(R2 \u263F\u{1FA99})</small>",we=e(`,
  Gond `),Sl=l("small"),Sl.innerHTML="<small>(2)</small>",je=e(`,
  `),Ml=l("u"),Ml.textContent="Malari",Je=m(),vl=l("small"),vl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",Oe=e(`,
   Asa `),Rl=l("small"),yl=l("small"),yl.textContent=`(R4 ${a[0][10][3]}\u{1F505})`,Ve=e(", Soohou "),_l=l("small"),_l.innerHTML="<small>(Puniya? or Soob)</small>",Ee=e("."),qe=l("br"),We=m(),Pl=l("b"),Pl.textContent="Sons",ze=e(": Bayra-dhar, Gaj-dhar "),Gl=l("small"),Gl.innerHTML="<small>(2?)</small>",Ye=e(`,
Kedara `),Ll=l("small"),Ll.innerHTML="<small>(R1)</small>",Fe=e(", Jabli-dhar, Nat "),Hl=l("small"),Hl.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Ie=e(`,
Jaldhar,
Shankara `),kl=l("small"),kl.innerHTML="<small>(R3 \u2640\uFE0F\u{1FA90})</small>",Ue=e(`,
Syama.`),Qe=l("br"),Xe=m(),Tl=l("b"),Tl.textContent="Retro",Ze=e(": Vibhas "),Nl=l("small"),Nl.innerHTML="<small>(1)</small>",tn=e("."),ln=l("br"),an=m(),Dl=l("b"),Dl.textContent="Combo",en=e(": Asa Aaswari (Sri) "),Cl=l("small"),Cl.innerHTML="<small>(2?)</small>",nn=e(", Tribungi, "),Bl=l("u"),Bl.textContent="Sorath",sn=e(", "),A=l("span"),A.textContent="Gujri",rn=e(" (Deepak), Shalokh, Nat Bhariav."),mn=m(),on=l("br"),un=m(),o=l("pre"),dn=e(`
  1 \u{1F305} 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),hn=e(as),cn=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F) Gauri Bairagan \u2642\u{1FA99} (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u{1F369} \u263F\u{1F506})
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),y=l("div"),y.textContent="2",bn=e(`
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),gn=e(es),pn=e(", Puniya, Bhairavi "),fn=e(ns),Sn=e(`
																Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),Mn=e(ss),vn=e(is),Rn=e(` 5\uFE0F\u20E3-7\uFE0F\u20E3
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}\u{1F31C}\u{1F506}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																`),K=l("span"),K.textContent="Gujri?",yn=e(" (\u2764\uFE0F\u200D\u{1F525}) "),_n=e(rs),Pn=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),_=l("div"),_.textContent="3",Gn=e(`
3 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15\u0A3E/Green) Vadhans \u2642\u{1F31C}, Suha Sughrai \u{1F31C}\u{1F506}, Bhimpalasi (\u2642\u{1F506})
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525}\u{1F505}\u{1F31C}`),$=l("span"),$.textContent="7\uFE0F\u20E3",Ln=e(`)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),Hn=e(ms),kn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),Tn=e(os),Nn=e(", Sarang "),Dn=e(us),Cn=e(`\u{1F31C}

`),P=l("div"),P.textContent="4",Bn=e(`
4 3.36 PM - 6 PM aparahna  4*               1:50 4:50   V
															Gauri, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D \u2642\u{1F31C}7\uFE0F\u20E3)
															Maajh, (\u0A39\u0A3F\u0A70 \u2642\u{1F505})
															Shri? (\u26F5\u{1F49A} \u263F\u{1F31C})
															Tukhari \u2764\uFE0F\u200D\u{1F525}\u{1F31C}\u{1F506}, Ambika / Madhuvanti
															Kedara? (\u2614)
															Purvi? (\u0A2A \u2640\uFE0F\u{1FA90}), Jaitsri (\u2640\uFE0F\u{1FA90})
															'Sindhura (\u0A15\u0A3E \u{1F506}\u{1F31C})
                              											        Vachaspati (\u0A35 \u{1F506}\u{1F31C})
															3-4? 2:30-5:30


--------------------------------------------------------------------------------------------------------------------------------
Darkside \u0627\u0644\u0644\u0647


\u{1F307} R1 6 PM - 8.24 PM sayan/utarang \u263E1  (Night)            4:50 - 8     K
																Basant,(\u2614),  Kedara
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),xn=e(ds),An=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP`),w=l("span"),w.textContent="3\uFE0F\u20E3",Kn=e(`)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})

R2 8.24 PM - 10.48 PM pradosa \u263E2              8 -10:30      K
`),f=l("div"),$n=e(`
																Sorath (\u2614),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi \u0A15\u0A3E \u263F\u{1F31C}, 'Bageshree \u2640\uFE0F\u{1F506}, 'Madhukauns \u{1F31C}\u{1F506}, Jog \u263F\u{1F506}  Pancham Jogeshwari (\u263F\u{1F506})
																Chandrakauns?, (\u0A1A strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(\u{1F334})
																Kalavati \u{1F31C}\u{1F506}5\uFE0F\u20E3, 'Jaijaivanti `),wn=e(hs),jn=e(` Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?!, Durga, Bihag / Bihagara `),Jn=e(cs),On=e(`, Hamsadvani?,
																Kanra (\u2764\uFE0F\u200D\u{1F525}),  Khamaj?, Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})
															    Hameer (\u26F5\u{1FA99}\u2640\uFE0F)  (lights in dark + virras),
																Malkos (\u{1F369}) Puriya
																Saraswati (\u0A35 \u{1F31C}\u{1F6B9})
																Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})   'Gauri Manjari?,
								                                                    Kirwani (\u0A4D - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, \u0A15, \u0A36)


R3 10.48 PM - 3.36 AM ratri  \u263E3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F\u2642\u{1F505}`),j=l("span"),j.textContent="5-7",Vn=e(`)
															   'Des? \u2642\u{1F31C}, Khamoj (\u{1F334} \u{1F31C}\u2642),
																Chandrakauns? (\u0A1A \u263F\u{1F506}`),J=l("span"),J.textContent="5\uFE0F\u20E3",En=e(`)
																'Darbari Kanada? (\u26F5 \u2642\u{1F31C}),  Adana  \u263F\u{1F506}
																Deepak (\u2764\uFE0F\u200D\u{1F525} \u{1F506}\u{1F31C})
															    Malkaus(\u{1F369} \u263F\u{1F505})
																'Sahana? (\u0A15\u0A3E \u{1F31C}\u{1F506}), 'Bahar? \u2640\uFE0F\u{1F506}, Shiv Ranjani \u{1F31C}\u{1F506}
                                Malhaar \u2614 \u263F\u{1F505}



R4 3.36 AM - 6 AM nisanta 4		\u263E4			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Prabhati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F 7\uFE0F\u20E3,  'Lalit \u{1F9D8}\u200D\u2640\uFE0F,\u{1F30C}, (\u2642\u{1F505})
															Hindol (\u{1F334} `),qn=e(bs),Wn=e(`)
															Paraj (\u{1F30C} \u{1F506}\u{1F31C})
`),zn=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Yn=e(gs),Fn=e(`

`),In=m(),H=l("div"),H.innerHTML=`Legend<br/>
1 - First Pahar <em>(sunrise/sunset)</em><br/>
2 - Second/Onset Pahar<br/>
3 - Third/Middle Pahar<br/>
4 - Fourth/Offset Pahar<br/>
R - Night<br/>
L - Anytime feeling momentum or progress<br/> 
<hr style="opacity: 0.2;"/>
\u26F5 - Shri thaat <em>(feeling of movement)</em>\u{1F334} - Hindol thaat <em>(related to particular place or thing)</em><br/>
\u{1F30C} - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br/>
\u{1F48A} - Vachaspati thaat<br/>
\u{1F9D8}\u200D\u2640\uFE0F - Bhairao thaat <em>(related to countable gains and fruits of devotion)</em><br/>
\u2764\uFE0F\u200D\u{1F525} Deepak thaat <em>(related to physical sensations and touch)</em><br/>
\u{1F369} Malkauns thaat <em></em>
\u2614 Megh thaat (feeling momentum or progress and dispelling pain)<br/> 
<hr style="opacity: 0.2;"/>
\u{1F505} - Sa vadi/samvadi<br/>
\u{1F31C} - Pa vadi/samvadi<br/>
\u2642 - Re vadi/samvadi<br/>
\u263F - Ma vadi/samvadi <em>(Organization)<em></em><br/>
\u2640\uFE0F - Ga vadi/samvadi <em>(Arts/Music/Games)<em></em><br/>
\u{1FA90} - Ni vadi/samvadi<br/>
\u{1FA99} - Da vadi/samvadi <em>(Jupiter)<em></em><br/>

  \xA0\u25E6\xA0\xA0Ignore underlines and &#39;</em></em></em>`,h(b,"clear","right"),h(b,"margin-bottom",".5em"),h(b,"float","right"),h(b,"padding",".5em 0 .8em 1.4em"),h(b,"background","none"),h(b,"width","auto"),S(b,"cellspacing","0"),S(b,"cellpadding","0"),h(g,"margin-bottom","28px"),vs(N.src,ta="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||S(N,"src",ta),h(N,"vertical-align","middle"),h(N,"width","30px"),S(A,"title","Nearness of Guru"),h(y,"position","absolute"),h(y,"font-size","6em"),h(y,"margin-top","30px"),h(y,"margin-left","10px"),h(y,"color","gold"),h(y,"opacity","0.2"),S(K,"title","nearness of Guru"),h(_,"position","absolute"),h(_,"font-size","6em"),h(_,"margin-top","30px"),h(_,"margin-left","10px"),h(_,"color","gold"),h(_,"opacity","0.2"),S($,"title","S R G m P D N S'/S' n D P m g R S"),h(P,"position","absolute"),h(P,"font-size","6em"),h(P,"margin-top","30px"),h(P,"margin-left","10px"),h(P,"color","gold"),h(P,"opacity","0.2"),S(w,"title","S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)"),S(j,"title","S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)"),S(J,"title","S g m d N S' - S' N d m g m g S ,N S; (S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; ,N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;.)"),h(f,"background-image","url('blues.jpg')"),h(f,"padding-bottom","30px"),S(f,"id","Night"),h(o,"background-color","#2727da"),h(o,"padding","10px"),S(o,"id","Day"),h(H,"background-color","#3eab7e"),h(H,"padding-left","10px"),h(H,"opacity","0.8"),h(H,"padding-top","25px"),S(s,"class","svelte-1dqagpy"),S(i,"data-theme","retro"),S(i,"lang","en"),S(i,"class","svelte-1dqagpy")},m(xl,ps){ys(xl,i,ps),t(i,s),t(s,b),t(s,c),t(s,g),t(s,v),t(s,G),t(G,M),t(M,p),t(M,L),t(L,R),t(L,k),t(k,T),t(M,D),t(s,jl),t(s,n),t(n,W),t(n,Jl),t(n,z),t(z,Y),t(n,Ol),t(n,F),t(n,Vl),t(n,I),t(n,El),t(n,U),t(n,ql),t(n,Q),t(n,Wl),t(n,X),t(n,zl),t(n,Z),t(n,Yl),t(n,Fl),t(n,Il),t(n,tt),t(n,Ul),t(n,lt),t(n,Ql),t(n,at),t(n,Xl),t(n,et),t(n,Zl),t(n,N),t(n,la),t(n,nt),t(n,aa),t(n,st),t(n,ea),t(n,it),t(n,na),t(n,rt),t(n,sa),t(n,mt),t(n,ia),t(n,ot),t(n,ra),t(n,ut),t(n,ma),t(n,dt),t(dt,ht),t(n,oa),t(n,ct),t(n,ua),t(n,da),t(n,ha),t(n,bt),t(n,ca),t(n,gt),t(n,ba),t(n,pt),t(n,ga),t(n,ft),t(n,pa),t(n,St),t(n,fa),t(n,Mt),t(n,Sa),t(n,vt),t(n,Ma),t(n,Rt),t(n,va),t(n,yt),t(n,Ra),t(n,ya),t(n,_a),t(n,_t),t(n,Pa),t(n,Pt),t(n,Ga),t(n,Gt),t(n,La),t(n,Ha),t(n,ka),t(n,Lt),t(n,Ta),t(n,Ht),t(n,Na),t(s,Da),t(s,Ca),t(s,Ba),t(s,kt),t(s,xa),t(s,u),t(u,Tt),t(u,Aa),t(u,Nt),t(u,Ka),t(u,Dt),t(u,$a),t(u,Ct),t(u,wa),t(u,Bt),t(u,ja),t(u,Ja),t(u,Oa),t(u,xt),t(u,Va),t(u,At),t(u,Ea),t(u,Kt),t(u,qa),t(u,$t),t(u,Wa),t(u,za),t(u,Ya),t(u,wt),t(u,Fa),t(u,jt),t(jt,Jt),t(u,Ia),t(u,Ot),t(u,Ua),t(u,Vt),t(u,Qa),t(u,Xa),t(u,Za),t(u,Et),t(u,te),t(u,qt),t(u,le),t(s,ae),t(s,ee),t(s,ne),t(s,Wt),t(s,se),t(s,zt),t(s,ie),t(s,re),t(s,me),t(s,Yt),t(s,oe),t(s,Ft),t(s,ue),t(s,de),t(s,he),t(s,It),t(s,ce),t(s,d),t(d,Ut),t(d,be),t(d,Qt),t(d,ge),t(d,Xt),t(d,pe),t(d,Zt),t(d,fe),t(d,tl),t(d,Se),t(d,ll),t(d,Me),t(d,al),t(d,ve),t(d,Re),t(d,ye),t(d,el),t(d,_e),t(d,nl),t(d,Pe),t(d,sl),t(d,Ge),t(d,il),t(d,Le),t(d,rl),t(rl,ml),t(d,He),t(d,ol),t(d,ke),t(d,ul),t(ul,dl),t(d,Te),t(d,hl),t(d,Ne),t(d,cl),t(d,De),t(s,Ce),t(s,Be),t(s,xe),t(s,bl),t(s,Ae),t(s,r),t(r,gl),t(r,Ke),t(r,pl),t(r,$e),t(r,fl),t(r,we),t(r,Sl),t(r,je),t(r,Ml),t(r,Je),t(r,vl),t(r,Oe),t(r,Rl),t(Rl,yl),t(r,Ve),t(r,_l),t(r,Ee),t(r,qe),t(r,We),t(r,Pl),t(r,ze),t(r,Gl),t(r,Ye),t(r,Ll),t(r,Fe),t(r,Hl),t(r,Ie),t(r,kl),t(r,Ue),t(r,Qe),t(r,Xe),t(r,Tl),t(r,Ze),t(r,Nl),t(r,tn),t(r,ln),t(r,an),t(r,Dl),t(r,en),t(r,Cl),t(r,nn),t(r,Bl),t(r,sn),t(r,A),t(r,rn),t(s,mn),t(s,on),t(s,un),t(s,o),t(o,dn),t(o,hn),t(o,cn),t(o,y),t(o,bn),t(o,gn),t(o,pn),t(o,fn),t(o,Sn),t(o,Mn),t(o,vn),t(o,Rn),t(o,K),t(o,yn),t(o,_n),t(o,Pn),t(o,_),t(o,Gn),t(o,$),t(o,Ln),t(o,Hn),t(o,kn),t(o,Tn),t(o,Nn),t(o,Dn),t(o,Cn),t(o,P),t(o,Bn),t(o,xn),t(o,An),t(o,w),t(o,Kn),t(o,f),t(f,$n),t(f,wn),t(f,jn),t(f,Jn),t(f,On),t(f,j),t(f,Vn),t(f,J),t(f,En),t(f,qn),t(f,Wn),t(o,zn),t(o,Yn),t(o,Fn),t(s,In),t(s,H)},p:B,i:B,o:B,d(xl){xl&&ts(i)}}}function As(a){return[[["Sri","\u26F5","4","\u2642","\u{1F31C}"],["Asavari","\u26F5","2","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R1","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R1","\u2642","\u{1F506}"],["Sorath","\u2614","R2","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","R4","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","4","\u2642","\u{1F31C}","R1?"],["Sarang","\u26F5","3","\u2642","\u{1F31C}","2?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","3","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","3","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","4","\u2642","\u{1F506}","R1?"],["Devgandhari","\u{1F369}","3","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","R2","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R3","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","4","\u2640\uFE0F","\u{1FA90}","R1?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Bairari","\u26F5","3"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","3","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","2","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","2","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","4","\u2642","\u{1F31C}"],["Maru","\u{1F369}","3","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","4","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R1"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","1","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","R2","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Prabhati","\u0A15","R4","\u{1F505}","\u{1F31C}","1\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","R2"," \u2642"," \u{1F505}","R3?"],["Jaijaivanti","\u{1F334}","R2","\u2642","\u{1F31C}"],["Patdeep","\u0A15","3","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","R2","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R1","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","R2","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R3","\u263F","\u{1F506}"],["Charukeshi","-","3","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","R2","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R3","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","R2","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Puniya","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"],["Adana","\u26F5","R3","\u{1F506}","\u{1F31C}"],["Hindol","\u{1F334}","R4","\u{1FA99}","\u2640\uFE0F"],["","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"]]]}class Ks extends Bs{constructor(i){super(),Cs(this,i,As,xs,Ms,{})}}new Ks({target:document.body});
