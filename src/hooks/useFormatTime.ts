import React from 'react';
import { MAX_HOURS } from '@/api/constants';

const useFormatTime = () => {
  const calculateMeridiem = (hours: number) => {
    return hours < MAX_HOURS ? 'AM' : 'PM';
  };
  const formatHours = (hours: number) => {
    let generalTime = hours % MAX_HOURS;
    generalTime = generalTime ? generalTime : MAX_HOURS;
    return generalTime;
  };

  // padStart
  const formatMinutes = (minutes: string) => {
    const MAX_MINUTES_LENGTH = 2;
    const minutesLength = minutes.length;
    if (minutesLength >= MAX_MINUTES_LENGTH) return minutes;
    return 0 + minutes;
  };

  return {
    calculateMeridiem,
    formatHours,
    formatMinutes,
  };
};

export default useFormatTime;
