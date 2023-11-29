/*=============================================
=            Redux Store                      =
=============================================*/

import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  createUser,
  deleteUser,
  setUser,
} from "../reducers/userReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
