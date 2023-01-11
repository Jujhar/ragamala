const Qn=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const M of g.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&b(M)}).observe(document,{childList:!0,subtree:!0});function s(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerpolicy&&(g.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?g.credentials="include":c.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(c){if(c.ep)return;c.ep=!0;const g=s(c);fetch(c.href,g)}};Qn();function A(){}function $n(a){return a()}function An(){return Object.create(null)}function J(a){a.forEach($n)}function Xn(a){return typeof a=="function"}function Zn(a,i){return a!=a?i==i:a!==i||a&&typeof a=="object"||typeof a=="function"}let w;function ts(a,i){return w||(w=document.createElement("a")),w.href=i,a===w.href}function ls(a){return Object.keys(a).length===0}function t(a,i){a.appendChild(i)}function as(a,i,s){a.insertBefore(i,s||null)}function wn(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function y(a,i,s){s==null?a.removeAttribute(i):a.getAttribute(i)!==s&&a.setAttribute(i,s)}function es(a){return Array.from(a.childNodes)}function h(a,i,s,b){s===null?a.style.removeProperty(i):a.style.setProperty(i,s,b?"important":"")}let Al;function K(a){Al=a}const G=[],Kn=[],N=[],Dn=[],ns=Promise.resolve();let xl=!1;function ss(){xl||(xl=!0,ns.then(jn))}function Gl(a){N.push(a)}const Bl=new Set;let j=0;function jn(){const a=Al;do{for(;j<G.length;){const i=G[j];j++,K(i),is(i.$$)}for(K(null),G.length=0,j=0;Kn.length;)Kn.pop()();for(let i=0;i<N.length;i+=1){const s=N[i];Bl.has(s)||(Bl.add(s),s())}N.length=0}while(G.length);for(;Dn.length;)Dn.pop()();xl=!1,Bl.clear(),K(a)}function is(a){if(a.fragment!==null){a.update(),J(a.before_update);const i=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,i),a.after_update.forEach(Gl)}}const rs=new Set;function ms(a,i){a&&a.i&&(rs.delete(a),a.i(i))}function os(a,i,s,b){const{fragment:c,on_mount:g,on_destroy:M,after_update:H}=a.$$;c&&c.m(i,s),b||Gl(()=>{const f=g.map($n).filter(Xn);M?M.push(...f):J(f),a.$$.on_mount=[]}),H.forEach(Gl)}function us(a,i){const s=a.$$;s.fragment!==null&&(J(s.on_destroy),s.fragment&&s.fragment.d(i),s.on_destroy=s.fragment=null,s.ctx=[])}function ds(a,i){a.$$.dirty[0]===-1&&(G.push(a),ss(),a.$$.dirty.fill(0)),a.$$.dirty[i/31|0]|=1<<i%31}function hs(a,i,s,b,c,g,M,H=[-1]){const f=Al;K(a);const p=a.$$={fragment:null,ctx:null,props:g,update:A,not_equal:c,bound:An(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:An(),dirty:H,skip_bound:!1,root:i.target||f.$$.root};M&&M(p.root);let T=!1;if(p.ctx=s?s(a,i.props||{},(v,S,...C)=>{const x=C.length?C[0]:S;return p.ctx&&c(p.ctx[v],p.ctx[v]=x)&&(!p.skip_bound&&p.bound[v]&&p.bound[v](x),T&&ds(a,v)),S}):[],p.update(),T=!0,J(p.before_update),p.fragment=b?b(p.ctx):!1,i.target){if(i.hydrate){const v=es(i.target);p.fragment&&p.fragment.l(v),v.forEach(wn)}else p.fragment&&p.fragment.c();i.intro&&ms(a.$$.fragment),os(a,i.target,i.anchor,i.customElement),jn()}K(f)}class cs{$destroy(){us(this,1),this.$destroy=A}$on(i,s){const b=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return b.push(s),()=>{const c=b.indexOf(s);c!==-1&&b.splice(c,1)}}$set(i){this.$$set&&!ls(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function bs(a){let i,s,b,c,g,M,H,f,p,T,v,S,C,x,Kl,n,O,Dl,V,E,$l,q,wl,W,jl,z,Nl,Y,Jl,F,Ol,I,Vl,El,ql,U,Wl,Q,zl,X,Yl,Z,Fl,P,Il,Ul,tt,Ql,lt,Xl,at,Zl,et,ta,nt,la,st,aa,it,ea,rt,mt,na,ot,sa,ia,ra,ut,ma,dt,oa,ht,ua,ct,da,bt,ha,gt,ca,pt,ba,ft,ga,pa,fa,Mt,Ma,vt,va,yt,ya,Ra,_a,Rt,La,_t,Ha,Ta,ka,Sa,Lt,Ca,o,Ht,Pa,Tt,Ba,kt,xa,St,Ga,Ct,Aa,Ka,Da,Pt,$a,Bt,wa,xt,ja,Gt,Na,Ja,Oa,At,Va,Kt,Dt,Ea,$t,qa,wt,Wa,za,Ya,jt,Fa,Nt,Ia,Ua,Qa,Xa,Jt,Za,Ot,te,le,ae,Vt,ee,Et,ne,se,ie,qt,re,d,Wt,me,zt,oe,Yt,ue,Ft,de,It,he,Ut,ce,Qt,be,ge,pe,Xt,fe,Zt,Me,tl,ve,ll,ye,al,el,Re,nl,_e,sl,il,Le,rl,He,ml,Te,ke,Se,Ce,ol,Pe,r,ul,Be,dl,xe,hl,Ge,cl,Ae,bl,Ke,gl,De,pl,fl,$e,Ml,we,je,Ne,vl,Je,yl,Oe,Rl,Ve,_l,Ee,Ll,qe,We,ze,Hl,Ye,Tl,Fe,Ie,Ue,kl,Qe,Sl,Xe,Cl,Ze,D,tn,ln,an,en,u,nn,Nn=a[0][33][3]+a[0][33][4]+"",sn,rn,R,mn,Jn=a[0][3][3]+""+a[0][3][4],on,un,On=a[0][48][3]+a[0][48][4]+"",dn,hn,Vn=a[0][1][3]+"",cn,En=a[0][1][4]+"",bn,gn,$,pn,qn=a[0][17][3]+a[0][17][4]+"",fn,Mn,_,vn,Wn=(a[0][29][3],+a[0][29][4]+""),yn,Rn,zn=a[0][24][3]+a[0][24][4]+"",_n,Ln,Yn=a[0][14][3]+"",Hn,Tn,L,kn,Fn=(a[0][5][3],a[0][5][3]+""),Sn,Cn,B,Pn,In=a[0][4][3]+a[0][4][4]+"",Bn,xn,Gn,k;return{c(){i=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-1dqagpy" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,c=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',M=m(),H=l("ul"),f=l("li"),p=e("(2) "),T=l("b"),v=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F "),S=l("small"),C=l("small"),C.textContent=`(2 ${a[0][33][3]+a[0][33][4]})`,x=l("br"),Kl=m(),n=l("p"),O=l("b"),O.textContent="Wives",Dl=e(": Bhairavi "),V=l("small"),E=l("small"),E.textContent=`(2 ${a[0][48][3]+a[0][48][4]})`,$l=e(`,
   `),q=l("u"),q.textContent="Bilawali",wl=m(),W=l("small"),W.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",jl=e(`,
   Punyaki `),z=l("small"),z.innerHTML="<small>(2)</small>",Nl=e(`,
   `),Y=l("u"),Y.textContent="Bangli",Jl=m(),F=l("small"),F.innerHTML="<small>(L \u263F\u{1F506})</small>",Ol=e(", Aslekhi "),I=l("small"),I.innerHTML="<small>(Puniya?)</small>",Vl=e("."),El=l("br"),ql=m(),U=l("b"),U.textContent="Sons",Wl=e(": "),Q=l("u"),Q.textContent="Pancham",zl=m(),X=l("small"),X.innerHTML="<small>(R1)</small>",Yl=e(`,
Harakh `),Z=l("small"),Z.innerHTML="<small>(R2)</small>",Fl=e(`,
              `),P=l("img"),Ul=m(),tt=l("u"),tt.textContent="Devsakh",Ql=m(),lt=l("small"),lt.innerHTML="<small>(2 \u{1F31C}\u{1F505})</small>",Xl=e(`,
`),at=l("u"),at.textContent="Bangalam",Zl=m(),et=l("small"),et.innerHTML="<small>(L?)</small>",ta=e(`,
`),nt=l("u"),nt.textContent="Madhumadhvi",la=m(),st=l("small"),st.innerHTML="<small>(3 \u263F\u{1F31C})</small>",aa=e(`,
`),it=l("u"),it.textContent="Lalit",ea=m(),rt=l("small"),mt=l("small"),mt.textContent=`(R4 ${a[0][12][3]}\u{1F505})`,na=e(`,
Bilaval `),ot=l("small"),ot.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",sa=e("."),ia=l("br"),ra=m(),ut=l("b"),ut.textContent="Retro",ma=e(": Gauri "),dt=l("small"),dt.innerHTML="<small>(4 \u263F\u{1F31C})</small>",oa=e(`,
Ramkali `),ht=l("small"),ht.innerHTML="<small>(R4 \u{1F31C}\u{1F505})</small>",ua=e(`,
Pahadi `),ct=l("small"),ct.innerHTML="<small>(R1)</small>",da=e(`,
Malashree `),bt=l("small"),bt.innerHTML="<small>(R1 SP 3\uFE0F\u20E3)</small>",ha=e(`,
Hamsadvani `),gt=l("small"),gt.innerHTML="<small>(R1?-R2?)</small>",ca=e(`,
Durga `),pt=l("small"),pt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ba=e(`,
Bhinna Shadja `),ft=l("small"),ft.innerHTML="<small>(R3 \u2642\u{1F505})</small>",ga=e(","),pa=l("br"),fa=e(`
Jogkauns `),Mt=l("small"),Mt.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Ma=e(`,
Hemant `),vt=l("small"),vt.innerHTML="<small>(R3 \u2642\u{1F505})</small>",va=e(`,
Bihagaraa / Bihag `),yt=l("small"),yt.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",ya=e("."),Ra=l("br"),_a=m(),Rt=l("b"),Rt.textContent="Combo",La=e(": Gauri Deepak / (Gauri Yeman)  "),_t=l("small"),_t.innerHTML="<small>(R2)</small>",Ha=e(", Poorvi, Bairagi."),Ta=m(),ka=l("br"),Sa=m(),Lt=l("ul"),Lt.innerHTML="<li>(3) <b>Malkaus</b> \u{1F369} <small><small>(R3 \u2642\u{1F505})</small></small><br/></li>",Ca=m(),o=l("p"),Ht=l("b"),Ht.textContent="Wives",Pa=e(": Gaundkari "),Tt=l("small"),Tt.innerHTML="<small>(2 DR)</small>",Ba=e(", Devgandhari "),kt=l("small"),kt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",xa=e(`,
  Gandhari `),St=l("small"),St.innerHTML="<small>(2)</small>",Ga=e(", Seehute, Dhanasri "),Ct=l("small"),Ct.innerHTML="<small>(3 \u{1F505}\u{1F31C})</small>",Aa=e("."),Ka=l("br"),Da=m(),Pt=l("b"),Pt.textContent="Sons",$a=e(": Maru "),Bt=l("small"),Bt.innerHTML="<small>(3 \u{1F31C}\u{1FA90})</small>",wa=e(", Marwa "),xt=l("small"),xt.innerHTML="<small>(R1)</small>",ja=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Gt=l("small"),Gt.innerHTML="<small>(Bhamarananda?)</small>",Na=e("."),Ja=l("br"),Oa=m(),At=l("b"),At.textContent="Retro",Va=e(": Mali Gaura "),Kt=l("small"),Dt=l("small"),Dt.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,Ea=e(", Suhi "),$t=l("small"),$t.innerHTML="<small>(2)</small>",qa=e(`,
 Puriya `),wt=l("small"),wt.innerHTML="<small>(R2)</small>",Wa=e(`.
`),za=l("br"),Ya=m(),jt=l("b"),jt.textContent="Combo",Fa=e(": Dhanasri Ambika "),Nt=l("small"),Nt.innerHTML="<small>(2)</small>",Ia=e("."),Ua=m(),Qa=l("br"),Xa=m(),Jt=l("ul"),Jt.innerHTML="<li>(4) <b>Hindol</b> \u{1F334}<br/></li>",Za=m(),Ot=l("p"),Ot.innerHTML=`<b>Wives</b>: Tilangi <small><small>(4 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R1? R2?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R2 \u{1F31C}\u{1F506})</small></small>,`,te=m(),le=l("br"),ae=m(),Vt=l("ul"),Vt.innerHTML="<li>(4) <b>Deepak</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",ee=m(),Et=l("p"),Et.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(3 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(2 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span>  <small><small>(2 \u{1FA99}\u2642)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R3)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R2 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika / Madhuvanti <small><small>(4)</small></small>.`,ne=m(),se=l("br"),ie=m(),qt=l("ul"),qt.innerHTML="<li>(5) <b>Sri raga \u26F5 <small><small>(4 \u263F\u{1F31C})</small></small></b><br/></li>",re=m(),d=l("p"),Wt=l("b"),Wt.textContent="Wives",me=e(": Baradi / Varali / Bairari "),zt=l("small"),zt.innerHTML="<small>(3 \u2640\uFE0F\u{1FA99})</small>",oe=e(", Karnati "),Yt=l("small"),Yt.innerHTML="<small>(1 DR)</small>",ue=e(`,
  Gavri `),Ft=l("small"),Ft.innerHTML="<small>(3 SP)</small>",de=e(", "),It=l("u"),It.textContent="Asavari",he=m(),Ut=l("small"),Ut.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F 5\uFE0F\u20E3-7\uFE0F\u20E3)</small>",ce=e(`,
   Sindhve / Sindhura `),Qt=l("small"),Qt.innerHTML="<small>(4 SP)</small>",be=e("."),ge=l("br"),pe=m(),Xt=l("b"),Xt.textContent="Sons",fe=e(": "),Zt=l("u"),Zt.textContent="Salag",Me=m(),tl=l("small"),tl.innerHTML="<small>(3 \u{1F31C}\u{1F506})</small>",ve=e(", "),ll=l("u"),ll.textContent="Sarang",ye=m(),al=l("small"),el=l("small"),el.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,Re=e(`,
Sagra `),nl=l("small"),nl.innerHTML="<small>(R1 GD)</small>",_e=e(`,
Gond `),sl=l("small"),il=l("small"),il.textContent=`(2 \u{1F505}${a[0][27][4]})`,Le=e(", Gambhir, Gund, Kumbah "),rl=l("small"),rl.innerHTML="<small>(R3 MS)</small>",He=e(`,
Hamir `),ml=l("small"),ml.innerHTML="<small>(R2 \u{1FA99}\u2640\uFE0F)</small>",Te=e("."),ke=m(),Se=l("br"),Ce=m(),ol=l("ul"),ol.innerHTML="<li>(6) <b>Megh \u2614 <small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Pe=m(),r=l("p"),ul=l("b"),ul.textContent="Wives",Be=e(": "),dl=l("u"),dl.textContent="Sorath",xe=m(),hl=l("small"),hl.innerHTML="<small>(R2 \u263F\u{1FA99})</small>",Ge=e(`,
  Gond `),cl=l("small"),cl.innerHTML="<small>(2)</small>",Ae=e(`,
  `),bl=l("u"),bl.textContent="Malari",Ke=m(),gl=l("small"),gl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",De=e(`,
   Asa `),pl=l("small"),fl=l("small"),fl.textContent=`(R4 ${a[0][10][3]}\u{1F505})`,$e=e(", Soohou "),Ml=l("small"),Ml.innerHTML="<small>(Puniya? or Soob)</small>",we=e("."),je=l("br"),Ne=m(),vl=l("b"),vl.textContent="Sons",Je=e(": Bayra-dhar, Gaj-dhar "),yl=l("small"),yl.innerHTML="<small>(2?)</small>",Oe=e(`,
Kedara `),Rl=l("small"),Rl.innerHTML="<small>(R1)</small>",Ve=e(", Jabli-dhar, Nat "),_l=l("small"),_l.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Ee=e(`,
Jaldhar,
Shankara `),Ll=l("small"),Ll.innerHTML="<small>(R3 \u2640\uFE0F\u{1FA90})</small>",qe=e(`,
Syama.`),We=l("br"),ze=m(),Hl=l("b"),Hl.textContent="Retro",Ye=e(": Vibhas "),Tl=l("small"),Tl.innerHTML="<small>(1)</small>",Fe=e("."),Ie=l("br"),Ue=m(),kl=l("b"),kl.textContent="Combo",Qe=e(": Asa Aaswari (Sri) "),Sl=l("small"),Sl.innerHTML="<small>(2?)</small>",Xe=e(", Tribungi, "),Cl=l("u"),Cl.textContent="Sorath",Ze=e(", "),D=l("span"),D.textContent="Gujri",tn=e(" (Deepak), Shalokh, Nat Bhariav."),ln=m(),an=l("br"),en=m(),u=l("pre"),nn=e(`
  1 \u{1F305} 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),sn=e(Nn),rn=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F) Gauri Bairagan \u2642\u{1FA99} (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u{1F369} \u263F\u{1F506})
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),R=l("div"),R.textContent="2",mn=e(`
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),on=e(Jn),un=e(", Puniya, Bhairavi "),dn=e(On),hn=e(`
																Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),cn=e(Vn),bn=e(En),gn=e(` 5\uFE0F\u20E3-7\uFE0F\u20E3
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}\u{1F31C}\u{1F506}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																`),$=l("span"),$.textContent="Gujri?",pn=e(" (\u2764\uFE0F\u200D\u{1F525}) "),fn=e(qn),Mn=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),_=l("div"),_.textContent="3",vn=e(`
3 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15\u0A3E/Green) Vadhans \u2642\u{1F31C}, Suha Sughrai \u{1F31C}\u{1F506}, Bhimpalasi (\u2642\u{1F506})
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),yn=e(Wn),Rn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),_n=e(zn),Ln=e(", Sarang "),Hn=e(Yn),Tn=e(`\u{1F31C}

`),L=l("div"),L.textContent="4",kn=e(`
4 3.36 PM - 6 PM aparahna  4*               1:50 4:50   V
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


\u{1F307} R1 6 PM - 8.24 PM sayan/utarang \u263E1  (Night)            4:50 - 8     K
																Basant,(\u2614),  Kedara
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),Sn=e(Fn),Cn=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP 3\uFE0F\u20E3)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})

R2 8.24 PM - 10.48 PM pradosa \u263E2              8 -10:30      K
`),B=l("div"),B.textContent=`
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


R3 10.48 PM - 3.36 AM ratri  \u263E3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F)
															   'Des? \u2642\u{1F31C}, Khamoj (\u{1F334} \u{1F31C}\u2642),
																Chandrakauns? (\u0A1A \u263F\u{1F506})
																'Darbari Kanada? (\u26F5 \u2642\u{1F31C}),  Adana  \u263F\u{1F506}
																Deepak (\u2764\uFE0F\u200D\u{1F525} \u{1F506}\u{1F31C})
															    Malkaus(\u{1F369} \u263F\u{1F505})
																'Sahana? (\u0A15\u0A3E \u{1F31C}\u{1F506}), 'Bahar? \u2640\uFE0F\u{1F506}, Shiv Ranjani \u{1F31C}\u{1F506}
                                Malhaar \u2614 \u263F\u{1F505}



R4 3.36 AM - 6 AM nisanta 4		\u263E4			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Prabhati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F,  'Lalit \u{1F9D8}\u200D\u2640\uFE0F,\u{1F30C}, (\u2642\u{1F505})
															Hindol (\u{1F334} ${a[0][53][3]+a[0][53][4]})
															Paraj (\u{1F30C} \u{1F506}\u{1F31C})
`,Pn=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Bn=e(In),xn=e(`

`),Gn=m(),k=l("div"),k.innerHTML=`Legend<br/>
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

  \xA0\u25E6\xA0\xA0Ignore underlines and &#39;</em></em></em>`,h(b,"clear","right"),h(b,"margin-bottom",".5em"),h(b,"float","right"),h(b,"padding",".5em 0 .8em 1.4em"),h(b,"background","none"),h(b,"width","auto"),y(b,"cellspacing","0"),y(b,"cellpadding","0"),h(g,"margin-bottom","28px"),ts(P.src,Il="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||y(P,"src",Il),h(P,"vertical-align","middle"),h(P,"width","30px"),y(D,"title","Nearness of Guru"),h(R,"position","absolute"),h(R,"font-size","6em"),h(R,"margin-top","30px"),h(R,"margin-left","10px"),h(R,"color","gold"),h(R,"opacity","0.2"),y($,"title","nearness of Guru"),h(_,"position","absolute"),h(_,"font-size","6em"),h(_,"margin-top","30px"),h(_,"margin-left","10px"),h(_,"color","gold"),h(_,"opacity","0.2"),h(L,"position","absolute"),h(L,"font-size","6em"),h(L,"margin-top","30px"),h(L,"margin-left","10px"),h(L,"color","gold"),h(L,"opacity","0.2"),h(B,"background-image","url('blues.jpg')"),h(B,"padding-bottom","30px"),y(B,"id","Night"),h(u,"background-color","#2727da"),h(u,"padding","10px"),y(u,"id","Day"),h(k,"background-color","#3eab7e"),h(k,"padding-left","10px"),h(k,"opacity","0.8"),h(k,"padding-top","25px"),y(s,"class","svelte-1dqagpy"),y(i,"data-theme","retro"),y(i,"lang","en"),y(i,"class","svelte-1dqagpy")},m(Pl,Un){as(Pl,i,Un),t(i,s),t(s,b),t(s,c),t(s,g),t(s,M),t(s,H),t(H,f),t(f,p),t(f,T),t(T,v),t(T,S),t(S,C),t(f,x),t(s,Kl),t(s,n),t(n,O),t(n,Dl),t(n,V),t(V,E),t(n,$l),t(n,q),t(n,wl),t(n,W),t(n,jl),t(n,z),t(n,Nl),t(n,Y),t(n,Jl),t(n,F),t(n,Ol),t(n,I),t(n,Vl),t(n,El),t(n,ql),t(n,U),t(n,Wl),t(n,Q),t(n,zl),t(n,X),t(n,Yl),t(n,Z),t(n,Fl),t(n,P),t(n,Ul),t(n,tt),t(n,Ql),t(n,lt),t(n,Xl),t(n,at),t(n,Zl),t(n,et),t(n,ta),t(n,nt),t(n,la),t(n,st),t(n,aa),t(n,it),t(n,ea),t(n,rt),t(rt,mt),t(n,na),t(n,ot),t(n,sa),t(n,ia),t(n,ra),t(n,ut),t(n,ma),t(n,dt),t(n,oa),t(n,ht),t(n,ua),t(n,ct),t(n,da),t(n,bt),t(n,ha),t(n,gt),t(n,ca),t(n,pt),t(n,ba),t(n,ft),t(n,ga),t(n,pa),t(n,fa),t(n,Mt),t(n,Ma),t(n,vt),t(n,va),t(n,yt),t(n,ya),t(n,Ra),t(n,_a),t(n,Rt),t(n,La),t(n,_t),t(n,Ha),t(s,Ta),t(s,ka),t(s,Sa),t(s,Lt),t(s,Ca),t(s,o),t(o,Ht),t(o,Pa),t(o,Tt),t(o,Ba),t(o,kt),t(o,xa),t(o,St),t(o,Ga),t(o,Ct),t(o,Aa),t(o,Ka),t(o,Da),t(o,Pt),t(o,$a),t(o,Bt),t(o,wa),t(o,xt),t(o,ja),t(o,Gt),t(o,Na),t(o,Ja),t(o,Oa),t(o,At),t(o,Va),t(o,Kt),t(Kt,Dt),t(o,Ea),t(o,$t),t(o,qa),t(o,wt),t(o,Wa),t(o,za),t(o,Ya),t(o,jt),t(o,Fa),t(o,Nt),t(o,Ia),t(s,Ua),t(s,Qa),t(s,Xa),t(s,Jt),t(s,Za),t(s,Ot),t(s,te),t(s,le),t(s,ae),t(s,Vt),t(s,ee),t(s,Et),t(s,ne),t(s,se),t(s,ie),t(s,qt),t(s,re),t(s,d),t(d,Wt),t(d,me),t(d,zt),t(d,oe),t(d,Yt),t(d,ue),t(d,Ft),t(d,de),t(d,It),t(d,he),t(d,Ut),t(d,ce),t(d,Qt),t(d,be),t(d,ge),t(d,pe),t(d,Xt),t(d,fe),t(d,Zt),t(d,Me),t(d,tl),t(d,ve),t(d,ll),t(d,ye),t(d,al),t(al,el),t(d,Re),t(d,nl),t(d,_e),t(d,sl),t(sl,il),t(d,Le),t(d,rl),t(d,He),t(d,ml),t(d,Te),t(s,ke),t(s,Se),t(s,Ce),t(s,ol),t(s,Pe),t(s,r),t(r,ul),t(r,Be),t(r,dl),t(r,xe),t(r,hl),t(r,Ge),t(r,cl),t(r,Ae),t(r,bl),t(r,Ke),t(r,gl),t(r,De),t(r,pl),t(pl,fl),t(r,$e),t(r,Ml),t(r,we),t(r,je),t(r,Ne),t(r,vl),t(r,Je),t(r,yl),t(r,Oe),t(r,Rl),t(r,Ve),t(r,_l),t(r,Ee),t(r,Ll),t(r,qe),t(r,We),t(r,ze),t(r,Hl),t(r,Ye),t(r,Tl),t(r,Fe),t(r,Ie),t(r,Ue),t(r,kl),t(r,Qe),t(r,Sl),t(r,Xe),t(r,Cl),t(r,Ze),t(r,D),t(r,tn),t(s,ln),t(s,an),t(s,en),t(s,u),t(u,nn),t(u,sn),t(u,rn),t(u,R),t(u,mn),t(u,on),t(u,un),t(u,dn),t(u,hn),t(u,cn),t(u,bn),t(u,gn),t(u,$),t(u,pn),t(u,fn),t(u,Mn),t(u,_),t(u,vn),t(u,yn),t(u,Rn),t(u,_n),t(u,Ln),t(u,Hn),t(u,Tn),t(u,L),t(u,kn),t(u,Sn),t(u,Cn),t(u,B),t(u,Pn),t(u,Bn),t(u,xn),t(s,Gn),t(s,k)},p:A,i:A,o:A,d(Pl){Pl&&wn(i)}}}function gs(a){return[[["Sri","\u26F5","4","\u2642","\u{1F31C}"],["Asavari","\u26F5","2","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R1","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R1","\u2642","\u{1F506}"],["Sorath","\u2614","R2","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","R4","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","4","\u2642","\u{1F31C}","R1?"],["Sarang","\u26F5","3","\u2642","\u{1F31C}","2?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","3","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","3","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","4","\u2642","\u{1F506}","R1?"],["Devgandhari","\u{1F369}","3","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","R2","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R3","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","4","\u2640\uFE0F","\u{1FA90}","R1?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Bairari","\u26F5","3"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","3","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","2","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","2","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","4","\u2642","\u{1F31C}"],["Maru","\u{1F369}","3","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","4","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R1"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","1","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","R2","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Prabhati","\u0A15","R4","\u{1F505}","\u{1F31C}","1\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","R2"," \u2642"," \u{1F505}","R3?"],["Jaijaivanti","\u{1F334}","R2","\u2642","\u{1F31C}"],["Patdeep","\u0A15","3","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","R2","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R1","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","R2","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R3","\u263F","\u{1F506}"],["Charukeshi","-","3","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","R2","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R3","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","R2","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Puniya","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"],["Adana","\u26F5","R3","\u{1F506}","\u{1F31C}"],["Hindol","\u{1F334}","R4","\u{1FA99}","\u2640\uFE0F"],["","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"]]]}class ps extends cs{constructor(i){super(),hs(this,i,gs,bs,Zn,{})}}new ps({target:document.body});
