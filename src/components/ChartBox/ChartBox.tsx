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
  arrDate: string[] | any;
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
  const {
    selectFile: { selectCsv },
    panel: { panelData },
  } = useSelector((state: RootState) => state);

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
    return {
      pointStyle: 'rectRounded',
      pointRadius: 2,
      fill: true,
      backgroundColor: color,
      label: labelName,
      data: axisData,
      borderWidth: 2,
      borderColor: color,
    };
  }

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
  }, [panel, selectCsv, panelData]);

  //date time amp1 amp2 amp3 v1 v2 v3

  const zoom = {
    zoom: {
      wheel: {
        enabled: true,
      },
      pan: {
        enabled: true,
      },
      pinch: {
        enabled: true,
      },
      mode: 'x',
    },
    pan: {
      enabled: true,
      mode: 'x',
      threshold: 10,
    },
    limits: {
      x: { minRange: 24 },
    },
  };

  const options: object = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
      margin: 0,
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        callbacks: {
          footer: function (context: [{ dataIndex: number }]) {
            const index = context[0].dataIndex;
            return arrTime[index];
          },
        },
      },
      zoom,
    },
    scales: {
      y: {
        max: yMax,
        min: 0,
      },
    },
  };

  const chartRef = useRef<any>(null);

  return (
    <div className="chart-and-btn">
      <div className="chart">
        {arrDate.includes(NaN) ? (
          <p>Данные отсутствуют</p>
        ) : (
          <Line ref={chartRef} data={chartData} options={options} />
        )}
      </div>
      <button
        className="interactive-el zoom-reset-btn"
        onClick={() => chartRef.current.resetZoom()}
      >
        Reset Zoom
      </button>
    </div>
  );
};
export default ChartBox;
