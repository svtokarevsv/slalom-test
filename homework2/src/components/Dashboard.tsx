import { Habit } from '../types';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';

interface DashboardProps {
  habits: Habit[];
  onAddHabit: (name: string) => void;
  onToggleCompletion: (habitId: string, date: string) => void;
}

export default function Dashboard({ habits, onAddHabit, onToggleCompletion }: DashboardProps) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Habit Tracker</h1>
      </header>
      <main className="dashboard-main">
        <AddHabitForm onAdd={onAddHabit} />
        <HabitList habits={habits} onToggleCompletion={onToggleCompletion} />
      </main>
    </div>
  );
}

