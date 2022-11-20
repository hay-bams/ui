import {ComponentProps, ElementType, ReactNode} from 'react';
import styled, {css, keyframes} from 'styled-components';


import {
  borderColors,
  buttonColors,
  textColors,
  buttonSizes,
  disabledButton,
  borderRadius,
  spinnerSize,
} from './Button.styles';
import {
  BorderRadius,
  ButtonColor,
  ButtonSizes,
  ButtonSpinnerProps,
  ButtonStyledProps,
  ButtonVariants,
} from './Button.types';

import {ReactComponent as LoadingIcon} from 'assets/icons/Spinner.svg';
interface OwnProps<T extends ElementType> {
  children?: ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColor;
  size?: ButtonSizes;
  radius?: BorderRadius;
  as?: T;
  disabled?: boolean;
  upperCase?: boolean;
  loading?: boolean;
}

type Props<T extends ElementType> = OwnProps<T> & ComponentProps<T>;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(57600deg);
  }
`;

export const Spinner = styled.div<ButtonSpinnerProps>`
  height: ${(props) => spinnerSize[props.size].height};
  width: ${(props) => spinnerSize[props.size].height};
  border: 2px solid;
  border-color: ${(props) => textColors[props.color][props.variant]};
  border-radius: 50%;
  margin-right: 8px;
  border-right-color: transparent;

  animation-name: ${spin};
  animation-duration: 120s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const LoadingContainer = styled.div<ButtonSpinnerProps>`
  margin-right: 0.5em;
  height: ${(props) => spinnerSize[props.size].height};
  width: ${(props) => spinnerSize[props.size].height};
`;

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
  display: ${(props) => props.loading && 'flex'};
  align-items: ${(props) => props.loading && 'center'};

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
  loading = false,
  ...rest
}: Props<T>) => (
  <ButtonStyled
    radius={radius}
    loading={loading}
    disabled={disabled || loading}
    color={color}
    variant={variant}
    as={as}
    upperCase={upperCase}
    {...rest}
    size={size}>
    {loading ? (
      <LoadingContainer size={size} color={color} variant={variant}>
        <LoadingIcon width="100%" height="100%" />
      </LoadingContainer>
    ) : null}
    {/* {loading ? <Spinner size={size} color={color} variant={variant} /> : null} */}
    {children}
  </ButtonStyled>
);
