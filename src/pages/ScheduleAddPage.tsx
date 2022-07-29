import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { INITIAL_INDEX } from '@/constants';
import { theme } from '@/styles/theme';
import { Days, DaysType, Periods } from '@/types/enum';
import useScheduleModel from '@/api/models/useScheduleModel';

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
  const [period, setPeriod] = useState<string>(Periods[INITIAL_INDEX]);
  const [time, setTime] = useState<number>(100);
  const { createtSchedule, checkSavedScheduleData } = useScheduleModel();

  const handleClickedDaysButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clickedDay = event.currentTarget.textContent as DaysType;
    const indexOfDays = Days.indexOf(clickedDay);
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
      .map((isSelected, index) => isSelected && Days[index])
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
        <Content>
          <h3>Start time</h3>
          <TimePicker getTime={getTime} />
          <RadioWrapper>
            <AMPMRadio getChecked={getPeriodChecked} />
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
  padding: 30px 20px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};
  height: 130px;

  h3 {
    width: 120px;
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
