import {ReactNode} from 'react';
import styled from 'styled-components';

import {ModalSizes, ModalStyledProps} from './Modal.types';
import {modalSizes} from './Modal.styles';

import {ModalPortal} from 'components/Portals/MenuPortal';
import {ReactComponent as CloseIcon} from 'assets/icons/Close.svg';

interface Props {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  size?: ModalSizes;
  title?: ReactNode;
  showCloseIcon?: boolean;
}

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const ModalInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 16px;
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
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = ({
  open = false,
  children,
  onClose = () => {},
  size = 'xs',
  title,
  showCloseIcon = false,
}: Props) => (
  <ModalPortal>
    {open ? (
      <Backdrop>
        <ModalWrapper>
          <ModalInnerWrapper>
            <ModalContainer size={size}>
              <ModalTitleContainer>
                {title ? <ModalTitle>{title}</ModalTitle> : null}
                {showCloseIcon ? (
                  <CloseIconContainer onClick={onClose}>
                    <CloseIcon />
                  </CloseIconContainer>
                ) : null}
              </ModalTitleContainer>

              <ModalBody>{children || null}</ModalBody>
            </ModalContainer>
          </ModalInnerWrapper>
        </ModalWrapper>
      </Backdrop>
    ) : null}
  </ModalPortal>
);
