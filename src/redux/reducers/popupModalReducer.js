/*=============================================
=            User related reducer slice       =
=============================================*/

import { createSlice } from "@reduxjs/toolkit";

const popupModalReducer = createSlice({
  name: "popupModalState",
  initialState: {
    popupModal: {
      showModal: "",
      previousShowModal: "",
    },
  },
  reducers: {
    setShowModal: (state, action) => {
      console.log("popupModalState/setShowModal");

      return {
        ...state,
        popupModal: {
          ...state.popupModal,
          showModal: action.popupModal.showModal,
        },
      };
    },
    setPreviousShowModal: (state, action) => {
      console.log("popupModalState/setPreviousShowModal");

      return {
        ...state,
        popupModal: {
          ...state.popupModal,
          previousShowModal: action.popupModal.previousShowModal,
        },
      };
    },
  },
});

export const { setShowModal, setPreviousShowModal } = popupModalReducer.actions;
export default popupModalReducer.reducer;
