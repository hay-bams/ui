export type DrawerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string;

export type DrawerStyledSizes = Record<'size', DrawerSizes>

export type DrawerStyledProps = DrawerStyledSizes;

interface DrawerSizeDimensionValue {
  width: string
}

export type DrawerSizeDimension = Record<DrawerSizes, DrawerSizeDimensionValue>
