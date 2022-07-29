import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/icons/engall.png';

const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.background.skyblue};
  color: ${({ theme }) => theme.color.font.white};
  padding: 10px 0 5px 30px;
  height: 55px;

  img {
    object-fit: contain;
    height: 40px;
  }
`;
