import React from 'react';
import styled from 'styled-components';

export const FormStyled = styled.form``;

export const Form = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLFormElement>) => (
  <FormStyled {...rest}>{children}</FormStyled>
);
