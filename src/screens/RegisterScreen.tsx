import React, { useState } from 'react'
import axios from 'axios'
import FooterAuthForm from '@/components/auth/FooterAuthForm'
import TopHeaderAuthForm from '@/components/auth/TopHeaderAuthForm'
import Card from '@/components/ui/Card'
import CustomButton from '@/components/ui/CustomButton'
import CustomInput from '@/components/ui/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";

import type { AuthStackParamList } from '@/navigation/types'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { register } from '@/services/authService'
import { useAppDispatch } from '@/redux/hooks'
import { authenticate } from '@/redux/slices/authSlice'
import { createUser } from '@/services/userService'
import useRegisterForm from '@/hooks/useRegisterForm';
import {validateInputs} from '@/utils/validators'
import ErrorMessage from '@/components/ui/ErrorMessage'
import {getFirebaseErrorMessage} from '@/utils/firebaseErrors'
import { KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from 'react-native';
type RegisterScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList, 'Register'>;
import Loading from '@/components/ui/Loading'

function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>()
  const dispatch = useAppDispatch()
  const {values,errors,setErrors,handleInputChange} = useRegisterForm();
  const [backendError, setBackendError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });
  function setShowPassword(field: 'password' | 'confirmPassword', value: boolean) {
    setShowPasswords(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  console.log('RegisterScreen rendered with values:', values, 'and errors:', errors);

  function handleSignUpPress() {
    navigation.navigate('Login')
  }
 async function handleRegisterPress() {
    const {isValid, errors} = validateInputs( values);
    setErrors(errors);
    if (!isValid) {
      return;
    }
    setBackendError(null); 
    // console.log('Register button pressed');
    // console.log('User State:', values);
    try {
    setLoading(true);
    const response = await register({
      email: values.email,
      password: values.password,
    } )
    //console.log('Register response:', response)
    if (response && response.idToken) {
      dispatch(authenticate({
        token: response.idToken,
        userId: response.localId,
        email: response.email,
        displayName: values.fullName,
        profileImage:"https://www.istockphoto.com/photos/profile-image" // default profile image URL,
      }))
      await createUser({
        email: values.email,
        userId: response.localId,
        profileImage: "",
        displayName: values.fullName,
        token: response.idToken
      })

    } 
  }
    catch (error) {
      //console.error('Error during registration:', error);
     if (axios.isAxiosError(error)) {
      const errorCode = error.response?.data?.error?.message;
      setBackendError(getFirebaseErrorMessage(errorCode));
  }
    }finally {
  setLoading(false);
}
  
  }
 return (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TopHeaderAuthForm
          title="Create an Account"
          subtitle="Start building better habits today"
          iconName="account-plus"
        />

        <Card>
          <CustomInput
            title="Full Name"
            placeholder="Enter your username"
            value={values.fullName}
            onChangeText={(text) => handleInputChange('fullName', text)}
            autoCapitalize="none"
            icon="account-outline"
            error={errors.fullName}
          />

          <CustomInput
            title="Email"
            placeholder="Enter your email"
            value={values.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            icon="email-outline"
            error={errors.email}
          />

          <CustomInput
            title="Password"
            placeholder="Enter your password"
            value={values.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry = {!showPasswords.password}
            icon="lock-outline"
            error={errors.password}
            setShowPassword={(value) => 
              setShowPassword('password', value)}
          />

          <CustomInput
            title="Confirm Password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChangeText={(text) =>
              handleInputChange('confirmPassword', text)
            }
            secureTextEntry= {!showPasswords.confirmPassword}
            icon="lock-outline"
            error={errors.confirmPassword}
            setShowPassword={(value) =>
              setShowPassword('confirmPassword', value)
            }
          />

          {backendError && <ErrorMessage message={backendError} />}

          {loading && <Loading fullScreen={false} />}

          <CustomButton
            title="Register"
            loading={loading}
            disabled={loading}
            onPress={handleRegisterPress}
            variant="primary"
          />
        </Card>

        <FooterAuthForm
          text="Already have an account?"
          actionText="Log In"
          onPress={handleSignUpPress}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
 )
}
export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 24,
  },
});