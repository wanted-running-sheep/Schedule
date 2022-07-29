export const ButtonTypeEnum = {
  HOUR: 'hour',
  MINUTE: 'minute',
} as const;

export const ButtonAmPmEnum = {
  AM: 'AM',
  PM: 'PM',
} as const;

export const ButtonDaysEnum = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday',
} as const;
export type ButtonType = typeof ButtonTypeEnum[keyof typeof ButtonTypeEnum];
export type ButtonAmPmType = typeof ButtonAmPmEnum[keyof typeof ButtonAmPmEnum];
export type ButtonDaysType = typeof ButtonDaysEnum[keyof typeof ButtonDaysEnum];
