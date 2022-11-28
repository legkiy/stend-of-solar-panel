import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectFile: '09.2022',
  selectCsv: '2022-09',
};

export const selectFileSlice = createSlice({
  name: 'selectFile',
  initialState,
  reducers: {
    setSelectFile: (state, action) => {
      state.selectFile = action.payload;
    },
    setSelectCsv: (state, action) => {
      state.selectCsv = action.payload;
    },
  },
});

export const { setSelectFile, setSelectCsv } = selectFileSlice.actions;

export default selectFileSlice.reducer;
