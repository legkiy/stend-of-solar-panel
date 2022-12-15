import './MenuBtn.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../features/menuBtn/menuBtnSlice';
import { RootState } from '../../store/store';
import { svg } from 'd3';

const MenuBtn = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: RootState) => state.menuBtn.menuOpen);

  const lineOpacity = menuOpen ? 0 : 1;

  const svgHeight = 36;
  const svgWidth = 50;
  const lineTop = 4;
  const lineBottom = svgHeight - lineTop;
  const lineLeft = 3;
  const lineRight = svgWidth - lineLeft;
  const lineVMiddle = svgHeight / 2;

  return (
    <button
      className={`menuBtn interactive-el ${menuOpen && 'menuBtn-active'}`}
      onClick={() => dispatch(setMenuOpen(!menuOpen))}
    >
      <svg height={svgHeight} width={svgWidth}>
        <g
          style={{
            stroke: 'black',
            strokeWidth: '3px',
            strokeLinecap: 'round',
          }}
        >
          <line x1={lineLeft} y1={lineTop} x2={lineRight} y2={lineTop} opacity={lineOpacity}></line>
          <line
            x1={lineLeft}
            y1={lineVMiddle}
            x2={lineRight}
            y2={lineVMiddle}
            className={`${menuOpen && 'first-line-menu-open'}`}
          ></line>
          <line
            x1={lineLeft}
            y1={lineVMiddle}
            x2={lineRight}
            y2={lineVMiddle}
            className={`${menuOpen && 'second-line-menu-open'}`}
          ></line>
          <line
            x1={lineLeft}
            y1={lineBottom}
            x2={lineRight}
            y2={lineBottom}
            opacity={lineOpacity}
          ></line>
        </g>
      </svg>
    </button>
  );
};
export default MenuBtn;
