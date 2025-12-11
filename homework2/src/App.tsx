import { useState, useEffect } from 'react';
import { Habit } from './types';
import { loadHabits, saveHabits } from './storage';
import Dashboard from './components/Dashboard';

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    // Load habits from localStorage on mount
    const loadedHabits = loadHabits();
    setHabits(loadedHabits);
  }, []);

  useEffect(() => {
    // Save habits to localStorage whenever they change
    if (habits.length > 0 || localStorage.getItem('habit-tracker-data') !== null) {
      saveHabits(habits);
    }
  }, [habits]);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      createdAt: new Date().toISOString(),
      completedDates: [],
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const toggleHabitCompletion = (habitId: string, date: string) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== habitId) return habit;
        
        const isCompleted = habit.completedDates.includes(date);
        if (isCompleted) {
          return {
            ...habit,
            completedDates: habit.completedDates.filter((d) => d !== date),
          };
        } else {
          return {
            ...habit,
            completedDates: [...habit.completedDates, date].sort(),
          };
        }
      })
    );
  };

  return (
    <div className="app">
      <Dashboard
        habits={habits}
        onAddHabit={addHabit}
        onToggleCompletion={toggleHabitCompletion}
      />
    </div>
  );
}

export default App;

