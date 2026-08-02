import { RegisterUser } from '@/types/User';

export interface ValidationErrors {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateInputs(user: RegisterUser) {
  let isValid = true;

  const errors: ValidationErrors = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  if (!user.fullName.trim()) {
    errors.fullName = 'Full name is required.';
    isValid = false;
  } else if (user.fullName.length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
    isValid = false;
  }

  if (!user.email.trim()) {
    errors.email = 'Email is required.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = 'Email address is invalid.';
    isValid = false;
  }

  if (!user.password) {
    errors.password = 'Password is required.';
    isValid = false;
  } else if (user.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (user.confirmPassword !== user.password) {
    errors.confirmPassword = 'Passwords do not match.';
    isValid = false;
  }

  return {
    isValid,
    errors,
  };
}