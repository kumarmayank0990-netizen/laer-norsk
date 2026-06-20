/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Flame, Trophy, Volume2, BookOpen, Clock, Compass, HelpCircle, 
  Map, User, Heart, Settings, Menu, X, HelpCircle as HelpIcon, 
  Award, Sparkles, AlertCircle, Play, ChevronRight, CheckSquare, ListFilter, Search 
} from 'lucide-react';

import { BASIC_ALPHABET, DETAILED_LETTERS, MINI_QUIZ_ALPHABET } from './data/alphabet';
import { ESSENTIAL_PHRASES, PHRASES_CATEGORIES, MINI_QUIZ_PHRASES } from './data/phrases';
import { VOCABULARY_DATA, MINI_QUIZ_VOCABULARY } from './data/vocabulary';
import { GRAMMAR_SECTIONS, MINI_QUIZ_GRAMMAR } from './data/grammar';
import { COMPOUND_WORDS, MINI_QUIZ_COMPOUNDS } from './data/compounds';

import NotificationManager, { NotificationMsg } from './components/NotificationManager';
import LeaderboardSection from './components/LeaderboardSection';
import MiniQuiz from './components/MiniQuiz';
import QuizMode from './components/QuizMode';
import { Badge, UserState } from './types';

// Default list of gamification badges
const BADGES_LIST: Badge[] = [
  { id: 'badge_welcome', title: 'Velkommen', description: 'Established your study credentials in Norway.', iconName: 'Compass' },
  { id: 'badge_alphabet', title: 'Runemaster', description: 'Mastered the Norse special vowels (Æ, Ø, Å).', iconName: 'BookOpen' },
  { id: 'badge_phrases', title: 'Fluent Nomad', description: 'Acquired manners for cafes and help desk scenarios.', iconName: 'Heart' },
  { id: 'badge_vocab', title: 'Lexicon Scholar', description: 'Solved vocabulary checkpoints across 8 core taxonomies.', iconName: 'Award' },
  { id: 'badge_grammar', title: 'Syntax Architect', description: 'Deciphered V2 word order under pressure.', iconName: 'Settings' },
  { id: 'badge_compounds', title: 'Word Weaver', description: 'Designed compound nouns like Sykehus and Sommerfugl.', iconName: 'Flame' },
  { id: 'badge_perfect', title: 'Midnight Scholar', description: 'Achieved a flawless 10/10 score on the Norsk-Prøve.', iconName: 'Trophy' },
  { id: 'badge_a2', title: 'Fjordviking', description: 'Ascended to A2 level representing comfortable social and routine talk.', iconName: 'Flame' },
  { id: 'badge_b1', title: 'Sagaforteller', description: 'Mastered intermediate B1 grammatical structures, sub-clauses, and passive voice.', iconName: 'Trophy' }
];

export default function App() {
  // Mobile sidebar open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // User details
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('laer_norsk_username') || 'Nordic Explorer';
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [typedName, setTypedName] = useState(userName);

  // Gamification & Progress State
  const [xp, setXp] = useState<number>(() => {
    return parseInt(localStorage.getItem('laer_norsk_xp') || '150');
  });
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('laer_norsk_completed_quizzes') || '[]');
  });
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    const list = JSON.parse(localStorage.getItem('laer_norsk_unlocked_badges') || '[]');
    if (list.length === 0) list.push('badge_welcome'); // Award welcome badge immediately
    return list;
  });
  const [streak, setStreak] = useState<number>(() => {
    return parseInt(localStorage.getItem('laer_norsk_streak') || '3');
  });

  // Notifications state
  const [notifications, setNotifications] = useState<NotificationMsg[]>([]);

  // Navigation tab
  const [currentTab, setCurrentTab] = useState('alphabet');

  // Sub-tab selectors inside views
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1'>('ALL');
  const [selectedPhraseCat, setSelectedPhraseCat] = useState<string>('Godaften & Hilsener (Greetings)');
  const [selectedVocabCat, setSelectedVocabCat] = useState<string>('Tall (Numbers)');
  const [vocabSearch, setVocabSearch] = useState('');

  // Auto-switch categories when level filter is modified to prevent empty renders
  useEffect(() => {
    // 1. For Phrases
    const visiblePhraseCats = selectedLevel === 'ALL'
      ? PHRASES_CATEGORIES
      : Array.from(
          new Set(
            ESSENTIAL_PHRASES
              .filter(p => (p.level || 'A1') === selectedLevel)
              .map(p => p.category)
          )
        );
    if (visiblePhraseCats.length > 0 && !visiblePhraseCats.includes(selectedPhraseCat)) {
      setSelectedPhraseCat(visiblePhraseCats[0]);
    }

    // 2. For Vocabulary
    const visibleVocabCats = Object.keys(VOCABULARY_DATA).filter((catName) => {
      const items = VOCABULARY_DATA[catName] || [];
      return selectedLevel === 'ALL' || items.some(item => (item.level || 'A1') === selectedLevel);
    });
    if (visibleVocabCats.length > 0 && !visibleVocabCats.includes(selectedVocabCat)) {
      setSelectedVocabCat(visibleVocabCats[0]);
    }
  }, [selectedLevel]);

  // Synchronize XP to unlock new milestones
  useEffect(() => {
    let changed = false;
    const currentUnlocked = [...unlockedBadges];
    
    if (xp >= 250 && !currentUnlocked.includes('badge_a2')) {
      currentUnlocked.push('badge_a2');
      changed = true;
      addLocalNotification(
        '🏆 Elite Milestone reached!',
        'Gratulerer! You reached 250 XP and unlocked the "Fjordviking" A2 Badge!',
        'achievement'
      );
    }
    
    if (xp >= 500 && !currentUnlocked.includes('badge_b1')) {
      currentUnlocked.push('badge_b1');
      changed = true;
      addLocalNotification(
        '👑 Elite Milestone reached!',
        'Fantastisk! You reached 500 XP and unlocked the "Sagaforteller" B1 Badge!',
        'achievement'
      );
    }
    
    if (changed) {
      setUnlockedBadges(currentUnlocked);
    }
  }, [xp, unlockedBadges]);

  // Save changes to localStorage for offline preservation
  useEffect(() => {
    localStorage.setItem('laer_norsk_xp', xp.toString());
    localStorage.setItem('laer_norsk_completed_quizzes', JSON.stringify(completedQuizzes));
    localStorage.setItem('laer_norsk_unlocked_badges', JSON.stringify(unlockedBadges));
    localStorage.setItem('laer_norsk_streak', streak.toString());
    localStorage.setItem('laer_norsk_username', userName);
  }, [xp, completedQuizzes, unlockedBadges, streak, userName]);

  // Audio Playback using SpeechSynthesis
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop playing previous statements
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'no-NO'; // Norwegian voice dialect setting
      utterance.rate = 0.85; // Slightly slower for language learners
      window.speechSynthesis.speak(utterance);
    } else {
      addLocalNotification('Voice Assist Limited', 'Your system does not support Text-to-Speech API playback.', 'reminder');
    }
  };

  // Simulated notification triggers
  const addLocalNotification = (title: string, message: string, type: 'streak' | 'achievement' | 'reminder' | 'success') => {
    const freshNotif: NotificationMsg = {
      id: Math.random().toString(),
      title,
      message,
      type,
      timestamp: new Date()
    };
    setNotifications(prev => [...prev, freshNotif]);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleSimulateRequest = (type: 'streak' | 'reminder' | 'achievement') => {
    if (type === 'reminder') {
      addLocalNotification(
        '🕒 Study Reminder',
        'Det er kveld! Keep the fire burning: visit the "Quiz Mode" to secure your daily streak.',
        'reminder'
      );
    } else if (type === 'streak') {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      addLocalNotification(
        '🔥 Streak Adjusted!',
        `Vel gjort! Studied today. You are now at a streak of ${nextStreak} Days! Keep it up.`,
        'streak'
      );
    } else {
      // Pick random badge
      addLocalNotification(
        '🏆 New Badge Unlocked!',
        'Gratulerer! You have earned the "Runemaster" medallion.',
        'achievement'
      );
    }
  };

  const saveName = () => {
    if (typedName.trim()) {
      setUserName(typedName.trim());
      setIsEditingName(false);
      addLocalNotification('Profile Saved', `Name updated to ${typedName.trim()} successfully!`, 'success');
    }
  };

  // Award XP for End-of-Module MiniQuizzes
  const handleQuizCompletion = (moduleId: string, pointsEarned: number) => {
    if (completedQuizzes.includes(moduleId)) return; // Already answered

    // Save checked state
    setCompletedQuizzes(prev => [...prev, moduleId]);
    
    if (pointsEarned > 0) {
      setXp(prev => prev + pointsEarned);
      
      // Determine if they unlock a badge based on moduleId
      let matchingBadgeId = '';
      if (moduleId === 'alphabet_quiz') matchingBadgeId = 'badge_alphabet';
      else if (moduleId === 'phrases_quiz') matchingBadgeId = 'badge_phrases';
      else if (moduleId === 'vocab_quiz') matchingBadgeId = 'badge_vocab';
      else if (moduleId === 'grammar_quiz') matchingBadgeId = 'badge_grammar';
      else if (moduleId === 'compounds_quiz') matchingBadgeId = 'badge_compounds';

      let unlockedCountMessage = '';
      if (matchingBadgeId && !unlockedBadges.includes(matchingBadgeId)) {
        setUnlockedBadges(prev => [...prev, matchingBadgeId]);
        unlockedCountMessage = '. You also unlocked a Badge: ' + BADGES_LIST.find(b => b.id === matchingBadgeId)?.title + '!';
      }

      addLocalNotification(
        '🎉 Module Passed!',
        `Nice work! You gained +${pointsEarned} XP${unlockedCountMessage}`,
        'success'
      );
    }
  };

  // External Quiz Mode callback
  const handleAwardXp = (amount: number) => {
    if (amount > 0) {
      setXp(prev => prev + amount);
      addLocalNotification('Points Deposited!', `Awarded +${amount} XP to your leaderboard profile.`, 'success');
    }
  };

  const handleExternalBadgeUnlock = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges(prev => [...prev, badgeId]);
      const badgeTitle = BADGES_LIST.find(b => b.id === badgeId)?.title || 'Award Medal';
      addLocalNotification(
        '🏆 Elite Badge Earned!',
        `Phenomenal work! You unlocked the legendary "${badgeTitle}" badge.`,
        'achievement'
      );
    }
  };

  // Progression calculation: how many standard categories have been mastered out of 5 checks?
  const completionPercentage = Math.round((completedQuizzes.length / 5) * 100);

  // Active navigation styles
  const navItemClass = (tabId: string) => {
    const isCurrent = currentTab === tabId;
    return `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-semibold font-display transition cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-fjord-teal ${
      isCurrent 
        ? 'bg-fjord-teal text-fjord-dark font-bold' 
        : 'text-fjord-gray hover:text-fjord-light hover:bg-fjord-dark/60'
    }`;
  };

  return (
    <div className="min-h-screen text-fjord-light font-sans bg-fjord-dark flex relative overflow-x-hidden md:pl-[240px] pt-14 md:pt-0">
      
      {/* ────────────────── TOP MOBILE BAR ────────────────── */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-fjord-navy border-b border-fjord-navy-light px-4 flex items-center justify-between z-30 md:hidden">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-fjord-teal animate-pulse" />
          <h1 className="text-sm font-black font-display tracking-tight text-fjord-light">
            LÆR NORSK
          </h1>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-1.5 rounded-lg bg-fjord-dark border border-fjord-navy-light text-fjord-teal hover:text-fjord-light cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* ────────────────── PERSISTENT SIDE NAVIGATION (Desktop) ────────────────── */}
      <aside className="fixed top-0 left-0 bottom-0 w-[240px] bg-fjord-navy border-r border-fjord-navy-light hidden md:flex flex-col z-20">
        {/* Brand Banner */}
        <div className="p-6 border-b border-fjord-navy-light flex items-center gap-2.5">
          <div className="p-1.5 bg-fjord-teal/10 rounded-lg border border-fjord-teal/20 text-fjord-teal">
            <BookOpen className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-fjord-gold font-bold tracking-widest block font-mono">BOKMÅL PORTAL</span>
            <h1 className="text-base font-black font-display tracking-tight leading-none text-fjord-light">
              Lær Norsk
            </h1>
          </div>
        </div>

        {/* Dynamic Study Progress Tracker (Motivator) */}
        <div className="p-4 border-b border-fjord-navy-light/60 bg-fjord-dark/40 font-sans space-y-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-fjord-gray font-semibold uppercase">Daily Goals</span>
            <span className="font-bold text-fjord-teal font-mono">{completionPercentage}% Completed</span>
          </div>
          <div className="w-full bg-fjord-dark h-1.5 rounded-full overflow-hidden border border-fjord-navy-light/20">
            <div 
              className="bg-fjord-teal h-full transition-all duration-300" 
              style={{ width: `${completionPercentage}%` }} 
            />
          </div>
          <p className="text-[10px] text-fjord-gray mt-1 font-medium leading-normal text-left">
            Completed <strong className="text-fjord-light">{completedQuizzes.length}</strong> out of 5 study checkpoints.
          </p>
        </div>

        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <span className="text-[9px] uppercase font-bold tracking-wider text-fjord-gray block pl-3 mb-2">
            Standard Curriculum
          </span>
          <button onClick={() => setCurrentTab('alphabet')} className={navItemClass('alphabet')}>
            <Clock className="w-4 h-4" />
            <span>Alphabet & Sound</span>
          </button>
          
          <button onClick={() => setCurrentTab('phrases')} className={navItemClass('phrases')}>
            <Map className="w-4 h-4" />
            <span>Essential Phrases</span>
          </button>

          <button onClick={() => setCurrentTab('vocabulary')} className={navItemClass('vocabulary')}>
            <Clock className="w-4 h-4" />
            <span>Vocabulary Library</span>
          </button>

          <button onClick={() => setCurrentTab('grammar')} className={navItemClass('grammar')}>
            <Settings className="w-4 h-4" />
            <span>Grammar Basics</span>
          </button>

          <button onClick={() => setCurrentTab('compounds')} className={navItemClass('compounds')}>
            <Flame className="w-4 h-4" />
            <span>Compound Words</span>
          </button>

          <span className="text-[9px] uppercase font-bold tracking-wider text-fjord-gray block pl-3 pt-4 mb-2">
            Assessment & Sync
          </span>

          <button onClick={() => setCurrentTab('quiz')} className={navItemClass('quiz')}>
            <HelpIcon className="w-4 h-4" />
            <span>Proficiency Exam</span>
          </button>

          <button onClick={() => setCurrentTab('leaderboard')} className={navItemClass('leaderboard')}>
            <Trophy className="w-4 h-4" />
            <span>Leaderboard</span>
          </button>
        </nav>

        {/* Profile Card & Local Persistence Lock */}
        <div className="p-4 border-t border-fjord-navy-light bg-fjord-dark/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-fjord-gold/25 border border-fjord-gold/40 flex items-center justify-center text-fjord-gold font-bold text-xs uppercase">
              {userName.substring(0, 2)}
            </div>
            <div className="min-w-0 flex-1">
              {isEditingName ? (
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={typedName}
                    onChange={(e) => setTypedName(e.target.value)}
                    className="w-full text-xs px-1.5 py-0.5 bg-fjord-dark border border-fjord-teal focus:outline-none text-fjord-light rounded"
                  />
                  <button onClick={saveName} className="text-xs text-fjord-teal font-bold px-1 py-0.5 hover:text-fjord-light">
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-fjord-light block truncate w-3/4">
                    {userName}
                  </span>
                  <button 
                    onClick={() => { setTypedName(userName); setIsEditingName(true); }} 
                    className="text-[10px] text-fjord-teal hover:underline"
                  >
                    Edit
                  </button>
                </div>
              )}
              <span className="text-[9px] text-fjord-gray block uppercase tracking-wider mt-0.5">
                ACTIVE NORSK LEARNER
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* ────────────────── MOBILE SLIDE-OUT PANEL ────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-fjord-dark/90 backdrop-blur-sm z-50 md:hidden flex justify-start">
          <div className="w-[250px] bg-fjord-navy h-full p-5 border-r border-fjord-navy-light flex flex-col justify-between relative">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg bg-fjord-dark text-fjord-gray cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-fjord-teal" />
                <h2 className="font-bold font-display text-fjord-light">Lær Norsk</h2>
              </div>

              <div className="w-full bg-fjord-dark h-1 rounded-full overflow-hidden">
                <div className="bg-fjord-teal h-full" style={{ width: `${completionPercentage}%` }} />
              </div>

              <nav className="space-y-1 pt-2">
                <button
                  onClick={() => { setCurrentTab('alphabet'); setMobileMenuOpen(false); }}
                  className={navItemClass('alphabet')}
                >
                  <Clock className="w-4 h-4" />
                  <span>Alphabet & sound</span>
                </button>
                <button
                  onClick={() => { setCurrentTab('phrases'); setMobileMenuOpen(false); }}
                  className={navItemClass('phrases')}
                >
                  <Map className="w-4 h-4" />
                  <span>Essential Phrases</span>
                </button>
                <button
                  onClick={() => { setCurrentTab('vocabulary'); setMobileMenuOpen(false); }}
                  className={navItemClass('vocabulary')}
                >
                  <Clock className="w-4 h-4" />
                  <span>Vocabulary Library</span>
                </button>
                <button
                  onClick={() => { setCurrentTab('grammar'); setMobileMenuOpen(false); }}
                  className={navItemClass('grammar')}
                >
                  <Settings className="w-4 h-4" />
                  <span>Grammar Basics</span>
                </button>
                <button
                  onClick={() => { setCurrentTab('compounds'); setMobileMenuOpen(false); }}
                  className={navItemClass('compounds')}
                >
                  <Flame className="w-4 h-4" />
                  <span>Compound Words</span>
                </button>
                <br />
                <button
                  onClick={() => { setCurrentTab('quiz'); setMobileMenuOpen(false); }}
                  className={navItemClass('quiz')}
                >
                  <HelpIcon className="w-4 h-4" />
                  <span>Proficiency Exam</span>
                </button>
                <button
                  onClick={() => { setCurrentTab('leaderboard'); setMobileMenuOpen(false); }}
                  className={navItemClass('leaderboard')}
                >
                  <Trophy className="w-4 h-4" />
                  <span>Leaderboard</span>
                </button>
              </nav>
            </div>

            {/* Mobile Footer profile edit */}
            <div className="p-4 bg-fjord-dark rounded-xl border border-fjord-navy-light flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-fjord-gold/20 flex items-center justify-center font-bold text-xs text-fjord-gold">
                {userName.substring(0,2)}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-fjord-light block truncate">{userName}</span>
                <span className="text-[9px] text-fjord-gray block uppercase">Explorer Profile</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────── MAIN WINDOW CONTENT ────────────────── */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-10 space-y-8 min-w-0">
        
        {/* ──────── HEADER STATUS BAR ──────── */}
        <section className="bg-fjord-navy border border-fjord-navy-light rounded-xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
          <div>
            <span className="text-[10px] text-fjord-teal font-extrabold tracking-widest uppercase font-mono block">
              COSMIC SLATE THEME (NORDIC SLATE SYSTEM)
            </span>
            <h1 className="text-xl md:text-2xl font-black font-display text-fjord-light mt-1">
              Velkommen, {userName}!
            </h1>
            <p className="text-xs text-fjord-gray mt-0.5">
              Accumulate XP accomplishments by solving End-of-Module check quizzes.
            </p>
          </div>

          {/* Core study parameters badge */}
          <div className="flex gap-3 justify-center items-center flex-wrap">
            <div className="flex items-center gap-2 bg-fjord-dark px-3 py-2 rounded-xl border border-fjord-navy-light hover:scale-103 transition">
              <Flame className="w-5 h-5 text-fjord-gold fill-fjord-gold/20" />
              <div>
                <span className="text-[10px] text-fjord-gray block font-semibold">STREAK</span>
                <span className="text-sm font-bold font-mono text-fjord-gold">{streak} Days</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-fjord-dark px-3 py-2 rounded-xl border border-fjord-navy-light hover:scale-103 transition">
              <Trophy className="w-5 h-5 text-fjord-gold" />
              <div>
                <span className="text-[10px] text-fjord-gray block font-semibold">BALANCE</span>
                <span className="text-sm font-bold font-mono text-fjord-light">{xp} XP</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-fjord-dark px-3 py-2 rounded-xl border border-fjord-navy-light hover:scale-103 transition">
              <Award className="w-5 h-5 text-fjord-teal" />
              <div>
                <span className="text-[10px] text-fjord-gray block font-semibold">BADGES</span>
                <span className="text-sm font-bold font-mono text-fjord-teal">{unlockedBadges.length} Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──────── LEVEL SELECTOR ──────── */}
        {['alphabet', 'phrases', 'vocabulary', 'grammar'].includes(currentTab) && (
          <section className="bg-fjord-navy border border-fjord-navy-light rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm animate-fadeIn">
            <div>
              <span className="text-[10px] text-fjord-gold font-extrabold tracking-widest uppercase font-mono block">
                LEARNING TRACK SYSTEM (CEFR TRACKER)
              </span>
              <h3 className="text-sm font-bold text-fjord-light font-display mt-0.5">
                Toggle Proficiency Curriculums
              </h3>
              <p className="text-xs text-fjord-gray">
                Filter lessons, vocab lists, phrases, and structures by your current target level.
              </p>
            </div>
            <div className="flex bg-fjord-dark p-1 rounded-xl border border-fjord-navy-light shrink-0 self-start md:self-center">
              {(['ALL', 'A1', 'A2', 'B1'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  id={`btn_level_${lvl}`}
                  className={`px-3 sm:px-4 py-2 text-xs font-bold font-display rounded-lg transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-fjord-teal text-fjord-dark font-bold shadow-md'
                      : 'text-fjord-gray hover:text-fjord-light hover:bg-fjord-navy-light/40'
                  }`}
                >
                  {lvl === 'ALL' ? 'All Combined' : `${lvl} Level`}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ──────── TAB 1: ALPHABET & PRONUNCIATION ──────── */}
        {currentTab === 'alphabet' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Alphabet & Pronunciation (Alfabet og Uttale)
              </h2>
              <p className="text-sm text-fjord-gray">
                The Norwegian alphabet has 29 letters—adding <strong className="text-fjord-gold">Æ</strong>, <strong className="text-fjord-gold">Ø</strong>, and <strong className="text-fjord-gold">Å</strong> to the standard English character set. Click any symbol below to trigger realistic text-to-speech voicing assistance!
              </p>
            </div>

            {/* Complete grid representation */}
            <div className="bg-fjord-navy border border-fjord-navy-light p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-xs uppercase tracking-wider text-fjord-teal font-extrabold font-mono">
                Complete Alphabet Map (29 Letters)
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-10 gap-2.5">
                {BASIC_ALPHABET.map((item) => {
                  const isSpecial = ['Æ', 'Ø', 'Å'].includes(item.char);
                  return (
                    <button
                      key={item.char}
                      onClick={() => speakText(item.char)}
                      className={`p-3.5 rounded-lg border flex flex-col items-center justify-center transition cursor-pointer select-none group relative focus:outline-none focus:border-fjord-teal ${
                        isSpecial
                          ? 'bg-fjord-gold/10 border-fjord-gold/40 hover:bg-fjord-gold/20'
                          : 'bg-fjord-dark/80 border-fjord-navy-light hover:bg-fjord-navy-light hover:border-fjord-gray/25'
                      }`}
                      title={`Click to pronounce "${item.char}"`}
                    >
                      <span className={`text-lg font-black font-display block ${isSpecial ? 'text-fjord-gold' : 'text-fjord-light'}`}>
                        {item.char}
                      </span>
                      <span className="text-[10px] text-fjord-gray block font-mono mt-0.5">
                        {item.name}
                      </span>
                      <div className="absolute right-1.5 bottom-1 opacity-0 group-hover:opacity-100 transition">
                        <Volume2 className="w-3 h-3 text-fjord-teal" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed letters focused insights list */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold font-display text-fjord-light flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fjord-gold" />
                <span>Special Sounds & Glides Learner Matrix</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DETAILED_LETTERS.map((det) => (
                  <div 
                    key={det.letter}
                    className="p-5 bg-fjord-navy border border-fjord-navy-light/70 rounded-xl hover:border-fjord-teal/30 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold font-display text-fjord-gold bg-fjord-gold/10 px-3.5 py-1 rounded-lg border border-fjord-gold/20">
                          {det.letter}
                        </span>
                        <div className="flex items-center gap-1.5 bg-fjord-dark px-2.5 py-1 rounded-lg text-xs font-mono border border-fjord-navy-light">
                          <span className="text-fjord-gray text-[10px]">IPA:</span>
                          <span className="text-fjord-teal font-semibold">{det.pronunciation}</span>
                        </div>
                      </div>
                      <p className="text-xs text-fjord-gray leading-relaxed mb-4">
                        {det.description}
                      </p>
                    </div>

                    <div className="bg-fjord-dark/70 rounded-lg p-3 border border-fjord-navy-light/40 flex items-center justify-between">
                      <div className="min-w-0">
                        <span className="text-[9px] text-fjord-gray uppercase tracking-widest block font-bold">Practical Lexicon</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-bold text-sm text-fjord-light">{det.exampleWord}</span>
                          <span className="font-mono text-[11px] text-fjord-teal">[{det.examplePhonetic}]</span>
                        </div>
                        <span className="text-[11px] text-fjord-gray italic block mt-0.5">
                          {det.exampleTranslation}
                        </span>
                      </div>
                      <button
                        onClick={() => speakText(det.exampleWord)}
                        className="p-2.5 bg-fjord-teal text-fjord-dark rounded-full hover:bg-opacity-90 transition cursor-pointer"
                        title="Voice out loud"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* End of module quiz */}
            <MiniQuiz
              moduleId="alphabet_quiz"
              moduleTitle="Alphabet & Pronunciation"
              questions={MINI_QUIZ_ALPHABET}
              onQuizComplete={handleQuizCompletion}
              isCompletedAlready={completedQuizzes.includes('alphabet_quiz')}
            />
          </div>
        )}

        {/* ──────── TAB 2: ESSENTIAL PHRASES ──────── */}
        {currentTab === 'phrases' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Essential Phrases (Viktige Setninger)
              </h2>
              <p className="text-sm text-fjord-gray">
                Learn how to handle key social situations in Bokmål. Filter by scenario tab below, then click any phrase card to vocalize pronunciation aloud!
              </p>
            </div>

            {/* Scenario filter switcher */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {PHRASES_CATEGORIES.filter(cat => 
                selectedLevel === 'ALL' || 
                ESSENTIAL_PHRASES.some(p => p.category === cat && (p.level || 'A1') === selectedLevel)
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPhraseCat(cat)}
                  className={`px-4 py-2 text-xs font-bold font-display rounded-lg whitespace-nowrap transition cursor-pointer border ${
                    selectedPhraseCat === cat
                      ? 'bg-fjord-teal text-fjord-dark border-fjord-teal'
                      : 'bg-fjord-navy border-fjord-navy-light text-fjord-gray hover:text-fjord-light hover:bg-fjord-dark'
                  }`}
                >
                  {cat.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Phrase items list matching categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ESSENTIAL_PHRASES.filter(p => 
                p.category === selectedPhraseCat && 
                (selectedLevel === 'ALL' || (p.level || 'A1') === selectedLevel)
              ).map((phrase) => (
                <div
                  key={phrase.norwegian}
                  className="bg-fjord-navy border border-fjord-navy-light rounded-xl p-5 hover:border-fjord-teal/30 transition flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-base font-extrabold tracking-tight text-fjord-light">
                        {phrase.norwegian}
                      </h4>
                      <button
                        onClick={() => speakText(phrase.norwegian)}
                        className="p-2 bg-fjord-dark hover:bg-fjord-navy-light text-fjord-teal hover:text-fjord-light rounded-lg border border-fjord-navy-light/40 transition cursor-pointer"
                        title="Vocal voice aid"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-fjord-gray uppercase tracking-widest font-bold">Pronunciation:</span>
                      <kbd className="font-mono text-xs text-fjord-gold">
                        {phrase.phonetic}
                      </kbd>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-fjord-dark/60">
                    <span className="text-[9px] text-fjord-gray uppercase font-bold block">ENGLISH TRANSLATION</span>
                    <p className="text-xs text-fjord-light font-medium mt-0.5">
                      {phrase.english}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* End of module Quiz */}
            <MiniQuiz
              moduleId="phrases_quiz"
              moduleTitle="Social Interaction Phrases"
              questions={MINI_QUIZ_PHRASES}
              onQuizComplete={handleQuizCompletion}
              isCompletedAlready={completedQuizzes.includes('phrases_quiz')}
            />
          </div>
        )}

        {/* ──────── TAB 3: VOCABULARY BY CATEGORIES ──────── */}
        {currentTab === 'vocabulary' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Vocabulary Library (Ordforråd)
              </h2>
              <p className="text-sm text-fjord-gray">
                Acquire comprehensive word taxonomies across 8 core categories. Search terms in both English or Norwegian, or filter by category tags.
              </p>
            </div>

            {/* Filter controls and search */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-fjord-navy p-4 rounded-xl border border-fjord-navy-light">
                {/* Search box */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-fjord-gray absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={vocabSearch}
                    onChange={(e) => setVocabSearch(e.target.value)}
                    placeholder="Search keywords or translations..."
                    className="w-full pl-10 pr-4 py-2 bg-fjord-dark border border-fjord-navy-light text-xs text-fjord-light rounded-lg focus:outline-none focus:border-fjord-teal transition placeholder-fjord-gray"
                  />
                  {vocabSearch && (
                    <button onClick={() => setVocabSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-fjord-gray hover:text-fjord-light">
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-fjord-teal" />
                  <span className="text-xs text-fjord-gray">8 Active Groups</span>
                </div>
              </div>

              {/* Horizontal category layout */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {Object.keys(VOCABULARY_DATA).filter(catName =>
                  selectedLevel === 'ALL' ||
                  (VOCABULARY_DATA[catName] || []).some(v => (v.level || 'A1') === selectedLevel)
                ).map((catName) => (
                  <button
                    key={catName}
                    onClick={() => { setSelectedVocabCat(catName); setVocabSearch(''); }}
                    className={`px-3.5 py-2 text-xs font-bold font-display rounded-lg border whitespace-nowrap transition cursor-pointer ${
                      selectedVocabCat === catName && !vocabSearch
                        ? 'bg-fjord-teal text-fjord-dark border-fjord-teal'
                        : 'bg-fjord-navy border-fjord-navy-light text-fjord-gray hover:text-fjord-light hover:bg-fjord-dark'
                    }`}
                  >
                    {catName.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Showing words list filtered */}
            <div className="bg-fjord-navy border border-fjord-navy-light rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 bg-fjord-dark/60 border-b border-fjord-navy-light flex items-center justify-between">
                <span className="text-[10px] text-fjord-teal font-extrabold tracking-widest font-mono uppercase">
                  {vocabSearch ? `SEARCH RESULTS FOR "${vocabSearch}"` : `${selectedVocabCat} TERMS`}
                </span>
                <span className="text-[11px] font-mono font-bold text-fjord-gray">
                  Showing {
                    (vocabSearch 
                      ? Object.values(VOCABULARY_DATA).flat().filter(v => 
                          (v.norwegian.toLowerCase().includes(vocabSearch.toLowerCase()) || v.english.toLowerCase().includes(vocabSearch.toLowerCase())) &&
                          (selectedLevel === 'ALL' || (v.level || 'A1') === selectedLevel)
                        )
                      : (VOCABULARY_DATA[selectedVocabCat] || []).filter(v => selectedLevel === 'ALL' || (v.level || 'A1') === selectedLevel)
                    ).length
                  } words
                </span>
              </div>

              {/* Responsive table */}
              <div className="divide-y divide-fjord-dark">
                {(vocabSearch 
                  ? Object.values(VOCABULARY_DATA).flat().filter(v => 
                      (v.norwegian.toLowerCase().includes(vocabSearch.toLowerCase()) || 
                      v.english.toLowerCase().includes(vocabSearch.toLowerCase())) &&
                      (selectedLevel === 'ALL' || (v.level || 'A1') === selectedLevel)
                    )
                  : (VOCABULARY_DATA[selectedVocabCat] || []).filter(v => selectedLevel === 'ALL' || (v.level || 'A1') === selectedLevel)
                ).map((vocab, index) => (
                  <div 
                    key={vocab.norwegian}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-fjord-dark/20 transition"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Accent indexing count */}
                      <span className="w-6 h-6 rounded bg-fjord-dark border border-fjord-navy-light font-mono text-[10px] font-bold text-fjord-gray flex items-center justify-center">
                        {index + 1}
                      </span>
                      
                      {/* Word and phonetic pronunciation info */}
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-base text-fjord-light">{vocab.norwegian}</span>
                          <kbd className="font-mono text-xs text-fjord-gold">[{vocab.phonetic}]</kbd>
                        </div>
                        <span className="text-xs text-fjord-gray">{vocab.english}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => speakText(vocab.norwegian)}
                      className="p-2 sm:p-2.5 rounded-lg bg-fjord-dark hover:bg-fjord-navy-light border border-fjord-navy-light/40 text-fjord-teal hover:text-fjord-light self-end sm:self-center transition cursor-pointer"
                      title="Listen audio clip"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Target vocab checkpoint quiz */}
            <MiniQuiz
              moduleId="vocab_quiz"
              moduleTitle="Core Vocabulary Library"
              questions={MINI_QUIZ_VOCABULARY}
              onQuizComplete={handleQuizCompletion}
              isCompletedAlready={completedQuizzes.includes('vocab_quiz')}
            />
          </div>
        )}

        {/* ──────── TAB 4: GRAMMAR BASICS ──────── */}
        {currentTab === 'grammar' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Grammar Basics (Gramatikk-Grunnlag)
              </h2>
              <p className="text-sm text-fjord-gray">
                Solve the building block rules of Bokmål. Norwegian is highly logical—demystified below for learners with zero prior knowledge.
              </p>
            </div>

            {/* Topic breakdowns cards */}
            <div className="space-y-6">
              {GRAMMAR_SECTIONS.filter(sec => selectedLevel === 'ALL' || (sec.level || 'A1') === selectedLevel).map((sec, idx) => (
                <div
                  key={sec.title}
                  className="bg-fjord-navy border border-fjord-navy-light/80 rounded-xl p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-fjord-navy-light pb-3">
                    <span className="w-7 h-7 rounded-lg bg-fjord-teal/10 border border-fjord-teal/30 text-fjord-teal font-mono font-bold text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-fjord-light font-display">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="text-xs text-fjord-light/95 leading-relaxed bg-fjord-dark/40 py-2.5 px-4 rounded-lg border-l-2 border-fjord-gold">
                    {sec.summary}
                  </p>

                  {/* Subtopics grids */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {sec.explanations.map((expl) => (
                      <div
                        key={expl.heading}
                        className="p-4 rounded-xl bg-fjord-dark/60 border border-fjord-navy-light/60 flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-fjord-teal uppercase font-mono tracking-wide">
                            {expl.heading}
                          </h4>
                          <p className="text-xs text-fjord-gray leading-normal">
                            {expl.text}
                          </p>
                        </div>

                        {/* Practical syntax examples lists */}
                        {expl.examples && expl.examples.length > 0 && (
                          <div className="space-y-2 pt-3 border-t border-fjord-dark">
                            <span className="text-[10px] text-fjord-gray font-bold uppercase tracking-wider block">Usage Showcase:</span>
                            <div className="space-y-2">
                              {expl.examples.map((ex) => (
                                <div key={ex.norwegian} className="bg-fjord-navy/90 p-2.5 rounded-lg border border-fjord-navy-light/40 space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold text-xs text-fjord-light">{ex.norwegian}</span>
                                    <button 
                                      onClick={() => speakText(ex.norwegian)} 
                                      className="p-1 hover:bg-fjord-dark text-fjord-teal hover:text-fjord-light rounded transition"
                                      title="Vocalize sentence"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                  <span className="text-[11px] text-fjord-gray block">{ex.english}</span>
                                  {ex.analysis && (
                                    <span className="text-[10px] text-fjord-teal font-medium block italic mt-1 leading-snug">
                                      {ex.analysis}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* End of module Grammar Quiz */}
            <MiniQuiz
              moduleId="grammar_quiz"
              moduleTitle="Core Grammar & Word Order"
              questions={MINI_QUIZ_GRAMMAR}
              onQuizComplete={handleQuizCompletion}
              isCompletedAlready={completedQuizzes.includes('grammar_quiz')}
            />
          </div>
        )}

        {/* ──────── TAB 5: COMPOUND WORDS ──────── */}
        {currentTab === 'compounds' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Compound Words (Sammensatte Ord)
              </h2>
              <p className="text-sm text-fjord-gray">
                A highly distinctive feature of standard Norwegian: building large descriptive terms by directly pasting smaller nouns and verbs side-by-side! Solve the interactive etymology card breakdowns below.
              </p>
            </div>

            {/* Interactive breakdown cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COMPOUND_WORDS.map((item) => (
                <div
                  key={item.word}
                  className="bg-fjord-navy border border-fjord-navy-light rounded-xl p-5 md:p-6 shadow-sm flex flex-col justify-between hover:border-fjord-teal/30 transition relative group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-fjord-dark pb-3">
                      <div>
                        <h4 className="text-lg font-black font-display text-fjord-gold tracking-tight">
                          {item.word}
                        </h4>
                        <span className="text-xs text-fjord-teal font-medium uppercase tracking-wider font-mono">
                          meaning: {item.translation}
                        </span>
                      </div>

                      <button
                        onClick={() => speakText(item.word)}
                        className="p-2 bg-fjord-dark hover:bg-fjord-navy-light text-fjord-teal hover:text-fjord-light border border-fjord-navy-light/40 rounded-lg transition"
                        title="Vocalize word"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Breakdown formula display */}
                    <div className="bg-fjord-dark/50 border border-fjord-navy-light/40 p-3.5 rounded-xl flex items-center justify-center gap-3 font-display">
                      {item.literalBreakdown.map((part, index) => (
                        <React.Fragment key={part.part}>
                          <div className="text-center">
                            <span className="font-bold text-xs text-fjord-light block bg-fjord-navy px-2 py-1 rounded border border-transparent group-hover:border-fjord-teal/15 transition">
                              {part.part}
                            </span>
                            <span className="text-[10px] text-fjord-gray font-mono block mt-0.5">
                              "{part.meaning}"
                            </span>
                          </div>
                          {index < item.literalBreakdown.length - 1 && (
                            <span className="text-fjord-teal font-black text-sm">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-fjord-gray tracking-wider uppercase block">NATIVE CONCEPT INSIGHT</span>
                      <p className="text-xs text-fjord-gray leading-relaxed font-sans">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* End of module quiz */}
            <MiniQuiz
              moduleId="compounds_quiz"
              moduleTitle="Compound Words Formulation"
              questions={MINI_QUIZ_COMPOUNDS}
              onQuizComplete={handleQuizCompletion}
              isCompletedAlready={completedQuizzes.includes('compounds_quiz')}
            />
          </div>
        )}

        {/* ──────── TAB 6: QUIZ MODE (NORSK-PRØVE) ──────── */}
        {currentTab === 'quiz' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Proficiency Assessment (Hoved-Eksamen)
              </h2>
              <p className="text-sm text-fjord-gray">
                Challenge yourself! This complete interactive examination tests your standard conjugation, syntax order, and vocabulary translation skills across our full Bokmål syllabus.
              </p>
            </div>

            <QuizMode 
              onXpAwarded={handleAwardXp} 
              onBadgeUnlocked={handleExternalBadgeUnlock}
              unlockedBadges={unlockedBadges}
            />
          </div>
        )}

        {/* ──────── TAB 7: LEADERBOARD & SYSTEM SYNC ──────── */}
        {currentTab === 'leaderboard' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-fjord-light">
                Norsk Global Scoreboard
              </h2>
              <p className="text-sm text-fjord-gray">
                Verify your stats against simulated Scandinavian learners. Work offline knowing all transaction caches auto-merge back to our cloud Firestore database instantly when a web link returns!
              </p>
            </div>

            <LeaderboardSection 
              userXP={xp} 
              userStreak={streak} 
              userName={userName} 
            />
          </div>
        )}

        {/* ──────── THE BADGES LOCKER ──────── */}
        <section className="bg-fjord-navy border border-fjord-navy-light rounded-xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-fjord-gold" />
            <h3 className="text-sm font-extrabold text-fjord-light font-display uppercase tracking-wider">
              Norsk Achievement Badges locker
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {BADGES_LIST.map((badge) => {
              const isUnlocked = unlockedBadges.includes(badge.id);
              
              const getIcon = (name: string, unlocked: boolean) => {
                const color = unlocked ? 'text-fjord-gold' : 'text-fjord-gray/40';
                switch (name) {
                  case 'BookOpen': return <BookOpen className={`w-5 h-5 ${color}`} />;
                  case 'Heart': return <Heart className={`w-5 h-5 ${color}`} />;
                  case 'Award': return <Award className={`w-5 h-5 ${color}`} />;
                  case 'Settings': return <Settings className={`w-5 h-5 ${color}`} />;
                  case 'Flame': return <Flame className={`w-5 h-5 ${color}`} />;
                  case 'Trophy': return <Trophy className={`w-5 h-5 ${color}`} />;
                  default: return <Compass className={`w-5 h-5 ${color}`} />;
                }
              };

              return (
                <div
                  key={badge.id}
                  className={`p-3.5 rounded-xl border flex flex-col items-center text-center transition justify-between relative select-none ${
                    isUnlocked
                      ? 'bg-fjord-dark border-fjord-gold/25'
                      : 'bg-fjord-dark/30 border-transparent opacity-50'
                  }`}
                  title={badge.description}
                >
                  <div className={`p-2 rounded-lg mb-2 ${isUnlocked ? 'bg-fjord-gold/10' : 'bg-fjord-dark'}`}>
                    {getIcon(badge.iconName, isUnlocked)}
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold font-display block leading-snug truncate ${isUnlocked ? 'text-fjord-light' : 'text-fjord-gray'}`}>
                      {badge.title}
                    </span>
                    <span className={`text-[8px] font-mono block uppercase tracking-widest mt-0.5 ${isUnlocked ? 'text-fjord-gold font-bold' : 'text-fjord-gray/60'}`}>
                      {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ──────── SIMULATED PUSH NOTIFICATION & STREAM MATRIX CONTROLS ──────── */}
        <section className="mt-8 border-t border-fjord-navy-light/60 pt-6">
          <NotificationManager 
            notifications={notifications}
            onDismiss={dismissNotification}
            onRequestSimulatedNotification={handleSimulateRequest}
          />
        </section>
      </main>
    </div>
  );
}
