import {ComponentProps, ElementType, ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {borderColor, colors, textColor} from './Button.styles';
import {ButtonSizes, ButtonStyledProps, ButtonVariants} from './Button.types';
import {buttonSizes} from './Button.utils';

interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  as?: T;
}

type Props<T extends ElementType> = OwnProps<T> & ComponentProps<T>;

export const hasBorder = (variants: ButtonVariants) => {
  if (variants === 'outline' || variants === 'default') {
    return true;
  }
  return false;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  background: ${(props) => colors[props.variant]};
  color: ${(props) => textColor[props.variant]};
  border-radius: 5px;
  width: auto;

  ${(props) =>
    css`
      border: 1px solid
        ${hasBorder(props.variant)
          ? ` ${borderColor[props.variant]}`
          : 'transparent'};
      ${buttonSizes[props.size]}
    `}
`;

export const Button = <T extends ElementType>({
  children = 'Settings',
  variant = 'filled',
  as = 'button',
  size = 'xs',
  ...rest
}: Props<T>) => (
  <ButtonStyled variant={variant} as={as} {...rest} size={size}>
    {children}
  </ButtonStyled>
);

/**
 * 
 * 
 *   ${(props) =>
    css`
     ${...buttonSizes.xs}
    `};
 */
