import { DaysType } from '@/@types/enum';
import React from 'react';
import { Schedule } from 'request';
import styled from 'styled-components';
import ScheduleBox from './ScheduleBox';

interface ScheduleTableColumnProps {
  day: DaysType;
  schedule: Schedule;
}

const ScheduleTableColumn = ({ day, schedule }: ScheduleTableColumnProps) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <ScheduleBoxWrapper>
        <ScheduleBox schedule={schedule} />
      </ScheduleBoxWrapper>
    </Wrapper>
  );
};

export default ScheduleTableColumn;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
`;

const Day = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.gray};
  line-height: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const ScheduleBoxWrapper = styled.div`
  width: 100%;
  padding: 25px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
