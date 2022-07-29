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
  ${({ theme }) => theme.mixins.flexBox('left', 'space-between')}
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background.lightgray};
  padding: 0.8rem 1.1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.font.darkgray};
  margin-bottom: 1.2rem;
  line-height: 1.1rem;
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
  border-radius: 18px;
  &:active {
    background-color: ${({ theme }) => theme.color.background.darkgray};
  }
`;
