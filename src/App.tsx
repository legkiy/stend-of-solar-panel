import { useState } from 'react';
import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainBox from './components/MainBox/MainBox';
import csvFile from './components/ChartBox/data/2022-09.csv';

import * as d3 from 'd3';

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
  const [yAxis1, setYAxis] = useState();
  const [closeSelect, setCloseSelect] = useState(true);

  // let csv = '../../../../Downloads/public/2022-09.csv';
  let csv: string = '/2022-09.csv';

  let url: string = `https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/2022-09.csv`;

  const username: 'nikita.max' = 'nikita.max';
  const password: 'E4DqvJacNxSW' = 'E4DqvJacNxSW';

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  async function getData() {
    const res = await fetch(csv, {
      headers,
    });
    const data = await res.text();
    const table = data.split('\n');
    const tableLenght = table.length - 1;
    const newTable = table.splice(0, tableLenght);
    newTable.forEach((row) => {
      const columns = row.split(',');
      const date = columns[0];
    });
  }

  getData();

  const arr: IMapFile[] = [];

  const addEl = function (file: IMapFile) {
    arr.push(file);
  };
  //@ts-ignore
  const promise: Promise<d3.DSVRowArray<string>> = d3.csv(csvFile, addEl);

  return (
    <div className="App">
      <SidePanel arr={arr} promise={promise} closeSelect={closeSelect} />
      <MainBox arr={arr} promise={promise} closeSelect={closeSelect} />
    </div>
  );
}

export default App;
