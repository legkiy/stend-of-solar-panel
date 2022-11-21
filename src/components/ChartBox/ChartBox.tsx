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

interface IProprs {
  label: string;
  arrDate: string[];
  arrTime: string[];
  yAxis: string[];
  color: string;
  promise: Promise<void>;
}

const ChartBox = ({
  label,
  arrDate,
  arrTime,
  yAxis,
  color,
  promise,
}: IProprs) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise]);
  //date time amp1 amp2 amp3 v1 v2 v3
  const onXaxis = arrDate.map((file) => {
    return file;
  });
  const time = arrTime.map((file) => {
    return file;
  });

  console.log(yAxis);
  const data = {
    labels: onXaxis,
    datasets: [
      {
        label,
        data: yAxis,
        borderColor: color,
      },
    ],
  };

  const options: object = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          footer: function (context: [{ dataIndex: number }]) {
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
