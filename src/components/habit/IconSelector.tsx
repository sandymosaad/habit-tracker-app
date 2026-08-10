import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '@/theme';
import type { HabitCategory } from '@/types/Habit';
import type { IconName } from '@/types/Icon';

type IconSelectorProps = {
  categories: readonly HabitCategory[];
  selectedIcon: IconName;
  selectedColor: string;
  onSelect: (icon:IconName ) => void;
};

function IconSelector({
  categories,
  selectedIcon,
  selectedColor,
  onSelect,
}: IconSelectorProps) {
  return (
    <View>
      <Text style={styles.label}>Icon</Text>

      <View style={styles.container}>
        {categories.map(item => {
          const isSelected = selectedIcon === item.icon;

          return (
            <Pressable
              key={item.name}
              onPress={() => onSelect(item.icon)}
              style={[
                styles.iconItem,
                isSelected && {
                  backgroundColor: selectedColor,
                },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                size={23}
                color={
                  isSelected
                    ? COLORS.white
                    : COLORS.textSecondary
                }
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default IconSelector;

const styles = StyleSheet.create({
  label: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
    marginBottom: SPACING.md,
  },

  iconItem: {
    width: 37,
    height: 37,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});

