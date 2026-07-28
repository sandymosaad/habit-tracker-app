import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD5aO7oceQmqKdbzFKepakIzHekvmXMRbs",
  authDomain: "habit-tracker-app-e81e1.firebaseapp.com",
  databaseURL: "https://habit-tracker-app-e81e1-default-rtdb.firebaseio.com",
  projectId: "habit-tracker-app-e81e1",
  storageBucket: "habit-tracker-app-e81e1.firebasestorage.app",
  messagingSenderId: "487932162964",
  appId: "1:487932162964:web:cee46ea32bf781b5599581"
};

export const FIREBASE_API_KEY = firebaseConfig.apiKey
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
console.log('Firebase initialized');
export default app;
