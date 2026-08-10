import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS, RADIUS, SPACING } from '@/theme';

export type Frequency = 'daily' | 'weekly' | 'monthly';

type FrequencySelectorProps = {
  value: Frequency;
  onChange: (frequency: Frequency) => void;
};

const frequencies: Frequency[] = [
  'daily',
  'weekly',
  'monthly',
];

function FrequencySelector({
  value,
  onChange,
}: FrequencySelectorProps) {
  return (
    <View>
      <Text style={styles.label}>Frequency</Text>

      <View style={styles.frequencyContainer}>
        {frequencies.map(item => {
          const isSelected = value === item;

          return (
            <Pressable
              key={item}
              onPress={() => onChange(item)}
              style={[
                styles.frequencyItem,
                isSelected &&
                  styles.selectedFrequencyItem,
              ]}
            >
              <Text
                style={[
                  styles.frequencyText,
                  isSelected &&
                    styles.selectedFrequencyText,
                ]}
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default FrequencySelector;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },

  frequencyContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  frequencyItem: {
    flex: 1,
    height: 44,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.mutedBadge,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedFrequencyItem: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  frequencyText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },

  selectedFrequencyText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});