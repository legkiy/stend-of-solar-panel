import './SidePanel.scss';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import SideElement from './SideElement';
import Button from '../Button';
import isemLogo from './isemLogo.png';

interface IProprs {
}

const SidePanel = ({  }: IProprs) => {
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
              <Button options={1} />
              <Button options={2} />
              <Button options={3} />
            </div>
          </>
        }
      />
      <div>{}</div>
    </div>
  );
};
export default SidePanel;
