import { theme } from './theme';

const label = {
  radio: {
    meridiem: () => `
      width: 3rem;
      ${theme.mixins.flexBox()};
      border: 1px solid ${theme.color.border.gray};
      background-color: ${theme.color.background.white};
      padding: 0.5rem 0;
    `,
    checked: () => `
      color: ${theme.color.font.white};
      background-color: ${theme.color.background.gray};
    `,
  },
  checkbox: {
    day: () => `
      width: 7rem;
      ${theme.mixins.flexBox()};
      border: 1px solid ${theme.color.border.gray};
      background-color: ${theme.color.background.white};
      padding: 0.5rem 0;
      opacity: 0.4;
    `,
    checked: () => `
      opacity: 1;
    `,
  },
};

export default label;
