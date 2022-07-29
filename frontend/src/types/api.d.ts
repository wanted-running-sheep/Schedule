declare module 'request' {
  import { DaysType } from '@/types/enum';

  interface ScheduleInterface {
    day: DaysType;
    id: number;
    startTime: number;
  }
  type ScheduleWithoutDayType = Omit<ScheduleInterface, 'day'>;
}
