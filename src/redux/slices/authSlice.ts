import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';

import {AuthState, AuthPayload} from "@/interfaces/auth/auth-state.interface"

const initialState:AuthState ={
    isAuthenticated: false,
    token: null,
    userId: null,
    email: null,
    displayName: null,
    profileImage:null,

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        authenticate(
        state,
        action: PayloadAction<AuthPayload>
        ) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.profileImage = action.payload.profileImage;            
        },
        logout(){
            return initialState
        },

    }

})

export const {authenticate , logout} = authSlice.actions
export default authSlice.reducer