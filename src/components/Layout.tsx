import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Outlet />
        </Section>
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  height: calc(100% - 55px);
  background-color: ${({ theme }) => theme.color.background.lightwhite};
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 30px 8px 30px;
`;
