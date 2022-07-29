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
 html{
  font-size: 10px;
 }
 body{
  font-size: 1.5rem;
 }
 h1{
  font-size: 2.5rem;
  font-weight: 700;
 }
 h3{
  font-size: 1.8rem;
  font-weight: 500;
 }
 button{
  font-size: 1.5rem;
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
