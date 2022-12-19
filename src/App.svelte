<script>
import { onMount } from 'svelte';

/*
Legend
0 - First Pahar
I - Second/Onset Pahar
2 - Third/Middle Pahar
III - Fourth/Offset Pahar
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
 let data = [['Sri', '⛵', 'Ⅲ', '♂', '🌜'],
             ['Asavari', '⛵', 'I', '🪙','♀️'],
             ['Kalyana / Yaman', '❤️‍🔥', 'R0', '♀️','🪐'],
             ['Bilawali', '🧘‍♀️', 'I', '🪙','♀️'],
             ['Bangli', '🧘‍♀️', 'L', '☿','🔆'],
             ['Pancham', '🧘‍♀️', 'R0', '♂','🔆'], // 5
             ['Sorath', '☔', 'RI', '♂','🪙'],
             ['Malaar', '☔', 'L', '☿','🔆'],
             ['Megh', '☔', 'L', '🔆','🌜'],
             ['Basant', '🌴', 'L', '🔅','☿', '🔅🌜?'],
             ['Asa', '☔', 'RⅢ', '☿','🔆'], // 10
             ['Devsakh', '🧘‍♀️', 'I', '🌜','🔆'],
             ['Lalit', '🧘‍♀️', 'RⅢ', '☿','🔆'],
             ['Gauri', '🧘‍♀️', 'Ⅲ', '♂','🌜', 'R0?'],
             ['Sarang', '⛵', '2', '♂','🌜', 'I?'],
             ['Patmanjari', '❤️‍🔥', '2', '🔅','🌜'], // 15
             ['Salag', '⛵', '2', '🌜','🔆'],
             ['Gujri', '❤️‍🔥', 'I', '🪙','♂'],
             ['Maajh', '🌴', 'Ⅲ', '♂','🔆', 'R0?'],
             ['Devgandhari', '🍩', '2', '🌜','🔆', 'Also Kafi'],
             ['Bihagara', '🧘‍♀️', 'RI', '♀️','🪐'], // 20
             ['Vadhans', 'ਕ', 'R2', '🔆','♂'],
             ['Jaitsri', '🌌', 'Ⅲ', '♀️','🪐', 'R0?, ਮਾ ਸ਼???'],
             ['Todi', '❤️‍🔥', 'I', '🪙','♂'],
             ['Bairari', '⛵', '2', ' ♀️',' 🪙'],
             ['Tilang', '‍🌴', '2', '♀️','🪐', '♂🪐?'], // 25
             ['Suhi', '🍩', 'I', '🌜','🔆'],
             ['Gond', '⛵ ☔ 🍩', 'I', '🔆','☿'],
             ['Ramkali', '🧘‍♀️', 'RⅢ', '🌜','🔆', '🌜☿?'],
             ['Mali Gaura', '🍩', 'Ⅲ', '♂','🌜'],
             ['Maru', '🍩', '2', '♀️','🪐', ['🌜🪐?']], // 30
             ['Tukhari', '❤️‍🔥', 'Ⅲ', '🌜','‍🔆'],
             ['Kedara', '☔', 'R0', ' ♀️','🔆'],
             ['Bhairao', '🧘‍♀️', '0', '🪙','♂'],
             ['Nat Naryan', '☔', 'RI', '🌜','☿', 'R2?'],
             ['Kanra', '❤️‍🔥', 'RI', '🌜','🔆'], // 35
             ['Nat Naryan', '☔', 'RI', '🌜','☿', 'R2?'],
             ['Prabhati', 'ਕ', 'RⅢ', '🔅','🌜', '0🧘‍♀️?'],
             ['Durga', '🧘‍♀️', 'RI', ' ♂',' 🔅', 'R2?'],
             ['Jaijaivanti', '🌴', 'RI', '♂','🌜'],
             ['Patdeep', 'ਕ', 'II', '🌜','🔆'], // 40
             ['Tilak', '🌴', 'RI', '🔆','🌜'],
             ['Kamoda', '🌴', 'R0', '🌜','♂'],
             ['Saraswati (ਵ', '💊', 'RI', '🌜','🚹'],
             ['Chandrakauns', 'ਚ', 'R2', '☿','🔆'],
             ['Charukeshi', '-', '2', '🌜','🔆'], // 45
             ['Jog', 'ਕ', 'RI', '☿','🔆'],
             ['Kaunsi', 'ਕ', 'R2', '🌜','🔆'],
             ['Bhairavi', '🧘‍♀️', 'I', '☿','🔆', 'used to conclude a concert'],
             ['Abhogi', 'ਕ', 'RI', '☿','🔆', 'peaceful sleep'],
             ['Devsakh', '🧘‍♀️', 'I', '🌜','🔆',], // 50
             ['Puniya', '🧘‍♀️', 'I', '☿','🔆'],
             ['Adana', '⛵', 'R2', '🔆','🌜'],
             ['Hindol', '🌴', 'RⅢ', '🪙','♀️'],
             ['', '🧘‍♀️', 'I', '☿','🔆'],

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
<ul><li>(1) <b>Bhairao 🧘‍♀️ <small><small>(1 {data[33][3]+data[33][4]})</small></small></b><br></li></ul>
<p><b>Wives</b>: Bhairavi <small><small>(1 {data[48][3]+data[48][4]})</small></small>,
   <u>Bilawali</u> <small><small>(1 🪙♀️)</small></small>,
   Punyaki <small><small>(1)</small></small>,
   <u>Bangli</u> <small><small>(L ☿🔆)</small></small>, Aslekhi <small><small>(Puniya?)</small></small>.<br>
<b>Sons</b>: <u>Pancham</u> <small><small>(R0)</small></small>,
Harakh <small><small>(R1)</small></small>,
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG"
              style="vertical-align: middle;width:30px"
              />
<u>Devsakh</u> <small><small>(1 🌜🔅)</small></small>,
<u>Bangalam</u> <small><small>(L?)</small></small>,
Maadhmadhava <small><small>(2 ☿🌜)</small></small>,
<u>Lalit</u> <small><small>(R3 {data[12][3]}🔅)</small></small>,
Bilaval <small><small>(1)</small></small>.<br>
<b>Retro</b>: Gauri <small><small>(3 ☿🌜)</small></small>,
Ramkali <small><small>(3 🌜🔅)</small></small>,
Pahadi <small><small>(R0)</small></small>,
Malashree <small><small>(R0 SP)</small></small>,
Hamsadvani <small><small>(R0?-R1?)</small></small>,
Durga <small><small>(R1 ♂🔅)</small></small>,
Bhinna Shadja <small><small>(R2 ♂🔅)</small></small>,<br>
Jogkauns <small><small>(R2 ♂🔅)</small></small>,
Hemant <small><small>(R2 ♂🔅)</small></small>,
Bihagaraa / Bihag <small><small>(R1 ♀️🪐)</small></small>.<br>
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R1)</small></small>, Poorvi, Bairagi.
</p>
<br />
<ul><li>(2) <b>Malkaus</b> 🍩 <small><small>(R2 ♂🔅)</small></small><br></li></ul>
<p><b>Wives</b>: Gaundkari <small><small>(1 DR)</small></small>, Devgandhari <small><small>(1)</small></small>,
  Gandhari <small><small>(1)</small></small>, Seehute, Dhanasri <small><small>(2 🔅🌜)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(2 🌜🪐)</small></small>, Marwa <small><small>(R0)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+data[29][3],+data[29][4]})</small></small>, Suhi <small><small>(1)</small></small>,
 Puriya <small><small>(R1)</small></small>.
<br>
<b>Combo</b>: Dhanasri Ambika <small><small>(1)</small></small>.
<!--<b>Retro</b>: <small><small>(1)</small></small>.-->
</p>
<br />
<ul><li>(3) <b>Hindol</b> 🌴<br></li></ul>
<p><b>Wives</b>: Tilangi <small><small>(3 ♀️🪐)</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(0)</small></small>.<br>
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u> <small><small>(L 🔅☿)</small></small>,
 Kamoda <small><small>(R0? R1?)</small></small>.
 <br />
 <b>Other</b>: Kalavati <small><small>(R1 🌜🔆)</small></small>,
</p>
<br />
<ul><li>(4) <b>Deepak</b> ❤️‍🔥<br></li></ul>
<p><b>Wives</b>: Kachheli,
  <u>Patmanjari</u> <small><small>(2 🔅🌜)</small></small>,
   Todi <small><small>(1 🪙♀️)</small></small>, Kamodi <small><small>(R2?)</small></small>,
   <span title="Nearness of Guru">Gujri</span> <small><small>(1)</small></small>.<br>
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R2)</small></small>, Gaura,
Kanra <small><small>(R1)</small></small>,
 <u>Kalyana / Yaman</u> <small><small>(R1 ♀️🪐)</small></small>.<br>
<b>Retro</b>: Tukhari <small><small>(3)</small></small>, Ambika / Madhuvanti <small><small>(3)</small></small>.
</p>
<br />
<ul><li>(5) <b>Sri raga ⛵ <small><small>(3 ☿🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: Baradi / Varali / Bairari <small><small>(2 ♀️🪙)</small></small>, Karnati <small><small>(0 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(2 SP)</small></small>, <u>Asavari</u> <small><small>(1 🪙♀️)</small></small>,
   Sindhve / Sindhura <small><small>(3 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(2 🌜🔆)</small></small>, <u>Sarang</u> <small><small>({data[14][2]+data[14][3]}🌜)</small></small>,
Sagra <small><small>(R0 GD)</small></small>,
Gond <small><small>(1 🔅{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R2 MS)</small></small>,
Hamir <small><small>(R1 🪙♀️)</small></small>.
</p>
<br />
<ul><li>(6) <b>Megh ☔ <small><small>(L 🔅🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: <u>Sorath</u> <small><small>(R1 ☿🪙)</small></small>,
  Gond <small><small>(1)</small></small>,
  <u>Malari</u> <small><small>(L ☿🔅?)</small></small>,
   Asa <small><small>(R3 {data[10][3]}🔅)</small></small>, Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(1?)</small></small>,
Kedara <small><small>(C0)</small></small>, Jabli-dhar, Nat <small><small>(R2 ♂🔅)</small></small>,
Jaldhar,
Shankara <small><small>(R2 ♀️🪐)</small></small>,
Syama.<br />
<b>Retro</b>: Vibhas <small><small>(0)</small></small>.<br>
<b>Combo</b>: Asa Aaswari (Sri) <small><small>(1?)</small></small>, Tribungi, <u>Sorath</u>, <span title="Nearness of Guru">Gujri</span> (Deepak), Shalokh, Nat Bhariav.
<!-- Nice mixes: Tribungi, Sorath!, Gujri, Shalokh -->
</p>
<br />

<!-- raag names
https://www.pinterest.ca/maitrey0635/ragamala/
https://raagtime.com/
-->

<pre style="background-color:#2727da;padding:10px;" id="Day">
  0 🌅 1 6 AM - 8.24 AM prata  0   (Day)                 K
																	'Jogiya(🧘‍♀️), Bhairao {data[33][3]+data[33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (🧘‍♀️) Gauri Bairagan ♂🪙 (ਭੇ,🌌,❤️‍🔥)
																	'Ahir Bhairiv (🌴),
																	'Bhatiyar? (🍩 ☿🔆)
																	Vibhas (☔ 🪙☿),
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">I</div>
1 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (🧘‍♀️focus, excesise, doing good), 'Bilawal {data[3][3] + '' + data[3][4]}, Puniya, Bhairavi {data[48][3] + data[48][4]}
																Bairagi?
																Asavari (⛵ Renunciation and sacrifice)? {data[1][3]}{data[1][4]}
																Gond (⛵ ☔ 🍩?)
																Devgandhari (🍩), Suhi 🌜🔆,
																'Malaar? (☔),  Basant Mukhari?
																'Sevari (ਸੀ) (compassion, mercy - grey),
																<span title="nearness of Guru">Gujri?</span> (❤️‍🔥) {data[17][3], data[17][4]}, 'Todi 🪙♀️)?,

 Action - Study -- IMprove self
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">2</div>
2 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(🧘‍♀️) ☿🌜,
																  'Pilu ♀️🪐, (ਕਾ/Green) Vadhans ♂🌜, Suha Sughrai 🌜🔆, Bhimpalasi (♂🔆)
																  Tilang (🌴) ♀️🪐,    11  1:50   12:42>
																  Patmanjari,(❤️‍🔥 SP)
																  Dhanshri (🍩 🔅🌜),  Maru 🌜🪐?, Mali Gaura {data[29][3],+data[29][4]}
																  Salag (⛵🌜🔆), Bairari {data[24][3]+data[24][4]}, Sarang {data[14][3]}🌜

<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">Ⅲ</div>
3 3.36 PM - 6 PM aparahna  3*               1:50 4:50   V
															Gauri, (ਭੇ,🌌,❤️‍ ♂🌜)
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


🌇 R0 6 PM - 8.24 PM sayan/utarang ☾0  (Night)            4:50 - 8     K
																Basant,(☔),  Kedara
																Pancham(🧘‍♀️) {data[5][3],data[5][3]}, Pahadi Bhupali (PS),
																Malashree? (🧘‍♀️ SP)
																Pahadi Ramgiri?? Hamsadvani?, (🧘‍♀️)
																Marwa?(🍩)  Mali Gaura ☿🌜,
																'Yaman (❤️‍🔥),
																Gorakh Kalyan (ਹਿੰ)
																Shri, (ਸ਼)
																Gauri Poorvi?, (ਭੇ,🌌,❤️‍🔥)

R1 8.24 PM - 10.48 PM pradosa ☾1              8 -10:30      K
<div style="background-image: url('blues.jpg');" id="Night">
																Sorath (☔),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi ਕਾ ☿🌜, 'Bageshree ♀️🔆, 'Madhukauns 🌜🔆, Jog ☿🔆  Pancham Jogeshwari (☿🔆)
																Chandrakauns?, (ਚ strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(🌴)
																Kalavati 🌜🔆, 'Jaijaivanti {data[39][3]+data[39][4]} Tilak Kamod, Naryani,  (🌴)
																Harakh (🧘‍♀️)  Gauri?!, Durga, Bihag / Bihagara {data[20][3]+data[20][4]}, Hamsadvani?,
																Kanra (❤️‍🔥),  Khamaj?, Gauri?!, (ਭੇ,🌌,❤️‍🔥 ♂🌜)
															    Hameer (⛵🪙♀️)  (lights in dark + virras),
																Malkos (🍩) Puriya
																Saraswati (ਵ 🌜🚹)
																Gauri?!, (ਭੇ,🌌,❤️‍🔥 ♂🌜)   'Gauri Manjari?,
								                                                    Kirwani (੍ - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, ਕ, ਸ਼)


R2 10.48 PM - 3.36 AM ratri  ☾2          8     10:30 2      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (🧘‍♀️)
															   'Des? ♂🌜, Khamoj (🌴),
																Chandrakauns? (ਚ ☿🔆)
																'Darbari Kanada? (⛵ ♂🌜),  Adana  ☿🔆
																Deepak (❤️‍🔥 🔆🌜)
															    Malkaus(🍩 ☿🔅)
																'Sahana? (ਕਾ 🌜🔆), 'Bahar? ♀️🔆, Shiv Ranjani 🌜🔆
                                Malhaar ☔ ☿🔅



R3 3.36 AM - 6 AM nisanta 3		☾3			2:00 5    V
															'Asa ☔,  (♂🔅)
															Prabhati 🧘‍♀️🔆🌜,  'Ramkali 🌜☿,  'Lalit 🧘‍♀️,🌌, (♂🔅)
															Hindol (🌴 {data[53][3]+data[53][4]})
															Paraj (🌌 🔆🌜)
</div>

L - Bengali / Bangla (ਭੇ) {data[4][3]+data[4][4]}

</pre>

<div style="background-color:#3eab7e;padding-left: 10px; opacity: 0.8;">
  Legend<br />
0 - First Pahar <em>(sunset/sunrise)</em><br />
I - Second/Onset Pahar<br />
2 - Third/Middle Pahar<br />
III - Fourth/Offset Pahar<br />
R - Night<br />
L - Anytime feeling momentum or progress<br />
<hr style="opacity: 0.2;">
⛵ - Shri thaat <em>(feeling of movement)</em>🌴 - Hindol thaat <em>(related to particular place or thing)</em><br />
🌌 - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br />
💊 - Vachaspati thaat<br />
🧘‍♀️ - Bhairao thaat <em>(related to gains and fruits of devotion)</em><br />
❤️‍🔥 Deepak thaat <em>(related to physical sensations and touch)</em><br />
🍩 Malkauns thaat <em>(emotions and feelings related to thing??)</em>
☔ Megh thaat<br />
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
