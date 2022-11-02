import { useEffect, useState } from 'react';
import './ChartBox.scss';
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

const ChartBox = ({ arr, label, xAxis, yAxis, color }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [show]);

  //date time amp1 amp2 amp3 v1 v2 v3
  const day = arr.map((file) => file.date);
  const time = arr.map((file) => file.time);
  const onXaxis = arr.map((file) => file[xAxis]);
  const onYaxis = arr.map((file) => file[yAxis]);

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

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          footer: function (context) {
            if (time === time) {
              return time;
            }
          },
        },
      },
    },
  };

  return (
    <div className="chartBox">
      <Line data={data} options={options} />
    </div>
  );
};
export default ChartBox;
