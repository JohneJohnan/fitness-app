import { createSlice } from '@reduxjs/toolkit';

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: [],
  reducers: {
    updateExercises(state, action) {
      state = action.payload;
    },
  },
});

export const coachesActions = coachesSlice.actions;

export default coachesSlice.reducer;
