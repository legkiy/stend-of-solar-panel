import './Menu.scss';
import SideElement from './SideElement';
import MenuBtn from './MenuBtn';
import PanelButton from '../PanelButton';
import isemLogo from './isemLogo.png';
import Select from '../Select';
import Tooltip from '../Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { setTooltipVisible } from '../../features/tooltip/tooltipSlice';
import { RootState } from '../../store/store';

const SidePanel = () => {
  const dispatch = useDispatch();
  const tooltipVisible = useSelector((state: RootState) => state.tooltip.tooltipVisible);
  const menuOpen = useSelector((state: RootState) => state.menuBtn.menuOpen);

  const mounthFile = [];
  //цикл для перебора годов
  for (let year = 2022; year < 2051; year++) {
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
      <SideElement elementInside={<Select options={mounthFile} />} />
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
          <>
            <div
              className="faq interactive-el"
              onClick={() => dispatch(setTooltipVisible(!tooltipVisible))}
            >
              <p>FAQ</p>
              <Tooltip discription={'вставить ссылки на статьи и опиание'} />
            </div>
          </>
        }
      />
    </div>
  );
};
export default SidePanel;
