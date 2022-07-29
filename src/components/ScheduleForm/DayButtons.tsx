import React, { useState } from 'react';
import { ButtonDaysType } from '@/@types/enum';
import { WEEK_LIST } from '@/constants';
import styled, { css } from 'styled-components';
import { useTimeState } from '@/context/TimeContext';

const DayButtons = () => {
  const { setDayBySelctedDay } = useTimeState();

  const [isClickedDay, setIsClickedDay] = useState<{
    [key in ButtonDaysType]?: boolean;
  }>({});

  const onClickDay = (day: ButtonDaysType) => {
    setIsClickedDay((prev) => ({ ...prev, [day]: !prev[day] }));
    setDayBySelctedDay(day);
  };

  return (
    <DayButtonContainer>
      {WEEK_LIST.map((day) => (
        <DayButton
          key={day}
          onClick={() => onClickDay(day)}
          isClickedDay={!!isClickedDay[day]}
        >
          {day}
        </DayButton>
      ))}
    </DayButtonContainer>
  );
};

export default DayButtons;

const DayButtonContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;
`;

const DayButton = styled.button<{ isClickedDay: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 10px;
  width: 150px;

  ${({ isClickedDay }) => {
    return css`
      opacity: ${isClickedDay ? 1 : 0.6};
    `;
  }}

  &:hover {
    opacity: 1;
  }
`;
