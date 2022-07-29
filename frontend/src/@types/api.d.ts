declare module 'request' {
  interface ScheduleWithoutDayInterface {
    id: number;
    startTime: number;
  }
  interface ScheduleInterface extends ScheduleWithoutDayInterface {
    day: string;
  }
}
