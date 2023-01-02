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
}

const defaultValue: AccordionContextState = {
  variant: 'default',
  chevronPosition: 'right',
  chevron: null,
};

export const AccordionContext =
  createContext<AccordionContextState>(defaultValue);

export const AccordionProvider = ({
  children,
  variant,
  chevronPosition,
  chevron,
}: Props) => (
    <AccordionContext.Provider
      value={{
        variant,
        chevronPosition,
        chevron,
      }}>
      {children}
    </AccordionContext.Provider>
  );
