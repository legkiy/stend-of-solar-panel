import './MenuBtn.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../features/menuBtn/menuBtnSlice';
import { RootState } from '../../store/store';

const MenuBtn = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: RootState) => state.menuBtn.menuOpen);

  return (
    <button className="menuBtn interactive-el" onClick={() => dispatch(setMenuOpen(!menuOpen))}>
      <svg height={'24px'} width={'30px'}>
        <g style={{ stroke: 'black', strokeWidth: '2px', strokeLinecap: 'round' }}>
          <line x1={1} y1={3} x2={29} y2={3}></line>
          <line x1={1} y1={12} x2={29} y2={12}></line>
          <line x1={1} y1={21} x2={29} y2={21}></line>
        </g>
        <g style={{ stroke: 'black', strokeWidth: '2px', strokeLinecap: 'round' }}>
          <line x1={1} y1={3} x2={29} y2={21}></line>
          <line x1={1} y1={21} x2={29} y2={3}></line>
        </g>
      </svg>
    </button>
  );
};
export default MenuBtn;
