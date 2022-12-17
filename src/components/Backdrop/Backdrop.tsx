import {ReactNode} from 'react';
import styled from 'styled-components';

import {fade, unFade} from 'components/Transitions';

export interface BackdropProps {
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: number;
  children?: ReactNode;
  show?: boolean;
  onAnimationEnd?: () => void;
  animationDuration?: string;
}

export const BackdropContainer = styled.div<BackdropProps>`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: ${(props) => `blur(${props.overlayBlur}px)`};
`;

export const BackdropStyled = styled.div<BackdropProps>`
  background: ${(props) =>
    props.overlayColor ? props.overlayColor : 'rgb(0, 0, 0)'};
  height: 100%;
  animation-name: ${(props) =>
    props.show ? fade(props.overlayOpacity!) : unFade(props.overlayOpacity!)};
  animation-duration: ${(props) => props.animationDuration};
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

export const Backdrop = ({
  overlayBlur,
  overlayOpacity = 0.5,
  overlayColor,
  children,
  show,
  onAnimationEnd = () => {},
  animationDuration = '250ms',
}: BackdropProps) => (
  <BackdropContainer overlayBlur={overlayBlur}>
    <BackdropStyled
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      show={show}
      onAnimationEnd={onAnimationEnd}
      animationDuration={animationDuration}>
      {children || null}
    </BackdropStyled>
  </BackdropContainer>
);
