import React from 'react';
import { ButtonTitleType } from '@/@types/util';
import styled from 'styled-components';

interface ButtonProps {
  title: ButtonTitleType;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 150px;
  ${({ theme }) => theme.mixins.flexBox()}
  background-color: ${({ theme }) => theme.color.button.darkBlue};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.8rem;
  padding: 5px 0px;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
