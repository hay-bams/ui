import {ReactElement, ReactNode, useContext} from 'react';
import styled, {css} from 'styled-components';

import {
  AccordionContentContainerStyled,
  AccordionState,
  ChevronPosition,
  Variant,
} from './Accordion.types';
import {accordionVariantStyles} from './Accordion.styles';
import {AccordionContext, AccordionProvider} from './AccordionProvider';
import {
  AccordionItemContext,
  AccordionItemProvider,
} from './AccordionItemProvider';

import {ReactComponent as AccordionArrowDownIcon} from 'assets/icons/ArrowDown.svg';

interface AccordionProps {
  children?: ReactElement | ReactElement[];
  chevron?: ReactNode;
  variant?: Variant;
  chevronPosition?: ChevronPosition;
  disableChevronRotation?: boolean;
}

interface AccordionItemProps {
  children?: ReactElement | ReactElement[];
  value: string;
}

interface AccordionItemContentProps {
  children?: ReactElement | ReactElement[];
}

interface AccordionControlProps {
  children?: ReactNode;
}

const AccordionContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const AccordionContentContainer = styled.div<AccordionContentContainerStyled>`
  box-sizing: border-box;
  ${(props) => css`
    ${accordionVariantStyles(props.variant!, !!props.open)};
  `}
`;
const AccordionTitleContainer = styled.div<AccordionState>`
  box-sizing: border-box;
  padding: 16px 8px;
  display: flex;
  flex-direction: ${(props) =>
    props.$chevronPosition === 'right' ? 'row-reverse' : 'row'};
  cursor: pointer;
  &:hover {
    background: rgb(248, 249, 250);
  }
`;
const AccordionTitle = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
`;

const ArrowDownIcon = styled(AccordionArrowDownIcon)<AccordionState>`
  box-sizing: border-box;
  transition: transform 200ms ease 0s;
  transform: ${(props) =>
    props.open && !props.$disableChevronRotation && 'rotate(180deg)'};
  margin-right: ${(props) => props.$chevronPosition === 'left' && '12px'};
`;
const AccordionBody = styled.div<AccordionState>`
  box-sizing: border-box;
  padding: 5px 15px;
  height: ${(props) => (props.open ? '68px' : '0')};
  transition: height 200ms ease 0s, opacity 200ms ease 0s;
  opacity: ${(props) => (props.open ? '1' : '0')};
  overflow: hidden;
`;

export const Accordion = ({
  children,
  chevron,
  variant = 'contained',
  chevronPosition = 'left',
  disableChevronRotation = false,
}: AccordionProps) => (
  <AccordionProvider
    variant={variant}
    chevronPosition={chevronPosition}
    chevron={chevron}
    disableChevronRotation={disableChevronRotation}>
    <AccordionContainer>{children}</AccordionContainer>
  </AccordionProvider>
);

const AccordionItemContent = ({children}: AccordionItemContentProps) => {
  const {variant, activeItem} = useContext(AccordionContext);
  const {value} = useContext(AccordionItemContext);
  return (
    <AccordionContentContainer
      variant={variant}
      open={!!(activeItem === value)}>
      {children}
    </AccordionContentContainer>
  );
};

const AccordionItem = ({children, value}: AccordionItemProps) => (
  <AccordionItemProvider value={value}>
    <AccordionItemContent>{children}</AccordionItemContent>
  </AccordionItemProvider>
);

const AccordionControl = ({children}: AccordionControlProps) => {
  const {
    chevronPosition,
    chevron,
    disableChevronRotation,
    handleChange,
    activeItem,
  } = useContext(AccordionContext);
  const {value} = useContext(AccordionItemContext);

  return (
    <AccordionTitleContainer
      onClick={() => handleChange(value)}
      $chevronPosition={chevronPosition}>
      {chevron ? (
        chevron
      ) : (
        <ArrowDownIcon
          open={!!(activeItem === value)}
          $chevronPosition={chevronPosition}
          $disableChevronRotation={disableChevronRotation}
        />
      )}
      <AccordionTitle>{children}</AccordionTitle>
    </AccordionTitleContainer>
  );
};

const AccordionPanel = ({children}: AccordionControlProps) => {
  const {activeItem} = useContext(AccordionContext);
  const {value} = useContext(AccordionItemContext);
  return (
    <AccordionBody open={!!(activeItem === value)}>{children}</AccordionBody>
  );
};

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
