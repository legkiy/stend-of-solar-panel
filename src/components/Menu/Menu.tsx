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
  for (let year = 2022; year < 2023; year++) {
    //цикл для перебора месяцев внутри каждого года
    for (let month = 1; month < 12; month++) {
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
          <div className="faqqq">
            <button
              className="interactive-el"
              onClick={() => dispatch(setTooltipVisible(!tooltipVisible))}
            >
              FAQ
            </button>
            <Tooltip
              tooltipName="FAQ"
              discription={
                <>
                  <h3>FAQ</h3>
                </>
              }
            />
          </div>
        }
      />
      <SideElement
        elementInside={
          <div className="faqqq">
            <button
              className="interactive-el"
              onClick={() => dispatch(setTooltipVisible(!tooltipVisible))}
            >
              Доп. информация
            </button>
            <Tooltip
              tooltipName="Доп. информация"
              discription={
                <>
                  <h3>Статьи по проекту</h3>
                  <ul>
                    <li>
                      R. Ivanov, N. Maksakov Development of a solar energy meter for an experimental
                      array // E3S Web of Conferences. Volume 289 (2021), International Conference
                      of Young Scientists "Energy Systems Research 2021"// Irkutsk, Russia, May
                      25-28, 2021. ID: 05001. 2021. DOI: 10.1051/e3sconf/202128905001
                    </li>
                    <li>
                      Иванов Р.А., Максаков Н.В. Организация мониторинга параметров
                      экспериментального стенда солнечных панелей // Информационные и математические
                      технологии в науке и управлении. 2021. - №4. С. DOI:
                      10.38028/ESI.2021.24.4.008
                    </li>
                    <li>
                      R. Ivanov, N. Maksakov A System for Storing and Processing the Results of
                      Energy Test Facility Data Monitoring // Energy Systems Research 2022, Vol. 5,
                      No. 3, P. 21-26. DOI: 10.38028/esr.2022.03.0004
                    </li>
                  </ul>
                  <h4>
                    Работа выполнена в рамках государственного контракта с ФГБУ
                    «Информационно-аналитический центр развития водохозяйственного комплекса» в
                    рамках реализации ФЦП «Охрана озера Байкал и социально-экономическое развитие
                    Байкальской природной территории на 2012-2020 годы». Информационно-аналитическая
                    система разработана при выполнении крупного научного проекта Министерства науки
                    и высшего образования РФ (грант в форме субсидии № 075-15-2020-787).
                    Разработчики информационно-аналитической системы: сотрудники отдела комплексных
                    и региональных проблем энергетики ИСЭМ СО РАН.
                  </h4>
                </>
              }
            />
          </div>
        }
      />
    </div>
  );
};
export default SidePanel;
