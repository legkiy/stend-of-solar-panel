import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectPanel: 0,
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setSelectPanel: (state, action) => {
      state.selectPanel = action.payload;
    },
  },
});

export const { setSelectPanel } = panelSlice.actions;
export default panelSlice.reducer;
