export interface ColorPaleteOptions {
  main: string;
  light: string;
  dark: string;
}

export type ColorPaletes = 'primary' | 'secondary' | 'tertiary';

export type ColorVariants = Record<ColorPaletes, ColorPaleteOptions>;
