import { Habit } from '../types';
import HabitItem from './HabitItem';

interface HabitListProps {
  habits: Habit[];
  onToggleCompletion: (habitId: string, date: string) => void;
}

export default function HabitList({ habits, onToggleCompletion }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="habit-list-empty">
        <p>No habits yet. Add your first habit to get started!</p>
      </div>
    );
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
}

