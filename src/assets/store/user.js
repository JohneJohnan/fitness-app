import { createSlice } from '@reduxjs/toolkit';

// const initialUserState = {
//   type: undefined,
// name: undefined,
// id: undefined,
// pic: undefined,
// tags: undefined,
// email: undefined,
// phone: undefined,
// gender: undefined,
// height: undefined,
// weight: undefined,
// targetWeight: undefined,
// preferredTimes: undefined,
// name: undefined,
// id: undefined,
// pic: undefined,
// tags: undefined,
// email: undefined,
// phone: undefined,
// price: undefined,
// rating: undefined,
// speciality: undefined,
// experience: undefined,
// isAvailable: undefined,
// description: undefined,
// };

const initialUserState = {
  atts: {
    // account_type: undefined,
    // desired_weight: undefined,
    // email: undefined,
    // full_name: undefined,
    // gender: undefined,
    // height: undefined,
    // id: undefined,
    // msg: undefined,
    // like_tags: undefined,
    // panel: undefined,
    // phone_number: undefined,
    // pref_time: undefined,
    // weight: undefined,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    changeUser(state, action) {
      state.atts = { ...action.payload };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
