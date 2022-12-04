const Jn=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))b(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const M of g.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&b(M)}).observe(document,{childList:!0,subtree:!0});function s(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerpolicy&&(g.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?g.credentials="include":d.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(d){if(d.ep)return;d.ep=!0;const g=s(d);fetch(d.href,g)}};Jn();function x(){}function Sn(a){return a()}function Hn(){return Object.create(null)}function j(a){a.forEach(Sn)}function Vn(a){return typeof a=="function"}function En(a,r){return a!=a?r==r:a!==r||a&&typeof a=="object"||typeof a=="function"}let $;function On(a,r){return $||($=document.createElement("a")),$.href=r,a===$.href}function Wn(a){return Object.keys(a).length===0}function t(a,r){a.appendChild(r)}function zn(a,r,s){a.insertBefore(r,s||null)}function In(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function L(a,r,s){s==null?a.removeAttribute(r):a.getAttribute(r)!==s&&a.setAttribute(r,s)}function Yn(a){return Array.from(a.childNodes)}function h(a,r,s,b){s===null?a.style.removeProperty(r):a.style.setProperty(r,s,b?"important":"")}let K;function G(a){K=a}function qn(){if(!K)throw new Error("Function called outside component initialization");return K}function Fn(a){qn().$$.on_mount.push(a)}const P=[],Tn=[],w=[],kn=[],Un=Promise.resolve();let Il=!1;function Qn(){Il||(Il=!0,Un.then(Cn))}function Cl(a){w.push(a)}const Sl=new Set;let D=0;function Cn(){const a=K;do{for(;D<P.length;){const r=P[D];D++,G(r),Xn(r.$$)}for(G(null),P.length=0,D=0;Tn.length;)Tn.pop()();for(let r=0;r<w.length;r+=1){const s=w[r];Sl.has(s)||(Sl.add(s),s())}w.length=0}while(P.length);for(;kn.length;)kn.pop()();Il=!1,Sl.clear(),G(a)}function Xn(a){if(a.fragment!==null){a.update(),j(a.before_update);const r=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,r),a.after_update.forEach(Cl)}}const Zn=new Set;function ts(a,r){a&&a.i&&(Zn.delete(a),a.i(r))}function ls(a,r,s,b){const{fragment:d,on_mount:g,on_destroy:M,after_update:H}=a.$$;d&&d.m(r,s),b||Cl(()=>{const f=g.map(Sn).filter(Vn);M?M.push(...f):j(f),a.$$.on_mount=[]}),H.forEach(Cl)}function as(a,r){const s=a.$$;s.fragment!==null&&(j(s.on_destroy),s.fragment&&s.fragment.d(r),s.on_destroy=s.fragment=null,s.ctx=[])}function es(a,r){a.$$.dirty[0]===-1&&(P.push(a),Qn(),a.$$.dirty.fill(0)),a.$$.dirty[r/31|0]|=1<<r%31}function ns(a,r,s,b,d,g,M,H=[-1]){const f=K;G(a);const p=a.$$={fragment:null,ctx:null,props:g,update:x,not_equal:d,bound:Hn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:Hn(),dirty:H,skip_bound:!1,root:r.target||f.$$.root};M&&M(p.root);let T=!1;if(p.ctx=s?s(a,r.props||{},(v,k,...S)=>{const C=S.length?S[0]:k;return p.ctx&&d(p.ctx[v],p.ctx[v]=C)&&(!p.skip_bound&&p.bound[v]&&p.bound[v](C),T&&es(a,v)),k}):[],p.update(),T=!0,j(p.before_update),p.fragment=b?b(p.ctx):!1,r.target){if(r.hydrate){const v=Yn(r.target);p.fragment&&p.fragment.l(v),v.forEach(In)}else p.fragment&&p.fragment.c();r.intro&&ts(a.$$.fragment),ls(a,r.target,r.anchor,r.customElement),Cn()}G(f)}class ss{$destroy(){as(this,1),this.$destroy=x}$on(r,s){const b=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return b.push(s),()=>{const d=b.indexOf(s);d!==-1&&b.splice(d,1)}}$set(r){this.$$set&&!Wn(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}function rs(a){let r,s,b,d,g,M,H,f,p,T,v,k,S,C,Bl,n,N,Pl,J,xl,V,Gl,E,Kl,O,Al,W,$l,z,Dl,Y,wl,jl,Nl,q,Jl,F,Vl,U,El,Q,Ol,I,Wl,zl,X,Yl,Z,ql,tt,Fl,lt,Ul,at,Ql,et,Xl,nt,st,Zl,rt,ta,la,aa,it,ea,mt,na,ot,sa,ut,ra,ct,ia,ht,ma,dt,oa,bt,ua,ca,ha,gt,da,pt,ba,ft,ga,pa,fa,Mt,Ma,vt,va,_a,Ra,ya,_t,La,o,Rt,Ha,yt,Ta,Lt,ka,Ht,Sa,Tt,Ia,Ca,Ba,kt,Pa,St,xa,It,Ga,Ct,Ka,Aa,$a,Bt,Da,Pt,xt,wa,Gt,ja,Kt,Na,Ja,Va,At,Ea,$t,Oa,Wa,za,Ya,Dt,qa,wt,Fa,Ua,Qa,jt,Xa,Nt,Za,te,le,Jt,ae,u,Vt,ee,Et,ne,Ot,se,Wt,re,zt,ie,Yt,me,qt,oe,ue,ce,Ft,he,Ut,de,Qt,be,Xt,ge,Zt,tl,pe,ll,fe,al,el,Me,nl,ve,sl,_e,Re,ye,Le,rl,He,i,il,Te,ml,ke,ol,Se,ul,Ie,cl,Ce,hl,Be,dl,bl,Pe,gl,xe,Ge,Ke,pl,Ae,fl,$e,Ml,De,vl,we,_l,je,Ne,Je,Rl,Ve,yl,Ee,Oe,We,Ll,ze,Hl,Ye,Tl,qe,Fe,Ue,Qe,c,Xe,Bn=a[0][33][3]+a[0][33][4]+"",Ze,tn,_,ln,Pn=a[0][3][3]+""+a[0][3][4],an,en,xn=a[0][1][3]+"",nn,Gn=a[0][1][4]+"",sn,rn,Kn=(a[0][17][3],a[0][17][4]+""),mn,on,R,un,An=(a[0][29][3],+a[0][29][4]+""),cn,hn,$n=a[0][24][3]+a[0][24][4]+"",dn,bn,Dn=a[0][14][3]+"",gn,pn,y,fn,wn=(a[0][5][3],a[0][5][3]+""),Mn,vn,B,_n,jn=a[0][4][3]+a[0][4][4]+"",Rn,yn,Ln,A;return{c(){r=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-t6r88k" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,d=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',M=m(),H=l("ul"),f=l("li"),p=e("(1) "),T=l("b"),v=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F"),k=l("small"),S=l("small"),S.textContent=`(1 ${a[0][33][3]+a[0][33][4]})`,C=l("br"),Bl=m(),n=l("p"),N=l("b"),N.textContent="Wives",Pl=e(": Bhairavi "),J=l("small"),J.innerHTML="<small>(1)</small>",xl=e(`,
   `),V=l("u"),V.textContent="Bilawali",Gl=m(),E=l("small"),E.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",Kl=e(`,
   Punyaki `),O=l("small"),O.innerHTML="<small>(1)</small>",Al=e(`,
   `),W=l("u"),W.textContent="Bangli",$l=m(),z=l("small"),z.innerHTML="<small>(L \u263F\u{1F506})</small>",Dl=e(", Aslekhi "),Y=l("small"),Y.innerHTML="<small>(Puniya?)</small>",wl=e("."),jl=l("br"),Nl=m(),q=l("b"),q.textContent="Sons",Jl=e(": "),F=l("u"),F.textContent="Pancham",Vl=m(),U=l("small"),U.innerHTML="<small>(R0)</small>",El=e(`,
Harakh `),Q=l("small"),Q.innerHTML="<small>(R1)</small>",Ol=e(`,
              `),I=l("img"),zl=m(),X=l("u"),X.textContent="Devsakh",Yl=m(),Z=l("small"),Z.innerHTML="<small>(1 \u{1F31C}\u{1F505})</small>",ql=e(`,
`),tt=l("u"),tt.textContent="Bangalam",Fl=m(),lt=l("small"),lt.innerHTML="<small>(L?)</small>",Ul=e(`,
Maadhmadhava `),at=l("small"),at.innerHTML="<small>(2 \u263F\u{1F31C})</small>",Ql=e(`,
`),et=l("u"),et.textContent="Lalit",Xl=m(),nt=l("small"),st=l("small"),st.textContent=`(R3 ${a[0][12][3]}\u{1F505})`,Zl=e(`,
Bilaval `),rt=l("small"),rt.innerHTML="<small>(1)</small>",ta=e("."),la=l("br"),aa=m(),it=l("b"),it.textContent="Retro",ea=e(": Gauri "),mt=l("small"),mt.innerHTML="<small>(3 \u263F\u{1F31C})</small>",na=e(`,
Ramkali `),ot=l("small"),ot.innerHTML="<small>(3 \u{1F31C}\u{1F505})</small>",sa=e(`,
Pahadi `),ut=l("small"),ut.innerHTML="<small>(R0)</small>",ra=e(`,
Malashree `),ct=l("small"),ct.innerHTML="<small>(R0 SP)</small>",ia=e(`,
Hamsadvani `),ht=l("small"),ht.innerHTML="<small>(R0?-R1?)</small>",ma=e(`,
Durga `),dt=l("small"),dt.innerHTML="<small>(R1 \u2642\u{1F505})</small>",oa=e(`,
Bhinna Shadja `),bt=l("small"),bt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ua=e(","),ca=l("br"),ha=e(`
Jogkauns `),gt=l("small"),gt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",da=e(`,
Hemant `),pt=l("small"),pt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ba=e(`,
Bihagaraa / Bihag `),ft=l("small"),ft.innerHTML="<small>(R1 \u2640\uFE0F\u{1FA90})</small>",ga=e("."),pa=l("br"),fa=m(),Mt=l("b"),Mt.textContent="Combo",Ma=e(": Gauri Deepak / (Gauri Yeman)  "),vt=l("small"),vt.innerHTML="<small>(R1)</small>",va=e(", Poorvi, Bairagi."),_a=m(),Ra=l("br"),ya=m(),_t=l("ul"),_t.innerHTML="<li>(2) <b>Malkaus raga</b> \u{1F369}<small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",La=m(),o=l("p"),Rt=l("b"),Rt.textContent="Wives",Ha=e(": Gaundkari "),yt=l("small"),yt.innerHTML="<small>(1 DR)</small>",Ta=e(", Devgandhari "),Lt=l("small"),Lt.innerHTML="<small>(1)</small>",ka=e(`,
  Gandhari `),Ht=l("small"),Ht.innerHTML="<small>(1)</small>",Sa=e(", Seehute, Dhanasri "),Tt=l("small"),Tt.innerHTML="<small>(2 \u{1F505}\u{1F31C})</small>",Ia=e("."),Ca=l("br"),Ba=m(),kt=l("b"),kt.textContent="Sons",Pa=e(": Maru "),St=l("small"),St.innerHTML="<small>(2 \u{1F31C}\u{1FA90})</small>",xa=e(", Marwa "),It=l("small"),It.innerHTML="<small>(R0)</small>",Ga=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Ct=l("small"),Ct.innerHTML="<small>(Bhamarananda?)</small>",Ka=e("."),Aa=l("br"),$a=m(),Bt=l("b"),Bt.textContent="Retro",Da=e(": Mali Gaura "),Pt=l("small"),xt=l("small"),xt.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,wa=e(", Suhi "),Gt=l("small"),Gt.innerHTML="<small>(1)</small>",ja=e(`,
 Puriya `),Kt=l("small"),Kt.innerHTML="<small>(R1)</small>",Na=e(`.
`),Ja=l("br"),Va=m(),At=l("b"),At.textContent="Combo",Ea=e(": Dhanasri Ambika "),$t=l("small"),$t.innerHTML="<small>(1)</small>",Oa=e("."),Wa=m(),za=l("br"),Ya=m(),Dt=l("ul"),Dt.innerHTML="<li>(3) <b>Hindol raga</b> \u{1F334}<br/></li>",qa=m(),wt=l("p"),wt.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Fa=m(),Ua=l("br"),Qa=m(),jt=l("ul"),jt.innerHTML="<li>(4) <b>Deepak raga</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",Xa=m(),Nt=l("p"),Nt.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   Gujri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,Za=m(),te=l("br"),le=m(),Jt=l("ul"),Jt.innerHTML="<li>(5) <b>Sri raga \u26F5\u{1F49A}<small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",ae=m(),u=l("p"),Vt=l("b"),Vt.textContent="Wives",ee=e(": Baradi / Varali / Bairari "),Et=l("small"),Et.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",ne=e(", Karnati "),Ot=l("small"),Ot.innerHTML="<small>(0 DR)</small>",se=e(`,
  Gavri `),Wt=l("small"),Wt.innerHTML="<small>(2 SP)</small>",re=e(", "),zt=l("u"),zt.textContent="Asavari",ie=m(),Yt=l("small"),Yt.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",me=e(`,
   Sindhve / Sindhura `),qt=l("small"),qt.innerHTML="<small>(3 SP)</small>",oe=e("."),ue=l("br"),ce=m(),Ft=l("b"),Ft.textContent="Sons",he=e(": "),Ut=l("u"),Ut.textContent="Salag",de=m(),Qt=l("small"),Qt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",be=e(", "),Xt=l("u"),Xt.textContent="Sarang",ge=m(),Zt=l("small"),tl=l("small"),tl.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,pe=e(`,
Sagra `),ll=l("small"),ll.innerHTML="<small>(R0 GD)</small>",fe=e(`,
Gond `),al=l("small"),el=l("small"),el.textContent=`(1 \u{1F505}${a[0][27][4]})`,Me=e(", Gambhir, Gund, Kumbah "),nl=l("small"),nl.innerHTML="<small>(R2 MS)</small>",ve=e(`,
Hamir `),sl=l("small"),sl.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",_e=e("."),Re=m(),ye=l("br"),Le=m(),rl=l("ul"),rl.innerHTML="<li>(6) <b>Megh \u2614<small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",He=m(),i=l("p"),il=l("b"),il.textContent="Wives",Te=e(": "),ml=l("u"),ml.textContent="Sorath",ke=m(),ol=l("small"),ol.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",Se=e(`,
  Gond `),ul=l("small"),ul.innerHTML="<small>(1)</small>",Ie=e(`,
  `),cl=l("u"),cl.textContent="Malari",Ce=m(),hl=l("small"),hl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",Be=e(`,
   Asa `),dl=l("small"),bl=l("small"),bl.textContent=`(R3 ${a[0][10][3]}\u{1F505})`,Pe=e(", Soohou "),gl=l("small"),gl.innerHTML="<small>(Puniya? or Soob)</small>",xe=e("."),Ge=l("br"),Ke=m(),pl=l("b"),pl.textContent="Sons",Ae=e(": Bayra-dhar, Gaj-dhar "),fl=l("small"),fl.innerHTML="<small>(1?)</small>",$e=e(`,
Kedara `),Ml=l("small"),Ml.innerHTML="<small>(C0)</small>",De=e(", Jabli-dhar, Nat "),vl=l("small"),vl.innerHTML="<small>(R2 \u2642\u{1F505})</small>",we=e(`,
Jaldhar,
Shankara `),_l=l("small"),_l.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",je=e(`,
Syama.`),Ne=l("br"),Je=m(),Rl=l("b"),Rl.textContent="Retro",Ve=e(": Vibhas "),yl=l("small"),yl.innerHTML="<small>(0)</small>",Ee=e("."),Oe=l("br"),We=m(),Ll=l("b"),Ll.textContent="Combo",ze=e(": Asa Aaswari (Sri) "),Hl=l("small"),Hl.innerHTML="<small>(1?)</small>",Ye=e(", Tribungi, "),Tl=l("u"),Tl.textContent="Sorath",qe=e(", Gujri (Deepak), Shalokh, Nat Bhariav."),Fe=m(),Ue=l("br"),Qe=m(),c=l("pre"),Xe=e(`
  0 \u{1F305} 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),Ze=e(Bn),tn=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F)
																	Gauri Bharagon? (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u0A2E\u0A3E)
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),_=l("div"),_.textContent="I",ln=e(`
1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),an=e(Pn),en=e(`, Puniya,
																Gauri Bharagon (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)? Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),nn=e(xn),sn=e(Gn),rn=e(`
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																Gujri? (\u2764\uFE0F\u200D\u{1F525}) `),mn=e(Kn),on=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),R=l("div"),R.textContent="2",un=e(`
2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15/Green) Vadhans (RP), Suha Sughrai (PS), Bhimpalasi (\u2642S)
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),cn=e(An),hn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),dn=e($n),bn=e(", Sarang "),gn=e(Dn),pn=e(`\u{1F31C}

`),y=l("div"),y.textContent="\u2162",fn=e(`
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
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),Mn=e(wn),vn=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40)

R1 8.24 PM - 10.48 PM pradosa \u263E1              8 -10:30      K
`),B=l("div"),B.textContent=`
																Sorath (\u2614),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi \u263F\u{1F31C}, 'Bageshree, 'Madhukauns, Jog (\u0A15)  Pancham Jogeshwari (MS)
																Chandrakauns?, (\u0A1A strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(\u{1F334})
																Kalavati \u{1F31C}\u{1F506}, 'Jaijaivanti ${a[0][39][3]+a[0][39][4]} Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?! (\u0A2D\u0A47,\u0A2A\u0A42,\u0A26\u0A40) , Durga, Bihag / Bihagara ${a[0][20][3]+a[0][20][4]}, Hamsadvani?,
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
`,_n=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Rn=e(jn),yn=e(`

`),Ln=m(),A=l("div"),A.innerHTML=`Legend<br/>
  \u2614 Megh<br/>
  \xA0\u25E6\xA0\xA0Ignore underlines and \`&#39;s`,h(b,"clear","right"),h(b,"margin-bottom",".5em"),h(b,"float","right"),h(b,"padding",".5em 0 .8em 1.4em"),h(b,"background","none"),h(b,"width","auto"),L(b,"cellspacing","0"),L(b,"cellpadding","0"),h(g,"margin-bottom","28px"),On(I.src,Wl="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||L(I,"src",Wl),h(I,"vertical-align","middle"),h(I,"width","30px"),h(_,"position","absolute"),h(_,"font-size","6em"),h(_,"margin-top","30px"),h(_,"margin-left","10px"),h(_,"color","gold"),h(_,"opacity","0.2"),h(R,"position","absolute"),h(R,"font-size","6em"),h(R,"margin-top","30px"),h(R,"margin-left","10px"),h(R,"color","gold"),h(R,"opacity","0.2"),h(y,"position","absolute"),h(y,"font-size","6em"),h(y,"margin-top","30px"),h(y,"margin-left","10px"),h(y,"color","gold"),h(y,"opacity","0.2"),h(B,"background-image","url('blues.jpg')"),L(B,"id","Night"),h(c,"background-color","#2727da"),h(c,"padding","10px"),L(c,"id","Day"),h(A,"background-color","#3eab7e"),L(s,"class","svelte-t6r88k"),L(r,"data-theme","retro"),L(r,"lang","en")},m(kl,Nn){zn(kl,r,Nn),t(r,s),t(s,b),t(s,d),t(s,g),t(s,M),t(s,H),t(H,f),t(f,p),t(f,T),t(T,v),t(T,k),t(k,S),t(f,C),t(s,Bl),t(s,n),t(n,N),t(n,Pl),t(n,J),t(n,xl),t(n,V),t(n,Gl),t(n,E),t(n,Kl),t(n,O),t(n,Al),t(n,W),t(n,$l),t(n,z),t(n,Dl),t(n,Y),t(n,wl),t(n,jl),t(n,Nl),t(n,q),t(n,Jl),t(n,F),t(n,Vl),t(n,U),t(n,El),t(n,Q),t(n,Ol),t(n,I),t(n,zl),t(n,X),t(n,Yl),t(n,Z),t(n,ql),t(n,tt),t(n,Fl),t(n,lt),t(n,Ul),t(n,at),t(n,Ql),t(n,et),t(n,Xl),t(n,nt),t(nt,st),t(n,Zl),t(n,rt),t(n,ta),t(n,la),t(n,aa),t(n,it),t(n,ea),t(n,mt),t(n,na),t(n,ot),t(n,sa),t(n,ut),t(n,ra),t(n,ct),t(n,ia),t(n,ht),t(n,ma),t(n,dt),t(n,oa),t(n,bt),t(n,ua),t(n,ca),t(n,ha),t(n,gt),t(n,da),t(n,pt),t(n,ba),t(n,ft),t(n,ga),t(n,pa),t(n,fa),t(n,Mt),t(n,Ma),t(n,vt),t(n,va),t(s,_a),t(s,Ra),t(s,ya),t(s,_t),t(s,La),t(s,o),t(o,Rt),t(o,Ha),t(o,yt),t(o,Ta),t(o,Lt),t(o,ka),t(o,Ht),t(o,Sa),t(o,Tt),t(o,Ia),t(o,Ca),t(o,Ba),t(o,kt),t(o,Pa),t(o,St),t(o,xa),t(o,It),t(o,Ga),t(o,Ct),t(o,Ka),t(o,Aa),t(o,$a),t(o,Bt),t(o,Da),t(o,Pt),t(Pt,xt),t(o,wa),t(o,Gt),t(o,ja),t(o,Kt),t(o,Na),t(o,Ja),t(o,Va),t(o,At),t(o,Ea),t(o,$t),t(o,Oa),t(s,Wa),t(s,za),t(s,Ya),t(s,Dt),t(s,qa),t(s,wt),t(s,Fa),t(s,Ua),t(s,Qa),t(s,jt),t(s,Xa),t(s,Nt),t(s,Za),t(s,te),t(s,le),t(s,Jt),t(s,ae),t(s,u),t(u,Vt),t(u,ee),t(u,Et),t(u,ne),t(u,Ot),t(u,se),t(u,Wt),t(u,re),t(u,zt),t(u,ie),t(u,Yt),t(u,me),t(u,qt),t(u,oe),t(u,ue),t(u,ce),t(u,Ft),t(u,he),t(u,Ut),t(u,de),t(u,Qt),t(u,be),t(u,Xt),t(u,ge),t(u,Zt),t(Zt,tl),t(u,pe),t(u,ll),t(u,fe),t(u,al),t(al,el),t(u,Me),t(u,nl),t(u,ve),t(u,sl),t(u,_e),t(s,Re),t(s,ye),t(s,Le),t(s,rl),t(s,He),t(s,i),t(i,il),t(i,Te),t(i,ml),t(i,ke),t(i,ol),t(i,Se),t(i,ul),t(i,Ie),t(i,cl),t(i,Ce),t(i,hl),t(i,Be),t(i,dl),t(dl,bl),t(i,Pe),t(i,gl),t(i,xe),t(i,Ge),t(i,Ke),t(i,pl),t(i,Ae),t(i,fl),t(i,$e),t(i,Ml),t(i,De),t(i,vl),t(i,we),t(i,_l),t(i,je),t(i,Ne),t(i,Je),t(i,Rl),t(i,Ve),t(i,yl),t(i,Ee),t(i,Oe),t(i,We),t(i,Ll),t(i,ze),t(i,Hl),t(i,Ye),t(i,Tl),t(i,qe),t(s,Fe),t(s,Ue),t(s,Qe),t(s,c),t(c,Xe),t(c,Ze),t(c,tn),t(c,_),t(c,ln),t(c,an),t(c,en),t(c,nn),t(c,sn),t(c,rn),t(c,mn),t(c,on),t(c,R),t(c,un),t(c,cn),t(c,hn),t(c,dn),t(c,bn),t(c,gn),t(c,pn),t(c,y),t(c,fn),t(c,Mn),t(c,vn),t(c,B),t(c,_n),t(c,Rn),t(c,yn),t(s,Ln),t(s,A)},p:x,i:x,o:x,d(kl){kl&&In(r)}}}function is(a){return Fn(()=>{console.log("yepppi")}),[[["Sri","\u26F5","III","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","RIII","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","III","\u2642","\u{1F31C}","R0?"],["Sarang","\u26F5","2","\u2642","\u{1F31C}","I?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","2","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","2","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","III","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","III","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","RIII","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","III","\u2642","\u{1F31C}"],["Maru","\u{1F369}","2","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","III","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R0"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","0","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","RI","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Prabhati","\u0A15","RIII","\u{1F505}","\u{1F31C}","0\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","RI"," \u2642"," \u{1F505}","R2?"],["Jaijaivanti","\u{1F334}","RI","\u2642","\u{1F31C}"],["Patdeep","\u0A15","II","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","RI","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R0","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","RI","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R2","\u263F","\u{1F506}"],["Charukeshi","-","2","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","RI","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R2","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","RI","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}","peaceful sleep"]]]}class ms extends ss{constructor(r){super(),ns(this,r,is,rs,En,{})}}new ms({target:document.body});
