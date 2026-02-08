import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function StatsCard({ icon, label, value, subtext, color, index = 0 }) {
  const IconComponent = Icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">{value}</div>
      <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">{label}</div>
      <div className="text-xs text-slate-600 dark:text-slate-400">{subtext}</div>
    </motion.div>
  );
}
