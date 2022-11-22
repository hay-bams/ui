import  {ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

interface Props {
  children: ReactNode
}

export const ModalPortal = ({children}: Props) => {
  const portalRoot = document.getElementById('portal-root');
  const modalRoot = useRef(document.createElement('div')).current;

  useEffect(() => {
    portalRoot?.appendChild(modalRoot);

    return () => {
      portalRoot?.removeChild(modalRoot);
    };
  }, [modalRoot, portalRoot]);

  return createPortal(children, modalRoot);
};
