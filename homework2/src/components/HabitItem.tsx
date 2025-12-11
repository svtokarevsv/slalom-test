import { Habit } from '../types';
import StreakCounter from './StreakCounter';

interface HabitItemProps {
  habit: Habit;
  onToggleCompletion: (habitId: string, date: string) => void;
}

export default function HabitItem({ habit, onToggleCompletion }: HabitItemProps) {
  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = habit.completedDates.includes(today);

  const handleToggle = () => {
    onToggleCompletion(habit.id, today);
  };

  return (
    <div className="habit-item">
      <div className="habit-item-content">
        <div className="habit-item-header">
          <h3 className="habit-name">{habit.name}</h3>
          <StreakCounter completedDates={habit.completedDates} />
        </div>
        <label className="habit-checkbox-label">
          <input
            type="checkbox"
            checked={isCompletedToday}
            onChange={handleToggle}
            className="habit-checkbox"
          />
          <span className="habit-checkbox-text">
            {isCompletedToday ? 'Completed today' : 'Mark as complete'}
          </span>
        </label>
      </div>
    </div>
  );
}

