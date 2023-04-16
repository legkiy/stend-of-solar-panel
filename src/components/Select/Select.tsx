import './Select.scss';
import { setDropdownActive } from '../../features/select/dropdownSlice';
import { setSelectFile, setSelectCsv } from '../../features/select/selectFileSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

interface IPropsSelect {
  options: Array<{ option: string; value: string }>;
}

const Select = ({ options }: IPropsSelect) => {
  const dispatch = useDispatch();
  const dropdownActive = useSelector((state: RootState) => state.dropdown.dropdownActive);
  const { selectFile } = useSelector((state: RootState) => state.selectFile);

  return (
    <>
      <div
        className={`select interactive-el ${dropdownActive === true && 'select-active'}`}
        onClick={() => {
          dispatch(setDropdownActive(!dropdownActive));
        }}
      >
        {selectFile}
        <span className="arrow-box">
          <svg className="arrow">
            <g className={dropdownActive ? 'reverse-rotate-arrow' : 'rotate-arrow'}>
              <line
                x1="2"
                y1="5"
                x2="8"
                y2="9"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="9"
                x2="14"
                y2="5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </span>
        <div className={`dropdown ${dropdownActive ? 'dropdown-active' : ' '}`}>
          {options.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => {
                dispatch(setSelectFile(item.option));
                dispatch(setSelectCsv(item.value));
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
