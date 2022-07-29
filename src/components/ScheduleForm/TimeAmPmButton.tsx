import { ButtonAmPmEnum, ButtonAmPmType } from '@/@types/enum';
import { useTimeState } from '@/context/TimeContext';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const TimeAmPmButton = () => {
  const { setTimeByAmPm } = useTimeState();
  const [isClicked, setIsClicked] = useState({
    AM: false,
    PM: false,
  });

  const onClickAmPm = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    const type = name as ButtonAmPmType;

    if (type === ButtonAmPmEnum.AM) {
      setIsClicked((prev) => ({ ...prev, AM: !prev.AM, PM: false }));
    } else {
      setIsClicked((prev) => ({ ...prev, AM: false, PM: !prev.PM }));
    }
    setTimeByAmPm(type);
  };

  return (
    <>
      <TimeButtonContainer>
        <TimeButton
          name={ButtonAmPmEnum.AM}
          isClicked={isClicked.AM}
          onClick={onClickAmPm}
        >
          {ButtonAmPmEnum.AM}
        </TimeButton>
      </TimeButtonContainer>
      <TimeButtonContainer>
        <TimeButton
          name={ButtonAmPmEnum.PM}
          isClicked={isClicked.PM}
          onClick={onClickAmPm}
        >
          {ButtonAmPmEnum.PM}
        </TimeButton>
      </TimeButtonContainer>
    </>
  );
};

export default TimeAmPmButton;

const TimeButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  &:nth-last-child(2) {
    margin-left: 20px;
  }
`;

const TimeButton = styled.button<{ isClicked: boolean }>`
  ${({ theme }) => theme.mixins.flexBox()}
  ${({ theme }) => theme.mixins.boxShadow}
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};

  padding: 10px;
  width: 50px;

  ${({ theme, isClicked }) => {
    const {
      background: { darkgray },
      white,
    } = theme.color;

    return css`
      background-color: ${isClicked ? darkgray : white};
    `;
  }}
  &:hover {
    opacity: 0.6;
  }
`;
