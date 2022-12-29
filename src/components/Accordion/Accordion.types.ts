export type Variant = 'default' | 'contained' | 'filled' | 'separated'

export interface AccordionState {
  open?: boolean;
  addAnimation?: boolean
}

export interface AccordionVariants {
  variant?: Variant
}

export type AccordionContentContainerStyled = AccordionVariants & AccordionState