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

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
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
          {/* Left - Logo + Title Block */}
          <div className="flex items-center gap-4">
            {/* TechLearn Logo */}
            <div className="font-bold text-blue-700 text-lg tracking-wide">
              TechLearn
            </div>
            
            {/* QOTD Title Block */}
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-neutral-900">QOTD</span>
              <span className="text-sm text-neutral-500">Daily challenge code</span>
            </div>
          </div>

          {/* Right - Status + Profile Group */}
          <div className="flex items-center gap-3">
            {/* Level Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all duration-200 cursor-pointer">
              <Trophy className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Level {CURRENT_LEVEL}</span>
            </div>
            
            {/* Streak Indicator */}
            <div 
              className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200 cursor-pointer"
              title="Current daily streak"
              aria-label={`${CURRENT_STREAK} day streak`}
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">{CURRENT_STREAK}</span>
            </div>

            {/* Profile Avatar with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Open profile menu"
                aria-expanded={isDropdownOpen}
                aria-haspopup="menu"
                id="profile-menu"
                title={USER_NAME}
              >
                <User className="w-5 h-5 text-neutral-700" />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="profile-menu"
                  >
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 focus:outline-none focus-visible:bg-primary-100 focus-visible:text-primary-700 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsDropdownOpen(false);
                          }
                        }}
                      >
                        <item.icon className="w-4 h-4" aria-hidden="true" />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
