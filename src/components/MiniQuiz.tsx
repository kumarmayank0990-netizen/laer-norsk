/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, X, HelpCircle, Award, Sparkles, AlertCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface MiniQuizProps {
  moduleId: string;
  moduleTitle: string;
  questions: QuizQuestion[];
  onQuizComplete: (moduleId: string, pointsEarned: number) => void;
  isCompletedAlready: boolean;
}

export default function MiniQuiz({
  moduleId,
  moduleTitle,
  questions,
  onQuizComplete,
  isCompletedAlready,
}: MiniQuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  // If the array is empty, guard
  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentIdx];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
  };

  const handleVerify = () => {
    if (!selectedAnswer || isAnswered) return;
    
    setIsAnswered(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setShowSummary(true);
      // Give 50 XP per correct question
      const totalXp = score * 50;
      onQuizComplete(moduleId, totalXp);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  return (
    <div className="mt-12 bg-fjord-navy/60 border border-fjord-teal/30 rounded-xl p-5 md:p-8 shadow-inner relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-fjord-teal/15 text-fjord-teal text-[10px] font-bold py-1 px-4 tracking-wider uppercase rounded-br-lg font-sans border-b border-r border-fjord-teal/20">
        End-of-Module Checkpoint
      </div>

      {!showSummary ? (
        <div className="pt-2">
          {/* Progress row */}
          <div className="flex justify-between items-center mb-5 mt-2">
            <span className="text-xs font-semibold text-fjord-teal">
              Checking understanding: <span className="text-fjord-light font-display">{moduleTitle}</span>
            </span>
            <span className="text-xs font-mono text-fjord-gray">
              Question {currentIdx + 1} of {questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-fjord-dark h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-fjord-teal h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="space-y-4">
            {/* Question Text */}
            <h4 className="text-base text-fjord-light font-bold font-display leading-snug">
              {currentQuestion.question}
            </h4>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {currentQuestion.options?.map((opt) => {
                let btnStyle = 'bg-fjord-dark border-fjord-navy-light hover:border-fjord-gray/40 text-fjord-light';
                
                if (isAnswered) {
                  if (opt === currentQuestion.correctAnswer) {
                    btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-100';
                  } else if (opt === selectedAnswer) {
                    btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-100';
                  } else {
                    btnStyle = 'bg-fjord-dark border-fjord-navy-light text-fjord-gray opacity-60';
                  }
                } else if (selectedAnswer === opt) {
                  btnStyle = 'bg-fjord-teal/10 border-fjord-teal text-fjord-teal font-medium';
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs transition duration-150 flex items-center justify-between cursor-pointer focus:outline-none ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    <div className="flexItems text-right">
                      {isAnswered && opt === currentQuestion.correctAnswer && (
                        <Check className="w-4 h-4 text-emerald-400" />
                      )}
                      {isAnswered && opt === selectedAnswer && opt !== currentQuestion.correctAnswer && (
                        <X className="w-4 h-4 text-rose-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Verification and Next row */}
            <div className="flex justify-between items-center pt-4 border-t border-fjord-dark/60 mt-6">
              <div className="flex items-center gap-2">
                {isCompletedAlready && (
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Already Completed (+0 XP)
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {!isAnswered ? (
                  <button
                    onClick={handleVerify}
                    disabled={!selectedAnswer}
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-fjord-teal text-fjord-dark hover:bg-opacity-90 disabled:opacity-50 transition cursor-pointer"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-fjord-gold text-fjord-dark hover:bg-opacity-90 transition cursor-pointer"
                  >
                    {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
              </div>
            </div>

            {/* Explanation box */}
            {isAnswered && (
              <div className="mt-4 p-4 rounded-xl text-xs bg-fjord-dark/80 border-l-4 border-fjord-teal text-fjord-gray leading-relaxed animate-fadeIn">
                <div className="flex items-center gap-1.5 text-fjord-light font-bold mb-1">
                  <AlertCircle className="w-4 h-4 text-fjord-teal" />
                  <span>Grammar Note & Context</span>
                </div>
                {currentQuestion.explanation}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 pt-8 space-y-4 animate-fadeIn">
          <div className="inline-block p-4 bg-fjord-gold/10 text-fjord-gold rounded-full border border-fjord-gold/20 mb-2">
            <Award className="w-10 h-10" />
          </div>
          <h4 className="text-lg font-bold text-fjord-light font-display">
            Module Quiz Complete!
          </h4>
          <p className="text-sm text-fjord-gray max-w-md mx-auto">
            You scored <span className="text-fjord-teal font-bold">{score}</span> out of{' '}
            <span className="text-fjord-light">{questions.length}</span> correct on the{' '}
            <span className="italic">{moduleTitle}</span> checkpoint.
          </p>

          <div className="flex justify-center gap-3 py-2">
            {score > 0 && !isCompletedAlready && (
              <div className="bg-fjord-dark border border-fjord-gold/30 px-4 py-2 rounded-xl flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-fjord-gold" />
                <span className="text-xs font-mono font-bold text-fjord-gold">
                  +{score * 50} total XP awarded!
                </span>
              </div>
            )}
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-fjord-teal/30 hover:bg-fjord-dark text-fjord-teal transition cursor-pointer"
            >
              Retry Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
