import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectFile: '...',
};

export const selectFileSlice = createSlice({
  name: 'selectFile',
  initialState,
  reducers: {
    setSelectFile: (state, action) => {
      state.selectFile = action.payload;
    },
  },
});

export const { setSelectFile } = selectFileSlice.actions;
export default selectFileSlice.reducer;
