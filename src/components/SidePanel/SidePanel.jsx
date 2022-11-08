import './SidePanel.scss';
import isemLogo from './isem-logo.png';
import SideElement from './SideElement/SideElement';
import { useEffect, useState } from 'react';

const SidePanel = ({ arr, promise }) => {
  const [show, setShow] = useState(false);
  const [chosenDataStart, setChosenDataStart] = useState('start');
  const [chosenDataEnd, setChosenDataEnd] = useState('end');

  const days = arr.map((file) => file.date);
  const day = days.filter((item, index) => {
    return days.indexOf(item) === index;
  });

  //get yaer + month for file selection
  function getMonth() {
    let content = [];
    //цикл для перебора годов
    for (let year = 2022; year < 2123; year++) {
      //цикл для перебора месяцев внутри каждого года
      for (let month = 1; month < 13; month++) {
        //условие минимального значения
        if (year === 2022 && month < 8) month = 8;
        //условие для формата даты месяца меньше 10
        if (month < 10) month = '0' + month;

        const monthYear = month + '.' + year;
        const monthYearFile = year + '-' + month;
        content.push(
          <option key={monthYearFile} value={monthYearFile}>
            {monthYear}
          </option>
        );
      }
    }
    return content;
  }

  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise]);

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
      <SideElement
        elementInside={<select className="selecter">{getMonth()}</select>}
      />
      <SideElement
        elementInside={
          <div>
            <select
              className="selecter"
              onChange={(dayStart) => {
                setChosenDataStart(dayStart.target.value);
              }}
            >
              {day.map((dayStart, index) => (
                <option key={index} value={dayStart}>
                  {dayStart}
                </option>
              ))}
            </select>
            -
            <select
              className="selecter"
              onChange={(dayEnd) => {
                setChosenDataEnd(dayEnd.target.value);
              }}
            >
              {day.map((dayEnd, index) => (
                <option key={index} value={dayEnd}>
                  {dayEnd}
                </option>
              ))}
            </select>
          </div>
        }
      />
      <SideElement
        elementInside={
          <p>
            Selected day
            <br />
            {chosenDataStart} - {chosenDataEnd}
          </p>
        }
      />
    </div>
  );
};
export default SidePanel;
