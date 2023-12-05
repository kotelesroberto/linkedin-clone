/*=============================================
=            User related reducer slice       =
=============================================*/

import { createSlice } from "@reduxjs/toolkit";

const postSetting = createSlice({
  name: "postSettingState",
  initialState: {
    postSetting: {
      visibiity: "anyone",
    },
  },
  reducers: {
    setPostVisibility: (state, action) => {
      console.log("postSettingState/setPostVisibility");

      return {
        ...state,
        postSetting: {
          visibiity: action.postSetting.visibiity,
        },
      };
    },
    setImageUploadSuccess: (state, action) => {
      console.log("postSettingState/setImageUploadSuccess");
      return {
        ...state,
        isNewPostImageUploadDone: action.isNewPostImageUploadDone,
      };
    },
  },
});

export const { setPostVisibility, setImageUploadSuccess } = postSetting.actions;
export default postSetting.reducer;
