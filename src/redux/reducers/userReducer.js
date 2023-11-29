/*=============================================
=            User related reducer slice       =
=============================================*/

import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userState",
  initialState: {
    user: null,
  },
  reducers: {
    createUser(state, action) {
      console.log("userReducer/reducers/createUser");
      return state;
    },
    deleteUser(state, action) {
      console.log("userReducer/reducers/deleteUser");
      return state;
    },
    setUser: (state, action) => {
      console.log("userReducer/reducers/setUser");

      return {
        ...state,
        user: action.user,
      };
    },
  },
});

export const { createUser, deleteUser, setUser } = user.actions;
export default user.reducer;
