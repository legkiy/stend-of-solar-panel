import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectFile: '08.2022',
  selectCsv: '2022-08',
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
