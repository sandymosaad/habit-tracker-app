import {Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { getCurrentDate } from '@/utils/helpers'
import BellIcon from '@/components/ui/BellIcon'
import { COLORS, SPACING,TYPOGRAPHY } from '@/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import HabitCard from '@/components/HabitCard'
import { useEffect, useState } from 'react'
import PlusIcon from '@/components/ui/PlusIcon'
import { useNavigation } from '@react-navigation/native';
import type {AppStackParamList  } from '@/navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {getHabits} from '@/services/habitService'
import { Habit } from '@/interfaces/habit.interface'
import { habitBadgeTextColorMap } from '@/types/Habit'
import { setHabits } from '@/redux/slices/habitSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
type HomeScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList, 'AddHabit'>;

function HomeScreen() {
  const {displayName, userId, token} = useAppSelector((state) => state.auth)
  const navigation = useNavigation<HomeScreenNavigationProp>(); 
  //console.log('Auth State:', displayName)
   const habits = useAppSelector(
    (state) => state.habits.habits
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completedHabits, setCompletedHabits] = useState(0);
  const [totalHabits, setTotalHabits] = useState(0);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const fetchedHabits = await getHabits(userId, token);
          dispatch(setHabits(fetchedHabits));
          setTotalHabits(fetchedHabits.length);
          const completedCount = fetchedHabits.filter(habit => habit.isCompletedToday).length;
          setCompletedHabits(completedCount);        
        console.log('Fetched Habits:', fetchedHabits);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    if (userId && token) {
      fetchHabits();
    }
  }, [userId, token, dispatch]);
  // const completed = 1;
  // const total = 7;
 
  const progress = Math.round((completedHabits / totalHabits ) * 100);

  function handleAddHabit() {
     navigation.navigate('AddHabit');
  }


  return <SafeAreaView
    style={styles.container}>

    <View style={styles.header}>
        <View >
            <Text style={styles.headerTitle}>
              Welcome back, {displayName}!
            </Text>
            <Text style={styles.headerSubtitle}>
              {getCurrentDate()}
            </Text>
        </View>
        <BellIcon />
    </View>

    <View style={styles.progressCard}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressTitle}>
            Today's Progress
          </Text>

          <Text style={styles.progressPercentage}>
            {progress}%
          </Text>

          <Text style={styles.progressSubtitle}>
            {completedHabits} of {totalHabits} habits completed
          </Text>
        </View>

      <AnimatedCircularProgress
        size={70}
        width={7}
        fill={progress}
        duration={1200}
        tintColor={COLORS.white}
        backgroundColor={COLORS.textDisabled}
        rotation={0}
      >
        {() => (
          <MaterialCommunityIcons
            name="fire"
            size={30}
            color={COLORS.white}
          />
        )}
      </AnimatedCircularProgress>
    </View>

    <View style={styles.header}>
      <Text style={styles.headerSubtitle}>Today's Habits</Text>
      <Text style={styles.headerSubtitle}>{totalHabits} habits</Text>
    </View>
    
    <PlusIcon onPress={handleAddHabit} />
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitCard
            id={item.id}
            habitTitle={item.title}
            habitStatus={item.isCompletedToday ? 'Done' : 'Not Done'}
            habitStreak={item.streak}
            habitCategory={item.category}
            habitIcon={item.icon}
            habitBadgeColor={item.color}
            habitBadgeTextColor={habitBadgeTextColorMap[item.color]}         
             />
        )}
      />
    <PlusIcon onPress={handleAddHabit} />

  </SafeAreaView>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginTop:SPACING.xl,
  },
  headerTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.primary,
  },
  headerSubtitle: {
    ...TYPOGRAPHY.caption,
    color: 'gray',
  },
  //-----------------------------
  progressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    borderRadius: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  progressInfo: {
    flex: 1,
    marginRight: SPACING.md,
  },

  progressTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.white,
    opacity: 0.9,
  },

  progressPercentage: {
    ...TYPOGRAPHY.h1,
    color: COLORS.white,
    marginVertical: SPACING.xs,
    fontWeight: '700',
  },

  progressSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.85,
  },
})

function dispatch(arg0: { payload: Habit[]; type: "habit/setHabits" }) {
  throw new Error('Function not implemented.')
}
