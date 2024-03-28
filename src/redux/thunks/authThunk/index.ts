import { authReducerName } from '@/redux/slices/authSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesApi, signInApi, signUpApi } from '@/services/api/authApi';
import { signInPayload, signUpPayload } from '@/services/api/authApi/types';
import { showToastMessage } from '@/functions';

export const signUp = createAsyncThunk(
  `${authReducerName}/SIGNUP`,
  async (payload: signUpPayload, { rejectWithValue }) => {
    try {
      const signUpRes = await signUpApi(payload);
      if (!signUpRes.data?.id) {
        rejectWithValue(false);
        signUpRes.data?.message && showToastMessage(signUpRes.data.message);
        return;
      }
      const signInRes = await signInApi({ email: payload.email, password: payload.password });
      if (signInRes.status !== 200) {
        rejectWithValue(false);
        signInRes.data?.message && showToastMessage(signInRes.data.message);
        return;
      }
      return signInRes.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const signIn = createAsyncThunk(
  `${authReducerName}/SIGNIN`,
  async (payload: signInPayload, { rejectWithValue }) => {
    try {
      const signInRes = await signInApi(payload);
      if (signInRes.status !== 200) {
        rejectWithValue(false);
        signInRes.data?.message && showToastMessage(signInRes.data.message);
        return;
      }
      return signInRes.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getCategories = createAsyncThunk(`${authReducerName}/CATEGORIES`, async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await getCategoriesApi();
    if (status !== 200) {
      rejectWithValue(false);
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
});
