import React from 'react';
import styled from 'styled-components';
interface ButtonCssProps {
  width?: string;
}
interface ButtonProps extends ButtonCssProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, ...otherProps }: ButtonProps) => {
  return <DefaultButton {...otherProps}>{name}</DefaultButton>;
};

export default Button;
const DefaultButton = styled.button<ButtonCssProps>`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.font.white};
  background: ${({ theme }) => theme.color.background.blue};
  padding: 13px 15px;
  font-size: 1rem;
  border-radius: 10px;
`;
