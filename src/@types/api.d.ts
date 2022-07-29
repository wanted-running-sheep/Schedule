declare module 'request' {
  interface Schedule {
    id: number;
    hour: string;
    minute: string;
    meridium: string;
    repeatOn: string[];
  }
}
