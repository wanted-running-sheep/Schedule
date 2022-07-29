import React from 'react';
import styled from 'styled-components';
import { Days, DaysType, ButtonTypeEnum } from '@/types/common';
import useToggleButton from '@/hooks/useToggleButton';
import { SetStateType } from '@/types/react';
interface WeeklyButtonListProps {
  setSelectedDays: SetStateType<DaysType[]>;
}
const WeeklyButtonList = ({ setSelectedDays }: WeeklyButtonListProps) => {
  const { selectedList, onToggleButton } = useToggleButton<DaysType>(
    ButtonTypeEnum.MULTIPLE
  );
  const toggleClickButton = (day: DaysType) => {
    onToggleButton(day);
    if (selectedList) setSelectedDays([...selectedList, day]);
  };

  return (
    <>
      {Days.map((day, index) => (
        <DayButton
          key={index}
          isClicked={selectedList.includes(day)}
          onClick={() => toggleClickButton(day)}
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
