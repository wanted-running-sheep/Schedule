import { ADD_SCHEDULE_TITLE } from '@/constants';
import checkRootPath from '@/util/checkRootPath';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  const isRootPath = checkRootPath();

  return (
    <Wrapper>
      <ContetBox>{children}</ContetBox>
      {!isRootPath && (
        <ButtonWrapper>
          <Button title={ADD_SCHEDULE_TITLE} />
        </ButtonWrapper>
      )}
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
  background-color: ${({ theme }) => theme.color.background.content};
  ${({ theme }) => theme.mixins.boxShadow()}
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
`;
