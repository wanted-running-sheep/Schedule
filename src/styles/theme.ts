import mixins from './mixins';
import media from './media';

const color = {
  background: {
    lightgray: '#F4F4F4',
    gray: '##EFEFEF',
    skyblue: '#44A7C8',
    blue: '#3175D8',
  },
  font: {
    white: '#FFFFFF',
    black: '#000000',
  },
  border: {
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
