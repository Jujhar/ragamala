<script>
import { onMount } from 'svelte';

/*
Legend
1 - First Pahar (sunrise/sunset)
2 - Second/Onset Pahar
3 - Third/Middle Pahar
4 - Fourth/Offset Pahar
โต - Shri thaat ๐ด - Hindol thaat
๐ - Purvi thaat
๐ - Vachaspati thaat
๐งโโ๏ธ - Bhairao thaat
๐ - Sa vadi/samvadi
๐ - Pa vadi/samvadi
โ - Re vadi/samvadi
โฟ - Ma vadi/samvadi
โ๏ธ - Ga vadi/samvadi
๐ช - Ni vadi/samvadi
๐ช - Da vadi/samvadi
 */
 let data = [['Sri', 'โต', '4', 'โ', '๐'],
             ['Asavari', 'โต', '2', '๐ช','โ๏ธ'],
             ['Kalyana / Yaman', 'โค๏ธโ๐ฅ', 'R1', 'โ๏ธ','๐ช'],
             ['Bilawali', '๐งโโ๏ธ', '2', '๐ช','โ๏ธ'],
             ['Bangli', '๐งโโ๏ธ', 'L', 'โฟ','๐'],
             ['Pancham', '๐งโโ๏ธ', 'R1', 'โ','๐'], // 5
             ['Sorath', 'โ', 'R2', 'โ','๐ช'],
             ['Malaar', 'โ', 'L', 'โฟ','๐'],
             ['Megh', 'โ', 'L', '๐','๐'],
             ['Basant', '๐ด', 'L', '๐','โฟ', '๐๐?'],
             ['Asa', 'โ', 'R4', 'โฟ','๐'], // 10
             ['Devsakh', '๐งโโ๏ธ', '2', '๐','๐'],
             ['Lalit', '๐งโโ๏ธ', 'R4', 'โฟ','๐'],
             ['Gauri', '๐งโโ๏ธ', '4', 'โ','๐', 'R1?'],
             ['Sarang', 'โต', '3', 'โ','๐', '2?'],
             ['Patmanjari', 'โค๏ธโ๐ฅ', '3', '๐','๐'], // 15
             ['Salag', 'โต', '3', '๐','๐'],
             ['Gujri', 'โค๏ธโ๐ฅ', '2', '๐ช','โ'],
             ['Maajh', '๐ด', '4', 'โ','๐', 'R1?'],
             ['Devgandhari', '๐ฉ', '3', '๐','๐', 'Also Kafi'],
             ['Bihagara', '๐งโโ๏ธ', 'R2', 'โ๏ธ','๐ช'], // 20
             ['Vadhans', 'เจ', 'R3', '๐','โ'],
             ['Jaitsri', '๐', '4', 'โ๏ธ','๐ช', 'R1?, เจฎเจพ เจถ???'],
             ['Todi', 'โค๏ธโ๐ฅ', '2', '๐ช','โ'],
             ['Bairari', 'โต', '3', ' โ๏ธ',' ๐ช'],
             ['Tilang', 'โ๐ด', '3', 'โ๏ธ','๐ช', 'โ๐ช?'], // 25
             ['Suhi', '๐ฉ', '2', '๐','๐'],
             ['Gond', 'โต โ ๐ฉ', '2', '๐','โฟ'],
             ['Ramkali', '๐งโโ๏ธ', 'R4', '๐','๐', '๐โฟ?'],
             ['Mali Gaura', '๐ฉ', '4', 'โ','๐'],
             ['Maru', '๐ฉ', '3', 'โ๏ธ','๐ช', ['๐๐ช?']], // 30
             ['Tukhari', 'โค๏ธโ๐ฅ', '4', '๐','โ๐'],
             ['Kedara', 'โ', 'R1', ' โ๏ธ','๐'],
             ['Bhairao', '๐งโโ๏ธ', '1', '๐ช','โ'],
             ['Nat Naryan', 'โ', 'R2', '๐','โฟ', 'R3?'],
             ['Kanra', 'โค๏ธโ๐ฅ', 'R2', '๐','๐'], // 35
             ['Nat Naryan', 'โ', 'R2', '๐','โฟ', 'R3?'],
             ['Prabhati', 'เจ', 'R4', '๐','๐', '1๐งโโ๏ธ?'],
             ['Durga', '๐งโโ๏ธ', 'R2', ' โ',' ๐', 'R3?'],
             ['Jaijaivanti', '๐ด', 'R2', 'โ','๐'],
             ['Patdeep', 'เจ', '3', '๐','๐'], // 40
             ['Tilak', '๐ด', 'R2', '๐','๐'],
             ['Kamoda', '๐ด', 'R1', '๐','โ'],
             ['Saraswati (เจต', '๐', 'R2', '๐','๐น'],
             ['Chandrakauns', 'เจ', 'R3', 'โฟ','๐'],
             ['Charukeshi', '-', '3', '๐','๐'], // 45
             ['Jog', 'เจ', 'R2', 'โฟ','๐'],
             ['Kaunsi', 'เจ', 'R3', '๐','๐'],
             ['Bhairavi', '๐งโโ๏ธ', '2', 'โฟ','๐', 'used to conclude a concert'],
             ['Abhogi', 'เจ', 'R2', 'โฟ','๐', 'peaceful sleep'],
             ['Devsakh', '๐งโโ๏ธ', '2', '๐','๐',], // 50
             ['Puniya', '๐งโโ๏ธ', '2', 'โฟ','๐'],
             ['Adana', 'โต', 'R3', '๐','๐'],
             ['Hindol', '๐ด', 'R4', '๐ช','โ๏ธ'],
             ['', '๐งโโ๏ธ', '2', 'โฟ','๐'],

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
A tribute to Jassa Singh Ramgarhia โฌ<br /><br />
<span style="opacity: 0.2">
<a href="#Day">Day</a>&nbsp;&nbsp;&nbsp; <a href="#Night">Night</a>  <!--&nbsp;&nbsp;&nbsp; <a href="#Night">Name</a>-->
</span>
</div>

</td></tr></tbody></table>
<h3 style="margin-bottom:28px"><span class="mw-headline" id="Raag_Mala"><small><small><small><small><span style="color:gold">เฉด</span></small></small></small></small><br />เจฐเจพเจเจฎเจพเจฒเจพ</span></h3>
<ul><li>(2) <b>Bhairao ๐งโโ๏ธ <small><small>(2 {data[33][3]+data[33][4]})</small></small></b><br></li></ul>
<p><b>Wives</b>: Bhairavi <small><small>(2 {data[48][3]+data[48][4]})</small></small>,
   <u>Bilawali</u> <small><small>(2 ๐ชโ๏ธ)</small></small>,
   Punyaki <small><small>(2)</small></small>,
   <u>Bangli</u> <small><small>(L โฟ๐)</small></small>, Aslekhi <small><small>(Puniya?)</small></small>.<br>
<b>Sons</b>: <u>Pancham</u> <small><small>(R1)</small></small>,
Harakh <small><small>(R2)</small></small>,
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27Desakh_Ragini_of_the_Hindol_Raga%27_by_Chetan_Das%2C_HMA_10733.1.JPG"
              style="vertical-align: middle;width:30px"
              />
<u>Devsakh</u> <small><small>(2 ๐๐)</small></small>,
<u>Bangalam</u> <small><small>(L?)</small></small>,
<u>Madhumadhvi</u> <small><small>(3 โฟ๐)</small></small>,
<u>Lalit</u> <small><small>(R4 {data[12][3]}๐)</small></small>,
Bilaval <small><small>(2 ๐ชโ๏ธ)</small></small>.<br>
<b>Retro</b>: Gauri <small><small>(4 โฟ๐)</small></small>,
Ramkali <small><small>(R4 ๐๐)</small></small>,
Pahadi <small><small>(R1)</small></small>,
Malashree <small><small>(R1 SP 3๏ธโฃ)</small></small>,
Hamsadvani <small><small>(R1?-R2?)</small></small>,
Durga <small><small>(R2 โ๐)</small></small>,
Bhinna Shadja <small><small>(R3 โ๐)</small></small>,<br>
Jogkauns <small><small>(R3 โ๐)</small></small>,
Hemant <small><small>(R3 โ๐)</small></small>,
Bihagaraa / Bihag <small><small>(R2 โ๏ธ๐ช)</small></small>.<br>
<b>Combo</b>: Gauri Deepak / (Gauri Yeman)  <small><small>(R2)</small></small>, Poorvi, Bairagi.
</p>
<br />
<ul><li>(3) <b>Malkaus</b> ๐ฉ <small><small>(R3 โ๐)</small></small><br></li></ul>
<p><b>Wives</b>: Gaundkari <small><small>(2 DR)</small></small>, Devgandhari <small><small>(2 ๐๐)</small></small>,
  Gandhari <small><small>(2)</small></small>, Seehute, Dhanasri <small><small>(3 ๐๐)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(3 ๐๐ช)</small></small>, Marwa <small><small>(R1)</small></small>,
Parbal Chand, Kausak, Ubara, Khokhat, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+data[29][3],+data[29][4]})</small></small>, Suhi <small><small>(2)</small></small>,
 Puriya <small><small>(R2)</small></small>.
<br>
<b>Combo</b>: Dhanasri Ambika <small><small>(2)</small></small>.
<!--<b>Retro</b>: <small><small>(2)</small></small>.-->
</p>
<br />
<ul><li>(4) <b>Hindol</b> ๐ด<br></li></ul>
<p><b>Wives</b>: Tilangi <small><small>(4 โ๏ธ๐ช)</small></small>,
  Devkari, <u>Basanti</u>, Sindhoori / Sindhuri, Ahiri <small><small>(1)</small></small>.<br>
<b>Sons</b>: Surmanand, Bhasker, Chandra-Bimb,
Mangalan, Saras-baan, Binoda,
 <u>Basant</u> <small><small>(L ๐โฟ)</small></small>,
 Kamoda <small><small>(R1? R2?)</small></small>.
 <br />
 <b>Other</b>: Kalavati <small><small>(R2 ๐๐)</small></small>,
</p>
<br />
<ul><li>(4) <b>Deepak</b> โค๏ธโ๐ฅ<br></li></ul>
<p><b>Wives</b>: Kachheli,
  <u>Patmanjari</u> <small><small>(3 ๐๐)</small></small>,
   Todi <small><small>(2 ๐ชโ๏ธ)</small></small>, Kamodi <small><small>(R3?)</small></small>,
   <span title="Nearness of Guru">Gujri</span> <small><small>(2 ๐ชโ)</small></small>.<br>
<b>Sons</b>: Kaalanka, Kuntal, Rama, Kamal-Kusum,
Champak <small><small>(R3)</small></small>, Gaura,
Kanra <small><small>(R2)</small></small>,
 <u>Kalyana / Yaman</u> <small><small>(R2 โ๏ธ๐ช)</small></small>.<br>
<b>Retro</b>: Tukhari <small><small>(4)</small></small>, Ambika / Madhuvanti <small><small>(4)</small></small>.
</p>
<br />
<ul><li>(5) <b>Sri raga โต <small><small>(4 โฟ๐)</small></small></b><br></li></ul>
<p><b>Wives</b>: Baradi / Varali / Bairari <small><small>(3 โ๏ธ๐ช)</small></small>, Karnati <small><small>(1 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(3 SP)</small></small>, <u>Asavari</u> <small><small>(2 ๐ชโ๏ธ 5๏ธโฃ-7๏ธโฃ)</small></small>,
   Sindhve / Sindhura <small><small>(4 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(3 ๐๐)</small></small>, <u>Sarang</u> <small><small>({data[14][2]+data[14][3]}๐)</small></small>,
Sagra <small><small>(R1 GD)</small></small>,
Gond <small><small>(2 ๐{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R3 MS)</small></small>,
Hamir <small><small>(R2 ๐ชโ๏ธ)</small></small>.
</p>
<br />
<ul><li>(6) <b>Megh โ <small><small>(L ๐๐)</small></small></b><br></li></ul>
<p><b>Wives</b>: <u>Sorath</u> <small><small>(R2 โฟ๐ช)</small></small>,
  Gond <small><small>(2)</small></small>,
  <u>Malari</u> <small><small>(L โฟ๐?)</small></small>,
   Asa <small><small>(R4 {data[10][3]}๐)</small></small>, Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(2?)</small></small>,
Kedara <small><small>(R1)</small></small>, Jabli-dhar, Nat <small><small>(R3 โ๐)</small></small>,
Jaldhar,
Shankara <small><small>(R3 โ๏ธ๐ช)</small></small>,
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
  1 ๐ 1 6 AM - 8.24 AM prata  1   (Day)                 K
																	'Jogiya(๐งโโ๏ธ), Bhairao {data[33][3]+data[33][4]}, Bhairiari Devgandhari, Ramakli!?
																	Devgiri Bilawal? (๐งโโ๏ธ) Gauri Bairagan โ๐ช (เจญเฉ,๐,โค๏ธโ๐ฅ)
																	'Ahir Bhairiv (๐ด),
																	'Bhatiyar? (๐ฉ โฟ๐)
																	Vibhas (โ ๐ชโฟ),
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">2</div>
2 8.24 AM - 10.48 AM purvahna               7:30 11:30        P
																Devsakh (๐งโโ๏ธfocus, excesise, doing good), 'Bilawal {data[3][3] + '' + data[3][4]}, Puniya, Bhairavi {data[48][3] + data[48][4]}
																Bairagi?
																Asavari (โต Renunciation and sacrifice)? {data[1][3]}{data[1][4]} 5๏ธโฃ-7๏ธโฃ
																Gond (โต โ ๐ฉ?)
																Devgandhari (๐ฉ๐๐), Suhi ๐๐,
																'Malaar? (โ),  Basant Mukhari?
																'Sevari (เจธเฉ) (compassion, mercy - grey),
																<span title="nearness of Guru">Gujri?</span> (โค๏ธโ๐ฅ) {data[17][3]+data[17][4]}, 'Todi ๐ชโ๏ธ)?,

 Action - Study -- IMprove self
<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">3</div>
3 10.48 AM - 3.36 PM madhyahna    homecoming11:30 - 2:30?    V                                                                    Madhumadhvi?(๐งโโ๏ธ) โฟ๐,
																  'Pilu โ๏ธ๐ช, (เจเจพ/Green) Vadhans โ๐, Suha Sughrai ๐๐, Bhimpalasi (โ๐)
																  Tilang (๐ด) โ๏ธ๐ช,    11  1:50   12:42>
																  Patmanjari,(โค๏ธโ๐ฅ SP)
																  Dhanshri (๐ฉ ๐๐),  Maru ๐๐ช?, Mali Gaura {data[29][3],+data[29][4]}
																  Salag (โต๐๐), Bairari {data[24][3]+data[24][4]}, Sarang {data[14][3]}๐

<div style="position:absolute;font-size:6em;margin-top:30px;margin-left:10px;color:gold;opacity:0.2;">4</div>
4 3.36 PM - 6 PM aparahna  4*               1:50 4:50   V
															Gauri, (เจญเฉ,๐,โค๏ธโ โ๐)
															Maajh, (เจนเจฟเฉฐ โ๐)
															Shri? (โต๐ โฟ๐)
															Tukhari โค๏ธโ๐ฅ๐๐, Ambika / Madhuvanti
															Kedara? (โ)
															Purvi? (เจช โ๏ธ๐ช), Jaitsri (โ๏ธ๐ช)
															'Sindhura (เจเจพ ๐๐)
                              											        Vachaspati (เจต ๐๐)
															3-4? 2:30-5:30


--------------------------------------------------------------------------------------------------------------------------------
Darkside ุงููู


๐ R1 6 PM - 8.24 PM sayan/utarang โพ1  (Night)            4:50 - 8     K
																Basant,(โ),  Kedara
																Pancham(๐งโโ๏ธ) {data[5][3],data[5][3]}, Pahadi Bhupali (PS),
																Malashree? (๐งโโ๏ธ SP 3๏ธโฃ)
																Pahadi Ramgiri?? Hamsadvani?, (๐งโโ๏ธ)
																Marwa?(๐ฉ)  Mali Gaura โฟ๐,
																'Yaman (โค๏ธโ๐ฅ),
																Gorakh Kalyan (เจนเจฟเฉฐ)
																Shri, (เจถ)
																Gauri Poorvi?, (เจญเฉ,๐,โค๏ธโ๐ฅ)

R2 8.24 PM - 10.48 PM pradosa โพ2              8 -10:30      K
<div style="background-image: url('blues.jpg');padding-bottom: 30px;" id="Night">
																Sorath (โ),   Nat?  NatNaryan, Malar, Basant?,
																'Kafi เจเจพ โฟ๐, 'Bageshree โ๏ธ๐, 'Madhukauns ๐๐, Jog โฟ๐  Pancham Jogeshwari (โฟ๐)
																Chandrakauns?, (เจ strife?)
																'Chandranandan? (-)
																'Jhinjhoti, Pahari Dhun (Khamoj thaat),(๐ด)
																Kalavati ๐๐, 'Jaijaivanti {data[39][3]+data[39][4]} Tilak Kamod, Naryani,  (๐ด)
																Harakh (๐งโโ๏ธ)  Gauri?!, Durga, Bihag / Bihagara {data[20][3]+data[20][4]}, Hamsadvani?,
																Kanra (โค๏ธโ๐ฅ),  Khamaj?, Gauri?!, (เจญเฉ,๐,โค๏ธโ๐ฅ โ๐)
															    Hameer (โต๐ชโ๏ธ)  (lights in dark + virras),
																Malkos (๐ฉ) Puriya
																Saraswati (เจต ๐๐น)
																Gauri?!, (เจญเฉ,๐,โค๏ธโ๐ฅ โ๐)   'Gauri Manjari?,
								                                                    Kirwani (เฉ - Virah (separation), nostalgia, and Shringar Rasas - beauty vishnu, เจ, เจถ)


R3 10.48 PM - 3.36 AM ratri  โพ3          8     10:30 3      P                                              'Jog Kauns?, Bhinna Sharaj?, 'Hemant? (๐งโโ๏ธ)
															   'Des? โ๐, Khamoj (๐ด ๐โ),
																Chandrakauns? (เจ โฟ๐)
																'Darbari Kanada? (โต โ๐),  Adana  โฟ๐
																Deepak (โค๏ธโ๐ฅ ๐๐)
															    Malkaus(๐ฉ โฟ๐)
																'Sahana? (เจเจพ ๐๐), 'Bahar? โ๏ธ๐, Shiv Ranjani ๐๐
                                Malhaar โ โฟ๐



R4 3.36 AM - 6 AM nisanta 4		โพ4			2:00 5    V
															'Asa โ,  (โ๐)
															Prabhati ๐งโโ๏ธ๐๐,  'Ramkali ๐โฟ,  'Lalit ๐งโโ๏ธ,๐, (โ๐)
															Hindol (๐ด {data[53][3]+data[53][4]})
															Paraj (๐ ๐๐)
</div>

L - Bengali / Bangla (เจญเฉ) {data[4][3]+data[4][4]}

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
โต - Shri thaat <em>(feeling of movement)</em>๐ด - Hindol thaat <em>(related to particular place or thing)</em><br />
๐ - Purvi thaat <em>(feeling of completeness and fulfillment)</em><br />
๐ - Vachaspati thaat<br />
๐งโโ๏ธ - Bhairao thaat <em>(related to gains and fruits of devotion)</em><br />
โค๏ธโ๐ฅ Deepak thaat <em>(related to physical sensations and touch)</em><br />
๐ฉ Malkauns thaat <em>(emotions and feelings related to thing??)</em>
โ Megh thaat<br />
<hr style="opacity: 0.2;">
๐ - Sa vadi/samvadi<br />
๐ - Pa vadi/samvadi<br />
โ - Re vadi/samvadi<br />
โฟ - Ma vadi/samvadi <em>(Organization)<em/><br />
โ๏ธ - Ga vadi/samvadi <em>(Arts/Music/Games)<em/><br />
๐ช - Ni vadi/samvadi<br />
๐ช - Da vadi/samvadi <em>(Jupiter)<em/><br />

  &nbsp;โฆ&nbsp;&nbsp;Ignore underlines and '
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
