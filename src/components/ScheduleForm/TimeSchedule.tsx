import React, { useState } from 'react';
import styled from 'styled-components';
import TimeAmPmButton from './TimeAmPmButton';
import TimeDropDownButton from './TimeDropDownButton';

const TimeSchedule = () => {
  return (
    <>
      <TimeDropDownButton />
      <TimeAmPmButton />
    </>
  );
};

export default TimeSchedule;
