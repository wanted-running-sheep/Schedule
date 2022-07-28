import React from 'react';
import styled from 'styled-components';
import ScheduleTableColumn from './ScheduleTableColumn';

const ScheduleTable = () => {
  const days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return (
    <Wrapper>
      {days.map((day, index) => (
        <ScheduleTableColumn key={index} day={day} />
      ))}
    </Wrapper>
  );
};

export default ScheduleTable;

const Wrapper = styled.article`
  width: 100%;
  min-height: 40%;
  background-color: ${({ theme }) => theme.color.background.white};
  padding: 20px;
  ${({ theme }) => theme.mixins.boxShadow}
  display: flex;
`;
