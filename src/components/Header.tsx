import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/images/Logo.png';

const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background: ${({ theme }) => theme.color.background.skyblue};
  height: 70px;
  padding: 15px 30px 5px 30px;

  img {
    height: 100%;
  }
`;
