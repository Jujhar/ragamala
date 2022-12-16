const Wn=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))b(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const M of g.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&b(M)}).observe(document,{childList:!0,subtree:!0});function s(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerpolicy&&(g.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?g.credentials="include":h.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function b(h){if(h.ep)return;h.ep=!0;const g=s(h);fetch(h.href,g)}};Wn();function G(){}function Pn(a){return a()}function Sn(){return Object.create(null)}function j(a){a.forEach(Pn)}function zn(a){return typeof a=="function"}function Yn(a,i){return a!=a?i==i:a!==i||a&&typeof a=="object"||typeof a=="function"}let D;function qn(a,i){return D||(D=document.createElement("a")),D.href=i,a===D.href}function Fn(a){return Object.keys(a).length===0}function t(a,i){a.appendChild(i)}function Un(a,i,s){a.insertBefore(i,s||null)}function xn(a){a.parentNode.removeChild(a)}function l(a){return document.createElement(a)}function e(a){return document.createTextNode(a)}function m(){return e(" ")}function L(a,i,s){s==null?a.removeAttribute(i):a.getAttribute(i)!==s&&a.setAttribute(i,s)}function Qn(a){return Array.from(a.childNodes)}function d(a,i,s,b){s===null?a.style.removeProperty(i):a.style.setProperty(i,s,b?"important":"")}let K;function A(a){K=a}function Xn(){if(!K)throw new Error("Function called outside component initialization");return K}function Zn(a){Xn().$$.on_mount.push(a)}const x=[],Cn=[],I=[],Bn=[],ts=Promise.resolve();let Bl=!1;function ls(){Bl||(Bl=!0,ts.then(Gn))}function Pl(a){I.push(a)}const Cl=new Set;let w=0;function Gn(){const a=K;do{for(;w<x.length;){const i=x[w];w++,A(i),as(i.$$)}for(A(null),x.length=0,w=0;Cn.length;)Cn.pop()();for(let i=0;i<I.length;i+=1){const s=I[i];Cl.has(s)||(Cl.add(s),s())}I.length=0}while(x.length);for(;Bn.length;)Bn.pop()();Bl=!1,Cl.clear(),A(a)}function as(a){if(a.fragment!==null){a.update(),j(a.before_update);const i=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,i),a.after_update.forEach(Pl)}}const es=new Set;function ns(a,i){a&&a.i&&(es.delete(a),a.i(i))}function ss(a,i,s,b){const{fragment:h,on_mount:g,on_destroy:M,after_update:H}=a.$$;h&&h.m(i,s),b||Pl(()=>{const f=g.map(Pn).filter(zn);M?M.push(...f):j(f),a.$$.on_mount=[]}),H.forEach(Pl)}function is(a,i){const s=a.$$;s.fragment!==null&&(j(s.on_destroy),s.fragment&&s.fragment.d(i),s.on_destroy=s.fragment=null,s.ctx=[])}function rs(a,i){a.$$.dirty[0]===-1&&(x.push(a),ls(),a.$$.dirty.fill(0)),a.$$.dirty[i/31|0]|=1<<i%31}function ms(a,i,s,b,h,g,M,H=[-1]){const f=K;A(a);const p=a.$$={fragment:null,ctx:null,props:g,update:G,not_equal:h,bound:Sn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:Sn(),dirty:H,skip_bound:!1,root:i.target||f.$$.root};M&&M(p.root);let T=!1;if(p.ctx=s?s(a,i.props||{},(v,k,...S)=>{const B=S.length?S[0]:k;return p.ctx&&h(p.ctx[v],p.ctx[v]=B)&&(!p.skip_bound&&p.bound[v]&&p.bound[v](B),T&&rs(a,v)),k}):[],p.update(),T=!0,j(p.before_update),p.fragment=b?b(p.ctx):!1,i.target){if(i.hydrate){const v=Qn(i.target);p.fragment&&p.fragment.l(v),v.forEach(xn)}else p.fragment&&p.fragment.c();i.intro&&ns(a.$$.fragment),ss(a,i.target,i.anchor,i.customElement),Gn()}A(f)}class os{$destroy(){is(this,1),this.$destroy=G}$on(i,s){const b=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return b.push(s),()=>{const h=b.indexOf(s);h!==-1&&b.splice(h,1)}}$set(i){this.$$set&&!Fn(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function us(a){let i,s,b,h,g,M,H,f,p,T,v,k,S,B,xl,n,N,Gl,J,V,Al,E,Kl,O,$l,W,Dl,z,wl,Y,Il,q,jl,Nl,Jl,F,Vl,U,El,Q,Ol,X,Wl,C,zl,Yl,Z,ql,tt,Fl,lt,Ul,at,Ql,et,Xl,nt,Zl,st,it,ta,rt,la,aa,ea,mt,na,ot,sa,ut,ia,ct,ra,dt,ma,ht,oa,bt,ua,gt,ca,da,ha,pt,ba,ft,ga,Mt,pa,fa,Ma,vt,va,_t,_a,Ra,ya,La,Rt,Ha,o,yt,Ta,Lt,ka,Ht,Sa,Tt,Ca,kt,Ba,Pa,xa,St,Ga,Ct,Aa,Bt,Ka,Pt,$a,Da,wa,xt,Ia,Gt,At,ja,Kt,Na,$t,Ja,Va,Ea,Dt,Oa,wt,Wa,za,Ya,qa,It,Fa,jt,Ua,Qa,Xa,Nt,Za,Jt,te,le,ae,Vt,ee,u,Et,ne,Ot,se,Wt,ie,zt,re,Yt,me,qt,oe,Ft,ue,ce,de,Ut,he,Qt,be,Xt,ge,Zt,pe,tl,ll,fe,al,Me,el,nl,ve,sl,_e,il,Re,ye,Le,He,rl,Te,r,ml,ke,ol,Se,ul,Ce,cl,Be,dl,Pe,hl,xe,bl,gl,Ge,pl,Ae,Ke,$e,fl,De,Ml,we,vl,Ie,_l,je,Rl,Ne,Je,Ve,yl,Ee,Ll,Oe,We,ze,Hl,Ye,Tl,qe,kl,Fe,Ue,Qe,Xe,c,Ze,An=a[0][33][3]+a[0][33][4]+"",tn,ln,_,an,Kn=a[0][3][3]+""+a[0][3][4],en,nn,$n=a[0][48][3]+a[0][48][4]+"",sn,rn,Dn=a[0][1][3]+"",mn,wn=a[0][1][4]+"",on,un,In=(a[0][17][3],a[0][17][4]+""),cn,dn,R,hn,jn=(a[0][29][3],+a[0][29][4]+""),bn,gn,Nn=a[0][24][3]+a[0][24][4]+"",pn,fn,Jn=a[0][14][3]+"",Mn,vn,y,_n,Vn=(a[0][5][3],a[0][5][3]+""),Rn,yn,P,Ln,En=a[0][4][3]+a[0][4][4]+"",Hn,Tn,kn,$;return{c(){i=l("html"),s=l("body"),b=l("table"),b.innerHTML=`<tbody><tr><td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox svelte-t6r88k" style="display:none"/><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div> 
<ul><li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span>  <span class="toctext">Raagmala &amp; Raags in SGGS</span></a> 
<ul><li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span>  <span class="toctext">Devsakh  clarity,</span></a></li> 
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span>  <span class="toctext">desire to excersie, goodness</span></a></li> 
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span>  <span class="toctext">RaagMala</span></a></li></ul></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">L: feeling of flying/beyond pain</span></a></li> 
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span>  <span class="toctext">..ai: both male and female same</span></a></li></ul> 
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg" style="width: 72px;"/>
A tribute to Jassa Singh Ramgarhia \u262C<br/><br/> 
<span style="opacity: 0.2"><a href="#Day">Day</a>\xA0\xA0\xA0 <a href="#Night">Night</a></span></div></td></tr></tbody>`,h=m(),g=l("h3"),g.innerHTML='<span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">\u0A74</span></small></small></small></small><br/>\u0A30\u0A3E\u0A17\u0A2E\u0A3E\u0A32\u0A3E</span>',M=m(),H=l("ul"),f=l("li"),p=e("(1) "),T=l("b"),v=e("Bhairao \u{1F9D8}\u200D\u2640\uFE0F"),k=l("small"),S=l("small"),S.textContent=`(1 ${a[0][33][3]+a[0][33][4]})`,B=l("br"),xl=m(),n=l("p"),N=l("b"),N.textContent="Wives",Gl=e(": Bhairavi "),J=l("small"),V=l("small"),V.textContent=`(1 ${a[0][48][3]+a[0][48][4]})`,Al=e(`,
   `),E=l("u"),E.textContent="Bilawali",Kl=m(),O=l("small"),O.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",$l=e(`,
   Punyaki `),W=l("small"),W.innerHTML="<small>(1)</small>",Dl=e(`,
   `),z=l("u"),z.textContent="Bangli",wl=m(),Y=l("small"),Y.innerHTML="<small>(L \u263F\u{1F506})</small>",Il=e(", Aslekhi "),q=l("small"),q.innerHTML="<small>(Puniya?)</small>",jl=e("."),Nl=l("br"),Jl=m(),F=l("b"),F.textContent="Sons",Vl=e(": "),U=l("u"),U.textContent="Pancham",El=m(),Q=l("small"),Q.innerHTML="<small>(R0)</small>",Ol=e(`,
Harakh `),X=l("small"),X.innerHTML="<small>(R1)</small>",Wl=e(`,
              `),C=l("img"),Yl=m(),Z=l("u"),Z.textContent="Devsakh",ql=m(),tt=l("small"),tt.innerHTML="<small>(1 \u{1F31C}\u{1F505})</small>",Fl=e(`,
`),lt=l("u"),lt.textContent="Bangalam",Ul=m(),at=l("small"),at.innerHTML="<small>(L?)</small>",Ql=e(`,
Maadhmadhava `),et=l("small"),et.innerHTML="<small>(2 \u263F\u{1F31C})</small>",Xl=e(`,
`),nt=l("u"),nt.textContent="Lalit",Zl=m(),st=l("small"),it=l("small"),it.textContent=`(R3 ${a[0][12][3]}\u{1F505})`,ta=e(`,
Bilaval `),rt=l("small"),rt.innerHTML="<small>(1)</small>",la=e("."),aa=l("br"),ea=m(),mt=l("b"),mt.textContent="Retro",na=e(": Gauri "),ot=l("small"),ot.innerHTML="<small>(3 \u263F\u{1F31C})</small>",sa=e(`,
Ramkali `),ut=l("small"),ut.innerHTML="<small>(3 \u{1F31C}\u{1F505})</small>",ia=e(`,
Pahadi `),ct=l("small"),ct.innerHTML="<small>(R0)</small>",ra=e(`,
Malashree `),dt=l("small"),dt.innerHTML="<small>(R0 SP)</small>",ma=e(`,
Hamsadvani `),ht=l("small"),ht.innerHTML="<small>(R0?-R1?)</small>",oa=e(`,
Durga `),bt=l("small"),bt.innerHTML="<small>(R1 \u2642\u{1F505})</small>",ua=e(`,
Bhinna Shadja `),gt=l("small"),gt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ca=e(","),da=l("br"),ha=e(`
Jogkauns `),pt=l("small"),pt.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ba=e(`,
Hemant `),ft=l("small"),ft.innerHTML="<small>(R2 \u2642\u{1F505})</small>",ga=e(`,
Bihagaraa / Bihag `),Mt=l("small"),Mt.innerHTML="<small>(R1 \u2640\uFE0F\u{1FA90})</small>",pa=e("."),fa=l("br"),Ma=m(),vt=l("b"),vt.textContent="Combo",va=e(": Gauri Deepak / (Gauri Yeman)  "),_t=l("small"),_t.innerHTML="<small>(R1)</small>",_a=e(", Poorvi, Bairagi."),Ra=m(),ya=l("br"),La=m(),Rt=l("ul"),Rt.innerHTML="<li>(2) <b>Malkaus raga</b> \u{1F369}<small><small>(R2 \u2642\u{1F505})</small></small><br/></li>",Ha=m(),o=l("p"),yt=l("b"),yt.textContent="Wives",Ta=e(": Gaundkari "),Lt=l("small"),Lt.innerHTML="<small>(1 DR)</small>",ka=e(", Devgandhari "),Ht=l("small"),Ht.innerHTML="<small>(1)</small>",Sa=e(`,
  Gandhari `),Tt=l("small"),Tt.innerHTML="<small>(1)</small>",Ca=e(", Seehute, Dhanasri "),kt=l("small"),kt.innerHTML="<small>(2 \u{1F505}\u{1F31C})</small>",Ba=e("."),Pa=l("br"),xa=m(),St=l("b"),St.textContent="Sons",Ga=e(": Maru "),Ct=l("small"),Ct.innerHTML="<small>(2 \u{1F31C}\u{1FA90})</small>",Aa=e(", Marwa "),Bt=l("small"),Bt.innerHTML="<small>(R0)</small>",Ka=e(`,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad `),Pt=l("small"),Pt.innerHTML="<small>(Bhamarananda?)</small>",$a=e("."),Da=l("br"),wa=m(),xt=l("b"),xt.textContent="Retro",Ia=e(": Mali Gaura "),Gt=l("small"),At=l("small"),At.textContent=`(${a[0][29][2]+a[0][29][3],+a[0][29][4]})`,ja=e(", Suhi "),Kt=l("small"),Kt.innerHTML="<small>(1)</small>",Na=e(`,
 Puriya `),$t=l("small"),$t.innerHTML="<small>(R1)</small>",Ja=e(`.
`),Va=l("br"),Ea=m(),Dt=l("b"),Dt.textContent="Combo",Oa=e(": Dhanasri Ambika "),wt=l("small"),wt.innerHTML="<small>(1)</small>",Wa=e("."),za=m(),Ya=l("br"),qa=m(),It=l("ul"),It.innerHTML="<li>(3) <b>Hindol raga</b> \u{1F334}<br/></li>",Fa=m(),jt=l("p"),jt.innerHTML=`<b>Wives</b>: Tilangi <small><small>(3 \u2640\uFE0F\u{1FA90})</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br/> 
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u>  <small><small>(L \u{1F505}\u263F)</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br/> 
 <b>Other</b>: Kalavati <small><small>(R1 \u{1F31C}\u{1F506})</small></small>,`,Ua=m(),Qa=l("br"),Xa=m(),Nt=l("ul"),Nt.innerHTML="<li>(4) <b>Deepak raga</b> \u2764\uFE0F\u200D\u{1F525}<br/></li>",Za=m(),Jt=l("p"),Jt.innerHTML=`<b>Wives</b>: Kachheli,
  <u>Patmanjari</u>  <small><small>(2 \u{1F505}\u{1F31C})</small></small>,
   Todi <small><small>(1 \u{1FA99}\u2640\uFE0F)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   Gujri <small><small>(1)</small></small>.<br/> 
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u>  <small><small>(R1 \u2640\uFE0F\u{1FA90})</small></small>.<br/> 
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.`,te=m(),le=l("br"),ae=m(),Vt=l("ul"),Vt.innerHTML="<li>(5) <b>Sri raga \u26F5\u{1F49A}<small><small>(3 \u263F\u{1F31C})</small></small></b><br/></li>",ee=m(),u=l("p"),Et=l("b"),Et.textContent="Wives",ne=e(": Baradi / Varali / Bairari "),Ot=l("small"),Ot.innerHTML="<small>(2 \u2640\uFE0F\u{1FA99})</small>",se=e(", Karnati "),Wt=l("small"),Wt.innerHTML="<small>(0 DR)</small>",ie=e(`,
  Gavri `),zt=l("small"),zt.innerHTML="<small>(2 SP)</small>",re=e(", "),Yt=l("u"),Yt.textContent="Asavari",me=m(),qt=l("small"),qt.innerHTML="<small>(1 \u{1FA99}\u2640\uFE0F)</small>",oe=e(`,
   Sindhve / Sindhura `),Ft=l("small"),Ft.innerHTML="<small>(3 SP)</small>",ue=e("."),ce=l("br"),de=m(),Ut=l("b"),Ut.textContent="Sons",he=e(": "),Qt=l("u"),Qt.textContent="Salag",be=m(),Xt=l("small"),Xt.innerHTML="<small>(2 \u{1F31C}\u{1F506})</small>",ge=e(", "),Zt=l("u"),Zt.textContent="Sarang",pe=m(),tl=l("small"),ll=l("small"),ll.textContent=`(${a[0][14][2]+a[0][14][3]}\u{1F31C})`,fe=e(`,
Sagra `),al=l("small"),al.innerHTML="<small>(R0 GD)</small>",Me=e(`,
Gond `),el=l("small"),nl=l("small"),nl.textContent=`(1 \u{1F505}${a[0][27][4]})`,ve=e(", Gambhir, Gund, Kumbah "),sl=l("small"),sl.innerHTML="<small>(R2 MS)</small>",_e=e(`,
Hamir `),il=l("small"),il.innerHTML="<small>(R1 \u{1FA99}\u2640\uFE0F)</small>",Re=e("."),ye=m(),Le=l("br"),He=m(),rl=l("ul"),rl.innerHTML="<li>(6) <b>Megh \u2614<small><small>(L \u{1F505}\u{1F31C})</small></small></b><br/></li>",Te=m(),r=l("p"),ml=l("b"),ml.textContent="Wives",ke=e(": "),ol=l("u"),ol.textContent="Sorath",Se=m(),ul=l("small"),ul.innerHTML="<small>(R1 \u263F\u{1FA99})</small>",Ce=e(`,
  Gond `),cl=l("small"),cl.innerHTML="<small>(1)</small>",Be=e(`,
  `),dl=l("u"),dl.textContent="Malari",Pe=m(),hl=l("small"),hl.innerHTML="<small>(L \u263F\u{1F505}?)</small>",xe=e(`,
   Asa `),bl=l("small"),gl=l("small"),gl.textContent=`(R3 ${a[0][10][3]}\u{1F505})`,Ge=e(", Soohou "),pl=l("small"),pl.innerHTML="<small>(Puniya? or Soob)</small>",Ae=e("."),Ke=l("br"),$e=m(),fl=l("b"),fl.textContent="Sons",De=e(": Bayra-dhar, Gaj-dhar "),Ml=l("small"),Ml.innerHTML="<small>(1?)</small>",we=e(`,
Kedara `),vl=l("small"),vl.innerHTML="<small>(C0)</small>",Ie=e(", Jabli-dhar, Nat "),_l=l("small"),_l.innerHTML="<small>(R2 \u2642\u{1F505})</small>",je=e(`,
Jaldhar,
Shankara `),Rl=l("small"),Rl.innerHTML="<small>(R2 \u2640\uFE0F\u{1FA90})</small>",Ne=e(`,
Syama.`),Je=l("br"),Ve=m(),yl=l("b"),yl.textContent="Retro",Ee=e(": Vibhas "),Ll=l("small"),Ll.innerHTML="<small>(0)</small>",Oe=e("."),We=l("br"),ze=m(),Hl=l("b"),Hl.textContent="Combo",Ye=e(": Asa Aaswari (Sri) "),Tl=l("small"),Tl.innerHTML="<small>(1?)</small>",qe=e(", Tribungi, "),kl=l("u"),kl.textContent="Sorath",Fe=e(", Gujri (Deepak), Shalokh, Nat Bhariav."),Ue=m(),Qe=l("br"),Xe=m(),c=l("pre"),Ze=e(`
  0 \u{1F305} 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(\u{1F9D8}\u200D\u2640\uFE0F), Bhairao `),tn=e(An),ln=e(`, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (\u{1F9D8}\u200D\u2640\uFE0F) Gauri Bairagan \u2642\u{1FA99} (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})
																	'Ahir Bhairiv (\u{1F334}),
																	'Bhatiyar? (\u{1F369} \u263F\u{1F506})
																	Vibhas (\u2614 \u{1FA99}\u263F),
`),_=l("div"),_.textContent="I",an=e(`
1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (\u{1F9D8}\u200D\u2640\uFE0Ffocus, excesise, doing good), 'Bilawal `),en=e(Kn),nn=e(", Puniya, Bhairavi "),sn=e($n),rn=e(`
																Bairagi?
																Asavari (\u26F5 Renunciation and sacrifice)? `),mn=e(Dn),on=e(wn),un=e(`
																Gond (\u26F5 \u2614 \u{1F369}?)
																Devgandhari (\u{1F369}), Suhi \u{1F31C}\u{1F506},
																'Malaar? (\u2614),  Basant Mukhari?
																'Sevari (\u0A38\u0A40) (compassion, mercy - grey),
																Gujri? (\u2764\uFE0F\u200D\u{1F525}) `),cn=e(In),dn=e(`, 'Todi \u{1FA99}\u2640\uFE0F)?,

 Action - Study -- IMprove self
`),R=l("div"),R.textContent="2",hn=e(`
2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(\u{1F9D8}\u200D\u2640\uFE0F) \u263F\u{1F31C},
																  'Pilu \u2640\uFE0F\u{1FA90}, (\u0A15\u0A3E/Green) Vadhans \u2642\u{1F31C}, Suha Sughrai \u{1F31C}\u{1F506}, Bhimpalasi (\u2642\u{1F506})
																  Tilang (\u{1F334}) \u2640\uFE0F\u{1FA90},    11  1:50   12:42>
																  Patmanjari,(\u2764\uFE0F\u200D\u{1F525} SP)
																  Dhanshri (\u{1F369} \u{1F505}\u{1F31C}),  Maru \u{1F31C}\u{1FA90}?, Mali Gaura `),bn=e(jn),gn=e(`
																  Salag (\u26F5\u{1F31C}\u{1F506}), Bairari `),pn=e(Nn),fn=e(", Sarang "),Mn=e(Jn),vn=e(`\u{1F31C}

`),y=l("div"),y.textContent="\u2162",_n=e(`
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
																Pancham(\u{1F9D8}\u200D\u2640\uFE0F) `),Rn=e(Vn),yn=e(`, Pahadi Bhupali (PS),
																Malashree? (\u{1F9D8}\u200D\u2640\uFE0F SP)
																Pahadi Ramgiri?? Hamsadvani?, (\u{1F9D8}\u200D\u2640\uFE0F)
																Marwa?(\u{1F369})  Mali Gaura \u263F\u{1F31C},
																'Yaman (\u2764\uFE0F\u200D\u{1F525}),
																Gorakh Kalyan (\u0A39\u0A3F\u0A70)
																Shri, (\u0A36)
																Gauri Poorvi?, (\u0A2D\u0A47,\u{1F30C},\u2764\uFE0F\u200D\u{1F525})

R1 8.24 PM - 10.48 PM pradosa \u263E1              8 -10:30      K
`),P=l("div"),P.textContent=`
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
`,Ln=e(`

L - Bengali / Bangla (\u0A2D\u0A47) `),Hn=e(En),Tn=e(`

`),kn=m(),$=l("div"),$.innerHTML=`Legend<br/>
  \u2614 Megh<br/>
  \xA0\u25E6\xA0\xA0Ignore underlines and \`&#39;s`,d(b,"clear","right"),d(b,"margin-bottom",".5em"),d(b,"float","right"),d(b,"padding",".5em 0 .8em 1.4em"),d(b,"background","none"),d(b,"width","auto"),L(b,"cellspacing","0"),L(b,"cellpadding","0"),d(g,"margin-bottom","28px"),qn(C.src,zl="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG")||L(C,"src",zl),d(C,"vertical-align","middle"),d(C,"width","30px"),d(_,"position","absolute"),d(_,"font-size","6em"),d(_,"margin-top","30px"),d(_,"margin-left","10px"),d(_,"color","gold"),d(_,"opacity","0.2"),d(R,"position","absolute"),d(R,"font-size","6em"),d(R,"margin-top","30px"),d(R,"margin-left","10px"),d(R,"color","gold"),d(R,"opacity","0.2"),d(y,"position","absolute"),d(y,"font-size","6em"),d(y,"margin-top","30px"),d(y,"margin-left","10px"),d(y,"color","gold"),d(y,"opacity","0.2"),d(P,"background-image","url('blues.jpg')"),L(P,"id","Night"),d(c,"background-color","#2727da"),d(c,"padding","10px"),L(c,"id","Day"),d($,"background-color","#3eab7e"),L(s,"class","svelte-t6r88k"),L(i,"data-theme","retro"),L(i,"lang","en")},m(Sl,On){Un(Sl,i,On),t(i,s),t(s,b),t(s,h),t(s,g),t(s,M),t(s,H),t(H,f),t(f,p),t(f,T),t(T,v),t(T,k),t(k,S),t(f,B),t(s,xl),t(s,n),t(n,N),t(n,Gl),t(n,J),t(J,V),t(n,Al),t(n,E),t(n,Kl),t(n,O),t(n,$l),t(n,W),t(n,Dl),t(n,z),t(n,wl),t(n,Y),t(n,Il),t(n,q),t(n,jl),t(n,Nl),t(n,Jl),t(n,F),t(n,Vl),t(n,U),t(n,El),t(n,Q),t(n,Ol),t(n,X),t(n,Wl),t(n,C),t(n,Yl),t(n,Z),t(n,ql),t(n,tt),t(n,Fl),t(n,lt),t(n,Ul),t(n,at),t(n,Ql),t(n,et),t(n,Xl),t(n,nt),t(n,Zl),t(n,st),t(st,it),t(n,ta),t(n,rt),t(n,la),t(n,aa),t(n,ea),t(n,mt),t(n,na),t(n,ot),t(n,sa),t(n,ut),t(n,ia),t(n,ct),t(n,ra),t(n,dt),t(n,ma),t(n,ht),t(n,oa),t(n,bt),t(n,ua),t(n,gt),t(n,ca),t(n,da),t(n,ha),t(n,pt),t(n,ba),t(n,ft),t(n,ga),t(n,Mt),t(n,pa),t(n,fa),t(n,Ma),t(n,vt),t(n,va),t(n,_t),t(n,_a),t(s,Ra),t(s,ya),t(s,La),t(s,Rt),t(s,Ha),t(s,o),t(o,yt),t(o,Ta),t(o,Lt),t(o,ka),t(o,Ht),t(o,Sa),t(o,Tt),t(o,Ca),t(o,kt),t(o,Ba),t(o,Pa),t(o,xa),t(o,St),t(o,Ga),t(o,Ct),t(o,Aa),t(o,Bt),t(o,Ka),t(o,Pt),t(o,$a),t(o,Da),t(o,wa),t(o,xt),t(o,Ia),t(o,Gt),t(Gt,At),t(o,ja),t(o,Kt),t(o,Na),t(o,$t),t(o,Ja),t(o,Va),t(o,Ea),t(o,Dt),t(o,Oa),t(o,wt),t(o,Wa),t(s,za),t(s,Ya),t(s,qa),t(s,It),t(s,Fa),t(s,jt),t(s,Ua),t(s,Qa),t(s,Xa),t(s,Nt),t(s,Za),t(s,Jt),t(s,te),t(s,le),t(s,ae),t(s,Vt),t(s,ee),t(s,u),t(u,Et),t(u,ne),t(u,Ot),t(u,se),t(u,Wt),t(u,ie),t(u,zt),t(u,re),t(u,Yt),t(u,me),t(u,qt),t(u,oe),t(u,Ft),t(u,ue),t(u,ce),t(u,de),t(u,Ut),t(u,he),t(u,Qt),t(u,be),t(u,Xt),t(u,ge),t(u,Zt),t(u,pe),t(u,tl),t(tl,ll),t(u,fe),t(u,al),t(u,Me),t(u,el),t(el,nl),t(u,ve),t(u,sl),t(u,_e),t(u,il),t(u,Re),t(s,ye),t(s,Le),t(s,He),t(s,rl),t(s,Te),t(s,r),t(r,ml),t(r,ke),t(r,ol),t(r,Se),t(r,ul),t(r,Ce),t(r,cl),t(r,Be),t(r,dl),t(r,Pe),t(r,hl),t(r,xe),t(r,bl),t(bl,gl),t(r,Ge),t(r,pl),t(r,Ae),t(r,Ke),t(r,$e),t(r,fl),t(r,De),t(r,Ml),t(r,we),t(r,vl),t(r,Ie),t(r,_l),t(r,je),t(r,Rl),t(r,Ne),t(r,Je),t(r,Ve),t(r,yl),t(r,Ee),t(r,Ll),t(r,Oe),t(r,We),t(r,ze),t(r,Hl),t(r,Ye),t(r,Tl),t(r,qe),t(r,kl),t(r,Fe),t(s,Ue),t(s,Qe),t(s,Xe),t(s,c),t(c,Ze),t(c,tn),t(c,ln),t(c,_),t(c,an),t(c,en),t(c,nn),t(c,sn),t(c,rn),t(c,mn),t(c,on),t(c,un),t(c,cn),t(c,dn),t(c,R),t(c,hn),t(c,bn),t(c,gn),t(c,pn),t(c,fn),t(c,Mn),t(c,vn),t(c,y),t(c,_n),t(c,Rn),t(c,yn),t(c,P),t(c,Ln),t(c,Hn),t(c,Tn),t(s,kn),t(s,$)},p:G,i:G,o:G,d(Sl){Sl&&xn(i)}}}function cs(a){return Zn(()=>{console.log("yepppi")}),[[["Sri","\u26F5","\u2162","\u2642","\u{1F31C}"],["Asavari","\u26F5","I","\u{1FA99}","\u2640\uFE0F"],["Kalyana / Yaman","\u2764\uFE0F\u200D\u{1F525}","R0","\u2640\uFE0F","\u{1FA90}"],["Bilawali","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1FA99}","\u2640\uFE0F"],["Bangli","\u{1F9D8}\u200D\u2640\uFE0F","L","\u263F","\u{1F506}"],["Pancham","\u{1F9D8}\u200D\u2640\uFE0F","R0","\u2642","\u{1F506}"],["Sorath","\u2614","RI","\u2642","\u{1FA99}"],["Malaar","\u2614","L","\u263F","\u{1F506}"],["Megh","\u2614","L","\u{1F506}","\u{1F31C}"],["Basant","\u{1F334}","L","\u{1F505}","\u263F","\u{1F505}\u{1F31C}?"],["Asa","\u2614","R\u2162","\u263F","\u{1F506}"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Lalit","\u{1F9D8}\u200D\u2640\uFE0F","R\u2162","\u263F","\u{1F506}"],["Gauri","\u{1F9D8}\u200D\u2640\uFE0F","\u2162","\u2642","\u{1F31C}","R0?"],["Sarang","\u26F5","2","\u2642","\u{1F31C}","I?"],["Patmanjari","\u2764\uFE0F\u200D\u{1F525}","2","\u{1F505}","\u{1F31C}"],["Salag","\u26F5","2","\u{1F31C}","\u{1F506}"],["Gujri","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Maajh","\u{1F334}","\u2162","\u2642","\u{1F506}","R0?"],["Devgandhari","\u{1F369}","2","\u{1F31C}","\u{1F506}","Also Kafi"],["Bihagara","\u{1F9D8}\u200D\u2640\uFE0F","RI","\u2640\uFE0F","\u{1FA90}"],["Vadhans","\u0A15","R2","\u{1F506}","\u2642"],["Jaitsri","\u{1F30C}","\u2162","\u2640\uFE0F","\u{1FA90}","R0?, \u0A2E\u0A3E \u0A36???"],["Todi","\u2764\uFE0F\u200D\u{1F525}","I","\u{1FA99}","\u2642"],["Bairari","\u26F5","2"," \u2640\uFE0F"," \u{1FA99}"],["Tilang","\u200D\u{1F334}","2","\u2640\uFE0F","\u{1FA90}","\u2642\u{1FA90}?"],["Suhi","\u{1F369}","I","\u{1F31C}","\u{1F506}"],["Gond","\u26F5 \u2614 \u{1F369}","I","\u{1F506}","\u263F"],["Ramkali","\u{1F9D8}\u200D\u2640\uFE0F","R\u2162","\u{1F31C}","\u{1F506}","\u{1F31C}\u263F?"],["Mali Gaura","\u{1F369}","\u2162","\u2642","\u{1F31C}"],["Maru","\u{1F369}","2","\u2640\uFE0F","\u{1FA90}",["\u{1F31C}\u{1FA90}?"]],["Tukhari","\u2764\uFE0F\u200D\u{1F525}","\u2162","\u{1F31C}","\u200D\u{1F506}"],["Kedara","\u2614","R0"," \u2640\uFE0F","\u{1F506}"],["Bhairao","\u{1F9D8}\u200D\u2640\uFE0F","0","\u{1FA99}","\u2642"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Kanra","\u2764\uFE0F\u200D\u{1F525}","RI","\u{1F31C}","\u{1F506}"],["Nat Naryan","\u2614","RI","\u{1F31C}","\u263F","R2?"],["Prabhati","\u0A15","R\u2162","\u{1F505}","\u{1F31C}","0\u{1F9D8}\u200D\u2640\uFE0F?"],["Durga","\u{1F9D8}\u200D\u2640\uFE0F","RI"," \u2642"," \u{1F505}","R2?"],["Jaijaivanti","\u{1F334}","RI","\u2642","\u{1F31C}"],["Patdeep","\u0A15","II","\u{1F31C}","\u{1F506}"],["Tilak","\u{1F334}","RI","\u{1F506}","\u{1F31C}"],["Kamoda","\u{1F334}","R0","\u{1F31C}","\u2642"],["Saraswati (\u0A35","\u{1F48A}","RI","\u{1F31C}","\u{1F6B9}"],["Chandrakauns","\u0A1A","R2","\u263F","\u{1F506}"],["Charukeshi","-","2","\u{1F31C}","\u{1F506}"],["Jog","\u0A15","RI","\u263F","\u{1F506}"],["Kaunsi","\u0A15","R2","\u{1F31C}","\u{1F506}"],["Bhairavi","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}","used to conclude a concert"],["Abhogi","\u0A15","RI","\u263F","\u{1F506}","peaceful sleep"],["Devsakh","\u{1F9D8}\u200D\u2640\uFE0F","I","\u{1F31C}","\u{1F506}"],["Puniya","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}"],["Adana","\u26F5","R2","\u{1F506}","\u{1F31C}"],["Hindol","\u{1F334}","R\u2162","\u{1FA99}","\u2640\uFE0F"],["","\u{1F9D8}\u200D\u2640\uFE0F","I","\u263F","\u{1F506}"]]]}class ds extends os{constructor(i){super(),ms(this,i,cs,us,Yn,{})}}new ds({target:document.body});
