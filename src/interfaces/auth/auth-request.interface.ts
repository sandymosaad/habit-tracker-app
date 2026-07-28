export type AuthMode =
  | 'signUp'
  | 'signInWithPassword';

export interface RequestAuthData {
  email: string;
  password: string;
  mode: AuthMode;
}
 export interface LoginData {
  email: string;
  password: string;
}

 export interface RegisterData {
  email: string;
  password: string;
}