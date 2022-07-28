import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import Title from '@/components/Title';
import Radio from '@/components/Radio';
import useFormatTime from '@/hooks/useFormatTime';
import { hours, minutes, Days } from '@/types/common';

const AddSchedulePage = () => {
  const { padTime } = useFormatTime();
  return (
    <>
      <Title name="Add Class Schedule" />
      <Article>
        <Content>
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
            <Radio name="meridiem" type="AM" />
            <Radio name="meridiem" type="PM" />
          </RadioWrapper>
        </Content>
        <Content>
          <p>Repeat on</p>
          {Days.map((day, index) => (
            <DayButton key={index}>{day}</DayButton>
          ))}
        </Content>
      </Article>
      <ButtonWrapper>
        <Button name="Save" width="150px" />
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
    width: 55px;
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
const DayButton = styled.button`
  background: ${({ theme }) => theme.color.background.white};
  border: 1px solid ${({ theme }) => theme.color.border.gray};
  height: 45px;
  width: 110px;
  margin-right: 10px;
`;
