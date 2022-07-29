import React from 'react';
import styled from 'styled-components';

interface TimeBlockProps {
  startTime: string;
  endTime: string;
  id: number;
  onClickDelete?: (id: number) => void;
}

const TimeBlock = ({
  startTime,
  endTime,
  id,
  onClickDelete = (id: number) => {},
}: TimeBlockProps) => {
  const handleClickedDeleteButton = () => {
    onClickDelete(id);
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
  background-color: ${({ theme }) => theme.color.background.lightgray};
  padding: 12px 15px;
  width: 150px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.font.darkgray};
  margin: 0 auto;
  margin-bottom: 20px;
  &:hover {
    ${({ theme }) => theme.mixins.boxShadow};
  }
`;

const TopWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('left', 'space-between')};
  width: 120px;
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.color.button.gray};
  color: ${({ theme }) => theme.color.font.white};
  border-radius: 16px;
  font-size: 16px;
  width: 22px;
  height: 22px;
  &:active {
    background-color: ${({ theme }) => theme.color.background.darkgray};
  }
`;
