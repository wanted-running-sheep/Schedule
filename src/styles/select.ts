import { theme } from './theme';

const select = {
  time: () => `
    padding: 0.3rem;
    width: 3rem;
    border: 1px solid ${theme.color.border.gray};
    text-align: center;
    margin: 0 5px;
    ${theme.mixins.boxShadow()};
  `,
  active: () => `
    background-color: ${theme.color.background.lightgray};
  `,
};

export default select;
