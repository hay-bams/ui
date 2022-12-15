import {keyframes} from 'styled-components';

export const fade = (opacity: number) => keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: ${opacity}
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

export const slideDrawer = (width: any) => keyframes`
0% {
  width: 0
}
100% {
  width: ${width}
}
`;
