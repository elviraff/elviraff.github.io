import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    modalActive: false,
    mobileNumber: "",
    checkedData: false,
  },
  reducers: {
    setModal(state, action) {
      state.modalActive = action.payload;
    },
    setMobileNumber(state, action) {
      if (state.mobileNumber.length < 14) {
        if (state.mobileNumber == "") {
          state.mobileNumber += "+7(" + action.payload;
        } else if (state.mobileNumber.length == 5) {
          state.mobileNumber += action.payload + ")";
        } else {
          state.mobileNumber += action.payload;
        }
      }
    },
    deleteMobileNumber(state) {
      state.mobileNumber = state.mobileNumber.slice(
        0,
        state.mobileNumber.length - 1
      );
    },
    setCheckedData(state, action) {
      state.checkedData = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { setModal, setMobileNumber, deleteMobileNumber, setCheckedData } =
  toolkitSlice.actions;
