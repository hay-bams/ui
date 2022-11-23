import styled from 'styled-components';

export interface BackdropProps {
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: number;
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
  opacity: ${(props) => (props.overlayOpacity ? props.overlayOpacity : 0.5)};
  height: 100%;
`;

export const Backdrop = ({
  overlayBlur,
  overlayOpacity,
  overlayColor,
}: BackdropProps) => (
  <BackdropContainer overlayBlur={overlayBlur}>
    <BackdropStyled
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
    />
  </BackdropContainer>
);
