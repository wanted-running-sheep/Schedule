import React from 'react';
import styled from 'styled-components';

interface RadioProps {
  name: string;
  type: string;
}
const Radio = ({ name, type }: RadioProps) => {
  return (
    <Wrapper>
      <input type="radio" name={name} id={type} value={type} />
      <label htmlFor={type}>{type}</label>
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  label {
    display: inline-block;
    height: 45px;
    width: 60px;
    text-align: center;
    line-height: 40px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.border.gray};
  }
  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }
  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme.color.background.darkgray};
    color: ${({ theme }) => theme.color.font.white};
  }
`;
