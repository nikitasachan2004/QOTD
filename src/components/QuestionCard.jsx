import { BookOpen } from 'lucide-react';

const QuestionCard = ({ question }) => {
  const { title, difficulty, description, examples, constraints } = question;

  // Difficulty badge styling
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
  };

  return (
    <article className="card p-6 sm:p-8 mb-6 sm:mb-8" aria-labelledby="question-title">
      {/* Question Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h3 id="question-title" className="text-2xl font-bold text-neutral-900">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>

      {/* Problem Description - Notion-style spacing */}
      <div className="prose prose-neutral max-w-none mb-6">
        <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Examples Section */}
      {examples && examples.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-neutral-900 mb-3">Examples</h4>
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                <p className="text-sm mb-2">
                  <span className="font-semibold text-neutral-700">Input:</span>{' '}
                  <code className="bg-white px-2 py-1 rounded text-primary-600 font-mono text-sm">
                    {example.input}
                  </code>
                </p>
                <p className="text-sm mb-2">
                  <span className="font-semibold text-neutral-700">Output:</span>{' '}
                  <code className="bg-white px-2 py-1 rounded text-primary-600 font-mono text-sm">
                    {example.output}
                  </code>
                </p>
                {example.explanation && (
                  <p className="text-sm text-neutral-600">
                    <span className="font-semibold">Explanation:</span> {example.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Constraints Section */}
      {constraints && constraints.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-neutral-900 mb-3">Constraints</h4>
          <ul className="space-y-2">
            {constraints.map((constraint, index) => (
              <li key={index} className="text-sm text-neutral-700 flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <code className="font-mono bg-neutral-50 px-2 py-0.5 rounded text-sm">
                  {constraint}
                </code>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default QuestionCard;
