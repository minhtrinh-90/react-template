import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { User } from '../../users/models/user';
import AuthService from '../services/auth.service';

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  try {
    const res = await AuthService.getUserInfo();
    return res;
  } catch (error) {
    // If the cookie is no longer valid, call sign out to clear the cookie
    await AuthService.signOut();
    throw error;
  }
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
  await AuthService.signOut();
});

interface AuthState {
  user: User | null;
  status: 'init' | 'loading' | 'signed-in' | 'signed-out';
}

const initialState: AuthState = {
  user: null,
  status: 'init',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'signed-in';
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.user = null;
      state.status = 'signed-out';
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.user = null;
      state.status = 'signed-out';
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthState = (state: RootState) => state.auth.status;
