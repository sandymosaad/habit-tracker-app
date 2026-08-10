import React from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';

type ReminderSettingsProps = {
  enabled: boolean;
  reminderTime: Date;
  showTimePicker: boolean;
  onToggle: (value: boolean) => void;
  onOpenPicker: () => void;
  onTimeChange: (
    event: DateTimePickerEvent,
    date?: Date,
  ) => void;
};

function ReminderSettings({
  enabled,
  reminderTime,
  showTimePicker,
  onToggle,
  onOpenPicker,
  onTimeChange,
}: ReminderSettingsProps) {
  return (
    <View>
      <Text style={styles.label}>Reminder</Text>

      <View style={styles.reminderContainer}>
        <View style={styles.reminderInfo}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={22}
              color={COLORS.primary}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.reminderTitle}>
              Daily Reminder
            </Text>

            <Text style={styles.reminderDescription}>
              Get reminded to complete this habit
            </Text>
          </View>
        </View>

        <Switch
          value={enabled}
          onValueChange={onToggle}
          trackColor={{
            false: COLORS.border,
            true: COLORS.primary,
          }}
          thumbColor={COLORS.white}
        />
      </View>

      {enabled && (
        <>
          <Text style={styles.label}>Reminder Time</Text>

          <Pressable
            style={styles.timeInput}
            onPress={onOpenPicker}
          >
            <MaterialCommunityIcons
              name="clock-outline"
              size={22}
              color={COLORS.textSecondary}
            />

            <Text style={styles.timeText}>
              {reminderTime.toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
              })}
            </Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={COLORS.textDisabled}
            />
          </Pressable>

          {showTimePicker && (
            <DateTimePicker
              value={reminderTime}
              mode="time"
              is24Hour={false}
              onChange={onTimeChange}
            />
          )}
        </>
      )}
    </View>
  );
}

export default ReminderSettings;

const styles = StyleSheet.create({
  label: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    marginTop: SPACING.sm,
  },

  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 68,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.white,
  },

  reminderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: SPACING.sm,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.mutedBadge,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
  },

  reminderTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },

  reminderDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  timeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    minHeight: 52,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.white,
  },

  timeText: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
  },
});