export const ApiUrlEnum = {
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
export const Periods = ['AM', 'PM'] as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
export type DaysType = typeof Days[number];
export type PeriodsType = typeof Periods[number];
