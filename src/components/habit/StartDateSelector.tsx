import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from '@/theme';

type StartDateSelectorProps = {
  date: Date;
  showPicker: boolean;
  onOpenPicker: () => void;
  onDateChange: (
    event: DateTimePickerEvent,
    date?: Date,
  ) => void;
};

function StartDateSelector({
  date,
  showPicker,
  onOpenPicker,
  onDateChange,
}: StartDateSelectorProps) {
  return (
    <View>
      <Text style={styles.label}>Start Date</Text>

      <Pressable
        style={styles.dateInput}
        onPress={onOpenPicker}
      >
        <MaterialCommunityIcons
          name="calendar-outline"
          size={22}
          color={COLORS.textSecondary}
        />

        <Text style={styles.dateText}>
          {date.toLocaleDateString([], {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={22}
          color={COLORS.textDisabled}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onDateChange}
        />
      )}
    </View>
  );
}

export default StartDateSelector;

const styles = StyleSheet.create({
  label: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    marginTop: SPACING.sm,
  },

  dateInput: {
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

  dateText: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
  },
});