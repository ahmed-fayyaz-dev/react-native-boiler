import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* 
        Action to set the user as logged out
    */ login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    /* 
        Action to set the user as logged out
    */
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
