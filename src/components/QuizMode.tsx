/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Star, HelpCircle, ArrowRight, RotateCcw, AlertTriangle, Sparkles, Check, X, Award, Smile } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizModeProps {
  onXpAwarded: (amount: number) => void;
  onBadgeUnlocked: (badgeId: string) => void;
  unlockedBadges: string[];
}

const MASTER_QUIZ_POOL: QuizQuestion[] = [
  // Multiple choices
  {
    id: 'quiz_mc_1',
    question: 'Choose the correct Norwegian word for the number "Seven":',
    type: 'multiple-choice',
    options: ['To', 'Tre', 'Sju', 'Tjue'],
    correctAnswer: 'Sju',
    explanation: '"Sju" is the standard Bokmål Norwegian word for seven.'
  },
  {
    id: 'quiz_mc_2',
    question: 'How is the noun gender Neuter (intetkjønn) representing a word like "a house" written?',
    type: 'multiple-choice',
    options: ['en hus', 'ei hus', 'et hus', 'en huset'],
    correctAnswer: 'et hus',
    explanation: '"hus" is a neuter noun, requiring the indefinite article "et".'
  },
  {
    id: 'quiz_mc_3',
    question: 'What is the literal translation of the animal compound word "Sommerfugl"?',
    type: 'multiple-choice',
    options: ['Summer fly', 'Summer bird', 'Cozy bug', 'Flapping beetle'],
    correctAnswer: 'Summer bird',
    explanation: 'Combining "sommer" (summer) and "fugl" (bird) gives "sommerfugl"—the Norwegian word for butterfly!'
  },
  {
    id: 'quiz_mc_4',
    question: 'If you want to say "Excuse me" in Swiss-Norwegian to get someone\'s attention, which phrase would you say?',
    type: 'multiple-choice',
    options: ['God morgen', 'Bare hyggelig', 'Unnskyld meg', 'Tusen takk'],
    correctAnswer: 'Unnskyld meg',
    explanation: '"Unnskyld meg" means "Excuse me" or "Pardon me".'
  },
  {
    id: 'quiz_mc_5',
    question: 'How does the V2 rule conjugate the sentence "Yesterday they worked"? ("I går jobbet de")',
    type: 'multiple-choice',
    options: [
      'I går de jobbet.',
      'De jobbet i går.',
      'I går jobbet de.',
      'Jobbet de i går.'
    ],
    correctAnswer: 'I går jobbet de.',
    explanation: 'Under the V2 rule, since the adverbial time phrase "I går" starts the sentence, the verb "jobbet" must maintain the 2nd position, forcing the subject "de" into the 3rd slot.'
  },
  // Fill-in-the-blanks
  {
    id: 'quiz_fib_1',
    question: 'Fill in the blank: "En kaffe, _____" (A coffee, please)',
    type: 'fill-in-the-blank',
    correctAnswer: 'takk',
    explanation: '"takk" means thanks/please in this context.'
  },
  {
    id: 'quiz_fib_2',
    question: 'What is the present tense form of the verb "å være" (to be)?',
    type: 'fill-in-the-blank',
    correctAnswer: 'er',
    explanation: 'The verb "å være" is irregular and conjugates to "er" in the present tense.'
  },
  {
    id: 'quiz_fib_3',
    question: 'What is the definite form of the masculine noun "en bil" (the car)?',
    type: 'fill-in-the-blank',
    correctAnswer: 'bilen',
    explanation: 'By attaching the masculine article "en" as a suffix to "bil", we form the definite: "bilen".'
  },
  {
    id: 'quiz_fib_4',
    question: 'Translate the singular word "Water" (e.g. key nature elements) to Norwegian:',
    type: 'fill-in-the-blank',
    correctAnswer: 'vann',
    explanation: '"vann" means water in Norwegian Bokmål.'
  },
  {
    id: 'quiz_fib_5',
    question: 'Translate the greeting "Hi" or "Hello" into its simplest 3-letter Norwegian word:',
    type: 'fill-in-the-blank',
    correctAnswer: 'hei',
    explanation: '"Hei" is the standard, universal greeting used constantly in Norway.'
  }
];

export default function QuizMode({ onXpAwarded, onBadgeUnlocked, unlockedBadges }: QuizModeProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fibAnswer, setFibAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isGraded, setIsGraded] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [incorrectList, setIncorrectList] = useState<QuizQuestion[]>([]);

  const activeQuestion = MASTER_QUIZ_POOL[currentIdx];

  const handleStart = () => {
    setQuizStarted(true);
    setCurrentIdx(0);
    setScore(0);
    setFibAnswer('');
    setSelectedOption(null);
    setIsGraded(false);
    setFinished(false);
    setIncorrectList([]);
  };

  const handleOptionSelect = (opt: string) => {
    if (isGraded) return;
    setSelectedOption(opt);
  };

  const handleGrade = () => {
    if (isGraded) return;

    let isCorrect = false;

    if (activeQuestion.type === 'multiple-choice') {
      isCorrect = selectedOption === activeQuestion.correctAnswer;
    } else {
      // ignore casing and whitespace
      const cleanInput = fibAnswer.trim().toLowerCase();
      const cleanAnswer = activeQuestion.correctAnswer.trim().toLowerCase();
      isCorrect = cleanInput === cleanAnswer;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setIncorrectList((prev) => [...prev, activeQuestion]);
    }

    setIsGraded(true);
  };

  const handleNext = () => {
    if (currentIdx < MASTER_QUIZ_POOL.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setFibAnswer('');
      setSelectedOption(null);
      setIsGraded(false);
    } else {
      setFinished(true);
      // Award XP
      const gainedXp = score * 80; // 80 XP per correct question
      onXpAwarded(gainedXp);

      // Check badges
      if (score === MASTER_QUIZ_POOL.length) {
        onBadgeUnlocked('badge_perfect');
      } else if (score >= 3) {
        onBadgeUnlocked('badge_first_quiz');
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-fjord-navy to-fjord-dark rounded-xl pb-10 border border-fjord-navy-light shadow-2xl relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fjord-teal/5 rounded-full blur-3xl pointer-events-none" />

      {!quizStarted ? (
        <div className="p-8 md:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-block p-4 bg-fjord-teal/10 rounded-full border border-fjord-teal/30 text-fjord-teal animate-bounce">
            <BookOpen className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-fjord-light">
            Interactive Proficiency Exam (Norsk-Prøve)
          </h2>
          <p className="text-sm text-fjord-gray leading-relaxed">
            Test your standard Norwegian competencies! This adaptive evaluation features both{' '}
            <strong className="text-fjord-teal">multiple-choice conjugation matrices</strong> and{' '}
            <strong className="text-fjord-gold">fill-in-the-blank vocabulary spelling tests</strong> drawn from all 5 preceding study modules.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-lg mx-auto py-4 text-left">
            <div className="p-3 bg-fjord-dark rounded-xl border border-fjord-navy-light text-center">
              <span className="text-xs text-fjord-gray block">Total Items</span>
              <span className="font-bold text-sm text-fjord-light font-display">10 Questions</span>
            </div>
            <div className="p-3 bg-fjord-dark rounded-xl border border-fjord-navy-light text-center">
              <span className="text-xs text-fjord-gray block">XP Value</span>
              <span className="font-bold text-sm text-fjord-gold font-mono">80 XP per answer</span>
            </div>
            <div className="p-3 bg-fjord-dark rounded-xl border border-fjord-navy-light text-center col-span-2 md:col-span-1">
              <span className="text-xs text-fjord-gray block">Achievement Badge</span>
              <span className="font-bold text-xs text-fjord-teal font-display block truncate">Bokmål Medal</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto px-8 py-3 bg-fjord-gold hover:bg-opacity-90 font-bold text-sm text-fjord-dark rounded-xl transition shadow-lg cursor-pointer"
          >
            Start Norsk-Prøve
          </button>
        </div>
      ) : !finished ? (
        <div className="p-5 md:p-10 space-y-6">
          {/* Progress indicators */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-fjord-navy-light pb-4">
            <div>
              <span className="text-xs font-mono text-fjord-gray">PROFICIENCY TEST PROGRESS</span>
              <h3 className="text-lg font-bold text-fjord-light font-display">
                Question {currentIdx + 1} of {MASTER_QUIZ_POOL.length}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-fjord-dark px-3 py-1.5 rounded-lg border border-fjord-navy-light">
              <Star className="w-4 h-4 text-fjord-gold" />
              <span className="text-xs font-semibold text-fjord-light">
                Running Score: <strong className="text-fjord-teal font-mono">{score}</strong> / {currentIdx}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-fjord-dark h-2 rounded-full overflow-hidden">
            <div
              className="bg-fjord-teal h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / MASTER_QUIZ_POOL.length) * 100}%` }}
            />
          </div>

          {/* Question area */}
          <div className="space-y-4 pt-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-fjord-navy-light text-fjord-teal border border-fjord-teal/20">
              {activeQuestion.type === 'multiple-choice' ? 'MULTIPLE CHOICE' : 'WRITE-IN SYNTAX FILL'}
            </span>
            <p className="text-base font-bold text-fjord-light font-display leading-tight">
              {activeQuestion.question}
            </p>

            {/* Answer Controls */}
            {activeQuestion.type === 'multiple-choice' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {activeQuestion.options?.map((opt) => {
                  let btnColor = 'bg-fjord-dark hover:bg-fjord-navy-light border-fjord-navy-light text-fjord-light';
                  if (selectedOption === opt) {
                    btnColor = 'bg-fjord-teal/15 border-fjord-teal text-fjord-teal font-medium';
                  }

                  if (isGraded) {
                    if (opt === activeQuestion.correctAnswer) {
                      btnColor = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                    } else if (selectedOption === opt) {
                      btnColor = 'bg-rose-950/40 border-rose-500 text-rose-200';
                    } else {
                      btnColor = 'bg-fjord-dark/30 border-fjord-navy-light/40 text-fjord-gray opacity-40';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleOptionSelect(opt)}
                      disabled={isGraded}
                      className={`p-4 rounded-xl border text-left text-xs transition duration-150 flex items-center justify-between cursor-pointer focus:outline-none ${btnColor}`}
                    >
                      <span>{opt}</span>
                      {isGraded && opt === activeQuestion.correctAnswer && (
                        <Check className="w-4 h-4 text-emerald-400" />
                      )}
                      {isGraded && selectedOption === opt && opt !== activeQuestion.correctAnswer && (
                        <X className="w-4 h-4 text-rose-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3 pt-4">
                <input
                  type="text"
                  placeholder="Skriv på norsk her..."
                  value={fibAnswer}
                  onChange={(e) => setFibAnswer(e.target.value)}
                  disabled={isGraded}
                  className="w-full p-4 bg-fjord-dark border border-fjord-navy-light rounded-xl text-sm font-sans tracking-wide text-fjord-light focus:outline-none focus:border-fjord-teal transition"
                />
                
                {isGraded && (
                  <div className={`p-4 rounded-xl border text-xs flex items-center justify-between ${
                    fibAnswer.trim().toLowerCase() === activeQuestion.correctAnswer.trim().toLowerCase()
                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-100'
                      : 'bg-rose-950/40 border-rose-500 text-rose-100'
                  }`}>
                    <div>
                      <p className="font-bold">
                        {fibAnswer.trim().toLowerCase() === activeQuestion.correctAnswer.trim().toLowerCase()
                          ? 'Korrekt!'
                          : 'Feil (Incorrect):'}
                      </p>
                      <p className="mt-0.5">
                        Your answer: <kbd className="font-mono text-fjord-gold">{fibAnswer || '(empty)'}</kbd>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-fjord-gray uppercase">Target Translation</p>
                      <p className="font-mono text-sm text-fjord-light font-bold">
                        {activeQuestion.correctAnswer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Graded explanation and confirmation */}
            {isGraded && (
              <div className="bg-fjord-dark/70 border-l-4 border-fjord-teal p-4 rounded-xl text-xs text-fjord-gray leading-relaxed animate-fadeIn">
                <h4 className="font-semibold text-fjord-light mb-1 font-display">Etymological Note:</h4>
                {activeQuestion.explanation}
              </div>
            )}

            {/* Command area */}
            <div className="flex justify-between items-center pt-6 border-t border-fjord-dark/60 mt-8">
              <span className="text-xs text-fjord-gray">
                {!isGraded ? 'Select or type your solution above.' : 'Review explanations, then click Next.'}
              </span>

              {!isGraded ? (
                <button
                  onClick={handleGrade}
                  disabled={activeQuestion.type === 'multiple-choice' ? !selectedOption : !fibAnswer.trim()}
                  className="px-6 py-2.5 rounded-lg bg-fjord-teal text-fjord-dark hover:bg-opacity-90 font-bold text-xs transition cursor-pointer disabled:opacity-40"
                >
                  Grade Submission
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg bg-fjord-gold text-fjord-dark hover:bg-opacity-90 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {currentIdx < MASTER_QUIZ_POOL.length - 1 ? 'Go to Next Question' : 'View Final Certification'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Final certification page */
        <div className="p-8 md:p-12 text-center max-w-xl mx-auto space-y-6 animate-fadeIn">
          <div className="inline-block p-6 bg-fjord-gold/10 text-fjord-gold rounded-full border border-fjord-gold/20 relative">
            <Award className="w-16 h-16 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute top-1 right-1 text-fjord-teal animate-spin" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black font-display text-fjord-light">
              Norsk-Prøve Evaluated!
            </h2>
            <p className="text-xs text-fjord-gray tracking-widest uppercase font-mono">
              Bokmål Language Proficiency Scorecard
            </p>
          </div>

          <div className="bg-fjord-dark border border-fjord-navy-light p-5 rounded-2xl">
            <div className="grid grid-cols-2 gap-4 divide-x divide-fjord-navy-light">
              <div className="text-center">
                <span className="text-xs text-fjord-gray block">Questions Clear</span>
                <span className="text-3xl font-black font-mono text-fjord-teal">
                  {score} <span className="text-sm font-normal text-fjord-gray">/ {MASTER_QUIZ_POOL.length}</span>
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs text-fjord-gray block">Points Collected</span>
                <span className="text-3xl font-black font-mono text-fjord-gold">
                  +{score * 80} <span className="text-sm font-normal text-fjord-gray">XP</span>
                </span>
              </div>
            </div>

            {/* Performance status */}
            <div className="mt-4 pt-4 border-t border-fjord-navy-light text-xs text-fjord-gray leading-relaxed">
              {score === MASTER_QUIZ_POOL.length ? (
                <span className="text-fjord-gold font-bold">
                  Perfect Score! 🏆 You unlocked the legendary <strong className="underline">Midnight Scholar (Midnattssol)</strong> Badge. Your understanding of Norwegian syntax structures is exquisite.
                </span>
              ) : score >= 7 ? (
                <span className="text-fjord-teal font-medium">
                  Strålende! Outstanding command. Your grasp over articles, adjective gender markers, and word positioning rules matches intermediate European framework goals.
                </span>
              ) : score >= 4 ? (
                <span className="text-fjord-light">
                  Bra jobbet! Solid pass. Go back through the Grammar and Compound words lists once more to secure those irregular conjugations!
                </span>
              ) : (
                <span className="text-amber-500">
                  Prøv igjen! Don't be discouraged. Norwegian vowel sounds and ending suffixes are quite different from English. Try refreshing the sections and study again.
                </span>
              )}
            </div>
          </div>

          {/* Wrong list if any */}
          {incorrectList.length > 0 && (
            <div className="text-left bg-fjord-dark/40 border border-fjord-navy-light rounded-xl p-4">
              <h4 className="text-xs font-bold text-fjord-gold font-display mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-fjord-gold" />
                <span>Areas to Improve:</span>
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2 divide-y divide-fjord-dark">
                {incorrectList.map((q) => (
                  <div key={q.id} className="pt-2 text-xs">
                    <span className="font-semibold text-fjord-light block">{q.question}</span>
                    <span className="text-fjord-gray mt-0.5 block italic">
                      Correct answer: <strong className="text-fjord-teal font-mono">{q.correctAnswer}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleStart}
              className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-fjord-teal text-fjord-dark hover:bg-opacity-90 transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Norsk-Prøve
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
