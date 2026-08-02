import axios from 'axios';
import {FIREBASE_API_KEY} from '@/config/firebase'
import {AuthResponse } from '@/interfaces/auth/auth-response.interface'
import {RegisterData, LoginData, RequestAuthData} from '@/interfaces/auth/auth-request.interface'


 async function requestAuth({email, password, mode}:RequestAuthData){
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_API_KEY}`;
   
    try {
        const response = await axios.post<AuthResponse>(endpoint,{
            email,
            password,
            returnSecureToken: true,

        })
        console.log('Authentication successful');
        return response.data
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
        }

        throw error;
    }
}
export async function login ({email,password}:LoginData){
    return requestAuth({email, password, mode: 'signInWithPassword',})
}
export async function register ({email,password}:RegisterData){
    return requestAuth({email, password, mode: 'signUp',})
}
export async function addUser({email, password,profileImage , displayName , userId}:
    RegisterData & {profileImage: string, displayName: string , userId: string}){
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
    try {
        const response = await axios.post<AuthResponse>(endpoint,{
            email,
            password,
            returnSecureToken: true,
            displayName,
            profileImage,
            userId
        })
        console.log('User added successfully');
        return response.data
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
        }

        throw error;
    }
}