import './MainBox.scss';
import ChartBox from '../ChartBox/ChartBox';

const MainBox = ({ arr, yAxis1, yAxis2 }) => {
  return (
    <div className="mainBox">
      <ChartBox
        arr={arr}
        label={'Сила тока, A'}
        xAxis={'date'}
        yAxis={yAxis1}
        color={'rgb(255, 99, 132)'}
      />
      <ChartBox
        arr={arr}
        label={'Напряжение, V'}
        xAxis={'date'}
        yAxis={yAxis2}
        color={'rgb(28, 134, 255)'}
      />
    </div>
  );
};
export default MainBox;
