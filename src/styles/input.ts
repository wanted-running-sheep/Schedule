import { theme } from './theme';

const input = {
  text: {
    time: () => `
      padding: 0.3rem;
      width: 3rem;
      border: 1px solid ${theme.color.border.gray};
      text-align: center;
      margin: 0 5px;
    `,
    checked: () => `
      color: ${theme.color.font.white};
      background-color: ${theme.color.background.darkgray};
    `,
  },
  radio: {
    meridiem: () => `
      display: none;
    `,
  },
  checkbox: {
    day: () => `
      display: none;
    `,
  },
};

export default input;
