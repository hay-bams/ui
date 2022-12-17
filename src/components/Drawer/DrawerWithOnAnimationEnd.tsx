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

interface Props {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  size?: DrawerSizes;
  position?: DrawerPosition;
  animationDuration?: number;
}

export const drawerAnimationSize = (
  dimensions: DrawerSizeDimension,
  size: string,
) => (dimensions[size] ? dimensions[size].width : size);

const DrawerWrapper = styled.div<DrawerStyledProps>`
  position: fixed;
  // inset: 0;  top: 0, bottom: 0, left: 0, right: 0. (bottom:0 will make sure the element uses the full height)
  z-index: 1;
  width: ${(props) =>
    drawerSizes[props.size] ? drawerSizes[props.size].width : props.size};
  background: #fff;
  position: fixed;
  padding-inline: 20px;
  padding-block: 20px;
  overflow-y: scroll;

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
  animation-duration: ${(props) =>`${props.animationDuration}ms`};
`;

const DrawerTitle = styled.div`
  margin-bottom: 20px;
`;

const Box = styled.div`
  opacity: 1;
`;

const DrawerBody = styled.div``;

export const DrawerWithAnimationEnd = ({
  children,
  open,
  onClose = () => {},
  title,
  size = 'xs',
  position = 'left',
  animationDuration = 300,
}: Props) => {
  const drawerRef = useRef<any>(null);
  useClickOutside(drawerRef, onClose);
  const [show, setShow] = useState(false);
  useEscapeKey(onClose);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setShow(true);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return show ? (
    <DrawerPortal>
      <Backdrop show={open} animationDuration={animationDuration} />
      <DrawerWrapper
        ref={drawerRef}
        size={size}
        position={position}
        open={open}
        animationDuration={animationDuration}
        onAnimationEnd={() => {
          if (!open) setShow(false);
        }}>
        {title ? <DrawerTitle>{title}</DrawerTitle> : null}

        <DrawerBody>{children}</DrawerBody>
      </DrawerWrapper>
    </DrawerPortal>
  ) : null;
};
