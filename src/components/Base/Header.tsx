import React from 'react';
import { LOGO_URL } from '@/constants';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo src={LOGO_URL} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  height: 5%;
  padding: 30px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.turquoise};
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
