import { useEffect, useRef, useState } from 'react';
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
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

ChartJS.defaults.font.family = 'Roboto';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = 'black';

interface IProprs {
  type: 'amp' | 'volt' | 'watt';
  label: string;
  label2?: string;
  arrDate: string[];
  arrTime: string[];
  yAxis: number[];
  y2Axis?: number[];
  promise: Promise<void>;
  panel: number;
}

const ChartBox = ({
  type,
  label,
  label2,
  arrDate,
  arrTime,
  yAxis,
  y2Axis,
  promise,
  panel,
}: IProprs) => {
  const selectCsv = useSelector((state: RootState) => state.selectFile.selectCsv);

  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  let color: string;
  let color2: string;
  let yMax;
  if (type === 'amp') {
    color = 'rgb(255, 8, 0)';
    yMax = 10;
  }
  if (type === 'volt') {
    color = 'rgb(0, 102, 255)';
    yMax = 45;
  }
  if (type === 'watt') {
    color = 'rgb(120, 0, 255)';
    color2 = 'orange';
    yMax = 1000;
  }

  function getDrawChart(labelName: string, axisData: number[], color: string): {} {
    return { label: labelName, data: axisData, borderColor: color };
  }

  const chartRef = useRef<any>();

  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  useEffect(() => {
    promise.then(() => {
      setChartData(
        type === 'watt'
          ? {
              labels: arrDate,
              datasets: [getDrawChart(label, yAxis, color), getDrawChart(label2!, y2Axis!, color2)],
            }
          : {
              labels: arrDate,
              datasets: [getDrawChart(label, yAxis, color)],
            }
      );
    });
  }, [panel, selectCsv]);

  //date time amp1 amp2 amp3 v1 v2 v3

  const options: object = {
    responsive: true,
    maintainAspectRatio: false,
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
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pan: {
            enabled: true,
          },
          mode: 'xy',
        },
        pan: { enabled: true, mode: 'xy' },
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
    <div className="chart">
      <button className="interactive-el" onClick={handleResetZoom}>
        Reset Zoom
      </button>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};
export default ChartBox;
