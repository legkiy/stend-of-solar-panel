import './MainBox.scss';
import ChartBox from '../ChartBox/ChartBox';
import { IMapFile } from '../../App';

type InputProps = {
  arr: IMapFile[];
  promise: Promise<d3.DSVRowArray<string>>;
  arrDate: string[];
  arrTime: string[];
  arrAmp: number[];
  arrV: number[];
};

const MainBox = ({
  arr,
  promise,
  arrDate,
  arrTime,
  arrAmp,
  arrV,
}: InputProps) => {
  return (
    <div className="mainBox">
      <ChartBox
        arr={arr}
        label={'Сила тока, A'}
        yAxis={'amp2'}
        xAxis={arrDate}
        arrTime={arrTime}
        color={'rgb(255, 99, 132)'}
        promise={promise}
        arrYaxis={arrAmp}
      />
      <ChartBox
        arr={arr}
        label={'Напряжение, V'}
        yAxis={'v2'}
        xAxis={arrDate}
        arrTime={arrTime}
        color={'rgb(28, 134, 255)'}
        promise={promise}
        arrYaxis={arrV}
      />
    </div>
  );
};
export default MainBox;
