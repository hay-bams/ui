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
  transitionDuration?: number;
  value?: string | null;
  onChange?: (val: string | null) => void;
}

const defaultValue: AccordionContextState = {
  variant: 'default',
  chevronPosition: 'right',
  disableChevronRotation: false,
  handleChange: () => {},
  activeItem: null,
  styles: {},
  transitionDuration: 200,
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
  transitionDuration,
  onChange,
  value,
}: Props) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleChange = useCallback(
    (currentItem: string) => {
      const updateState = (updater: (val: string | null) => void) => {
        if (currentItem !== activeItem) {
          updater(currentItem);
        } else {
          updater('');
        }
      };
      if (onChange) {
        console.log('+++++')
        updateState(onChange);
      } else {
        updateState(setActiveItem);
      }
    },
    [activeItem, onChange],
  );

  const contextValue = useMemo(
    () => ({
      variant: variant || defaultValue.variant,
      chevronPosition: chevronPosition || defaultValue.chevronPosition,
      chevron: chevron || defaultValue.chevron,
      disableChevronRotation:
        disableChevronRotation || defaultValue.disableChevronRotation,
      handleChange: handleChange || defaultValue.handleChange,
      activeItem: onChange ? value! : (activeItem || defaultValue.activeItem),
      styles: styles || defaultValue.styles,
      transitionDuration: transitionDuration || defaultValue.transitionDuration
    }),
    [
      variant,
      chevronPosition,
      chevron,
      disableChevronRotation,
      handleChange,
      activeItem,
      styles,
      transitionDuration,
      value,
      onChange
    ],
  );
  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};
