import React, {useEffect, useRef} from 'react';
import styled, {css, CSSObject} from 'styled-components';

type FormStyleLabelType = Record<'sx', CSSObject | undefined>;

export const FormLabel = styled.label<FormStyleLabelType>`
  display: inline-block;
  ${(props) =>
    css`
      ${props.sx};
    `}
`;

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  sx?: CSSObject;
}

export const Label = ({children, htmlFor, sx, ...rest}: Props) => {
  const ref = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    console.log(ref, '$$$$$$$$');
  }, []);

  return (
    <FormLabel sx={sx} htmlFor={htmlFor} {...rest} ref={ref}>
      {children}
    </FormLabel>
  );
};
