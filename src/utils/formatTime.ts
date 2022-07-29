import pad2Digit from './pad2Digit';
import { periods } from './periods';

export const getPrettyTime = (time: number) => {
  if (time % 100 >= 60) time += 40;
  const isNight = time >= 1200 && time < 2400 ? true : false;
  if (time >= 1300) time -= 12 * 100;
  if (!isNight && (time - (time % 100)) / 100 === 12) time -= 12 * 100;

  let formatStartTime = pad2Digit(time, 4);
  formatStartTime =
    formatStartTime.slice(0, 2) + ':' + formatStartTime.slice(2, 4);
  return `${formatStartTime} ${periods[Number(isNight)]}`;
};

export const getPrettyEndTime = (startTime: number) => {
  let endTime = startTime + 40;
  return getPrettyTime(endTime);
};
