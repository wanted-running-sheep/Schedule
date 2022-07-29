import { ADD_SCHEDULE_TITLE, SCHEDULE_TITLE } from '@/constants';
import checkRootPath from '@/util/checkRootPath';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Title = () => {
  const isRootPath = checkRootPath();
  const title = isRootPath ? SCHEDULE_TITLE : ADD_SCHEDULE_TITLE;

  return (
    <Wrapper>
      <Text>{title}</Text>
      {isRootPath && <Button title={SCHEDULE_TITLE} />}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;

const Text = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
