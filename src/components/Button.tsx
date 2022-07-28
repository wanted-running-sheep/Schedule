import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: ButtonProps) => {
  return <DefaultButton onClick={onClick}>{name}</DefaultButton>;
};

export default Button;
const DefaultButton = styled.button`
  color: ${({ theme }) => theme.color.font.white};
  background: ${({ theme }) => theme.color.background.blue};
  padding: 13px 15px;
  font-size: 1rem;
  border-radius: 10px;
`;
