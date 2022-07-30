import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header onClick={() => navigate('/schedule')}>
        <Logo src="https://cdn.imweb.me/thumbnail/20220331/90c7047dc4d68.png"></Logo>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;

const Header = styled.header`
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: ${({ theme }) => theme.color.background.lightblue};
  ${({ theme }) => theme.mixins.flexBox('center', 'left')}
  padding-left: 25px;
`;

const Logo = styled.img`
  width: 72px;
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.background.gray};
  height: calc(100% - 60px);
  padding: 40px 25px 0 25px;
  overflow-y: auto;
`;
