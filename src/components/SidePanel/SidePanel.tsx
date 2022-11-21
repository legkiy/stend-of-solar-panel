import Select from './Select';
import './SidePanel.scss';

interface IProprs {
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}

const SidePanel = ({ setPanel }: IProprs) => {
  return (
    <div className="sidePanel">
      <Select setPanel={setPanel} />
    </div>
  );
};
export default SidePanel;
