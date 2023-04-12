import { setSelectPanel } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

import './PanelButton.scss';

interface IProprsPanelButton {
  options: number;
}

const Button = ({ options }: IProprsPanelButton) => {
  const setPanel = useDispatch();
  const { selectPanel } = useSelector((state: RootState) => state.panel);

  const value = options + 1;
  return (
    <button
      className={`PanelButton interactive-el ${options === selectPanel ? 'chosen' : ' '}`}
      onClick={() => setPanel(setSelectPanel(options))}
    >
      {value}
    </button>
  );
};
export default Button;
