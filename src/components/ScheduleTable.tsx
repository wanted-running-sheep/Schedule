import { DaysEnum, DaysType } from '@/@types/enum';
import { getSchedulesUrl } from '@/constants/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Schedule } from 'request';
import styled from 'styled-components';
import ScheduleTableColumn from './ScheduleTableColumn';

const ScheduleTable = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const getSchedules = () =>
    axios
      .get(getSchedulesUrl)
      .then((res) => {
        console.log(res.data);
        setSchedules(res.data);
        filterSchedule(schedules);
      })
      .catch((error) => {
        console.log('get error: ', error);
      });

  useEffect(() => {
    getSchedules();
  }, []);

  const filterSchedule = (schedules: Schedule[]) => {
    let emptySchedule: Schedule[];
    return schedules.filter((schedule: Schedule) => {
      JSON.stringify(schedule.repeatOn).includes('Monday');
    });
  };

  //1.요일별로 필터링해서 객체 7개 배열로 나누기
  //2.map으로 같이 뿌려주기 -> ScheduleTableColumn
  //3. 보여주기

  return (
    <Wrapper>
      {Object.values(DaysEnum).map((day, index) => (
        <ScheduleTableColumn
          key={index}
          day={day}
          schedule={schedules[index]}
        />
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
