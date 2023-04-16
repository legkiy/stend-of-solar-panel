import { setSelectPanel } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import './PanelButton.scss';

interface IProprsPanelButton {
  options: number;
}

const Button = ({ options }: IProprsPanelButton) => {
  const dispatch = useDispatch();
  const {
    panel: { selectPanel },
  } = useSelector((state: RootState) => state);

  if (!selectPanel) {
    dispatch(setSelectPanel(0));
  }

  return (
    <button
      className={`PanelButton interactive-el ${selectPanel === options - 1 ? 'chosen' : ' '}`}
      onClick={() => dispatch(setSelectPanel(options - 1))}
    >
      {options}
    </button>
  );
};
export default Button;
