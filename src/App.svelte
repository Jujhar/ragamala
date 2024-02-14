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
 let data = [['Sri', '⛵', '4', '♂', '🌜', `They are beautiful, beautiful, born of the face
of praise, with a garland of stars around their necks.
When the elephant climbs the
mountain, the elephant is full of sacrifices.
This is the Sri Raga.- Pundarika Vittala (16th-c);
A sundown half past cares
With trees ensnared in dusky wisps –
Where grim reflections beyond fear
Wrangle with the demonic
And make new friends. - Taimur Khan (2004)`],
             ['Asavari', '⛵', '2', '🪙','♀️', `The Gāndhāra-rotra-agniga is the first movement of the fire-goddess.
She lived in the forests of Rambha with a beautiful and
pure reputation She had beautiful hair and was praised by
the gandharvas for her pleasant taste and compassion
This is Asavari. - Pundarika Vittala (16th-c);

📖 The origins of the Asavari ragini have been traced to the music played by tribal snake charmers who use wind instruments called Beens to mesmerize snakes with their hypnotic music. The literal breakup of the word Asavari is ‘Asi’ or Snake, and ‘Ari’, which means enemy.
This Ragini sings a plaintive, melancholy song of unhappy love.
The girl is awaiting her beloved who has not come. The snakes come to offer her consolation in her mistery. This winter raga’s hour of performance is in the morning.
📖Story:
Winter morning, the deep forest,
she waiting for the beloved lover who has not come, in her deep sorrow.
Snake charmer come, and he blowing the whistle.
Snake attempts to comfort her and dances around her.
Her heart comes fray in wonder when heard the sound of the whistle.
Among the deep forest, she falls asleep and be forgotten the sorrow.
📖Poet:
On the summit of the sandalwood mount,
Robed in peacock plumes, ablaze in dark glory.
The serpents dance to the tone of her Bin.
This charming one wears them, as bracelets.- Yuki Ato Narayan (2018)`],
             ['Kalyana / Yaman', '🪘', 'R1', '♀️','🪐', `Satri is full of two-eyed Niyamarigamani accompanied by royal hosts
He was white with a bean curve and wore a white robe and a garland of gold around his neck.
At the end of the day he who has eyes like lotuses and who is seated on a jeweled lion
throne with an umbrella head and both feet shines with his relatives like Kalyana Yammana
This is the welfare.
This is the family of the countrymen.- Pundarika Vittala (16th-c);
An old songster breaks into
Love’s undying night tale
That everyone has heard before
And cares to listen still. - Taimur Khan (2004)`],
             ['Bilawali', '🧘‍♀️', '2', '🪙','♀️', `She was very slender and rich in ornaments, and she was
dressed in lotus flowers and wore a crimson torso.
The daughter of Saraparada, who is also known as Śārīdhā, is
the daughter of Saraparada, who is very pleasant to the king.
This is Belavali.- Pundarika Vittala (16th-c);

The character of this melody is expressed through the picture of a lady
who is going to meet her lover.
She often evokes her favorite deity, the God of Love.
Her complexion is like the color of a blue lotus.
This spring raga should be sung in the morning.
📖Poet:
Richly adorned, she sits before the mirror,
The sixteen types, of make-up completed,
she waits looking at the door,
And remembers her lover in her mind.- Yuki Ato Narayan (2018)
`],
             ['Bangli', '🧘‍♀️', 'L', '☿','🔆',`The last two vowels are the three eyes, the movement of the three eyes, the two full legs, and in his
left hand he holds a beautiful garland, which resembles the jewel of a rabbit’s neck.
May. 195 Bengal holds a drinking vessel of pure gold in the tip of his
left hand and reads the Vedas of music constantly with his mattresses trembling
This is Bengal. This is the Bhairava family. - Pundarika Vittala (16th-c); Born in the Karnataka Mela, he is a full-bodied satrika,
dressed in yellow and wearing earrings decorated with gems. May.3
He is wearing a crown on his head and a lotus
in his palm. His body is smeared with saffron flowers.
This is Pure Bengal. - Pundarika Vittala (16th-c);

Bangala is described as a young woman large-eyed, bright
golden like the sun. Smeared with ashes, her hair matted and
tightly bound, with a sword under her arm, in her left hand she bears a blazing trident.
With a view to enthrall her husband,
a great and noble lord,
the woman repeats the Same mantra,
wearing the aspect of a sage.
📖Poet:
Dark, in a dark robe,
determined, brazen,
eager for lust,
with big breasts and in her hand a lute,
Bangala,
dear to rogues.- Yuki Ato Narayan (2018)`],
             ['Pancham', '🧘‍♀️', 'R1', '♂','🔆', `He is dark-skinned with a betel nut in his hand and
holds a lotus in his hand. His body is smeared with the mud of
the yakshas, ​​his head is covered with a beautiful crown, and his
beard is covered with the young moon and the sun. - Pundarika Vittala (16th-c)`], // 5
             ['Sorath', '☔', 'R2', '♂','🪙'],
             ['Malaar', '☔', 'L', '☿','🔆', `Miyan Malhar:
An abiding ecstasy,
Massive and composed,
Abandons man to some godlike element,
Harnessing clouds with reins of will. - Taimur Khan (2004);
Born of the union of Sarveri and devoid
of snakes He is like the planets in the sky He is
dressed in black and yellow He is defeated by Madana
He is rich in necklaces and other ornaments
This is the Malhar.- Pundarika Vittala (16th-c)`],
             ['Megh', '☔', 'L', '🔆','🌜', `
             ‘Begin your journey, O’ meghadoota, by sprinkling rain on the parched earth. The fragrance of wet earth will spread happiness among the country men and women. They will take to their fields singing joyously, and run their ploughs through the supple soil.’
Kalidasa`],
             ['Basant', '🌴', 'L/R4', '🔅','☿', '🔅🌜?', `Born at the Hindola fair, with a melodic rhythm and a satri in the morning
• Playing in the woods, a bunch of nine-petalled flowers, greedy for the pleasure,
Iat tada. He was as white as the light of a betel nut and dressed in red like the husband of a lover He
was accompanied by women playing all kinds of musical instruments and had a great smile. - Pundarika Vittala (16th-c);

The Vasant Raga expresses human reaction to the joy of life in spring.
This melody is feminine and is visualized as a dancing Krishna,
or is sometimes adjusted by the introduction of Radha embracing her lover Krishna.
This raga is best sung at midday.
📖Poet:
Krishna wanders joyful through the woods,
Peacock feathers glitter on his head,
oh! Radha beat the mridanga louder,
The bees hover around the mango-blossoms.- Yuki Ato Narayan (2018)`],
             ['Asa', '☔', 'R4', '☿','🔆'], // 10
             ['Devsakh', '🧘‍♀️', '2', '🌜','🔆', `The raga depicts a group of athletes or acrobatics.
and in some cases a strong, bare headed wrestler.
This is a spring raga and celebrates the start of spring
when the weather is so fine as to permit outdoor exercise and group activity.
📖Poet:
Quick resounding slapping of body,
hair knots standing on end,
long arms held back,
tall and fierce,
splendid like the moon,
Desakh is in the form of a wrestler.- Yuki Ato Narayan (2018)`],
             ['Lalit', '🧘‍♀️', 'R4', '☿','🔆', `He is skilled in the art of breathing and is pure and
graceful. Garanga is a friend of Champa He has a head
full of flowers He has lotus eyes He is luxurious He is
lustful He holds betel nut He prays every morning for the broken
Mame.15
Sudh Lalit - Pundarika Vittala (16th-c);He was born in a native fair He had a beautiful melody He had restless eyes He carried a
lotus in His hand He was dressed in clean clothes He was adorned with beautiful ornaments

He is bewitched by a woman with dark eyes and
laughs deceitfully with a curve full of betel nut.
This is Lalit. - Pundarika Vittala (16th-c)`],
             ['Gauri', '🧘‍♀️', '4', '♂','🌜', 'R1?', `
             The Gauri Ragini depicts a lady who is longing for and dreaming of her husband or lover.
             She wanders through the woods, daydreaming and collecting flowers and blossoms.
             This autumn raga is usually sung in the early afternoon.
             📖Poet:
             As fair as a campaka flower*1
             she tarries in the garden,
             confused of mind,
             Kalpaviksha*2 flowers and
             mango blossom adorn her,
             Surpassing Urvasi*3,
             Oh Gauri,
             sing for me. - Yuki Ato Narayan (2018);

             The sixteen-year-old woman was born in Rama’s
cream, and she was devoid of clouds. She was wearing a
picturesque dress. At the end of the day the goddess
Gauḍī plays with the beggars in the city of Varayāvana.
This is Gaudi.- Pundarika Vittala (16th-c); The white clothes are painted with the pure water particles of the lily-of-the-valley saffron, which
is the middle water of the nyadi, which is the source of the juice, which is born of the gunda cream. 9
The upper puṇḍu of the Kāśmīra tree has a fragrant body, a garland of lotus flowers around its neck and a
betel nut, and at the end of the day it is devoted to the worship of the Supreme Personality of
Godhead. This is the Pure Gouda.- Pundarika Vittala (16th-c)`],
             ['Sarang', '⛵', '3', '♂','🌜', '2?', `Resting in a banyan’s shade, / A wanderer fancies fickle nature / As being more or less serene – / And moves Mara to tears. - Taimur Khan (2004), Mara: personification of evil; the Buddhist ‘Tempter’; Death; He was dark-skinned, dressed in yellow, and holding a strong club, conch, wheel and lotus in his hand. / The Gāndhāra is the source of the Vedas and the treasures / of the movements of the modes of nature." This is the Sarang. - Pundarika Vittala (16th-c);He holds a strong club,
conchshell, disc
and lotus in his hand. He is dressed in yellow
garments. His waist is full of glittering
arrows. His sides are rich in ornaments.
This is the Sarang.- Pundarika Vittala (16th-c)`, 'Shocked? with lots of wonder!'],
             ['Patmanjari', '🪘', '3', '🔅','🌜', `She was born at the fair of Gauḍa.
In her hand she played a single
instrument of the veena and her sweet
words were free from the lake.
Patmanjari is the first flower.
 - Pundarika Vittala (16th-c)`], // 15
             ['Salag', '⛵', '3', '🌜','🔆'],
             ['Gujri', '🪘', '2', '🪙','♂', `
             In this monsoon Raga, a wistful lady sings sad songs,
             because her absent lover is unfaithful to her.
             She is playing a Vina.
             She sometimes addresses her appeal to a sympathetic peacock.
             This Raga should be sung in the morning.
             📖Poet:
             Oh lovely maiden,
             sixteen years of age.
             Golden jewels glitter on your fair limbs,
             you sink into your bed of lotus petals.
             Practice your song, and await your lover.- Yuki Ato Narayan (2018);

             At the base of her hands she wears a pair of elephant rings, a dark
chain, a golden flower at the tip of her nose, and a red dress that resembles
gold. The lips of the bimbo are red and the day is composed of the demon or the
loose turtle is the taste of the Rama cream and the three times of happiness.
॥ This is the Gurjari. - Pundarika Vittala (16th-c);

Gujari ragini:
Caupayī: The Creator had put together all his wits to picture the
handsome sprightly Gujarī. A confidante sits in front and recites
verse (or plays on the vīna). Her song induces drizzling rain,
and her sight delights the heart of her lover. There is a peacock
shining in its nimble movements, its voice so sweet, captivates
the heart, we have never seen a second lady so beautiful, the love
of the life of her beloved lover.
Dohā: Covering her body with a yellow robe, the damsel of bright
complexion sits. She steals one’s heart and makes Megha Mallār
happy.
(translation by Stephen Markel)
`],
             ['Maajh', '🌴', '4', '♂','🔆', 'R1?'],
             ['Devgandhari', '🎶', '3', '🌜','🔆', `Gandharva, the former of the gods, is the Gani of the fire movement, the Satrika, the full form, the
constantly shining, the first movement below, seated on the throne of a jeweled lion. He was praised
by the Indras as the lord of all tastes He was a tasteful man whose body was smeared with sandalwood
paste He wore white clothes and held a lotus in His hand He was adorned with all kinds of
ornaments This is the Devagandhara.- Pundarika Vittala (16th-c)`,'Also Kafi'],
             ['Bihagara', '🧘‍♀️', 'R2', '♀️','🪐', `He is white, dressed in fine white clothes, has a fragrant body, holds a betel nut
in his hand, is a lustful man, has a bow of flowers, and is rich in satrikas, captivating
the minds of the separated. A crown decorated with a cluster of champa
trees is worn around his neck, and in the evening he wears a garland of flowers.
॥ This is the Bihagada. This is the family of Natanarayana. - Pundarika Vittala (16th-c);

📖Story:
The air smells sweet and full of vigour.
The Mango tree attracts, blooming with joy.
Behold the peacocks dancing wondrously.
Yes my load, do partake of this delicacy.
Smiling ever so sweetly, she draws men from far and wide.
📖Poet:
melancholy in the calm of night,
thirst for enjoyment.
Behag which has a similar scale is more restful,
lovely, and satisfied.- Yuki Ato Narayan (2018)`], // 20
             ['Vadhans', '🎴', 'R3', '🔆','♂'],
             ['Jaitsri', '🌌', '4', '♀️','🪐', 'R1?, ਮਾ ਸ਼???', `On her nose she wore Śrīlavaṅga, with curly hair made of water, on her ears she wore a
choli, on her ears she wore a flower garment, and on her eyes she wore a tilaka made of baby
lightning. She wore a braid on her head with a heap of fine glass rings in her hands
and was a tasteful woman who conquered all her beauty and trisa in the afternoon.
॥ This is Jayatashri. - Pundarika Vittala (16th-c)`],
             ['Todi', '🪘', '2', '🪙','♂', `She held a beautiful staff in her left hand and a pair of
palm trees on the palm of her other hand. The mature bean-
stalk with developed eyes is bewitching, free-powdered,
full, beginning, middle, first-moving, like a morning gunshot.
This is the Todika. - Pundarika Vittala (16th-c); At the fair of the shadow play, the Gauraṅgi, whose body was revealed in the
middle of the moon, wore a braid on her head and earrings made of gold and jewels.
The clever Yavani Todika with her mature eyes slightly red and dressed in
beautiful clothes like a Greek woman is enjoying herself in the morning after drinking grapes. Todi. - Pundarika Vittala (16th-c)`],
             ['Bairari', '⛵', '3', ' ♀️',' 🪙', `In her own room, she volunteered to play with her softer words, and she
wore a colorful dress with bunches of flowers, and she was covered with
flowers and chamaras. She is adorned with various ornaments
and is the companion of Madana and has a tender body and is beautiful.
This is Varali. - Pundarika Vittala (16th-c);

This melody is visualized as a girl separated from her lover.
She goes out to meet him longing to be reunited.
The hands clasped over her head indicate her passionate desire.
This autumn melody should be sung at the end of the day.
📖Poet:
Thinking of her lover,
she smiles,
enjoying the cool breeze of the whisk
she kisses him gently,
keeping him under her spell.- Yuki Ato Narayan (2018)`],
             ['Tilang', '‍🌴', '3', '♀️','🪐', '♂🪐?'], // 25
             ['Suhi', '🎶', '2', '🌜','🔆'],
             ['Gond', '⛵ ☔ 🎶', '2', '🔆','☿', `He is seated at the Malhara Mela, and is
adorned with a string of vocal cords. The devotee
of Lord Shiva holds a rambha leaf in his
crown and a net of peacocks on his waist
This is the Goundaraga.- Pundarika Vittala (16th-c)`],
             ['Ramkali', '🧘‍♀️', 'R4', '🌜','🔆', '🌜☿?', `Veneration for divine handiwork
             Pregnant with Himalayan strains –
             A somber myth of pagan creation
             Interspersed with charming days of rest. - Taimur Khan (2004)`],
             ['Mali Gaura', '🎶', '4', '♂','🌜'],
             ['Maru', '🎶', '3', '♀️','🪐', ['🌜🪐?']], // 30
             ['Tukhari', '🪘', '4', '🌜','‍🔆'],
             ['Kedara', '☔', 'R3', ' ♀️','🔆', `On his right hand he held a staff and a trident,
while in the other hand he held a white robe.
Surrounded by his disciples with their eyes fixed on the tip of his nose and his mind chanting
the name of the mountain Kedara is a water source born of three kinds of Suhavi mela at
night This is Kedar. - Pundarika Vittala (16th-c)`],
             ['Bhairao', '🧘‍♀️', '1', '🪙','♂', `
             Bhairav has its name from Bhairava, an incarnation of Shiva,
             and was historically associated with glory and awe,
             but became identified with peace and devotion.
             Upholding Ganga, the crescent moon upon his brow,
             three-eyed, wrapped in the skin of an elephant and adorned with snakes,
             his scarf white, his garland of human skulls,
             armed with a burning trident-so triumphs Bhairava, the first of ragas.
             Shiva is represented here, in the placid mood of a yogi or ascetic.
             His consort smears his body with ashes, saffron and sandal paste.
             This is an autumn Raga and should be played early in the morning.
             It expresses a feeling of peace and harmony and is supposed to drive away fear.
             📖Poet:
             His limbs smeared with ashes (that lovely body),
             his brow lustrous with the cool rays of the moon,
             trident in hand and mounted on a bull,
             such is Bhairava, and so the sages tell.- Yuki Ato Narayan (2018);

             Bhairava: This immediately born •
red, black trident, dressed in silk, with a body of ashes and three eyes.
The bull, whose horns are on his neck and whose ears are
adorned with a pair of earrings, is shining in the morning even in the
winter. Magtigani, Satrico, Ri, Kapardi
This is the Pure Bhairava. - Pundarika Vittala (16th-c); Bhairavi: She was born in the melody of Dhannāsi and was
adorned with a vocal melody. The goddess
Bhairavī, whose face was adorned with all kinds of
ornaments, was dancing and singing in the morning.
This is Bhairavi. - Pundarika Vittala (16th-c);
He had a body of ashes, horns around his neck, a pair of ears, a conchshell seal, a coral
protector for his feet, and a crown tied to the beautiful matted hair of the lord of the phoenix.

The follower of Ujjhala, whose words are more eloquent, is played
by the kinneras and is full of fear in the middle of the fire and lightning.
In. 14
This is the Bhairava. - - Pundarika Vittala (16th-c);

With ear-rings of mango flower and a high diadem spread wide like the fan of a peacock,
her indigo body dark like the black bee, lovely, voluptuous, fortunate,
is Bhairavi the darling of Spring.
📖Poet:
She whom poets in their vision see as great-eyed Bhairavi,
golden consort of Bhairava,
throned on carven crystal at the peak of Kailasa,
with cymbals in her hands,
worships Him with the leaves and Hours of the lotus.- Yuki Ato Narayan (2018)
`],
             ['Nat Naryan', '☔', 'R2', '🌜','☿', 'R3?', `He is accompanied by a charmed woman, he is a two-moving elephant, he is full of snow, he is
born from the face of Rudrani, he is a dancer of the peacock family, he is rich in ornaments.
In the rainy season this Natta-Nārāyaṇa, whose body is dark-skinned and dressed in
yellow, holds a shining sword in his hand and always reveals the good fortune of
men. This is Natta Narayana.- Pundarika Vittala (16th-c)`],
             ['Kanra', '🪘', 'R2', '🌜','🔆'], // 35
             ['Hamir', '', '', '','', '', `He was completely double-moving, riding a fire-moving sight, and was a part of the
collective trust, beautiful and youthful, with a smile on his face and a ball in his hand.
His face is white like that of a betel nut, and he is friendly to flowers and
arrows. He is dressed in red clothes and has a powerful heart. This
is the Hamir Nata. This is the pure drama family.- Pundarika Vittala (16th-c);
Could night perhaps churn out
Such sweet incessant tunes that just
Turn around like lovers for a last, last kiss,
And make the same little confession
In iridescent, winning ways? - Taimur Khan (2004)`],
             ['Prabhati', '🎴', 'R4', '🔅','🌜', '1🧘‍♀️?'],
             ['Durga', '🧘‍♀️', 'R2', ' ♂',' 🔅', 'R3?'],
             ['Jaijaivanti', '🌴', 'R2', '♂','🌜', `He is the Sadi-madhyantka of the Sri Raga itself, the meladridha-vidhu-gatika
He was dark-skinned, dressed in yellow, and wore a tilaka with saffron in the middle of his
forehead. The goddess of fortune, whose neck is adorned with a garland of precious stones
and plays with graceful flowers, appears in the evening without any arrows of flowers.
This is what Jijavanta said.- Pundarika Vittala (16th-c);
Earthy passion in the cradle of perfect joy –
A youth stands reconciled,
And cannot help but fade in paeans
To that one pretty thought in life.
 - Taimur Khan (2004)`],
             ['Patdeep', 'ਕ', '3', '🌜','🔆'], // 40
             ['Tilak', '🌴', 'R2', '🔆','🌜'],
             ['Kamoda', '🌴', 'Anytime', '🌜','♂', `He is lusty in the form of lust, holds a crown in his hand, wears a
white robe, bears a beard of musk drops, is crowned with flowers and is rich
in necklaces and other ornaments. He is a speaker of sarcastic words with
young men in his hands a cane in his hand he is a glorious man full of satri
Chm.M
This is the lust. This is the Hindola family. - Pundarika Vittala (16th-c);
The Kamboji, the bewitching woman, who is rich in satrikas, is called
Kamboji, and she is dressed in flowers, and she wears a bracelet.
Her body was adorned with musk drops and her body was adorned with gold and gems and
her ears and other legs were shining in the morning with her friends and her hands were like those of a kinnera.
This is Kamboji.- Pundarika Vittala (16th-c)`],
             ['Saraswati (ਵ', '💊', 'R2', '🌜','🚹'],
             ['Chandrakauns', 'ਚ', 'R3', '☿','🔆'],
             ['Charukeshi', '-', '3', '🌜','🔆'], // 45
             ['Jog', 'ਕ', 'R2', '☿','🔆'],
             ['Kaunsi', 'ਕ', 'R3', '🌜','🔆'],
             ['Bhairavi', '🧘‍♀️', '2', '☿','🔆', 'used to conclude a concert'],
             ['Abhogi', 'ਕ', 'R2', '☿','🔆', 'peaceful sleep'],
             ['Madhumadhavi', '', '', '','',`The enchanted Gaurī, whose body is adorned with wonderful clothes and who is adorned with
all kinds of ornaments, is like a drunken śāridha or a two-moving river who moves like a fire.
The woman with the bow of the earth and the eyes of a deer child with sharp arrows
at the end of her eyes goes to her husband's house with her friends in the spring of honey
This is Madhumadhavi. - Pundarika Vittala (16th-c)`], // 50
             ['Puniya', '🧘‍♀️', '2', '☿','🔆'],
             ['Adana', '⛵', 'R3', '🔆','🌜'],
             ['Hindol', '🌴', 'R4', '🪙','♀️', `
             With the flowers of the Lotus she worships the Lord Krishna
             who sits on a swing tied to the hanging roots of a banyan tree*1.
             She listens to the notes of the veena,
             her heart full of love, her fair limbs covered with jewels.
             - Yuki Ato Narayan (2018);
             2
Gauranga, dressed in yellow, rocking in a forest of dense flowers.
Let the first movement in this passion be the Satrika Traripo
In
Hindola is accompanied by a woman and is adorned with a
bracelet crown and pearls and is adorned with great earrings. - Pundarika Vittala (16th-c);
`],
             ['Deshkar', '‍🧘‍♀️', '1', '🪙','♀️', `Born from the mouth of Ghora, the three-movement Ganigamas are in the passion
of Satripurnotra 3 He has red limbs, lotus-eyes, walks on a white
elephant and is a friend of Bakharoja. He wore a garland of pearls
around his neck and a crown on his head and dressed in colorful clothes.
This is the countryman. - Pundarika Vittala (16th-c); The goddess of fortune, whose eyes are like ointment on a
betel nut, is adorned with ornaments made of gold and gems.
Every morning the princess, whose eyes are like those
of a king, is attached to the body of Lord Nārāyaṇa. This is
the country eye/Deshakshri. - Pundarika Vittala (16th-c)`],
             ['Kalingada', '‍🧘‍♀️', 'R4', '🌜','🔆', '♀️,🪙,☿? R4?'], // 55
             ['Chhayanat', '🪘', 'R2', '🌜','♂', `Karnatasyapramelaprakatitasutanustvadimadhyantasadja:
He wore a necklace around his neck, a jewel, and a taste for white clothes.
Gauranga with red eyes and many companions with heroic beauty
The shadow dancer laughs at the passersby at the end of the day, holding a flowery ball
This is the shadow play. - Pundarika Vittala (16th-c);

Chayanata, fair-limbed, with a pink turban and,
about his throat, a jewelled necklace.
How pleasant is his polished speech !
At evening by the roadside, surrounded by friends,
a sweet ball of flowers in his hand,
bold and amorous with reddened eyes,
he laughs aloud at the passers-by.
📖Poet:(Ragamala)
The flashing sun radiates energy so divine.
The Mango tree attracts blooming with joy.
Sweetly and alluringly the vina plays.
Noble and shining with pleasant,
he holds a sweet ball of flowers.- Yuki Ato Narayan (2018)`],
             ['Desh', '🪘', 'R3', '♂','🌜', '🌴-Khamoj', `She wore a garland of pearls on her ears, a necklace around her neck, a white
robe on her feet, anklets and a bracelet. The great-granddaughter of
Ahanga, holding a leaf on the soft, pleasant ground, always goes to the
countryside, where the moon at the end of Gandhara is the water of the three-time enemy.
This is the native. - Pundarika Vittala (16th-c);
A song that sings its own soil,
Always unaware,
Always molting and returning
To its fashioning clay. Desi - Taimur Khan (2004)`],
             ['Gara', '🪘', 'R2', '♀️','🪐', '🌴-Khamoj/Kafi?'],
             ['Gunakeli', '🧘‍♀️', '1', '🪙','♂', `
             Story:
             The maiden in the personification of Gunakali,
             is in tears and wears old garments.
             Her lover is away and expected soon.
             She prepares a garland of flowers for her lover
             and is anxious because he is overdue.
             📖Poet:
             The sets mandara flowers in a golden jar,
             filled with virtue and dark as the lotus,
             She plucks gently at the petals,
             Her mind fixed on the lovers sport.- Yuki Ato Narayan (2018);

             She was born in the woods of Gurjarya and had a sparkling juice in the
middle of her feet. A lover who is adorned with various ornaments,
whose words are soft and honeyed, whose body is dark-skinned and who is
a symbol of her husband’s pure qualities, goes away in the evening. This
is the multiplier.- Pundarika Vittala (16th-c); This is the Nadar
number. Gurjaryamelayukta ridhaparirahita satrika blue-clad gauri muktalaka
ya navanagarchita kamasanketasastha. Sitting in the shade of
a nīpa tree, holding a lotus leaf on her clear palm, the beautiful
goddess Guṇḍakrī gazed at the footsteps of her beloved in the morning.
This is the Gundaki.- Pundarika Vittala (16th-c);
The name of God at night’s final hour –
A solemn plaint without reproach,
A calm devotion etched in stone. - Taimur Khan (2004)`],
             ['Sohini', '🎶', 'R4', '🪙','♀️'], // 60
             ['Khokar', '🎶', '2', '♂','🌜', `Caupayī: The lady Kakubhā is unhappy because she is
separated from her beloved. She has left her palace with all
its comforts and lives in the forest, which is thick with trees
and undergrowth. She writes a letter to her beloved, her eyes
overflowing with tears. Monkeys can be heard chattering as they
play in the forest. There is a lovely pond nearby, which abounds
in beautiful lotus blossoms. There are countless peacocks,
cuckoos, and other birds chirping and singing, but the lady is so
engrossed in thoughts of her lover that she has even forgotten to
take care of herself. She appears to be in an imagined embrace
with her lover.
Dohā: She is lost entirely in thoughts of her lover; her eyes are
impatient to see him. Her spirit survives in her body; she does
not die, although the grief and separation are unbearable.
(translation by Stephen Markel)`],
             ['Multani', '🪘', '2', '♀️','🪐', `The sun peeps through
             A cave and engenders mysteries
             Where all lost relics of understanding
             Are sheltered from sultry incandescence. - Taimur Khan (2004)`],
             ['Jaunpuri', '⛵', 'R2', '🪙','♀️', `An ethereal sadness grips a morning
That smells like no other
And emanates the radiance
Of brimming hearts and childhood haunts –
The bittersweet of growing up. - Taimur Khan (2004)`],
             ['Dhanasri', '🎶', '', '','', `She was adorned with ornaments all over her body, and her body
was adorned with rich ornaments. ✓ The white companion with
tears in her eyes looked at the former Jeraka and gave her a
lot of wealth in her mouth like a song and had a blessed nose.
This is Dhannasi. - Pundarika Vittala (16th-c);

Ancient manuscripts give us numerous examples of a heroine separated
from her lover and whiling away the hours by painting his portrait.
In this winter raga, the lady is seated in a courtyard.
Her painting is meant to speed the lover’s return.
This raga is to be performed late in the morning.
📖Poet:
Seated under the Vakula tree,
you draw his portrait on a board.
Oh! Charming lady,
deep in grief,
he comes conjured by his painted image.- Yuki Ato Narayan (2018)`],
             ['Saindhavi', '', '', '','', `The female goddess Bhairavī is blessed with a
beautiful voice and is called Satrika. - Speaking softly with
various movements, the red-clad Saindhavi always
prayed for the purer fame of the warrior lords in battle.
This is the Saindhavi. - Pundarika Vittala (16th-c)`],
             ['Marvi', '', '', '', '', `She had long hair like the moon, her eyes were like the movement of fire, her eyes
were like gold, and she was adorned with many kinds of flowers. •
Marvi, the eldest born of Mewar, with the eyes of a deer cub, wearing
red clothes and smiling slightly, always praised the hosts of kings in battle.
This is Marvi. - Pundarika Vittala (16th-c)`],
             ['Paraj', '🌌', '', '','', `The satri was adorned with various ornaments, holding a double-moving gun and palm in
his hand, and holding a sword in his hand on his back. He is white in appearance
and tall in appearance and soft-spoken He is always benevolent to all
the worlds He is always sought after day and night He appears to be the son of other kings
In. 14.
This is the paraja. - Pundarika Vittala (16th-c)`],
             ['Bhupali', '', '', '','', `She is devoid of the original and middle form of the Jatau Malhara Mela, 20 with
a golden flower in her nose and a kajjala necklace in her lotus eyes. Wearing a pearl
necklace in the middle of her brow, a tilaka on the bottom of her bracelet, and
a red robe at the root of her hand, the goddess of fortune goes to the king’s palace.
This is Bhupali. - Pundarika Vittala (16th-c);

The crown decorates the head while kundals (the rings) adorn the ears.
His flute is potent enough to enchant the universe.
His beautiful eyes, arched eyebrows and a garland of flowers around his neck enthrall the heart.
📖Poet:
I see Bhupali comfortably seated on a lion’s throne,
his huge family around him.
Young women,
their eyes like those of deer,
fan him with a whisk.- Yuki Ato Narayan (2018)
`],
             ['Sayam', '', '', '','', `The cuckoo’s body was revealed by the transformation of
the satri, the full form of the black body, the yellow dress, the sweeter
voice, the differences in the tremors. He wore a garland of
gems around his neck and a tilaka decorated with kuṅkuma flowers.
This is the black. - Pundarika Vittala (16th-c)`],
             ['Samanta', '', '', '','', `At the fair called Karnataka he appeared in the form of a bridegroom with a full form of
three sixteen feet with lotus feet and lotus eyes and wore two earrings from his pair of ears
Wearing a crown on his head, a garland of many flowers around his neck and fine
clothes, he shone in the morning with a strong sense of passion for the mature feudal lords.
May 30
This is the feudal passion. - Pundarika Vittala (16th-c)`],
             ['Ramkri', '', '', '','', `She was wearing a blue dress with a beautiful pearl
necklace and jewels. Ramakri with restless eyes
roaming the clearer mountains with skillful
beauty and three-sixths moving like fire always shines
This is Ramkri. - Pundarika Vittala (16th-c)`],
             ['Bahuli', '', '', '','', `She was seen by Rama as a criminal or without a smile.
The proud emerald woman with the face of a betel
nut is rich in clothes and ornaments and has a thick pearl
in her nose and is very beautiful in the eastern evening
This is the plural. - Pundarika Vittala (16th-c)`],
             ['Vibhas', '', '', '','', `He was a cow-haired man with a lotus-like body, a fine robe, a beard and a
cashmere dot, and he wore a minister’s garland and ornaments around his neck.
Born in the fair of his father, he is more than the first water, the satrika, the water, the deceitful,
he goes at his own will and in the morning he speaks to his beloved with the passion known as Sri
Bibhasa. This is the Bibhas. - Pundarika Vittala (16th-c);

Bibhas is an early morning melody illustrated by two lovers who have fallen asleep at daybreak.
They are roused from slumber by the irritating crow of a rooster.
In poetry, dawn and the rooster are regarded as the enemies of lovers.
This is a monsoon raga.
📖Poet:
Taking aim with my lotus arrow
I seek to silence the cruel bird,
Oh cuckoo!
Enemy of lovers and friend of the dawn,
Rising me from my beloved’s side- Yuki Ato Narayan (2018)`],
             ['Ravana', '', '', '','', `He was born in a native assembly and wore three kinds of
samapasa. The evening goddess, holding a ball of flowers and beauty,
is beautiful in the evening, and she is a beautiful young
woman in the marketplace, delighting the passionate people.
This is Ravana. - Pundarika Vittala (16th-c)`],
             ['Pahadi', '', '', '','', `She was well attached to the Gaudi fair, and her lotus-eyes
were soaked with passion for her first qualities. She is dressed
in white and has a younger body and is rich in beauty
and delights the hearts of young men at the end of the day.
This is the Padi. - Pundarika Vittala (16th-c)`],
             ['Nadaramkri', '', '', '','', `She is a full-fledged satrika, who is a virtuous woman, who holds musical instruments
in her hands, who is dark-skinned, who has long eyes, who is adorned with
necklaces and other ornaments of heavy water. In the middle of the night
she was dressed in red and carried a beautiful elephant and carried a golden
trunk. This is Nadaramkri. - Pundarika Vittala (16th-c)`],
             ['Tanka', '', '', '','', `He was attached to dancing and was
tolerant of the movement of his eyes.
The white, lustful Sutakka, whose body is smeared with sandalwood
paste and whose body is full of flowers, is always the messenger of lust.
This is the takkah. - Pundarika Vittala (16th-c)`],
             ['Malava', '', '', '','', `A well-born man in the Godi fair or free from enemies, full of low-mindedness,
heroic, devoted to beauty, tasteful like a wedding pig, is a friend of the moose. The
clever Mālava king of passion appears in the assembly in the evening with a lotus
face and lotus eyes dressed in white and adorned with garlands around his neck
This is the Malava. - Pundarika Vittala (16th-c)`],
             ['Karnataka Bengal', '', '', '','', `The Bengal-end and the Karnataka, without the Gadi-madhyantaka, are
the Gaudi-sammelan, carrying a flower stick on the bottom of
the lotus palm. In the morning he goes with his relatives dressed in white
garments wearing a garland of flowers and necklaces and a garland of
flowers This is Karnataka Bengal. This is the Sri Raga family. - Pundarika Vittala (16th-c)`],
             ['Nat', '', '', '','', `Born in the north-east, he is a three-moving Ganiridha, full of satri, patient,
5 red-bodied, with lotus-eyes, dressed in white, and rich in necklaces
and other ornaments. He holds a sword in his hand and is a mighty man
whose words are always smiling and whose voice is soft and deep.
This is pure drama/Subh Nat. - Pundarika Vittala (16th-c)`],
             ['Malshri', '', '', '','', `She was born in the Śrīrāga-mela, and she was created by the
nine mountains. Laughing at her beloved with mature and
sarcastic words, the slender Malavasri always slipped from the
bottom of her fickle hands with her wheel-shaped sword ||
This is Malshri. - Pundarika Vittala (16th-c)`],
             ['Devakri', '', '', '','', `The goddess of fortune was beautiful, tender-looking, with a lotus-crowned breast, dressed in
a picturesque cotton cloth, adorned with ornaments all over her body, and soft-spoken.
At the end of the day, Devakī, the daughter of the gods, who is more clever than the
daughter of the gods, dressed in a satrika or a satrika, moves more than a melody
॥ This is the Devakri. - Pundarika Vittala (16th-c)`],
            ['Ityabhiri', '', '', '','', `The moon is two or three moons away, but here the woman has beautiful eyes, a proud dark
complexion, a trident, and a soft-spoken woman, who wears a braid on her head.
The goddess of fortune was dressed in a blue robe
and had a garland of coral flowers on her neck.
Ityabhiri. - Pundarika Vittala (16th-c)`],
            ['Salanganata', '', '', '','', `He was white and full of youthfulness He wore a garland of
pearls around his neck He was dressed in all kinds of crimson clothes
He is rich in beauty and wellwishers He is attached to soft words He is pleased with the
midst of the six stars He appears at the festival of Kedara when the lord of the day is
absent This is the Salanganata. - Pundarika Vittala (16th-c)`],
             ['Karnataka', '', '', '','', `He is adorned with yellow clothes, wears a
crown of bangles, a throne and an umbrella.
The melody of the Karṇāṭa melody, which is like the neck of a keki, is like the neck of
a keki, or the melody of a river, which is played by three women in one place. This
is the Karnataka Raga. - Pundarika Vittala (16th-c)`],
             ['Saveri', '', '', '','', `The snake, whose eyes are the part of the body
that runs, is the movement of the eyes. Saveri is
wearing a necklace around her neck
and a fine dress with a yellow cotton dress. This
is Saveri.- Pundarika Vittala (16th-c)`],
              ['Suhavi', '', '', '','', `She was slender, dark-skinned, with deer-eyes,
a bride’s lotus-face, and was wearing a yellow dress.
With a slight smile on her face she was composed of ten strands of chamaras and was adorned
with the melody of Mer Saveri and in the morning she was a beautiful Satrika in full form
This is Suhavi. - Pundarika Vittala (16th-c)`],
              ['Saurashtra', '', '', '','', `The savery-mail-red, self-conscious, self-conscious woman wore a
picturesque dress, a bracelet and a mechaki on the edge of her hard breasts.
The white-haired lotus-eyed snow-faced pomegranate-seed-toothed
Saurashtra woman goes in the evening full of beauty and accompanied by
Madana. This is Saurashtra. - Pundarika Vittala (16th-c)`],
              ['Shankara', '', '', '','', `He was dressed in white and red, and his neck
was covered with a row of heavy waters.
The three beginnings of the dance, known as Shankarabhusana, with their printed easy melodies,
move in the middle of the morning and evening in the remaining tone of Madhumadhavya.
This is the Shankara ornament. - Pundarika Vittala (16th-c);
Frankincense in the night’s distance
From a solitary temple
Where pundits keep all lamps lit,
To reminisce charms of whimsical Shiva. - Taimur Khan (2004)`],
              ['Lakshmani', '', '', '','', `There are others who are infinitely passionate and who depend on people from various
countries. These are the signs of the cross and let them be ridden by those who know them.
This is the characteristic of passion/lakshmanee. - Pundarika Vittala (16th-c)`],
['Gaud Sarang', '', '', '','', `Seated beneath the wishing Tree his body white as snow,
his long hair tightly bound,
Gaud Sarang is seen in the afternoon playing upon a lute.
The sages tell that he has the voice of a nightingale.
📖Poet:（Shat）
On the blessed summit of Mount Kailasa dwells the Greatest of Sages.
With matted locks,
His body white with the ash of funeral pyres,
sweetly and tenderly He smiles.
Ever in him, Shat raga, at dawn,
are sung majestic odes worthy of meditation.
In Him there dwells the music of the Gods,
its sweetness and its meaning.- Yuki Ato Narayan (2018)`],
              ['Desavarti', '', '', '','', ` The Desavarti painting depicts a lonely lady holding her arms over her head,
and twisting her body.
The raised arms signify longing and passion,
for her absent lover.
This is a summer Raga and should be sung in the evening.
📖Poet:
The stretches her arms and sighs,
Angered by his unfaithfulness.
He arrives, like cupid with his sweet bow.
But the lovely lady feigns sleep.- Yuki Ato Narayan (2018)`],
              ['Deepak', '', '', '','', `Deepak Raga is rarely performed since it has a legendary association with intense heat and fire.
This raga depicts a lord and lady in a room lit by small earthen lamps.
Deepak Raga is a summer raga, is set in a palace, and is meant to be sung at noon.
📖Poet:
Darkness covered the lady’s chamber till Deepak entered,
load of the dazzling lays,
she covered her face in bashful and timid,
 he abandons his heart and is conquered.`],
              ['Darbari Kanada', '', '', '','', `Darbari Kanada, or simply Darbari, is a Hindustani raga in the Kanada family,
which is thought to have originated in Carnatic music
and brought into North Indian music by Miyan Tansen,
the legendary 16th century composer in emperor Akbar's court.
This tradition is reflected in the name itself;
Darbar is the Persian derived word in Hindi meaning "court."
📖Poet:
Akbar and Tansen,
visit Haridas in Vrindavan.
Haridas is to the right, playing Veena
Akbar is to the left,
dressed as a common man,
Tansen is in the middle,
listening to Haridas.- Yuki Ato Narayan (2018)`],
              ['Bhimpalasi', '', '', '','', `Bhimpalasi playing in a garden of sandal trees.
Her silken garment is yellow her hips are beautiful.
With her left hand she holds the neck of a Vina.
📖Poet:
With wide lotus eyes
and fragrant with celestial flowers,
Bhimpalasi, the sages tell,
sings with her deep voice to the lute.
Her lovely form is the embodiment of art.
- Yuki Ato Narayan (2018)`],
              ['Bihar', '🎴', '', '','', `Bahar is a very popular springtime raga.
During the spring, it may be sung at any time of the day.
However during any other season, it is a night time raga.
Bahar has a very distinctive character.
Behavior refers to practical aspects of the music.
It is complicated to talk about this for Hindustani music since many of the concepts
are fluid, changing, or archaic.
The following information cannot be accurate,
but it can attempt to reflect how the music existed.
📖Poet:
Bahar is beautiful.
The beauty brought from nature,
And receive blessing from God.
Appropriate, beautifully structured,
Complicated and bold, its temper.
Sing a beautiful and charming love song.- Yuki Ato Narayan (2018)`],
              ['Bageshree', '🎴', 'R2', '♀️','🔆', `Bageshri (Hindi: बागेश्री) is a Hindustani classical raga.
It is a popular raga of the late night,
which is meant to depict the emotion of a woman waiting for reunion with her lover.
It is said to have been first sung by Mian Tansen,
the celebrated court singer of the Emperor Akbar in the sixteenth century.
📖Poet:
Her voice seductive when she is near her lover,
Bageshri is lovely, desirable.
With eyes large like the lotus and a flaw-less pale body,
she plays upon the lute her songs of love.- Yuki Ato Narayan (2018)`],
              ['Alhaiya Bilawal', '🧘‍♀️', '0', '','', `📖Story:
Dwarf, with the sheen of a dove,
on a swing pleasantly placed for play.
Krishna is gently rocked, the sages say, by women with ample hips.
Her pale golden body with great hips is fragrant like the flowers of heaven.
Well favoured, long-eyed, she holds a lute.
📖Poet:(same as Bilawal)
Bilawal has the lustre of the blue lotus.
Arranging jewels upon her body,
she makes secret signs to her lover.
How can she forget for one moment her chosen deity,
the God of Love ?- Yuki Ato Narayan (2018)`],
              ['Ahir Bhairiv', '🌴', '1', '','', `We praise Bhairava, the hero, the source of life, the measure of rhythm,
pervading the ocean of notes and intervals.
A skull in his hand, the crescent moon upon his matted hair,
he worships Shiva, Lord of Sleep.
His body is smeared with saffron and sandal paste.
📖Poet:
Your melted rocks capture Ganga’s waves,
with crescent moon and russet snake.
Ash smeared body, terrible to  behold.
Dispelled of fear, I sing this for you.- Yuki Ato Narayan (2018)`],
              ['', '', '', '','', ``],
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
<p><b>Wives</b>: Gaundkari <small><small>(1 🪙♂)</small></small> <img style="position: absolute; opacity:0.6" src="media\malkaus\maligaura.png" title="mali gaura" width="190px"><small><small>(2 DR)</small></small>, Devgandhari<img style="position: absolute; opacity:0.6; left: 110px;  top: 160px;" src="media/malkaus/gunkali- 0.png" title="gondkari" width="190px"><img style="position: absolute; left: 230px;
    top: 160px; opacity:0.6" src="media\malkaus\Deva Gandhar-0.png" title="devgandhari" width="190px"> <small><small>(2 🌜🔆)</small></small>,
  Gandhari   <img style="position: absolute; left: 410px;top: 160px; opacity:0.6" src="media\malkaus\Gandhar - learning with saint ; on sant level.png" title="gandhar" width="190px"><small><small>(2)</small></small>, Seehute, <span style="color:rgb(255 218 0)">Dhanasri<img style="position: absolute; left: 644px;top: 160px; opacity:0.6" src="media\malkaus\dhanascri - eatig enjoying eaging cookingQ.png" title="dhanashri" width="190px"></span> <small><small>(3 🔅🌜)</small></small>.<br>
<b>Sons</b>: Maru <small><small>(3 🌜🪐 Rut 5🍂)</small></small>, Marwa <img style="position: absolute; opacity:0.6;    left: 280px;
    top: 310px;" src="media\malkaus\marwa.png" title="marwa" width="90px"><small><small>(R1 🪙♂)</small></small>,
Parbal Chand, Kausak <small><small>(R2)</small></small>, Ubara, Khokar <img style="position: absolute; left: 660px; opacity:0.6" src="media\malkaus\Kakubh- 0.png" title="khokar" width="190px"> <small><small>({data[61][2]+" "+data[61][3]}{data[61][4]})</small></small>, Bhuranad <small><small>(Bhamarananda?)</small></small>.<br>
<b>Other</b>: Bhatiyar <small><small>(1 ☿🔆)</small></small><br />
<b>Retro</b>: Mali Gaura <small><small>({data[29][2]+" "+data[29][3]}{data[29][4]} Rut 5🍂)</small></small>, Suhi <small><small>(2)</small></small>, Sohini <img style="position: absolute; opacity:0.6;    left: 315px;
    top: 310px;" src="media\malkaus\Sohni.png" title="sohni" width="190px"><small><small>({data[60][2]+" "+data[60][3]}{data[60][4]})</small></small>,
 Puriya <img style="position: absolute; opacity: 0.5;
    left: 498px;
    top: 310px;" src="media\purvi\Purvi - mother.png" title="purvi" width="190px"><small><small>(R2)</small></small>.
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
      left: 391px;" src="media/hindol/vasant - 0.png" title="vasant" width="190px"></u>, Sindhoori ∨ Sindhuri, Ahiri <small><small>(1)</small></small>.<br>
<b>Sons</b>: Suryakant, Bhasker, Chandra-Bimb,
Mangalan (Mangal), Saras-baan, Binoda,
 <u>Basant</u> <small><small>(L 🔅☿)</small></small>,
 Kamoda <small><small>(Anytime 🌜♂)</small></small>.
 <br />
 <b>Other</b>: Kalavati <small><small>(R2 🌜🔆5️⃣)</small></small>, Khamaj (R2 ♀️🪐), Desh <small><small>({data[56][2]+" "}{data[56][3]}{data[56][4]}).</small></small>
</p>
<br />
<ul><li><b style="color:#ff0e0e;font-family: 'Fish&Chips'">Deepak</b> <span title="🪘 - related to abundant physical sensations, touch, and presence">🪘</span><br></li></ul>
<p><b>Wives</b>: Kachheli (R3),
  <u>Patmanjari</u> <small><small>(3 🔅🌜<span title="S R G m P D N S'/S' n D P m g R S">7️⃣</span>)</small></small>,
   Todi <small><small>(2 🪙♀️)</small></small>, Kamodi <small><small>(Anytime)</small></small>,
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
   Asa <small><small>(R4 {data[10][3]}🔅)</small></small>, Suhavi/Soohou <small><small>(Puniya? or Soob)</small></small>.<br>
<b>Sons</b>: Bayra-dhar, Gaj-dhar <small><small>(2?)</small></small>,
Kedara <small><small>(R3)</small></small>, Jabli-dhar, Nat <small><small>(R3 ♂🔅)</small></small>,
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
Bhinna Shadja <small><small>(R3 ♂🔅, 1/2 Rut 5🍂)</small></small>,
Jogkauns <small><small>(R3 ♂🔅)</small></small>,
Hemant <small><small>(R3 ♂🔅<span title="S G m D N S' - S' N D P m G R S; (S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S; Mukhya-Ang	G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S;)">5-7</span>)</small></small>,
Bihagaraa ∨ Bihag <small><small>(R2 ♀️🪐)</small></small>.<br>

<b>Other</b>: Deshkar <small><small>({data[54][2]+" "+data[54][3]}{data[54][4]})</small></small>,
<br>

<b>Combo</b>: Gauri Deepak ∨ (Gauri Yeman)  <small><small>(R2)</small></small>, <span title="Fulfillment">Poorvi</span>, Bairagi.
</p>
<br />


<ul><li><b style="color:#9a0fff;font-family: 'Fish&Chips'">Sri raga <span title="⛵ - feeling of movement">⛵</span> <small><small>(4 ☿🌜)</small></small></b><br></li></ul>
<p><b>Wives</b>: Bairari <small><small>(3 ♀️🪙 Rut 4🍂)</small></small>, Karnati <small><small>(1 DR)</small></small>,
  Gavri <!--gawati Gaoti (Gawoti, Gavati, Gavti)  Bheem --><small><small>(3 SP)</small></small>, <u style="color:#9a0fff">Asavari</u> <small><small>(2 🪙♀️ 5️⃣-7️⃣)</small></small>,
   Sindhve ∨ Sindhura <small><small>(4 SP)</small></small>.<br>
<b>Sons</b>: <u>Salag</u> <small><small>(3 🌜🔆)</small></small>, <u style="color:#9a0fff">Sarang</u> <small><small>({data[14][2]+data[14][3]}🌜)</small></small>,
Sagra <small><small>(R1 GD)</small></small>,
Gond <small><small>(2 🔅{data[27][4]})</small></small>, Gambhir, Gund, Kumbah <small><small>(R3 MS)</small></small>,
Hamir <small><small>(R2 🪙♀️)</small></small>.
</p>
<b>Others</b>: Khat <small><small>(R2)</small></small>, Charukesi <small><small>(R3 ♀️🪙)</small></small>, Jaunpuri <small><small>(R2 🪙♀️)</small></small><br><br />

<!-- raag names
https://www.pinterest.ca/maitrey0635/ragamala/
https://raagtime.com/
-->
<img style="width:101px;opacity:0.5;margin:auto;" src="data:image/jpeg;base64,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" />

<img src="timing.png" style="width:300px;opacity:0.4;"/>
According to Dattila (Second Century AD.) / O.C. Gangoly (1935) Ragas and Raginis. Nalanda Books, Bombay. pg. 109 ("...No actual musician was actually killed")

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
															<span style="color:cyan"></span>
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
																<span style="color:cyan">Basant,(☔🌌)</span>
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
																<span style="color:cyan">'Malhaar ☔ ☿🔅 Kedara ☿🔆</span>

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
															<span style="color:cyan">'Asa (☔, ♂🔅) Kedara ☿🔆</span>
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
