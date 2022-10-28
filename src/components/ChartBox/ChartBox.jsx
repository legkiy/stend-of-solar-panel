import './ChartBox.scss';
import * as d3 from 'd3';
import csvFile from './data/2022-09.csv';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBox = () => {
  const solarData = d3.csv(csvFile, function (data) {
    let newData;
    for (let key in data) {
      newData += data;
    }
    console.log(newData);
  });

  return <div className="chartBox"></div>;
};
export default ChartBox;
