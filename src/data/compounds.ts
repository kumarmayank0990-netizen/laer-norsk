/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompoundWord, QuizQuestion } from '../types';

export const COMPOUND_WORDS: CompoundWord[] = [
  {
    word: 'Sommerfugl',
    translation: 'Butterfly',
    literalBreakdown: [
      { part: 'sommer', meaning: 'summer' },
      { part: 'fugl', meaning: 'bird' }
    ],
    explanation: 'Literally means "summer-bird"! A beautiful and natural imagery of how Norwegians see butterflies fluttering in the warm summer months.'
  },
  {
    word: 'Sykehus',
    translation: 'Hospital',
    literalBreakdown: [
      { part: 'syke', meaning: 'sick / ill (plural)' },
      { part: 'hus', meaning: 'house' }
    ],
    explanation: 'A very pragmatic literal meaning: "sick-house"—a house dedicated to sick people!'
  },
  {
    word: 'Kjøleskap',
    translation: 'Refrigerator',
    literalBreakdown: [
      { part: 'kjøle', meaning: 'to cool / chill' },
      { part: 'skap', meaning: 'cabinet / cupboard' }
    ],
    explanation: 'Literally means "cooling-cabinet"! A completely transparent name for the appliance.'
  },
  {
    word: 'Tannbørste',
    translation: 'Toothbrush',
    literalBreakdown: [
      { part: 'tann', meaning: 'tooth' },
      { part: 'børste', meaning: 'brush' }
    ],
    explanation: 'Just like English, a direct combination of "tooth" and "brush".'
  },
  {
    word: 'Snømann',
    translation: 'Snowman',
    literalBreakdown: [
      { part: 'snø', meaning: 'snow' },
      { part: 'mann', meaning: 'man' }
    ],
    explanation: 'Another direct pairing from nature: "snow-man". Very common in Norwegian winter landscapes.'
  },
  {
    word: 'Datamaskin',
    translation: 'Computer',
    literalBreakdown: [
      { part: 'data', meaning: 'data / computing' },
      { part: 'maskin', meaning: 'machine' }
    ],
    explanation: 'Literally "data-machine"! Norwegians coined this elegant Germanic compound rather than adopting the English word "computer".'
  },
  {
    word: 'Kinnskjegg',
    translation: 'Sideburns / Whiskers',
    literalBreakdown: [
      { part: 'kinn', meaning: 'cheek' },
      { part: 'skjegg', meaning: 'beard' }
    ],
    explanation: 'Literally means "cheek-beard", describing precisely where this type of beard facial hair grows.'
  },
  {
    word: 'Utgangspunkt',
    translation: 'Starting point / Premise',
    literalBreakdown: [
      { part: 'utgang', meaning: 'exit' },
      { part: 'punkt', meaning: 'point' }
    ],
    explanation: 'Literally "exit-point", representing the point from which you depart or start an argument.'
  },
  {
    word: 'Vaskemaskin',
    translation: 'Washing machine',
    literalBreakdown: [
      { part: 'vaske', meaning: 'to wash' },
      { part: 'maskin', meaning: 'machine' }
    ],
    explanation: 'Another beautiful, straightforward direct compound: "washing-machine", no hyphen needed.'
  },
  // --- NEW A2/B1 COMPOUNDS ---
  {
    word: 'Sugerør',
    translation: 'Drinking straw',
    literalBreakdown: [
      { part: 'suge', meaning: 'to suck / draw' },
      { part: 'rør', meaning: 'tube / pipe' }
    ],
    explanation: 'Literally "sucking-tube"! A very direct and practical term for a drinking straw.'
  },
  {
    word: 'Lommetørkle',
    translation: 'Handkerchief',
    literalBreakdown: [
      { part: 'lomme', meaning: 'pocket' },
      { part: 'tørkle', meaning: 'cloth / kerchief / scarf' }
    ],
    explanation: 'Literally a "pocket-kerchief" or "pocket-cloth", used for wiping your hands or face.'
  },
  {
    word: 'Konebil',
    translation: 'Family secondary car',
    literalBreakdown: [
      { part: 'kone', meaning: 'wife' },
      { part: 'bil', meaning: 'car' }
    ],
    explanation: 'Literally "wife-car". Colloquially refers to a household\'s secondary, usually smaller, runaround car.'
  },
  {
    word: 'Pinnsvin',
    translation: 'Hedgehog',
    literalBreakdown: [
      { part: 'pinn', meaning: 'stick / spike' },
      { part: 'svin', meaning: 'pig' }
    ],
    explanation: 'Literally means "stick-pig" or "spike-pig", which perfectly portrays the spiky little woodland hedgehog!'
  },
  {
    word: 'Blomkål',
    translation: 'Cauliflower',
    literalBreakdown: [
      { part: 'blom', meaning: 'bloom / flower' },
      { part: 'kål', meaning: 'cabbage' }
    ],
    explanation: 'Literally means "flower-cabbage", identical in concept to the English "cauliflower".'
  },
  {
    word: 'Trollmann',
    translation: 'Wizard / Sorcerer',
    literalBreakdown: [
      { part: 'troll', meaning: 'troll / magic' },
      { part: 'mann', meaning: 'man' }
    ],
    explanation: 'Literally "troll-man". In old Nordic folklore, casting magic was closely associated with trollish craft.'
  },
  {
    word: 'Bokhylle',
    translation: 'Bookcase / Bookshelf',
    literalBreakdown: [
      { part: 'bok', meaning: 'book' },
      { part: 'hylle', meaning: 'shelf' }
    ],
    explanation: 'A very tidy and tidy compound: "book-shelf" to store books.'
  },
  {
    word: 'Arbeidsgiver',
    translation: 'Employer',
    literalBreakdown: [
      { part: 'arbeid', meaning: 'work' },
      { part: 'giver', meaning: 'giver' }
    ],
    explanation: 'Literally the "work-giver"—the person, brand, or entity that provides employment.'
  },
  {
    word: 'Førerkort',
    translation: 'Driving license',
    literalBreakdown: [
      { part: 'fører', meaning: 'driver / guide' },
      { part: 'kort', meaning: 'card' }
    ],
    explanation: 'Literally the "driver-card" required by police to legally operate a motor automobile.'
  }
];

export const MINI_QUIZ_COMPOUNDS: QuizQuestion[] = [
  {
    id: 'compound_1',
    question: 'The word "Kjøleskap" translates to "Refrigerator". What are its two literal components?',
    type: 'multiple-choice',
    options: ['"cold" + "machine"', '"cooling" + "cabinet"', '"frozen" + "room"', '"cook" + "closet"'],
    correctAnswer: '"cooling" + "cabinet"',
    explanation: '"Kjøle" means to cool/chill or keep cold, and "skap" is a cupboard, cabinet or closet.'
  },
  {
    id: 'compound_2',
    question: 'If "Tann" means tooth and "Krem" means cream, what is the compound word for "Toothpaste" in Norwegian?',
    type: 'multiple-choice',
    options: ['Tannkrem', 'Tann børste', 'Kremtann', 'Tannter'],
    correctAnswer: 'Tannkrem',
    explanation: 'Norwegian builds compounds as a single word without spaces. "Tannkrem" is the direct single-word join of tooth ("tann") and cream ("krem").'
  },
  {
    id: 'compound_3',
    question: 'What does the beautiful compound word "Sommerfugl" literally mean?',
    type: 'multiple-choice',
    options: ['Summer fly', 'Hot breeze', 'Summer bird', 'Winged bug'],
    correctAnswer: 'Summer bird',
    explanation: '"Sommer" translates to summer and "fugl" translates to bird. Thus, a butterfly is literally a "summer bird"!'
  },
  // --- NEW QUIZ QUESTIONS ---
  {
    id: 'compound_4',
    question: 'What does the adorable animal word "Pinnsvin" (hedgehog) literally mean?',
    type: 'multiple-choice',
    options: ['"forest" + "mouse"', '"stick" + "pig"', '"sharp" + "squirrel"', '"grey" + "rabbit"'],
    correctAnswer: '"stick" + "pig"',
    explanation: '"Pinn" refers to a stick or spike, and "svin" translates to pig. It: "stick-pig"!'
  },
  {
    id: 'compound_5',
    question: 'What does the compound word "Arbeidsgiver" (employer) literally translate as?',
    type: 'multiple-choice',
    options: ['"work" + "giver"', '"money" + "payer"', '"business" + "owner"', '"office" + "leader"'],
    correctAnswer: '"work" + "giver"',
    explanation: '"Arbeid" is work, and "giver" is giver. Thus, an employer is the helper who gives work!'
  },
  {
    id: 'compound_6',
    question: 'Translate the literal components of the handkerchief term: "Lommetørkle".',
    type: 'multiple-choice',
    options: ['"hand" + "wipe"', '"pocket" + "cloth / kerchief"', '"nose" + "cleaner"', '"bag" + "tissue"'],
    correctAnswer: '"pocket" + "cloth / kerchief"',
    explanation: '"Lomme" means pocket, and "tørkle" is a cloth, kerchief or scarf. It is a pocket cloth!'
  }
];
