import axios from 'axios';
import { FIREBASE_DATABASE_URL } from '../config/firebase';
import { Habit } from '../interfaces/habit.interface';

export type HabitData = Omit<Habit, 'id'> & {
  userId: string | null;
  token: string| null;
};

export async function addHabit({
  userId,
  token,
  ...habit
}: HabitData): Promise<Habit> {
  const url =
    `${FIREBASE_DATABASE_URL}/habits/${userId}.json?auth=${token}`;

  try {
    const response = await axios.post(url, habit);

    return {
      ...habit,
      id: response.data.name,
    };
  } catch (error) {
    console.error('Error adding habit:', error);
    throw error;
  }
}