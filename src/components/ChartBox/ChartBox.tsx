import { useEffect, useState, useCallback } from 'react';
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
  yAxis: {};
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
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   promise.then(() => {
  //     setShow(true);
  //   });
  // }, [show, promise]);

  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: arrDate,
      datasets: [
        {
          label,
          data: yAxis,
          borderColor: color,
        },
      ],
    });
  });

  //date time amp1 amp2 amp3 v1 v2 v3

  const data = {
    labels: arrDate,
    datasets: [
      {
        label,
        data: yAxis,
        borderColor: color,
      },
    ],
  };

  const options: object = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        // callbacks: {
        //   footer: function (context: [{ dataIndex: number }]) {
        //     const index = context[0].dataIndex;
        //     return arrTime[index];
        //   },
        // },
      },
    },
    animation: false,
  };
  return (
    <div className="chartBox">
      {arrDate ? <Line data={chartData} options={options} /> : null}
    </div>
  );
};
export default ChartBox;
