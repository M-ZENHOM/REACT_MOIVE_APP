import { configureStore } from "@reduxjs/toolkit";
import moiveSlice from "./slices/moiveSlice";

export const store = configureStore({
  reducer: {
    moives: moiveSlice,
  },
});
