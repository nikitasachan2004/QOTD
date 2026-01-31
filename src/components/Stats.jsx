import { Target, TrendingUp, Clock } from 'lucide-react';

const Stats = () => {
  // Mock user stats - would come from API in real app
  const stats = [
    {
      icon: Target,
      label: 'Attempts',
      value: '3',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '87%',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Clock,
      label: 'Avg Time',
      value: '14 mins',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="mb-8" aria-labelledby="stats-heading">
      <h3 id="stats-heading" className="text-xl font-bold text-neutral-900 mb-4">Your Performance</h3>
      
      {/* Stats Grid - responsive with hover effects */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="card p-6 hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`${stat.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
