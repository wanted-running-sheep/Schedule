import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ScheduleWithoutDayType, ScheduleInterface } from 'request';

import { Days } from '@/types/enum';
import { theme } from '@/styles/theme';
import useScheduleModel from '@/api/models/useScheduleModel';
import { getPrettyTime, getPrettyEndTime } from '@/utils/formatTime';

import Button from '@/components/Button';
import TimeBlock from '@/components/TimeBlock';

interface FormattedSchedulesInterface {
  [key: string]: ScheduleWithoutDayType[];
}

const SchedulePage = () => {
  const [formattedSchedules, setFormattedSchedules] =
    useState<FormattedSchedulesInterface>({});
  const { schedules, getScheduleData, deleteSchedule } = useScheduleModel();
  const navigate = useNavigate();

  const handleClickedAddButton = () => {
    navigate('/schedule/add');
  };

  useEffect(() => {
    getScheduleData();
  }, []);

  useEffect(() => {
    setFormattedSchedules(getFormattedSchedules(schedules));
  }, [schedules]);

  const getFormattedSchedules = (schedules: ScheduleInterface[]) => {
    const formattedSchedules: FormattedSchedulesInterface = {};

    for (let { day, ...otherData } of schedules) {
      if (formattedSchedules.hasOwnProperty(day)) {
        formattedSchedules[day] = [
          ...formattedSchedules[day],
          { ...otherData },
        ];
      } else {
        formattedSchedules[day] = [{ ...otherData }];
      }
    }
    Object.keys(formattedSchedules).map((day) =>
      formattedSchedules[day].sort((a, b) => a.startTime - b.startTime)
    );
    return formattedSchedules;
  };

  const handleDeleteClick = async (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await deleteSchedule(id);
      await getScheduleData();
    }
  };

  return (
    <section>
      <Header>
        <h1>Class schedule</h1>
        <Button
          text="Add Class Schedule"
          backgroundColor={theme.color.button.blue}
          fontColor={theme.color.button.white}
          onClick={handleClickedAddButton}
          borderRadius="6px"
          padding="10px 15px"
        />
      </Header>
      <Article>
        {Days.map((day, index) => (
          <DayTable key={index}>
            <DayHeader>{day}</DayHeader>
            <DayContent>
              {formattedSchedules.hasOwnProperty(day) &&
                formattedSchedules[day].map(({ id, startTime }) => (
                  <TimeBlock
                    key={id}
                    id={id}
                    startTime={getPrettyTime(startTime)}
                    endTime={getPrettyEndTime(startTime)}
                    onClickDelete={handleDeleteClick}
                  />
                ))}
            </DayContent>
          </DayTable>
        ))}
      </Article>
    </section>
  );
};

export default SchedulePage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  font-size: 32px;
  margin-bottom: 15px;
`;

const Article = styled.article`
  ${({ theme }) => theme.mixins.flexBox('flex-start', 'space-between')}
  background-color: ${({ theme }) => theme.color.background.white};
  padding: 40px 32px;
  min-height: 600px;
  ${({ theme }) => theme.mixins.boxShadow};
`;
const DayTable = styled.div`
  width: calc(100% / 7);
`;
const DayHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.border.black};
  text-align: center;
  margin-bottom: 20px;
`;
const DayContent = styled.div`
  margin: 0 auto;
`;
