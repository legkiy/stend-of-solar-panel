import './MainBox.scss';
import ChartBox from '../ChartBox/ChartBox';

const MainBox = ({ arr, promise }) => {
  return (
    <div className="mainBox">
      <ChartBox
        arr={arr}
        label={'Сила тока, A'}
        yAxis={'amp2'}
        color={'rgb(255, 99, 132)'}
        promise={promise}
      />
      <ChartBox
        arr={arr}
        label={'Напряжение, V'}
        yAxis={'v2'}
        color={'rgb(28, 134, 255)'}
        promise={promise}
      />
    </div>
  );
};
export default MainBox;
