import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainBox from './components/MainBox/MainBox';
import csvFile from './components/ChartBox/data/2022-09.csv';

import * as d3 from 'd3';
import { useState, useEffect } from 'react';

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
    const table = data.split(/\n/).slice(1);
    const tableLenght = table.length - 1;
    const newTable = table.splice(0, tableLenght);
    newTable.forEach((row) => {
      const columns = row.split(',');
      const date = columns[0];
      const time = columns[1];
      const amp1 = Number(columns[2]);
      const amp2 = Number(columns[3]);
      const amp3 = Number(columns[4]);
      const v1 = Number(columns[5]);
      const v2 = Number(columns[6]);
      const v3 = Number(columns[7]);

      arrDate.push(date);
      arrTime.push(time);

      arrAmp.push(amp2);
      arrV.push(v2);
    });
  }

  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: number[] = [];
  const arrV: number[] = [];

  getData();

  const arr: IMapFile[] = [];

  const addEl: any = function (file: IMapFile) {
    arr.push(file);
  };

  const promise: Promise<d3.DSVRowArray<string>> = d3.csv(csvFile, addEl);

  return (
    <div className="App">
      <SidePanel
        arr={arr}
        promise={promise}
        arrDate={arrDate}
        setDataFile={setDataFile}
      />
      <MainBox
        arr={arr}
        promise={promise}
        arrDate={arrDate}
        arrTime={arrTime}
        arrAmp={arrAmp}
        arrV={arrV}
      />
    </div>
  );
}

export default App;
