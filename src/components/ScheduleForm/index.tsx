import React from 'react';
import styled from 'styled-components';
import TimeSchedule from './TimeSchedule';
import DayButtons from './DayButtons';
import { useTimeState } from '@/context/TimeContext';

const ScheduleForm = () => {
  const { days } = useTimeState();
  const oneMoreDays = !!days.length;
  return (
    <Wrapper>
      <Container>
        <Title>Reapeat on</Title>
        <DayButtons />
      </Container>

      <Container>
        {oneMoreDays && (
          <>
            <Title>Start Time</Title>
            <TimeSchedule />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default ScheduleForm;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
  gap: 5px;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 20px;
`;
