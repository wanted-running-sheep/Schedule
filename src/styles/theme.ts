import mixins from './mixins';
import media from './media';

const color = {
  background: {
    white: '#FFFFFF',
    lightgray: '#F4F4F4',
    gray: '#EFEFEF',
    darkgray: '#959595',
    skyblue: '#44A7C8',
    blue: '#3175D8',
  },
  font: {
    white: '#FFFFFF',
    lightgray: '#cccccc',
    gray: '#747474',
    black: '#000000',
  },
  border: {
    lightgray: '#F0F0F0',
    gray: '#B4B4B4',
    black: '#000000',
  },
  button: {
    lightgray: '#F5F5F5',
  },
};

export const theme = {
  color,
  media,
  mixins,
};
export type Theme = typeof theme;
