import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuestionCard from '../components/QuestionCard';
import CodeEditor from '../components/CodeEditor';
import StatsCard from '../components/StatsCard';
import HintBox from '../components/HintBox';
import Leaderboard from '../components/Leaderboard';
import SubscribeCTA from '../components/SubscribeCTA';
import { dailyStats } from '../data/stats';

export default function QOTD({ toggleTheme }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header toggleTheme={toggleTheme} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Question Card */}
        <QuestionCard />

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {dailyStats.map((stat, index) => (
            <StatsCard key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Main Content: Code Editor + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code Editor - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <CodeEditor />
          </div>

          {/* Sidebar - Takes 1 column on large screens */}
          <div className="space-y-8">
            <HintBox />
            <Leaderboard />
          </div>
        </div>

        {/* Subscribe CTA */}
        <SubscribeCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © 2026 QOTD. Build your coding muscle, one day at a time.
            </p>
            <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
