import { ReactElement } from 'react';
import './SideElement.scss';

interface IProps {
  elementInside: ReactElement;
}

const SideElement = ({ elementInside }: IProps) => {
  return <div className="sideElement">{elementInside}</div>;
};
export default SideElement;
