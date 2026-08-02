
export function getFirebaseErrorMessage(code?: string) {
  switch (code) {
    case 'EMAIL_EXISTS':
      return 'The email address is already in use.';

    case 'INVALID_EMAIL':
      return 'Invalid email address.';

    case 'INVALID_PASSWORD':
      return 'Incorrect password.';

    case 'EMAIL_NOT_FOUND':
      return 'No account found with this email.';

    case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      return 'Too many attempts. Please try again later.';

    default:
      return 'Something went wrong.';
  }
}