import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Habit, HabitState} from "@/interfaces/habit.interface"

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};
const habitSlice = createSlice({
    name:"habit",
    initialState,
    reducers:{
        setHabits(state, action: PayloadAction<Habit[]>){
            state.habits = action.payload
        },
        addHabit(state, action: PayloadAction<Habit>){
            state.habits.push(action.payload)
        },
        updateHabit(state, action: PayloadAction<Habit>) {
            state.habits = state.habits.map(habit =>
                habit.id === action.payload.id
                ? action.payload
                : habit
        );
        },
        deleteHabit(state,action: PayloadAction<string>){
            state.habits = state.habits.filter(
                habit => habit.id !== action.payload
            )
        },
        // getHabit(state, action: PayloadAction<string>) {
        //     return state.habits.find(habit => habit.id === action.payload);
        // },
        setError(state, action:PayloadAction<string | null>){
            state.error = action.payload
        },
        setLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload
        }
    }
})

// export const selectHabitById = (state: RootState, id: string) =>
//   state.habits.habits.find(habit => habit.id === id);

export const {setHabits,addHabit,updateHabit,deleteHabit, setError, setLoading}= habitSlice.actions

export default habitSlice.reducer