import { configureStore } from "@reduxjs/toolkit";
import userReducerSlice from "../reducers/user";

const store = configureStore({
  reducer: {
    userState: userReducerSlice,
  },
});

export default store;
