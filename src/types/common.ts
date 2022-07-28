import { theme } from '@/styles/theme';

export const APIUrl = {
  SCHEDULE: '/schedule',
} as const;
export const Days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;
export const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
] as const;
export const minutes = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,
] as const;

export type APIUrlType = typeof APIUrl[keyof typeof APIUrl];
export type DaysType = typeof Days[number];
