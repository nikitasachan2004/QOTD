import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Lock, Unlock } from 'lucide-react';

const Hint = ({ hint }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-yellow-100 p-2 rounded-lg">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">Need a Hint?</h3>
      </div>

      <div className="relative">
        {!isRevealed ? (
          // Locked state with blur effect
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="bg-neutral-100 rounded-lg p-6 relative overflow-hidden">
              {/* Blurred hint text */}
              <p className="text-neutral-700 blur-md select-none">
                {hint}
              </p>
              
              {/* Reveal button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <button
                  onClick={handleReveal}
                  className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl active:scale-95 focus-visible-ring"
                >
                  <Lock className="w-5 h-5" />
                  Click to Reveal Hint
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          // Revealed state with smooth animation
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6"
            >
              <div className="flex items-start gap-3">
                <Unlock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-neutral-800 leading-relaxed">{hint}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {isRevealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-neutral-500 mt-3 text-center"
        >
          💡 Great! Use this hint to guide your solution.
        </motion.p>
      )}
    </div>
  );
};

export default Hint;
