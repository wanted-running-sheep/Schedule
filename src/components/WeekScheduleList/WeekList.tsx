import { WEEK_LIST } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const WeekList = () => {
  return (
    <Wrapper>
      <WeekListContainer>
        {WEEK_LIST.map((day) => (
          <WeekItem key={day}>{day}</WeekItem>
        ))}
      </WeekListContainer>
    </Wrapper>
  );
};

export default WeekList;
const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgray};
`;

const WeekListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const WeekItem = styled.li`
  width: 100%;
  flex-grow: 1;
  font-size: 1.1rem;
  font-weight: bold;
  ${({ theme }) => theme.mixins.flexBox()}
`;
