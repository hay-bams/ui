import {ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {TableSize, TableStyledProps} from './Table.types';
import {tableSpacing} from './Table.styles';

interface Props {
  children?: ReactNode;
  withColumnBorders?: boolean;
  striped?: boolean;
  highlightOnHover?: boolean;
  verticalSpacing?: TableSize;
  horizontalSpacing?: TableSize;
}

const TableStyled = styled.table<TableStyledProps>`
  box-sizing: border-box;
  width: 100%;
  border-collapse: collapse;
  & td {
    border-top: 1px solid rgb(222, 226, 230);
  }
  & th,
  & td {
    text-align: left;
    padding: ${(props) =>
      `${tableSpacing[props.verticalSpacing!].padding} ${
        tableSpacing[props.horizontalSpacing!].padding
      }`};
  }

  & th:not(:first-of-type),
  & td:not(:first-of-type) {
    border-left: ${(props) =>
      props.withColumnBorders && '1px solid rgb(222, 226, 230)'};
  }
  & tr:nth-child(odd) {
    background: ${(props) => props.striped && 'rgb(248, 249, 250)'};
  }
  & tr:hover {
    background: ${(props) => props.highlightOnHover && 'rgb(248, 249, 250)'};
  }
`;

export const Table = ({
  children,
  withColumnBorders,
  striped,
  highlightOnHover,
  verticalSpacing = 'xl',
  horizontalSpacing = 'xl',
}: Props) => {
  console.log('****');
  return (
    <TableStyled
      highlightOnHover={highlightOnHover}
      striped={striped}
      verticalSpacing={verticalSpacing}
      horizontalSpacing={horizontalSpacing}
      withColumnBorders={withColumnBorders}>
      {children}
    </TableStyled>
  );
};
