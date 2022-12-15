import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

export const menuBtnSlice = createSlice({
  name: 'menuBtn',
  initialState,
  reducers: {
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { setMenuOpen } = menuBtnSlice.actions;
export default menuBtnSlice.reducer;
