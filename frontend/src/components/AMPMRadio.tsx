import React, { useEffect, useState } from 'react';

import { INITIAL_INDEX } from '@/constants';
import { Periods, PeriodsType } from '@/types/enum';

import styled from 'styled-components';

interface AMPMRadioProps {
  getChecked?: (value: string) => void;
  selectedTime: number;
}

const AMPMRadio = ({
  getChecked = (value: string) => {},
  selectedTime,
}: AMPMRadioProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodsType>(
    Periods[INITIAL_INDEX]
  );

  useEffect(() => {
    const periodIndex = selectedTime >= 1200 ? 1 : 0;
    setSelectedPeriod(Periods[periodIndex]);
  }, [selectedTime]);

  const handleChangedRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedPeriod(value as PeriodsType);
    getChecked(value);
  };

  return (
    <Wrapper>
      {Periods.map((period) => (
        <div key={period}>
          <RadioButton
            id={period}
            type="radio"
            value={period}
            checked={period === selectedPeriod}
            onChange={handleChangedRadio}
            disabled
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
  cursor: default;
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.color.button.darkgray};
    color: ${({ theme }) => theme.color.button.white};
  }
`;
