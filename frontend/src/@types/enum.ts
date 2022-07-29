export const ApiUrlEnum = {
  SCHEDULE: '/schedule',
} as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
