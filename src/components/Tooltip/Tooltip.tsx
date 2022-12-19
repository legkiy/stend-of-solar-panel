import './Tooltip.scss';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ReactNode } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

interface IProps {
  dispatchFn: (payload: any) => AnyAction;
  nameTooltip: 'tooltipVisibleAdditionalInf' | 'tooltipVisibleFAQ';
  discription: ReactNode;
}

const DropDown = ({ dispatchFn, nameTooltip, discription }: IProps) => {
  const dispatch = useDispatch();
  const tooltipVisible = useSelector((state: RootState) => state.tooltip[nameTooltip]);

  const svgSquare = 28;
  const lineLeft = 3;
  const lineTop = lineLeft;
  const lineRight = svgSquare - lineLeft;
  const lineBottom = svgSquare - lineTop;

  const tooltipHeight = 80;
  const tooltipWidht = 90;
  const hMidle = (100 - tooltipHeight) / 2;
  const wMidle = (100 - tooltipWidht) / 2;

  const getTooltipVisible = { top: `${0}%`, left: `${0}%` };
  const getTooltipNoVisible = { top: '-102vh', left: `${0}vw` };

  return (
    <div
      className="tooltip-background"
      style={tooltipVisible ? getTooltipVisible : getTooltipNoVisible}
    >
      <div className="tooltip">
        <button
          className="tooltip-btn interactive-el"
          onClick={() => dispatch(dispatchFn(!tooltipVisible))}
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
    </div>
  );
};
export default DropDown;
