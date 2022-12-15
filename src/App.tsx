import './App.css';
import csvFile from './components/ChartBox/data/2022-09.csv';
import { useState } from 'react';
import Main from './components/MainBox';
import Menu from './components/Menu';

//date time amp1 amp2 amp3 v1 v2 v3

function App() {
  const [dataFile, setDataFile] = useState('2022-09');
  let csv: string = `/${dataFile}.csv`;

  return (
    <div className="App">
      <div className="myApp">
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
