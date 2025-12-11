interface StreakCounterProps {
  completedDates: string[];
}

export default function StreakCounter({ completedDates }: StreakCounterProps) {
  const streak = calculateStreak(completedDates);

  if (streak === 0) {
    return null;
  }

  return (
    <div className="streak-counter">
      <span className="streak-emoji">🔥</span>
      <span className="streak-text">{streak} {streak === 1 ? 'day' : 'days'}</span>
    </div>
  );
}

function calculateStreak(completedDates: string[]): number {
  if (completedDates.length === 0) {
    return 0;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split('T')[0];
  
  // Check if today is completed
  const isTodayCompleted = completedDates.includes(todayStr);
  
  // If today is not completed, streak is 0 (stops counting if today is incomplete)
  if (!isTodayCompleted) {
    return 0;
  }

  // Count consecutive days backwards from today
  let streak = 0;
  let currentDate = new Date(today);
  const dateSet = new Set(completedDates);

  while (true) {
    const dateStr = currentDate.toISOString().split('T')[0];
    
    if (dateSet.has(dateStr)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      // Gap found, stop counting
      break;
    }
  }

  return streak;
}

