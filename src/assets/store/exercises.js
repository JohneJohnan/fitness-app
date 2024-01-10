import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    updateExercises(state, action) {
      state = action.payload;
    },
  },
});

export const exercisesActions = exercisesSlice.actions;

export default exercisesSlice.reducer;
