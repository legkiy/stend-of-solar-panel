import Select from './Select';
import './SidePanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPanelNumber } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';

interface IProprs {
  panel: number;
  setPanel: Dispatch<AnyAction>;
}

const SidePanel = ({ panel, setPanel }: IProprs) => {
  return (
    <div className="sidePanel">
      <div style={{ margin: '20px', background: 'black' }}>
        <select
          className="select"
          onChange={(e) => {
            setPanel(setPanelNumber(e.target.value));
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>
      <div>{panel}</div>
    </div>
  );
};
export default SidePanel;
