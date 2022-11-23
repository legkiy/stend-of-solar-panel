import './App.css';
import csvFile from './components/ChartBox/data/2022-09.csv';
import { useState } from 'react';
import Main from './components/MainBox';
import SidePanel from './components/SidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { setPanelNumber } from './features/panel/panelSlice';
import { RootState } from './store/store';

//date time amp1 amp2 amp3 v1 v2 v3
export interface IMapFile {
  date: string;
  time: string;
  amp1: string;
  amp2: string;
  amp3: string;
  v1: string;
  v2: string;
  v3: string;
}

function App() {
  const [dataFile, setDataFile] = useState('2022-09');
  let csv: string = `/${dataFile}.csv`;

  let url = `https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/${dataFile}.csv`;

  const dispatch = useDispatch();
  const panel = useSelector((state: RootState) => state.panel.panelNumber);

  return (
    <div className="App">
      <SidePanel setPanel={dispatch} />
      <Main panel={panel} />
    </div>
  );
}

export default App;
