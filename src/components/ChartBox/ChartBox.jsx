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

ChartJS.defaults.font.family = 'Roboto';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = 'black';

const ChartBox = ({ arr, label, xAxis, yAxis, color, promise }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise]);

  //date time amp1 amp2 amp3 v1 v2 v3
  const time = arr.map((file) => file.time);
  const onXaxis = arr.map((file) => file[xAxis]);
  const onYaxis = arr.map((file) => file[yAxis]);
  const uniq = time.filter((item, index) => {
    return time.indexOf(item) === index;
  });

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
            const index = context[0].dataIndex;

            return time[index];
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
