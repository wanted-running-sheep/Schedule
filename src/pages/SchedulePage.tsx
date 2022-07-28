import React from 'react';
import styled from 'styled-components';
import Title from '@/components/Title';
import Button from '@/components/Button';

const SchedulePage = () => {
  return (
    <>
      <Header>
        <Title name="Class Schedule" />
        <Button name="Add Class Schedule" />
      </Header>
    </>
  );
};

export default SchedulePage;

const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;
