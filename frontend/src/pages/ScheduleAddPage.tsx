import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { INITIAL_INDEX } from '@/constants';
import { theme } from '@/styles/theme';
import { Days, DaysType, Periods } from '@/types/enum';
import useScheduleModel from '@/api/models/useScheduleModel';

import { MSG_DUPLICATION_SCHEDULE } from '@/constants/message';
import { adjustHourByMinute } from '@/utils/formatTime';
import Button from '@/components/Button';
import AMPMRadio from '@/components/AMPMRadio';
import TimePicker from '@/components/TimePicker/TimePicker';

const buttonBorder = `1px solid ${theme.color.border.lightgray}`;
const fontColor = `${theme.color.font.lightgray}`;

const ScheduleAddPage = () => {
  const navigate = useNavigate();
  const [isButtonsClicked, setIsButtonClicked] = useState<boolean[]>(
    new Array(7).fill(false)
  );
  const [time, setTime] = useState<number>(100);
  const { createSchedule, getScheduleData, schedules } = useScheduleModel();

  useEffect(() => {
    getScheduleData();
  }, []);

  const handleClickedDaysButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clickedDay = event.currentTarget.textContent as DaysType;
    const indexOfDays = Days.indexOf(clickedDay);
    const newClickedState = isButtonsClicked;
    newClickedState[indexOfDays] = !newClickedState[indexOfDays];
    setIsButtonClicked([...newClickedState]);
  };

  const getTime = (value: string) => {
    setTime(Number(value));
  };

  const findSameDayAndTime = (day: string, selectedTime: number) => {
    return schedules
      .filter((schedule) => schedule.day === day)
      .find(
        (schedule) =>
          selectedTime >= schedule.startTime &&
          selectedTime < adjustHourByMinute(schedule.startTime + 40)
      );
  };

  const checkDuplication = (selectedDays: string[], selectedTime: number) => {
    let isDuplicate = false;
    for (let day of selectedDays) {
      if (findSameDayAndTime(day, selectedTime)) {
        isDuplicate = true;
        break;
      }
    }
    return isDuplicate;
  };

  const handleClickedSaveButton = async () => {
    const selectedTime = time;
    const selectedDays = isButtonsClicked
      .map((isSelected, index) => isSelected && Days[index])
      .filter((day) => day);

    if (selectedDays.length === 0) return;
    if (checkDuplication(selectedDays as string[], selectedTime)) {
      alert(MSG_DUPLICATION_SCHEDULE);
      return;
    }

    let response = null;
    const schedules = [];

    for (let day of selectedDays) {
      const schedule = {
        day: day,
        startTime: selectedTime,
      };
      schedules.push(schedule);
    }
    response = await createSchedule(schedules);
    response && alert(response.msg);
    response && response.result && navigate('/schedule');
  };

  return (
    <section>
      <Header>
        <h1>Add class schedule</h1>
      </Header>
      <Article>
        <Content>
          <h3>Start time</h3>
          <StartTimeWrapper>
            <TimePicker getTime={getTime} />
            <RadioWrapper>
              <AMPMRadio selectedTime={time} />
            </RadioWrapper>
          </StartTimeWrapper>
        </Content>
        <Content>
          <h3>Repeat on</h3>
          <ButtonsWrapper>
            {Days.map((day, index) => (
              <Button
                text={day}
                key={day}
                width="110px"
                border={buttonBorder}
                fontColor={fontColor}
                onClick={handleClickedDaysButton}
                isDayButtonClicked={isButtonsClicked[index]}
              />
            ))}
          </ButtonsWrapper>
        </Content>
      </Article>
      <Footer>
        <Button
          text="Save"
          backgroundColor={theme.color.button.blue}
          fontColor={theme.color.button.white}
          onClick={handleClickedSaveButton}
          width="180px"
          borderRadius="6px"
          padding="10px 15px"
        />
      </Footer>
    </section>
  );
};

export default ScheduleAddPage;

const Header = styled.header`
  margin-bottom: 40px;

  ${({ theme }) => theme.media.mobile`
    h1 {
      font-size: 20px;
    }
  `}
`;
const Article = styled.article`
  background-color: ${({ theme }) => theme.color.background.white};
  ${({ theme }) => theme.mixins.flexBox('start', 'center')};
  flex-direction: column;
  padding: 30px 20px;
  margin-bottom: 20px;
  min-height: 330px;
`;
const Content = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};

  h3 {
    width: 140px;
    font-size: 1rem;
    margin: 50px 0px;
  }

  ${({ theme }) => theme.media.tablet`
    display: block;

    h3 {
      margin: 0px;
      margin-bottom: 20px;
    }
  `}
`;
const StartTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
  
  margin-bottom: 30px;
  `}
`;
const RadioWrapper = styled.div`
  margin-left: 20px;
`;
const ButtonsWrapper = styled.div`
  width: 100%;
  button {
    margin-top: 5px;
    margin-right: 10px;
  }
`;
const Footer = styled.footer`
  text-align: right;
`;
