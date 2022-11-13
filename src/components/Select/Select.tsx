import { useState } from 'react';
import './Select.scss';

type IputProps = {
  selected: string;
  setSelected: any;
  options: string[];
  value?: string[];
  noSelect: string;
};

const Select = ({
  selected,
  setSelected,
  options,
  value,
  noSelect,
}: IputProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="select">
      <div
        className={`select-btn ${isActive ? 'select-btn-active' : ''}`}
        onClick={(e) => {
          setIsActive(!isActive);
          console.log(e.target);
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
            setSelected(noSelect);
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
              setSelected(option);
              setIsActive(false);
              if (value && value[index]) {
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
