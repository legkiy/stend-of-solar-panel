import { useState } from 'react';
import './Select.scss';

interface IpropsSelect {
  selected: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
  options: Array<string>;
  value?: Array<string>;
  noSelect: string;
  setDataFile?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const Select = ({
  selected,
  setSelected,
  options,
  value,
  noSelect,
  setDataFile,
}: IpropsSelect) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="select">
      <div
        className={`select-btn ${isActive ? 'select-btn-active' : ''}`}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {selected}
        <span className="arrow-box">
          <svg className="arrow">
            <g className={isActive ? 'reverse-rotate-arrow' : 'rotate-arrow'}>
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
      </div>

      <div
        className={`select-content ${isActive ? 'not-collapsed' : 'collapsed'}`}
      >
        <div
          className="select-item"
          onClick={(e) => {
            setSelected?.(noSelect);
            setIsActive(false);
          }}
        >
          {noSelect}
        </div>
        {options.map((option, index) => (
          <div
            className="select-item"
            key={index}
            onClick={(e) => {
              setSelected?.(option);
              setIsActive(false);
              if (value && value[index]) {
                setDataFile?.(value[index] as string);
                console.log(value[index]);
              }
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Select;
