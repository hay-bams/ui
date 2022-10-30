import {ComponentProps, ElementType, ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {borderColors, buttonColors, textColors} from './Button.styles';
import {
  ButtonColor,
  ButtonSizes,
  ButtonStyledProps,
  ButtonVariants,
} from './Button.types';
import {buttonSizes} from './Button.utils';

interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColor;
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
  background: ${(props) => buttonColors[props.color][props.variant]};
  color: ${(props) => textColors[props.color][props.variant]};
  cursor: pointer;
  border-radius: 5px;
  width: auto;

  ${(props) =>
    css`
      border: 1px solid
        ${hasBorder(props.variant)
          ? ` ${borderColors[props.color][props.variant]}`
          : 'transparent'};
      ${buttonSizes[props.size]}
    `}
`;

export const Button = <T extends ElementType>({
  children = 'Settings',
  variant = 'filled',
  as = 'button',
  size = 'xs',
  color = 'primary',
  ...rest
}: Props<T>) => (
  <ButtonStyled color={color} variant={variant} as={as} {...rest} size={size}>
    {children}
  </ButtonStyled>
);
