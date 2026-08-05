import {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Card from '@/components/ui/Card';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '@/components/ui/CustomInput';
import TopHeaderAuthForm from '@/components/auth/TopHeaderAuthForm';
import FooterAuthForm from '@/components/auth/FooterAuthForm';
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme';
import { login } from '@/services/authService';
import { useNavigation } from '@react-navigation/native';
import {useAppDispatch} from '@/redux/hooks';
import { authenticate } from '@/redux/slices/authSlice'
import { getUserById } from '@/services/userService';
import type { AuthStackParamList } from '@/navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ErrorMessage from '@/components/ui/ErrorMessage';

type LoginScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();
  function handleInputChange(field: 'email' | 'password', value: string) {
    setUserData(prev => ({
      ...prev,
      [field]: value,
    }));
  }
  function handleSignUpPress() {
    navigation.navigate('Register');
  }
  async function handleLoginPress() {
    try{
       const response = await login(
        {
          email: userData.email,
          password: userData.password
        }
      )
      const user= await getUserById(response.localId, response.idToken)
      
      dispatch(authenticate({
        token: response.idToken,
        userId: response.localId,
        email: response.email,
        displayName: user.displayName,
        profileImage:  user.profileImage,
      }));
      //profileImageUrl
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      //console.error('Login failed:', error);
    }
   
  }
  return (
    <SafeAreaView style={styles.safeArea}>
     <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
     >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TopHeaderAuthForm
          title="Welcome Back!"
          subtitle="Sign in to continue your streak"
          iconName="fire"
        />

        <Card >
          <CustomInput
            title="Email"
            placeholder="Enter your email"
            value={userData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            icon="email-outline"
          />

          <CustomInput
            title="Password"
            placeholder="Enter your password"
            value={userData.password}
            onChangeText={userData => handleInputChange('password', userData)}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            icon="lock-outline"
            setShowPassword={setShowPassword}
          />
          <ErrorMessage message={error} />
          <View style={{ marginTop: SPACING.md }}>
            <CustomButton
              title="Log In"
              onPress={handleLoginPress}
              variant="primary"
            />
          </View>
        </Card>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.socialButton}>
            <CustomButton
              title="Google"
              onPress={() => console.log('Google')}
              variant="white"
            />
          </View>

          <View style={styles.socialButton}>
            <CustomButton
              title="Facebook"
              onPress={() => console.log('Facebook')}
              variant="black"
            />
          </View>
        </View>

      <FooterAuthForm 
        text="Don't have an account?"
        actionText="Sign Up"
        onPress={handleSignUpPress}
       />
      </ScrollView>
      </KeyboardAvoidingView> 
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },

  dividerText: {
    marginHorizontal: SPACING.md,
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
  },

  socialContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
  },

  socialButton: {
    flex: 1,
  },
});