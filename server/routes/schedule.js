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
      const shchedules = getSchedules().schedule;
      let maxId = Math.max(...shchedules.map((schedule) => schedule.id));
      const addIdSchedules = body.map((schedule) => ({
        ...schedule,
        id: ++maxId,
      }));
      const data = [...shchedules, ...addIdSchedules];

      setSchedules({ schedule: data });
      res.send(data);
    },
  },
  {
    method: 'delete',
    route: `${ENDPOINT}/:id`,
    handler: ({ params: { id } }, res) => {
      const shchedules = getSchedules().schedule;
      const deleteSchedules = shchedules.filter(
        (schedule) => Number(id) !== schedule.id
      );
      setSchedules({ schedule: deleteSchedules });
      res.send(id);
    },
  },
];

export default scheduleRoute;
