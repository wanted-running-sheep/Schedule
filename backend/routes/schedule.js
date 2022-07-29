import { readDB, writeDB } from '../database/dbController.js';
const getSchedules = () => readDB('schedule');
const setSchedules = (data) => writeDB('schedule', data);
const ENDPOINT = '/schedule';
const scheduleRoute = [
  {
    method: 'get',
    route: ENDPOINT,
    handler: (_, res) => {
      res.send(getSchedules().schedule);
    },
  },
  {
    method: 'post',
    route: ENDPOINT,
    handler: ({ body }, res) => {
      const { schedule: schedules } = getSchedules();
      let maxId = Math.max(...schedules.map((schedule) => schedule.id));
      const addIdSchedules = body.map((schedule) => ({
        ...schedule,
        id: ++maxId,
      }));
      const data = [...schedules, ...addIdSchedules];

      setSchedules({ schedule: data });
      res.send(data);
    },
  },
  {
    method: 'delete',
    route: `${ENDPOINT}/:id`,
    handler: ({ params: { id } }, res) => {
      const { schedule: schedules } = getSchedules();
      const deleteSchedules = schedules.filter(
        (schedule) => Number(id) !== schedule.id
      );
      setSchedules({ schedule: deleteSchedules });
      res.send(id);
    },
  },
];

export default scheduleRoute;
