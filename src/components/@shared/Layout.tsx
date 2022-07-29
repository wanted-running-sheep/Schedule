import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@/components/@shared/Header';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
`;
const Section = styled.section`
  padding: 40px 30px;
  background: ${({ theme }) => theme.color.background.lightgray};
  height: calc(100% - 70px);
`;
