export type ButtonVariants =
  | 'filled'
  | 'light'
  | 'outline'
  | 'default'
  | 'subtle';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BorderRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonColor = 'primary' | 'secondary' | 'neutral';

export type ButtonStyledVariant = Record<'variant', ButtonVariants>;
export type ButtonStyledSize = Record<'size', ButtonSizes>;
export type ButtonStyledColor = Record<'color', ButtonColor>;
export type ButtonStyledRadius = Record<'radius', BorderRadius>;
export type OtherStyledProps = {
  uppercase: boolean;
  loading: boolean
};

export type ButtonStyledProps = ButtonStyledVariant &
  ButtonStyledSize &
  ButtonStyledColor &
  ButtonStyledRadius &
  OtherStyledProps;

export type ButtonSpinnerProps =  ButtonStyledVariant & ButtonStyledSize & ButtonStyledColor;
