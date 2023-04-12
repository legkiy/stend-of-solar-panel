import { createSlice } from '@reduxjs/toolkit';

interface IProps {
  selectPanel: number;
  panelData: {
    arrDate: [];
    arrTime: [];
    arrAmp: [];
    arrVolt: [];
    arrWatt: [];
    arrProd: [];
  };
}

const initialState: IProps = {
  selectPanel: 0,
  panelData: {
    arrDate: [],
    arrTime: [],
    arrAmp: [],
    arrVolt: [],
    arrWatt: [],
    arrProd: [],
  },
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setSelectPanel: (state, action) => {
      state.selectPanel = action.payload;
    },
    setPanelData: (state, action) => {
      state.panelData = action.payload;
    },
  },
});

export const { setSelectPanel, setPanelData } = panelSlice.actions;
export default panelSlice.reducer;
