import { createSlice } from '@reduxjs/toolkit';

// Initial state for the auth slice
const initialState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Signin: (state, action) => {
        console.log("data received here is ",action.payload)
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  
    // Action to log out
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the actions to use them in components
export const {Signin, logout } = authSlice.actions;

// Export the reducer to add it to the store
export default authSlice.reducer;