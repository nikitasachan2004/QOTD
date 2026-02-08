import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Lightbulb } from 'lucide-react';
import { todaysQuestion } from '../data/question';

export default function HintBox() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Need a Hint?</h3>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8"
            >
              <div className="mb-4">
                <Lock className="w-12 h-12 text-slate-500 dark:text-slate-400 mx-auto" />
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Try solving it on your own first. Hints can help when you're stuck!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRevealed(true)}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 mx-auto cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Reveal hint"
              >
                <Unlock className="w-4 h-4" />
                Reveal Hint
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-700 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
                  {todaysQuestion.hint}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
