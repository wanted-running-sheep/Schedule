import React from 'react';

import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

interface ButtonProps {
  name?: string;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
  padding?: string;
  width?: string;
  borderRadius?: string;
  borderColor?: string;
  border?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isClicked?: boolean;
  isDayButtonClicked?: boolean;
}

const Button = ({
  text,
  backgroundColor = theme.color.button.white,
  fontColor = theme.color.font.black,
  padding = '10px',
  width = '',
  borderRadius = '',
  borderColor = theme.color.border.white,
  border = '',
  isClicked = false,
  isDayButtonClicked = false,
  ...otherProps
}: ButtonProps) => {
  return (
    <>
      <StyledButton
        {...otherProps}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        padding={padding}
        width={width}
        borderRadius={borderRadius}
        borderColor={borderColor}
        border={border}
        isClicked={isClicked}
        isDayButtonClicked={isDayButtonClicked}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button<{
  backgroundColor: string;
  fontColor: string;
  padding: string;
  width: string;
  borderRadius: string;
  borderColor: string;
  border: string;
  isClicked: boolean;
  isDayButtonClicked: boolean;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: ${({ borderColor }) => borderColor};
  border: ${({ border }) => border};
  ${({ theme, isDayButtonClicked }) =>
    isDayButtonClicked &&
    css`
      color: ${theme.color.font.black};
      border-color: ${theme.color.border.darkgray};
    `};
`;
