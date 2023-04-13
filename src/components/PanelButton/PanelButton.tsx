import { setSelectPanel, setPanelData } from '../../features/panel/panelSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import './PanelButton.scss';

interface IProprsPanelButton {
  panelUrl: string;
  options: number;
}

const Button = ({ options, panelUrl }: IProprsPanelButton) => {
  const dispatch = useDispatch();
  const { selectPanel } = useSelector((state: RootState) => state.panel);

  const fetchPandeData = async (panelUrl: string) => {
    fetch(`/${panelUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setPanelData(data)));
    dispatch(setSelectPanel(getChosenPanelNumber()));
  };

  const getChosenPanelNumber = () => {
    switch (panelUrl) {
      case 'first-panel':
        return 1;
      case 'second-panel':
        return 2;
      case 'third-panel':
        return 3;
    }
  };

  if (!selectPanel) {
    fetchPandeData('first-panel');
    dispatch(setSelectPanel(getChosenPanelNumber()));
  }

  return (
    <button
      className={`PanelButton interactive-el ${
        selectPanel === getChosenPanelNumber() ? 'chosen' : ' '
      }`}
      onClick={() => fetchPandeData(panelUrl || 'first-panel')}
    >
      {getChosenPanelNumber()}
    </button>
  );
};
export default Button;
