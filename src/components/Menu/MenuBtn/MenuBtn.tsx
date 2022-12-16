import './MenuBtn.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../../features/menuBtn/menuBtnSlice';
import { RootState } from '../../../store/store';


const MenuBtn = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: RootState) => state.menuBtn.menuOpen);

  const lineOpacity = menuOpen ? 0 : 1;

  const svgHeight = 31;
  const svgWidth = 45;
  const lineLeft = 3;
  const lineTop = 4;
  const lineRight = svgWidth - lineLeft;
  const lineBottom = svgHeight - lineTop;
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
          <line
            x1={lineLeft}
            y1={lineTop}
            x2={lineRight}
            y2={menuOpen ? lineBottom : lineTop}
          ></line>
          <line
            x1={lineLeft}
            y1={lineVMiddle}
            x2={lineRight}
            y2={lineVMiddle}
            opacity={lineOpacity}
            className={`${menuOpen && 'first-line-menu-open'}`}
          ></line>
          <line
            x1={lineLeft}
            y1={lineBottom}
            x2={lineRight}
            y2={menuOpen ? lineTop : lineBottom}
          ></line>
        </g>
      </svg>
    </button>
  );
};
export default MenuBtn;
