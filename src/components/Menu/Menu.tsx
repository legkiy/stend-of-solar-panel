import './Menu.scss';
import SideElement from './SideElement';
import MenuBtn from './MenuBtn';
import PanelButton from '../PanelButton';
import isemLogo from './isemLogo.png';
import Select from '../Select';
import { useDispatch, useSelector } from 'react-redux';
import { setTooltipVisibleAdditionalInf } from '../../features/tooltip/tooltipSlice';
import { setPanelData } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { useEffect } from 'react';

const SidePanel = () => {
  const dispatch = useDispatch();
  const tooltipVisibleAdditionalInf = useSelector(
    (state: RootState) => state.tooltip.tooltipVisibleAdditionalInf
  );

  const {
    menuBtn: { menuOpen },
    panel: { panelURL, selectPanel, panelData },
    selectFile: { selectCsv },
  } = useSelector((state: RootState) => state);

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

  // получаем данные с бэка
  useEffect(() => {
    fetch(`/panel-${selectPanel}/${selectCsv}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setPanelData(data)));
  }, [selectPanel, panelURL, selectCsv]);

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
              <PanelButton options={1} />
              <PanelButton options={2} />
              <PanelButton options={3} />
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
    </div>
  );
};
export default SidePanel;
