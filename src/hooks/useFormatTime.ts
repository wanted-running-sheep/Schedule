import React from 'react';
import { MAX_HOURS } from '@/api/constants';

const useFormatTime = () => {
  const calculateMeridiem = (hours: number) => {
    return hours < MAX_HOURS ? 'AM' : 'PM';
  };

  const padTime = (time: string) => {
    const MAX_MINUTES_LENGTH = 2;
    const minutesLength = time.length;
    if (minutesLength >= MAX_MINUTES_LENGTH) return time;
    return 0 + time;
  };

  const formatHours = (hours: number) => {
    let generalTime = hours % MAX_HOURS;
    generalTime = generalTime ? generalTime : MAX_HOURS;
    return generalTime;
  };

  return {
    calculateMeridiem,
    padTime,
    formatHours,
  };
};

export default useFormatTime;
