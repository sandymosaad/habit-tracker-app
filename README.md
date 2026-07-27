# habit-tracker-app
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── forms/
│   ├── habits/
│   └── layout/
│
├── navigation/
├── redux/
│   ├── slices/
│   ├── store.ts
│   └── hooks.ts
│
├── screens/
│   ├── auth/
│   ├── home/
│   ├── habits/
│   ├── statistics/
│   └── profile/
│
├── services/
├── theme/
├── types/
├── utils/
└── hooks/

# Navigation
RootNavigator
│
├── AuthNavigator
│   ├── Login
│   ├── Register
│   ├── ForgotPassword
│   └── VerifyEmail
│
└── AppNavigator
    │
    ├── BottomTabs
    │   ├── Home
    │   ├── Statistics
    │   └── Profile
    │
    └── Stack
        ├── AddHabit
        ├── HabitDetails
        ├── EditHabit
        └── Settings