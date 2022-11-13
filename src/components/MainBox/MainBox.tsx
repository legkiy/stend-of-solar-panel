import './MainBox.scss';
import ChartBox from '../ChartBox/ChartBox';
import { IMapFile } from '../../App';

type InputProps = {
  arr: IMapFile[];
  promise: Promise<d3.DSVRowArray<string>>;
  closeSelect:boolean;
};

const MainBox = ({ arr, promise, closeSelect }: InputProps) => {
  return (
    <div className="mainBox">
      <ChartBox
        arr={arr}
        label={'Сила тока, A'}
        yAxis={'amp2'}
        color={'rgb(255, 99, 132)'}
        promise={promise}
        closeSelect={closeSelect}
      />
      <ChartBox
        arr={arr}
        label={'Напряжение, V'}
        yAxis={'v2'}
        color={'rgb(28, 134, 255)'}
        promise={promise}
        closeSelect={closeSelect}
      />
    </div>
  );
};
export default MainBox;
