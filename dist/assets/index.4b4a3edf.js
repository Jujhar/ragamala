const Fn=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const M of g.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&b(M)}).observe(document,{childList:!0,subtree:!0});function s(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerpolicy&&(g.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?g.credentials="include":c.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(c){if(c.ep)return;c.ep=!0;const g=s(c);fetch(c.href,g)}};Fn();function A(){}function Kn(a){return a()}function Gn(){return Object.create(null)}function N(a){a.forEach(Kn)}function Un(a){return typeof a=="function"}function Qn(a,i){return a!=a?i==i:a!==i||a&&typeof a=="object"||typeof a=="function"}let I;function Xn(a,i){return I||(I=document.createElement("a")),I.href=i,a===I.href}function Zn(a){return Object.keys(a).length===0}function t(a,i){a.appendChild(i)}function ts(a,i,s){a.insertBefore(i,s||null)}function Dn(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function y(a,i,s){s==null?a.removeAttribute(i):a.getAttribute(i)!==s&&a.setAttribute(i,s)}function ls(a){return Array.from(a.childNodes)}function h(a,i,s,b){s===null?a.style.removeProperty(i):a.style.setProperty(i,s,b?"important":"")}let xl;function K(a){xl=a}const x=[],xn=[],j=[],An=[],as=Promise.resolve();let Bl=!1;function es(){Bl||(Bl=!0,as.then($n))}function Gl(a){j.push(a)}const Pl=new Set;let w=0;function $n(){const a=xl;do{for(;w<x.length;){const i=x[w];w++,K(i),ns(i.$$)}for(K(null),x.length=0,w=0;xn.length;)xn.pop()();for(let i=0;i<j.length;i+=1){const s=j[i];Pl.has(s)||(Pl.add(s),s())}j.length=0}while(x.length);for(;An.length;)An.pop()();Bl=!1,Pl.clear(),K(a)}function ns(a){if(a.fragment!==null){a.update(),N(a.before_update);const i=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,i),a.after_update.forEach(Gl)}}const ss=new Set;function is(a,i){a&&a.i&&(ss.delete(a),a.i(i))}function rs(a,i,s,b){const{fragment:c,on_mount:g,on_destroy:M,after_update:H}=a.$$;c&&c.m(i,s),b||Gl(()=>{const f=g.map(Kn).filter(Un);M?M.push(...f):N(f),a.$$.on_mount=[]}),H.forEach(Gl)}function ms(a,i){const s=a.$$;s.fragment!==null&&(N(s.on_destroy),s.fragment&&s.fragment.d(i),s.on_destroy=s.fragment=null,s.ctx=[])}function os(a,i){a.$$.dirty[0]===-1&&(x.push(a),es(),a.$$.dirty.fill(0)),a.$$.dirty[i/31|0]|=1<<i%31}function us(a,i,s,b,c,g,M,H=[-1]){const f=xl;K(a);const p=a.$$={fragment:null,ctx:null,props:g,update:A,not_equal:c,bound:Gn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:Gn(),dirty:H,skip_bound:!1,root:i.target||f.$$.root};M&&M(p.root);let T=!1;if(p.ctx=s?s(a,i.props||{},(v,k,...S)=>{const B=S.length?S[0]:k;return p.ctx&&c(p.ctx[v],p.ctx[v]=B)&&(!p.skip_bound&&p.bound[v]&&p.bound[v](B),T&&os(a,v)),k}):[],p.update(),T=!0,N(p.before_update),p.fragment=b?b(p.ctx):!1,i.target){if(i.hydrate){const v=ls(i.target);p.fragment&&p.fragment.l(v),v.forEach(Dn)}else p.fragment&&p.fragment.c();i.intro&&is(a.$$.fragment),rs(a,i.target,i.anchor,i.customElement),$n()}K(f)}class ds{$destroy(){ms(this,1),this.$destroy=A}$on(i,s){const b=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return b.push(s),()=>{const c=b.indexOf(s);c!==-1&&b.splice(c,1)}}$set(i){this.$$set&&!Zn(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function hs(a){let i,s,b,c,g,M,H,f,p,T,v,k,S,B,Al,n,J,Kl,O,V,Dl,E,$l,q,Il,W,wl,z,jl,Y,Nl,F,Jl,Ol,Vl,U,El,Q,ql,X,Wl,Z,zl,C,Yl,Fl,tt,Ul,lt,Ql,at,Xl,et,Zl,nt,ta,st,la,it,rt,aa,mt,ea,na,sa,ot,ia,ut,ra,dt,ma,ht,oa,ct,ua,bt,da,gt,ha,pt,ca,ba,ga,ft,pa,Mt,fa,vt,Ma,va,ya,yt,Ra,Rt,_a,La,Ha,Ta,_t,ka,o,Lt,Sa,Ht,Ca,Tt,Pa,kt,Ba,St,Ga,xa,Aa,Ct,Ka,Pt,Da,Bt,$a,Gt,Ia,wa,ja,xt,Na,At,Kt,Ja,Dt,Oa,$t,Va,Ea,qa,It,Wa,wt,za,Ya,Fa,Ua,jt,Qa,Nt,Xa,Za,te,Jt,le,Ot,ae,ee,ne,Vt,se,d,Et,ie,qt,re,Wt,me,zt,oe,Yt,ue,Ft,de,Ut,he,ce,be,Qt,ge,Xt,pe,Zt,fe,tl,Me,ll,al,ve,el,ye,nl,sl,Re,il,_e,rl,Le,He,Te,ke,ml,Se,r,ol,Ce,ul,Pe,dl,Be,hl,Ge,cl,xe,bl,Ae,gl,pl,Ke,fl,De,$e,Ie,Ml,we,vl,je,yl,Ne,Rl,Je,_l,Oe,Ve,Ee,Ll,qe,Hl,We,ze,Ye,Tl,Fe,kl,Ue,Sl,Qe,D,Xe,Ze,tn,ln,u,an,In=a[0][33][3]+a[0][33][4]+"",en,nn,R,sn,wn=a[0][3][3]+""+a[0][3][4],rn,mn,jn=a[0][48][3]+a[0][48][4]+"",on,un,Nn=a[0][1][3]+"",dn,Jn=a[0][1][4]+"",hn,cn,$,bn,On=(a[0][17][3],a[0][17][4]+""),gn,pn,_,fn,Vn=(a[0][29][3],+a[0][29][4]+""),Mn,vn,En=a[0][24][3]+a[0][24][4]+"",yn,Rn,qn=a[0][14][3]+"",_n,Ln,L,Hn,Wn=(a[0][5][3],a[0][5][3]+""),Tn,kn,G,Sn,zn=a[0][4][3]+a[0][4][4]+"",Cn,Pn,Bn,P;return{c(){i=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-1dqagpy" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,c=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',M=m(),H=l("ul"),f=l("li"),p=e("(1) "),T=l("b"),v=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F "),k=l("small"),S=l("small"),S.textContent=`(1 ${a[0][33][3]+a[0][33][4]})`,B=l("br"),Al=m(),n=l("p"),J=l("b"),J.textContent="Wives",Kl=e(": Bhairavi "),O=l("small"),V=l("small"),V.textContent=`(1 ${a[0][48][3]+a[0][48][4]})`,Dl=e(`,
   `),E=l("u"),E.textContent="Bilawali",$l=m(),q=l("small"),q.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",Il=e(`,
   Punyaki `),W=l("small"),W.innerHTML="<small>(1)</small>",wl=e(`,
   `),z=l("u"),z.textContent="Bangli",jl=m(),Y=l("small"),Y.innerHTML="<small>(L \u263F\u{1F506})</small>",Nl=e(", Aslekhi "),F=l("small"),F.innerHTML="<small>(Puniya?)</small>",Jl=e("."),Ol=l("br"),Vl=m(),U=l("b"),U.textContent="Sons",El=e(": "),Q=l("u"),Q.textContent="Pancham",ql=m(),X=l("small"),X.innerHTML="<small>(R0)</small>",Wl=e(`,
Harakh `),Z=l("small"),Z.innerHTML="<small>(R1)</small>",zl=e(`,
              `),C=l("img"),Fl=m(),tt=l("u"),tt.textContent="Devsakh",Ul=m(),lt=l("small"),lt.innerHTML="<small>(1 \u{1F31C}\u{1F505})</small>",Ql=e(`,
`),at=l("u"),at.textContent="Bangalam",Xl=m(),et=l("small"),et.innerHTML="<small>(L?)</small>",Zl=e(`,
Maadhmadhava `),nt=l("small"),nt.innerHTML="<small>(2 \u263F\u{1F31C})</small>",ta=e(`,
`),st=l("u"),st.textContent="Lalit",la=m(),it=l("small"),rt=l("small"),rt.textContent=`(R3 ${a[0][12][3]}\u{1F505})`,aa=e(`,
Bilaval `),mt=l("small"),mt.innerHTML="<small>(1)</small>",ea=e("."),na=l("br"),sa=m(),ot=l("b"),ot.textContent="Retro",ia=e(": Gauri "),ut=l("small"),ut.innerHTML="<small>(3 \u263F\u{1F31C})</small>",ra=e(`,
Ramkali `),dt=l("small"),dt.innerHTML="<small>(3 \u{1F31C}\u{1F505})</small>",ma=e(`,
Pahadi `),ht=l("small"),ht.innerHTML="<small>(R0)</small>",oa=e(`,
Malashree `),ct=l("small"),ct.innerHTML="<small>(R0 SP)</small>",ua=e(`,
Hamsadvani `),bt=l("small"),bt.innerHTML="<small>(R0?-R1?)</small>",da=e(`,
Durga `),gt=l("small"),gt.innerHTML="<small>(R1 \u2642\u{1F505})</small>",ha=e(`,
Bhinna Shadja `),pt=l("small"),pt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ca=e(","),ba=l("br"),ga=e(`
Jogkauns `),ft=l("small"),ft.innerHTML="<small>(R2 \u2642\u{1F505})</small>",pa=e(`,
Hemant `),Mt=l("small"),Mt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",fa=e(`,
Bihagaraa / Bihag `),vt=l("small"),vt.innerHTML="<small>(R1 \u2640\uFE0F\u{1FA90})</small>",Ma=e("."),va=l("br"),ya=m(),yt=l("b"),yt.textContent="Combo",Ra=e(": Gauri Deepak / (Gauri Yeman)  "),Rt=l("small"),Rt.innerHTML="<small>(R1)</small>",_a=e(", Poorvi, Bairagi."),La=m(),Ha=l("br"),Ta=m(),_t=l("ul"),_t.innerHTML="<li>(2) <b>Malkaus</b> \u{1F369} <small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",ka=m(),o=l("p"),Lt=l("b"),Lt.textContent="Wives",Sa=e(": Gaundkari "),Ht=l("small"),Ht.innerHTML="<small>(1 DR)</small>",Ca=e(", Devgandhari "),Tt=l("small"),Tt.innerHTML="<small>(1)</small>",Pa=e(`,
  Gandhari `),kt=l("small"),kt.innerHTML="<small>(1)</small>",Ba=e(", Seehute, Dhanasri "),St=l("small"),St.innerHTML="<small>(2 \u{1F505}\u{1F31C})</small>",Ga=e("."),xa=l("br"),Aa=m(),Ct=l("b"),Ct.textContent="Sons",Ka=e(": Maru "),Pt=l("small"),Pt.innerHTML="<small>(2 \u{1F31C}\u{1FA90})</small>",Da=e(", Marwa "),Bt=l("small"),Bt.innerHTML="<small>(R0)</small>",$a=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Gt=l("small"),Gt.innerHTML="<small>(Bhamarananda?)</small>",Ia=e("."),wa=l("br"),ja=m(),xt=l("b"),xt.textContent="Retro",Na=e(": Mali Gaura "),At=l("small"),Kt=l("small"),Kt.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,Ja=e(", Suhi "),Dt=l("small"),Dt.innerHTML="<small>(1)</small>",Oa=e(`,
 Puriya `),$t=l("small"),$t.innerHTML="<small>(R1)</small>",Va=e(`.
`),Ea=l("br"),qa=m(),It=l("b"),It.textContent="Combo",Wa=e(": Dhanasri Ambika "),wt=l("small"),wt.innerHTML="<small>(1)</small>",za=e("."),Ya=m(),Fa=l("br"),Ua=m(),jt=l("ul"),jt.innerHTML="<li>(3) <b>Hindol</b> \u{1F334}<br/></li>",Qa=m(),Nt=l("p"),Nt.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Xa=m(),Za=l("br"),te=m(),Jt=l("ul"),Jt.innerHTML="<li>(4) <b>Deepak</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",le=m(),Ot=l("p"),Ot.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   <span title="Nearness of Guru">Gujri</span>  <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,ae=m(),ee=l("br"),ne=m(),Vt=l("ul"),Vt.innerHTML="<li>(5) <b>Sri raga \u26F5 <small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",se=m(),d=l("p"),Et=l("b"),Et.textContent="Wives",ie=e(": Baradi / Varali / Bairari "),qt=l("small"),qt.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",re=e(", Karnati "),Wt=l("small"),Wt.innerHTML="<small>(0 DR)</small>",me=e(`,
  Gavri `),zt=l("small"),zt.innerHTML="<small>(2 SP)</small>",oe=e(", "),Yt=l("u"),Yt.textContent="Asavari",ue=m(),Ft=l("small"),Ft.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",de=e(`,
   Sindhve / Sindhura `),Ut=l("small"),Ut.innerHTML="<small>(3 SP)</small>",he=e("."),ce=l("br"),be=m(),Qt=l("b"),Qt.textContent="Sons",ge=e(": "),Xt=l("u"),Xt.textContent="Salag",pe=m(),Zt=l("small"),Zt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",fe=e(", "),tl=l("u"),tl.textContent="Sarang",Me=m(),ll=l("small"),al=l("small"),al.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,ve=e(`,
Sagra `),el=l("small"),el.innerHTML="<small>(R0 GD)</small>",ye=e(`,
Gond `),nl=l("small"),sl=l("small"),sl.textContent=`(1 \u{1F505}${a[0][27][4]})`,Re=e(", Gambhir, Gund, Kumbah "),il=l("small"),il.innerHTML="<small>(R2 MS)</small>",_e=e(`,
Hamir `),rl=l("small"),rl.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",Le=e("."),He=m(),Te=l("br"),ke=m(),ml=l("ul"),ml.innerHTML="<li>(6) <b>Megh \u2614 <small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Se=m(),r=l("p"),ol=l("b"),ol.textContent="Wives",Ce=e(": "),ul=l("u"),ul.textContent="Sorath",Pe=m(),dl=l("small"),dl.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",Be=e(`,
  Gond `),hl=l("small"),hl.innerHTML="<small>(1)</small>",Ge=e(`,
  `),cl=l("u"),cl.textContent="Malari",xe=m(),bl=l("small"),bl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",Ae=e(`,
   Asa `),gl=l("small"),pl=l("small"),pl.textContent=`(R3 ${a[0][10][3]}\u{1F505})`,Ke=e(", Soohou "),fl=l("small"),fl.innerHTML="<small>(Puniya? or Soob)</small>",De=e("."),$e=l("br"),Ie=m(),Ml=l("b"),Ml.textContent="Sons",we=e(": Bayra-dhar, Gaj-dhar "),vl=l("small"),vl.innerHTML="<small>(1?)</small>",je=e(`,
Kedara `),yl=l("small"),yl.innerHTML="<small>(C0)</small>",Ne=e(", Jabli-dhar, Nat "),Rl=l("small"),Rl.innerHTML="<small>(R2 \u2642\u{1F505})</small>",Je=e(`,
Jaldhar,
Shankara `),_l=l("small"),_l.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",Oe=e(`,
Syama.`),Ve=l("br"),Ee=m(),Ll=l("b"),Ll.textContent="Retro",qe=e(": Vibhas "),Hl=l("small"),Hl.innerHTML="<small>(0)</small>",We=e("."),ze=l("br"),Ye=m(),Tl=l("b"),Tl.textContent="Combo",Fe=e(": Asa Aaswari (Sri) "),kl=l("small"),kl.innerHTML="<small>(1?)</small>",Ue=e(", Tribungi, "),Sl=l("u"),Sl.textContent="Sorath",Qe=e(", "),D=l("span"),D.textContent="Gujri",Xe=e(" (Deepak), Shalokh, Nat Bhariav."),Ze=m(),tn=l("br"),ln=m(),u=l("pre"),an=e(`
  0 \u{1F305} 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),en=e(In),nn=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F) Gauri Bairagan \u2642\u{1FA99} (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u{1F369} \u263F\u{1F506})
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),R=l("div"),R.textContent="I",sn=e(`
1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),rn=e(wn),mn=e(", Puniya, Bhairavi "),on=e(jn),un=e(`
																Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),dn=e(Nn),hn=e(Jn),cn=e(`
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																`),$=l("span"),$.textContent="Gujri?",bn=e(" (\u2764\uFE0F\u200D\u{1F525}) "),gn=e(On),pn=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),_=l("div"),_.textContent="2",fn=e(`
2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15\u0A3E/Green) Vadhans \u2642\u{1F31C}, Suha Sughrai \u{1F31C}\u{1F506}, Bhimpalasi (\u2642\u{1F506})
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),Mn=e(Vn),vn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),yn=e(En),Rn=e(", Sarang "),_n=e(qn),Ln=e(`\u{1F31C}

`),L=l("div"),L.textContent="\u2162",Hn=e(`
3 3.36 PM - 6 PM aparahna  3*               1:50 4:50   V
															Gauri, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D \u2642\u{1F31C})
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


\u{1F307} R0 6 PM - 8.24 PM sayan/utarang \u263E0  (Night)            4:50 - 8     K
																Basant,(\u2614),  Kedara
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),Tn=e(Wn),kn=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})

R1 8.24 PM - 10.48 PM pradosa \u263E1              8 -10:30      K
`),G=l("div"),G.textContent=`
																Sorath (\u2614),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi \u0A15\u0A3E \u263F\u{1F31C}, 'Bageshree \u2640\uFE0F\u{1F506}, 'Madhukauns \u{1F31C}\u{1F506}, Jog \u263F\u{1F506}  Pancham Jogeshwari (\u263F\u{1F506})
																Chandrakauns?, (\u0A1A strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(\u{1F334})
																Kalavati \u{1F31C}\u{1F506}, 'Jaijaivanti ${a[0][39][3]+a[0][39][4]} Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?!, Durga, Bihag / Bihagara ${a[0][20][3]+a[0][20][4]}, Hamsadvani?,
																Kanra (\u2764\uFE0F\u200D\u{1F525}),  Khamaj?, Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})
															    Hameer (\u26F5\u{1FA99}\u2640\uFE0F)  (lights in dark + virras),
																Malkos (\u{1F369}) Puriya
																Saraswati (\u0A35 \u{1F31C}\u{1F6B9})
																Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})   'Gauri Manjari?,
								                                                    Kirwani (\u0A4D - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, \u0A15, \u0A36)


R2 10.48 PM - 3.36 AM ratri  \u263E2          8     10:30 2      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F)
															   'Des? \u2642\u{1F31C}, Khamoj (\u{1F334}),
																Chandrakauns? (\u0A1A \u263F\u{1F506})
																'Darbari Kanada? (\u26F5 \u2642\u{1F31C}),  Adana  \u263F\u{1F506}
																Deepak (\u2764\uFE0F\u200D\u{1F525} \u{1F506}\u{1F31C})
															    Malkaus(\u{1F369} \u263F\u{1F505})
																'Sahana? (\u0A15\u0A3E \u{1F31C}\u{1F506}), 'Bahar? \u2640\uFE0F\u{1F506}, Shiv Ranjani \u{1F31C}\u{1F506}
                                Malhaar \u2614 \u263F\u{1F505}



R3 3.36 AM - 6 AM nisanta 3		\u263E3			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Prabhati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F,  'Lalit \u{1F9D8}\u200D\u2640\uFE0F,\u{1F30C}, (\u2642\u{1F505})
															Hindol (\u{1F334} ${a[0][53][3]+a[0][53][4]})
															Paraj (\u{1F30C} \u{1F506}\u{1F31C})
`,Sn=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Cn=e(zn),Pn=e(`

`),Bn=m(),P=l("div"),P.innerHTML=`Legend<br/>
0 - First Pahar <em>(sunset/sunrise)</em><br/>
I - Second/Onset Pahar<br/>
2 - Third/Middle Pahar<br/>
III - Fourth/Offset Pahar<br/>
R - Night<br/>
L - Anytime feeling momentum or progress<br/> 
<hr style="opacity: 0.2;"/>
\u26F5 - Shri thaat <em>(feeling of movement)</em>\u{1F334} - Hindol thaat <em>(related to particular place or thing)</em><br/>
\u{1F30C} - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br/>
\u{1F48A} - Vachaspati thaat<br/>
\u{1F9D8}\u200D\u2640\uFE0F - Bhairao thaat <em>(related to gains and fruits of devotion)</em><br/>
\u2764\uFE0F\u200D\u{1F525} Deepak thaat <em>(related to physical sensations and touch)</em><br/>
\u{1F369} Malkauns thaat <em>(emotions and feelings related to thing??)</em>
\u2614 Megh thaat<br/> 
<hr style="opacity: 0.2;"/>
\u{1F505} - Sa vadi/samvadi<br/>
\u{1F31C} - Pa vadi/samvadi<br/>
\u2642 - Re vadi/samvadi<br/>
\u263F - Ma vadi/samvadi <em>(Organization)<em></em><br/>
\u2640\uFE0F - Ga vadi/samvadi <em>(Arts/Music/Games)<em></em><br/>
\u{1FA90} - Ni vadi/samvadi<br/>
\u{1FA99} - Da vadi/samvadi <em>(Jupiter)<em></em><br/>

  \xA0\u25E6\xA0\xA0Ignore underlines and &#39;</em></em></em>`,h(b,"clear","right"),h(b,"margin-bottom",".5em"),h(b,"float","right"),h(b,"padding",".5em 0 .8em 1.4em"),h(b,"background","none"),h(b,"width","auto"),y(b,"cellspacing","0"),y(b,"cellpadding","0"),h(g,"margin-bottom","28px"),Xn(C.src,Yl="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||y(C,"src",Yl),h(C,"vertical-align","middle"),h(C,"width","30px"),y(D,"title","Nearness of Guru"),h(R,"position","absolute"),h(R,"font-size","6em"),h(R,"margin-top","30px"),h(R,"margin-left","10px"),h(R,"color","gold"),h(R,"opacity","0.2"),y($,"title","nearness of Guru"),h(_,"position","absolute"),h(_,"font-size","6em"),h(_,"margin-top","30px"),h(_,"margin-left","10px"),h(_,"color","gold"),h(_,"opacity","0.2"),h(L,"position","absolute"),h(L,"font-size","6em"),h(L,"margin-top","30px"),h(L,"margin-left","10px"),h(L,"color","gold"),h(L,"opacity","0.2"),h(G,"background-image","url('blues.jpg')"),y(G,"id","Night"),h(u,"background-color","#2727da"),h(u,"padding","10px"),y(u,"id","Day"),h(P,"background-color","#3eab7e"),h(P,"padding-left","10px"),h(P,"opacity","0.8"),y(s,"class","svelte-1dqagpy"),y(i,"data-theme","retro"),y(i,"lang","en"),y(i,"class","svelte-1dqagpy")},m(Cl,Yn){ts(Cl,i,Yn),t(i,s),t(s,b),t(s,c),t(s,g),t(s,M),t(s,H),t(H,f),t(f,p),t(f,T),t(T,v),t(T,k),t(k,S),t(f,B),t(s,Al),t(s,n),t(n,J),t(n,Kl),t(n,O),t(O,V),t(n,Dl),t(n,E),t(n,$l),t(n,q),t(n,Il),t(n,W),t(n,wl),t(n,z),t(n,jl),t(n,Y),t(n,Nl),t(n,F),t(n,Jl),t(n,Ol),t(n,Vl),t(n,U),t(n,El),t(n,Q),t(n,ql),t(n,X),t(n,Wl),t(n,Z),t(n,zl),t(n,C),t(n,Fl),t(n,tt),t(n,Ul),t(n,lt),t(n,Ql),t(n,at),t(n,Xl),t(n,et),t(n,Zl),t(n,nt),t(n,ta),t(n,st),t(n,la),t(n,it),t(it,rt),t(n,aa),t(n,mt),t(n,ea),t(n,na),t(n,sa),t(n,ot),t(n,ia),t(n,ut),t(n,ra),t(n,dt),t(n,ma),t(n,ht),t(n,oa),t(n,ct),t(n,ua),t(n,bt),t(n,da),t(n,gt),t(n,ha),t(n,pt),t(n,ca),t(n,ba),t(n,ga),t(n,ft),t(n,pa),t(n,Mt),t(n,fa),t(n,vt),t(n,Ma),t(n,va),t(n,ya),t(n,yt),t(n,Ra),t(n,Rt),t(n,_a),t(s,La),t(s,Ha),t(s,Ta),t(s,_t),t(s,ka),t(s,o),t(o,Lt),t(o,Sa),t(o,Ht),t(o,Ca),t(o,Tt),t(o,Pa),t(o,kt),t(o,Ba),t(o,St),t(o,Ga),t(o,xa),t(o,Aa),t(o,Ct),t(o,Ka),t(o,Pt),t(o,Da),t(o,Bt),t(o,$a),t(o,Gt),t(o,Ia),t(o,wa),t(o,ja),t(o,xt),t(o,Na),t(o,At),t(At,Kt),t(o,Ja),t(o,Dt),t(o,Oa),t(o,$t),t(o,Va),t(o,Ea),t(o,qa),t(o,It),t(o,Wa),t(o,wt),t(o,za),t(s,Ya),t(s,Fa),t(s,Ua),t(s,jt),t(s,Qa),t(s,Nt),t(s,Xa),t(s,Za),t(s,te),t(s,Jt),t(s,le),t(s,Ot),t(s,ae),t(s,ee),t(s,ne),t(s,Vt),t(s,se),t(s,d),t(d,Et),t(d,ie),t(d,qt),t(d,re),t(d,Wt),t(d,me),t(d,zt),t(d,oe),t(d,Yt),t(d,ue),t(d,Ft),t(d,de),t(d,Ut),t(d,he),t(d,ce),t(d,be),t(d,Qt),t(d,ge),t(d,Xt),t(d,pe),t(d,Zt),t(d,fe),t(d,tl),t(d,Me),t(d,ll),t(ll,al),t(d,ve),t(d,el),t(d,ye),t(d,nl),t(nl,sl),t(d,Re),t(d,il),t(d,_e),t(d,rl),t(d,Le),t(s,He),t(s,Te),t(s,ke),t(s,ml),t(s,Se),t(s,r),t(r,ol),t(r,Ce),t(r,ul),t(r,Pe),t(r,dl),t(r,Be),t(r,hl),t(r,Ge),t(r,cl),t(r,xe),t(r,bl),t(r,Ae),t(r,gl),t(gl,pl),t(r,Ke),t(r,fl),t(r,De),t(r,$e),t(r,Ie),t(r,Ml),t(r,we),t(r,vl),t(r,je),t(r,yl),t(r,Ne),t(r,Rl),t(r,Je),t(r,_l),t(r,Oe),t(r,Ve),t(r,Ee),t(r,Ll),t(r,qe),t(r,Hl),t(r,We),t(r,ze),t(r,Ye),t(r,Tl),t(r,Fe),t(r,kl),t(r,Ue),t(r,Sl),t(r,Qe),t(r,D),t(r,Xe),t(s,Ze),t(s,tn),t(s,ln),t(s,u),t(u,an),t(u,en),t(u,nn),t(u,R),t(u,sn),t(u,rn),t(u,mn),t(u,on),t(u,un),t(u,dn),t(u,hn),t(u,cn),t(u,$),t(u,bn),t(u,gn),t(u,pn),t(u,_),t(u,fn),t(u,Mn),t(u,vn),t(u,yn),t(u,Rn),t(u,_n),t(u,Ln),t(u,L),t(u,Hn),t(u,Tn),t(u,kn),t(u,G),t(u,Sn),t(u,Cn),t(u,Pn),t(s,Bn),t(s,P)},p:A,i:A,o:A,d(Cl){Cl&&Dn(i)}}}function cs(a){return[[["Sri","\u26F5","\u2162","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","R\u2162","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","R\u2162","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","\u2162","\u2642","\u{1F31C}","R0?"],["Sarang","\u26F5","2","\u2642","\u{1F31C}","I?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","2","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","2","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","\u2162","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","\u2162","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","R\u2162","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","\u2162","\u2642","\u{1F31C}"],["Maru","\u{1F369}","2","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","\u2162","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R0"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","0","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","RI","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Prabhati","\u0A15","R\u2162","\u{1F505}","\u{1F31C}","0\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","RI"," \u2642"," \u{1F505}","R2?"],["Jaijaivanti","\u{1F334}","RI","\u2642","\u{1F31C}"],["Patdeep","\u0A15","II","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","RI","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R0","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","RI","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R2","\u263F","\u{1F506}"],["Charukeshi","-","2","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","RI","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R2","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","RI","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Puniya","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}"],["Adana","\u26F5","R2","\u{1F506}","\u{1F31C}"],["Hindol","\u{1F334}","R\u2162","\u{1FA99}","\u2640\uFE0F"],["","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}"]]]}class bs extends ds{constructor(i){super(),us(this,i,cs,hs,Qn,{})}}new bs({target:document.body});
