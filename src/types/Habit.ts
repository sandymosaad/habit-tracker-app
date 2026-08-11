import { IconName } from './Icon';
import { COLORS } from '@/theme';
import { HabitCategoryColor } from '@/components/ui/ColorCircle';

export type HabitCategory = {
  name: string;
  color: HabitCategoryColor;
  icon: IconName;
};

export const habitBackgroundColors = [
  COLORS.lightGreen,
  COLORS.lightBlue,
  COLORS.lightPurple,
  COLORS.lightYellow,
  COLORS.lightPink,
  COLORS.lightTeal,
  COLORS.lightViolet,
  COLORS.lightOrange,
  COLORS.primary,
] as const;

export const habitBadgeTextColors = [
  COLORS.white,
  COLORS.darkGreen,
  COLORS.darkBlue,
  COLORS.darkPurple,
  COLORS.darkYellow,
  COLORS.darkPink,
  COLORS.darkTeal,
  COLORS.darkViolet,
  COLORS.darkOrange,
] as const;

export type HabitBackgroundColor =
  (typeof habitBackgroundColors)[number];

export type HabitBadgeTextColor =
  (typeof habitBadgeTextColors)[number];

export const habitBadgeTextColorMap: Record<
  HabitBackgroundColor,
  HabitBadgeTextColor
> = {
  [COLORS.lightGreen]: COLORS.darkGreen,
  [COLORS.lightBlue]: COLORS.darkBlue,
  [COLORS.lightPurple]: COLORS.darkPurple,
  [COLORS.lightYellow]: COLORS.darkYellow,
  [COLORS.lightPink]: COLORS.darkPink,
  [COLORS.lightTeal]: COLORS.darkTeal,
  [COLORS.lightViolet]: COLORS.darkViolet,
  [COLORS.lightOrange]: COLORS.darkOrange,
  [COLORS.primary]: COLORS.white,
};