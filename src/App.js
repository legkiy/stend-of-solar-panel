import { useState } from 'react';
import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainBox from './components/MainBox/MainBox';
import csvFile from './components/ChartBox/data/2022-09.csv';

import * as d3 from 'd3';

const arr = [];

d3.csv(csvFile, function (file) {
  arr.push(file);
});

function App() {
  const [yAxis1, setYAxis] = useState();

  return (
    <div className="App">
      <SidePanel arr={arr}/>
      <MainBox arr={arr} yAxis1={'amp2'} yAxis2={'v2'} />
    </div>
  );
}

export default App;
