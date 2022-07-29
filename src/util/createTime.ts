const TOTAL_TIME_LENGTH = 13;
export const createHourList = () => {
  const hourList = [...Array(TOTAL_TIME_LENGTH).keys()]
    .filter((hour) => hour > 0)
    .map((hour) => (hour < 10 ? `0${hour}` : hour.toString()));
  return hourList;
};

export const createMinuteList = () => {
  const minuteList = [...Array(TOTAL_TIME_LENGTH - 1).keys()]
    .filter((min) => min > 0)
    .map((min) => {
      const everyFiveMin = min * 5;
      return everyFiveMin < 10 ? `0${everyFiveMin}` : everyFiveMin.toString();
    });

  return minuteList;
};
