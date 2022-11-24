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
            <Button options={1} setPanel={setPanel} />
            <Button options={2} setPanel={setPanel} />
            <Button options={3} setPanel={setPanel} />
          </>
        }
      />
      <div>{panel}</div>
    </div>
  );
};
export default SidePanel;
