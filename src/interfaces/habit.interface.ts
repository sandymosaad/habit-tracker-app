export interface Habit {
  id: string;

  title: string;
  description: string;

  category: string;
  color: string;
  icon: string;

  frequency: 'daily' | 'weekly' | 'monthly';

  goal: number;
  progress: number;
  streak: number;
  
  startDate: string;  
  reminderEnabled: boolean;
  reminderTime: string | null;

  isActive: boolean;
  isCompletedToday: boolean;

  createdAt: string;
}

export interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}