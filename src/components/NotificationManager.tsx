/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Bell, Sparkles, Trophy, Flame, CheckCircle, X } from 'lucide-react';

export interface NotificationMsg {
  id: string;
  title: string;
  message: string;
  type: 'streak' | 'achievement' | 'reminder' | 'success';
  timestamp: Date;
}

interface NotificationManagerProps {
  notifications: NotificationMsg[];
  onDismiss: (id: string) => void;
  onRequestSimulatedNotification: (type: 'streak' | 'reminder' | 'achievement') => void;
}

export default function NotificationManager({
  notifications,
  onDismiss,
  onRequestSimulatedNotification,
}: NotificationManagerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically count how many unread or recent notifications exist
  const getIcon = (type: string) => {
    switch (type) {
      case 'streak':
        return <Flame className="w-5 h-5 text-fjord-gold animate-pulse" />;
      case 'achievement':
        return <Trophy className="w-5 h-5 text-fjord-gold" />;
      case 'reminder':
        return <Bell className="w-5 h-5 text-fjord-teal" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="relative z-40">
      {/* Toast Overlay for brand new notifications (top right) */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {notifications.slice(-3).map((notif) => (
          <div
            key={notif.id}
            className="pointer-events-auto bg-fjord-navy border-l-4 border-fjord-gold p-4 rounded-lg shadow-xl flex items-start gap-3 backdrop-blur-md animate-[slideIn_0.3s_ease-out] transition-all hover:scale-102"
          >
            <div className="p-1.5 bg-fjord-dark rounded-md">
              {getIcon(notif.type)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-fjord-light font-display">{notif.title}</h4>
              <p className="text-xs text-fjord-gray mt-0.5">{notif.message}</p>
            </div>
            <button
              onClick={() => onDismiss(notif.id)}
              className="text-fjord-gray hover:text-fjord-light focus:outline-none focus:ring-1 focus:ring-fjord-teal rounded p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Control Panel inside side section */}
      <div className="bg-fjord-navy border border-fjord-navy-light p-4 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-3 border-b border-fjord-navy-light pb-2">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-fjord-teal" />
            <h3 className="font-semibold text-fjord-light font-display">Simulate Notifications</h3>
          </div>
          <span className="text-xs bg-fjord-dark text-fjord-teal px-2 py-0.5 rounded-full font-mono font-medium">
            Active
          </span>
        </div>
        <p className="text-xs text-fjord-gray mb-3 leading-relaxed">
          In sandboxed frames where native browser alert permissions are often blocked, this in-app system guarantees study loop feedback. Try triggering one:
        </p>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onRequestSimulatedNotification('reminder')}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-fjord-dark hover:bg-fjord-navy-light border border-transparent hover:border-fjord-teal/30 transition text-[10px] text-fjord-light font-medium"
          >
            <Bell className="w-5 h-5 text-fjord-teal mb-1" />
            Daily Reminder
          </button>
          <button
            onClick={() => onRequestSimulatedNotification('streak')}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-fjord-dark hover:bg-fjord-navy-light border border-transparent hover:border-fjord-teal/30 transition text-[10px] text-fjord-light font-medium"
          >
            <Flame className="w-5 h-5 text-fjord-gold mb-1" />
            Streak Goal
          </button>
          <button
            onClick={() => onRequestSimulatedNotification('achievement')}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-fjord-dark hover:bg-fjord-navy-light border border-transparent hover:border-fjord-teal/30 transition text-[10px] text-fjord-light font-medium"
          >
            <Trophy className="w-5 h-5 text-fjord-gold mb-1" />
            Badges Alert
          </button>
        </div>
      </div>
    </div>
  );
}
