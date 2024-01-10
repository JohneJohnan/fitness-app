import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    updateExercises(state, action) {
      state = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;