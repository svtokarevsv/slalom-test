import { Habit } from './types';

const STORAGE_KEY = 'habit-tracker-data';

export function saveHabits(habits: Habit[]): void {
  try {
    const json = JSON.stringify(habits);
    localStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('Failed to save habits to localStorage:', error);
    // In a production app, you might want to show a user-friendly error message
  }
}

export function loadHabits(): Habit[] {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) {
      return [];
    }
    const habits = JSON.parse(json) as Habit[];
    // Validate that we got an array
    if (!Array.isArray(habits)) {
      return [];
    }
    return habits;
  } catch (error) {
    console.error('Failed to load habits from localStorage:', error);
    return [];
  }
}

