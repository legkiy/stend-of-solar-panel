import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setSelectPanel } from '../../features/panel/panelSlice';
import './Button.scss';

interface IProprsButton {
  options: number;
  setPanel: Dispatch<AnyAction>;
}

const Button = ({ options, setPanel }: IProprsButton) => {
  return (
    <button
      className="button"
      value={options - 1}
      onClick={() => setPanel(setSelectPanel(options - 1))}
    >
      {options}
    </button>
  );
};
export default Button;
