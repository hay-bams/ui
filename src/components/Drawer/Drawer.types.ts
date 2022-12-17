export type DrawerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string;

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

export type DrawerStyledSizes = Record<'size', DrawerSizes>
export type DrawerStyledPosition = Record<'position', DrawerPosition>

export interface OtherStyles {
  open?: boolean;
  animationDuration?: string
}

export type DrawerStyledProps = DrawerStyledSizes & DrawerStyledPosition & OtherStyles;

interface DrawerSizeDimensionValue {
  width: string
}

export type DrawerSizeDimension = Record<DrawerSizes, DrawerSizeDimensionValue>
