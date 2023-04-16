import { createSlice } from '@reduxjs/toolkit';

interface IProps {
  panelURL: 'first-panel' | 'second-panel' | 'third-panel';
  selectPanel: number;
  panelData: {
    arrDate: [];
    arrTime: [];
    arrAmp: [] ;
    arrVolt: [];
    arrWatt: [];
    arrProd: [];
  };
}

const initialState: IProps = {
  panelURL: 'first-panel',
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
    setPanelURL: (state, action) => {
      state.selectPanel = action.payload;
    },
    setSelectPanel: (state, action) => {
      state.selectPanel = action.payload;
    },
    setPanelData: (state, action) => {
      state.panelData = action.payload;
    },
  },
});

export const { setSelectPanel, setPanelData, setPanelURL } = panelSlice.actions;
export default panelSlice.reducer;
