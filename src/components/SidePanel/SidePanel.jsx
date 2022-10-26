import './SidePanel.scss';
import isemLogo from './isem-logo.png';

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <div className="side-el">
        <a className="isemLogo" href="https://isem.irk.ru/">
          <img src={isemLogo} alt="logo"></img>
          ИСЭМ СО РАН
        </a>
      </div>
    </div>
  );
};
export default SidePanel;
