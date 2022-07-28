import mixins from './mixins';
import media from './media';

const color = {
  white: '#ffffff',
  background: {
    turquoise: '#44a7cb',
    lightgray: '#f4f4f4',
    blue: '#3175D8',
  },

  font: {
    white: '#FFFFFF',
    lightgray: '#E4E4E4',
    gray: '#A9A9A9',
    darkgray: '#727272',
    lightblack: '#5A5A5A',
    black: '#000000',
  },
  border: {
    lightgray: '#E1E1E1',
    red: '#F55859',
    darkblue: '#4B617A',
    black: '#000000',
  },
  button: {
    lightgray: '#F5F5F5',
    gray: '#D9D9D9',
    black: '#4A4A4A',
    darkbrown: '#4C4C4C',
  },
};

export const theme = {
  color,
  media,
  mixins,
};
export type Theme = typeof theme;
