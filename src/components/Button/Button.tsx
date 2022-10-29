import {ComponentProps, ElementType, ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {borderColor, colors, textColor} from './Button.styles';
import {ButtonVariants, ButtonVariantsEnum} from './Button.types';

interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  variant?: ButtonVariants;
  as?: T;
}

type Props<T extends ElementType> = OwnProps<T> & ComponentProps<T>;

export const hasBorder = (variants: ButtonVariants) => {
  if (
    variants === ButtonVariantsEnum.outline ||
    variants === ButtonVariantsEnum.default
  ) {
    return true;
  }
  return false;
};

const ButtonStyled = styled.button<Record<'variant', ButtonVariants>>`
  background: ${(props) => colors[props.variant]};
  padding-inline: 1.5em;
  padding-block: 0.6em;
  color: ${(props) => textColor[props.variant]};
  border-radius: 5px;
  font-size: 14px;
  ${(props) =>
    hasBorder(props.variant) &&
    css`
      border: 1px solid ${borderColor[props.variant]};
    `}
`;

export const Button = <T extends ElementType>({
  children = 'Settings',
  variant = 'filled',
  as = 'button',
  ...rest
}: Props<T>) => (
  <ButtonStyled variant={variant} as={as} {...rest}>
    {children}
  </ButtonStyled>
);
