import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tooltipVisible: false,
};

export const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    setTooltipVisible: (state, action) => {
      state.tooltipVisible = action.payload;
    },
  },
});

export const { setTooltipVisible } = tooltipSlice.actions;
export default tooltipSlice.reducer;
