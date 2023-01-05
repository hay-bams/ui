import {
  ReactElement,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {
  AccordionContextState,
  AccordionCustomStyles,
  ChevronPosition,
  Variant,
} from './Accordion.types';

interface Props {
  children?: ReactElement | ReactElement[];
  chevron?: ReactElement;
  variant: Variant;
  chevronPosition: ChevronPosition;
  disableChevronRotation: boolean;
  styles?: AccordionCustomStyles;
}

const defaultValue: AccordionContextState = {
  variant: 'default',
  chevronPosition: 'right',
  disableChevronRotation: false,
  handleChange: () => {},
  activeItem: null,
  styles: {},
};

export const AccordionContext =
  createContext<AccordionContextState>(defaultValue);

export const AccordionProvider = ({
  children,
  variant,
  chevronPosition,
  chevron,
  disableChevronRotation,
  styles,
}: Props) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleChange = useCallback(
    (currentItem: string) => {
      if (currentItem !== activeItem) {
        setActiveItem(currentItem);
      } else {
        setActiveItem('');
      }
    },
    [activeItem],
  );

  const contextValue = useMemo(
    () => ({
      variant: variant || defaultValue.variant,
      chevronPosition: chevronPosition || defaultValue.chevronPosition,
      chevron: chevron || defaultValue.chevron,
      disableChevronRotation:
        disableChevronRotation || defaultValue.disableChevronRotation,
      handleChange: handleChange || defaultValue.handleChange,
      activeItem: activeItem || defaultValue.activeItem,
      styles: styles || defaultValue.styles,
    }),
    [
      variant,
      chevronPosition,
      chevron,
      disableChevronRotation,
      handleChange,
      activeItem,
      styles,
    ],
  );
  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};
