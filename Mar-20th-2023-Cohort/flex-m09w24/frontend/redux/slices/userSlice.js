import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "test 1" },
  reducers: {
    changeUserName(state, action) {
      console.log("action", action);
      state.name = action.payload.name;
    },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   todo.completed = !todo.completed;
    // },
  },
});

export const { changeUserName } = userSlice.actions;
export default userSlice.reducer;
