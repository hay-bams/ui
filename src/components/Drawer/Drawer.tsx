import {ReactNode, useEffect, useRef} from 'react';
import styled, {keyframes} from 'styled-components';

import {drawerSizes} from './Drawer.styles';
import {DrawerSizes, DrawerStyledProps} from './Drawer.types';

import {DrawerPortal} from 'components/Portals/DrawerPortal';
import {Backdrop} from 'components/Backdrop';
import {useClickOutside} from 'hooks/useClickOutside';
import { useEscapeKey } from 'hooks/useEscapeKey';

interface Props {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  size?: DrawerSizes;
}

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100vh;
`;

const DrawerContainer = styled.div<DrawerStyledProps>`
  padding-inline: 20px;
  padding-block: 20px;
  overflow-y: scroll;
  height: 100%;
  transition-property: width;
  transition-duration: 2s;
  width: ${(props) => drawerSizes[props.size].width};
  background: #fff;
  position: fixed;
  top: 0;
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
  size = 'full',
}: Props) => {
  const drawerRef = useRef<any>(null);
  useClickOutside(drawerRef, onClose);
  useEscapeKey(onClose)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return open ? (
    <DrawerPortal>
      <Backdrop />
      <DrawerWrapper ref={drawerRef}>
        <DrawerContainer size={size}>
          {title ? <DrawerTitle>{title}</DrawerTitle> : null}

          <DrawerBody>{children}</DrawerBody>
        </DrawerContainer>
      </DrawerWrapper>
    </DrawerPortal>
  ) : null;
};
