import { setSelectPanel } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

import './Button.scss';

interface IProprsButton {
  options: number;
}

const Button = ({ options }: IProprsButton) => {
  const setPanel = useDispatch();
  const panel = useSelector((state: RootState) => state.panel.selectPanel);

  const value = options - 1;
  return (
    <button
      className={`button ${value === panel ? 'chosen' : ' '}`}
      onClick={() => setPanel(setSelectPanel(value))}
    >
      {options}
    </button>
  );
};
export default Button;
