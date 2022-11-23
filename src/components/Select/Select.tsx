import './Select.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPanelNumber } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';

interface IProprs {
  setPanel: Dispatch<AnyAction>;
}
const Select = ({ setPanel }: IProprs) => {
  return (
    <div className="select">
      default
      <span></span>
    </div>
    // <select
    //   className="select"
    //   onChange={(e) => {
    //     setPanel(setPanelNumber(e.target.value));
    //   }}
    // >
    //   <option style={{ background: 'black' }} value={0}>
    //     0
    //   </option>
    //   <option value={1}>1</option>
    //   <option value={2}>2</option>
    // </select>
  );
};
export default Select;
