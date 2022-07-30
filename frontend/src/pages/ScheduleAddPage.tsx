import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
          <TimePicker getTime={getTime} />
          <RadioWrapper>
            <AMPMRadio selectedTime={time} />
          </RadioWrapper>
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
  height: 130px;

  h3 {
    width: 160px;
  }
`;
const RadioWrapper = styled.div`
  margin-left: 20px;
`;
const ButtonsWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')};
  width: 860px;
`;
const Footer = styled.footer`
  text-align: right;
`;
