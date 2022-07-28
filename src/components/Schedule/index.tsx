import React from 'react';
import styled from 'styled-components';
import ScheduleList from './ScheduleList';
import WeekList from './WeekList';

const Schedule = () => {
  return (
    <Wrapper>
      <WeekList />
      <ScheduleList />
    </Wrapper>
  );
};

export default Schedule;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 10px 30px; */
  gap: 20px;
`;
