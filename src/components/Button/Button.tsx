import {ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {colors, textColor} from './Button.styles';
import {ButtonVariants, ButtonVariantsEnum} from './Button.types';

interface Props {
  children?: ReactNode;
  variant?: ButtonVariants;
}

const ButtonStyled = styled.button<Record<'variant', ButtonVariants>>`
  background: ${(props) => colors[props.variant]};
  padding-inline: 1.5em;
  padding-block: 0.6em;
  color: ${(props) => textColor[props.variant]};
  border-radius: 5px;
  font-size: 14px;
  ${(props) =>
    props.variant === ButtonVariantsEnum.outline &&
    css`
      border: 1px solid ${textColor[props.variant]};
    `}
`;

export const Button = ({children = 'Settings', variant = 'filled'}: Props) => (
  <ButtonStyled variant={variant}>{children}</ButtonStyled>
);
