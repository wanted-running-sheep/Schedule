import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import Title from '@/components/Title';
import { hours, minutes } from '@/types/common';

const AddSchedulePage = () => {
  return (
    <>
      <Title name="Add Class Schedule" />
      <Article>
        <Content>
          <p>Start time</p>
          <select name="hours">
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <span>:</span>
          <select name="minutes">
            {minutes.map((minute, index) => (
              <option key={index} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </Content>
        <Content>
          <p>Repeat on</p>
        </Content>
      </Article>
      <ButtonWrapper>
        <Button name="Save" width="100px" />
      </ButtonWrapper>
    </>
  );
};

export default AddSchedulePage;

const Article = styled.article`
  ${({ theme }) => theme.mixins.boxShadow()};
  background: ${({ theme }) => theme.color.background.white};
  width: 100%;
  height: 400px;
  padding: 50px 15px;
  margin-top: 40px;가
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    width: 120px;
  }
  span {
    margin: 0 10px;
    font-size: 1rem;
  }
  select {
    ${({ theme }) => theme.mixins.lightBoxShadow()};
    border: 1px solid ${({ theme }) => theme.color.border.gray};
    height: 45px;
    width: 55px;
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 20px;
`;
