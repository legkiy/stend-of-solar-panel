import './SidePanel.scss';
import isemLogo from './isem-logo.png';
import SideElement from './SideElement/SideElement';
import Select from '../Select/Select';
import { useEffect, useState } from 'react';

interface IDate {
  date: string;
}

interface IpropsSidePanel {
  arr: IDate[];
  promise: Promise<d3.DSVRowArray<string>>;
  arrDate: string[];
  setDataFile: React.Dispatch<React.SetStateAction<string>> | undefined;
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}

const SidePanel = ({
  arr,
  promise,
  arrDate,
  setDataFile,
  setPanel,
}: IpropsSidePanel) => {
  const [show, setShow] = useState(false);
  const [chosenDayStart, setChosenDayStart] = useState('start');
  const [chosenDayEnd, setChosenDayEnd] = useState('end');

  const [selectedMonth, setSelectedMonth] = useState('...');

  const days = arrDate.map((file) => {
    return file;
  });
  const day = days.filter((item: string, index: number) => {
    return days.indexOf(item) === index;
  });

  //get yaer + month for file selection
  const fileOptions = [];
  const fileValue = [];
  //цикл для перебора годов
  for (let year = 2022; year < 2073; year++) {
    //цикл для перебора месяцев внутри каждого года
    for (let month = 1; month < 13; month++) {
      //условие минимального значения
      if (year === 2022 && month < 9) month = 9;
      //условие для формата даты месяца меньше 10
      let newMonth: string = String(month);
      if (month < 10) newMonth = '0' + month;

      const monthYear = newMonth + '.' + year;
      const monthYearFile = year + '-' + newMonth;
      fileOptions.push(monthYear);
      fileValue.push(monthYearFile);
    }
  }

  useEffect(() => {
    promise.then(() => {
      setShow(true);
    });
  }, [show, promise]);

  return (
    <div className="sidePanel">
      <SideElement
        elementInside={
          <a className="isemLogo" href="https://isem.irk.ru/">
            <img src={isemLogo} alt="logo"></img>
            ИСЭМ СО РАН
          </a>
        }
      />
      <SideElement
        elementInside={
          <>
            <Select
              selected={selectedMonth}
              setSelected={setSelectedMonth}
              options={fileOptions}
              value={fileValue}
              noSelect="..."
              setDataFile={setDataFile}
            />
            <Select
              selected={0}
              setSelected={setPanel}
              options={['1', '2', '3']}
              value={[0, 1, 2]}
              noSelect={'1'}
            />
          </>
        }
      />
      <SideElement
        elementInside={
          <>
            <Select
              selected={chosenDayStart}
              setSelected={setChosenDayStart}
              options={day}
              noSelect="start"
            />
            -
            <Select
              selected={chosenDayEnd}
              setSelected={setChosenDayEnd}
              options={day}
              noSelect="end"
            />
          </>
        }
      />
      <SideElement
        elementInside={
          <p>
            Selected day
            <br />
            {chosenDayStart} - {chosenDayEnd}
          </p>
        }
      />
    </div>
  );
};
export default SidePanel;
