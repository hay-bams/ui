import {ReactNode, useEffect} from 'react';
import styled from 'styled-components';

import {DrawerPortal} from 'components/Portals/DrawerPortal';
import {Backdrop} from 'components/Backdrop';

interface Props {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100vh;
  background: #fff;
`;

export const Drawer = ({children, open, onClose}: Props) => {
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
      <DrawerWrapper>{children}</DrawerWrapper>
    </DrawerPortal>
  ) : null;
};
