import {ReactNode} from 'react';
import styled from 'styled-components';

import {ModalSizes, ModalStyledProps, ModalWrapperProps} from './Modal.types';
import {modalSizes} from './Modal.styles';

import {ModalPortal} from 'components/Portals/ModalPortal';
import {ReactComponent as CloseIcon} from 'assets/icons/Close.svg';

interface Props {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  size?: ModalSizes;
  title?: ReactNode;
  withCloseButton?: boolean;
  centered?: boolean;
}

// const ModalWrapper = styled.div`
// // position: fixed;
// // inset: 0;
//   // width: 100%;
//   // height: 100%;
//   // border: 2px solid blue;
// `;

const ModalWrapper = styled.div<ModalWrapperProps>`
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
`;

const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Modal = ({
  open = false,
  children,
  onClose = () => {},
  size = 'xs',
  title,
  withCloseButton = true,
  centered = false,
}: Props) => (
  <ModalPortal>
    {open ? (
      <Backdrop>
        <ModalWrapper centered={centered}>
          <ModalContainer size={size}>
            <ModalTitleContainer>
              {title ? <ModalTitle>{title}</ModalTitle> : null}
              {withCloseButton ? (
                <CloseIconContainer onClick={onClose}>
                  <CloseIcon />
                </CloseIconContainer>
              ) : null}
            </ModalTitleContainer>

            <ModalBody>{children || null}</ModalBody>
          </ModalContainer>
        </ModalWrapper>
      </Backdrop>
    ) : null}
  </ModalPortal>
);
