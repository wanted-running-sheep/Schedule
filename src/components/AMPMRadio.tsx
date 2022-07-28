import React, { useState } from 'react';

import styled from 'styled-components';

type PeriodsType = 'AM' | 'PM';

const periods: PeriodsType[] = ['AM', 'PM'];
const INITIAL_INDEX = 0;

interface AMPMRadioProps {
  getChecked?: (value: string) => void;
}

const AMPMRadio = ({ getChecked = (value: string) => {} }: AMPMRadioProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodsType>(
    periods[INITIAL_INDEX]
  );

  const handleChangedRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedPeriod(value as PeriodsType);
    getChecked(value);
  };

  return (
    <Wrapper>
      {periods.map((period) => (
        <div key={period}>
          <RadioButton
            id={period}
            type="radio"
            value={period}
            checked={period === selectedPeriod}
            onChange={handleChangedRadio}
          />
          <Label htmlFor={period}>{period}</Label>
        </div>
      ))}
    </Wrapper>
  );
};

export default AMPMRadio;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  width: 110px;
`;

const Label = styled.label`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.font.black};
  background-color: ${({ theme }) => theme.color.button.white};
  border: 1px solid ${({ theme }) => theme.color.border.darkgray};
  padding: 8px 12px;
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.color.button.darkgray};
    color: ${({ theme }) => theme.color.button.white};
  }
`;
