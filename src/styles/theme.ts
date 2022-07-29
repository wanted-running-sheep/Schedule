import button from './button';
import input from './input';
import label from './label';
import mixins from './mixins';

const color = {
  background: {
    white: '#FFFFFF',
    lightwhite: '#f4f4f4',
    gray: '#b4b4b4',
    lightgray: '#efefef',
    darkgray: '#747474',
    blue: '#3075d8',
    skyblue: '#44a7c8',
    black: '#000000',
  },
  font: {
    white: '#FFFFFF',
    gray: '#b4b4b4',
    lightgray: '#efefef',
    darkgray: '#747474',
    black: '#000000',
  },
  border: {
    gray: '#b4b4b4',
  },
};

export const theme = {
  color,
  mixins,
  button,
  input,
  label,
};
export type Theme = typeof theme;
