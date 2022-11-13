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

import { IMapFile } from '../../App';

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

type ChartProps = {
  arr: IMapFile[];
  label: string;
  yAxis: 'amp1' | 'amp2' | 'amp3' | 'v1' | 'v2' | 'v3';
  color: string;
  promise: Promise<d3.DSVRowArray<string>>;
  closeSelect: boolean;
};

const ChartBox = ({
  arr,
  label,
  yAxis,
  color,
  promise,
  closeSelect,
}: ChartProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise, closeSelect]);

  //date time amp1 amp2 amp3 v1 v2 v3
  const date = arr.map((file: IMapFile) => file.date);
  const time = arr.map((file: IMapFile) => file.time);
  const onYaxis = arr.map((file: IMapFile) => file[yAxis]);

  const data = {
    labels: date,
    datasets: [
      {
        label: label,
        data: onYaxis,
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
