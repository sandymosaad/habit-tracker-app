export type User = {
    id: string;
    fullName: string;
    email: string;
    password: string;
    profileImage?: string;
  };

export type RegisterUser = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };