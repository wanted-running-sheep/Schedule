import React from 'react';
import styled from 'styled-components';
import { Days, DaysType, ButtonTypeEnum } from '@/types/common';
import useToggleButton from '@/hooks/useToggleButton';

const WeeklyButtonList = () => {
  const { selectedList, onToggleButton } = useToggleButton<DaysType>(
    ButtonTypeEnum.MULTIPLE
  );
  return (
    <>
      {Days.map((day, index) => (
        <DayButton
          key={index}
          isClicked={selectedList.includes(day)}
          onClick={() => onToggleButton(day)}
        >
          {day}
        </DayButton>
      ))}
    </>
  );
};

export default WeeklyButtonList;

const DayButton = styled.button<{ isClicked?: boolean }>`
  background: ${({ theme }) => theme.color.background.white};
  border: 1px solid
    ${({ theme, isClicked }) =>
      isClicked ? theme.color.border.gray : theme.color.border.lightgray};
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.font.black : theme.color.font.lightgray};
  height: 45px;
  width: 110px;
  margin-right: 10px;
  font-size: 0.9rem;
`;
