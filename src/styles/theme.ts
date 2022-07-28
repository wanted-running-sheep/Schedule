import mixins from './mixins';
import media from './media';

const color = {
  background: {
    white: '#FFFFFF',
    lightgray: '#F4F4F4',
    lightblue: '#5FA5C4',
    gray: '#EFEFEF',
  },

  font: {
    white: '#FFFFFF',
    darkgray: '#747474',
    black: '#000000',
  },
  border: {
    lightgray: '#EAEAEA',
    darkgray: '#C2C2C2',
    darkblue: '#4B617A',
    black: '#000000',
  },
  button: {
    darkgray: '#959595',
    gray: '#B4B4B4',
    blue: '#4375D1',
  },
};

export const theme = {
  color,
  media,
  mixins,
};
export type Theme = typeof theme;
