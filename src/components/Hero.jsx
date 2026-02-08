import React from 'react';
import { motion } from 'framer-motion';
import { userStats } from '../data/stats';
import { todaysQuestion } from '../data/question';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-primary via-primary-hover to-primary-hover text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left side - Title & Motivation */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-balance">
              Question of the Day
            </h2>
            
            <p className="text-lg text-white/90 mb-4 max-w-2xl text-balance">
              Build your coding muscle one problem at a time. Stay consistent, stay sharp.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {todaysQuestion.date}
              </span>
            </div>
          </div>

          {/* Right side - Quick Stats */}
          <div className="hidden lg:flex gap-3">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold">{userStats.successRate}%</div>
              <div className="text-sm text-white/80">My Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold">{userStats.totalAttempts}</div>
              <div className="text-sm text-white/80">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
