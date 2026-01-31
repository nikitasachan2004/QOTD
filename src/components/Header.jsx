import { Code2, Flame } from 'lucide-react';

const Header = () => {
  const currentStreak = 7; // This would come from user data in a real app

  return (
    <header className="bg-white shadow-card rounded-card p-4 sm:p-6 mb-6 sm:mb-8" role="banner">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Brand Title and Badge */}
        <div className="flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-neutral-900">TechLearn</h1>
            <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
              QOTD
            </span>
          </div>
        </div>

        {/* Streak Indicator - encourages daily habit */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-lg" aria-label="Current streak information">
          <Flame className="w-5 h-5 text-orange-500" />
          <div className="flex flex-col">
            <span className="text-xs text-neutral-600 font-medium">Current Streak</span>
            <span className="text-lg font-bold text-orange-600">{currentStreak} days</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
