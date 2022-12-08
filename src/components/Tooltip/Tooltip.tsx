import './Tooltip.scss';
import { setTooltipVisible } from '../../features/tooltip/tooltipSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  discription: string;
}

const DropDown = ({ discription }: IProps) => {
  const dispatch = useDispatch();
  const tooltipVisible = useSelector((state: RootState) => state.tooltip.tooltipVisible);
  console.log(tooltipVisible);

  return (
    <div className={`tooltip ${tooltipVisible ? 'tooltipActive' : 'tooltipDeactive'}`}>
      {discription}
    </div>
  );
};
export default DropDown;
