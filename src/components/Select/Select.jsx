import { useState } from 'react';
import './Select.scss';

const Select = ({ selected, setSelected, options, value, noSelect }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="select">
      <div
        className={`select-btn ${isActive && 'select-btn-active'}`}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span className="arrow">
          <svg className="arrow">
            <line
              x1="1"
              y1="3"
              x2="1"
              y2="18"
              stroke="#00000081"
              stroke-width="1"
            />
            <g>
              <line
                x1="5"
                y1="8"
                x2="10"
                y2="12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="10"
                y1="12"
                x2="15"
                y2="8"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </span>
      </div>

      {isActive && (
        <div className="select-content">
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
              value={value}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                if (value[index]) {
                  console.log(value[index]);
                }
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
