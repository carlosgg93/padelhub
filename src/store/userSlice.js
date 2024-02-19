import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, setUSer, removeToken, removeUser, getUser } from '../utils/localStorage';
import loginUser from '../services/login';
import registerUser from '../services/register';

const initialState = {
  loading: false,
  isLogged: false,
  response: null,
  error: '',
};

export const loginUserAsync = createAsyncThunk('user/login', async (user, { rejectWithValue }) => {
  if (getUser() !== null) {
    return getUser();
  }

  const response = await loginUser(user);
  return response;
});

export const logOutUserAsync = createAsyncThunk('user/logout', async () => {
  // return response;
});

export const registerUserAsync = createAsyncThunk('user/registerUser', async (user) => {
  const response = await registerUser(user);
  return response;
});

export const setUserAsync = createAsyncThunk('user/setUser', async (user) => user);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        setToken(action.payload.token);
        setUSer(action.payload);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
      .addCase(setUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        setToken(action.payload.token);
        setUSer(action.payload);
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logOutUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutUserAsync.fulfilled, (state) => {
        state.loading = false;
        state.isLogged = false;
        removeToken();
        removeUser();
      })
      .addCase(logOutUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
