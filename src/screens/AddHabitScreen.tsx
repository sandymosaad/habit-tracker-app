import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SPACING, TYPOGRAPHY, RADIUS } from '@/theme';
import { IconName } from '@/types/Icon';
import { useNavigation } from '@react-navigation/native';
import Icon from '@/components/ui/Icon';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '@/components/ui/CustomInput';
import ColorCircle, {
  habitCategoryColors,
  type HabitCategoryColor,
} from '@/components/ui/ColorCircle';
import { addHabit } from '@/services/habitService';
import { addHabit as addHabitToStoreSlice} from '@/redux/slices/habitSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import  { Habit } from '@/interfaces/habit.interface';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { habitCategories } from '@/utils/constants';
import type { HabitCategory } from '@/types/Habit';
import CategorySelector from '@/components/habit/CategorySelector';
import IconSelector from '@/components/habit/IconSelector';
import ColorSelector from '@/components/habit/ColorSelector';
import FrequencySelector from '@/components/habit/FrequencySelector';
import GoalSelector from '@/components/habit/GoalSelector';
import StartDateSelector from '@/components/habit/StartDateSelector';
import ReminderSettings from '@/components/habit/ReminderSettings';

export type HabitData = Omit<Habit, 'id'> & {
  userId: string;
  token: string;
};

function AddHabitScreen() {
  const [habitName, setHabitName] = useState('');
  const [habitDescription, setHabitDescription] = useState('');

  const [selectedCategory, setSelectedCategory] =
    useState<HabitCategory>(habitCategories[0]);

  const [selectedIcon, setSelectedIcon] =
    useState<IconName>(habitCategories[0].icon);

  const [selectedColor, setSelectedColor] =
    useState<HabitCategoryColor>(habitCategories[0].color);

  const [reminderTime, setReminderTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [frequency, setFrequency] =
    useState<'daily' | 'weekly' | 'monthly'>('daily');

  const [goal, setGoal] = useState(1);

  const [reminderEnabled, setReminderEnabled] = useState(true);



  const [startDate, setStartDate] = useState(new Date());

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const navigation = useNavigation();
  const {userId , token} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  function handleTimeChange(
      event: DateTimePickerEvent,
      selectedDate?: Date,
    ) {
      setShowTimePicker(false);

      if (selectedDate) {
        setReminderTime(selectedDate);
      }
    }

  function handleStartDateChange(
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) {
    setShowStartDatePicker(false);

    if (selectedDate) {
      setStartDate(selectedDate);
    }
  }
  function handleSelectCategory(category: HabitCategory) {
    setSelectedCategory(category);
    setSelectedIcon(category.icon);
    setSelectedColor(category.color);
  }

  function handleSelectIcon(icon: IconName) {
    setSelectedIcon(icon);
  }

  function handleSelectColor(color: HabitCategoryColor) {
    setSelectedColor(color);
  }

  async function handleSaveHabit() {
    const habitData = {
      title: habitName,
      description: habitDescription,
      category: selectedCategory.name,
      color: selectedColor,
      icon: selectedIcon,

      frequency,
      goal,

      progress: 0,
      streak: 0,

      reminderEnabled,
      reminderTime: reminderEnabled
        ? reminderTime.toISOString()
        : null,

      isCompletedToday: false,
      isActive: true,
      startDate: startDate.toISOString(),

      createdAt: new Date().toISOString(),

      userId,
      token,
    };

    try {
      const savedHabit = await addHabit(habitData);

      dispatch(
        addHabitToStoreSlice(savedHabit)
      );

      navigation.goBack();
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  }
  function handleClose() {
    navigation.goBack();
  }

  function handleInputChange(field: 'name' | 'description', value: string) {
    if (field === 'name') {
      setHabitName(value);
    } else if (field === 'description') {
      setHabitDescription(value);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Pressable onPress={handleClose}>
          <Icon
            iconName="close"
            backgroundColor={COLORS.white}
            textColor={COLORS.black}
          />
        </Pressable>
        <Text style={styles.title}>Add New Habit</Text>
        <View style={styles.button} >
          <CustomButton
            title="Save"
            onPress={handleSaveHabit}
          />
        </View>

      </View>

      <View style={styles.form}>
        <CustomInput
          title="Habit Name"
          placeholder="sample: Morning Run"
          value={habitName}
          onChangeText={text => handleInputChange('name', text)}
        />

        <CustomInput
          title="Habit Description"
          placeholder="e.g. Drink 8 glasses of water daily"
          numberOfLines={4}
          multiline
          value={habitDescription}
          onChangeText={text => handleInputChange('description', text)}
        />

      <CategorySelector
        categories={habitCategories}
        selectedCategory={selectedCategory}
        onSelect={handleSelectCategory}
      />
      <IconSelector
        categories={habitCategories}
        selectedIcon={selectedIcon}
        selectedColor={selectedColor}
        onSelect={handleSelectIcon}
      />
      <ColorSelector
        colors={habitCategoryColors}
        selectedColor={selectedColor}
        onSelect={handleSelectColor}
      />
      <FrequencySelector
        value={frequency}
        onChange={setFrequency}
      />
      <GoalSelector
        value={goal}
        frequency={frequency}
        onChange={setGoal}
      />

        <ReminderSettings
          enabled={reminderEnabled}
          reminderTime={reminderTime}
          showTimePicker={showTimePicker}
          onToggle={() => setReminderEnabled(!reminderEnabled)}
          onOpenPicker={() => setShowTimePicker(true)}
          onTimeChange={handleTimeChange}
        /> 
 
        <StartDateSelector
          date={startDate}
          showPicker={showStartDatePicker}
          onOpenPicker={() => setShowStartDatePicker(true)}
          onDateChange={handleStartDateChange}
        />
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            onChange={handleStartDateChange}
          />
        )} 
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default AddHabitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xl,
  },
  title: {
    ...TYPOGRAPHY.h2,
    textAlign: 'center',
  },
  button: {
    width: 80,
  },
  form: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  label: {
    ...TYPOGRAPHY.h4,
    marginBottom: SPACING.xs,
    color: COLORS.textSecondary,
  },
});
