import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from '@/navigation/types';

import LoginScreen from '@/screens/LoginScreen';
import RegisterScreen from '@/screens/RegisterScreen';
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen';
import VerifyEmailScreen from '@/screens/VerifyEmailScreen';


const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () =>  {
  
    return (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
        />
        <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
        />
        {/* <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
        /> */}

        <AuthStack.Screen
            name="VerifyEmail"
            component={VerifyEmailScreen}
        />

        <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
        />
    </AuthStack.Navigator>
    )
}

export default AuthNavigator