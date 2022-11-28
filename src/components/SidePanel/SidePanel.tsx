import './SidePanel.scss';
import SideElement from './SideElement';
import Button from '../Button';
import isemLogo from './isemLogo.png';
import Select from '../Select';

interface IProprs {}

const SidePanel = ({}: IProprs) => {
  const mounthFile = [];
  //цикл для перебора годов
  for (let year = 2022; year < 2051; year++) {
    //цикл для перебора месяцев внутри каждого года
    for (let month = 1; month < 13; month++) {
      //условие минимального значения
      if (year === 2022 && month < 9) month = 9;
      //условие для формата даты месяца меньше 10
      let newMonth: string = String(month);
      if (month < 10) newMonth = '0' + month;

      const monthYear = newMonth + '.' + year;
      const monthYearFile = year + '-' + newMonth;
      mounthFile.push({ option: monthYear, value: monthYearFile });
    }
  }
  console.log(mounthFile);
  return (
    <div className="sidePanel">
      <SideElement
        elementInside={
          <a className="isemLogo" href="https://isem.irk.ru/">
            <img src={isemLogo} alt="logo"></img>
            ИСЭМ СО РАН
          </a>
        }
      />
      <SideElement elementInside={<Select options={mounthFile} />} />
      <SideElement
        elementInside={
          <>
            <p>Выбор панели</p>
            <div>
              <Button options={1} />
              <Button options={2} />
              <Button options={3} />
            </div>
          </>
        }
      />
    </div>
  );
};
export default SidePanel;
