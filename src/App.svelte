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
             ['Kalyana / Yaman', '💙', 'R1', '♀️','🪐'],
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
             ['Patmanjari', '💙', '3', '🔅','🌜'], // 15
             ['Salag', '⛵', '3', '🌜','🔆'],
             ['Gujri', '💙', '2', '🪙','♂'],
             ['Maajh', '🌴', '4', '♂','🔆', 'R1?'],
             ['Devgandhari', '🍩', '3', '🌜','🔆', 'Also Kafi'],
             ['Bihagara', '🧘‍♀️', 'R2', '♀️','🪐'], // 20
             ['Vadhans', 'ਕ', 'R3', '🔆','♂'],
             ['Jaitsri', '🌌', '4', '♀️','🪐', 'R1?, ਮਾ ਸ਼???'],
             ['Todi', '💙', '2', '🪙','♂'],
             ['Bairari', '⛵', '3', ' ♀️',' 🪙'],
             ['Tilang', '‍🌴', '3', '♀️','🪐', '♂🪐?'], // 25
             ['Suhi', '🍩', '2', '🌜','🔆'],
             ['Gond', '⛵ ☔ 🍩', '2', '🔆','☿'],
             ['Ramkali', '🧘‍♀️', 'R4', '🌜','🔆', '🌜☿?'],
             ['Mali Gaura', '🍩', '4', '♂','🌜'],
             ['Maru', '🍩', '3', '♀️','🪐', ['🌜🪐?']], // 30
             ['Tukhari', '💙', '4', '🌜','‍🔆'],
             ['Kedara', '☔', 'R1', ' ♀️','🔆'],
             ['Bhairao', '🧘‍♀️', '1', '🪙','♂'],
             ['Nat Naryan', '☔', 'R2', '🌜','☿', 'R3?'],
             ['Kanra', '💙', 'R2', '🌜','🔆'], // 35
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
             ['', '🧘‍♀️', '2', '☿','🔆'],

           ];
</script>

<html data-theme="retro" lang="en">
<body>


<table style="clear: right; margin-bottom: .5em; float: right; padding: .5em 0 .8em 1.4em; background: none; width: auto;" cellspacing="0" cellpadding="0">
<tbody><tr>
<td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox" style="display:none"><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading"><a href="#Legend">Legend at the end.</a></h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber"></span> <span class="toctext">Raagmala &amp; Raags in SGGS</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">eg.</span> <span class="toctext">Devsakh for clarity,</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span> <span class="toctext">desire to excersie, goodness</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext"><span style="font-family:cursive">2</span>: second quarter of day</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext">L: feeling of flying/beyond pain<!--greatness:flying feeling and removing pain (also rain)--></span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext">..ai: both male and female same</span></a></li>
</ul>
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg"
style="width: 72px;margin-top:5px;margin-bottom:5px;"
/>
A tribute to Jassa Singh Ramgarhia ☬<br /><br />
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
</span>
</div>

</td></tr></tbody></table>
<h3 style="margin-bottom:28px"><span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">ਰਾਗਮਾਲਾ</span></small></small></small></small><br />
<img style="width:101px;opacity:0.5;" src="data:image/jpeg;base64,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" />
</span></h3>
<ul><li><b>Bhairao <span title="🧘‍♀️ - related to countable gains and fruits of devotion">🧘‍♀️</span> <small><small>(2 {data[33][3]+data[33][4]})</small></small></b><br></li></ul>
<p><b>Wives</b>: Bhairavi <small><small>(2 {data[48][3]+data[48][4]})</small></small>,
   <u>Bilawali</u> <small><small>(2 🪙♀️)</small></small>,
   Punyaki <small><small>(2)</small></small>,
   <u>Bangli</u> <small><small>(L ☿🔆)</small></small>, Aslekhi <small><small>(Puniya?)</small></small>.<br>
<b>Sons</b>: <u>Pancham</u> <small><small>(R1)</small></small>,
Harakh <small><small>(R2)</small></small>,
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG"
              style="vertical-align: middle;width:30px"
              />
<u>Devsakh</u> <small><small>(2 🌜🔅)</small></small>,
<u>Bangalam</u> <small><small>(L?)</small></small>,
<u>Madhumadhvi</u> <small><small>(3 ☿🌜)</small></small>,
<u>Lalit</u> <small><small>(R4 {data[12][3]}🔅)</small></small>,
Bilaval <small><small>(2 🪙♀️)</small></small>.<br>
<b>Retro</b>: Gauri <small><small>(4 ☿🌜7️⃣)</small></small>,
Ramkali <small><small>(R4 🌜🔅7️⃣)</small></small>,
<u>Pahadi</u> <small><small>(R1)</small></small>,
Malashree <small><small>(R1 SP <span title="S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3️⃣</span>)</small></small>,
Hamsadvani <small><small>(R1?-R2?)</small></small>,
Durga <small><small>(R2 ♂🔅)</small></small>,
Bhinna Shadja <small><small>(R3 ♂🔅)</small></small>,<br>
Jogkauns <small><small>(R3 ♂🔅)</small></small>,
Hemant <small><small>(R3 ♂🔅<span title="S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)</small></small>,
Bihagaraa / Bihag <small><small>(R2 ♀️🪐)</small></small>.<br>
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R2)</small></small>, Poorvi, Bairagi.
</p>
<br />
<ul><li><b>Malkaus</b> 🍩 <small><small>(R3 ♂🔅)</small></small><br></li></ul>
<p><b>Wives</b>: Gaundkari <small><small>(2 DR)</small></small>, Devgandhari <small><small>(2 🌜🔆)</small></small>,
  Gandhari <small><small>(2)</small></small>, Seehute, Dhanasri <small><small>(3 🔅🌜)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(3 🌜🪐)</small></small>, Marwa <small><small>(R1)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+" "+data[29][3]}{data[29][4]})</small></small>, Suhi <small><small>(2)</small></small>,
 Puriya <small><small>(R2)</small></small>.
<br>
<b>Combo</b>: Dhanasri Ambika <small><small>(2)</small></small>.
<!--<b>Retro</b>: <small><small>(2)</small></small>.-->
</p>
<br />
<ul><li><b>Hindol</b> <span title="🌴 - related to particular place or thing">🌴</span><br></li></ul>
<p><b>Wives</b>: Tilangi <small><small>(4 ♀️🪐)</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(1)</small></small>.<br>
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u> <small><small>(L 🔅☿)</small></small>,
 Kamoda <small><small>(R1? R2?)</small></small>.
 <br />
 <b>Other</b>: Kalavati <small><small>(R2 🌜🔆5️⃣)</small></small>,
</p>
<br />
<ul><li><b>Deepak</b> <span title="💙 - related to abundant physical sensations, touch, and presence">💙</span><br></li></ul>
<p><b>Wives</b>: Kachheli,
  <u>Patmanjari</u> <small><small>(3 🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>)</small></small>,
   Todi <small><small>(2 🪙♀️)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span> <small><small>(2 🪙♂)</small></small>.<br>
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R3)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana / Yaman</u> <small><small>(R2 ♀️🪐)</small></small>.<br>
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika / Madhuvanti <small><small>(4)</small></small>.
</p>
<br />
<ul><li><b>Sri raga <span title="⛵ - feeling of movement">⛵</span> <small><small>(4 ☿🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: Baradi / Varali / Bairari <small><small>(3 ♀️🪙)</small></small>, Karnati <small><small>(1 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(3 SP)</small></small>, <u>Asavari</u> <small><small>(2 🪙♀️ 5️⃣-7️⃣)</small></small>,
   Sindhve / Sindhura <small><small>(4 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(3 🌜🔆)</small></small>, <u>Sarang</u> <small><small>({data[14][2]+data[14][3]}🌜)</small></small>,
Sagra <small><small>(R1 GD)</small></small>,
Gond <small><small>(2 🔅{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R3 MS)</small></small>,
Hamir <small><small>(R2 🪙♀️)</small></small>.
</p>
<br />
<ul><li><b>Megh <span title="☔ - feeling momentum or progress and dispelling pain">☔</span> <small><small>(L 🔅🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: <u>Sorath</u> <small><small>(R2 ☿🪙)</small></small>,
  Gond <small><small>(2)</small></small>,
  <u>Malari</u> <small><small>(R3 ☿🔅)</small></small>,
   Asa <small><small>(R4 {data[10][3]}🔅)</small></small>, Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(2?)</small></small>,
Kedara <small><small>(R1)</small></small>, Jabli-dhar, Nat <small><small>(R3 ♂🔅)</small></small>,
Jaldhar,
Shankara <small><small>(R3 ♀️🪐)</small></small>,
Syama.<br />
<b>Retro</b>: Vibhas <small><small>(1)</small></small>.<br>
<b>Combo</b>: Asa Aaswari (Sri) <small><small>(2?)</small></small>, Tribungi, <span title="Nearness of Guru">Gujri</span> (Deepak), Shalokh, Nat Bhariav.
<!-- Nice mixes: Tribungi, Sorath!, Gujri, Shalokh -->
</p>
<br />

<!-- raag names
https://www.pinterest.ca/maitrey0635/ragamala/
https://raagtime.com/
-->

<pre style="background-color:#1B66D9;padding:10px;" id="Day">
  1 🌅 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(🧘‍♀️), Bhairao {data[33][3]+data[33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (🧘‍♀️) Gauri Bairagan ♂🪙 (ਭੇ,🌌,💙)
																	'Ahir Bhairiv (🌴),
																	'Bhatiyar? (🍩 ☿🔆)
																	Vibhas (☔ 🪙☿),
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:cursive;">2</div>
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (🧘‍♀️focus, excesise, doing good), 'Bilawal {data[3][3] + '' + data[3][4]}, Puniya, Bhairavi {data[48][3] + data[48][4]}
																Bairagi?
																Asavari (⛵ Renunciation and sacrifice)? {data[1][3]}{data[1][4]} 5️⃣-7️⃣
																Gond (⛵ ☔ 🍩?)
																Devgandhari (🍩🌜🔆), Suhi 🌜🔆,
																Basant Mukhari?
																'Sevari (ਸੀ) (compassion, mercy - grey),
																<span title="nearness of Guru">Gujri?</span> (💙) {data[17][3]+data[17][4]}, 'Todi 🪙♀️)?,

 Action - Study -- IMprove self
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:cursive;">3</div>
3 10.48 AM - 3.36 PM madhyahna    ~11:30 - 2:30?    V                                                                    Madhumadhvi?(🧘‍♀️) ☿🌜,
																  'Pilu ♀️🪐, (ਕਾ/Green) Vadhans ♂🌜, Suha Sughrai 🌜🔆, Bhimpalasi (♂🔆)
																  Tilang (🌴) ♀️🪐,    11  1:50   12:42>
																  Patmanjari,(💙🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>)
																  Dhanshri (🍩 🔅🌜),  Maru 🌜🪐?, Mali Gaura {data[29][3],+data[29][4]}
																  Salag (⛵🌜🔆), Bairari {data[24][3]+data[24][4]}, Sarang {data[14][3]}🌜

<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;font-family:cursive;">4</div>
4 3.36 PM - 6 PM aparahna  4*               1:50 4:50   V
															Gauri, (ਭੇ,🌌,❤️‍ ♂🌜7️⃣)
															Maajh, (ਹਿੰ ♂🔅)
															Shri? (⛵ ☿🌜)
															Tukhari 💙🌜🔆, Ambika / Madhuvanti
															Kedara? (☔)
															Purvi? (ਪ ♀️🪐), Jaitsri (♀️🪐)
															'Sindhura (ਕਾ 🔆🌜)
                              											        Vachaspati (ਵ 🔆🌜)
															3-4? 2:30-5:30


--------------------------------------------------------------------------------------------------------------------------------
Darkside الله


🌇 R1 6 PM - 8.24 PM sayan/utarang ☾1  (Night)            4:50 - 8     K
																Basant,(☔),  Kedara
																Pancham(🧘‍♀️) {data[5][3],data[5][3]}, Pahadi Bhupali (PS),
																Malashree? (🧘‍♀️ SP<span title="S - G - P - N - S' / S' - (N)P - (M)(G), P - G - S (S - (N)P - M(G), P - G - S)">3️⃣</span>)
																Pahadi Ramgiri?? Hamsadvani?, (🧘‍♀️)
																Marwa?(🍩)  Mali Gaura ☿🌜,
																'Yaman (💙),
																Gorakh Kalyan (ਹਿੰ)
																Shri, (ਸ਼)
																Gauri Poorvi?, (ਭੇ,🌌,💙)

R2 8.24 PM - 10.48 PM pradosa ☾2              8 -10:30      K
<div style="background-image: url('blues.jpg');padding-bottom: 30px;" id="Night">
																Sorath (☔),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi ਕਾ ☿🌜, 'Bageshree ♀️🔆, 'Madhukauns 🌜🔆, Jog ☿🔆  Pancham Jogeshwari (☿🔆)
																Chandrakauns?, (ਚ strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(🌴)
																Kalavati 🌜🔆5️⃣, 'Jaijaivanti {data[39][3]+data[39][4]} Tilak Kamod, Naryani,  (🌴)
																Harakh (🧘‍♀️)  Gauri?!, Durga, Bihag / Bihagara {data[20][3]+data[20][4]}, Hamsadvani?,
																Kanra (💙),  Khamaj?, Gauri?!, (ਭੇ,🌌,💙 ♂🌜)
															    Hameer (⛵🪙♀️)  (lights in dark + virras),
																Malkos (🍩) Puriya
																Saraswati (ਵ 🌜🚹)
																Gauri?!, (ਭੇ,🌌,💙 ♂🌜)   'Gauri Manjari?,
								                                                    Kirwani (੍ - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, ਕ, ਸ਼)


R3 10.48 PM - 3.36 AM ratri  ☾3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (🧘‍♀️♂🔅<span title="S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)
															   'Des? ♂🌜, Khamoj (🌴 🌜♂),
																Chandrakauns? (ਚ ☿🔆<span title="S g m d N S' - S' N d m g m g S ,N S; (S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; ,N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;.)">5️⃣</span>)
																'Darbari Kanada? (⛵ ♂🌜),  Adana  ☿🔆
																Deepak (💙 🔆🌜)
															    Malkaus(🍩 ☿🔅)
																'Sahana? (ਕਾ 🌜🔆), 'Bahar? ♀️🔆, Shiv Ranjani 🌜🔆
                                'Malhaar ☔ ☿🔅



R4 3.36 AM - 6 AM nisanta 4		☾4			2:00 5    V
															'Asa ☔,  (♂🔅)
															Prabhati 🧘‍♀️🔆🌜,  'Ramkali 🌜☿ 7️⃣,  'Lalit 🧘‍♀️,🌌, (♂🔅)
															Hindol (🌴 {data[53][3]+data[53][4]})
															Paraj (🌌 🔆🌜)
</div>

L - Bengali / Bangla (ਭੇ) {data[4][3]+data[4][4]}

</pre>

<div id="Legend" style="background-color:#3eab7e;padding-left: 10px; opacity: 0.8;padding-top: 25px;">
  Legend<br />
<span style="font-family:cursive">1</span> - First Pahar <em>(sunrise/sunset)</em><br />
2 - Second/Onset Pahar<br />
3 - Third/Middle Pahar<br />
4 - Fourth/Offset Pahar<br />
R - Night<br />
L - Anytime feeling momentum or progress<br />
<hr style="opacity: 0.2;">
⛵ - Shri thaat <em>(feeling of movement)</em>&nbsp;&nbsp;🌴 - Hindol thaat <em>(related to particular place or thing)</em><br />
🌌 - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br />
💊 - Vachaspati thaat<br />
🧘‍♀️ - Bhairao thaat <em>(related to countable gains and fruits of devotion)</em><br />
💙 Deepak thaat <em>(related to abundant physical sensations, touch, and presence)</em><br />
🍩 Malkauns thaat <em></em>
☔ Megh thaat (feeling momentum or progress and dispelling pain)<br />
<hr style="opacity: 0.2;">
🔅 - Sa vadi/samvadi<br />
🌜 - Pa vadi/samvadi<br />
♂ - Re vadi/samvadi<br />
☿ - Ma vadi/samvadi <em><span title="See https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week">(Organization)<em/><br />
♀️ - Ga vadi/samvadi <em><a herf="https://rebabre.gitbook.io/suraj-prakash/unrelated-related/days-of-week">(Arts/Music/Games)</a><em/><br />
🪐 - Ni vadi/samvadi<br />
🪙 - Da vadi/samvadi <em>(Jupiter)<em/><br />
</span>
  &nbsp;◦&nbsp;&nbsp;Ignore underlines and '
  </div>

</body>
</html>


<style>


      input {
        text-align: center;
      }


      body {
        font-family: sans-serif;
        color: antiquewhite;
        background-color: blueviolet;
        margin: 30px;
        border: 2px solid red;
        padding: 10px;
      }

      html {
        background-color: #8a2be2 !important;
      }
  </style>
