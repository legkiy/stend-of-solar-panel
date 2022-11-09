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
