export type ModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

export type ModalStyledSizes = Record<'size', ModalSizes>

interface ModalSizeDimensionValue {
  width: string
}

export type ModalSizeDimension = Record<ModalSizes, ModalSizeDimensionValue>

export type ModalStyledProps = ModalStyledSizes