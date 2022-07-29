import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimePicker from '@/components/TimePicker/TimePicker';
import AMPMRadio from '@/components/AMPMRadio';
import Button from '@/components/@common/Button';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import useScheduleModel from '@/api/models/useScheduleModel';
import days from '@/utils/weekDays';

const buttonBorder = `1px solid ${theme.color.border.lightgray}`;
const fontColor = `${theme.color.font.lightgray}`;

const ScheduleAddPage = () => {
  const [isButtonsClicked, setIsButtonClicked] = useState<boolean[]>(
    new Array(7).fill(false)
  );
  const [period, setPeriod] = useState<string>('AM');
  const [time, setTime] = useState<number>(100);
  const { createtSchedule, checkSavedScheduleData } = useScheduleModel();
  const navigate = useNavigate();

  const handleClickedDaysButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clickedDay = event.currentTarget.textContent as string;
    const indexOfDays = days.indexOf(clickedDay);
    const newClickedState = isButtonsClicked;
    newClickedState[indexOfDays] = !newClickedState[indexOfDays];
    setIsButtonClicked([...newClickedState]);
  };

  const getPeriodChecked = (value: string) => {
    setPeriod(value);
  };

  const getTime = (value: string) => {
    setTime(Number(value));
  };

  const get24HourFormat = (time: number, period: string) => {
    const helpNumber = 12 * 100;
    const hour = Math.floor(time / 100);

    if (period === 'PM' && hour === 12) return time;
    if (period === 'PM') return time + helpNumber;
    if (hour === 12) return time - helpNumber;
    return time;
  };

  const handleClickedSaveButton = async () => {
    const selectedTime = get24HourFormat(time, period);
    const selectedDays = isButtonsClicked
      .map((isSelected, index) => isSelected && days[index])
      .filter((day) => day);

    let response = null;
    for (let day of selectedDays) {
      const schedule = {
        day: day,
        startTime: selectedTime,
      };

      response = await checkSavedScheduleData(
        day as string,
        selectedTime as number
      );
      if (!response.result) break;
      if (response.data && response.data.length > 0) break;

      response = await createtSchedule(schedule);
      if (!response.result) break;
    }
    response && alert(response.msg);
    response && response.result && navigate('/schedule');
  };

  return (
    <section>
      <Header>
        <h1>Add class schedule</h1>
      </Header>
      <Article>
        <TimeSection>
          <h3>Start time</h3>
          <TimePicker getTime={getTime} />
          <AMPMRadio getChecked={getPeriodChecked} />
        </TimeSection>
        <DaySection>
          <h3>Repeat on</h3>
          <ButtonsWrapper>
            {days.map((day, index) => (
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
        </DaySection>
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
  padding: 30px 20px;
  margin-bottom: 20px;
`;

const TimeSection = styled.section`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  max-width: 360px;
  margin-bottom: 100px;
`;

const DaySection = styled.section`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  width: 956px;
`;

const ButtonsWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')};
  width: 860px;
`;

const Footer = styled.footer`
  ${({ theme }) => theme.mixins.flexBox('center', 'right')};
`;
