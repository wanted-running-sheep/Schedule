import React from 'react';
import { theme } from '@/styles/theme';

const XButton = () => {
  return (
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 15 15"
      fill={theme.color.background.gray}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 4.5L10.5 10.5M4.5 10.5L10.5 4.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z"
        stroke={theme.color.font.lightgray}
      />
    </svg>
  );
};

export default XButton;
