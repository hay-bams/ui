import {ComponentProps, ElementType, ReactNode} from 'react';

interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  as?: T;
}

type Props<T extends ElementType> = OwnProps<T> & ComponentProps<T>;

export const Btn = <T extends ElementType = 'button'>({
  children,
  as,
  ...rest
}: Props<T>) => {
  const Component = as || 'button';
  return <Component {...rest}>{children}</Component>;
};
