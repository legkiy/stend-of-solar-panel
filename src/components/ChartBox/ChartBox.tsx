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
import { color } from 'd3';

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
  type: 'amp' | 'volt';
  label: string;
  arrDate: string[];
  arrTime: string[];
  yAxis: any;
  promise: Promise<void>;
  panel: number;
}

const ChartBox = ({
  type,
  label,
  arrDate,
  arrTime,
  yAxis,
  promise,
  panel,
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

  function typeOfChart(el: 'color' | 'max') {
    let color: string;
    let max: number;
    if (el === 'color') {
      if (type === 'amp') {
        return (color = 'rgb(0, 102, 255)');
      } else if (type === 'volt') {
        return (color = 'rgb(255, 8, 0)');
      }
    }
    if (el === 'max') {
      if (type === 'amp') return (max = 10);
      else if (type === 'volt') return (max = 45);
    }
  }
  useEffect(() => {
    promise.then(() => {
      setChartData({
        labels: arrDate,
        datasets: [
          {
            label,
            data: yAxis,
            borderColor: typeOfChart('color'),
          },
        ],
      });
    });
  }, [panel]);

  //date time amp1 amp2 amp3 v1 v2 v3

  const options: object = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          footer: function (context: [{ dataIndex: number }]) {
            const index = context[0].dataIndex;
            return arrTime[index];
          },
        },
      },
    },
    scales: {
      y: {
        max: typeOfChart('max'),
        min: 0,
      },
    },
  };
  return (
    <div className="chartBox">
      {arrDate ? <Line data={chartData} options={options} /> : null}
    </div>
  );
};
export default ChartBox;
