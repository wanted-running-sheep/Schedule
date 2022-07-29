import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddScheduleTable from './AddScheduleTable';

const AddPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>Add class schedule</Header>
      <AddScheduleTable />
      <ButtonBox>
        <Button onClick={() => navigate('/main')}>Save</Button>
      </ButtonBox>
    </>
  );
};

export default AddPage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ButtonBox = styled.article`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-end')};
`;

const Button = styled.button`
  width: 12rem;
  ${({ theme }) => theme.button.primary};
  &:hover {
    ${({ theme }) => theme.button.hover};
  }
  &:active {
    ${({ theme }) => theme.button.active};
  }
`;
