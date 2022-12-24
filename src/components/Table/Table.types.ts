export type TableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TableStyledProps {
  withColumnBorders?: boolean;
  striped?: boolean;
  highlightOnHover?: boolean;
  verticalSpacing?: TableSize;
  horizontalSpacing?: TableSize;
}