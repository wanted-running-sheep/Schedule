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

export type APIUrlType = typeof APIUrl[keyof typeof APIUrl];
export type DaysType = typeof Days[number];
