import button from './button';
import mixins from './mixins';

const color = {
  background: {
    white: '#FFFFFF',
    lightwhite: '#f4f4f4',
    gray: '#E5E5E5',
    lightgray: '#efefef',
    darkgray: '#959595',
    blue: '#3075d8',
    skyblue: '#44a7c8',
    black: '#000000',
  },
  font: {
    white: '#FFFFFF',
    gray: '#E5E5E5',
    lightgray: '#efefef',
    black: '#000000',
  },
};

export const theme = {
  color,
  mixins,
  button,
};
export type Theme = typeof theme;
