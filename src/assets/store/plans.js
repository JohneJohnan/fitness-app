import { createSlice } from '@reduxjs/toolkit';

const plansSlice = createSlice({
  name: 'plans',
  initialState: [],
  reducers: {
    updateplans(state, action) {
      state = action.payload;
    },
  },
});

export const plansActions = plansSlice.actions;

export default plansSlice.reducer;
