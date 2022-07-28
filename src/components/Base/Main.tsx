import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Content from './Content';

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.color.background.lightgray};
`;
