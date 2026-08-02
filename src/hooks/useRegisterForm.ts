import { useState } from 'react';

export interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormErrors {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegisterForm = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const initialErrors: RegisterFormErrors = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function useRegisterForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  function handleInputChange(
    field: keyof RegisterForm,
    value: string,
  ) {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [field]: '',
    }));
  }

  return {
    values,
    errors,
    setErrors,
    handleInputChange,
  };
}