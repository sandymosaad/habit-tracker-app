import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';
import type { HabitCategory } from '@/types/Habit';

type CategorySelectorProps = {
  categories: readonly HabitCategory[];
  selectedCategory: HabitCategory;
  onSelect: (category: HabitCategory) => void;
};

function CategorySelector({
  categories,
  selectedCategory,
  onSelect,
}: CategorySelectorProps) {
  return (
    <View>
      <Text style={styles.label}>Category</Text>

      <View style={styles.container}>
        {categories.map(item => {
          const isSelected =
            selectedCategory.name === item.name;

          return (
            <Pressable
              key={item.name}
              onPress={() => onSelect(item)}
              style={[
                styles.item,
                isSelected && {
                  backgroundColor: item.color,
                },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  isSelected && styles.selectedText,
                ]}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default CategorySelector;

const styles = StyleSheet.create({
  label: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },

  item: {
    width: '23%',
    minHeight: 40,
    paddingHorizontal: SPACING.xs,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.mutedBadge,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.label,
  },

  selectedText: {
    color: COLORS.white,
    fontWeight: '600',
  },

});
