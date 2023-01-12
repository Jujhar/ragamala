const gs=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&b(S)}).observe(document,{childList:!0,subtree:!0});function s(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerpolicy&&(g.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?g.credentials="include":c.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(c){if(c.ep)return;c.ep=!0;const g=s(c);fetch(c.href,g)}};gs();function x(){}function Qn(a){return a()}function Fn(){return Object.create(null)}function E(a){a.forEach(Qn)}function ps(a){return typeof a=="function"}function fs(a,i){return a!=a?i==i:a!==i||a&&typeof a=="object"||typeof a=="function"}let J;function Ms(a,i){return J||(J=document.createElement("a")),J.href=i,a===J.href}function vs(a){return Object.keys(a).length===0}function t(a,i){a.appendChild(i)}function Ss(a,i,s){a.insertBefore(i,s||null)}function Xn(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function M(a,i,s){s==null?a.removeAttribute(i):a.getAttribute(i)!==s&&a.setAttribute(i,s)}function Rs(a){return Array.from(a.childNodes)}function h(a,i,s,b){s===null?a.style.removeProperty(i):a.style.setProperty(i,s,b?"important":"")}let $l;function A(a){$l=a}const B=[],In=[],V=[],Un=[],ys=Promise.resolve();let Dl=!1;function _s(){Dl||(Dl=!0,ys.then(Zn))}function Kl(a){V.push(a)}const Al=new Set;let O=0;function Zn(){const a=$l;do{for(;O<B.length;){const i=B[O];O++,A(i),Ls(i.$$)}for(A(null),B.length=0,O=0;In.length;)In.pop()();for(let i=0;i<V.length;i+=1){const s=V[i];Al.has(s)||(Al.add(s),s())}V.length=0}while(B.length);for(;Un.length;)Un.pop()();Dl=!1,Al.clear(),A(a)}function Ls(a){if(a.fragment!==null){a.update(),E(a.before_update);const i=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,i),a.after_update.forEach(Kl)}}const Hs=new Set;function Ts(a,i){a&&a.i&&(Hs.delete(a),a.i(i))}function ks(a,i,s,b){const{fragment:c,on_mount:g,on_destroy:S,after_update:H}=a.$$;c&&c.m(i,s),b||Kl(()=>{const v=g.map(Qn).filter(ps);S?S.push(...v):E(v),a.$$.on_mount=[]}),H.forEach(Kl)}function Ps(a,i){const s=a.$$;s.fragment!==null&&(E(s.on_destroy),s.fragment&&s.fragment.d(i),s.on_destroy=s.fragment=null,s.ctx=[])}function Cs(a,i){a.$$.dirty[0]===-1&&(B.push(a),_s(),a.$$.dirty.fill(0)),a.$$.dirty[i/31|0]|=1<<i%31}function Gs(a,i,s,b,c,g,S,H=[-1]){const v=$l;A(a);const p=a.$$={fragment:null,ctx:null,props:g,update:x,not_equal:c,bound:Fn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(v?v.$$.context:[])),callbacks:Fn(),dirty:H,skip_bound:!1,root:i.target||v.$$.root};S&&S(p.root);let T=!1;if(p.ctx=s?s(a,i.props||{},(R,P,...C)=>{const N=C.length?C[0]:P;return p.ctx&&c(p.ctx[R],p.ctx[R]=N)&&(!p.skip_bound&&p.bound[R]&&p.bound[R](N),T&&Cs(a,R)),P}):[],p.update(),T=!0,E(p.before_update),p.fragment=b?b(p.ctx):!1,i.target){if(i.hydrate){const R=Rs(i.target);p.fragment&&p.fragment.l(R),R.forEach(Xn)}else p.fragment&&p.fragment.c();i.intro&&Ts(a.$$.fragment),ks(a,i.target,i.anchor,i.customElement),Zn()}A(v)}class Ns{$destroy(){Ps(this,1),this.$destroy=x}$on(i,s){const b=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return b.push(s),()=>{const c=b.indexOf(s);c!==-1&&b.splice(c,1)}}$set(i){this.$$set&&!vs(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function Bs(a){let i,s,b,c,g,S,H,v,p,T,R,P,C,N,wl,n,q,jl,W,z,Jl,Y,Ol,F,Vl,I,El,U,ql,Q,Wl,X,zl,Yl,Fl,Z,Il,tt,Ul,lt,Ql,at,Xl,G,Zl,ta,et,la,nt,aa,st,ea,it,na,rt,sa,mt,ia,ot,ra,ut,dt,ma,ht,oa,ua,da,ct,ha,bt,ca,gt,ba,pt,ga,ft,pa,Mt,fa,vt,Ma,St,va,Rt,Sa,Ra,ya,yt,_a,_t,La,Lt,Ha,Ta,ka,Ht,Pa,Tt,Ca,Ga,Na,Ba,kt,xa,u,Pt,Aa,Ct,Da,Gt,Ka,Nt,$a,Bt,wa,ja,Ja,xt,Oa,At,Va,Dt,Ea,Kt,qa,Wa,za,$t,Ya,wt,jt,Fa,Jt,Ia,Ot,Ua,Qa,Xa,Vt,Za,Et,te,le,ae,ee,qt,ne,Wt,se,ie,re,zt,me,Yt,oe,ue,de,Ft,he,d,It,ce,Ut,be,Qt,ge,Xt,pe,Zt,fe,tl,Me,ll,ve,Se,Re,al,ye,el,_e,nl,Le,sl,He,il,rl,Te,ml,ke,ol,ul,Pe,dl,Ce,hl,Ge,Ne,Be,xe,cl,Ae,r,bl,De,gl,Ke,pl,$e,fl,we,Ml,je,vl,Je,Sl,Rl,Oe,yl,Ve,Ee,qe,_l,We,Ll,ze,Hl,Ye,Tl,Fe,kl,Ie,Ue,Qe,Pl,Xe,Cl,Ze,tn,ln,Gl,an,Nl,en,Bl,nn,D,sn,rn,mn,on,o,un,ts=a[0][33][3]+a[0][33][4]+"",dn,hn,y,cn,ls=a[0][3][3]+""+a[0][3][4],bn,gn,as=a[0][48][3]+a[0][48][4]+"",pn,fn,es=a[0][1][3]+"",Mn,ns=a[0][1][4]+"",vn,Sn,K,Rn,ss=a[0][17][3]+a[0][17][4]+"",yn,_n,_,Ln,$,Hn,is=(a[0][29][3],+a[0][29][4]+""),Tn,kn,rs=a[0][24][3]+a[0][24][4]+"",Pn,Cn,ms=a[0][14][3]+"",Gn,Nn,L,Bn,os=(a[0][5][3],a[0][5][3]+""),xn,An,w,Dn,f,Kn,us=a[0][39][3]+a[0][39][4]+"",$n,wn,ds=a[0][20][3]+a[0][20][4]+"",jn,Jn,j,On,hs=a[0][53][3]+a[0][53][4]+"",Vn,En,qn,cs=a[0][4][3]+a[0][4][4]+"",Wn,zn,Yn,k;return{c(){i=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-1dqagpy" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,c=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',S=m(),H=l("ul"),v=l("li"),p=e("(2) "),T=l("b"),R=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F "),P=l("small"),C=l("small"),C.textContent=`(2 ${a[0][33][3]+a[0][33][4]})`,N=l("br"),wl=m(),n=l("p"),q=l("b"),q.textContent="Wives",jl=e(": Bhairavi "),W=l("small"),z=l("small"),z.textContent=`(2 ${a[0][48][3]+a[0][48][4]})`,Jl=e(`,
   `),Y=l("u"),Y.textContent="Bilawali",Ol=m(),F=l("small"),F.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",Vl=e(`,
   Punyaki `),I=l("small"),I.innerHTML="<small>(2)</small>",El=e(`,
   `),U=l("u"),U.textContent="Bangli",ql=m(),Q=l("small"),Q.innerHTML="<small>(L \u263F\u{1F506})</small>",Wl=e(", Aslekhi "),X=l("small"),X.innerHTML="<small>(Puniya?)</small>",zl=e("."),Yl=l("br"),Fl=m(),Z=l("b"),Z.textContent="Sons",Il=e(": "),tt=l("u"),tt.textContent="Pancham",Ul=m(),lt=l("small"),lt.innerHTML="<small>(R1)</small>",Ql=e(`,
Harakh `),at=l("small"),at.innerHTML="<small>(R2)</small>",Xl=e(`,
              `),G=l("img"),ta=m(),et=l("u"),et.textContent="Devsakh",la=m(),nt=l("small"),nt.innerHTML="<small>(2 \u{1F31C}\u{1F505})</small>",aa=e(`,
`),st=l("u"),st.textContent="Bangalam",ea=m(),it=l("small"),it.innerHTML="<small>(L?)</small>",na=e(`,
`),rt=l("u"),rt.textContent="Madhumadhvi",sa=m(),mt=l("small"),mt.innerHTML="<small>(3 \u263F\u{1F31C})</small>",ia=e(`,
`),ot=l("u"),ot.textContent="Lalit",ra=m(),ut=l("small"),dt=l("small"),dt.textContent=`(R4 ${a[0][12][3]}\u{1F505})`,ma=e(`,
Bilaval `),ht=l("small"),ht.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F)</small>",oa=e("."),ua=l("br"),da=m(),ct=l("b"),ct.textContent="Retro",ha=e(": Gauri "),bt=l("small"),bt.innerHTML="<small>(4 \u263F\u{1F31C}7\uFE0F\u20E3)</small>",ca=e(`,
Ramkali `),gt=l("small"),gt.innerHTML="<small>(R4 \u{1F31C}\u{1F505}7\uFE0F\u20E3)</small>",ba=e(`,
`),pt=l("u"),pt.textContent="Pahadi",ga=m(),ft=l("small"),ft.innerHTML="<small>(R1)</small>",pa=e(`,
Malashree `),Mt=l("small"),Mt.innerHTML='<small>(R1 SP <span title="S - G - P - N - S&#39; / S&#39; - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3\uFE0F\u20E3</span>)</small>',fa=e(`,
Hamsadvani `),vt=l("small"),vt.innerHTML="<small>(R1?-R2?)</small>",Ma=e(`,
Durga `),St=l("small"),St.innerHTML="<small>(R2 \u2642\u{1F505})</small>",va=e(`,
Bhinna Shadja `),Rt=l("small"),Rt.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Sa=e(","),Ra=l("br"),ya=e(`
Jogkauns `),yt=l("small"),yt.innerHTML="<small>(R3 \u2642\u{1F505})</small>",_a=e(`,
Hemant `),_t=l("small"),_t.innerHTML="<small>(R3 \u2642\u{1F505})</small>",La=e(`,
Bihagaraa / Bihag `),Lt=l("small"),Lt.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",Ha=e("."),Ta=l("br"),ka=m(),Ht=l("b"),Ht.textContent="Combo",Pa=e(": Gauri Deepak / (Gauri Yeman)  "),Tt=l("small"),Tt.innerHTML="<small>(R2)</small>",Ca=e(", Poorvi, Bairagi."),Ga=m(),Na=l("br"),Ba=m(),kt=l("ul"),kt.innerHTML="<li>(3) <b>Malkaus</b> \u{1F369} <small><small>(R3 \u2642\u{1F505})</small></small><br/></li>",xa=m(),u=l("p"),Pt=l("b"),Pt.textContent="Wives",Aa=e(": Gaundkari "),Ct=l("small"),Ct.innerHTML="<small>(2 DR)</small>",Da=e(", Devgandhari "),Gt=l("small"),Gt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",Ka=e(`,
  Gandhari `),Nt=l("small"),Nt.innerHTML="<small>(2)</small>",$a=e(", Seehute, Dhanasri "),Bt=l("small"),Bt.innerHTML="<small>(3 \u{1F505}\u{1F31C})</small>",wa=e("."),ja=l("br"),Ja=m(),xt=l("b"),xt.textContent="Sons",Oa=e(": Maru "),At=l("small"),At.innerHTML="<small>(3 \u{1F31C}\u{1FA90})</small>",Va=e(", Marwa "),Dt=l("small"),Dt.innerHTML="<small>(R1)</small>",Ea=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Kt=l("small"),Kt.innerHTML="<small>(Bhamarananda?)</small>",qa=e("."),Wa=l("br"),za=m(),$t=l("b"),$t.textContent="Retro",Ya=e(": Mali Gaura "),wt=l("small"),jt=l("small"),jt.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,Fa=e(", Suhi "),Jt=l("small"),Jt.innerHTML="<small>(2)</small>",Ia=e(`,
 Puriya `),Ot=l("small"),Ot.innerHTML="<small>(R2)</small>",Ua=e(`.
`),Qa=l("br"),Xa=m(),Vt=l("b"),Vt.textContent="Combo",Za=e(": Dhanasri Ambika "),Et=l("small"),Et.innerHTML="<small>(2)</small>",te=e("."),le=m(),ae=l("br"),ee=m(),qt=l("ul"),qt.innerHTML="<li>(4) <b>Hindol</b> \u{1F334}<br/></li>",ne=m(),Wt=l("p"),Wt.innerHTML=`<b>Wives</b>: Tilangi <small><small>(4 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R1? R2?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R2 \u{1F31C}\u{1F506}5\uFE0F\u20E3)</small></small>,`,se=m(),ie=l("br"),re=m(),zt=l("ul"),zt.innerHTML="<li>(4) <b>Deepak</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",me=m(),Yt=l("p"),Yt.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(3 \u{1F505}\u{1F31C}<span title="S R G m P D N S&#39;/S&#39; n D P m g R S">7\uFE0F\u20E3</span>)</small></small>,
   Todi <small><small>(2 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span>  <small><small>(2 \u{1FA99}\u2642)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R3)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R2 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika / Madhuvanti <small><small>(4)</small></small>.`,oe=m(),ue=l("br"),de=m(),Ft=l("ul"),Ft.innerHTML="<li>(5) <b>Sri raga \u26F5 <small><small>(4 \u263F\u{1F31C})</small></small></b><br/></li>",he=m(),d=l("p"),It=l("b"),It.textContent="Wives",ce=e(": Baradi / Varali / Bairari "),Ut=l("small"),Ut.innerHTML="<small>(3 \u2640\uFE0F\u{1FA99})</small>",be=e(", Karnati "),Qt=l("small"),Qt.innerHTML="<small>(1 DR)</small>",ge=e(`,
  Gavri `),Xt=l("small"),Xt.innerHTML="<small>(3 SP)</small>",pe=e(", "),Zt=l("u"),Zt.textContent="Asavari",fe=m(),tl=l("small"),tl.innerHTML="<small>(2 \u{1FA99}\u2640\uFE0F 5\uFE0F\u20E3-7\uFE0F\u20E3)</small>",Me=e(`,
   Sindhve / Sindhura `),ll=l("small"),ll.innerHTML="<small>(4 SP)</small>",ve=e("."),Se=l("br"),Re=m(),al=l("b"),al.textContent="Sons",ye=e(": "),el=l("u"),el.textContent="Salag",_e=m(),nl=l("small"),nl.innerHTML="<small>(3 \u{1F31C}\u{1F506})</small>",Le=e(", "),sl=l("u"),sl.textContent="Sarang",He=m(),il=l("small"),rl=l("small"),rl.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,Te=e(`,
Sagra `),ml=l("small"),ml.innerHTML="<small>(R1 GD)</small>",ke=e(`,
Gond `),ol=l("small"),ul=l("small"),ul.textContent=`(2 \u{1F505}${a[0][27][4]})`,Pe=e(", Gambhir, Gund, Kumbah "),dl=l("small"),dl.innerHTML="<small>(R3 MS)</small>",Ce=e(`,
Hamir `),hl=l("small"),hl.innerHTML="<small>(R2 \u{1FA99}\u2640\uFE0F)</small>",Ge=e("."),Ne=m(),Be=l("br"),xe=m(),cl=l("ul"),cl.innerHTML="<li>(6) <b>Megh \u2614 <small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Ae=m(),r=l("p"),bl=l("b"),bl.textContent="Wives",De=e(": "),gl=l("u"),gl.textContent="Sorath",Ke=m(),pl=l("small"),pl.innerHTML="<small>(R2 \u263F\u{1FA99})</small>",$e=e(`,
  Gond `),fl=l("small"),fl.innerHTML="<small>(2)</small>",we=e(`,
  `),Ml=l("u"),Ml.textContent="Malari",je=m(),vl=l("small"),vl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",Je=e(`,
   Asa `),Sl=l("small"),Rl=l("small"),Rl.textContent=`(R4 ${a[0][10][3]}\u{1F505})`,Oe=e(", Soohou "),yl=l("small"),yl.innerHTML="<small>(Puniya? or Soob)</small>",Ve=e("."),Ee=l("br"),qe=m(),_l=l("b"),_l.textContent="Sons",We=e(": Bayra-dhar, Gaj-dhar "),Ll=l("small"),Ll.innerHTML="<small>(2?)</small>",ze=e(`,
Kedara `),Hl=l("small"),Hl.innerHTML="<small>(R1)</small>",Ye=e(", Jabli-dhar, Nat "),Tl=l("small"),Tl.innerHTML="<small>(R3 \u2642\u{1F505})</small>",Fe=e(`,
Jaldhar,
Shankara `),kl=l("small"),kl.innerHTML="<small>(R3 \u2640\uFE0F\u{1FA90})</small>",Ie=e(`,
Syama.`),Ue=l("br"),Qe=m(),Pl=l("b"),Pl.textContent="Retro",Xe=e(": Vibhas "),Cl=l("small"),Cl.innerHTML="<small>(1)</small>",Ze=e("."),tn=l("br"),ln=m(),Gl=l("b"),Gl.textContent="Combo",an=e(": Asa Aaswari (Sri) "),Nl=l("small"),Nl.innerHTML="<small>(2?)</small>",en=e(", Tribungi, "),Bl=l("u"),Bl.textContent="Sorath",nn=e(", "),D=l("span"),D.textContent="Gujri",sn=e(" (Deepak), Shalokh, Nat Bhariav."),rn=m(),mn=l("br"),on=m(),o=l("pre"),un=e(`
  1 \u{1F305} 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),dn=e(ts),hn=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F) Gauri Bairagan \u2642\u{1FA99} (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u{1F369} \u263F\u{1F506})
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),y=l("div"),y.textContent="2",cn=e(`
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),bn=e(ls),gn=e(", Puniya, Bhairavi "),pn=e(as),fn=e(`
																Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),Mn=e(es),vn=e(ns),Sn=e(` 5\uFE0F\u20E3-7\uFE0F\u20E3
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}\u{1F31C}\u{1F506}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																`),K=l("span"),K.textContent="Gujri?",Rn=e(" (\u2764\uFE0F\u200D\u{1F525}) "),yn=e(ss),_n=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),_=l("div"),_.textContent="3",Ln=e(`
3 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15\u0A3E/Green) Vadhans \u2642\u{1F31C}, Suha Sughrai \u{1F31C}\u{1F506}, Bhimpalasi (\u2642\u{1F506})
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525}\u{1F505}\u{1F31C}`),$=l("span"),$.textContent="7\uFE0F\u20E3",Hn=e(`)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),Tn=e(is),kn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),Pn=e(rs),Cn=e(", Sarang "),Gn=e(ms),Nn=e(`\u{1F31C}

`),L=l("div"),L.textContent="4",Bn=e(`
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
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),xn=e(os),An=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP`),w=l("span"),w.textContent="3\uFE0F\u20E3",Dn=e(`)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})

R2 8.24 PM - 10.48 PM pradosa \u263E2              8 -10:30      K
`),f=l("div"),Kn=e(`
																Sorath (\u2614),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi \u0A15\u0A3E \u263F\u{1F31C}, 'Bageshree \u2640\uFE0F\u{1F506}, 'Madhukauns \u{1F31C}\u{1F506}, Jog \u263F\u{1F506}  Pancham Jogeshwari (\u263F\u{1F506})
																Chandrakauns?, (\u0A1A strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(\u{1F334})
																Kalavati \u{1F31C}\u{1F506}5\uFE0F\u20E3, 'Jaijaivanti `),$n=e(us),wn=e(` Tilak Kamod, Naryani,  (\u{1F334})
																Harakh (\u{1F9D8}\u200D\u2640\uFE0F)  Gauri?!, Durga, Bihag / Bihagara `),jn=e(ds),Jn=e(`, Hamsadvani?,
																Kanra (\u2764\uFE0F\u200D\u{1F525}),  Khamaj?, Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})
															    Hameer (\u26F5\u{1FA99}\u2640\uFE0F)  (lights in dark + virras),
																Malkos (\u{1F369}) Puriya
																Saraswati (\u0A35 \u{1F31C}\u{1F6B9})
																Gauri?!, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525} \u2642\u{1F31C})   'Gauri Manjari?,
								                                                    Kirwani (\u0A4D - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, \u0A15, \u0A36)


R3 10.48 PM - 3.36 AM ratri  \u263E3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (\u{1F9D8}\u200D\u2640\uFE0F)
															   'Des? \u2642\u{1F31C}, Khamoj (\u{1F334} \u{1F31C}\u2642),
																Chandrakauns? (\u0A1A \u263F\u{1F506}`),j=l("span"),j.textContent="5\uFE0F\u20E3",On=e(`)
																'Darbari Kanada? (\u26F5 \u2642\u{1F31C}),  Adana  \u263F\u{1F506}
																Deepak (\u2764\uFE0F\u200D\u{1F525} \u{1F506}\u{1F31C})
															    Malkaus(\u{1F369} \u263F\u{1F505})
																'Sahana? (\u0A15\u0A3E \u{1F31C}\u{1F506}), 'Bahar? \u2640\uFE0F\u{1F506}, Shiv Ranjani \u{1F31C}\u{1F506}
                                Malhaar \u2614 \u263F\u{1F505}



R4 3.36 AM - 6 AM nisanta 4		\u263E4			2:00 5    V
															'Asa \u2614,  (\u2642\u{1F505})
															Prabhati \u{1F9D8}\u200D\u2640\uFE0F\u{1F506}\u{1F31C},  'Ramkali \u{1F31C}\u263F 7\uFE0F\u20E3,  'Lalit \u{1F9D8}\u200D\u2640\uFE0F,\u{1F30C}, (\u2642\u{1F505})
															Hindol (\u{1F334} `),Vn=e(hs),En=e(`)
															Paraj (\u{1F30C} \u{1F506}\u{1F31C})
`),qn=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Wn=e(cs),zn=e(`

`),Yn=m(),k=l("div"),k.innerHTML=`Legend<br/>
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

  \xA0\u25E6\xA0\xA0Ignore underlines and &#39;</em></em></em>`,h(b,"clear","right"),h(b,"margin-bottom",".5em"),h(b,"float","right"),h(b,"padding",".5em 0 .8em 1.4em"),h(b,"background","none"),h(b,"width","auto"),M(b,"cellspacing","0"),M(b,"cellpadding","0"),h(g,"margin-bottom","28px"),Ms(G.src,Zl="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||M(G,"src",Zl),h(G,"vertical-align","middle"),h(G,"width","30px"),M(D,"title","Nearness of Guru"),h(y,"position","absolute"),h(y,"font-size","6em"),h(y,"margin-top","30px"),h(y,"margin-left","10px"),h(y,"color","gold"),h(y,"opacity","0.2"),M(K,"title","nearness of Guru"),h(_,"position","absolute"),h(_,"font-size","6em"),h(_,"margin-top","30px"),h(_,"margin-left","10px"),h(_,"color","gold"),h(_,"opacity","0.2"),M($,"title","S R G m P D N S'/S' n D P m g R S"),h(L,"position","absolute"),h(L,"font-size","6em"),h(L,"margin-top","30px"),h(L,"margin-left","10px"),h(L,"color","gold"),h(L,"opacity","0.2"),M(w,"title","S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)"),M(j,"title","S g m d N S' - S' N d m g m g S ,N S; (S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; ,N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;.)"),h(f,"background-image","url('blues.jpg')"),h(f,"padding-bottom","30px"),M(f,"id","Night"),h(o,"background-color","#2727da"),h(o,"padding","10px"),M(o,"id","Day"),h(k,"background-color","#3eab7e"),h(k,"padding-left","10px"),h(k,"opacity","0.8"),h(k,"padding-top","25px"),M(s,"class","svelte-1dqagpy"),M(i,"data-theme","retro"),M(i,"lang","en"),M(i,"class","svelte-1dqagpy")},m(xl,bs){Ss(xl,i,bs),t(i,s),t(s,b),t(s,c),t(s,g),t(s,S),t(s,H),t(H,v),t(v,p),t(v,T),t(T,R),t(T,P),t(P,C),t(v,N),t(s,wl),t(s,n),t(n,q),t(n,jl),t(n,W),t(W,z),t(n,Jl),t(n,Y),t(n,Ol),t(n,F),t(n,Vl),t(n,I),t(n,El),t(n,U),t(n,ql),t(n,Q),t(n,Wl),t(n,X),t(n,zl),t(n,Yl),t(n,Fl),t(n,Z),t(n,Il),t(n,tt),t(n,Ul),t(n,lt),t(n,Ql),t(n,at),t(n,Xl),t(n,G),t(n,ta),t(n,et),t(n,la),t(n,nt),t(n,aa),t(n,st),t(n,ea),t(n,it),t(n,na),t(n,rt),t(n,sa),t(n,mt),t(n,ia),t(n,ot),t(n,ra),t(n,ut),t(ut,dt),t(n,ma),t(n,ht),t(n,oa),t(n,ua),t(n,da),t(n,ct),t(n,ha),t(n,bt),t(n,ca),t(n,gt),t(n,ba),t(n,pt),t(n,ga),t(n,ft),t(n,pa),t(n,Mt),t(n,fa),t(n,vt),t(n,Ma),t(n,St),t(n,va),t(n,Rt),t(n,Sa),t(n,Ra),t(n,ya),t(n,yt),t(n,_a),t(n,_t),t(n,La),t(n,Lt),t(n,Ha),t(n,Ta),t(n,ka),t(n,Ht),t(n,Pa),t(n,Tt),t(n,Ca),t(s,Ga),t(s,Na),t(s,Ba),t(s,kt),t(s,xa),t(s,u),t(u,Pt),t(u,Aa),t(u,Ct),t(u,Da),t(u,Gt),t(u,Ka),t(u,Nt),t(u,$a),t(u,Bt),t(u,wa),t(u,ja),t(u,Ja),t(u,xt),t(u,Oa),t(u,At),t(u,Va),t(u,Dt),t(u,Ea),t(u,Kt),t(u,qa),t(u,Wa),t(u,za),t(u,$t),t(u,Ya),t(u,wt),t(wt,jt),t(u,Fa),t(u,Jt),t(u,Ia),t(u,Ot),t(u,Ua),t(u,Qa),t(u,Xa),t(u,Vt),t(u,Za),t(u,Et),t(u,te),t(s,le),t(s,ae),t(s,ee),t(s,qt),t(s,ne),t(s,Wt),t(s,se),t(s,ie),t(s,re),t(s,zt),t(s,me),t(s,Yt),t(s,oe),t(s,ue),t(s,de),t(s,Ft),t(s,he),t(s,d),t(d,It),t(d,ce),t(d,Ut),t(d,be),t(d,Qt),t(d,ge),t(d,Xt),t(d,pe),t(d,Zt),t(d,fe),t(d,tl),t(d,Me),t(d,ll),t(d,ve),t(d,Se),t(d,Re),t(d,al),t(d,ye),t(d,el),t(d,_e),t(d,nl),t(d,Le),t(d,sl),t(d,He),t(d,il),t(il,rl),t(d,Te),t(d,ml),t(d,ke),t(d,ol),t(ol,ul),t(d,Pe),t(d,dl),t(d,Ce),t(d,hl),t(d,Ge),t(s,Ne),t(s,Be),t(s,xe),t(s,cl),t(s,Ae),t(s,r),t(r,bl),t(r,De),t(r,gl),t(r,Ke),t(r,pl),t(r,$e),t(r,fl),t(r,we),t(r,Ml),t(r,je),t(r,vl),t(r,Je),t(r,Sl),t(Sl,Rl),t(r,Oe),t(r,yl),t(r,Ve),t(r,Ee),t(r,qe),t(r,_l),t(r,We),t(r,Ll),t(r,ze),t(r,Hl),t(r,Ye),t(r,Tl),t(r,Fe),t(r,kl),t(r,Ie),t(r,Ue),t(r,Qe),t(r,Pl),t(r,Xe),t(r,Cl),t(r,Ze),t(r,tn),t(r,ln),t(r,Gl),t(r,an),t(r,Nl),t(r,en),t(r,Bl),t(r,nn),t(r,D),t(r,sn),t(s,rn),t(s,mn),t(s,on),t(s,o),t(o,un),t(o,dn),t(o,hn),t(o,y),t(o,cn),t(o,bn),t(o,gn),t(o,pn),t(o,fn),t(o,Mn),t(o,vn),t(o,Sn),t(o,K),t(o,Rn),t(o,yn),t(o,_n),t(o,_),t(o,Ln),t(o,$),t(o,Hn),t(o,Tn),t(o,kn),t(o,Pn),t(o,Cn),t(o,Gn),t(o,Nn),t(o,L),t(o,Bn),t(o,xn),t(o,An),t(o,w),t(o,Dn),t(o,f),t(f,Kn),t(f,$n),t(f,wn),t(f,jn),t(f,Jn),t(f,j),t(f,On),t(f,Vn),t(f,En),t(o,qn),t(o,Wn),t(o,zn),t(s,Yn),t(s,k)},p:x,i:x,o:x,d(xl){xl&&Xn(i)}}}function xs(a){return[[["Sri","\u26F5","4","\u2642","\u{1F31C}"],["Asavari","\u26F5","2","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R1","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R1","\u2642","\u{1F506}"],["Sorath","\u2614","R2","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","R4","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","4","\u2642","\u{1F31C}","R1?"],["Sarang","\u26F5","3","\u2642","\u{1F31C}","2?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","3","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","3","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","4","\u2642","\u{1F506}","R1?"],["Devgandhari","\u{1F369}","3","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","R2","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R3","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","4","\u2640\uFE0F","\u{1FA90}","R1?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","2","\u{1FA99}","\u2642"],["Bairari","\u26F5","3"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","3","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","2","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","2","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","R4","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","4","\u2642","\u{1F31C}"],["Maru","\u{1F369}","3","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","4","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R1"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","1","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","R2","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","R2","\u{1F31C}","\u263F","R3?"],["Prabhati","\u0A15","R4","\u{1F505}","\u{1F31C}","1\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","R2"," \u2642"," \u{1F505}","R3?"],["Jaijaivanti","\u{1F334}","R2","\u2642","\u{1F31C}"],["Patdeep","\u0A15","3","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","R2","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R1","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","R2","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R3","\u263F","\u{1F506}"],["Charukeshi","-","3","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","R2","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R3","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","R2","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","2","\u{1F31C}","\u{1F506}"],["Puniya","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"],["Adana","\u26F5","R3","\u{1F506}","\u{1F31C}"],["Hindol","\u{1F334}","R4","\u{1FA99}","\u2640\uFE0F"],["","\u{1F9D8}\u200D\u2640\uFE0F","2","\u263F","\u{1F506}"]]]}class As extends Ns{constructor(i){super(),Gs(this,i,xs,Bs,fs,{})}}new As({target:document.body});
