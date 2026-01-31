import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Database, TrendingUp } from 'lucide-react';

export default function OutputPanel({ output }) {
  const isSuccess = output.type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-xl shadow-sm hover:shadow-md border-2 overflow-hidden transition-shadow duration-200 ${
        isSuccess ? 'border-success bg-success/5' : 'border-error bg-error/5'
      }`}
    >
      {/* Header */}
      <div
        className={`p-4 flex items-center gap-3 ${
          isSuccess ? 'bg-green-50 border-b border-green-200' : 'bg-red-50 border-b border-red-200'
        }`}
      >
        {isSuccess ? (
          <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-error flex-shrink-0" />
        )}
        <h3 className={`font-bold text-lg flex items-center gap-2 ${isSuccess ? 'text-success' : 'text-error'}`}>
          {output.message}
        </h3>
      </div>

      {/* Test Results */}
      <div className="p-6 space-y-3">
        {output.results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`flex items-center justify-between p-4 rounded-xl ${
              result.passed ? 'bg-success/5' : 'bg-error/5'
            }`}
          >
            <div className="flex items-center gap-3">
              {result.passed ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <XCircle className="w-5 h-5 text-error" />
              )}
              <div>
                <div className="font-medium text-dark">{result.input}</div>
                <div className="text-sm text-muted font-mono">{result.output}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats (if available) */}
      {output.stats && (
        <div className="border-t border-border p-6 bg-soft-bg">
          <h4 className="font-semibold text-dark mb-4">Performance Stats</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted">Runtime</div>
                <div className="font-bold text-dark">{output.stats.runtime}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted">Memory</div>
                <div className="font-bold text-dark">{output.stats.memory}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-sm text-muted">Rank</div>
                <div className="font-bold text-dark text-sm">{output.stats.percentile}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
