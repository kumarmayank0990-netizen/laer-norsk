/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhraseItem, QuizQuestion } from '../types';

export const ESSENTIAL_PHRASES: PhraseItem[] = [
  // --- A1 CONTENT START (Existing) ---
  // Greetings & Introductions
  {
    norwegian: 'Hei!',
    phonetic: 'hay',
    english: 'Hi / Hello',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'God morgen',
    phonetic: 'go moh-ren',
    english: 'Good morning',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'God dag',
    phonetic: 'go dahg',
    english: 'Good day (formal)',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'Hvordan går det?',
    phonetic: 'voor-dan gohr deh',
    english: 'How is it going?',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'Det går bra, takk!',
    phonetic: 'deh gohr brah, tahkk',
    english: 'It is going well, thanks!',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'Hva heter du?',
    phonetic: 'vah heh-ter dʉː',
    english: 'What is your name?',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'Jeg heter...',
    phonetic: 'yay heh-ter',
    english: 'My name is... (I am called...)',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },
  {
    norwegian: 'Hyggelig å møte deg!',
    phonetic: 'hygg-eh-lee oh møh-teh day',
    english: 'Nice to meet you!',
    category: 'Godaften & Hilsener (Greetings)',
    level: 'A1'
  },

  // At a Café (På kafé)
  {
    norwegian: 'En kaffe, takk.',
    phonetic: 'ehn kaff-eh, tahkk',
    english: 'A coffee, please.',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },
  {
    norwegian: 'Kan jeg få en meny?',
    phonetic: 'kahn yay foh ehn meh-nyː',
    english: 'May I have a menu?',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },
  {
    norwegian: 'Hva anbefaler du?',
    phonetic: 'vah ahn-beh-fah-ler dʉː',
    english: 'What do you recommend?',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },
  {
    norwegian: 'Jeg vil gjerne ha en kanelbolle.',
    phonetic: 'yay vil yehr-neh hah ehn kah-nehl-boll-eh',
    english: 'I would like to have a cinnamon roll.',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },
  {
    norwegian: 'Takk for maten!',
    phonetic: 'tahkk for mah-ten',
    english: 'Thanks for the food! (Customary after eating)',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },
  {
    norwegian: 'Kan jeg betale med kort?',
    phonetic: 'kahn yay beh-tah-leh meh kort',
    english: 'Can I pay with credit card?',
    category: 'På kafé (At a Café)',
    level: 'A1'
  },

  // Asking for Help & Directions
  {
    norwegian: 'Unnskyld meg...',
    phonetic: 'ʉnn-shyl may',
    english: 'Excuse me...',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },
  {
    norwegian: 'Snakker du engelsk?',
    phonetic: 'snahkk-er dʉː ehng-ehlsk',
    english: 'Do you speak English?',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },
  {
    norwegian: 'Jeg forstår ikke.',
    phonetic: 'yay for-stohr ikk-eh',
    english: 'I do not understand.',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },
  {
    norwegian: 'Hvor er toalettet?',
    phonetic: 'voor ehr tu-ah-lett-et',
    english: 'Where is the restroom?',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },
  {
    norwegian: 'Kan du hjelpe meg?',
    phonetic: 'kahn dʉː yehlp-eh may',
    english: 'Can you help me?',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },
  {
    norwegian: 'Hvor langt er det til jernbanestasjonen?',
    phonetic: 'voor lahngt ehr deh til yehrn-bah-neh-stah-shoon-en',
    english: 'How far is it to the train station?',
    category: 'Hjelp og veibeskrivelser (Help & Directions)',
    level: 'A1'
  },

  // Common Expressions / Daily Use
  {
    norwegian: 'Tusen takk!',
    phonetic: 'tʉː-sen tahkk',
    english: 'Thousand thanks! (Thank you very much!)',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },
  {
    norwegian: 'Vær så snill.',
    phonetic: 'væhr soh snill',
    english: 'Please / Be so kind.',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },
  {
    norwegian: 'Bare hyggelig!',
    phonetic: 'bah-reh hygg-eh-lee',
    english: 'You are welcome! / My pleasure!',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },
  {
    norwegian: 'Ha det bra!',
    phonetic: 'hah deh brah',
    english: 'Goodbye / Have it well!',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },
  {
    norwegian: 'Vi ses!',
    phonetic: 'vee sehs',
    english: 'See you later!',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },
  {
    norwegian: 'Ingen årsak.',
    phonetic: 'ing-ehn ohr-sahk',
    english: 'No problem / No worries.',
    category: 'Vanlige uttrykk (Common Expressions)',
    level: 'A1'
  },

  // --- A2 CONTENT START ---
  // Daily routine phrases
  {
    norwegian: 'Jeg våkner klokka sju hver dag.',
    phonetic: 'yay vohk-ner klokk-ah shʉː væhr dahg',
    english: 'I wake up at seven o\'clock every day.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Jeg pusser tennene før frokost.',
    phonetic: 'yay pʉss-er tehn-neh-neh føhr froo-kost',
    english: 'I brush my teeth before breakfast.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Han pleier å ta en dusj på morgenen.',
    phonetic: 'hahn play-er oh tah ehn dʉsh poh moh-ren-en',
    english: 'He usually takes a shower in the morning.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Vi spiser middag sammen i kveld.',
    phonetic: 'vee spee-ser mid-dahg sahmm-en ee kvhell',
    english: 'We eat dinner together tonight.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Hva gjør du i fritiden din?',
    phonetic: 'vah jøhr dʉː ee free-tee-den deen',
    english: 'What do you do in your free time?',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Jeg rydder leiligheten på lørdager.',
    phonetic: 'yay rydd-er lay-lee-heh-ten poh løhr-dah-ger',
    english: 'I clean the apartment on Saturdays.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Hun legger seg tidlig fordi hun er trøtt.',
    phonetic: 'hʉn lehgg-er seh tee-lee for-dee hʉn ehr trøtt',
    english: 'She goes to bed early because she is tired.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },
  {
    norwegian: 'Det er på tide å stå opp nå.',
    phonetic: 'deh ehr poh tee-deh oh stoh opp noh',
    english: 'It is time to get up now.',
    category: 'Daglige rutinefraser (Daily Routine)',
    level: 'A2'
  },

  // Asking/giving directions
  {
    norwegian: 'Unnskyld, hvordan kommer jeg meg til flyplassen?',
    phonetic: 'ʉnn-shyl voor-dan komm-er yay may til flyː-plahs-sen',
    english: 'Excuse me, how do I get to the airport?',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Sving til høyre i neste lyskryss.',
    phonetic: 'svinn-g til høy-reh ee nehs-teh lyːs-kryss',
    english: 'Turn right at the next traffic light.',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Gå rett fram til du ser butikken.',
    phonetic: 'goh rehtt frahm til dʉː sehr bʉ-tikk-en',
    english: 'Walk straight ahead until you see the shop.',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Det er på venstre side av gata.',
    phonetic: 'deh ehr poh vehn-streh see-deh ahv gah-tah',
    english: 'It is on the left side of the street.',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Er det langt å gå herfra?',
    phonetic: 'ehr deh lahngt oh goh hæhr-frah',
    english: 'Is it far to walk from here?',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Du må ta buss nummer seksti.',
    phonetic: 'dʉː moh tah bʉss nʉmm-er sehks-tee',
    english: 'You must take bus number sixty.',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Hvor kan jeg finne en minibank?',
    phonetic: 'voor kahn yay finn-eh ehn mee-nee-bahngk',
    english: 'Where can I find an ATM?',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },
  {
    norwegian: 'Gå forbi kirken og sving til venstre.',
    phonetic: 'goh for-bee çeerk-en oh svinn-g til vehn-streh',
    english: 'Walk past the church and turn left.',
    category: 'Retningsbeskrivelser (Directions)',
    level: 'A2'
  },

  // Making plans
  {
    norwegian: 'Har du lyst til å ta en kaffe på fredag?',
    phonetic: 'hah dʉː lyst til oh tah ehn kaff-eh poh freh-dahg',
    english: 'Would you like to have a coffee on Friday?',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Hva skal vi gjøre til helgen?',
    phonetic: 'vah skahl vee jøh-reh til hehl-gehn',
    english: 'What shall we do this weekend?',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Vi kan møtes utenfor kinoen klokka åtte.',
    phonetic: 'vee kahn møh-tehs ʉːt-ehn-for çee-noo-en klokk-ah ott-eh',
    english: 'We can meet outside the cinema at eight o\'clock.',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Skal vi dra på fjelltur sammen?',
    phonetic: 'skahl vee drah poh fyell-tʉːr sahmm-en',
    english: 'Shall we go for a mountain hike together?',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Det høres ut som en kjempegod idé!',
    phonetic: 'deh høh-rehs ʉːt somm ehn çehmp-eh-goo ee-deh',
    english: 'That sounds like a great idea!',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Passer det for deg å møtes på mandag?',
    phonetic: 'pahss-er deh for day oh møh-tehs poh mahn-dahg',
    english: 'Does it suit you to meet on Monday?',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'Beklager, jeg har allerede andre planer.',
    phonetic: 'beh-klahg-er yay hahr ahl-reh-deh ahn-dreh plah-ner',
    english: 'Sorry, I already have other plans.',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },
  {
    norwegian: 'La oss holde kontakten og avtale nærmere.',
    phonetic: 'lah oss holl-eh konnt-ahkt-en oh ahv-tah-leh næhrm-eh-reh',
    english: 'Let\'s keep in touch and arrange the details later.',
    category: 'Planer og avtaler (Making Plans)',
    level: 'A2'
  },

  // Describing people
  {
    norwegian: 'Han er en veldig koselig og snill fyr.',
    phonetic: 'hahn ehr ehn vehll-dee koo-seh-lee oh snill fyːr',
    english: 'He is a very cozy and kind guy.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'Hun har langt blondt hår og blå øyne.',
    phonetic: 'hʉn hahr lahngt blonnt hohr oh bloh øy-neh',
    english: 'She has long blonde hair and blue eyes.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'Mannen er ganske høy og tynn.',
    phonetic: 'mahn-en ehr gahn-skeh høy oh tynn',
    english: 'The man is quite tall and thin.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'De virker alltid så glade og positive.',
    phonetic: 'deh veer-ker ahl-teed soh glah-deh oh poo-see-tee-veh',
    english: 'They always seem so happy and positive.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'Broren min er veldig morsom og pratsom.',
    phonetic: 'bruor-en meen ehr vehll-dee mor-somm oh praht-somm',
    english: 'My brother is very funny and talkative.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'Hun har på seg en rød jakke i dag.',
    phonetic: 'hʉn hahr poh seh ehn røh yahkk-eh ee dahg',
    english: 'She is wearing a red jacket today.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },
  {
    norwegian: 'Han ser litt trøtt og sliten ut nå.',
    phonetic: 'hahn sehr litt trøtt oh slee-tehn ʉːt noh',
    english: 'He looks a bit tired and worn out now.',
    category: 'Beskrive personer (Describing People)',
    level: 'A2'
  },

  // --- B1 CONTENT START (Idioms category) ---
  {
    norwegian: 'Å være midt i smørøyet',
    phonetic: 'oh væh-re mitt ee smør-øy-et',
    english: 'Literal: To be in the middle of the butter eye. | Meaning: To be in the absolute perfect spot / ideal situation.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å svelge noen kameler',
    phonetic: 'oh svehll-ge nuu-en kah-meh-ler',
    english: 'Literal: To swallow some camels. | Meaning: To make concessions or accept unpleasant terms.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å gå over bekken etter vann',
    phonetic: 'oh goh oh-ver behkk-en eht-ter vahnn',
    english: 'Literal: To cross the stream to get water. | Meaning: To make things unnecessarily difficult / redundant.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å snakke rett fra leveren',
    phonetic: 'oh snahkk-er rehtt frah leh-vehr-en',
    english: 'Literal: To speak straight from the liver. | Meaning: To speak honestly and directly without sugarcoating.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å tråkke i salaten',
    phonetic: 'oh trohkk-eh ee sah-lah-ten',
    english: 'Literal: To step in the salad. | Meaning: To make an embarrassing social blunder / put your foot in it.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å kjøpe katta i sekken',
    phonetic: 'oh çøh-peh kah-tah ee sehkk-en',
    english: 'Literal: To buy the cat in the sack. | Meaning: To buy something without inspecting it first, and getting ripped off.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å ikke være helt god',
    phonetic: 'oh ikk-eh væh-re hehlt goo',
    english: 'Literal: To not be completely good. | Meaning: To be a bit crazy or acting strangely.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å ta på vei',
    phonetic: 'oh tah poh vay',
    english: 'Literal: To take on way. | Meaning: To become highly upset / blow one\'s top.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å føre noen bak lyset',
    phonetic: 'oh føh-re nuu-en bahk lyːs-et',
    english: 'Literal: To lead someone behind the light. | Meaning: To deceive or mislead someone.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å falle i staver',
    phonetic: 'oh fahll-eh ee stah-ver',
    english: 'Literal: To fall into staves. | Meaning: To be completely lost in thought / daydreaming.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å stikke hodet i sanden',
    phonetic: 'oh stikk-eh hoo-deh ee sahn-ehn',
    english: 'Literal: To stick one\'s head in the sand. | Meaning: To ignore a problem and pretend it doesn\'t exist.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å snakke i skjegget',
    phonetic: 'oh snahkk-er ee shehgg-eh',
    english: 'Literal: To speak into the beard. | Meaning: To mumble / speak unclearly.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å være på bærtur',
    phonetic: 'oh væh-re poh bæhr-tʉːr',
    english: 'Literal: To be on a berry trip. | Meaning: To be completely lost or totally off track / wrong.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å gjøre en mygg til en elefant',
    phonetic: 'oh jøh-re ehn mygg til ehn eh-leh-fahnt',
    english: 'Literal: To turn a mosquito into an elephant. | Meaning: To make a mountain out of a molehill.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å bite i det sure eplet',
    phonetic: 'oh bee-teh ee deh sʉː-reh ehp-leht',
    english: 'Literal: To bite the sour apple. | Meaning: To accept a bitter necessity or do something unpleasant.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å ha ben i nesen',
    phonetic: 'oh hah behn ee neh-sen',
    english: 'Literal: To have bones in the nose. | Meaning: To be highly determined, strong-willed, and capable.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å holde tungen rett i munnen',
    phonetic: 'oh holl-eh tʉng-en rehtt ee mʉnn-en',
    english: 'Literal: To keep the tongue straight in the mouth. | Meaning: To stay focused and cautious during a difficult task.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å være i syvende himmel',
    phonetic: 'oh væh-re ee syː-vehn-deh himm-ehl',
    english: 'Literal: To be in seventh sky. | Meaning: To be in cloud nine / extremely happy.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å slå to fluer i en smekk',
    phonetic: 'oh sloh too flʉː-er ee ehn smehkk',
    english: 'Literal: To hit two flies in one smack. | Meaning: To kill two birds with one stone.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å kaste inn håndkledet',
    phonetic: 'oh kahst-eh inn hohn-kleh-deh',
    english: 'Literal: To throw in the towel. | Meaning: To give up / surrender.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  },
  {
    norwegian: 'Å ikke ha rent mel i posen',
    phonetic: 'oh ikk-eh hah rehnt mehl ee poo-sen',
    english: 'Literal: To not have clean flour in the bag. | Meaning: To have dishonest intentions or secrets.',
    category: 'Idiomer og Faste Uttrykk (Idiomatic Expressions)',
    level: 'B1'
  }
];

export const PHRASES_CATEGORIES = Array.from(
  new Set(ESSENTIAL_PHRASES.map((p) => p.category))
);

export const MINI_QUIZ_PHRASES: QuizQuestion[] = [
  {
    id: 'phrase_1',
    question: 'How do you say "Thank you very much" (literally "Thousand thanks") in Norwegian?',
    type: 'multiple-choice',
    options: ['Vær så snill', 'Tusen takk!', 'Takk for maten', 'Bare hyggelig!'],
    correctAnswer: 'Tusen takk!',
    explanation: '"Tusen takk!" literally means "Thousand thanks".'
  },
  {
    id: 'phrase_2',
    question: 'Translate the question: "Hvor er toalettet?"',
    type: 'multiple-choice',
    options: ['Where is the coffee shop?', 'Where is the bathroom / restroom?', 'Do you speak English?', 'Can you help me?'],
    correctAnswer: 'Where is the bathroom / restroom?',
    explanation: '"Hvor" means where, "er" means is, and "toalettet" is the restroom.'
  },
  {
    id: 'phrase_3',
    question: 'Which phrase is customly said in Norway to show gratitude after a meal?',
    type: 'multiple-choice',
    options: ['Takk for maten!', 'Vær så snill', 'Ingen årsak', 'God morgen'],
    correctAnswer: 'Takk for maten!',
    explanation: '"Takk for maten" means "Thanks for the food", which is an important polite habit in Norwegian households and social dinners.'
  },
  // --- A2 QUIZ QUESTIONS ---
  {
    id: 'phrase_4_a2',
    question: 'How do you translate: "Hvordan kommer jeg meg til flyplassen?"?',
    type: 'multiple-choice',
    options: [
      'How far is the train station?',
      'How do I get to the airport?',
      'Can you show me the local hotel?',
      'What is the street name?'
    ],
    correctAnswer: 'How do I get to the airport?',
    explanation: '"Hvordan" is how, "kommer jeg meg til" is how do I get to, and "flyplassen" is the airport (definite form of flyplass).'
  },
  {
    id: 'phrase_5_a2',
    question: 'What is the correct English for: "Sving til høyre i neste lyskryss"?',
    type: 'multiple-choice',
    options: [
      'Turn left at the next street.',
      'Go straight until the intersection.',
      'Turn right at the next traffic light.',
      'Wait for the green bus.'
    ],
    correctAnswer: 'Turn right at the next traffic light.',
    explanation: '"Sving" means turn, "til høyre" means right, and "lyskryss" refers to a traffic light (literally "light-crossing").'
  },
  {
    id: 'phrase_6_a2',
    question: 'Translate: "Det høres ut som en kjempegod idé!"',
    type: 'multiple-choice',
    options: [
      'That sounds like a bad plan.',
      'I already have other plans.',
      'That sounds like a great idea!',
      'We must arrange the details now.'
    ],
    correctAnswer: 'That sounds like a great idea!',
    explanation: '"Det høres ut som" means that sounds like, and "kjempegod idé" is a super/great idea.'
  },
  // --- B1 QUIZ QUESTIONS ---
  {
    id: 'phrase_7_b1',
    question: 'What does the B1 idiomatic expression "Å være midt i smørøyet" mean?',
    type: 'multiple-choice',
    options: [
      'To be in the absolute perfect spot / ideal situation.',
      'To eat too much butter.',
      'To make an embarrassing mistake.',
      'To lose your way in the forest.'
    ],
    correctAnswer: 'To be in the absolute perfect spot / ideal situation.',
    explanation: '"Å være midt i smørøyet" literally translates to "being in the middle of the butter eye" (the melting butter pool in warm porridge), meaning being in the perfect place or situation.'
  },
  {
    id: 'phrase_8_b1',
    question: 'Translate the figurative idiom "Å tråkke i salaten":',
    type: 'multiple-choice',
    options: [
      'To eat healthy food.',
      'To make an embarrassing social blunder.',
      'To spend all your savings.',
      'To wake up very early.'
    ],
    correctAnswer: 'To make an embarrassing social blunder.',
    explanation: '"Å tråkke i salaten" literally means to step in the salad, which idiomatically describes committing a social faux pas or double-fault.'
  },
  {
    id: 'phrase_9_b1',
    question: 'What character trait is highlighted if a Norwegian says you have "ben i nesen"?',
    type: 'multiple-choice',
    options: [
      'You are physically weak.',
      'You are highly determined, strong-willed, and capable.',
      'You tell lies frequently.',
      'You have caught a severe cold.'
    ],
    correctAnswer: 'You are highly determined, strong-willed, and capable.',
    explanation: '"Å ha ben i nesen" literally translates to "having bones in the nose", meaning that someone is grit-heavy, determined, and able to stand up for themselves.'
  }
];
