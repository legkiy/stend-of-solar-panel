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
ChartJS.defaults.font.family = 'PT Sans';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = 'black';

const ChartBox = () => {
  const arr = [];
  d3.csv(csvFile, function (file) {
    arr.push(file);
  });
  console.log(arr);

  const data = {};

  const options = {};

  return <div className="chartBox"></div>;
};
export default ChartBox;
