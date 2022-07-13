import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "phil",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName } = authSlice.actions;

export default authSlice.reducer;
