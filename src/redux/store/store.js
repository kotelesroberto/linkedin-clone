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
import popupModalReducer from "../reducers/popupModalReducer";
import pageNavigationReducer from "../reducers/pageNavigationReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    userState: userReducer,
    postSettingState: postSettingReducer,
    popupModalState: popupModalReducer,
    pageNavigationState: pageNavigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
