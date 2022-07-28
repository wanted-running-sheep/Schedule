import React from 'react';
import styled from 'styled-components';

import Title from '@/components/Title';

const AddSchedulePage = () => {
  return (
    <>
      <Title name="Add Class Schedule" />
      <Article>
        <Content>
          <p>Start time</p>
          <select name="hours">
            <option value="0">0</option>
          </select>
        </Content>
        <Content>
          <p>Repeat on</p>
        </Content>
      </Article>
    </>
  );
};

export default AddSchedulePage;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Article = styled.article`
  ${({ theme }) => theme.mixins.boxShadow()};
  background: ${({ theme }) => theme.color.background.white};
  width: 100%;
  height: 400px;
  padding: 10px 15px;
  margin-top: 40px;
`;
