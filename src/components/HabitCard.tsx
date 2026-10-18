import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, StyleSheet,Animated, Pressable } from 'react-native'
import Icon from '@/components/ui/Icon';
import { COLORS, SPACING, TYPOGRAPHY} from '@/theme';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { IconName } from '@/types/Icon';
import { useRef, useEffect } from 'react';
import { HabitBackgroundColor, HabitBadgeTextColor,habitBadgeTextColorMap } from '@/types/Habit';
import { updateHabit } from '@/redux/slices/habitSlice';
import { useAppDispatch } from '@/redux/hooks';

type HabitCardProps = {
  id: string;
  habitTitle: string;
  habitStatus: string;
  habitStreak: number;
  habitCategory: string;
  habitIcon: IconName;
  habitBadgeColor: HabitBackgroundColor;
  habitBadgeTextColor: HabitBadgeTextColor;
};
function HabitCard({id
  ,habitTitle, habitStatus,
     habitStreak, habitCategory,habitIcon ,
      habitBadgeColor, habitBadgeTextColor,
        }:HabitCardProps
      ) {
          
    const [statusHabit, setStatusHabit] = useState(habitStatus);
    const dispatch = useAppDispatch();      
    const borderAnimation = useRef(new Animated.Value(0)).current;
    //console.log('habitStatus:', habitBadgeColor, habitBadgeTextColor, statusHabit);
    useEffect(() => {
      Animated.timing(borderAnimation, {
        toValue: statusHabit === 'Done' ? 1 : 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, [statusHabit]);

    const borderColor = borderAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.textDisabled, COLORS.primary],
    });

    // function toggleHabitStatus() {
    //   setStatusHabit((prevStatus) => {
    //   const newStatus = prevStatus === 'Done' ? 'Not Done' : 'Done';

//       export interface Habit {
//   id: string;

//   title: string;
//   description: string;

//   category: string;
//   color: HabitBackgroundColor;
//   icon: IconName;

//   frequency: 'daily' | 'weekly' | 'monthly';

//   goal: number;
//   progress: number;
//   streak: number;
  
//   startDate: string;  
//   reminderEnabled: boolean;
//   reminderTime: string | null;

//   isActive: boolean;
//   isCompletedToday: boolean;

//   createdAt: string;
// }
//       dispatch(
//         updateHabit({
//           id,
//           isCompletedToday: newStatus === 'Done',
//           title:habitTitle,
//           streak:habitStreak,
//           category:habitCategory,
//           icon:habitIcon,
//           color:habitBadgeColor,
//           textColor:habitBadgeTextColor,

//         })
//     );

//     return newStatus;
//   });
// }
  return <Card>
    <View style ={styles.row } >
        <Icon iconName={habitIcon} />
        <View style ={styles.habitContent}>
            <View style={styles.row}>

                <Text style={styles.habitTitle}>
                    {habitTitle}
                </Text>
                {statusHabit ==='Done' && (
                <Badge
                    text="Done" 
                    backgroundColor={COLORS.lightGreen}
                    textColor={COLORS.darkGreen} 
                />
                )}
            </View>
            <View style={styles.row}>
                <Badge
                    text={habitCategory}
                    backgroundColor={habitBadgeColor}
                    textColor= {habitBadgeTextColor}
                />
                <MaterialCommunityIcons
                    name="fire" 
                    size={22}
                    color={COLORS.accent}
                />
                <Text style={styles.streakText} >{habitStreak}d</Text>
            </View>
            <Animated.View style={[
                styles.animatedBorder,
                {
                    borderBottomColor:borderColor,
                }
            ]}
            />

        </View>
        <Pressable 
          //onPress={toggleHabitStatus}
        >
        <MaterialCommunityIcons
            name="check-circle-outline"
            size={28}
            color={statusHabit ==='Done' ? COLORS.secondary : COLORS.textDisabled}
        />
        </Pressable>
    </View>
  </Card>
}
export default HabitCard

const styles =StyleSheet.create( {
    row:{
        flexDirection:'row',
        alignItems:'center',
        gap:SPACING.sm,
    },
    habitTitle:{
        ...TYPOGRAPHY.h3,
    },
    habitContent:{
        flex:1,
        gap:SPACING.sm,
        paddingBottom:SPACING.sm,
    },
    animatedBorder: {
        borderBottomWidth: 4,
    },
    streakText:{
        color:COLORS.accent,
    }
})