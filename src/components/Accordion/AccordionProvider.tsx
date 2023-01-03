import {
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
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
  disableChevronRotation: false,
  handleChange: () => {},
  activeItem: null,
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
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleChange = useCallback((currentItem: string) => {
    if (currentItem !== activeItem) {
      setActiveItem(currentItem);
    } else {
      setActiveItem('');
    }
  }, [activeItem]);
  
  const contextValue = useMemo(
    () => ({
      variant,
      chevronPosition,
      chevron,
      disableChevronRotation,
      handleChange,
      activeItem,
    }),
    [
      variant,
      chevronPosition,
      chevron,
      disableChevronRotation,
      handleChange,
      activeItem,
    ],
  );
  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};
