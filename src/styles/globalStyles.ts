import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@/assets/css/font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
    font-family: Pretendard, -apple-system, sans-serif;
    font-weight: 400;
  }
  h1{
    font-family: Pretendard, -apple-system, sans-serif;
    font-weight: 700;
  }
  #root, html, body {
    height: 100%;
  }
  ul{
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button, svg, input, select, label, li {
    cursor: pointer;
  }
`;

export default GlobalStyles;
