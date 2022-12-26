import {ReactNode, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';

import {drawerPositions, drawerSizes} from './Drawer.styles';
import {
  DrawerPosition,
  DrawerSizeDimension,
  DrawerSizes,
  DrawerStyledProps,
} from './Drawer.types';

import {DrawerPortal} from 'components/Portals/DrawerPortal';
import {Backdrop} from 'components/Backdrop';
import {useClickOutside} from 'hooks/useClickOutside';
import {useEscapeKey} from 'hooks/useEscapeKey';
import {slideDrawer, slideDrawerIn} from 'components/Transitions';
import {useDelayUnmount} from 'hooks/useDelayUnmount';

interface Props {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  size?: DrawerSizes;
  position?: DrawerPosition;
  animationDuration?: number;
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: number;
}

export const drawerAnimationSize = (
  dimensions: DrawerSizeDimension,
  size: string,
) => (dimensions[size] ? dimensions[size].width : size);

const DrawerWrapper = styled.div<DrawerStyledProps>`
  position: fixed;
  // inset: 0;  top: 0, bottom: 0, left: 0, right: 0. (bottom:0 will make sure the element uses the full height)
  z-index: 1;
  box-sizing: border-box;
  width: ${(props) =>
    drawerSizes[props.size] ? drawerSizes[props.size].width : props.size};
  background: #fff;
  position: fixed;
  padding-inline: 20px;
  padding-block: 20px;
  overflow-y: scroll;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 20px 25px -5px,
    rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  ${(props) => css`
    ${drawerPositions(props.position)}
  `}

  animation-name: ${(props) =>
    props.open
      ? slideDrawer(
          drawerAnimationSize(drawerSizes, props.size),
          props.position,
        )
      : slideDrawerIn(
          drawerAnimationSize(drawerSizes, props.size),
          props.position,
        )};
  animation-fill-mode: forwards;
  animation-duration: ${(props) => `${props.animationDuration}ms`};
`;

const DrawerTitle = styled.div`
  margin-bottom: 20px;
`;

const DrawerBody = styled.div``;

export const Drawer = ({
  children,
  open,
  onClose = () => {},
  title,
  size = 'xs',
  position = 'left',
  animationDuration = 300,
  overlayBlur,
  overlayColor,
  overlayOpacity,
}: Props) => {
  const drawerRef = useRef<any>(null);
  useClickOutside(drawerRef, onClose);
  useEscapeKey(onClose);
  const render = useDelayUnmount(open!, animationDuration);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return render ? (
    <DrawerPortal>
      <Backdrop
        show={open}
        animationDuration={animationDuration}
        overlayBlur={overlayBlur}
        overlayColor={overlayColor}
        overlayOpacity={overlayOpacity}
      />
      <DrawerWrapper
        ref={drawerRef}
        size={size}
        position={position}
        open={open}
        animationDuration={animationDuration}>
        {title ? <DrawerTitle>{title}</DrawerTitle> : null}

        <DrawerBody>{children}</DrawerBody>
      </DrawerWrapper>
    </DrawerPortal>
  ) : null;
};
