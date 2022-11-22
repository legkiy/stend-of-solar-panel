import Select from './Select';
import './SidePanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPanelNumber } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';

interface IProprs {
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}

const SidePanel = ({ setPanel }: IProprs) => {
  const dispatch = useDispatch();
  const panel = useSelector((state: RootState) => state.panel.panelNumber);

  return (
    <div className="sidePanel">
      <Select setPanel={setPanel} />
      <div style={{ margin: '20px', background: 'black' }}>
        <input
          onChange={(e) => {
            dispatch(setPanelNumber(e.target.value));
          }}
        />
        <select
          className="select"
          onChange={(e) => {
            dispatch(setPanelNumber(e.target.value));
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
        </select>
      </div>
      <div>{panel}</div>
    </div>
  );
};
export default SidePanel;
