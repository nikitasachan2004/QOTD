import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { leaderboardData } from '../data/leaderboard';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('today');
  const data = activeTab === 'today' ? leaderboardData.today : leaderboardData.thisWeek;

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return <span className="text-muted font-bold">#{rank}</span>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-border transition-shadow duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark">Leaderboard</h3>
        <div className="flex gap-2 bg-soft-bg p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeTab === 'today'
                ? 'bg-white text-primary shadow-sm'
                : 'text-muted hover:text-dark'
            }`}
            aria-label="View today's leaderboard"
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab('thisWeek')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeTab === 'thisWeek'
                ? 'bg-white text-primary shadow-sm'
                : 'text-muted hover:text-dark'
            }`}
            aria-label="View this week's leaderboard"
          >
            This Week
          </button>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2">
        {data.map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer ${
              user.isCurrentUser
                ? 'bg-primary/10 border-2 border-primary'
                : 'bg-soft-bg hover:bg-border'
            }`}
          >
            {/* Rank Icon */}
            <div className="w-8 flex items-center justify-center">
              {getRankIcon(user.rank)}
            </div>

            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
              user.isCurrentUser
                ? 'bg-primary text-white'
                : 'bg-border text-dark'
            }`}>
              {user.avatar}
            </div>

            {/* Name */}
            <div className="flex-1">
              <div className={`font-semibold ${user.isCurrentUser ? 'text-primary' : 'text-dark'}`}>
                {user.name}
              </div>
            </div>

            {/* Time */}
            <div className="font-mono font-bold text-dark">
              {user.time}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
