/*=============================================
=            User related reducer slice       =
=============================================*/

import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userStateReducer",
  initialState: {
    user: null,
  },
  reducers: {
    userReducer: (state, action) => {
      switch (action.type) {
        // case value:
        //     break;

        default:
          return state;
      }
    },
  },
});

export const { userReducer } = user.actions;
export default user.reducer;
