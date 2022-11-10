import { useState } from 'react';
import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainBox from './components/MainBox/MainBox';
import csvFile from './components/ChartBox/data/2022-09.csv';

import * as d3 from 'd3';

function App() {
  const [yAxis1, setYAxis] = useState();

  // let csv = '../../../../Downloads/public/2022-09.csv';
  let csv = '/components/ChartBox/data/2022-09.csv';

  let url = `https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/2022-09.csv`;

  let username = 'nikita.max';
  let password = 'E4DqvJacNxSW';

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  async function getData() {
    const res = await fetch(url, {
      headers,
    });
    const data = await res.text();
    console.log(data);
    const table = data.split('\n');
    const tableLenght = table.length - 1;
    const newTable = table.splice(0, tableLenght);
    newTable.forEach((row) => {
      const columns = row.split(',');
      const date = columns[0];
    });
  }

  getData();

  const arr = [];

  const promise = d3.csv(csvFile, function (file) {
    arr.push(file);
  });

  return (
    <div className="App">
      <SidePanel arr={arr} promise={promise} />
      <MainBox arr={arr} promise={promise} />
    </div>
  );
}

export default App;
