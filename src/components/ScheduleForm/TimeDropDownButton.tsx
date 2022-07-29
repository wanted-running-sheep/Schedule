import { ButtonTypeEnum, ButtonType } from '@/@types/enum';
import { useTimeState } from '@/context/TimeContext';
import { createHourList, createMinuteList } from '@/util/createTime';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

const TimeDropDownButton = () => {
  const buttonTrigger = {
    hour: false,
    minute: false,
  };
  const { time, setTimeByTimeString } = useTimeState();
  const [isDropDownVlsible, setIsDropDownVisible] = useState(buttonTrigger);
  const [isAnimation, setIsAnimation] = useState(buttonTrigger);

  const checkDropDown = (type: ButtonType) => {
    if (isDropDownVlsible[type]) {
      setIsAnimation((prev) => ({ ...prev, [type]: false }));
      setTimeout(() => {
        setIsDropDownVisible((prev) => ({ ...prev, [type]: !prev[type] }));
      }, 300);
    } else {
      setIsAnimation((prev) => ({ ...prev, [type]: true }));
      setIsDropDownVisible((prev) => ({ ...prev, [type]: !prev[type] }));
    }
  };
  const onToggleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    const type = name as ButtonType;
    checkDropDown(type);
  };

  const onClickTime = (timeKey: ButtonType) => {
    return (time: string) => {
      setTimeByTimeString(timeKey, time);
      checkDropDown(timeKey);
    };
  };

  return (
    <>
      <TimeButtonContainer>
        <TimeButton
          onClick={(event) => onToggleDropDown(event)}
          name={ButtonTypeEnum.HOUR}
        >
          {time.hour}
        </TimeButton>
        {isDropDownVlsible.hour && (
          <DropDown
            dopDownItems={createHourList()}
            trigger={isAnimation.hour}
            onClickTime={onClickTime(ButtonTypeEnum.HOUR)}
          />
        )}
      </TimeButtonContainer>
      <Divider>:</Divider>
      <TimeButtonContainer>
        <TimeButton
          onClick={(event) => onToggleDropDown(event)}
          name={ButtonTypeEnum.MINUTE}
        >
          {time.minute}
        </TimeButton>
        {isDropDownVlsible.minute && (
          <DropDown
            dopDownItems={createMinuteList()}
            trigger={isAnimation.minute}
            onClickTime={onClickTime(ButtonTypeEnum.MINUTE)}
          />
        )}
      </TimeButtonContainer>
    </>
  );
};

export default TimeDropDownButton;

const TimeButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  &:nth-last-child(2) {
    margin-left: 20px;
  }
`;

const TimeButton = styled.button`
  ${({ theme }) => theme.mixins.flexBox()}
  ${({ theme }) => theme.mixins.boxShadow}
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};

  padding: 10px;
  width: 50px;

  &:hover {
    opacity: 0.6;
  }
`;
const Divider = styled.div`
  margin: 0px 5px;
`;
