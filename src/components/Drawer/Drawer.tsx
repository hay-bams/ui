import {ReactNode, useEffect, useRef} from 'react';
import styled from 'styled-components';

import {DrawerPortal} from 'components/Portals/DrawerPortal';
import {Backdrop} from 'components/Backdrop';
import {useClickOutside} from 'hooks/useClickOutside';

interface Props {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
}

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100vh;
  background: #fff;
`;

const DrawerContainer = styled.div`
  padding-inline: 20px;
  padding-block: 20px;
  overflow-y: scroll;
  height: 100%;
`;

const DrawerTitle = styled.div`
  margin-bottom: 20px;
`;

const DrawerBody = styled.div``;

export const Drawer = ({children, open, onClose = () => {}, title}: Props) => {
  const drawerRef = useRef<any>(null);
  useClickOutside(drawerRef, onClose);
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
        <DrawerContainer>
          {title ? <DrawerTitle>{title}</DrawerTitle> : null}

          <DrawerBody>{children}</DrawerBody>
        </DrawerContainer>
      </DrawerWrapper>
    </DrawerPortal>
  ) : null;
};
