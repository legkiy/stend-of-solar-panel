import './SidePanel.scss';
import isemLogo from './isem-logo.png';
import SideElement from './SideElement/SideElement';
import { useEffect, useState } from 'react';

const SidePanel = ({ arr, promise }) => {
  const [show, setShow] = useState(false);

  const days = arr.map((file) => file.date);
  const day = days.filter((item, index) => {
    return days.indexOf(item) === index;
  });

  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise]);

  const [chosenDataStart, setChosenDataStart] = useState();
  const [chosenDataEnd, setChosenDataEnd] = useState();

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
        elementInside={
          <div>
            <select
              className="date-selecter"
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
              className="date-selecter"
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
            Chosen day
            <br />
            {chosenDataStart} - {chosenDataEnd}
          </p>
        }
      />
    </div>
  );
};
export default SidePanel;
