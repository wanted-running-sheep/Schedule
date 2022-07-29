import fs from 'fs';
import { resolve } from 'path';

const basePath = resolve();

const filenames = {
  schedule: resolve(basePath, 'database/db.json'),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
  } catch (e) {
    console.error(e);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
};
