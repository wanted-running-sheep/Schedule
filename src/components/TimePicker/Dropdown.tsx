import React, { useState } from 'react';
import pad2Digit from '@/utils/pad2Digit';

import styled, { css } from 'styled-components';

interface DropdownProps {
  items: number[];
  selectedItem: string;
  getSelected?: (selectedItem: string) => void;
}

const Dropdown = ({
  selectedItem,
  items,
  getSelected = (selectedItem: string) => {},
}: DropdownProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClickedDisplay = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleBlurDropdown = () => {
    setIsVisible(false);
  };

  const handleClickedItem = (event: React.MouseEvent<HTMLLIElement>) => {
    const selectedValue = event.currentTarget.textContent as string;
    getSelected(selectedValue);
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Wrapper onBlur={handleBlurDropdown} tabIndex={0}>
      <Display onClick={handleClickedDisplay}>
        <span>{selectedItem}</span>
        <DownArrow />
      </Display>
      {isVisible && (
        <div>
          <Ul isVisible={isVisible}>
            {items.map((item) => (
              <Li key={item} onClick={handleClickedItem}>
                {pad2Digit(item)}
              </Li>
            ))}
          </Ul>
        </div>
      )}
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  flex-direction: column;
`;

const Display = styled.div`
  background-color: ${({ theme }) => theme.color.button.white};
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => theme.color.border.darkgray};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.background.lightgray};
  }
`;

const DownArrow = styled.div`
  display: inline-block;
  border: 6px solid transparent;
  border-top-color: ${({ theme }) => theme.color.button.darkgray};
  transform: translate(5px, 35%);
`;

const Ul = styled.ul<{ isVisible: boolean }>`
  position: absolute;
  ${({ theme }) => theme.mixins.noScrollBar}
  ${({ theme }) => theme.mixins.scrollSnap.parent}
  ${({ theme, isVisible }) => {
    const { dropDownMountedAnimation, dropDownUnMountedAnimation } =
      theme.animation.dropDownAnimation;
    return css`
      animation: ${isVisible
          ? dropDownMountedAnimation
          : dropDownUnMountedAnimation}
        0.3s ease-in-out;
      transform-origin: top center;
    `;
  }}
  width: 52px;
  height: 85px;
  overflow-y: scroll;
  transform: translate(-26px);
`;

const Li = styled.li`
  background-color: ${({ theme }) => theme.color.button.white};
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  border-top: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.background.lightgray};
  }
`;
