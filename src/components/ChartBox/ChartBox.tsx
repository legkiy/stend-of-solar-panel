import { useEffect, useState } from 'react';
import './ChartBox.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

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
  const selectCsv = useSelector(
    (state: RootState) => state.selectFile.selectCsv
  );

  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  let color: string;
  let yMax;
  if (type === 'amp') {
    color = 'rgb(0, 102, 255)';
    yMax = 10;
  }
  if (type === 'volt') {
    color = 'rgb(255, 8, 0)';
    yMax = 45;
  }

  useEffect(() => {
    promise.then(() => {
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
  }, [panel, selectCsv]);

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
        max: yMax,
        min: 0,
      },
    },
  };

  return (
    <div className="chartBox">
      {<Line data={chartData} options={options} />}
    </div>
  );
};
export default ChartBox;
