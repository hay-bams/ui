import {ReactNode} from 'react';

export type Variant = 'default' | 'contained' | 'filled' | 'separated';

export type ChevronPosition = 'left' | 'right';

export interface AccordionState {
  open?: boolean;
  chevronPosition?: ChevronPosition;
  addAnimation?: boolean;
  disableChevronRotation?: boolean;
}

export interface AccordionVariants {
  variant?: Variant;
}

export type AccordionContentContainerStyled = AccordionVariants &
  AccordionState;

export interface AccordionContextState {
  variant: Variant;
  chevronPosition: ChevronPosition;
  chevron: ReactNode;
  disableChevronRotation: boolean;
}

export interface AccordionItemContextState {
  open: boolean;
  handleChange: () => void;
}
