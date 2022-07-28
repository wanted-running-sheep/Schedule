import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  name: string;
}
const Title = ({ name }: TitleProps) => {
  return <MenuName>{name}</MenuName>;
};

export default Title;

const MenuName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
`;
