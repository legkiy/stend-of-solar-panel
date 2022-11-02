import './SidePanel.scss';
import isemLogo from './isem-logo.png';
import { useEffect, useState } from 'react';

const SidePanel = ({ arr }) => {
  const [show, setShow] = useState(false);
  const day = arr.map((file) => file.date);
  const uniq = day.filter((item, index) => {
    return day.indexOf(item) === index;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [show]);

  console.log(uniq);
  return (
    <div className="sidePanel">
      <div className="side-el">
        <a className="isemLogo" href="https://isem.irk.ru/">
          <img src={isemLogo} alt="logo"></img>
          ИСЭМ СО РАН
        </a>
      </div>
      <div className="side-el">
        <select>
          {arr.map((file) => (
            <option value={file.date}>{file.date}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SidePanel;
