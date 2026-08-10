import{ habitCategoryColors} from '@/components/ui/ColorCircle';

import { HabitCategory } from '@/types/Habit';

export const habitCategories: HabitCategory[] = [
  {
    name: 'Health',
    color: habitCategoryColors[0],
    icon: 'heart-outline',
  },
  {
    name: 'Fitness',
    color: habitCategoryColors[1],
    icon: 'dumbbell',
  },
  {
    name: 'Productivity',
    color: habitCategoryColors[2],
    icon: 'briefcase-outline',
  },
  {
    name: 'Mindfulness',
    color: habitCategoryColors[3],
    icon: 'brain',
  },
  {
    name: 'Learning',
    color: habitCategoryColors[4],
    icon: 'book-open-outline',
  },
  {
    name: 'Social',
    color: habitCategoryColors[5],
    icon: 'account-group-outline',
  },
  {
    name: 'Finance',
    color: habitCategoryColors[6],
    icon: 'piggy-bank-outline',
  },
  {
    name: 'Hobby',
    color: habitCategoryColors[7],
    icon: 'palette-outline',
  },
];