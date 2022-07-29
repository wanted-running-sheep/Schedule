import pad2Digit from './pad2Digit';
import { periods } from './periods';

export const adjustHourByMinute = (time: number) => {
  return time % 100 >= 60 ? (time += 40) : time;
};

export const getPrettyTime = (time: number) => {
  time = adjustHourByMinute(time);
  const isNight = time >= 1200 ? true : false;
  if (time >= 1300) time -= 12 * 100;

  let formatStartTime = pad2Digit(time, 4);
  formatStartTime =
    formatStartTime.slice(0, 2) + ':' + formatStartTime.slice(2, 4);
  return `${formatStartTime} ${periods[Number(isNight)]}`;
};

export const getPrettyEndTime = (startTime: number) => {
  let endTime = startTime + 40;
  return getPrettyTime(endTime);
};
