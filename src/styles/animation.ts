import { Keyframes, keyframes } from 'styled-components';

type DropDownAniMationType =
  | 'dropDownMountedAnimation'
  | 'dropDownUnMountedAnimation';

const dropDownAnimation: { [k in DropDownAniMationType]: Keyframes } = {
  dropDownMountedAnimation: keyframes`
    0% {
        transform: scaleY(0)
    }
    100% {
        transform: scaleY(1)
    }
  `,
  dropDownUnMountedAnimation: keyframes`
    0% {
        transform: scaleY(1)
    }
    100% {
        transform: scaleY(0)
    }
  `,
};

const animation = {
  dropDownAnimation,
};
export default animation;
