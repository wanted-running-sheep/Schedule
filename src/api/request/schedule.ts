import { ScheduleInterface } from 'request';
import { client } from '../instance/';

const ENDPOINT = '/schedule';

export const getSchedules = async () => {
  const response = await client.get<ScheduleInterface>(ENDPOINT);
  return response.data;
};

export const addSchedule = async <T>(data: T) => {
  await client.post(ENDPOINT, data);
};
