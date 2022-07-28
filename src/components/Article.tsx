import React from 'react';
import styled from 'styled-components';

interface ArticleProps {
  children: React.ReactNode;
}
const Article = ({ children }: ArticleProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Article;

const Wrapper = styled.article`
  ${({ theme }) => theme.mixins.boxShadow()};
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  background: ${({ theme }) => theme.color.background.white};
  width: 100%;
  height: 400px;
  padding: 10px 15px;
  margin-top: 40px;
`;
