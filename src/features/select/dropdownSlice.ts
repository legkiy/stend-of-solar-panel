import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdawnActive: false,
};

export const dropdawnSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setDropdawnActive: (state, action) => {
      state.dropdawnActive = action.payload;
    },
  },
});

export const { setDropdawnActive } = dropdawnSlice.actions;
export default dropdawnSlice.reducer;
