import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Cancel from '@/assets/images/Cancel.png';
import Title from '@/components/Title';
import Button from '@/components/Button';
import Article from '@/components/Article';

import { Days } from '@/types/common';
import { MAX_HOURS } from '@/api/constants';
import useScheduleModel from '@/api/models/useScheduleModel';

const SchedulePage = () => {
  const navigate = useNavigate();
  const { schedule, getScheduleData } = useScheduleModel();
  useEffect(() => {
    getScheduleData();
  }, []);

  const calculateMeridiem = (hours: number) => {
    return hours < MAX_HOURS ? 'AM' : 'PM';
  };
  const formatHours = (hours: number) => {
    let generalTime = hours % MAX_HOURS;
    generalTime = generalTime ? generalTime : MAX_HOURS;
    return generalTime;
  };
  // padStart
  const formatMinutes = (minutes: string) => {
    const MAX_MINUTES_LENGTH = 2;
    const minutesLength = minutes.length;
    console.log(minutesLength);
    if (minutesLength >= MAX_MINUTES_LENGTH) return minutes;
    return 0 + minutes;
  };

  const formatTimeStamp = (inputedTime: EpochTimeStamp) => {
    const CLASS_HOURS = 40;

    const startTime = new Date(inputedTime);
    const startHours = formatHours(startTime.getHours());
    const startMinutes = startTime.getMinutes();

    const endTime = new Date(inputedTime);
    endTime.setMinutes(startMinutes + CLASS_HOURS);
    const endHours = formatHours(endTime.getHours());
    const endMinutes = endTime.getMinutes();

    const startMeridiem = calculateMeridiem(startTime.getHours());
    const endMeridiem = calculateMeridiem(endTime.getHours());

    return `${startHours}:${formatMinutes(
      startMinutes + ''
    )} ${startMeridiem} - ${endHours}:${formatMinutes(
      endMinutes + ''
    )} ${endMeridiem}`;
  };

  return (
    <>
      <Header>
        <Title name="Class Schedule" />
        <Button name="Add Class Schedule" onClick={() => navigate('/add')} />
      </Header>
      <Article>
        {Days.map((day, index) => (
          <Day key={index}>
            <DayHeader>{day}</DayHeader>
            <DayWrapper>
              {schedule.map(
                ({ workDays, startTime }, index) =>
                  JSON.stringify(workDays).includes(day) && (
                    <DayContent key={index}>
                      <span>{formatTimeStamp(startTime)}</span>
                      <img src={Cancel} alt="Cancel" />
                    </DayContent>
                  )
              )}
            </DayWrapper>
          </Day>
        ))}
      </Article>
    </>
  );
};

export default SchedulePage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;
const Day = styled.div`
  width: calc(100% / 7);
  height: 100%;
`;
const DayHeader = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.color.border.gray};
  font-size: 1.3rem;
  text-align: center;
  padding: 10px 0px;
`;
const DayWrapper = styled.div`
  margin-top: 30px;
`;
const DayContent = styled.div`
  ${({ theme }) => theme.mixins.flexBox('flex-start', 'space-between')};
  background: ${({ theme }) => theme.color.background.gray};
  color: ${({ theme }) => theme.color.font.gray};
  width: 60%;
  margin: 10px auto;
  padding: 8px 7px;
  border-radius: 7px;

  span {
    width: 80%;
    font-size: 1.1rem;
  }
  img {
    height: 20px;
  }
`;
