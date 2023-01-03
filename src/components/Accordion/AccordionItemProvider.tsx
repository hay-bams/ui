import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

import {
  AccordionItemContextState,
} from './Accordion.types';

interface Props {
  children?: ReactElement | ReactElement[];
}

const defaultValue: AccordionItemContextState = {
 
  open: false,
  handleChange: () => {},
};

export const AccordionItemContext =
  createContext<AccordionItemContextState>(defaultValue);

export const AccordionItemProvider = ({children}: Props) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <AccordionItemContext.Provider
      value={{
 
        open,
        handleChange,
      }}>
      {children}
    </AccordionItemContext.Provider>
  );
};
