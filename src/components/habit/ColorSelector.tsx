import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ColorCircle from '@/components/ui/ColorCircle';
import { COLORS, SPACING } from '@/theme';
import {HabitCategoryColor} from '@/components/ui/ColorCircle';

type ColorSelectorProps = {
  colors: readonly HabitCategoryColor[];
  selectedColor: string;
  onSelect: (color:HabitCategoryColor) => void;
};

function ColorSelector({
  colors,
  selectedColor,
  onSelect,
}: ColorSelectorProps) {
  return (
    <View>
      <Text style={styles.label}>Color</Text>

      <View style={styles.container}>
        {colors.map(color => (
          <ColorCircle
            key={color}
            color={color}
            selected={selectedColor === color}
            onPress={() => onSelect(color)}
          />
        ))}
      </View>
    </View>
  );
}

export default ColorSelector;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },

  container: {
    flexDirection: 'row',
    gap: SPACING.xs,
    marginBottom: SPACING.md,
  },
});

  
