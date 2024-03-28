import { signIn, signUp } from '@/redux/thunks/authThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

export interface authState {
  user: {};
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
}

const initialState: authState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  isLoading: false,
};

export const authReducerName = 'AUTH';

export const authSlice = createSlice({
  name: authReducerName,
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user || {};
      state.accessToken = action.payload?.accessToken || null;
      state.refreshToken = action.payload?.refreshToken || null;
    });
    builder.addCase(signUp.rejected, (state, _) => {
      state.isLoading = false;
    });

    builder.addCase(signIn.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user || {};
      state.accessToken = action.payload?.accessToken || null;
      state.refreshToken = action.payload?.refreshToken || null;
    });
    builder.addCase(signIn.rejected, (state, _) => {
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export default persistReducer(authPersistConfig, authSlice.reducer);
