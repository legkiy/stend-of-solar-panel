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

  const [chosenData, setChosenData] = useState();

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
          <select
            className="date-selecter"
            onChange={(day) => {
              setChosenData(day.target.value);
            }}
          >
            {day.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        }
      />
      <SideElement
        elementInside={
          <p>
            Chosen day
            <br />
            {chosenData}
          </p>
        }
      />
    </div>
  );
};
export default SidePanel;
