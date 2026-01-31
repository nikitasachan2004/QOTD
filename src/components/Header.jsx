import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame } from 'lucide-react';

// Constants
const CURRENT_LEVEL = 7;
const CURRENT_STREAK = 5;
const USER_NAME = 'Nikita Sachan';
const USER_INITIALS = 'NS';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Text */}
          <a 
            href="/"
            className="font-bold text-xl tracking-wide bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="TechLearn Home"
          >
            TechLearn
          </a>

          {/* Center - Level and Streak */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Level Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-xl">
              <Trophy className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Level {CURRENT_LEVEL}</span>
            </div>
            
            {/* Streak Indicator */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl cursor-pointer group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              title="Current daily streak"
              aria-label={`${CURRENT_STREAK} day streak`}
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">{CURRENT_STREAK}</span>
            </motion.div>
          </div>

          {/* Right - Profile Avatar */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            aria-label={`${USER_NAME} profile menu`}
            title={USER_NAME}
          >
            {USER_INITIALS}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
