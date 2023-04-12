import './Menu.scss';
import SideElement from './SideElement';
import MenuBtn from './MenuBtn';
import PanelButton from '../PanelButton';
import isemLogo from './isemLogo.png';
import Select from '../Select';
import { useDispatch, useSelector } from 'react-redux';
import { setTooltipVisibleAdditionalInf } from '../../features/tooltip/tooltipSlice';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';

const SidePanel = () => {
  const dispatch = useDispatch();
  const tooltipVisibleAdditionalInf = useSelector(
    (state: RootState) => state.tooltip.tooltipVisibleAdditionalInf
  );

  const menuOpen = useSelector((state: RootState) => state.menuBtn.menuOpen);

  const mounthFile = [];
  //цикл для перебора годов
  for (let year = 2022; year < 2024; year++) {
    //цикл для перебора месяцев внутри каждого года
    for (let month = 1; month < 13; month++) {
      //условие минимального значения
      if (year === 2022 && month < 8) month = 8;
      //условие для формата даты месяца меньше 10
      let newMonth: string = String(month);
      if (month < 10) newMonth = '0' + month;

      const monthYear = newMonth + '.' + year;
      const monthYearFile = year + '-' + newMonth;
      mounthFile.push({ option: monthYear, value: monthYearFile });
    }
  }

  const [data, setData] = useState('Empty');

  const [data2, setData2] = useState('Empty');

  const [dataBtn, setDataBtn] = useState(false);

  useEffect(() => {
    fetch('/test')
      .then((res) => res.json())
      .then((data) => setData(data.test));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3030/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => setData2(data));
    console.log(data2);
  }, [dataBtn]);

  console.log(dataBtn);
  

  return (
    <div className={`menu ${menuOpen && 'menu-open'}`}>
      <SideElement
        elementInside={
          <div style={{ display: 'flex' }}>
            <a className="isemLogo" href="https://isem.irk.ru/">
              <img src={isemLogo} alt="logo"></img>
              ИСЭМ СО РАН
            </a>
            <MenuBtn />
          </div>
        }
      />
      <SideElement
        elementInside={
          <>
            <Select options={mounthFile} />
          </>
        }
      />
      <SideElement
        elementInside={
          <>
            <p>Выбор панели</p>
            <div>
              <PanelButton options={0} />
              <PanelButton options={1} />
              <PanelButton options={2} />
            </div>
          </>
        }
      />
      <SideElement
        elementInside={
          <button
            className="interactive-el"
            onClick={() => dispatch(setTooltipVisibleAdditionalInf(!tooltipVisibleAdditionalInf))}
          >
            Доп. информация
          </button>
        }
      />
      <SideElement elementInside={<p>{data}</p>} />
      <SideElement
        elementInside={
          <>
            <button onClick={() => setDataBtn((prev) => !prev)}>get data</button>
            <div className="data"></div>
          </>
        }
      />
    </div>
  );
};
export default SidePanel;
