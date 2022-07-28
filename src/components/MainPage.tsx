import React from 'react';
import ScheduleTable from '@/components/ScheduleTable';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        Class schedule
        <Button onClick={() => navigate('/add')}>Add Class Schedule</Button>
      </Header>
      <ScheduleTable />
    </>
  );
};

export default MainPage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Button = styled.button`
  ${({ theme }) => theme.button.primary};
  &:hover {
    ${({ theme }) => theme.button.hover};
  }
  &:active {
    ${({ theme }) => theme.button.active};
  }
`;
