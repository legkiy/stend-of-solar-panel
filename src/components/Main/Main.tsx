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

      const amp = [{ amp1 }, { amp2 }, { amp3 }];
      const volt = [{ v1 }, { v2 }, { v3 }];

      arrDate.push(date);
      arrTime.push(time);

      arrAmp.push(amp);
      arrV.push(volt);
    });
  }
  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: Array<{}> = [];
  const arrV: Array<{}> = [];

  const promise: Promise<void> = getData();

  const check = arrAmp.map((file) => {
    file[0];
  });
  console.log(check);

  return (
    <div className="main">
      <ChartBox
        label={'Сила тока, A'}
        arrDate={arrDate}
        arrTime={arrTime}
        yAxis={arrAmp[panel]}
        color={'rgb(0, 102, 255)'}
        promise={promise}
      />
      <ChartBox
        label={'Напряжение, V'}
        arrDate={arrDate}
        arrTime={arrTime}
        yAxis={arrV[panel]}
        color={'rgb(255, 8, 0)'}
        promise={promise}
      />
    </div>
  );
};
export default Main;
