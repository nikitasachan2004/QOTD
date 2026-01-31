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
      className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-soft-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      
      <div className="text-3xl font-bold text-dark mb-1">{value}</div>
      <div className="text-sm font-medium text-dark mb-1">{label}</div>
      <div className="text-xs text-muted">{subtext}</div>
    </motion.div>
  );
}
