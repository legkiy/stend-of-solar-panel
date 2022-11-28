import './Select.scss';
import { setDropdawnActive } from '../../features/select/dropdownSlice';
import {
  setSelectFile,
  setSelectCsv,
} from '../../features/select/selectFileSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

interface IPropsSelect {
  options: Array<{ option: string; value: string }>;
}

const Select = ({ options }: IPropsSelect) => {
  const setActive = useDispatch();
  const dropdawnActive = useSelector(
    (state: RootState) => state.dropdawn.dropdawnActive
  );
  const selectFile = useSelector(
    (state: RootState) => state.selectFile.selectFile
  );

  return (
    <>
      <div
        className={`select ${dropdawnActive && 'select-active'}`}
        onClick={() => {
          setActive(setDropdawnActive(!dropdawnActive));
        }}
      >
        {selectFile}
        <span className="arrow-box">
          <svg className="arrow">
            <g
              className={
                dropdawnActive ? 'reverse-rotate-arrow' : 'rotate-arrow'
              }
            >
              <line
                className="line"
                x1="1"
                y1="5"
                x2="7"
                y2="9"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="7"
                y1="9"
                x2="13"
                y2="5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </span>
        <div className={`dropdown ${dropdawnActive ? 'dropdown-active' : ' '}`}>
          {options.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => {
                setActive(setSelectFile(item.option));
                setActive(setSelectCsv(item.value));
              }}
            >
              {item.option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Select;
