/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VocabularyCategories, QuizQuestion } from '../types';

export const VOCABULARY_DATA: VocabularyCategories = {
  'Tall (Numbers)': [
    { norwegian: 'En', phonetic: 'ehn', english: 'One (masculine)', level: 'A1' },
    { norwegian: 'To', phonetic: 'too', english: 'Two', level: 'A1' },
    { norwegian: 'Tre', phonetic: 'treh', english: 'Three', level: 'A1' },
    { norwegian: 'Fire', phonetic: 'fee-reh', english: 'Four', level: 'A1' },
    { norwegian: 'Fem', phonetic: 'fehm', english: 'Five', level: 'A1' },
    { norwegian: 'Seks', phonetic: 'sehks', english: 'Six', level: 'A1' },
    { norwegian: 'Sju', phonetic: 'shʉː', english: 'Seven', level: 'A1' },
    { norwegian: 'Åtte', phonetic: 'ott-eh', english: 'Eight', level: 'A1' },
    { norwegian: 'Ni', phonetic: 'nee', english: 'Nine', level: 'A1' },
    { norwegian: 'Ti', phonetic: 'tee', english: 'Ten', level: 'A1' },
    { norwegian: 'Elleve', phonetic: 'ehl-veh', english: 'Eleven', level: 'A1' },
    { norwegian: 'Tolv', phonetic: 'toll', english: 'Twelve (silent v)', level: 'A1' },
    { norwegian: 'Tjue', phonetic: 'çʉː-eh', english: 'Twenty (soft ch)', level: 'A1' },
    { norwegian: 'Hundre', phonetic: 'hʉn-dreh', english: 'One hundred', level: 'A1' }
  ],
  'Familie (Family)': [
    { norwegian: 'Mor', phonetic: 'moor', english: 'Mother', level: 'A1' },
    { norwegian: 'Far', phonetic: 'fahr', english: 'Father', level: 'A1' },
    { norwegian: 'Bror', phonetic: 'broor', english: 'Brother', level: 'A1' },
    { norwegian: 'Søster', phonetic: 'søhs-ter', english: 'Sister', level: 'A1' },
    { norwegian: 'Sønn', phonetic: 'sønn', english: 'Son', level: 'A1' },
    { norwegian: 'Datter', phonetic: 'datt-er', english: 'Daughter', level: 'A1' },
    { norwegian: 'Besteforeldre', phonetic: 'behst-eh-for-ehl-dreh', english: 'Grandparents', level: 'A1' },
    { norwegian: 'Mormor', phonetic: 'moor-moor', english: 'Grandmother (maternal)', level: 'A1' },
    { norwegian: 'Farmor', phonetic: 'fahr-moor', english: 'Grandmother (paternal)', level: 'A1' },
    { norwegian: 'Kone', phonetic: 'koo-neh', english: 'Wife', level: 'A1' },
    { norwegian: 'Mann', phonetic: 'mahnn', english: 'Husband / Man', level: 'A1' },
    { norwegian: 'Barn', phonetic: 'bahrn', english: 'Child / Children', level: 'A1' }
  ],
  'Mat og Drikke (Food & Drink)': [
    { norwegian: 'Brød', phonetic: 'brøh (silent d)', english: 'Bread', level: 'A1' },
    { norwegian: 'Melk', phonetic: 'mehlk', english: 'Milk', level: 'A1' },
    { norwegian: 'Vann', phonetic: 'vahnn', english: 'Water', level: 'A1' },
    { norwegian: 'Kaffe', phonetic: 'kaff-eh', english: 'Coffee', level: 'A1' },
    { norwegian: 'Te', phonetic: 'teh', english: 'Tea', level: 'A1' },
    { norwegian: 'Ost', phonetic: 'ust', english: 'Cheese', level: 'A1' },
    { norwegian: 'Fisk', phonetic: 'fisk', english: 'Fish', level: 'A1' },
    { norwegian: 'Kjøtt', phonetic: 'çøtt (soft ch)', english: 'Meat', level: 'A1' },
    { norwegian: 'Egg', phonetic: 'ehgg', english: 'Egg', level: 'A1' },
    { norwegian: 'Frukt', phonetic: 'frʉkt', english: 'Fruit', level: 'A1' },
    { norwegian: 'Grønnsaker', phonetic: 'grønn-sah-ker', english: 'Vegetables', level: 'A1' },
    { norwegian: 'Middag', phonetic: 'mid-dahg', english: 'Dinner', level: 'A1' }
  ],
  'Tid og Dager (Time & Days)': [
    { norwegian: 'Dag', phonetic: 'dahg', english: 'Day', level: 'A1' },
    { norwegian: 'Natt', phonetic: 'nahtt', english: 'Night', level: 'A1' },
    { norwegian: 'Klokke', phonetic: 'klokk-eh', english: 'Clock / Hour', level: 'A1' },
    { norwegian: 'Mandag', phonetic: 'mahn-dahg', english: 'Monday', level: 'A1' },
    { norwegian: 'Tirsdag', phonetic: 'teers-dahg', english: 'Tuesday', level: 'A1' },
    { norwegian: 'Onsdag', phonetic: 'onns-dahg', english: 'Wednesday', level: 'A1' },
    { norwegian: 'Torsdag', phonetic: 'tors-dahg', english: 'Thursday', level: 'A1' },
    { norwegian: 'Fredag', phonetic: 'freh-dahg', english: 'Friday', level: 'A1' },
    { norwegian: 'Lørdag', phonetic: 'løhr-dahg', english: 'Saturday', level: 'A1' },
    { norwegian: 'Søndag', phonetic: 'sønn-dahg', english: 'Sunday', level: 'A1' },
    { norwegian: 'I dag', phonetic: 'ee dahg', english: 'Today', level: 'A1' },
    { norwegian: 'I går', phonetic: 'ee gohr', english: 'Yesterday', level: 'A1' },
    { norwegian: 'I morgen', phonetic: 'ee moh-ren', english: 'Tomorrow', level: 'A1' }
  ],
  'Farger (Colors)': [
    { norwegian: 'Rød', phonetic: 'røh', english: 'Red', level: 'A1' },
    { norwegian: 'Blå', phonetic: 'bloh', english: 'Blue', level: 'A1' },
    { norwegian: 'Gul', phonetic: 'gʉːl', english: 'Yellow', level: 'A1' },
    { norwegian: 'Grønn', phonetic: 'grønn', english: 'Green', level: 'A1' },
    { norwegian: 'Hvit', phonetic: 'veet (silent h)', english: 'White', level: 'A1' },
    { norwegian: 'Svart', phonetic: 'svahrt', english: 'Black', level: 'A1' },
    { norwegian: 'Grå', phonetic: 'groh', english: 'Grey', level: 'A1' },
    { norwegian: 'Brun', phonetic: 'brʉːn', english: 'Brown', level: 'A1' },
    { norwegian: 'Oransje', phonetic: 'oh-rahn-sheh', english: 'Orange', level: 'A1' },
    { norwegian: 'Rosa', phonetic: 'roo-sah', english: 'Pink', level: 'A1' }
  ],
  'Vær og Natur (Weather & Nature)': [
    { norwegian: 'Sol', phonetic: 'sool', english: 'Sun', level: 'A1' },
    { norwegian: 'Regn', phonetic: 'rayn', english: 'Rain', level: 'A1' },
    { norwegian: 'Snø', phonetic: 'snøh', english: 'Snow', level: 'A1' },
    { norwegian: 'Vind', phonetic: 'vinn (silent d)', english: 'Wind', level: 'A1' },
    { norwegian: 'Himmel', phonetic: 'himm-ehl', english: 'Sky', level: 'A1' },
    { norwegian: 'Skog', phonetic: 'skoog', english: 'Forest', level: 'A1' },
    { norwegian: 'Fjell', phonetic: 'fyell', english: 'Mountain', level: 'A1' },
    { norwegian: 'Fjord', phonetic: 'fyord', english: 'Fjord', level: 'A1' },
    { norwegian: 'Kaldt', phonetic: 'kahlt (silent d)', english: 'Cold (weather)', level: 'A1' },
    { norwegian: 'Varmt', phonetic: 'vahrmt', english: 'Warm / Hot', level: 'A1' },
    { norwegian: 'Skyet', phonetic: 'shʉː-et', english: 'Cloudy', level: 'A1' }
  ],
  'Reise og Transport (Travel & Transport)': [
    { norwegian: 'Bil', phonetic: 'beel', english: 'Car', level: 'A1' },
    { norwegian: 'Buss', phonetic: 'bʉss', english: 'Bus', level: 'A1' },
    { norwegian: 'Tog', phonetic: 'toog-vowel like book', english: 'Train', level: 'A1' },
    { norwegian: 'Fly', phonetic: 'flyː', english: 'Airplane', level: 'A1' },
    { norwegian: 'Båt', phonetic: 'boht', english: 'Boat', level: 'A1' },
    { norwegian: 'Sykkel', phonetic: 'sykk-ehl', english: 'Bicycle', level: 'A1' },
    { norwegian: 'Billet', phonetic: 'bil-leht', english: 'Ticket', level: 'A1' },
    { norwegian: 'Hotell', phonetic: 'hoo-tehll', english: 'Hotel', level: 'A1' },
    { norwegian: 'Vei', phonetic: 'vay', english: 'Way / Road', level: 'A1' },
    { norwegian: 'Kart', phonetic: 'kahrt', english: 'Map', level: 'A1' },
    { norwegian: 'Bagasje', phonetic: 'bah-gah-sheh', english: 'Luggage', level: 'A1' }
  ],
  'Hverdagsgjenstander (Everyday Objects)': [
    { norwegian: 'Bok', phonetic: 'buuk', english: 'Book', level: 'A1' },
    { norwegian: 'Penn', phonetic: 'pehnn', english: 'Pen', level: 'A1' },
    { norwegian: 'Mobil', phonetic: 'moo-beel', english: 'Mobile phone', level: 'A1' },
    { norwegian: 'Nøkkel', phonetic: 'nøkk-ehl', english: 'Key', level: 'A1' },
    { norwegian: 'Vindu', phonetic: 'vin-dʉː', english: 'Window', level: 'A1' },
    { norwegian: 'Dør', phonetic: 'døhr', english: 'Door', level: 'A1' },
    { norwegian: 'Bord', phonetic: 'boor (silent d)', english: 'Table', level: 'A1' },
    { norwegian: 'Stol', phonetic: 'stool', english: 'Chair', level: 'A1' },
    { norwegian: 'Seng', phonetic: 'sehng', english: 'Bed', level: 'A1' },
    { norwegian: 'Kopp', phonetic: 'kopp', english: 'Cup / Mug', level: 'A1' },
    { norwegian: 'Veske', phonetic: 'vehs-keh', english: 'Bag / Purse', level: 'A1' }
  ],
  // --- A2 CATEGORIES START ---
  'Arbeid og Yrker (Work & Professions)': [
    { norwegian: 'Lege', phonetic: 'leh-geh', english: 'Doctor', level: 'A2' },
    { norwegian: 'Lærer', phonetic: 'læh-rer', english: 'Teacher', level: 'A2' },
    { norwegian: 'Sykepleier', phonetic: 'syː-keh-play-er', english: 'Nurse', level: 'A2' },
    { norwegian: 'Ingeniør', phonetic: 'in-sheh-nyøhr', english: 'Engineer', level: 'A2' },
    { norwegian: 'Politi', phonetic: 'poo-lee-tee', english: 'Police', level: 'A2' },
    { norwegian: 'Snekker', phonetic: 'snehkk-er', english: 'Carpenter', level: 'A2' },
    { norwegian: 'Tannlege', phonetic: 'tahnn-leh-geh', english: 'Dentist', level: 'A2' },
    { norwegian: 'Kokk', phonetic: 'kokk', english: 'Cook / Chef', level: 'A2' },
    { norwegian: 'Sjåfør', phonetic: 'shoh-føhr', english: 'Driver', level: 'A2' },
    { norwegian: 'Selger', phonetic: 'sehll-ger', english: 'Seller / Salesperson', level: 'A2' },
    { norwegian: 'Frisør', phonetic: 'free-søhr', english: 'Hairdresser', level: 'A2' },
    { norwegian: 'Bonde', phonetic: 'bun-neh', english: 'Farmer', level: 'A2' },
    { norwegian: 'Advokat', phonetic: 'ahd-voo-kaht', english: 'Lawyer / Attorney', level: 'A2' },
    { norwegian: 'Student', phonetic: 'stʉː-dehnt', english: 'Student', level: 'A2' },
    { norwegian: 'Arbeidsløs', phonetic: 'ahr-bayds-løhs', english: 'Unemployed', level: 'A2' }
  ],
  'Vær og Meteorologi (Weather & Climate)': [
    { norwegian: 'Lyn', phonetic: 'lyːn', english: 'Lightning', level: 'A2' },
    { norwegian: 'Torden', phonetic: 'tor-dehn', english: 'Thunder', level: 'A2' },
    { norwegian: 'Storm', phonetic: 'stohrm', english: 'Storm', level: 'A2' },
    { norwegian: 'Tåke', phonetic: 'toh-keh', english: 'Fog / Mist', level: 'A2' },
    { norwegian: 'Hagl', phonetic: 'hahgl', english: 'Hail', level: 'A2' },
    { norwegian: 'Kuldegrader', phonetic: 'kʉll-eh-grah-der', english: 'Degrees below freezing (Celsius)', level: 'A2' },
    { norwegian: 'Varmegrader', phonetic: 'vahr-meh-grah-der', english: 'Degrees above freezing (Celsius)', level: 'A2' },
    { norwegian: 'Regnbue', phonetic: 'rayn-bʉː-eh', english: 'Rainbow', level: 'A2' },
    { norwegian: 'Luftfuktighet', phonetic: 'lʉft-fʉkt-ee-heht', english: 'Humidity', level: 'A2' },
    { norwegian: 'Vindkast', phonetic: 'vinn-kahst', english: 'Wind gust', level: 'A2' },
    { norwegian: 'Solskinn', phonetic: 'sool-shinn', english: 'Sunshine', level: 'A2' },
    { norwegian: 'Kuldebølge', phonetic: 'kʉll-eh-bøll-geh', english: 'Cold wave', level: 'A2' },
    { norwegian: 'Værmelding', phonetic: 'væhr-mehl-ding', english: 'Weather forecast', level: 'A2' },
    { norwegian: 'Klima', phonetic: 'klee-mah', english: 'Climate', level: 'A2' },
    { norwegian: 'Temperatur', phonetic: 'tehm-peh-rah-tʉːr', english: 'Temperature', level: 'A2' }
  ],
  'Reise og Retninger (Travel & Directions)': [
    { norwegian: 'Høyre', phonetic: 'høy-reh', english: 'Right', level: 'A2' },
    { norwegian: 'Venstre', phonetic: 'vehn-streh', english: 'Left', level: 'A2' },
    { norwegian: 'Rett fram', phonetic: 'rehtt frahm', english: 'Straight ahead', level: 'A2' },
    { norwegian: 'Svinge', phonetic: 'svinn-geh', english: 'To turn / curve', level: 'A2' },
    { norwegian: 'Lyskryss', phonetic: 'lyːs-kryss', english: 'Traffic light / Intersection', level: 'A2' },
    { norwegian: 'Nord', phonetic: 'noor (silent d)', english: 'North', level: 'A2' },
    { norwegian: 'Sør', phonetic: 'søhr', english: 'South', level: 'A2' },
    { norwegian: 'Øst', phonetic: 'øst', english: 'East', level: 'A2' },
    { norwegian: 'Vest', phonetic: 'vehst', english: 'West', level: 'A2' },
    { norwegian: 'Kompass', phonetic: 'kom-pahss', english: 'Compass', level: 'A2' },
    { norwegian: 'Holdeplass', phonetic: 'holl-eh-plahss', english: 'Bus stop / Station', level: 'A2' },
    { norwegian: 'Avgang', phonetic: 'ahv-gahng', english: 'Departure', level: 'A2' },
    { norwegian: 'Ankomst', phonetic: 'ahn-komst', english: 'Arrival', level: 'A2' },
    { norwegian: 'Reisebyrå', phonetic: 'ray-seh-by-roh', english: 'Travel agency', level: 'A2' },
    { norwegian: 'Turist', phonetic: 'tʉː-rist', english: 'Tourist', level: 'A2' }
  ],
  'Daglige rutineverb (Daily Routine Verbs)': [
    { norwegian: 'å våkne', phonetic: 'oh vohk-neh', english: 'To wake up', level: 'A2' },
    { norwegian: 'å stå opp', phonetic: 'oh stoh opp', english: 'To get up', level: 'A2' },
    { norwegian: 'å vaske seg', phonetic: 'oh vahs-keh seh', english: 'To wash oneself', level: 'A2' },
    { norwegian: 'å dusje', phonetic: 'oh dʉ-sheh', english: 'To shower', level: 'A2' },
    { norwegian: 'å pusse tennene', phonetic: 'oh pʉss-eh tehn-neh-neh', english: 'To brush teeth', level: 'A2' },
    { norwegian: 'å kle på seg', phonetic: 'oh kleh poh seh', english: 'To get dressed', level: 'A2' },
    { norwegian: 'å spise frokost', phonetic: 'oh spee-seh froo-kost', english: 'To eat breakfast', level: 'A2' },
    { norwegian: 'å dra på jobb', phonetic: 'oh drah poh yobb', english: 'To go to work', level: 'A2' },
    { norwegian: 'å handle', phonetic: 'oh hahn-leh', english: 'To shop / buy groceries', level: 'A2' },
    { norwegian: 'å lage middag', phonetic: 'oh lah-geh mid-dahg', english: 'To cook dinner', level: 'A2' },
    { norwegian: 'å rydde', phonetic: 'oh rydd-eh', english: 'To tidy up / clean', level: 'A2' },
    { norwegian: 'å slappe av', phonetic: 'oh slahpp-eh ahv', english: 'To relax', level: 'A2' },
    { norwegian: 'å legge seg', phonetic: 'oh lehgg-eh seh', english: 'To go to bed', level: 'A2' },
    { norwegian: 'å sove', phonetic: 'oh soo-veh', english: 'To sleep', level: 'A2' }
  ],
  // --- B1 CATEGORIES START ---
  'Meninger og Følelser (Opinions & Feelings)': [
    { norwegian: 'å mene', phonetic: 'oh meh-neh', english: 'To opinion / mean / think', level: 'B1' },
    { norwegian: 'å føle', phonetic: 'oh føh-leh', english: 'To feel', level: 'B1' },
    { norwegian: 'Skuffet', phonetic: 'skʉff-eht', english: 'Disappointed', level: 'B1' },
    { norwegian: 'Overrasket', phonetic: 'oh-vher-rah-skeht', english: 'Surprised', level: 'B1' },
    { norwegian: 'Sint', phonetic: 'sint', english: 'Angry / Mad', level: 'B1' },
    { norwegian: 'Sjalu', phonetic: 'shah-lʉː', english: 'Jealous', level: 'B1' },
    { norwegian: 'Glede', phonetic: 'gleh-deh', english: 'Joy / Gladness', level: 'B1' },
    { norwegian: 'Sorg', phonetic: 'sorr-g', english: 'Sorrow / Grief', level: 'B1' },
    { norwegian: 'Trygg', phonetic: 'trygg', english: 'Safe / Secure', level: 'B1' },
    { norwegian: 'Bekymret', phonetic: 'beh-çym-reht', english: 'Worried / Concerned', level: 'B1' },
    { norwegian: 'Nysgjerrig', phonetic: 'nys-yærr-ee', english: 'Curious', level: 'B1' },
    { norwegian: 'Takknemlig', phonetic: 'tahkk-nehm-lee', english: 'Grateful / Thankful', level: 'B1' },
    { norwegian: 'Flau', phonetic: 'flow', english: 'Embarrassed', level: 'B1' },
    { norwegian: 'Håp', phonetic: 'hohp', english: 'Hope', level: 'B1' },
    { norwegian: 'Skeptisk', phonetic: 'shehp-tisk', english: 'Skeptical', level: 'B1' }
  ],
  'Medier og Nyheter (Media & News)': [
    { norwegian: 'Avis', phonetic: 'ah-vees', english: 'Newspaper', level: 'B1' },
    { norwegian: 'Nettavis', phonetic: 'nehtt-ah-vees', english: 'Online newspaper', level: 'B1' },
    { norwegian: 'Overskrift', phonetic: 'oh-vher-skrift', english: 'Headline', level: 'B1' },
    { norwegian: 'Redaktør', phonetic: 'reh-dahk-tøhr', english: 'Editor', level: 'B1' },
    { norwegian: 'Artikkel', phonetic: 'ahr-tikk-ehl', english: 'Article', level: 'B1' },
    { norwegian: 'Kilde', phonetic: 'çill-eh (silent d)', english: 'Source', level: 'B1' },
    { norwegian: 'Journalist', phonetic: 'shoorn-ah-list', english: 'Journalist', level: 'B1' },
    { norwegian: 'Ytringsfrihet', phonetic: 'yː-trings-free-heht', english: 'Freedom of speech / expression', level: 'B1' },
    { norwegian: 'Nyhetssending', phonetic: 'nyː-hehts-sehn-ding', english: 'News broadcast', level: 'B1' },
    { norwegian: 'Sosiale medier', phonetic: 'soo-see-ah-leh meh-dee-er', english: 'Social media', level: 'B1' },
    { norwegian: 'Reklame', phonetic: 'reh-klah-meh', english: 'Advertisement / Commercial', level: 'B1' },
    { norwegian: 'Sensur', phonetic: 'sehhn-sʉːr', english: 'Censorship', level: 'B1' },
    { norwegian: 'Debatt', phonetic: 'deh-bahtt', english: 'Debate', level: 'B1' },
    { norwegian: 'Kommentar', phonetic: 'komm-ehn-tahr', english: 'Comment', level: 'B1' },
    { norwegian: 'Pressefrihet', phonetic: 'prehs-seh-free-heht', english: 'Freedom of the press', level: 'B1' }
  ],
  'Helse og Kropp (Health & Body)': [
    { norwegian: 'Sykdom', phonetic: 'syːk-domm', english: 'Sykdom / Illness / Disease', level: 'B1' },
    { norwegian: 'Symptom', phonetic: 'symp-toom', english: 'Symptom', level: 'B1' },
    { norwegian: 'Medisin', phonetic: 'meh-dee-seen', english: 'Medicine', level: 'B1' },
    { norwegian: 'Resept', phonetic: 'reh-sehpt', english: 'Prescription (medical)', level: 'B1' },
    { norwegian: 'Forkjølet', phonetic: 'for-çøh-leht (soft ch)', english: 'Caught a cold', level: 'B1' },
    { norwegian: 'Hjerte', phonetic: 'yært-eh (silent h)', english: 'Heart', level: 'B1' },
    { norwegian: 'Lunge', phonetic: 'lʉng-eh', english: 'Lung', level: 'B1' },
    { norwegian: 'Hjerne', phonetic: 'yærn-eh (silent h)', english: 'Brain', level: 'B1' },
    { norwegian: 'Blodtrykk', phonetic: 'bluud-trykk', english: 'Blood pressure', level: 'B1' },
    { norwegian: 'Svimmel', phonetic: 'svimm-ehl', english: 'Dizzy', level: 'B1' },
    { norwegian: 'Legevakt', phonetic: 'leh-geh-vahkt', english: 'Emergency room / clinic', level: 'B1' },
    { norwegian: 'Behandling', phonetic: 'beh-hahn-ling', english: 'Treatment', level: 'B1' },
    { norwegian: 'Pasient', phonetic: 'pah-see-ehnt', english: 'Patient', level: 'B1' },
    { norwegian: 'Smerte', phonetic: 'smært-eh', english: 'Pain / Ache', level: 'B1' },
    { norwegian: 'Smitte', phonetic: 'smitt-eh', english: 'Infection / Contagion', level: 'B1' }
  ]
};

export const MINI_QUIZ_VOCABULARY: QuizQuestion[] = [
  {
    id: 'vocab_1',
    question: 'What is the maternal grandmother called in Norwegian?',
    type: 'multiple-choice',
    options: ['Farmor', 'Mormor', 'Bestemor', 'Kone'],
    correctAnswer: 'Mormor',
    explanation: 'Norwegian distinguishes maternal grandmothers ("Mormor", mother\'s mother) from paternal grandmothers ("Farmor", father\'s mother).'
  },
  {
    id: 'vocab_2',
    question: 'How do you say "Saturday" in Norwegian?',
    type: 'multiple-choice',
    options: ['Mandag', 'Søndag', 'Lørdag', 'Fredag'],
    correctAnswer: 'Lørdag',
    explanation: '"Lørdag" means Saturday.'
  },
  {
    id: 'vocab_3',
    question: 'What is the correct English translation of the key natural landmark of Norway: "Fjord"?',
    type: 'multiple-choice',
    options: ['Deep forest', 'Mountain with snow', 'Narrow Inlet of the sea with steep cliffs created by glaciers', 'A wild lake'],
    correctAnswer: 'Narrow Inlet of the sea with steep cliffs created by glaciers',
    explanation: 'A fjord is a deep, narrow, glaciated sea-inlet bordered by high mountains; "fjord" is a native Norwegian word that has been adopted globally.'
  },
  // --- A2 QUIZ QUESTIONS ---
  {
    id: 'vocab_4_a2',
    question: 'What does the A2 profession word "Sykepleier" mean in English?',
    type: 'multiple-choice',
    options: ['Teacher', 'Dentist', 'Doctor', 'Nurse'],
    correctAnswer: 'Nurse',
    explanation: '"Sykepleier" (literally "sick-carer") translates to Nurse. "Lærer" is teacher, "Tannlege" is dentist, and "Lege" is doctor.'
  },
  {
    id: 'vocab_5_a2',
    question: 'How do you say "Straight ahead" in Norwegian when giving directions?',
    type: 'multiple-choice',
    options: ['Høyre', 'Venstre', 'Rett fram', 'Svinge'],
    correctAnswer: 'Rett fram',
    explanation: '"Rett fram" translates to "straight ahead", whereas "høyre" is right, "venstre" is left, and "svinge" is to turn.'
  },
  {
    id: 'vocab_6_a2',
    question: 'Translate the A2 daily routine verb sequence: "å pusse tennene"',
    type: 'multiple-choice',
    options: ['To wash hands', 'To comb hair', 'To brush teeth', 'To get dressed'],
    correctAnswer: 'To brush teeth',
    explanation: '"å pusse tennene" means to brush one\'s teeth. "Pusse" is brush/polish/clean, and "tennene" are the teeth.'
  },
  // --- B1 QUIZ QUESTIONS ---
  {
    id: 'vocab_7_b1',
    question: 'What is the B1 media word "Ytringsfrihet" translated to English?',
    type: 'multiple-choice',
    options: ['Freedom of the press', 'Freedom of speech / expression', 'Social media rights', 'Journalist ethics'],
    correctAnswer: 'Freedom of speech / expression',
    explanation: '"Ytringsfrihet" (from ytring = utterance, and frihet = freedom) means freedom of speech or expression.'
  },
  {
    id: 'vocab_8_b1',
    question: 'How do you describe feeling "disappointed" in B1 Norwegian?',
    type: 'multiple-choice',
    options: ['Takknemlig', 'Overrasket', 'Skuffet', 'Sint'],
    correctAnswer: 'Skuffet',
    explanation: '"Skuffet" means disappointed. "Takknemlig" is grateful, "overrasket" is surprised, and "sint" is angry.'
  },
  {
    id: 'vocab_9_b1',
    question: 'What is a medical "Prescription" called in Norwegian?',
    type: 'multiple-choice',
    options: ['Medisin', 'Symptom', 'Resept', 'Legevakt'],
    correctAnswer: 'Resept',
    explanation: 'A medical prescription is called a "Resept" in Norwegian.'
  }
];
