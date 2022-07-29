import { ADD_SCHEDULE_TITLE } from '@/constants';
import checkRootPath from '@/util/checkRootPath';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <Wrapper>
      <ContetBox>{children}</ContetBox>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.article`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const ContetBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.mixins.boxShadow()}/* padding: 20px 40px; */
`;
