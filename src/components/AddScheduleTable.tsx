import { DaysEnum, DaysType, hours, minutes } from '@/@types/enum';
import React from 'react';
import styled from 'styled-components';

const AddScheduleTable = () => {
  return (
    <Wrapper>
      <Row>
        <div>Start time</div>
        <TimePicker>
          <select name="hour" id="hour">
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          :
          <select name="minute" id="minute">
            {minutes.map((minute, index) => (
              <option key={index} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </TimePicker>
        <Meridiem>
          <input type="radio" name="meridiem" id="AM" defaultChecked />
          <label htmlFor="AM">AM</label>
          <input type="radio" name="meridiem" id="PM" />
          <label htmlFor="PM">PM</label>
        </Meridiem>
      </Row>
      <Row>
        <div>Repeat On</div>
        <Days>
          {Object.values(DaysEnum).map((day: DaysType, index) => (
            <div key={index}>
              <input type="checkbox" name="days" id={day} />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
        </Days>
      </Row>
    </Wrapper>
  );
};

export default AddScheduleTable;

const Wrapper = styled.article`
  width: 100%;
  min-height: 40%;
  background-color: ${({ theme }) => theme.color.background.white};
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  font-weight: 500;
`;

const Row = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};
  gap: 20px;
`;

const TimePicker = styled.div`
  select {
    ${({ theme }) => theme.select.time};

    &:active {
      ${({ theme }) => theme.select.active};
    }

    option {
      background-color: ${({ theme }) => theme.color.background.white};
    }
  }
`;

const Meridiem = styled.div`
  display: flex;
  gap: 10px;
  input[type='radio'] {
    ${({ theme }) => theme.input.radio.meridiem()};

    + label {
      ${({ theme }) => theme.label.radio.meridiem()};
    }

    &:checked + label {
      ${({ theme }) => theme.label.radio.checked()};
    }
  }
`;

const Days = styled.div`
  gap: 5px;
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};

  input[type='checkbox'] {
    ${({ theme }) => theme.input.checkbox.day()};

    + label {
      ${({ theme }) => theme.label.checkbox.day()};
    }

    &:checked + label {
      ${({ theme }) => theme.label.checkbox.checked()};
    }
  }
`;
