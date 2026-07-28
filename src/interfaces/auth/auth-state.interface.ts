export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
  email: string | null;
  displayName: string | null;
  profileImage: string | null;
}

export interface AuthPayload {
  token: string;
  userId: string;
  email: string;
  displayName: string| null;
  profileImage: string | null;
}