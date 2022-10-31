import { useEffect, useState } from 'react';
import './ChartBox.scss';
import * as d3 from 'd3';
import csvFile from './data/2022-09.csv';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.font.family = 'PT Sans';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = 'black';

const arr = [];
//date time amp1 amp2 amp3 v1 v2 v3
d3.csv(csvFile, function (file) {
  arr.push(file);
});

const ChartBox = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, [show]);

  const day = arr.map((file) => file.date);
  const amp = arr.map((file) => file.amp2);
  console.log(arr);
  console.log(day);
  const data = {
    labels: day,
    datasets: [
      {
        label: 'amp',
        data: amp,
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const options = {};

  return (
    <div className="chartBox">
      <Line data={data} options={options} />
    </div>
  );
};
export default ChartBox;
