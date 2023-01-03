import {ReactElement, ReactNode, createContext, useMemo} from 'react';

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
  disableChevronRotation: false,
};

export const AccordionContext =
  createContext<AccordionContextState>(defaultValue);

export const AccordionProvider = ({
  children,
  variant,
  chevronPosition,
  chevron,
  disableChevronRotation,
}: Props) => {
  const contextValue = useMemo(
    () => ({
      variant,
      chevronPosition,
      chevron,
      disableChevronRotation,
    }),
    [variant, chevronPosition, chevron, disableChevronRotation],
  );
  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};
