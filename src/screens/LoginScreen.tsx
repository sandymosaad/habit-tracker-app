import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '@/components/ui/Card';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '@/components/ui/CustomInput';
import TopHeaderAuthForm from '@/components/auth/TopHeaderAuthForm';
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
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
            value=""
            onChangeText={(text) => console.log(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            icon="email-outline"
          />

          <CustomInput
            title="Password"
            placeholder="Enter your password"
            value=""
            onChangeText={(text) => console.log(text)}
            secureTextEntry
            icon="lock-outline"
          />

          <View style={{ marginTop: SPACING.md }}>
            <CustomButton
              title="Log In"
              onPress={() => console.log('Login')}
              variant="primary"
            />
          </View>
        </Card>

        {/* Divider */}
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

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>

          <Pressable onPress={() => console.log('Navigate to Sign Up')}>
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
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

  // card: {
  //   marginTop: SPACING.xl,
  // },

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

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xl,
  },

  footerText: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
  },

  signUp: {
    marginLeft: SPACING.xs,
    color: COLORS.primary,
    ...TYPOGRAPHY.body,
    fontWeight: `700`,
  },
});