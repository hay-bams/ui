import {cloneElement, ReactNode, useRef, useState} from 'react';
import styled from 'styled-components';

import {ModalStyledProps} from './Modal.types';
import {modalSizes} from './Modal.styles';

import {ModalPortal} from 'components/Portals/MenuPortal';
import {ReactComponent as CloseIcon} from 'assets/icons/Close.svg';

interface Props {
  anchorElement: JSX.Element;
  content?: ReactNode
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

const ModalBody = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = ({anchorElement, content}: Props) => {
  const anchorRef = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    console.log(anchorRef.current, '$$$$$$$');
  };

  const elementClone = cloneElement(anchorElement, {
    ref: anchorRef,
    onClick: handleClick,
  });

  return (
    <>
      {elementClone}
      <ModalPortal>
        {show ? (
          <Backdrop>
            <ModalWrapper>
              <ModalInnerWrapper>
                <ModalContainer size="sm">
                  <ModalTitleContainer>
                    <ModalTitle>Title</ModalTitle>
                    <CloseIconContainer onClick={() => setShow(false)}>
                      <CloseIcon />
                    </CloseIconContainer>
                  </ModalTitleContainer>
                  <ModalBody>
                    {content || null}
                  </ModalBody>
                </ModalContainer>
              </ModalInnerWrapper>
            </ModalWrapper>
          </Backdrop>
        ) : null}
      </ModalPortal>
    </>
  );
};
