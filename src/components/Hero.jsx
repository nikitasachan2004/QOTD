import { Clock, Trophy } from 'lucide-react';

const Hero = () => {
  const difficulty = 'Medium'; // Dynamic data
  const avgSolveTime = '~12 mins'; // Dynamic data
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Color mapping for difficulty badges
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700 border-green-300',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    Hard: 'bg-red-100 text-red-700 border-red-300',
  };

  return (
    <section className="card p-8 mb-8 text-center" aria-labelledby="hero-title">
      {/* Motivational heading - Duolingo-lite playful energy */}
      <div className="mb-6">
        <h2 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3">
          Question of the Day
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 mb-2">
          Build your coding streak, one challenge at a time 🚀
        </p>
        <p className="text-sm text-neutral-500">{currentDate}</p>
      </div>

      {/* Metadata badges - LeetCode serious look */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Difficulty Badge */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${difficultyColors[difficulty]}`}>
          <Trophy className="w-4 h-4" />
          <span className="font-semibold text-sm">{difficulty}</span>
        </div>

        {/* Average Solve Time */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 bg-primary-50 text-primary-700 border-primary-300">
          <Clock className="w-4 h-4" />
          <span className="font-semibold text-sm">Avg: {avgSolveTime}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
