import axios from "axios";
import {FIREBASE_API_KEY, FIREBASE_DATABASE_URL} from '@/config/firebase';
export async function createUser({userId, displayName, profileImage, email , token}: {userId: string, displayName: string, profileImage: string, email: string , token: string}) {
    try {
     const response = await axios.post(`
        ${FIREBASE_DATABASE_URL}/users/.json?auth=${token}`, {
            userId: userId,
            email: email,   
            displayName: displayName,   
            profileImage: profileImage
    }
    )
        return response.data
} catch (error) {
    console.error('Error creating user in database:', error);
    if (axios.isAxiosError(error)) {
    const errorMessage =
      error.response?.data ??
      'An error occurred while creating the user in the database.';

    console.log('Error details:', errorMessage);
    return errorMessage;
  }

  throw error;
}
}