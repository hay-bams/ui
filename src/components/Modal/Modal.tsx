import {ReactNode} from 'react';
import styled from 'styled-components';

import {
  ModalSizes,
  ModalStyledProps,
  ModalTitleContainerStyledProps,
  ModalWrapperProps,
} from './Modal.types';
import {modalSizes} from './Modal.styles';

import {ModalPortal} from 'components/Portals/ModalPortal';
import {ReactComponent as CloseIcon} from 'assets/icons/Close.svg';
import {Backdrop} from 'components/Backdrop';

interface Props {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  size?: ModalSizes;
  title?: ReactNode;
  withCloseButton?: boolean;
  centered?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: number;
}

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const ModalInnerWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
  padding: 48px 16px;
  height: 100%;
`;

const ModalContainer = styled.div<ModalStyledProps>`
  padding: 20px;
  background: #fff;
  min-height: 0px;
  width: ${(props) => modalSizes[props.size].width};
  box-shadow: 1px 0px 10px 5px rgb(0 0 0 / 5%),
    -1px 0px 10px 5px rgb(0 0 0 / 5%), 0 1px 10px 5px rgb(0 0 0 / 5%);
`;

const ModalTitleContainer = styled.div<ModalTitleContainerStyledProps>`
  display: flex;
  justify-content: ${(props) => (props.title ? 'space-between' : 'flex-end')};
`;

const ModalTitle = styled.div``;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-block: 20px;
`;

export const Modal = ({
  open = false,
  children,
  onClose = () => {},
  size = 'xs',
  title,
  withCloseButton = true,
  centered = false,
  overlayBlur,
  overlayColor,
  overlayOpacity,
}: Props) => (
  <ModalPortal>
    {open ? (
      <>
        <Backdrop
          overlayBlur={overlayBlur}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
        />
        <ModalWrapper>
          <ModalInnerWrapper centered={centered}>
            <ModalContainer size={size}>
              <ModalTitleContainer title={title}>
                {title ? <ModalTitle>{title}</ModalTitle> : null}
                {withCloseButton ? (
                  <CloseIconContainer onClick={onClose}>
                    <CloseIcon />
                  </CloseIconContainer>
                ) : null}
              </ModalTitleContainer>

              <ModalBody>{children || null}</ModalBody>
            </ModalContainer>
          </ModalInnerWrapper>
        </ModalWrapper>
      </>
    ) : null}
  </ModalPortal>
);
