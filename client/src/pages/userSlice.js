import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser, setPhoto } = userSlice.actions;

export const getUser = (state) => state.user.user;
