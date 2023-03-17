import { configureStore } from "@reduxjs/toolkit";
import moiveSlice from "./slices/moiveSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    moives: moiveSlice,
    user: userSlice,
  },
});
