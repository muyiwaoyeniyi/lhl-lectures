import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      // action
      // {
      //   type: 'users/updateUsers',
      //   payload: []
      // }

      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;
