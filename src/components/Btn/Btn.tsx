import {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
  as?: React.ElementType;
}

export const Btn = ({children, as}: Props) => {
  const Component = as || 'button';
  return <Component>{children}</Component>;
};
