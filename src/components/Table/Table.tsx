import {ReactNode} from 'react';
import styled from 'styled-components';

import { TableStyledProps } from './Table.types';


interface Props {
  children?: ReactNode;
  withColumnBorders?: boolean;
  striped?: boolean;
  highlightOnHover?: boolean
}

const TableStyled = styled.table<TableStyledProps>`
  width: 100%;
  border-collapse: collapse;
  & td {
    border-top: 1px solid rgb(222, 226, 230);
  }

  & th,
  & td {
    text-align: left;
    padding: 7px 10px;
  }

  & th:not(:first-of-type), & td:not(:first-of-type) {
    border-left: ${(props) => props.withColumnBorders && '1px solid rgb(222, 226, 230)'}
  }

  & tr:nth-child(odd) {
    background: ${(props) => props.striped && 'rgb(248, 249, 250)'}
  }

  & tr:hover {
    background: ${(props) => props.highlightOnHover && 'rgb(248, 249, 250)'}
  }
`;

export const Table = ({children}: Props) => {
  console.log('****');
  return <TableStyled highlightOnHover>{children}</TableStyled>;
};
