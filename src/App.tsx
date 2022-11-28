import './App.css';
import csvFile from './components/ChartBox/data/2022-09.csv';
import { useState } from 'react';
import Main from './components/MainBox';
import SidePanel from './components/SidePanel';

//date time amp1 amp2 amp3 v1 v2 v3

function App() {
  const [dataFile, setDataFile] = useState('2022-09');
  let csv: string = `/${dataFile}.csv`;

  let url = `https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/${dataFile}.csv`;

  return (
    <div className="App">
      <SidePanel />
      <Main />
    </div>
  );
}

export default App;
