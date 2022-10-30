import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const StyledButtonUnstyled = styled.button`
  border: 0.5px solid;
`;


export const ButtonUnstyled = ({children = 'button'}: Props) => (
  <StyledButtonUnstyled>{children}</StyledButtonUnstyled>
);

