/*=============================================
=            User related reducer slice       =
=============================================*/

import { createSlice } from "@reduxjs/toolkit";

const pageNavigation = createSlice({
  name: "pageNavigationState",
  initialState: {
    loadedURL: "/",
  },
  reducers: {
    setCurrentURL: (state, action) => {
      console.log("pageNavigationState/setCurrentURL");

      return {
        ...state,
        loadedURL: action.loadedURL,
      };
    },
  },
});

export const { setCurrentURL } = pageNavigation.actions;
export default pageNavigation.reducer;
