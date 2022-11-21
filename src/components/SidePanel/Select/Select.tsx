import './Select.scss';

interface IProprs {
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}

const Select = ({ setPanel }: IProprs) => {
  return (
    <select className="select">
      <option
        onClick={(el) => {
          return setPanel(0);
        }}
      >
        0
      </option>
      <option
        onClick={(el) => {
          return setPanel(1);
        }}
      >
        1
      </option>
      <option
        onClick={(el) => {
          return setPanel(2);
        }}
      >
        2
      </option>
    </select>
  );
};
export default Select;
