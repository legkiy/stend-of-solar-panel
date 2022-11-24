import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setSelectPanel } from '../../features/panel/panelSlice';
import './Button.scss';

interface IProprsButton {
  options: number;
  setPanel: Dispatch<AnyAction>;
  panel: number;
}

const Button = ({ options, setPanel, panel }: IProprsButton) => {
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
