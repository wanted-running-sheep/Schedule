import express from 'express';
import cors from 'cors';
import scheduleRoute from './routes/schedule.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

scheduleRoute.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen({ port: 8000 });
console.log('server listening on 8000');
