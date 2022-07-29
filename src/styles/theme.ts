import mixins from './mixins';
import media from './media';
import animation from './animation';
const color = {
  white: '#ffffff',
  background: {
    turquoise: '#44a7cb',
    lightgray: '#f4f4f4',
    gray: '#EFEFEF',
    darkgray: '#959595',
  },

  font: {
    lightgray: '#B4B4B4',
    gray: '#A9A9A9',
    darkgray: '#727272',
    lightblack: '#5A5A5A',
    black: '#000000',
  },
  border: {
    lightgray: '#E1E1E1',
  },
  button: {
    darkBlue: '#3175D8',
  },
};

export const theme = {
  color,
  media,
  mixins,
  animation,
};
export type Theme = typeof theme;
