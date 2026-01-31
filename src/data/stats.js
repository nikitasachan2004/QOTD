export const userStats = {
  currentStreak: 7,
  longestStreak: 12,
  totalAttempts: 56,
  successfulSolves: 142,
  successRate: 91,
  averageSolveTime: "18 min",
  todayAttempts: 2,
  problemsSolvedToday: 1
};

export const dailyStats = [
  {
    icon: "Activity",
    label: "Attempts Today",
    value: "2",
    subtext: "Keep going!",
    color: "text-primary"
  },
  {
    icon: "Target",
    label: "Success Rate",
    value: "91%",
    subtext: "Excellent!",
    color: "text-success"
  },
  {
    icon: "Clock",
    label: "Avg Solve Time",
    value: "18 min",
    subtext: "This week",
    color: "text-muted"
  }
];
