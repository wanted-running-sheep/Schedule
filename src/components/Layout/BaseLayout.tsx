import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../Base/Content';
import Header from '../Base/Header';
import Main from '../Base/Main';
import Title from '../Base/Title';

const BaseLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Title />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Wrapper>
  );
};

export default BaseLayout;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
