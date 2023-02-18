import ChartBox from '../ChartBox';
import './MainBox.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
//@ts-ignore
import * as streamedian from 'streamedian/player.js';
//@ts-ignore
import RTSPClient from 'wsp/client/rtsp/client';

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

  async function getData(el: number) {
    const res = await fetch(csv, {
      mode: 'no-cors',
      headers,
    });
    const data = await res.text();
    const table = data.split(/\n/);
    if (table.includes('Card initialized.\r')) {
      const index = table.indexOf('Card initialized.\r');
      table.splice(index, 1);
    }

    const tableLenght = table.length - 2;
    const newTable = table.splice(1, tableLenght);
    newTable.forEach((row) => {
      const columns = row.split(',');

      const getNull = (date: number) => {
        let result = String(date);
        if (date < 10) {
          result = '0' + String(date);
        }
        return result;
      };
      const date = columns[0].split('.');
      const dateFormat = new Date(+(20 + date[2]), +date[1] - 1, +date[0]);

      // const day = getNull(dateFormat.getDate());
      // const month = getNull(dateFormat.getMonth());
      // const yaer = dateFormat.getFullYear();

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
      const prod = watt.map((value) => value / (0.1848 * 1.64 * 0.99)); //получаем приход солнечной радицаии учитывая КПД и площадь панелей

      arrDate.push(
        dateFormat.getDate() +
          '/' +
          (+dateFormat.getMonth() + 1 < 10
            ? '0' + (+dateFormat.getMonth() + 1)
            : +dateFormat.getMonth() + 1) +
          '/' +
          dateFormat.getFullYear()
      ); //d.m.t
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
  const source =
    'rtsp://admin:Password@192.168.31.53:554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif';

  // let mediaElement = RTSPClient .attach(document.getElementById('test_video'));
  // let player = new streamedian.WSPlayer(mediaElement, {
  //   // url: `${STREAM_URL}`,      // overrides mediaElement's sources
  //   modules: [
  //     {
  //       // client module constructor. Should be subclass or BaseClient. RTSPClient by default
  //       // client: RTSPClient,
  //       transport: {
  //         // client module constructor. Should be subclass or BaseTransport. WebsocketTransport by default
  //         // constructor: WebsocketTransport,
  //         options: {
  //           // address of websocket proxy described below. ws${location.protocol=='https:'?'s':''}://${location.host}/ws/ by default
  //           socket: 'ws://websocket_proxy_address/ws',
  //         },
  //       },
  //     },
  //   ],
  // });

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
          label2={'Радиация, W/m2'}
          arrDate={arrDate}
          arrTime={arrTime}
          yAxis={arrWatt}
          y2Axis={arrProd}
          promise={promise}
          panel={panel}
        />
        <div className="chart-and-btn">
          <video id="test_video" controls autoPlay={true} src={source}></video>
        </div>
      </div>
    </div>
  );
};
export default Main;
