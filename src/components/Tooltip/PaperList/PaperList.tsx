import './PaperList.scss';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const PaperList = ({ children }: IProps) => {
  return <li className="paperList">{children}</li>;
};
export default PaperList;
