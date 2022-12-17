import './Tooltip.scss';
import { setTooltipVisible } from '../../features/tooltip/tooltipSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ReactNode } from 'react';

interface IProps {
  tooltipName: string;
  discription: ReactNode;
}

const DropDown = ({ tooltipName, discription }: IProps) => {
  const dispatch = useDispatch();
  const tooltipVisible = useSelector((state: RootState) => state.tooltip.tooltipVisible);

  const svgSquare = 24;
  const lineLeft = 3;
  const lineTop = lineLeft;
  const lineRight = svgSquare - lineLeft;
  const lineBottom = svgSquare - lineTop;

  const tooltipHeight = 80;
  const tooltipWidht = 90;
  const hMidle = (100 - tooltipHeight) / 2;
  const wMidle = (100 - tooltipWidht) / 2;

  const getTooltipVisible = { top: `${hMidle}%`, left: `${wMidle}%` };
  const getTooltipNoVisible = { top: '-100vh', left: `${wMidle}%` };

  return (
    <div className={`tooltip`} style={tooltipVisible ? getTooltipVisible : getTooltipNoVisible}>
      <button
        className="tooltip-btn interactive-el"
        onClick={() => dispatch(setTooltipVisible(!tooltipVisible))}
      >
        <svg height={svgSquare} width={svgSquare}>
          <g
            style={{
              stroke: 'black',
              strokeWidth: '3px',
              strokeLinecap: 'round',
            }}
          >
            <line x1={lineLeft} y1={lineTop} x2={lineRight} y2={lineBottom}></line>
            <line x1={lineLeft} y1={lineBottom} x2={lineRight} y2={lineTop}></line>
          </g>
        </svg>
      </button>
      <div className="tooltip-content">{discription}</div>
    </div>
  );
};
export default DropDown;
