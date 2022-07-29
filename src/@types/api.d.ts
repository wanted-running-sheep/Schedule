declare module 'request' {
  interface TimeInterface {
    hour: string;
    minute: string;
    AM: 'AM' | '';
    PM: 'PM' | '';
  }
  interface ScheduleInterface {
    [key: string]: TimeInterface;
  }
}
