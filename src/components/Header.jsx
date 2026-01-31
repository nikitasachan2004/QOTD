import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, User, TrendingUp, Bookmark, Bug } from 'lucide-react';

// Constants
const CURRENT_LEVEL = 7;
const CURRENT_STREAK = 5;
const USER_NAME = 'Nikita Sachan';
const USER_INITIALS = 'NS';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { icon: User, label: 'Profile', href: '#profile' },
    { icon: TrendingUp, label: 'Progress', href: '#progress' },
    { icon: Bookmark, label: 'Bookmarks', href: '#bookmarks' },
    { icon: Bug, label: 'Report Bug', href: '#report' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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
            className="font-bold text-xl tracking-wide bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent hover:opacity-70 transition-all duration-200 cursor-pointer"
            aria-label="TechLearn Home"
          >
            TechLearn
          </a>

          {/* Center - Level and Streak */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Level Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-200">
              <Trophy className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Level {CURRENT_LEVEL}</span>
            </div>
            
            {/* Streak Indicator */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl cursor-pointer hover:bg-orange-100"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              title="Current daily streak"
              aria-label={`${CURRENT_STREAK} day streak`}
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">{CURRENT_STREAK}</span>
            </motion.div>
          </div>

          {/* Right - Profile Avatar with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              aria-label={`${USER_NAME} profile menu`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              title={USER_NAME}
            >
              {USER_INITIALS}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden"
                >
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-150"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
