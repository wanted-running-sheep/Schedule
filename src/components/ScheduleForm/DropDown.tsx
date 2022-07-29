import { ButtonType } from '@/@types/enum';
import React from 'react';
import styled, { css } from 'styled-components';

interface DropDownProps {
  dopDownItems: string[];
  trigger: boolean;
  onClickTime: (time: string) => void;
}

const DropDown = ({ dopDownItems, trigger, onClickTime }: DropDownProps) => {
  return (
    <Wrapper trigger={trigger}>
      {dopDownItems.map((item) => (
        <Item key={item} onClick={() => onClickTime(item)}>
          {item}
        </Item>
      ))}
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.ul<{ trigger: boolean }>`
  width: 50px;
  height: calc(100% / 11.8);
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: scroll;
  ${({ theme }) => theme.mixins.noScrollBar}
  ${({ theme }) => theme.mixins.scrollSnap.parent}
  ${({ theme, trigger }) => {
    const { dropDownMountedAnimation, dropDownUnMountedAnimation } =
      theme.animation.dropDownAnimation;

    return css`
      animation: ${trigger
          ? dropDownMountedAnimation
          : dropDownUnMountedAnimation}
        300ms ease-in-out forwards;
      transform-origin: top center;
    `;
  }}
`;

const Item = styled.li`
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 5px 0px;
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  cursor: pointer;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.mixins.scrollSnap.child}
  &:hover {
    background-color: ${({ theme }) => theme.color.background.gray};
  }
`;
