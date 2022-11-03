import { useState } from 'react';
import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainBox from './components/MainBox/MainBox';
import csvFile from './components/ChartBox/data/2022-09.csv';

import * as d3 from 'd3';

function App() {
  const [yAxis1, setYAxis] = useState();
  const arr = [];

  const promise = d3.csv(csvFile, function (file) {
    arr.push(file);
  });

  return (
    <div className="App">
      <SidePanel arr={arr} promise={promise} />
      <MainBox arr={arr} yAxis1={'amp2'} yAxis2={'v2'} promise={promise} />
    </div>
  );
}

export default App;
