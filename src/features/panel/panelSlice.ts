import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  panelNumber: 0,
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setPanelNumber: (state, action) => {
      state.panelNumber = action.payload;
    },
  },
});

export const { setPanelNumber } = panelSlice.actions;
export default panelSlice.reducer;
