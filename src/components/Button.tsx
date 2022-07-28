import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
}
const Button = ({ name }: ButtonProps) => {
  return <DefaultButton>{name}</DefaultButton>;
};

export default Button;
const DefaultButton = styled.button`
  color: ${({ theme }) => theme.color.font.white};
  background: ${({ theme }) => theme.color.background.blue};
  padding: 13px 15px;
  font-size: 1rem;
  border-radius: 10px;
`;
