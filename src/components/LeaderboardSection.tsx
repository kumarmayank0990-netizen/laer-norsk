/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw, Wifi, WifiOff, Award, Flame, User, Search, Sparkles } from 'lucide-react';
import { LeaderboardEntry } from '../types';

interface LeaderboardSectionProps {
  userXP: number;
  userStreak: number;
  userName: string;
}

// Initial set of competitors
const DEFAULTS_COMPETITORS: LeaderboardEntry[] = [
  { name: 'Magnus Carlsen', xp: 4800, rank: 1, country: '🇳🇴 Norway', streak: 42 },
  { name: 'Freya Bakke', xp: 3250, rank: 2, country: '🇳🇴 Norway', streak: 18 },
  { name: 'Astrid Solberg', xp: 2100, rank: 3, country: '🇸🇪 Sweden', streak: 9 },
  { name: 'Erik Thorsen', xp: 1450, rank: 4, country: '🇳🇴 Norway', streak: 5 },
  { name: 'Sven Nordskog', xp: 820, rank: 5, country: '🇩🇰 Denmark', streak: 3 },
  { name: 'Ingrid Larsen', xp: 450, rank: 6, country: '🇳🇴 Norway', streak: 1 },
];

export default function LeaderboardSection({ userXP, userStreak, userName }: LeaderboardSectionProps) {
  const [competitors, setCompetitors] = useState<LeaderboardEntry[]>(DEFAULTS_COMPETITORS);
  const [isOnline, setIsOnline] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('Just now');

  // Sync user values into the leaderboard
  useEffect(() => {
    // Check if user is already in the list
    const updated = [...DEFAULTS_COMPETITORS];
    const userIndex = updated.findIndex((c) => c.isUser);

    const userEntry: LeaderboardEntry = {
      name: userName || 'You (Deg)',
      xp: userXP,
      rank: 99, // Will sort and reassign
      country: '🇺🇸 US Learner',
      streak: userStreak,
      isUser: true,
    };

    if (userIndex > -1) {
      updated[userIndex] = userEntry;
    } else {
      updated.push(userEntry);
    }

    // Sort descending by XP, then assign ranks
    updated.sort((a, b) => b.xp - a.xp);
    const ranked = updated.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

    setCompetitors(ranked);
    triggerCloudSync();
  }, [userXP, userStreak, userName]);

  const triggerCloudSync = () => {
    if (!isOnline) return;
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      const now = new Date();
      setLastSyncedTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1200);
  };

  const toggleConnection = () => {
    const nextState = !isOnline;
    setIsOnline(nextState);
    if (nextState) {
      triggerCloudSync();
    }
  };

  const filteredCompetitors = competitors.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Synchronization Banner */}
      <div className={`p-4 rounded-xl border transition-all duration-300 ${
        isOnline 
          ? 'bg-fjord-navy/80 border-fjord-teal/30 hover:border-fjord-teal/50' 
          : 'bg-amber-950/20 border-fjord-gold/20'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg mt-0.5 ${isOnline ? 'bg-fjord-teal/10 text-fjord-teal' : 'bg-fjord-gold/10 text-fjord-gold'}`}>
              {isOnline ? <Wifi className="w-5 h-5 animate-pulse" /> : <WifiOff className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-fjord-light font-display">
                  {isOnline ? 'Real-time Leaderboard Sync' : 'Offline Mode (Local-First Saved)'}
                </h4>
                <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-ping' : 'bg-fjord-gold'}`} />
              </div>
              <p className="text-xs text-fjord-gray mt-1 max-w-lg leading-relaxed">
                {isOnline 
                  ? `Your points, achievements, and badges are secured on our persistent database. Last synced: ${lastSyncedTime}.`
                  : 'Internet connection paused. All achievements are safely saved to local sandboxed cache and will automatically merge when connection returns.'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-center">
            {isOnline && (
              <button
                onClick={triggerCloudSync}
                disabled={syncing}
                className="p-2 rounded bg-fjord-dark hover:bg-fjord-navy-light border border-fjord-navy-light text-fjord-teal hover:text-fjord-light transition disabled:opacity-50"
                title="Force DB Resync"
              >
                <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
              </button>
            )}
            <button
              onClick={toggleConnection}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition border cursor-pointer ${
                isOnline
                  ? 'bg-fjord-dark hover:bg-fjord-navy-light text-fjord-gold border-fjord-gold/30 hover:border-fjord-gold/65'
                  : 'bg-fjord-gold/20 text-fjord-light border-fjord-gold/50 hover:bg-fjord-gold/30'
              }`}
            >
              {isOnline ? 'Simulate Offline' : 'Re-connect Sync'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Leaderboard Panel */}
      <div className="bg-fjord-navy border border-fjord-navy-light rounded-xl shadow-xl overflow-hidden">
        {/* Header with Search */}
        <div className="p-5 border-b border-fjord-navy-light flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-fjord-gold/10 text-fjord-gold rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-fjord-light font-display">Norsk Global-Sone</h3>
              <p className="text-xs text-fjord-gray">Compete with global learners climbing the Norse peaks.</p>
            </div>
          </div>
          
          <div className="relative">
            <Search className="w-4 h-4 text-fjord-gray absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search competitors or countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-9 pr-4 py-1.5 bg-fjord-dark border border-fjord-navy-light rounded-lg text-xs text-fjord-light focus:outline-none focus:border-fjord-teal transition"
            />
          </div>
        </div>

        {/* Competitor List */}
        <div className="divide-y divide-fjord-dark">
          {filteredCompetitors.length > 0 ? (
            filteredCompetitors.map((com, idx) => {
              const itemRank = com.rank;
              const isTopThree = itemRank <= 3;
              const rankColor = itemRank === 1 
                ? 'text-fjord-gold bg-fjord-gold/10 border-fjord-gold/30' 
                : itemRank === 2 
                  ? 'text-gray-300 bg-gray-300/10 border-gray-400/20' 
                  : itemRank === 3 
                    ? 'text-amber-600 bg-amber-600/10 border-amber-700/20' 
                    : 'text-fjord-gray bg-fjord-dark border-transparent';

              return (
                <div
                  key={com.name}
                  className={`p-4 flex items-center justify-between gap-4 transition-all duration-200 ${
                    com.isUser 
                      ? 'bg-fjord-teal/10 border-l-4 border-fjord-teal' 
                      : 'hover:bg-fjord-dark/40'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Rank Badge */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border ${rankColor}`}>
                      {itemRank}
                    </div>

                    {/* Meta info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold text-sm truncate ${com.isUser ? 'text-fjord-teal font-bold' : 'text-fjord-light'}`}>
                          {com.name}
                        </span>
                        {com.isUser && (
                          <span className="text-[10px] bg-fjord-teal/20 text-fjord-teal px-1.5 py-0.2 rounded-full font-bold">
                            YOU
                          </span>
                        )}
                        {com.rank === 1 && (
                          <Award className="w-3.5 h-3.5 text-fjord-gold flex-shrink-0" />
                        )}
                      </div>
                      <span className="text-xs text-fjord-gray block mt-0.5 font-sans">
                        {com.country}
                      </span>
                    </div>
                  </div>

                  {/* Score & Streak */}
                  <div className="flex items-center gap-5 flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-fjord-gold bg-fjord-dark/60 py-1 px-2.5 rounded-lg border border-fjord-navy-light">
                      <Flame className="w-3.5 h-3.5" />
                      <span className="font-bold text-xs font-mono">{com.streak}d</span>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-bold font-mono text-fjord-light block">
                        {com.xp.toLocaleString()}
                      </span>
                      <span className="text-[10px] tracking-wide text-fjord-gray uppercase block font-semibold">
                        XP ACCUMULATED
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-fjord-gray text-sm">
              No matching learners found. Try searching for "Norway" or "Sweden"!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
