const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  boxShadow: () => `
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `,
  transformCenter: () => `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  noScrollBar: () => `
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  scrollSnap: {
    parent: () => `
      overflow: auto;
      scroll-snap-type: y mandatory;
    `,
    child: () => `
      scroll-snap-align: start;
    `,
  },
};

export default mixins;
