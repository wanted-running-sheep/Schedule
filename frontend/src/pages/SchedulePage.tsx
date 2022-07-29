import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import TimeBlock from '@/components/TimeBlock';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

import { ScheduleWithoutDayInterface, ScheduleInterface } from 'request';
import useScheduleModel from '@/api/models/useScheduleModel';
import days from '@/utils/weekDays';
import { getPrettyTime, getPrettyEndTime } from '@/utils/formatTime';

interface organizedSchedulesInterface {
  [key: string]: ScheduleWithoutDayInterface[];
}

const SchedulePage = () => {
  const [organizedSchedules, setOrganizedSchedules] =
    useState<organizedSchedulesInterface>({});
  const { schedules, getScheduleData, deleteSchedule } = useScheduleModel();
  const navigate = useNavigate();

  const handleClickedAddButton = () => {
    navigate('/schedule/add');
  };

  useEffect(() => {
    getScheduleData();
  }, []);

  const getOrganizedSchedules = (schedules: ScheduleInterface[]) => {
    const organizedSchedules: organizedSchedulesInterface = {};
    for (let { day, ...otherData } of schedules) {
      if (organizedSchedules.hasOwnProperty(day)) {
        organizedSchedules[day] = [
          ...organizedSchedules[day],
          { ...otherData },
        ];
      } else {
        organizedSchedules[day] = [{ ...otherData }];
      }
    }
    Object.keys(organizedSchedules).map((day) =>
      organizedSchedules[day].sort((a, b) => a.startTime - b.startTime)
    );
    return organizedSchedules;
  };

  useEffect(() => {
    setOrganizedSchedules(getOrganizedSchedules(schedules));
  }, [schedules]);

  const handleClickedDelete = async (id: number) => {
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
        <TimeTable>
          <Head>
            {days.map((day, index) => (
              <Th key={day} index={index}>
                {day}
              </Th>
            ))}
          </Head>
          <Body>
            {days.map((day, index) => (
              <Td key={day} index={index}>
                {organizedSchedules.hasOwnProperty(day) &&
                  organizedSchedules[day].map(({ id, startTime }) => (
                    <TimeBlock
                      key={id}
                      id={id}
                      startTime={getPrettyTime(startTime)}
                      endTime={getPrettyEndTime(startTime)}
                      onClickDelete={handleClickedDelete}
                    />
                  ))}
              </Td>
            ))}
          </Body>
        </TimeTable>
      </Article>
    </section>
  );
};

export default SchedulePage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  margin-bottom: 1rem;
`;

const Article = styled.article`
  background-color: ${({ theme }) => theme.color.background.white};
  padding: 30px 20px;
  margin-bottom: 20px;
`;

const TimeTable = styled.div``;

const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.black};
  text-align: center;
`;

const Th = styled.div<{ index: number }>`
  grid-column: ${({ index }) => index + 1};
  grid-row: 1;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 20px;
`;

const Td = styled.div<{ index: number }>`
  ${({ theme }) => theme.mixins.flexBox('center', 'start')}
  flex-direction: column;
`;
