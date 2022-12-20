import './App.css';
import Main from './components/MainBox';
import Menu from './components/Menu';
import {
  setTooltipVisibleAdditionalInf,
} from './features/tooltip/tooltipSlice';
import Tooltip from './components/Tooltip';

//date time amp1 amp2 amp3 v1 v2 v3

function App() {

  return (
    <div className="App">
      <div className="myApp">
        <Menu />
        <Main />
        <Tooltip
          dispatchFn={setTooltipVisibleAdditionalInf}
          nameTooltip={'tooltipVisibleAdditionalInf'}
          discription={
            <>
              <h3>Статьи по проекту</h3>
              <ul>
                <li>
                  R. Ivanov, N. Maksakov Development of a solar energy meter for an experimental
                  array // E3S Web of Conferences. Volume 289 (2021), International Conference of
                  Young Scientists "Energy Systems Research 2021"// Irkutsk, Russia, May 25-28,
                  2021. ID: 05001. 2021. DOI: 10.1051/e3sconf/202128905001
                </li>
                <li>
                  Иванов Р.А., Максаков Н.В. Организация мониторинга параметров экспериментального
                  стенда солнечных панелей // Информационные и математические технологии в науке и
                  управлении. 2021. - №4. С. DOI: 10.38028/ESI.2021.24.4.008
                </li>
                <li>
                  R. Ivanov, N. Maksakov A System for Storing and Processing the Results of Energy
                  Test Facility Data Monitoring // Energy Systems Research 2022, Vol. 5, No. 3, P.
                  21-26. DOI: 10.38028/esr.2022.03.0004
                </li>
              </ul>
              <h4>
                Работа выполнена в рамках государственного контракта с ФГБУ
                «Информационно-аналитический центр развития водохозяйственного комплекса» в рамках
                реализации ФЦП «Охрана озера Байкал и социально-экономическое развитие Байкальской
                природной территории на 2012-2020 годы». Информационно-аналитическая система
                разработана при выполнении крупного научного проекта Министерства науки и высшего
                образования РФ (грант в форме субсидии № 075-15-2020-787). Разработчики
                информационно-аналитической системы: сотрудники отдела комплексных и региональных
                проблем энергетики ИСЭМ СО РАН.
              </h4>
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
