import './Select.scss';
import { setDropdawnActive } from '../../features/select/dropdownSlice';
import { setSelectFile } from '../../features/select/selectFileSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

interface IPropsSelect {
  options: { option: string; value: string }[];
}

const Select = ({ options }: IPropsSelect) => {
  const setActive = useDispatch();
  const selectActive = useSelector(
    (state: RootState) => state.dropdawn.dropdawnActive
  );
  const selectFile = useSelector(
    (state: RootState) => state.selectFile.selectFile
  );

  return (
    <>
      <div
        className="select"
        onClick={() => {
          setActive(setDropdawnActive(!selectActive));
        }}
      >
        {selectFile}
        <div
          className={`dropdown ${
            selectActive ? 'dropdown-active' : 'dropdown-noactive'
          }`}
        >
          {options.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => {
                setActive(setSelectFile(item.option));
                console.log(item.value);
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
