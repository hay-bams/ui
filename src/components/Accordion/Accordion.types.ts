import {ReactElement, ReactNode} from 'react';

export type Variant = 'default' | 'contained' | 'filled' | 'separated';

export type ChevronPosition = 'left' | 'right';

export interface AccordionState {
  open?: boolean;
  addAnimation?: boolean;
}

export interface AccordionVariants {
  variant?: Variant;
}

export interface AccordionTitleStyled {
  chevronPosition?: ChevronPosition;
}

export type AccordionContentContainerStyled = AccordionVariants &
  AccordionState;

export interface AccordionContextState {
  variant: Variant;
  chevronPosition: ChevronPosition;
  chevron: ReactNode;
}

export interface AccordionItemContextState {
  open: boolean;
  handleChange: () => void;
}
