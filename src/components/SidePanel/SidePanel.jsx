import './SidePanel.scss';
import isemLogo from './isem-logo.png';
import { useEffect, useState } from 'react';

const SidePanel = ({ arr }) => {
  const [show, setShow] = useState(false);
  const days = arr.map((file) => file.date);
  const day = days.filter((item, index) => {
    return days.indexOf(item) === index;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [show]);

  console.log(days);
  return (
    <div className="sidePanel">
      <div className="side-el">
        <a className="isemLogo" href="https://isem.irk.ru/">
          <img src={isemLogo} alt="logo"></img>
          ИСЭМ СО РАН
        </a>
      </div>
      <div className="side-el">
        <select className="select-date">
          {day.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SidePanel;
