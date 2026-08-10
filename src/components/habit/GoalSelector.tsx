import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';

type Frequency = 'daily' | 'weekly' | 'monthly';

type GoalSelectorProps = {
  value: number;
  frequency: Frequency;
  onChange: (goal: number) => void;
};

function GoalSelector({
  value,
  frequency,
  onChange,
}: GoalSelectorProps) {
  const frequencyText =
    frequency === 'daily'
      ? 'per day'
      : frequency === 'weekly'
        ? 'per week'
        : 'per month';

  return (
    <View>
      <Text style={styles.label}>Goal</Text>

      <View style={styles.goalContainer}>
        <Pressable
          style={styles.goalButton}
          onPress={() =>
            onChange(Math.max(1, value - 1))
          }
        >
          <MaterialCommunityIcons
            name="minus"
            size={22}
            color={COLORS.textPrimary}
          />
        </Pressable>

        <View style={styles.goalValueContainer}>
          <Text style={styles.goalText}>
            {value}
          </Text>

          <Text style={styles.goalDescription}>
            time{value !== 1 ? 's' : ''} {frequencyText}
          </Text>
        </View>

        <Pressable
          style={styles.goalButton}
          onPress={() => onChange(value + 1)}
        >
          <MaterialCommunityIcons
            name="plus"
            size={22}
            color={COLORS.textPrimary}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default GoalSelector;

const styles = StyleSheet.create({
  label: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },

  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 64,
    paddingHorizontal: SPACING.sm,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.white,
  },

  goalButton: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.mutedBadge,
    justifyContent: 'center',
    alignItems: 'center',
  },

  goalValueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  goalText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
  },

  goalDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});