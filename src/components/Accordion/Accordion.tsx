import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';

import {AccordionState} from './Accordion.types';

import {ReactComponent as AccordionArrowDownIcon} from 'assets/icons/ArrowDown.svg';

interface AccordionProps {
  children?: ReactElement | ReactElement[];
  chevron?: ReactNode;
}

interface AccordionItemProps {
  children?: ReactElement | ReactElement[];
}

interface AccordionControlProps {
  children?: ReactNode;
  chevron?: any;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const AccordionContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const AccordionContentContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid rgb(222, 226, 230);
`;
const AccordionTitleContainer = styled.div`
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: rgb(248, 249, 250);
  }
`;
const AccordionTitle = styled.div`
  box-sizing: border-box;
`;

const ArrowDownIcon = styled(AccordionArrowDownIcon)<AccordionState>`
  box-sizing: border-box;
  transition: transform 200ms ease 0s;
  transform: ${(props) => props.open && 'rotate(180deg)'};
`;
const AccordionBody = styled.div<AccordionState>`
  box-sizing: border-box;
  padding: 5px 15px;
  height: ${(props) => (props.open ? '68px' : '0')};
  transition: height 200ms ease 0s, opacity 200ms ease 0s;
  opacity: ${(props) => (props.open ? '1' : '0')};
  overflow: hidden;
`;

export const Accordion = ({children, chevron}: AccordionProps) => (
  <AccordionContainer>{children}</AccordionContainer>
);

const AccordionItem = ({children}: AccordionItemProps) => {
  const [open, setOpen] = useState(false);
  const UpdateChildren = () =>
    React.Children.map(children, (child) => {
      if (child) {
        return React.cloneElement(child, {open, setOpen});
      }
    });
  return (
    <AccordionContentContainer>{UpdateChildren()}</AccordionContentContainer>
  );
};

const AccordionControl = ({
  children,
  chevron,
  open,
  setOpen = () => {},
}: AccordionControlProps) => (
  <AccordionTitleContainer onClick={() => setOpen(!open)}>
    <AccordionTitle>{children}</AccordionTitle>
    {chevron ? chevron : <ArrowDownIcon open={open} />}
  </AccordionTitleContainer>
);

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionBody;
