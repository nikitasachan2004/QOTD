import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, Zap, Lock } from 'lucide-react';
import { todaysQuestion } from '../data/question';

export default function QuestionCard() {
  const metadata = {
    difficulty: todaysQuestion.difficulty || 'Easy',
    topic: 'Array',
    time: '15–20 min',
    xp: 20
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-50 text-green-700';
      case 'medium':
        return 'bg-blue-50 text-blue-700';
      case 'hard':
        return 'bg-red-50 text-red-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300"
    >
      {/* Title */}
      <div className="mb-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          {todaysQuestion.title}
        </h3>
      </div>

      {/* Metadata Strip */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(metadata.difficulty)}`}>
          {metadata.difficulty}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
          <Tag className="w-3 h-3" />
          {metadata.topic}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-50 text-neutral-700">
          <Clock className="w-3 h-3" />
          {metadata.time}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
          <Zap className="w-3 h-3" />
          +{metadata.xp} XP
        </span>
        <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500" title="Solve to unlock solution" aria-label="Solution locked - solve to unlock">
          <Lock className="w-3 h-3" />
          Solution Locked
        </button>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Problem Statement</h4>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {todaysQuestion.description}
        </p>
      </div>

      {/* Examples */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Examples</h4>
        <div className="space-y-4">
          {todaysQuestion.examples.map((example, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <div className="font-mono text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-400">Input:</span>
                <span className="text-slate-900 dark:text-slate-100 ml-2">{example.input}</span>
              </div>
              <div className="font-mono text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-400">Output:</span>
                <span className="text-slate-900 dark:text-slate-100 ml-2">{example.output}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium">Explanation:</span> {example.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Constraints */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Constraints</h4>
        <ul className="space-y-2">
          {todaysQuestion.constraints.map((constraint, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
              <span className="text-primary mt-1">•</span>
              <span className="font-mono text-sm">{constraint}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
