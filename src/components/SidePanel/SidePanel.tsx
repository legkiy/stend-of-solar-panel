import './SidePanel.scss';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import SideElement from './SideElement';
import Button from '../Button';

interface IProprs {
  panel: number;
  setPanel: Dispatch<AnyAction>;
}

const SidePanel = ({ panel, setPanel }: IProprs) => {
  return (
    <div className="sidePanel">
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
