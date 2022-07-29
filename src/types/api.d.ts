declare module 'request' {
  import { DaysType } from '@/types/common';

  interface ScheduleInterface {
    id: number;
    startTime: EpochTimeStamp;
    workDays: DaysType[];
  }
}
