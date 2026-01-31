import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Send, ChevronDown, Loader2 } from 'lucide-react';
import OutputPanel from './OutputPanel';

const LANGUAGES = [
  "C++",
  "Java",
  "Python3",
  "Python",
  "JavaScript",
  "TypeScript",
  "C#",
  "C"
];

const MOCK_TEMPLATES = {
  JavaScript: `
function twoSum(arr, target) {
  console.log("JS mode");
  return [];
}`,

  TypeScript: 
`function twoSum(arr: number[], target: number): number[] {
  console.log("TS mode");
  return [];
}`,

  Python: 
`def two_sum(arr, target):
    print("Python mode")
    return []`,

  Python3: 
`def two_sum(arr, target):
    print("Python3 mode")
    return []`,

  Java: 
`class Solution {
  public int[] twoSum(int[] arr, int target) {
    System.out.println("Java mode");
    return new int[]{};
  }
}`,

  "C++": 
`#include <iostream>
using namespace std;

vector<int> twoSum(...) {
  cout << "C++ mode";
}`,

  C: 
`#include <stdio.h>

int* twoSum(...) {
  printf("C mode");
}`,

  "C#": 
`class Solution {
  int[] TwoSum(...) {
    Console.WriteLine("C# mode");
  }
}`
};

export default function CodeEditor() {
  const [language, setLanguage] = useState('JavaScript');
  const [code, setCode] = useState(MOCK_TEMPLATES.JavaScript);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setCode(MOCK_TEMPLATES[lang]);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);
    setShowResults(true);

    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setOutput({
        type: 'success',
        message: 'Code executed successfully!',
        results: [
          { input: '[1, 3, 5, 7, 11], target = 8', output: '[2, 3]', passed: true },
          { input: '[2, 4, 6, 8], target = 10', output: '[2, 4]', passed: true },
          { input: '[-1, 0, 3, 5, 9, 12], target = 4', output: '[2, 4]', passed: true }
        ]
      });
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setOutput(null);
    setShowResults(true);

    // Simulate submission
    setTimeout(() => {
      setIsRunning(false);
      setOutput({
        type: 'success',
        message: 'All test cases passed! 🎉',
        results: [
          { input: 'Test Case 1', output: 'Passed', passed: true },
          { input: 'Test Case 2', output: 'Passed', passed: true },
          { input: 'Test Case 3', output: 'Passed', passed: true },
          { input: 'Hidden Test Case 1', output: 'Passed', passed: true },
          { input: 'Hidden Test Case 2', output: 'Passed', passed: true }
        ],
        stats: {
          runtime: '42ms',
          memory: '12.3MB',
          percentile: 'Beats 87% of submissions'
        }
      });
    }, 2000);
  };

  const getLineNumbers = () => {
    const lines = code.split('\n').length;
    return Array.from({ length: lines }, (_, i) => i + 1);
  };

  return (
    <div className="flex flex-col flex-1 w-full space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-md border border-border overflow-hidden flex flex-col transition-shadow duration-200"
      >
        {/* Editor Header */}
        <div className="bg-soft-bg border-b border-border p-4 flex items-center justify-between">
          <h3 className="font-semibold text-dark">Code Editor</h3>
          
          {/* Language Selector */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => handleLanguageSelect(e.target.value)}
              className="appearance-none bg-white border border-border rounded-xl px-4 py-2 pr-10 font-semibold text-sm text-dark cursor-pointer hover:border-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Select programming language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
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
            placeholder="// Write your code here..."
            aria-label="Code editor"
          />
        </div>

        {/* Action Buttons */}
        <div className="bg-soft-bg border-t border-border p-4 flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRunCode}
            disabled={isRunning}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-soft-bg border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label="Run code"
          >
            {isRunning ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Play className="w-5 h-5" />
            )}
            Run Code
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={isRunning}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label="Submit solution"
          >
            {isRunning ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            Submit Solution
          </motion.button>
        </div>
      </motion.div>

      {/* Output Panel */}
      {showResults && output && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <OutputPanel output={output} />
        </motion.div>
      )}
    </div>
  );
}
