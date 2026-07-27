export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyEmail: undefined;
};

export type AppStackParamList = {
  Main: undefined;
  AddHabit: undefined;
  HabitDetails: {
    habitId: string;
  };
  EditHabit: {
    habitId: string;
  };
  Settings: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Statistics: undefined;
  Profile: undefined;
};