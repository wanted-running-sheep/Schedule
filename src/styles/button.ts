import { theme } from './theme';

const button = {
  primary: () => `
    font-size: 1.2rem;
    background-color: ${theme.color.background.blue};
    color: ${theme.color.font.white};
    padding: 11px 15px;
    border-radius: 8px;
  `,
  hover: () => `
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 4px;
  `,
  active: () => `
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px;
    position: relative;
    top: 2px;
  `,
};

export default button;
