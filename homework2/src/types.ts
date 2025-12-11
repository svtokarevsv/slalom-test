export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completedDates: string[];
}

export interface AppState {
  habits: Habit[];
}

