import { useState, useEffect } from 'react';
import ChartBox from '../ChartBox';
import './MainBox.scss';

interface IProps {
  panel: number;
}

const Main = ({ panel }: IProps) => {
  let csv = '/2022-09.csv';

  const username: 'nikita.max' = 'nikita.max';
  const password: 'E4DqvJacNxSW' = 'E4DqvJacNxSW';

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  async function getData(el: number) {
    const res = await fetch(csv, {
      headers,
    });
    const data = await res.text();
    const table = data.split(/\n/);
    const tableLenght = table.length - 2;
    const newTable = table.splice(1, tableLenght);
    newTable.forEach((row) => {
      const columns = row.split(',');
      const date = columns[0];
      const time = columns[1];

      const amp1 = columns[2];
      const amp2 = columns[3];
      const amp3 = columns[4];
      const v1 = columns[5];
      const v2 = columns[6];
      const v3 = columns[7];

      const amp = [amp1, amp2, amp3];
      const volt = [v1, v2, v3];

      arrDate.push(date);
      arrTime.push(time);

      arrAmp.push(amp[el]);
      arrVolt.push(volt[el]);
    });
  }
  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: string[] = [];
  const arrVolt: string[] = [];

  const promise: Promise<void> = getData(panel);
  console.log(panel);

  return (
    <div className="mainBox">
      <ChartBox
        type={'amp'}
        label={'Сила тока, A'}
        arrDate={arrDate}
        arrTime={arrTime}
        yAxis={arrAmp}
        promise={promise}
      />
      <ChartBox
        type={'volt'}
        label={'Напряжение, V'}
        arrDate={arrDate}
        arrTime={arrTime}
        yAxis={arrVolt}
        promise={promise}
      />
    </div>
  );
};
export default Main;
