import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '@/theme';
export const habitCategoryColors = [
  COLORS.lightGreen,
  COLORS.lightBlue,
  COLORS.lightPurple,
  COLORS.lightYellow,
  COLORS.lightPink,
  COLORS.lightTeal,
  COLORS.lightViolet,
  COLORS.lightOrange,
] as const;

export type HabitCategoryColor = (typeof habitCategoryColors)[number];

type ColorCircleProps = {
  color: HabitCategoryColor;
  selected?: boolean;
  onPress: () => void;
};

function ColorCircle({
  color,
  selected = false,
  onPress,
}: ColorCircleProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.colorCircle,
        {backgroundColor: color},
        selected && styles.selected,
      ]}
    />
  );
}

export default ColorCircle;

const styles = StyleSheet.create({
  colorCircle: {
    width: 31,
    height: 31,
    borderRadius: 20,
    margin:4,
  },

  selected: {
    borderWidth: 3,
    borderColor: '#000',
  },

  // Colors
  '#FF6B6B': {
    backgroundColor: '#FF6B6B',
  },

  '#4ECDC4': {
    backgroundColor: '#4ECDC4',
  },

  '#FFD93D': {
    backgroundColor: '#FFD93D',
  },

  '#6A4C93': {
    backgroundColor: '#6A4C93',
  },

  '#FF9F1C': {
    backgroundColor: '#FF9F1C',
  },

  '#2EC4B6': {
    backgroundColor: '#2EC4B6',
  },

  '#FF595E': {
    backgroundColor: '#FF595E',
  },

  '#8AC926': {
    backgroundColor: '#8AC926',
  },
});