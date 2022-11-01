import './MainBox.scss';
import ChartBox from '../ChartBox/ChartBox';

const MainBox = () => {
  return (
    <div className="mainBox">
      <ChartBox
        label={'Сила тока, A'}
        Xaxis={'date'}
        Yaxis={'amp2'}
        color={'rgb(255, 99, 132)'}
      />
      <ChartBox
        label={'Напряжение, V'}
        Xaxis={'date'}
        Yaxis={'v2'}
        color={'rgb(28, 134, 255)'}
      />
    </div>
  );
};
export default MainBox;
