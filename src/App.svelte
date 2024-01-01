<script>
import { onMount } from 'svelte';

/*
Legend
1 - First Pahar (sunrise/sunset)
2 - Second/Onset Pahar
3 - Third/Middle Pahar
4 - Fourth/Offset Pahar
⛵ - Shri thaat 🌴 - Hindol thaat
🌌 - Purvi thaat
💊 - Vachaspati thaat
🧘‍♀️ - Bhairao thaat
🔅 - Sa vadi/samvadi
🌜 - Pa vadi/samvadi turquoise
♂ - Re vadi/samvadi blue red yellow?
☿ - Ma vadi/samvadi  cyan blue
♀️ - Ga vadi/samvadi
🪐 - Ni vadi/samvadi
🪙 - Da vadi/samvadi
 */
 let data = [['Sri', '⛵', '4', '♂', '🌜'],
             ['Asavari', '⛵', '2', '🪙','♀️'],
             ['Kalyana / Yaman', '🪘', 'R1', '♀️','🪐'],
             ['Bilawali', '🧘‍♀️', '2', '🪙','♀️'],
             ['Bangli', '🧘‍♀️', 'L', '☿','🔆'],
             ['Pancham', '🧘‍♀️', 'R1', '♂','🔆'], // 5
             ['Sorath', '☔', 'R2', '♂','🪙'],
             ['Malaar', '☔', 'L', '☿','🔆'],
             ['Megh', '☔', 'L', '🔆','🌜'],
             ['Basant', '🌴', 'L', '🔅','☿', '🔅🌜?'],
             ['Asa', '☔', 'R4', '☿','🔆'], // 10
             ['Devsakh', '🧘‍♀️', '2', '🌜','🔆'],
             ['Lalit', '🧘‍♀️', 'R4', '☿','🔆'],
             ['Gauri', '🧘‍♀️', '4', '♂','🌜', 'R1?'],
             ['Sarang', '⛵', '3', '♂','🌜', '2?'],
             ['Patmanjari', '🪘', '3', '🔅','🌜'], // 15
             ['Salag', '⛵', '3', '🌜','🔆'],
             ['Gujri', '🪘', '2', '🪙','♂'],
             ['Maajh', '🌴', '4', '♂','🔆', 'R1?'],
             ['Devgandhari', '🎶', '3', '🌜','🔆', 'Also Kafi'],
             ['Bihagara', '🧘‍♀️', 'R2', '♀️','🪐'], // 20
             ['Vadhans', 'ਕ', 'R3', '🔆','♂'],
             ['Jaitsri', '🌌', '4', '♀️','🪐', 'R1?, ਮਾ ਸ਼???'],
             ['Todi', '🪘', '2', '🪙','♂'],
             ['Bairari', '⛵', '3', ' ♀️',' 🪙'],
             ['Tilang', '‍🌴', '3', '♀️','🪐', '♂🪐?'], // 25
             ['Suhi', '🎶', '2', '🌜','🔆'],
             ['Gond', '⛵ ☔ 🎶', '2', '🔆','☿'],
             ['Ramkali', '🧘‍♀️', 'R4', '🌜','🔆', '🌜☿?'],
             ['Mali Gaura', '🎶', '4', '♂','🌜'],
             ['Maru', '🎶', '3', '♀️','🪐', ['🌜🪐?']], // 30
             ['Tukhari', '🪘', '4', '🌜','‍🔆'],
             ['Kedara', '☔', 'R1', ' ♀️','🔆'],
             ['Bhairao', '🧘‍♀️', '1', '🪙','♂'],
             ['Nat Naryan', '☔', 'R2', '🌜','☿', 'R3?'],
             ['Kanra', '🪘', 'R2', '🌜','🔆'], // 35
             ['Nat Naryan', '☔', 'R2', '🌜','☿', 'R3?'],
             ['Prabhati', 'ਕ', 'R4', '🔅','🌜', '1🧘‍♀️?'],
             ['Durga', '🧘‍♀️', 'R2', ' ♂',' 🔅', 'R3?'],
             ['Jaijaivanti', '🌴', 'R2', '♂','🌜'],
             ['Patdeep', 'ਕ', '3', '🌜','🔆'], // 40
             ['Tilak', '🌴', 'R2', '🔆','🌜'],
             ['Kamoda', '🌴', 'R1', '🌜','♂'],
             ['Saraswati (ਵ', '💊', 'R2', '🌜','🚹'],
             ['Chandrakauns', 'ਚ', 'R3', '☿','🔆'],
             ['Charukeshi', '-', '3', '🌜','🔆'], // 45
             ['Jog', 'ਕ', 'R2', '☿','🔆'],
             ['Kaunsi', 'ਕ', 'R3', '🌜','🔆'],
             ['Bhairavi', '🧘‍♀️', '2', '☿','🔆', 'used to conclude a concert'],
             ['Abhogi', 'ਕ', 'R2', '☿','🔆', 'peaceful sleep'],
             ['Devsakh', '🧘‍♀️', '2', '🌜','🔆',], // 50
             ['Puniya', '🧘‍♀️', '2', '☿','🔆'],
             ['Adana', '⛵', 'R3', '🔆','🌜'],
             ['Hindol', '🌴', 'R4', '🪙','♀️'],
             ['Deshkar', '‍🧘‍♀️', '1', '🪙','♀️'],
             ['Kalingada', '‍🧘‍♀️', 'R4', '🌜','🔆', '♀️,🪙,☿? R4?'], // 55
             ['Chhayanat', '🪘', 'R2', '🌜','♂'],
             ['Desh', '🪘', 'R3', '♂','🌜', '🌴-Khamoj'],
             ['Gara', '🪘', 'R2', '♀️','🪐', '🌴-Khamoj/Kafi?'],
             ['Gunakeli', '🧘‍♀️', '1', '🪙','♂'],
             ['Sohini', '🎶', 'R4', '🪙','♀️'], // 60
             ['Khokar', '🎶', '2', '♂','🌜'],
             ['Multani', '🪘', '2', '♀️','🪐'],
             ['', '🧘‍♀️', '3', '♀️','🪐'],

           ];
</script>

<html data-theme="retro" lang="en">
<body>


<table style="clear: right; margin-bottom: .5em; float: right; padding: .5em 0 .8em 1.4em; background: none; width: auto;" cellspacing="0" cellpadding="0">
<tbody><tr>
<td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox" style="display:none"><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading"><a href="#Legend"></a></h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber"></span> <span class="toctext"><span style="font-family: 'Fish&Chips'">Raːgsalotar</span></span></a>
<ul style="font-size:0.4em">
<li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">eg.</span><br /> <span class="toctext">Devsakh for clarity / teachings, desire to exercise, goodness</span></a></li>
<li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="toctext"></span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span> <span class="toctext">Look up image by typing rag name followed by ra:gamala on Google</span></a></li>
</li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext"><span style="font-family:cursive"><em>n</em></span>: quarter of day</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext"><span style="font-family:cursive">R</span>: night</span></a></li>

<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext">L: feeling of flying ∨ beyond pain<!--greatness:flying feeling and removing pain (also rain)--></span></a></li>
</ul>

<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg"
style="position: absolute; width: 302px; margin-left: 300;  margin-top:230px;margin-bottom:5px;"
/>
<br />
<section style="font-size:0.4em">
<section style="font-size:2.2em">
A tribute to Waheguru ji's Jassa Singh Ramgarhia<br />
Leader of Dal Khalsa (1752 - 1803)<span title="Rough estimate:- Wikipedia  https://en.wikipedia.org/wiki/Jassa_Singh_Ramgarhia. Retrieved June 2023">¹</span><br />
</section>
<span style="font-size: 0.8em;" title="s/o">ibn</span> <p style="font-size: 0.8em;">Baba Hardas Singh<br />
<i>Known for making arrows, swords <br />
and many other arms for the Sikh Forces</i><span title="Discover Sikhism. Sikh Warriors. Sardar Jassa Singh Ramgarhia https://www.discoversikhism.com/sikhs/sardar_jassa_singh_ramgarhia.html">²</span>&nbsp; ☬</p>
</section>

<img src="https://www.discoversikhism.com/images/sikhism/sardar_jassa_singh_ramgarhia6.jpg"
style="position: absolute; width: 72px;margin-top:-30px;margin-bottom:5px;opacity:0.5;"
title="Discover Sikhism. Sikh Warriors. Sardar Jassa Singh Ramgarhia https://www.discoversikhism.com/sikhs/sardar_jassa_singh_ramgarhia.html. 'Known for making arrows, swords and many other arms for the Sikh Forces'"/>

<br />
<div style="position: relative;
    display: block;
    top: 4px;
    left: -51px;
    font-size: 0.7em;
    opacity: 0.2;">Jump to:</div>
<span style="opacity: 0.2">
<a href="#Day">&nbsp;&nbsp;Day</a>&nbsp;&nbsp; <a href="#Night">Night</a>  <!--&nbsp;&nbsp;&nbsp; <a href="#Night">Name</a>-->
<br />
<a href="#Day">
<img style="width: 19px;
    display: inline-block;
    margin: 15px;margin-top:0px;"  src="https://image1.masterfile.com/getImage/NjAwLTA2MTcwMzg3ZW4uMDAwMDAwMDA=AG7l5Z/600-06170387en_Masterfile.jpg"/>
</a>
<a href="#Night">
<img style="width: 19px;
    display: inline-block;
    margin: 15px;hue-rotate(12deg);margin-top: 0px;margin-left: 5px;" src="https://image.made-in-china.com/201f0j00RyOiHIFPrDbv/High-Reflection-Factory-Price-Custom-Supplier-Waterproofd-Europe-Standard-Aluminum-Message-Road-Reflective-Traffic-Safety-Warning-Sign.jpg">
</a>
<br />
<section style="font-size:0.4em;margin-top:-90px;">
<svg viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="#1">
    <text x="0" y="114" text-anchor="middle">1</text>
  </a>
  <a href="#2">
    <text x="20" y="110" text-anchor="middle">2</text>
  </a>
  <a href="#3">
    <text x="40" y="100" text-anchor="middle">3</text>
  </a>
  <a href="#R4">
    <text x="80" y="110" text-anchor="middle">R4</text>
  </a>
  <a href="#4">
    <text x="60" y="110" text-anchor="middle">4</text>
  </a>
  <a href="#R1">
    <text x="50" y="120" text-anchor="middle">R1</text>
  </a>
  <a href="#R2">
    <text x="70" y="130" text-anchor="middle">R2</text>
  </a>
  <a href="#R3">
    <text x="75" y="120" text-anchor="middle">R3</text>
  </a>

</svg>
</section>
</span>
</div>

</td></tr></tbody></table>
<h3 style="margin-bottom:28px"><span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold" title="Ragmala"></span></small></small></small></small><br />
</span></h3>
<br />





<img title="A Malkauns ragamala painting" src="https://media.mutualart.com/Images/2021_01/27/15/154718976/51c909d3-1030-4ec9-8555-d95d44383ab7.Jpeg"
style="vertical-align: middle;width:100px"
/>
<ul><li><b style="color:rgb(255 218 0);font-family: 'Fish&Chips'">Malkaus</b> 🎶 <small><small>(R3 ♂🔅 Rut 5🍂)</small></small><br></li></ul>
<p><b>Wives</b>: Gaundkari <img style="position: absolute; opacity:0.6" src="media/malkaus/gunkali- 0.png" title="gondkari" width="190px"><small><small>(2 DR)</small></small>, Devgandhari<img style="position: absolute; left: 200px;
    top: 160px; opacity:0.6" src="media\malkaus\Deva Gandhar-0.png" title="devgandhari" width="190px"> <small><small>(2 🌜🔆)</small></small>,
  Gandhari <small><small>(2)</small></small>, Seehute, <span style="color:rgb(255 218 0)">Dhanasri</span> <small><small>(3 🔅🌜)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(3 🌜🪐 Rut 5🍂)</small></small>, Marwa <small><small>(R1 🪙♂)</small></small>,
Parbal Chand, Kausak <small><small>(R2)</small></small>, Ubara, Khokar <img style="position: absolute; left: 660px; opacity:0.6" src="media\malkaus\Kakubh- 0.png" title="khokar" width="190px"> <small><small>({data[61][2]+" "+data[61][3]}{data[61][4]})</small></small>, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Other</b>: Bhatiyar <small><small>(1 ☿🔆)</small></small>, Gunkali <small><small>(1 🪙♂)</small></small><br />
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+" "+data[29][3]}{data[29][4]} Rut 5🍂)</small></small>, Suhi <small><small>(2)</small></small>, Sohini <small><small>({data[60][2]+" "+data[60][3]}{data[60][4]})</small></small>,
 Puriya <small><small>(R2)</small></small>.
<br>
<b>Combo</b>: Dhanasri Ambika <small><small>(2)</small></small>.
<!--<b>Retro</b>: <small><small>(2)</small></small>.-->
</p>
<br />
<br />
<img src="https://intergentes.com/wp-content/uploads/2020/12/islamic.jpg"
style="vertical-align: middle;width:30px"
/>
<ul><li><b style="color:rgb(14 255 117);font-family: 'Fish&Chips'">Hindol</b> <span title="🌴 - related to particular place or thing">🌴</span><br></li></ul>
<p><b>Wives</b>: Tilangi <small><small>(4 ♀️🪐)</small></small>,
  Devkari / Jayavati (<small><small>R2</small></small>),<img style="position: absolute;     opacity: 0.5;
    top: 458px;
    left: 191px;" src="media\hindol\Devagiri.png" width="190px" title="devgiri"> <u>Basanti<img style="position: absolute;     opacity: 0.5;
      top: 458px;
      left: 391px;" src="media\hindol\vasant - 0.png" title="vasant" width="190px"></u>, Sindhoori ∨ Sindhuri, Ahiri <small><small>(1)</small></small>.<br>
<b>Sons</b>: Suryakant, Bhasker, Chandra-Bimb,
Mangalan (Mangal), Saras-baan, Binoda,
 <u>Basant</u> <small><small>(L 🔅☿)</small></small>,
 Kamoda <small><small>(R1? R2? 🌜♂)</small></small>.
 <br />
 <b>Other</b>: Kalavati <small><small>(R2 🌜🔆5️⃣)</small></small>, Khamaj (R2 ♀️🪐), Desh <small><small>({data[56][2]+" "}{data[56][3]}{data[56][4]}).</small></small>
</p>
<br />
<ul><li><b style="color:#ff0e0e;font-family: 'Fish&Chips'">Deepak</b> <span title="🪘 - related to abundant physical sensations, touch, and presence">🪘</span><br></li></ul>
<p><b>Wives</b>: Kachheli (R3),
  <u>Patmanjari</u> <small><small>(3 🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>)</small></small>,
   Todi <small><small>(2 🪙♀️)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span> <small><small>(2 🪙♂)</small></small>.<br>
<b>Sons</b>: Kalanka (R4 🔆🌜), Kuntal, Rama, Kamal-Kusum,
Chamak <small><small>(R2 ☿🔆)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana ∨ Yaman</u> <small><small>(R2 ♀️🪐)</small></small>.<br>
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika ∨ Madhuvanti <small><small>(4)</small></small><br>
<b>Other</b>: Chhayanat <small><small>({data[56][2]+" "}{data[56][3]}{data[56][4]})</small></small>, Multani <small><small>({data[62][2]+" "}{data[62][3]}{data[62][4]})</small></small>.
</p>
<br />
<br />
<img src="https://chandrakantha.com/raga_raag/asavari/asawari.jpg" title="Mewar"
style="vertical-align: middle;width:30px"
/>


<ul><li><b style="color:cyan;font-family: 'Fish&Chips'">Megh <span title="☔ - feeling momentum or progress and dispelling pain">☔</span> <small><small>(L 🔅🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: <u>Sorath</u> <small><small>(R2 ☿🪙 Rut 4🍂)</small></small>,
  Gond <small><small>(2)</small></small>,
  <u>Malari</u> <small><small>(R3 ☿🔅)</small></small>,
   Asa <small><small>(R4 {data[10][3]}🔅)</small></small>, Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(2?)</small></small>,
Kedara <small><small>(R1)</small></small>, Jabli-dhar, Nat <small><small>(R3 ♂🔅)</small></small>,
Jaldhar,
Shankara <small><small>(R2-R3? ☔/🪘/🧘‍♀️ ♀️🪐)</small></small>,
Syama.<br />
<b>Retro</b>: Vibhas <small><small>(1)</small></small>.<br>
<b>Combo</b>: Asa Aaswari (Sri) <small><small>(2?)</small></small>, Tribungi, <span title="Nearness of Guru">Gujri</span> (Deepak), Shalokh, Nat Bhariav.
<!-- Nice mixes: Tribungi, Sorath!, Gujri, Shalokh -->
</p>
<br />

<br />
<img src="data:image/jpeg;base64,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"
style="vertical-align: middle;width:100px" title="Bhairao thaat related to gains and losses"
/>
<ul><li><b style="color:#f2f2f2;font-family: 'Fish&Chips'">Bhairao <span title="🧘‍♀️ - related to countable gains and fruits of devotion">🧘‍♀️</span> <small><small>(2 {data[33][3]+data[33][4]})</small></small></b><br></li></ul>
<p><b>Wives</b>: Bhairavi <small><small>(2 {data[48][3]+data[48][4]})</small></small>,
   <u title="Overcoming desire To share whatever">Bilawali</u> <small><small>(2 🪙♀️)</small></small>,
   <span title="Good deeds">Punyaki</span> <small><small>(2)</small></small>,
   <u>Bangli</u> <small><small>(L ☿🔆)</small></small>, Aslekhi <small><small>(Puniya?)</small></small>.<br>
<b>Sons</b>: <u>Pancham</u> <small><small>(R1)</small></small>,
<span title="Having a piece of divine">Harakh</span> <small><small>(R2)</small></small>,
<u style="color:#f2f2f2" title="Excersise and Strength">Devsakh</u> <small><small>(2 🌜🔅)</small></small>,
<u>Bangalam</u> <small><small>(L?)</small></small>,
<u>Madhumadhvi</u> <small><small>(3 ☿🌜)</small></small>,
<u title="Time with love getting shorter and shorter">Lalit</u> <small><small>(R4 {data[12][3]}🔅)</small></small>,
Bilaval <small><small>(2 🪙♀️)</small></small>.<br>
<b>Retro</b>: Gunakeli <small><small>(1 {data[59][3]+data[59][4]})</small></small>, Gauri <small><small>(4 ☿🌜7 Rut 5🍂️⃣)</small></small>
Ramkali <small><small>(R4 🌜🔅7️⃣)</small></small>,
<u>Pahadi</u> <small><small>(R1)</small></small>,
Malashree <small><small>(R1 SP Rut 5🍂<span title="S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3️⃣</span>)</small></small>,
Hamsadvani <small><small>(R1?-R2?)</small></small>,
Durga <small><small>(R2 ♂🔅)</small></small>,<br />
Bhinna Shadja <small><small>(R3 ♂🔅)</small></small>,
Jogkauns <small><small>(R3 ♂🔅)</small></small>,
Hemant <small><small>(R3 ♂🔅<span title="S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)</small></small>,
Bihagaraa ∨ Bihag <small><small>(R2 ♀️🪐)</small></small>.<br>

<b>Other</b>: Deshkar <small><small>({data[54][2]+" "+data[54][3]}{data[54][4]})</small></small>,
<br>

<b>Combo</b>: Gauri Deepak ∨ (Gauri Yeman)  <small><small>(R2)</small></small>, <span title="Fulfillment">Poorvi</span>, Bairagi.
</p>
<br />


<ul><li><b style="color:#9a0fff;font-family: 'Fish&Chips'">Sri raga <span title="⛵ - feeling of movement">⛵</span> <small><small>(4 ☿🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: Baradi ∨ Varali ∨ Bairari <small><small>(3 ♀️🪙 Rut 4🍂)</small></small>, Karnati <small><small>(1 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(3 SP)</small></small>, <u style="color:#9a0fff">Asavari</u> <small><small>(2 🪙♀️ 5️⃣-7️⃣)</small></small>,
   Sindhve ∨ Sindhura <small><small>(4 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(3 🌜🔆)</small></small>, <u style="color:#9a0fff">Sarang</u> <small><small>({data[14][2]+data[14][3]}🌜)</small></small>,
Sagra <small><small>(R1 GD)</small></small>,
Gond <small><small>(2 🔅{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R3 MS)</small></small>,
Hamir <small><small>(R2 🪙♀️)</small></small>.
</p>
<b>Others</b>: Khat <small><small>(R2)</small></small>, Charukesi <small><small>(R3 ♀️🪙)</small></small>, Jaunpuri <small><small>(2 🪙♀️)</small></small><br><br />

<!-- raag names
https://www.pinterest.ca/maitrey0635/ragamala/
https://raagtime.com/
-->
<img style="width:101px;opacity:0.5;margin:auto;" src="data:image/jpeg;base64,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" />

<pre style="background-color:rgb(255 0 0 / 30%);padding:10px;" id="Day">
<section style="filter: sepia(0.4);">
  1 🌅 1 ~6 a.m. -  الفجر - 8.24 a.m. <span id="1" style="font-family: 'Fish&Chips'">prata</span>  1   (Day time)                 <span>K</span>
																	'Jogiya(🧘‍♀️), Bhairao {data[33][3]+data[33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Gunakeli <small><small>{data[59][3]+data[59][4]})</small></small>, Deshkar {data[54][3]+data[54][4]}
																	Devgiri Bilawal? (🧘‍♀️) Gauri Bairagan ♂🪙 (ਭੇ,🌌<span style="color:black">—</span>,🪘<span style="color:rgb(255, 14, 14)">—</span>)
																	<span style="color:rgb(14 255 117)">'Ahir Bhairiv (🌴), </span>,
																	<span style="color:rgb(255 218 0)">'Bhatiyar? (🎶) ☿🔆, Gunkali 🪙♂</span>
																	<span style="color:cyan">Vibhas (☔ 🪙☿),</span>
</section>
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:'Fish&Chips';">2</div>
2 ~8:24 a.m. - 10:48 a.m. <span id="2" style="font-family: 'Fish&Chips'">purvahna</span>               7:30 11:30        P
																Devsakh (🧘‍♀️focus, excesise, doing good 🌜🔆), 'Bilawal {data[3][3] + '' + data[3][4]}, Puniya, Bhairavi {data[48][3] + data[48][4]}
																Bairagi?
																<span style="color:#9a0fff">Asavari (⛵ Renunciation and sacrifice)? {data[1][3]}{data[1][4]} 5️⃣-7️⃣</span>
																<span style="color:#9a0fff">Gond (⛵ <span style="color:cyan">☔—</span> 🎶?), Jaunpuri 🪙♀️</span>
																<span style="color:rgb(255 218 0)">Khokar (🎶♂🌜), Devgandhari (🌜🔆), Suhi 🌜🔆, Gandhari</span>
																<span style="color:cyan">Basant Mukhari? (☔🌌)</span>
																<span style="color:silver">'Sevari (ਸੀ) (compassion, mercy - grey),</span>
																<span style="color:rgb(255, 14, 14)"><span style="color:rgb(255, 14, 14)" title="nearness of Guru">Gujri?</span> (🪘) {data[17][3]+data[17][4]}, 'Todi 🪙♀️?,</span>


                                <!-- Themes for embilshing ordanary repeating circumstances -->
<div style="color:silver;font-size:0.3em;position:absolute;letter-spacing: 15px;margin-top:-40px;">
<ul>
<li>
Astonishment</li>
<li>
Beauty
Devotion
Fortifying Intent
Preperation</li>
</ul>
</div>

<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:'Fish&Chips';">3</div>
3 ~10:48 a.m.<span title="Dhur"> - ٱلظُّهْر 3.36 p.m.</span> <span id="3" style="font-family: 'Fish&Chips'">madhyahna</span>    ~11:30 - 2:30?    V
																  Madhumadhvi?(🧘‍♀️) ☿🌜,
																  <span style="color:rgb(212 222 68)">'Pilu ♀️🪐, (<span title="Kafi family">ਕਾ</span> ∨ Green) Vadhans ♂🌜, Suha Sughrai 🌜🔆,
																  Bhimpalasi / Sarparda (♂🔆), Gavati 🔆🌜, Barwa ♂🌜, Dhani ♀️🪐 Rut 3☔</span>
																  <span style="color:rgb(14, 255, 117)">Tilang (🌴) ♀️🪐,    11  1:50   12:42></span>
																  <span style="color:rgb(255, 14, 14)">Patmanjari (🪘)🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>, Multani ♀️🪐</span>
																  <span style="color:rgb(255, 218, 0)">Dhanshri (🎶 🔅🌜),  Maru 🌜🪐? Rut 5🍂, Mali Gaura <small><small>({data[29][2]+" "+data[29][3]}{data[29][4]} Rut 5🍂)</small></small> Rut 4🍂,</span>
																  <span style="color:#9a0fff">Salag (⛵🌜🔆), Bairari {data[24][3]+data[24][4]} Rut 4🍂, Sarang {data[14][3]}🌜</span>

                                  <div style="color:silver;font-size:0.3em;position:absolute;letter-spacing: 15px;margin-top:-100px;">
                                  <ul>
                                  <li>
                                  Gifting</li>
                                  <li>
                                  News
                                  Resuming Work
                                  Travelling?
                                  Non-spiritual activities</li>
                                  </ul>
                                  </div>


<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:'Fish&Chips';">4</div>
4 ~3:36 p.m.<span title="Asr">  العصر  6    </span> p.m. <span id="4" style="font-family: 'Fish&Chips'">aparahna</span>  4*               1:50 4:50   V
															Gauri, (🧘‍♀️,🌌<span style="color:black">—</span>,🪘<span style="color:rgb(255, 14, 14)">—</span>‍ ♂🌜Rut 5🍂7️⃣)
															<span style="color:rgb(14 255 117)">Maajh, (🌴 ♂🔅)</span>
															<span style="color:#9a0fff">Shri? (⛵ ☿🌜)</span>
															<span style="color:rgb(255, 14, 14)">Tukhari 🪘🌜🔆, Ambika ∨ Madhuvanti</span>
															<span style="color:cyan">Kedara? (☔)</span>
															<span style="color:black">Purvi? (🌌 ♀️🪐), Jaitsri (♀️🪐 Rut 6❄️)</span>
															<span style="color:rgb(212 222 68)">'Sindhura (<span title="Kafi family">ਕਾ</span> 🔆🌜)</span>
															<span style="color:silver">Vachaspati 💊 🔆🌜</span>
															3-4? 2:30-5:30


                              <div style="color:silver;font-size:0.3em;position:absolute;letter-spacing: 15px;margin-top:-90px;">
                              <ul>
                              <li>
                              Enjoyment</li>
                              <li>
                              Chatting
                              Recreation
                              Wandering
                              Feasting
                              Singing
                              Strength Worship? Devotion <!--(Literatuature Worship)-->
                              </li>
                              </ul>
                              </div>

--------------------------------------------------------------------------------------------------------------------------------
 الله Night time الله

<section style="filter: sepia(0.4);">
🌇 R1 ~6 p.m. - المغرب  8:24 p.m. <span id="R1" style="font-family: 'Fish&Chips'">sayan/utarang</span> ☾1  (Sunset)            4:50 - 8     K
																<span style="color:cyan">Basant,(☔🌌),  Kedara ☿🔆</span>
																<span style="color:#f2f2f2">Pancham(🧘‍♀️) {data[5][3],data[5][3]}, Pahadi Bhupali (PS),</span>
																<span style="color:#f2f2f2">Malashree?</span> (🧘‍♀️ SP Rut 5🍂<span title="S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3️⃣</span>)
																<span style="color:#f2f2f2">Pahadi Ramgiri?? Hamsadvani?, (🧘‍♀️)</span>
																Gauri Poorvi?, (ਭੇ,🌌,🪘)
																<span style="color:rgb(255, 218, 0)">Marwa? 🎶 🪙♂,  Mali Gaura ☿🌜 Rut 4🍂, Gaurî Guârarî ♀️🪙</span>
																<span style="color:rgb(255, 14, 14)">'Yaman 🪘,</span>
																<span style="color:rgb(14 255 117)">Gorakh Kalyan 🌴</span>
																<span style="color:#9a0fff">Shri, ⛵</span>

                                <div style="color:silver;font-size:0.3em;position:absolute;letter-spacing: 15px;margin-top:-30px;">
                                <ul>
                                <li>
                                Praying
                                Fullfiling desires of Others
                                Family <!--Catching up? - Networking? Advertising?-->
                                Networking
                                Refreshment <!--unwinding / Preperation-->
                                </li>
                                </ul>
                                </div>


</section>
<div style="background-image: url('blues.jpg');padding-bottom: 30px;filter: sepia(0.8);" id="Night">
R2 ~8:24 p.m. - 10:48 p.m. <span id="R2" style="font-family: 'Fish&Chips'">pradosa</span> ☾2              8 -10:30      K
																<span style="color:cyan">Sorath ☔ Rut 4🍂,   Nat?  NatNaryan, Malar, Basant?, Shankara ☔/🪘/🧘‍♀️  <small><small>(R2-R3? ♀️🪐)</small></small></span>
																<span style="color:rgb(212 222 68)">'Kafi <span title="Kafi family">ਕਾ</span> ☿🌜, 'Bageshree ♀️🔆, 'Madhukauns 🌜🔆, Jog ☿🔆  Pancham Jogeshwari (☿🔆),</span>
																<span style="color:silver">Chandrakauns?, (ਚ strife?)</span>
																<span style="color:silver">'Chandranandan? (-)</span>
																<span style="color:rgb(14 255 117)">'Jhinjhoti ♀️🪐, Pahari Dhun (Khamoj thaat),(🌴). Khamaj ♀️🪐</span>
																<span style="color:rgb(14 255 117)">Gara <small><small>🌴/🪘/<span title="Kafi family">ਕਾ</span>{data[56][3]}{data[56][4]}</small></small></span>
																<span style="color:rgb(14 255 117)">Kalavati 🌜🔆5️⃣, 'Jaijaivanti {data[39][3]+data[39][4]} Tilak Kamod, Naryani 🔆🌜,  (🌴)</span>
																<span style="color:#f2f2f2">Harakh (🧘‍♀️)  Gauri?! Rut 5🍂, Durga, Bihag ∨ Bihagara {data[20][3]+data[20][4]}, Hamsadvani?,</span>
																<span style="color:rgb(255, 14, 14)">Kanra (🪘),  Khamaj?, Chamak ☿🔆, Chhayanat <small><small>{data[56][3]}{data[56][4]}</small></small>, Gauri?!, (ਭੇ,🌌,🪘 ♂🌜)</span>
															   <span style="color:#9a0fff"> Hameer (⛵🪙♀️)  (lights in dark + virras), Khat</span>
																<span style="color:rgb(255, 218, 0)">Malkaus (🎶) Puriya, Kausak</span>
																<span style="color:silver">Saraswati (💊 🌜🚹)</span>
																<span style="color:silver">Gauri?!, (🧘‍♀️,🌌,🪘 ♂🌜Rut 5🍂)   'Gauri Manjari?,</span>
																<span style="color:silver">Kirwani (੍ - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, ਕ, ਸ਼)</span>



                                <div style="color:pink;font-size:0.5em;position:absolute;letter-spacing: 15px;margin-top:-100px;">
                                <ul>
                                <li>
                                Reading</li>
                                <li>
                                Intamacy
                                Sharing
                                Playing with energy of the day
                                </li>
                                </ul>
                                </div>

R3 ~10:48 p.m. - 3:36 p.m. العشاء<span id="R3" style="font-family: 'Fish&Chips'">ratri</span>  ☾3          8     10:30 3      P
																'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (🧘‍♀️♂🔅<span title="S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)
															    <span style="color:rgb(14 255 117)">Anand Bhairav 🌴 (Suryakant thaat) ☿🔅, Khamoj (🌜♂), Desh' <small><small>(🪘/🌴{data[56][3]}{data[56][4]})</small></small></span>
																<span style="color:silver">Chandrakauns? (ਚ ☿🔆<span title="S g m d N S' - S' N d m g m g S ,N S; (S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; ,N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;.)">5️⃣</span>)</span>
																<span style="color:#9a0fff">'Darbari Kanada? (⛵ ♂🌜),  Adana  ☿🔆, Charukesi ♀️🪙? </span>
																<span style="color:rgb(255, 14, 14)">Deepak (🪘 🔆🌜), Kachheli,</span>
															   <span style="color:rgb(255, 218, 0)"> Malkaus (🎶 ☿🔅 Rut 5🍂)</span>
																<span style="color:rgb(212 222 68)">'Sahana? (<span title="Kafi family">ਕਾ</span> 🌜🔆), 'Bahar? ♀️🔆 Rut 1🌿, Shiv Ranjani 🌜🔆</span>
																<span style="color:cyan">'Malhaar ☔ ☿🔅</span>

                                <div style="color:pink;font-size:0.5em;position:absolute;letter-spacing: 15px;margin-top:-100px;">
                                <ul>
                                <li>
                                Exploration</li>
                                <li>
                                Party
                                Play
                                Singing
                                Enjoying Literature and Humour
                                </li>
                                </ul>
                                </div>

R4 ~3:36 a.m. - 6 a.m. <span id="R4" style="font-family: 'Fish&Chips'">nisanta</span> 4		☾4			2:00 5    V
															<span style="color:cyan">'Asa (☔, ♂🔅)</span>
															Prabhati 🧘‍♀️🔆🌜,  'Ramkali 🌜☿ 7️⃣,  'Lalit 🧘‍♀️,🌌, (♂🔅)
															Kalingada? 🧘‍♀️{data[55][3]+data[55][4]}
															<span style="color:rgb(255, 14, 14)">Kalanka 🪘 🔆🌜</span>
															<span style="color:rgb(255, 218, 0)">Sohini <small><small>(🎶 {data[60][3]}{data[60][4]})</small></small>,</span>
															<span style="color:rgb(14 255 117)">Hindol (🌴 {data[53][3]+data[53][4]})</span>
															<span style="color:black">Paraj (🌌 🔆🌜)</span>

                              <div style="color:silver;font-size:0.3em;position:absolute;letter-spacing: 15px;margin-top:-100px;">
                              <ul>
                              <li>
                              Refreshments</li>
                              <li>
                              Enjoying Elegance
                              Bathing
                              Not wasting - Completion of Serving
                              Happyness
                              </li>
                              </ul>
                              </div>
</div>

L - Bengali ∨ Bangla (🧘‍♀️) {data[4][3]+data[4][4]}

</pre>

<div id="Legend" style="background-color:grey;padding-left: 10px; opacity: 0.8;padding-top: 25px;">
  <span style="font-family: 'Fish&Chips'"></span><br />
  ਅਰਧ ਨਰਾਜ ਛੰਦ - ISI, SIS, ISI, SIS, S<br />
  ਨਰਾਜ ਛੰਦ <br />
  ਲਘੁ ਨਰਾਜ ਛੰਦ <br />
  ਬ੍ਰਿਧ ਨਰਾਜ ਛੰਦ <br />
  ਛਪੈ ਛੰਦ - (24) ਰੋਲਾ ਛੰਦ first than ਉੱਲਾਲ halfway or mainly ਉੱਲਾਲ at two lines<br /> <!--pg423-->
  ਰੋਲਾ ਛੰਦ - 1 line = 24 matras with vishram in middleish??
  ਉੱਲਾਲ ਛੰਦ 28 matras, vishram in middlish -15-13??
  ਬਿਜੈ ਛੰਦ - a roop of ਛਪੈ ਛੰਦ<br />
  ਬਹਿਰ ਤਵੀਲ ਛੰਦ  <br /> - very quick
  ਪਾਧੜੀ ਛੰਦ 4 matras than break 4 matras break, 4 matras break 4 matras break, then ISI?<br />
  ਰੂਆਲ ਛੰਦ 10 letters pause and 7 letters<br /> <!--pg-->
  ਚਰਪਟ ਛੰਦ <br />
  ਹਰਿਬੋਲਮਨਾ ਛੰਦ <br />
  ਤੋਮਰ ਛੰਦ<br />
  ਤੋਟਕ ਛੰਦ (16) - IIS, IIS, IIS, IIS * 4<br />
  ਦੋਹਾ (24) - 13 pause 11<br />

<br />
<!-- https://www.panthic.org/articles/5616
https://punjabipedia.org/topic.aspx?txt=%E0%A8%9B%E0%A8%AA%E0%A9%88%20%E0%A8%9B%E0%A9%B0%E0%A8%A6-->

</div>

<div id="Legend" style="background-color:#3eab7e;padding-left: 10px; opacity: 0.8;padding-top: 25px;">
  <span style="font-family: 'Fish&Chips'">Legend</span><br />
<span style="font-family:cursive">1</span> - First Pahar <em>(sunrise or sunset)</em><br />
2 - Second ∨ Onset Pahar<br />
3 - Third ∨ Middle Pahar<br />
4 - Fourth ∨ Offset Pahar<br />
R - Night<br />
L - Anytime but with feeling of momentum or progress<br />
<hr style="opacity: 0.2;">
⛵ - <span style="font-family: 'Fish&Chips'">Shri thaat</span> <em><span style="color:rgb(154 15 255 / 44%)">(feeling of movement, earth)</span></em>&nbsp;&nbsp;🌴 - <span style="font-family: 'Fish&Chips'">Hindol thaat</span> <em><span style="color:rgb(14 255 117)">(related to particular place or space<ref>Samveda
Christianamr https://chandrakantha.com/forums/?p=post%2Fseasonal-ragas-8672340</ref> (beyond mind desires))</span></em><br />
🌌 - <span style="font-family: 'Fish&Chips'">Purvi thaat</span> <em><span style="color:black">(feeling of completeness and fulfillment)</span></em><br />
💊 - <span style="font-family: 'Fish&Chips'">Vachaspati thaat <em><span style="color:black">(rare rag, maybe healing?)</span></em></span><br />
🧘‍♀️ - <span style="font-family: 'Fish&Chips'">Bhairao thaat</span> <em><span style="color:white">(related to countable gains (and losses) of fruits of devotion?, sky)</span></em><br />
🪘 <span style="font-family: 'Fish&Chips'">Deepak thaat</span> <em><span style="color:rgb(255 14 14 / 57%)">(related to object sensations, physical touch, and presence, fire)</span></em><br />
🎶 <span style="font-family: 'Fish&Chips'">Malkauns thaat</span> <em></em><span style="color:rgb(255, 218, 0)">(a strong significant feeling usually repeating tune or recollation?)</span>
☔ <span style="font-family: 'Fish&Chips'">Megh thaat</span> <span style="color:cyan;">(change and dispelling pain?, water)</span><br />
<hr style="opacity: 0.2;border-bottom:4px solid red">
<a herf="https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week" style="opacity: 0.5;">Colors representing planets of week (different colour scheme than above thaat scheme)</a><br />
<span style="color:#FFFF00;">🔅 - Sa vadi ∨ samvadi</span> <em><span title="See https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week">(Some of all qualities)<em/><br />
<span style="color:#FFCCFF;">🌜 - Pa vadi ∨ samvadi</span><br />
<span style="color:#7FFF7F;">♂ - Re vadi ∨ samvadi </span><em><span title="See https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week"> (Leadership)<em/><br />
<span style="color:#FF9900;">☿ - Ma vadi ∨ samvadi</span> <em><span title="See https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week">(Organization)<em/><br />
<span style="color:#33CCFF;">♀️ - Ga vadi ∨ samvadi </span> <em><a herf="https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week">(Arts ∨ Music ∨ Games)</a><em/></span><br />
<span style="color:#993399;">🪐 - Ni vadi ∨ samvadi</span><em><span title="See https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week"> (Excellence?)<em/><br />
<span style="color:#FF0000;">🪙 - Da vadi ∨ samvadi <em>(Jupiter ∨ Wealth and Luxuries)</em></span><br />
  &nbsp;◦&nbsp;&nbsp;Ignore underlines and '
  </div>

</body>
</html>


<style>


      input {
        text-align: center;
      }


      body {
        font-family: "Courier", "Fixedsys", "sans-serif";
        color: antiquewhite;
        background-image: url('https://rebabre.com/images/as.png');
        background-color: #b09beb;
        margin: 30px;
        border: 2px solid red;
        padding: 10px;
      }

      html {
        background-color: #8a2be2 !important;
      }

      @font-face {
          font-family: 'Fish&Chips';
          src: url('https://rebabre.com/images/Fish%26Chips.ttf');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
  </style>
