import {ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

interface Props {
  children?: ReactNode;
}

export const DrawerPortal = ({children}: Props) => {
  const portalRoot = document.getElementById('portal-root');
  const drawerRoot = useRef(document.createElement('div')).current;

  useEffect(() => {
    portalRoot?.appendChild(drawerRoot);

    return () => {
      portalRoot?.removeChild(drawerRoot);
    };
  }, [drawerRoot, portalRoot]);

  return createPortal(children, drawerRoot);
};
