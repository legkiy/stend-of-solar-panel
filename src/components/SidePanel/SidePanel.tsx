import './SidePanel.scss';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import SideElement from './SideElement';
import Button from '../Button';
import isemLogo from './isemLogo.png';

interface IProprs {
  panel: number;
  setPanel: Dispatch<AnyAction>;
}

const SidePanel = ({ panel, setPanel }: IProprs) => {
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
          <>
            <p>Select panel</p>
            <div>
              <Button options={1} setPanel={setPanel} panel={panel} />
              <Button options={2} setPanel={setPanel} panel={panel} />
              <Button options={3} setPanel={setPanel} panel={panel} />
            </div>
          </>
        }
      />
      <div>{panel}</div>
    </div>
  );
};
export default SidePanel;
