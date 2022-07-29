import React from 'react';
import styled from 'styled-components';
import XButton from '@/assets/icons/XButton';
import { Schedule } from 'request';

interface ScheduleBoxProps {
  schedule: Schedule;
}

const ScheduleBox = ({ schedule }: ScheduleBoxProps) => {
  return (
    <Wrapper>
      <div>
        <span>10:00 AM - </span>
        <span>10:40 AM</span>
      </div>
      <div>
        <XButton />
      </div>
    </Wrapper>
  );
};

export default ScheduleBox;

const Wrapper = styled.div`
  width: 100%;
  padding: 7px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.font.darkgray};
  background-color: ${({ theme }) => theme.color.background.lightgray};
  text-align: left;
  font-weight: 500;
  line-height: 1.3rem;
  display: flex;
  &:hover {
    ${({ theme }) => theme.mixins.boxShadow}
  }
  svg {
    width: 25px;
    height: 25px;
    &:active {
      fill: ${({ theme }) => theme.color.background.darkgray};
    }
  }
  span {
    display: inline-block;
  }
`;
