import { useState, FormEvent } from 'react';

interface AddHabitFormProps {
  onAdd: (name: string) => void;
}

export default function AddHabitForm({ onAdd }: AddHabitFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      onAdd(trimmedName);
      setName('');
    }
  };

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit name..."
        className="add-habit-input"
      />
      <button type="submit" className="add-habit-button">
        Add Habit
      </button>
    </form>
  );
}

