import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Send, ChevronDown } from 'lucide-react';

const LANGUAGES = ["Python", "Java"];

export default function CodeEditor() {
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleRun = () => {
    // TODO: Connect to backend execution API
    console.log('Run clicked', { language, code });
  };

  const handleSubmit = () => {
    // TODO: Connect to backend submission API
    console.log('Submit clicked', { language, code });
  };

  const getLineNumbers = () => {
    const lines = code.split('\n').length;
    return Array.from({ length: Math.max(lines, 1) }, (_, i) => i + 1);
  };

  return (
    <div className="flex flex-col flex-1 w-full space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col transition-all duration-300"
      >
        {/* Editor Header */}
        <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Code Editor</h3>
          
          {/* Language Selector */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 pr-10 font-semibold text-sm text-slate-900 dark:text-slate-100 cursor-pointer hover:border-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Select programming language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Code Area with Line Numbers */}
        <div className="flex bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm min-h-[320px] sm:min-h-[420px]">
          {/* Line Numbers */}
          <div className="bg-[#1e1e1e] py-4 px-3 border-r border-[#3e3e3e] select-none">
            {getLineNumbers().map((num) => (
              <div key={num} className="text-[#858585] text-right leading-6">
                {num}
              </div>
            ))}
          </div>

          {/* Code Input */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-transparent resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 leading-6 code-editor font-mono caret-white"
            spellCheck={false}
            placeholder="Write your solution here..."
            aria-label="Code editor"
          />
        </div>

        {/* Action Buttons */}
        <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 p-4 flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRun}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label="Run code"
          >
            <Play className="w-5 h-5" />
            Run Code
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label="Submit solution"
          >
            <Send className="w-5 h-5" />
            Submit Solution
          </motion.button>
        </div>
      </motion.div>

      {/* Output Panel */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 transition-all duration-300">
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
          Execution results will appear here
        </p>
      </div>
    </div>
  );
}
