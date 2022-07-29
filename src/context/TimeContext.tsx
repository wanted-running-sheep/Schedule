import { ButtonAmPmType, ButtonType, ButtonAmPmEnum } from '@/@types/enum';
import React, { ReactNode, createContext, useState, useContext } from 'react';
import { TimeInterface } from 'request';
interface TimeContextInterface {
  days: string[];
  time: TimeInterface;
  setDayBySelctedDay: (day: string) => void;
  setTimeByTimeString: (
    timeKey: ButtonType | ButtonAmPmType,
    timeValue: string
  ) => void;
  setTimeByAmPm: (noon: ButtonAmPmType) => void;
}

const defaultContext: TimeContextInterface = {
  days: [],
  time: {
    hour: '00',
    minute: '00',
    AM: '',
    PM: '',
  },
  setTimeByTimeString: () => {},
  setTimeByAmPm: () => {},
  setDayBySelctedDay: () => {},
};

const TimeContext = createContext<TimeContextInterface>(defaultContext);

export const TimeContextProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState<TimeInterface>(defaultContext.time);
  const [days, setDays] = useState<string[]>([]);

  const setTimeByTimeString = (
    timeKey: ButtonType | ButtonAmPmType,
    timeValue: string
  ) => {
    if (time[timeKey] !== timeValue) {
      setTime((prevTime) => {
        return { ...prevTime, [timeKey]: timeValue };
      });
    }
  };

  const setTimeByAmPm = (noon: ButtonAmPmType) => {
    switch (noon) {
      case ButtonAmPmEnum.AM:
        setTime((prevTime) => ({
          ...prevTime,
          [ButtonAmPmEnum.AM]: noon,
          [ButtonAmPmEnum.PM]: '',
        }));
        break;
      case ButtonAmPmEnum.PM:
        setTime((prevTime) => ({
          ...prevTime,
          [ButtonAmPmEnum.PM]: noon,
          [ButtonAmPmEnum.AM]: '',
        }));
        break;

      default:
        return time;
    }
  };

  const resetTimeState = () => {
    setTime({ ...defaultContext.time });
  };

  const setDayBySelctedDay = (selectedDay: string) => {
    setDays((prevDays) => {
      if (!prevDays.includes(selectedDay)) return [...prevDays, selectedDay];
      const filteredDays = prevDays.filter((day) => day !== selectedDay);
      !filteredDays.length && resetTimeState();
      return filteredDays;
    });
  };

  const value = {
    time,
    setTimeByTimeString,
    setTimeByAmPm,
    days,
    setDayBySelctedDay,
  };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

export const useTimeState = () => {
  return useContext(TimeContext);
};
