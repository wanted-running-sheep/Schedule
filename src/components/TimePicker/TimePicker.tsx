import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

import pad2Digit from '@/utils/pad2Digit';
import { INITIAL_INDEX } from '@/constants';

import styled from 'styled-components';

const hours = new Array(12).fill(0).map((_, index) => index + 1);
const minutes = new Array(12).fill(0).map((_, index) => index * 5);

interface TimePickerProps {
  getTime?: (time: string) => void;
}

const TimePicker = ({ getTime = (time: string) => {} }: TimePickerProps) => {
  const [selectedHour, setSelectedHour] = useState<string>(
    pad2Digit(hours[INITIAL_INDEX])
  );
  const [selectedMinute, setSelectedMinute] = useState<string>(
    pad2Digit(minutes[INITIAL_INDEX])
  );

  useEffect(() => {
    getTime(selectedHour + selectedMinute);
  }, [selectedHour, selectedMinute]);

  const handleSelectedHour = (selectedItem: string) => {
    setSelectedHour(selectedItem);
  };
  const handleSelectedMinute = (selectedItem: string) => {
    setSelectedMinute(selectedItem);
  };

  return (
    <Wrapper>
      <Dropdown
        items={hours}
        selectedItem={selectedHour}
        getSelected={handleSelectedHour}
      />
      <span>:</span>
      <Dropdown
        items={minutes}
        selectedItem={selectedMinute}
        getSelected={handleSelectedMinute}
      />
    </Wrapper>
  );
};

export default TimePicker;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  width: 122px;
`;
