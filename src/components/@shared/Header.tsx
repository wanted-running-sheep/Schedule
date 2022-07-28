import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/images/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src={Logo} alt="engAll 로고" onClick={() => navigate('/')} />
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
