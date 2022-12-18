import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tooltipVisibleAdditionalInf: false,
  tooltipVisibleFAQ: false,
};

export const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    setTooltipVisibleAdditionalInf: (state, action) => {
      state.tooltipVisibleAdditionalInf = action.payload;
    },
    setTooltipVisibleFAQ: (state, action) => {
      state.tooltipVisibleFAQ = action.payload;
    },
  },
});

export const { setTooltipVisibleAdditionalInf, setTooltipVisibleFAQ } = tooltipSlice.actions;
export default tooltipSlice.reducer;
