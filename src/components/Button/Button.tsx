import {ComponentProps, ElementType, ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {
  borderColors,
  buttonColors,
  textColors,
  buttonSizes,
  disabledButton,
  borderRadius,
} from './Button.styles';
import {
  BorderRadius,
  ButtonColor,
  ButtonSizes,
  ButtonStyledProps,
  ButtonVariants,
} from './Button.types';

interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColor;
  size?: ButtonSizes;
  radius?: BorderRadius
  as?: T;
  disabled?: boolean;
  upperCase?: boolean;
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
  border-radius: ${(props) => borderRadius[props.radius]};
  width: auto;
  text-transform: ${(props) => props.uppercase && 'uppercase'};

  ${(props) =>
    css`
      border: 1px solid
        ${hasBorder(props.variant)
          ? ` ${borderColors[props.color][props.variant]}`
          : 'transparent'};
      ${buttonSizes[props.size]};
      ${props.disabled && disabledButton}
    
      
    `}
`;

export const Button = <T extends ElementType>({
  children = 'Settings',
  variant = 'filled',
  as = 'button',
  size = 'xs',
  color = 'primary',
  radius = 'xs',
  disabled = false,
  upperCase = false,
  ...rest
}: Props<T>) => (
  <ButtonStyled
    radius={radius}
    disabled={disabled}
    color={color}
    variant={variant}
    as={as}
    upperCase={upperCase}
    {...rest}
    size={size}>
    {children}
  </ButtonStyled>
);
