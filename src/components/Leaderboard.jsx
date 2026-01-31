import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = ({ leaders }) => {
  // Medal icons for top 3
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="text-sm font-semibold text-neutral-500">#{rank}</span>;
    }
  };

  return (
    <section className="card p-6 mb-8" aria-labelledby="leaderboard-heading" role="region">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Trophy className="w-5 h-5 text-purple-600" />
        </div>
        <h3 id="leaderboard-heading" className="text-xl font-bold text-neutral-900">Leaderboard</h3>
      </div>

      {/* Leaderboard Table */}
      <div className="space-y-2">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 cursor-pointer
              ${
                leader.isCurrentUser
                  ? 'bg-primary-50 border-2 border-primary-300 shadow-md'
                  : 'bg-neutral-50 hover:bg-neutral-100 border-2 border-transparent hover:border-neutral-200'
              }
            `}
          >
            {/* Rank and Username */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-8 flex items-center justify-center">
                {getRankIcon(leader.rank)}
              </div>
              <div>
                <p
                  className={`font-semibold ${
                    leader.isCurrentUser ? 'text-primary-700' : 'text-neutral-900'
                  }`}
                >
                  {leader.username}
                  {leader.isCurrentUser && (
                    <span className="ml-2 text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full">
                      You
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Solve Time */}
            <div className="text-right">
              <p className="text-sm text-neutral-600 font-medium">{leader.solveTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Motivational message */}
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="text-sm text-center text-neutral-600">
          🏆 Keep solving daily to climb the leaderboard!
        </p>
      </div>
    </section>
  );
};

export default Leaderboard;
