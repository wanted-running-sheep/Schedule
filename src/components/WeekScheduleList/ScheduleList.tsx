import { WEEK_LIST } from '@/constants';
import React from 'react';
import styled from 'styled-components';
import { Close } from '../svg';

const ScheduleList = () => {
  return (
    <Wrapper>
      {WEEK_LIST.map((day) => {
        return (
          <ScheduleContainer key={day}>
            <ScheduleItem>
              10:00 AM - 10:40 AM
              <IconWrapper>
                <Close />
              </IconWrapper>
            </ScheduleItem>
          </ScheduleContainer>
        );
      })}
    </Wrapper>
  );
};

export default ScheduleList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ScheduleContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const ScheduleItem = styled.li`
  ${({ theme }) => theme.mixins.flexBox()};
  padding: 5px;
  background-color: ${({ theme }) => theme.color.background.gray};
  font-size: 0.8rem;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

const IconWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  height: 100%;
  & :hover {
    color: ${({ theme }) => theme.color.font.black};
  }
  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.color.font.lightgray};
    cursor: pointer;
  }
`;
