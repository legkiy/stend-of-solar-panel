import ChartBox from '../ChartBox';
import './MainBox.scss';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import * as d3 from 'd3';

interface IProps {}

const Main = ({}: IProps) => {
  const selectCsv = useSelector((state: RootState) => state.selectFile.selectCsv);
  const panel = useSelector((state: RootState) => state.panel.selectPanel);

  let csv = `./${selectCsv}.csv`;

  // let url = `https://files.isem.irk.ru/remote.php/dav/files/nikita.max/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0/${selectCsv}.csv`;

  let url =
    'https://files.isem.irk.ru/index.php/apps/files/?dir=/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%B0&openfile=172775';

  const username: 'nikita.max' = 'nikita.max';
  const password: 'E4DqvJacNxSW' = 'E4DqvJacNxSW';

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  // let d3arr: any = [];
  // const cavfile = `./${selectCsv}.csv`;
  // const d3data: any = d3.csv(cavfile, (file: any): any => {
  //   d3arr.push(file);
  // });
  // console.log(d3arr);

  async function getData(el: number) {
    const res = await fetch(csv, {
      mode: 'no-cors',
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

      const amp1 = +columns[2];
      const amp2 = +columns[3];
      const amp3 = +columns[4];
      const v1 = +columns[5];
      const v2 = +columns[6];
      const v3 = +columns[7];

      const amp = [amp1, amp2, amp3];
      const volt = [v1, v2, v3];
      const watt = amp.map((value, index) => value * volt[index]); //считаем мощность панелей умножая каждый эллемент amp на volt
      const prod = watt.map((value) => value / 0.1848); //получаем приход солнечной радицаии учитывая КПД панелей

      arrDate.push(date);
      arrTime.push(time);

      arrAmp.push(amp[el]);
      arrVolt.push(volt[el]);
      arrWatt.push(watt[el]);
      arrProd.push(prod[el]);
    });
  }
  const arrDate: string[] = [];
  const arrTime: string[] = [];
  const arrAmp: number[] = [];
  const arrVolt: number[] = [];
  const arrWatt: number[] = [];
  const arrProd: number[] = [];

  const promise: Promise<void> = getData(panel);
  console.log(arrProd);

  return (
    <div className="mainBox">
      <div className="chart-box">
        <ChartBox
          type={'amp'}
          label={'Сила тока, A'}
          arrDate={arrDate}
          arrTime={arrTime}
          yAxis={arrAmp}
          promise={promise}
          panel={panel}
        />
        <ChartBox
          type={'volt'}
          label={'Напряжение, V'}
          arrDate={arrDate}
          arrTime={arrTime}
          yAxis={arrVolt}
          promise={promise}
          panel={panel}
        />
      </div>
      <div className="chart-box">
        <ChartBox
          type={'watt'}
          label={'Мощность, W'}
          label2={'Радиация, W'}
          arrDate={arrDate}
          arrTime={arrTime}
          yAxis={arrWatt}
          y2Axis={arrProd}
          promise={promise}
          panel={panel}
        />
      </div>
    </div>
  );
};
export default Main;
