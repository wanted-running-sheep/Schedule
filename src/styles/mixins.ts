const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  boxShadow: () => `
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 4px;
  `,
  boxShadowClicked: () => `
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px;
    top:2px;
    position:relative;
  `,
};

export default mixins;
