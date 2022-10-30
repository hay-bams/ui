export interface ColorPaleteOptions {
  main: string;
  light: string;
  dark: string;
}

export type ColorPaletes = 'primary' | 'secondary' | 'neutral';

export type ColorVariants = Record<ColorPaletes, ColorPaleteOptions>;
