import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ScheduleInterface } from 'request';
import Button from '@/components/@shared/Button';
import Title from '@/components/@shared/Title';
import Radio from '@/components/@shared/Radio';
import WeeklyButtonList from '@/components/AddSchedule/WeeklyButtonList';
import useFormatTime from '@/hooks/useFormatTime';
import useScheduleModel from '@/api/models/useScheduleModel';
import { hours, minutes, DaysType } from '@/types/common';

const AddSchedulePage = () => {
  const navigate = useNavigate();
  const { padTime } = useFormatTime();
  const { postSchedule } = useScheduleModel();
  const [timeInfo, setTimeInfo] = useState({ hours: 0, minutes: 0 });
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedDays, setSelectedDays] = useState<DaysType[]>([]);

  const handleBlur = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case 'hours':
        setSelectedHours(value);
      case 'minutes':
        setTimeInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submitSchedule = async () => {
    const { hours, minutes } = timeInfo;
    const submitDate = new Date();
    submitDate.setHours(hours);
    submitDate.setMinutes(minutes);
    const submitData: ScheduleInterface = {
      id: 0,
      startTime: submitDate.getTime(),
      workDays: selectedDays,
    };

    await postSchedule(submitData);
    navigate('/');
  };

  return (
    <>
      <Title name="Add Class Schedule" />
      <Article>
        <Content onBlur={handleBlur}>
          <p>Start time</p>
          <select name="hours">
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {padTime(hour + '')}
              </option>
            ))}
          </select>
          <span>:</span>
          <select name="minutes">
            {minutes.map((minute, index) => (
              <option key={index} value={minute}>
                {padTime(minute + '')}
              </option>
            ))}
          </select>

          <RadioWrapper>
            <Radio name="meridiem" type="AM" checked={selectedHours < 12} />
            <Radio name="meridiem" type="PM" checked={selectedHours >= 12} />
          </RadioWrapper>
        </Content>
        <Content>
          <p>Repeat on</p>
          <WeeklyButtonList setSelectedDays={setSelectedDays} />
        </Content>
      </Article>
      <ButtonWrapper>
        <Button name="Save" width="150px" onClick={submitSchedule} />
      </ButtonWrapper>
    </>
  );
};

export default AddSchedulePage;

const Article = styled.article`
  ${({ theme }) => theme.mixins.boxShadow()};
  background: ${({ theme }) => theme.color.background.white};
  width: 100%;
  height: 400px;
  padding: 20px 30px;
  margin-top: 40px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  p {
    font-size: 1.2rem;
    width: 120px;
  }
  span {
    margin: 0 10px;
    font-size: 1rem;
  }
  select {
    ${({ theme }) => theme.mixins.lightBoxShadow()};
    border: 1px solid ${({ theme }) => theme.color.border.gray};
    height: 45px;
    width: 60px;
    text-align: center;
  }
`;
const RadioWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  margin-left: 20px;
`;
const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 20px;
`;
