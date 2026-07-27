export interface Habit {
  id: string;
  title: string;
  category: string;
  color: string;
  icon: string;

  frequency: 'daily' | 'weekly' | 'monthly';

  goal: number;
  progress: number;
  streak: number;

  reminderEnabled: boolean;
  reminderTime: string | null;

  isCompletedToday: boolean;

  createdAt: string;
}

export interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}
