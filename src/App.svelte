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
🌜 - Pa vadi/samvadi
♂ - Re vadi/samvadi
☿ - Ma vadi/samvadi
♀️ - Ga vadi/samvadi
🪐 - Ni vadi/samvadi
🪙 - Da vadi/samvadi
 */
 let data = [['Sri', '⛵', '4', '♂', '🌜'],
             ['Asavari', '⛵', '2', '🪙','♀️'],
             ['Kalyana / Yaman', '❤️‍🔥', 'R1', '♀️','🪐'],
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
             ['Patmanjari', '❤️‍🔥', '3', '🔅','🌜'], // 15
             ['Salag', '⛵', '3', '🌜','🔆'],
             ['Gujri', '❤️‍🔥', '2', '🪙','♂'],
             ['Maajh', '🌴', '4', '♂','🔆', 'R1?'],
             ['Devgandhari', '🍩', '3', '🌜','🔆', 'Also Kafi'],
             ['Bihagara', '🧘‍♀️', 'R2', '♀️','🪐'], // 20
             ['Vadhans', 'ਕ', 'R3', '🔆','♂'],
             ['Jaitsri', '🌌', '4', '♀️','🪐', 'R1?, ਮਾ ਸ਼???'],
             ['Todi', '❤️‍🔥', '2', '🪙','♂'],
             ['Bairari', '⛵', '3', ' ♀️',' 🪙'],
             ['Tilang', '‍🌴', '3', '♀️','🪐', '♂🪐?'], // 25
             ['Suhi', '🍩', '2', '🌜','🔆'],
             ['Gond', '⛵ ☔ 🍩', '2', '🔆','☿'],
             ['Ramkali', '🧘‍♀️', 'R4', '🌜','🔆', '🌜☿?'],
             ['Mali Gaura', '🍩', '4', '♂','🌜'],
             ['Maru', '🍩', '3', '♀️','🪐', ['🌜🪐?']], // 30
             ['Tukhari', '❤️‍🔥', '4', '🌜','‍🔆'],
             ['Kedara', '☔', 'R1', ' ♀️','🔆'],
             ['Bhairao', '🧘‍♀️', '1', '🪙','♂'],
             ['Nat Naryan', '☔', 'R2', '🌜','☿', 'R3?'],
             ['Kanra', '❤️‍🔥', 'R2', '🌜','🔆'], // 35
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
<td><div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox" style="display:none"><div class="toctitle" dir="ltr" lang="en"><h2 id="mw-toc-heading">Contents</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Raagmala_.26_Raags_in_SGGS"><span class="tocnumber">1</span> <span class="toctext">Raagmala &amp; Raags in SGGS</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Raag_Mala"><span class="tocnumber">1.1</span> <span class="toctext">Devsakh  clarity,</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Raags_in_Guru_Granth_Sahib"><span class="tocnumber"></span> <span class="toctext">desire to excersie, goodness</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#RaagMala"><span class="tocnumber">1.3</span> <span class="toctext">RaagMala</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext">L: feeling of flying/beyond pain<!--greatness:flying feeling and removing pain (also rain)--></span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#See_Also"><span class="tocnumber"></span> <span class="toctext">..ai: both male and female same</span></a></li>
</ul>
<img src="https://i.pinimg.com/originals/92/4a/6b/924a6b2a0b128fa82cb01ae22335dc4c.jpg"
style="width: 72px;"
/>
A tribute to Jassa Singh Ramgarhia ☬<br /><br />
<span style="opacity: 0.2">
<a href="#Day">Day</a>&nbsp;&nbsp;&nbsp; <a href="#Night">Night</a>  <!--&nbsp;&nbsp;&nbsp; <a href="#Night">Name</a>-->
</span>
</div>

</td></tr></tbody></table>
<h3 style="margin-bottom:28px"><span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">ੴ</span></small></small></small></small><br />ਰਾਗਮਾਲਾ</span></h3>
<ul><li>(2) <b>Bhairao 🧘‍♀️ <small><small>(2 {data[33][3]+data[33][4]})</small></small></b><br></li></ul>
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
Hemant <small><small>(R3 ♂🔅)</small></small>,
Bihagaraa / Bihag <small><small>(R2 ♀️🪐)</small></small>.<br>
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R2)</small></small>, Poorvi, Bairagi.
</p>
<br />
<ul><li>(3) <b>Malkaus</b> 🍩 <small><small>(R3 ♂🔅)</small></small><br></li></ul>
<p><b>Wives</b>: Gaundkari <small><small>(2 DR)</small></small>, Devgandhari <small><small>(2 🌜🔆)</small></small>,
  Gandhari <small><small>(2)</small></small>, Seehute, Dhanasri <small><small>(3 🔅🌜)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(3 🌜🪐)</small></small>, Marwa <small><small>(R1)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+data[29][3],+data[29][4]})</small></small>, Suhi <small><small>(2)</small></small>,
 Puriya <small><small>(R2)</small></small>.
<br>
<b>Combo</b>: Dhanasri Ambika <small><small>(2)</small></small>.
<!--<b>Retro</b>: <small><small>(2)</small></small>.-->
</p>
<br />
<ul><li>(4) <b>Hindol</b> 🌴<br></li></ul>
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
<ul><li>(4) <b>Deepak</b> ❤️‍🔥<br></li></ul>
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
<ul><li>(5) <b>Sri raga ⛵ <small><small>(4 ☿🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: Baradi / Varali / Bairari <small><small>(3 ♀️🪙)</small></small>, Karnati <small><small>(1 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(3 SP)</small></small>, <u>Asavari</u> <small><small>(2 🪙♀️ 5️⃣-7️⃣)</small></small>,
   Sindhve / Sindhura <small><small>(4 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(3 🌜🔆)</small></small>, <u>Sarang</u> <small><small>({data[14][2]+data[14][3]}🌜)</small></small>,
Sagra <small><small>(R1 GD)</small></small>,
Gond <small><small>(2 🔅{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R3 MS)</small></small>,
Hamir <small><small>(R2 🪙♀️)</small></small>.
</p>
<br />
<ul><li>(6) <b>Megh ☔ <small><small>(L 🔅🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: <u>Sorath</u> <small><small>(R2 ☿🪙)</small></small>,
  Gond <small><small>(2)</small></small>,
  <u>Malari</u> <small><small>(L ☿🔅?)</small></small>,
   Asa <small><small>(R4 {data[10][3]}🔅)</small></small>, Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(2?)</small></small>,
Kedara <small><small>(R1)</small></small>, Jabli-dhar, Nat <small><small>(R3 ♂🔅)</small></small>,
Jaldhar,
Shankara <small><small>(R3 ♀️🪐)</small></small>,
Syama.<br />
<b>Retro</b>: Vibhas <small><small>(1)</small></small>.<br>
<b>Combo</b>: Asa Aaswari (Sri) <small><small>(2?)</small></small>, Tribungi, <u>Sorath</u>, <span title="Nearness of Guru">Gujri</span> (Deepak), Shalokh, Nat Bhariav.
<!-- Nice mixes: Tribungi, Sorath!, Gujri, Shalokh -->
</p>
<br />

<!-- raag names
https://www.pinterest.ca/maitrey0635/ragamala/
https://raagtime.com/
-->

<pre style="background-color:#2727da;padding:10px;" id="Day">
  1 🌅 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(🧘‍♀️), Bhairao {data[33][3]+data[33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (🧘‍♀️) Gauri Bairagan ♂🪙 (ਭੇ,🌌,❤️‍🔥)
																	'Ahir Bhairiv (🌴),
																	'Bhatiyar? (🍩 ☿🔆)
																	Vibhas (☔ 🪙☿),
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">2</div>
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (🧘‍♀️focus, excesise, doing good), 'Bilawal {data[3][3] + '' + data[3][4]}, Puniya, Bhairavi {data[48][3] + data[48][4]}
																Bairagi?
																Asavari (⛵ Renunciation and sacrifice)? {data[1][3]}{data[1][4]} 5️⃣-7️⃣
																Gond (⛵ ☔ 🍩?)
																Devgandhari (🍩🌜🔆), Suhi 🌜🔆,
																'Malaar? (☔),  Basant Mukhari?
																'Sevari (ਸੀ) (compassion, mercy - grey),
																<span title="nearness of Guru">Gujri?</span> (❤️‍🔥) {data[17][3]+data[17][4]}, 'Todi 🪙♀️)?,

 Action - Study -- IMprove self
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">3</div>
3 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(🧘‍♀️) ☿🌜,
																  'Pilu ♀️🪐, (ਕਾ/Green) Vadhans ♂🌜, Suha Sughrai 🌜🔆, Bhimpalasi (♂🔆)
																  Tilang (🌴) ♀️🪐,    11  1:50   12:42>
																  Patmanjari,(❤️‍🔥🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>)
																  Dhanshri (🍩 🔅🌜),  Maru 🌜🪐?, Mali Gaura {data[29][3],+data[29][4]}
																  Salag (⛵🌜🔆), Bairari {data[24][3]+data[24][4]}, Sarang {data[14][3]}🌜

<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">4</div>
4 3.36 PM - 6 PM aparahna  4*               1:50 4:50   V
															Gauri, (ਭੇ,🌌,❤️‍ ♂🌜7️⃣)
															Maajh, (ਹਿੰ ♂🔅)
															Shri? (⛵💚 ☿🌜)
															Tukhari ❤️‍🔥🌜🔆, Ambika / Madhuvanti
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
																'Yaman (❤️‍🔥),
																Gorakh Kalyan (ਹਿੰ)
																Shri, (ਸ਼)
																Gauri Poorvi?, (ਭੇ,🌌,❤️‍🔥)

R2 8.24 PM - 10.48 PM pradosa ☾2              8 -10:30      K
<div style="background-image: url('blues.jpg');padding-bottom: 30px;" id="Night">
																Sorath (☔),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi ਕਾ ☿🌜, 'Bageshree ♀️🔆, 'Madhukauns 🌜🔆, Jog ☿🔆  Pancham Jogeshwari (☿🔆)
																Chandrakauns?, (ਚ strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(🌴)
																Kalavati 🌜🔆5️⃣, 'Jaijaivanti {data[39][3]+data[39][4]} Tilak Kamod, Naryani,  (🌴)
																Harakh (🧘‍♀️)  Gauri?!, Durga, Bihag / Bihagara {data[20][3]+data[20][4]}, Hamsadvani?,
																Kanra (❤️‍🔥),  Khamaj?, Gauri?!, (ਭੇ,🌌,❤️‍🔥 ♂🌜)
															    Hameer (⛵🪙♀️)  (lights in dark + virras),
																Malkos (🍩) Puriya
																Saraswati (ਵ 🌜🚹)
																Gauri?!, (ਭੇ,🌌,❤️‍🔥 ♂🌜)   'Gauri Manjari?,
								                                                    Kirwani (੍ - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, ਕ, ਸ਼)


R3 10.48 PM - 3.36 AM ratri  ☾3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (🧘‍♀️)
															   'Des? ♂🌜, Khamoj (🌴 🌜♂),
																Chandrakauns? (ਚ ☿🔆<span title="S g m d N S' - S' N d m g m g S ,N S; (S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; ,N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;.)">5️⃣</span>)
																'Darbari Kanada? (⛵ ♂🌜),  Adana  ☿🔆
																Deepak (❤️‍🔥 🔆🌜)
															    Malkaus(🍩 ☿🔅)
																'Sahana? (ਕਾ 🌜🔆), 'Bahar? ♀️🔆, Shiv Ranjani 🌜🔆
                                Malhaar ☔ ☿🔅



R4 3.36 AM - 6 AM nisanta 4		☾4			2:00 5    V
															'Asa ☔,  (♂🔅)
															Prabhati 🧘‍♀️🔆🌜,  'Ramkali 🌜☿ 7️⃣,  'Lalit 🧘‍♀️,🌌, (♂🔅)
															Hindol (🌴 {data[53][3]+data[53][4]})
															Paraj (🌌 🔆🌜)
</div>

L - Bengali / Bangla (ਭੇ) {data[4][3]+data[4][4]}

</pre>

<div style="background-color:#3eab7e;padding-left: 10px; opacity: 0.8;padding-top: 25px;">
  Legend<br />
1 - First Pahar <em>(sunrise/sunset)</em><br />
2 - Second/Onset Pahar<br />
3 - Third/Middle Pahar<br />
4 - Fourth/Offset Pahar<br />
R - Night<br />
L - Anytime feeling momentum or progress<br />
<hr style="opacity: 0.2;">
⛵ - Shri thaat <em>(feeling of movement)</em>🌴 - Hindol thaat <em>(related to particular place or thing)</em><br />
🌌 - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br />
💊 - Vachaspati thaat<br />
🧘‍♀️ - Bhairao thaat <em>(related to countable gains and fruits of devotion)</em><br />
❤️‍🔥 Deepak thaat <em>(related to physical sensations and touch)</em><br />
🍩 Malkauns thaat <em></em>
☔ Megh thaat (feeling momentum or progress and dispelling pain)<br />
<hr style="opacity: 0.2;">
🔅 - Sa vadi/samvadi<br />
🌜 - Pa vadi/samvadi<br />
♂ - Re vadi/samvadi<br />
☿ - Ma vadi/samvadi <em>(Organization)<em/><br />
♀️ - Ga vadi/samvadi <em>(Arts/Music/Games)<em/><br />
🪐 - Ni vadi/samvadi<br />
🪙 - Da vadi/samvadi <em>(Jupiter)<em/><br />

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
