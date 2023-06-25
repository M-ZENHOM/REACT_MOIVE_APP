import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getAllUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    userLogout: (state) => {
      state.name = null;
      state.photo = null;
      state.email = null;
    },
  },
});

export const { getAllUserData, userLogout } = userSlice.actions;
export default userSlice.reducer;
