import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@/assets/css/font.css';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
   font-family: 'GothicA1-Light', sans-serif;
 }
 #root, html, body {
   height: 100%;
 }
 h1{
  font-size: 40px;
  font-weight: 700;
 }
 h3{
  font-size: 28px;
  font-weight: 500;
 }
 button{
  font-size: 18px;
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
