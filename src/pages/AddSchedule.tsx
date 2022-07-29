import React from 'react';
import WeekScheduleList from '@/components/ScheduleForm';
import Button from '@/components/Base/Button';
import checkRootPath from '@/util/checkRootPath';
import styled from 'styled-components';
import { ADD_SCHEDULE_TITLE } from '@/constants';
import { useTimeState } from '@/context/TimeContext';
import { ScheduleInterface } from 'request';

const AddSchedule = () => {
  const { time, days } = useTimeState();

  const isRootPath = checkRootPath();

  const onClickSubmit = () => {
    if (!days.length) alert('요일을 최소 하나이상 선택 해주세요.');

    const data: ScheduleInterface = {};
    days.forEach((day) => {
      data[day] = time;
    });

    console.log(days, time);
  };

  return (
    <>
      <WeekScheduleList />
      {!isRootPath && (
        <ButtonWrapper>
          <Button title={ADD_SCHEDULE_TITLE} onClick={onClickSubmit} />
        </ButtonWrapper>
      )}
    </>
  );
};

export default AddSchedule;

const ButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
`;
