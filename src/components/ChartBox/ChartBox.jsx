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

d3.csv(csvFile, function (file) {
  arr.push(file);
});

const ChartBox = ({label, Xaxis, Yaxis, color }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [show]);

  const onXaxis = arr.map((file) => file[Xaxis]);
  const onYaxis = arr.map((file) => file[Yaxis]); //date time amp1 amp2 amp3 v1 v2 v3
  console.log(arr);
  console.log(onXaxis);

  const data = {
    labels: onXaxis,
    datasets: [
      {
        label: label,
        data: onYaxis,
        borderColor: color,
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
