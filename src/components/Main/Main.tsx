import { useState } from 'react';
import ChartBox from '../ChartBox';
import './Main.scss';

interface IProps {
  panel: number;
}

const Main = ({ panel }: IProps) => {
  let csv = '/2022-09.csv';

  const username: 'nikita.max' = 'nikita.max';
  const password: 'E4DqvJacNxSW' = 'E4DqvJacNxSW';

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  async function getData() {
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

      arrAmp.push(amp[panel]);
      arrV.push(volt[panel]);
    });
  }
  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: string[] = [];
  const arrV: string[] = [];

  const promise: Promise<void> = getData();

  return (
    <div className="main">
      <ChartBox
        arrDate={arrDate}
        arrTime={arrTime}
        yAxis={arrAmp}
        promise={promise}
      />
    </div>
  );
};
export default Main;
