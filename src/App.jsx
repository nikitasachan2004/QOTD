import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuestionCard from './components/QuestionCard';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import Stats from './components/Stats';
import Hint from './components/Hint';
import { questionData } from './data/questionData';

function App() {
  const [output, setOutput] = useState(null);

  const handleRunCode = (code, language) => {
    // Mock run functionality - would call API in real app
    console.log('Running code:', { code, language });
    setOutput({
      status: 'running',
      message: 'Executing your code...',
    });

    // Simulate async execution
    setTimeout(() => {
      setOutput({
        status: 'success',
        message: 'Test cases passed!',
        details: `Input: [2,7,11,15], target = 9\nOutput: [0,1]\nExpected: [0,1]\n\n✓ Test case 1 passed\n✓ Test case 2 passed`,
      });
    }, 2000);
  };

  const handleSubmit = (code, language) => {
    // Mock submit functionality
    console.log('Submitting code:', { code, language });
    setOutput({
      status: 'success',
      message: 'Solution submitted successfully! 🎉',
      details: 'Your solution has been accepted.\nRuntime: 68ms (Beats 87.5%)\nMemory: 42.1MB (Beats 91.2%)',
    });
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Main container with max-width constraint for readability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <Hero />
        <QuestionCard question={questionData} />
        <CodeEditor 
          starterCode={questionData.starterCode}
          onRunCode={handleRunCode}
          onSubmit={handleSubmit}
        />
        <OutputPanel output={output} />
        <Stats />
        <Hint hint={questionData.hint} />
        
        {/* Page content will go here */}
        <div className="space-y-8">
          <p className="text-center text-neutral-500">More components coming next...</p>
        </div>
      </div>
    </div>
  )
}

export default App
