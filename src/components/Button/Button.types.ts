export type ButtonVariants =
  | 'filled'
  | 'light'
  | 'outline'
  | 'default'
  | 'subtle';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonStyledVariant = Record<'variant', ButtonVariants>;
export type ButtonStyledSize = Record<'size', ButtonSizes>;

export type ButtonStyledProps = ButtonStyledVariant & ButtonStyledSize;
