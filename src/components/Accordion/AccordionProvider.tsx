import {
  ReactElement,
  ReactNode,
  createContext,
} from 'react';

import {
  AccordionContextState,
  ChevronPosition,
  Variant,
} from './Accordion.types';

interface Props {
  children?: ReactElement | ReactElement[];
  chevron: ReactNode;
  variant: Variant;
  chevronPosition: ChevronPosition;
  disableChevronRotation: boolean;
}

const defaultValue: AccordionContextState = {
  variant: 'default',
  chevronPosition: 'right',
  chevron: null,
  disableChevronRotation: false
};

export const AccordionContext =
  createContext<AccordionContextState>(defaultValue);

export const AccordionProvider = ({
  children,
  variant,
  chevronPosition,
  chevron,
  disableChevronRotation
}: Props) => (
    <AccordionContext.Provider
      value={{
        variant,
        chevronPosition,
        chevron,
        disableChevronRotation
      }}>
      {children}
    </AccordionContext.Provider>
  );
