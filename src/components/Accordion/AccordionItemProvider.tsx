import {
  ReactElement,
  createContext,
  
} from 'react';

import {AccordionItemContextState} from './Accordion.types';

interface Props {
  children?: ReactElement | ReactElement[];
  value: string;
}

const defaultValue: AccordionItemContextState = {
  value: '',
};

export const AccordionItemContext =
  createContext<AccordionItemContextState>(defaultValue);

export const AccordionItemProvider = ({children, value}: Props) => (
  <AccordionItemContext.Provider value={{value}}>
    {children}
  </AccordionItemContext.Provider>
);
