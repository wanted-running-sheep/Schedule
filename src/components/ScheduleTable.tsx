import { DaysEnum, DaysType } from '@/@types/enum';
import React from 'react';
import styled from 'styled-components';
import ScheduleTableColumn from './ScheduleTableColumn';

const ScheduleTable = () => {
  return (
    <Wrapper>
      {Object.values(DaysEnum).map((day: DaysType, index) => (
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
