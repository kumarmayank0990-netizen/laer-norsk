/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlphabetItem, QuizQuestion } from '../types';

export const BASIC_ALPHABET = [
  { char: 'A', name: 'a', sound: '/ɑː/' },
  { char: 'B', name: 'be', sound: '/beː/' },
  { char: 'C', name: 'se', sound: '/seː/' },
  { char: 'D', name: 'de', sound: '/deː/' },
  { char: 'E', name: 'e', sound: '/eː/' },
  { char: 'F', name: 'eff', sound: '/eff/' },
  { char: 'G', name: 'ge', sound: '/geː/' },
  { char: 'H', name: 'hå', sound: '/hoː/' },
  { char: 'I', name: 'i', sound: '/iː/' },
  { char: 'J', name: 'jodd', sound: '/jodd/' },
  { char: 'K', name: 'kå', sound: '/koː/' },
  { char: 'L', name: 'ell', sound: '/ell/' },
  { char: 'M', name: 'emm', sound: '/emm/' },
  { char: 'N', name: 'enn', sound: '/enn/' },
  { char: 'O', name: 'o', sound: '/uː/' },
  { char: 'P', name: 'pe', sound: '/peː/' },
  { char: 'Q', name: 'ku', sound: '/kʉː/' },
  { char: 'R', name: 'err', sound: '/ærr/' },
  { char: 'S', name: 'ess', sound: '/ess/' },
  { char: 'T', name: 'te', sound: '/teː/' },
  { char: 'U', name: 'u', sound: '/ʉː/' },
  { char: 'V', name: 've', sound: '/veː/' },
  { char: 'W', name: 'dobbeltve', sound: '/ˈdɔbːəltˌveː/' },
  { char: 'X', name: 'eks', sound: '/eks/' },
  { char: 'Y', name: 'y', sound: '/yː/' },
  { char: 'Z', name: 'sett', sound: '/sett/' },
  { char: 'Æ', name: 'æ', sound: '/æː/' },
  { char: 'Ø', name: 'ø', sound: '/øː/' },
  { char: 'Å', name: 'å', sound: '/oː/' },
];

export const DETAILED_LETTERS: AlphabetItem[] = [
  {
    letter: 'Æ / æ',
    pronunciation: '/æː/',
    description: 'Sounds like the "a" in the English word "bad" or "cat". In some words before "r", it can sound closely like the "e" in "where".',
    exampleWord: 'Være',
    examplePhonetic: 'væː-re',
    exampleTranslation: 'to be',
    soundHint: 'a in "cat"'
  },
  {
    letter: 'Ø / ø',
    pronunciation: '/øː/',
    description: 'Similar to the "i" in "bird" or the "u" in "burn". Round your lips tightly as if to say "oo", but try to say the English letter "e" instead.',
    exampleWord: 'Øl',
    examplePhonetic: 'øːl',
    exampleTranslation: 'beer',
    soundHint: 'u in "burn" / French "eu"'
  },
  {
    letter: 'Å / å',
    pronunciation: '/oː/',
    description: 'Sounds like the "aw" in the English word "saw" or "born". It is a short or long pure "open-o" sound.',
    exampleWord: 'År',
    examplePhonetic: 'oːr',
    exampleTranslation: 'year',
    soundHint: 'aw in "saw"'
  },
  {
    letter: 'Y / y',
    pronunciation: '/yː/',
    description: 'This vowel does not exist in standard English. Shape your lips into a tight circle like making a whistling/oo sound, but pronounce a high-pitched English "ee".',
    exampleWord: 'Syk',
    examplePhonetic: 'syːk',
    exampleTranslation: 'sick',
    soundHint: 'German "ü" / lips rounded "ee"'
  },
  {
    letter: 'J / j',
    pronunciation: '/j/',
    description: 'Always pronounced like the English "y" in "yes" or "yellow". Never like the English "j" in "judge"!',
    exampleWord: 'Ja',
    examplePhonetic: 'jɑː',
    exampleTranslation: 'yes',
    soundHint: 'y in "yes"'
  },
  {
    letter: 'R / r',
    pronunciation: '/r/ or /ʁ/',
    description: 'Usually rolled or tapped with the tip of the tongue behind the upper front teeth ("rulle-r") in Eastern/Northern Norway. In Southwestern Norway, it is voiced in the back of the throat ("skarre-r") like French or German.',
    exampleWord: 'Rød',
    examplePhonetic: 'røː',
    exampleTranslation: 'red',
    soundHint: 'tapped/rolled R'
  },
  {
    letter: 'O / o',
    pronunciation: '/uː/ or /ɔ/',
    description: 'Usually pronounced like the English "oo" in "food" (long vowel) or sometimes like "o" in "lord" (short vowel). Often surprises beginners who expect a western "o".',
    exampleWord: 'Ost',
    examplePhonetic: 'ust',
    exampleTranslation: 'cheese',
    soundHint: 'oo in "boot" or o in "core"'
  },
  {
    letter: 'U / u',
    pronunciation: '/ʉː/ or /ʉ/',
    description: 'A very closed, rounded vowel. Keep your tongue high and forward, lips extremely pursed. Sounds like a tight combination of "oo" and "ee".',
    exampleWord: 'Ut',
    examplePhonetic: 'ʉːt',
    exampleTranslation: 'out',
    soundHint: 'extremely rounded "u"'
  },
  {
    letter: 'G / g',
    pronunciation: '/g/ or silent',
    description: 'Usually hard like "g" in "go". However, it sounds like "y" (ja-sound) before "i" or "y", and is frequently silent at the end of words ending in "-lig" (e.g. koselig).',
    exampleWord: 'Koselig',
    examplePhonetic: 'kuː-se-li',
    exampleTranslation: 'cozy / nice',
    soundHint: 'hard G or silent in "-lig"'
  },
  {
    letter: 'D / d',
    pronunciation: '/d/ or silent',
    description: 'Usually like English "d". However, the "d" is completely silent after long vowels or at the end of many common words like "med" (with) or "rød" (red).',
    exampleWord: 'Med',
    examplePhonetic: 'meː',
    exampleTranslation: 'with',
    soundHint: 'silent at the end'
  }
];

export const MINI_QUIZ_ALPHABET: QuizQuestion[] = [
  {
    id: 'alpha_1',
    question: 'How is the letter "J" pronounced in Norwegian (e.g., in "ja")?',
    type: 'multiple-choice',
    options: ['Like "j" in the English word "jam"', 'Like "y" in the English word "yes"', 'Like "j" in French (soft "zh")', 'It is always silent'],
    correctAnswer: 'Like "y" in the English word "yes"',
    explanation: 'In Norwegian, "J" is always pronounced like the English "y" in "yes". Thus, "Ja" is pronounced "yah".'
  },
  {
    id: 'alpha_2',
    question: 'Which English vowel sound is closest to the Norwegian letter "Æ"?',
    type: 'multiple-choice',
    options: ['The "a" in "bad" or "cat"', 'The "ay" in "say"', 'The "ee" in "meet"', 'The "aw" in "saw"'],
    correctAnswer: 'The "a" in "bad" or "cat"',
    explanation: 'The letter "Æ" represents an open-front unrounded vowel, similar to the "a" sound in English "cat" or "bad".'
  },
  {
    id: 'alpha_3',
    question: 'In words ending in "-lig" like "koselig" (cozy), the final letter "g" is usually...',
    type: 'multiple-choice',
    options: ['Pronounced like a hard "g" in "go"', 'Pronounced like a "y" in "yes"', 'Totally silent', 'Pronounced like "sh"'],
    correctAnswer: 'Totally silent',
    explanation: 'The end sound "-lig" is always pronounced as "-li" with a silent "g" (e.g., "koos-eh-lee").'
  }
];
