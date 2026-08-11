import { HabitBackgroundColor } from "@/types/Habit";
import { IconName } from "@/types/Icon";

export interface Habit {
  id: string;

  title: string;
  description: string;

  category: string;
  color: HabitBackgroundColor;
  icon: IconName;

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