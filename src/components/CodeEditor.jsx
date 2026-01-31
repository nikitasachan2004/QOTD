import { useState } from 'react';
import { ChevronDown, Play, Send } from 'lucide-react';

const CodeEditor = ({ starterCode, onRunCode, onSubmit }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(starterCode[selectedLanguage]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ];

  // Update code when language changes
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setCode(starterCode[lang]);
    setIsDropdownOpen(false);
  };

  // Generate line numbers based on code lines
  const lines = code.split('\n');
  const lineNumbers = Array.from({ length: lines.length }, (_, i) => i + 1);

  return (
    <div className="card mb-6 sm:mb-8 overflow-hidden">
      {/* Editor Header */}
      <div className="bg-neutral-800 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h3 className="text-white font-semibold text-base sm:text-lg">Code Editor</h3>
        
        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-600 transition-colors focus-visible-ring"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <span className="text-sm font-medium">
              {languages.find(l => l.value === selectedLanguage)?.label}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-premium border border-neutral-200 py-2 z-10">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => handleLanguageChange(lang.value)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors ${
                    selectedLanguage === lang.value ? 'bg-primary-100 text-primary-700 font-semibold' : 'text-neutral-700'
                  }`}
                  role="option"
                  aria-selected={selectedLanguage === lang.value}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Code Editor Area with Line Numbers */}
      <div className="bg-neutral-900 p-3 sm:p-6 flex gap-2 sm:gap-4">
        {/* Line Numbers */}
        <div className="select-none text-neutral-500 font-mono text-sm leading-6 text-right pr-4 border-r border-neutral-700">
          {lineNumbers.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>

        {/* Code Input - Monospace font for authentic editor feel */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 bg-transparent text-neutral-100 font-mono text-sm leading-6 outline-none resize-none min-h-[300px] caret-primary-400"
          spellCheck="false"
          aria-label="Code editor"
        />
      </div>

      {/* Action Buttons */}
      <div className="bg-neutral-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row gap-2 sm:gap-3 border-t border-neutral-200">
        <button
          onClick={() => onRunCode(code, selectedLanguage)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-700 border-2 border-neutral-300 px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-100 transition-all active:scale-95 focus-visible-ring"
        >
          <Play className="w-4 h-4" />
          Run Code
        </button>
        
        <button
          onClick={() => onSubmit(code, selectedLanguage)}
          className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Submit Solution
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
