import './Tooltip.scss';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ReactNode } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

interface IProps {
  dispatchFn: (payload: any) => AnyAction;
  nameTooltip: 'tooltipVisibleAdditionalInf' | 'tooltipVisibleFAQ';
  children: ReactNode;
}

const DropDown = ({ dispatchFn, nameTooltip, children }: IProps) => {
  const dispatch = useDispatch();
  const tooltipVisible = useSelector((state: RootState) => state.tooltip[nameTooltip]);

  const svgSquare = 28;
  const lineLeft = 3;
  const lineTop = lineLeft;
  const lineRight = svgSquare - lineLeft;
  const lineBottom = svgSquare - lineTop;

  const tooltipHeight = 80;
  const tooltipWidht = 80;
  const hMidle = (100 - tooltipHeight) / 2;
  const wMidle = (100 - tooltipWidht) / 2;

  const tooltopPosition = { top: `${hMidle}vh`, left: `${wMidle}vw` };
  const tooltopPositionOut = { top: `${0}vh`, left: `${0}vw` };

  return (
    <div
      className={`tooltip-back ${tooltipVisible ? 'open-tooltip' : 'close-tooltip'}`}
      style={tooltipVisible ? tooltopPositionOut : tooltopPositionOut}
    >
      <div className={`tooltip ${tooltipVisible ? 'open-tooltip' : 'close-tooltip'}`}>
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
        <div className="tooltip-content">{children}</div>
      </div>
    </div>
  );
};
export default DropDown;
