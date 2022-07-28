import React from 'react';
import { ButtonTitleType } from '@/@types/util';
import styled from 'styled-components';

interface ButtonProps {
  title: ButtonTitleType;
}

const Button = ({ title }: ButtonProps) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 150px;
  ${({ theme }) => theme.mixins.flexBox()}
  background-color: ${({ theme }) => theme.color.background.blue};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.8rem;
  padding: 5px 0px;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
