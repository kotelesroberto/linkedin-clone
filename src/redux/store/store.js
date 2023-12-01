/*=============================================
=            Redux Store                      =
=============================================*/

import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  createUser,
  deleteUser,
  setUser,
} from "../reducers/userReducer";
import postSettingReducer from "../reducers/postSettingsReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    userState: userReducer,
    postSettingState: postSettingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
