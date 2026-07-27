 interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
  email: string | null;
  displayName: string | null;
  profileImage: string | null;
}

 interface AuthPayload {
  token: string;
  userId: string;
  email: string;
  displayName: string;
  profileImage: string | null;
}
export {AuthState, AuthPayload}