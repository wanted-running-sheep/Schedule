import React from 'react';

import styled from 'styled-components';

interface TimeBlockProps {
  startTime: string;
  endTime: string;
}

const TimeBlock = ({ startTime, endTime }: TimeBlockProps) => {
  const handleClickedDeleteButton = () => {
    // API 삭제 요청
    // 타임 배열에서 삭제
  };

  return (
    <Wrapper>
      <TopWrapper>
        <span>{startTime} -</span>
        <DeleteButton onClick={handleClickedDeleteButton}>x</DeleteButton>
      </TopWrapper>
      <span>{endTime}</span>
    </Wrapper>
  );
};

export default TimeBlock;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('left', 'space-between')}
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background.lightgray};
  padding: 8px 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.font.darkgray};
`;

const TopWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('left', 'space-between')};
  width: 102px;
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.color.button.gray};
  color: ${({ theme }) => theme.color.font.white};
  border-radius: 18px;
`;
