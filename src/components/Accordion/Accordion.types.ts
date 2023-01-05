import {ReactElement, ReactNode} from 'react';

export type Variant = 'default' | 'contained' | 'filled' | 'separated';

export type ChevronPosition = 'left' | 'right';

export interface AccordionState {
  open?: boolean;
  $chevronPosition?: ChevronPosition;
  addAnimation?: boolean;
  $disableChevronRotation?: boolean;
  transitionDuration?: number
}

export interface AccordionVariants {
  variant?: Variant;
}

export type AccordionContentContainerStyled = AccordionVariants &
  AccordionState;

export interface AccordionContextState {
  variant: Variant;
  chevronPosition: ChevronPosition;
  chevron?: ReactElement;
  disableChevronRotation: boolean;
  handleChange: (current: string) => void;
  activeItem: string | null;
  styles?: AccordionCustomStyles;
  transitionDuration?: number
}

export interface AccordionItemContextState {
  value: string;
}

export interface AccordionCustomStyles {
  chevron?: any;
}
