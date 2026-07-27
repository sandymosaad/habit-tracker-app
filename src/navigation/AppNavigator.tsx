import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from "@/navigation/types"

import AddHabitScreen from "@/screens/AddHabitScreen"
import HabitDetailsScreen from '@/screens/HabitDetailsScreen';
import EditHabitScreen from '@/screens/EditHabitScreen'
import SettingsScreen from '@/screens/SettingsScreen';

import BottomTabs  from '@/navigation/BottomTabs';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const  AppNavigator =() => {
    return (
    <AppStack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <AppStack.Screen
            name="Main"
            component={BottomTabs}
        />
        <AppStack.Screen
            name="AddHabit"
            component={AddHabitScreen}
        />
        <AppStack.Screen
            name="HabitDetails"
            component={HabitDetailsScreen}
        />
        <AppStack.Screen
            name="EditHabit"
            component={EditHabitScreen}
        />
        <AppStack.Screen
            name="Settings"
            component={SettingsScreen}
        />
    </AppStack.Navigator>
    )
}
export default AppNavigator