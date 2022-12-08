import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdownActive: false,
};

export const dropdawnSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setDropdownActive: (state, action) => {
      state.dropdownActive = action.payload;
    },
  },
});

export const { setDropdownActive } = dropdawnSlice.actions;
export default dropdawnSlice.reducer;
