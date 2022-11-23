import Select from '../Select';
import './SidePanel.scss';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import SideElement from './SideElement';

interface IProprs {
  panel: number;
  setPanel: Dispatch<AnyAction>;
}

const SidePanel = ({ panel, setPanel }: IProprs) => {
  return (
    <div className="sidePanel">
      <SideElement elementInside={<Select setPanel={setPanel} />} />
      <SideElement elementInside={<div></div>} />
      <Select setPanel={setPanel} />
      <div>{panel}</div>
    </div>
  );
};
export default SidePanel;
