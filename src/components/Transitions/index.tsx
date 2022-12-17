import {DrawerPosition} from 'components/Drawer/Drawer.types';
import {css, keyframes} from 'styled-components';

export const fade = (opacity: number) => keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: ${opacity}
  }
`;

export const unFade = (opacity: number) => keyframes`
  0% {
    opacity: ${opacity}
  }
  100% {
    opacity: 0
  }
`;

export const scale = () => keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;

export const translatePosition = (position:DrawerPosition, value: any) => {
  switch (position) {
    case 'right':
      return value;
    case 'top':
      return `-${value}`;
    case 'bottom':
      return value;
    default:
      return `-${value}`;
  }
}

export const slideDrawer = (
  width: any,
  position: DrawerPosition = 'left',
) => keyframes`
0% {

  transform: ${css`
    ${position === 'left' || position === 'right'
      ? `translateX(${translatePosition(position, '1000px')})`
      : `translateY(${translatePosition(position, '1000px')})`}
  `} ;
}
100% {
  transform: ${css`
    ${position === 'left' || position === 'right'
      ? `translateX(0px)`
      : `translateY(0px)`}
  `} ;
}
`;

export const slideDrawerIn = (
  width: any,
  position: DrawerPosition = 'left',
) => keyframes`
0% {
  transform: ${css`
    ${position === 'left' || position === 'right'
      ? `translateX(0px)`
      : `translateY(0px)`}
  `} ;
}
100% {
  
  transform: ${css`
    ${position === 'left' || position === 'right'
      ? `translateX(${translatePosition(position, '1000px')})`
      : `translateY(${translatePosition(position, '1000px')})`}
  `} ;
}
`;
