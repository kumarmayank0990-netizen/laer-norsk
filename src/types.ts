/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AlphabetItem {
  letter: string;
  pronunciation: string;
  description: string;
  exampleWord: string;
  examplePhonetic: string;
  exampleTranslation: string;
  soundHint: string;
}

export interface PhraseItem {
  norwegian: string;
  phonetic: string;
  english: string;
  category: string;
  level?: 'A1' | 'A2' | 'B1';
}

export interface VocabItem {
  norwegian: string;
  phonetic: string;
  english: string;
  level?: 'A1' | 'A2' | 'B1';
}

export interface VocabularyCategories {
  [categoryName: string]: VocabItem[];
}

export interface GrammarSection {
  title: string;
  summary: string;
  level?: 'A1' | 'A2' | 'B1';
  explanations: {
    heading: string;
    text: string;
    examples?: { norwegian: string; english: string; analysis?: string }[];
  }[];
}

export interface CompoundWord {
  word: string;
  translation: string;
  literalBreakdown: { part: string; meaning: string }[];
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-in-the-blank';
  options?: string[]; // only for multiple-choice
  correctAnswer: string;
  explanation: string;
}

export interface LeaderboardEntry {
  name: string;
  xp: number;
  rank: number;
  country: string;
  streak: number;
  isUser?: boolean;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlockedAt?: string;
}

export interface UserState {
  currentTab: string;
  xp: number;
  streak: number;
  completedLessons: string[]; // List of lesson IDs
  completedQuizzes: string[]; // List of quiz categories/IDs
  unlockedBadges: string[];
}
