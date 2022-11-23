import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
}

export const FormInput = styled.input`
  min-height: 36px;
  padding-inline: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  width: 100%;
  &:focus: {
    outline: none;
    border-color: #228be6;
  }
`;

export const Input = ({type, ...rest}: Props) => (
  <FormInput type={type} {...rest} />
);
