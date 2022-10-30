import {colorVariants} from 'styles/styles';
import {sizes} from 'utils/AppUtils';

export const buttonSizes = {
  xs: {
    height: sizes.xs,
    padding: '0 14px',
    fontSize: '12px',
  },
  sm: {
    height: sizes.sm,
    padding: '0 18px',
    fontSize: '14px',
  },
  md: {
    height: sizes.md,
    padding: '0 22px',
    fontSize: '16px',
  },
  lg: {
    height: sizes.lg,
    padding: '0 26px',
    fontSize: '18px',
  },
  xl: {
    height: sizes.xl,
    padding: '0 32px',
    fontSize: '20px',
  },
};

export const buttonColors = {
  primary: {
    filled: colorVariants.primary.main,
    light: colorVariants.primary.light,
    outline: '#fff',
    default: '#fff',
    subtle: '#fff',
  },
  secondary: {
    filled: colorVariants.secondary.main,
    light: colorVariants.secondary.light,
    outline: '#fff',
    default: '#fff',
    subtle: '#fff',
  },
  neutral: {
    filled: colorVariants.neutral.main,
    light: colorVariants.neutral.light,
    outline: '#fff',
    default: '#fff',
    subtle: '#fff',
  },
};

export const textColors = {
  primary: {
    filled: '#fff',
    light: colorVariants.primary.main,
    outline: colorVariants.primary.main,
    default: '#000',
    subtle: colorVariants.primary.main,
  },
  secondary: {
    filled: '#fff',
    light: colorVariants.secondary.main,
    outline: colorVariants.secondary.main,
    default: '#000',
    subtle: colorVariants.secondary.main,
  },
  neutral: {
    filled: '#fff',
    light: colorVariants.neutral.main,
    outline: colorVariants.neutral.main,
    default: '#000',
    subtle: colorVariants.neutral.main,
  },
};

export const borderColors = {
  primary: {
    filled: '#fff',
    light: colorVariants.primary.main,
    outline: colorVariants.primary.main,
    default: '#ced4da',
    subtle: 'none',
  },
  secondary: {
    filled: '#fff',
    light: colorVariants.secondary.main,
    outline: colorVariants.secondary.main,
    default: '#ced4da',
    subtle: 'none',
  },
  neutral: {
    filled: '#fff',
    light: colorVariants.neutral.main,
    outline: colorVariants.neutral.main,
    default: '#ced4da',
    subtle: 'none',
  },
};

export const hoverColor = {
  primary: {
    filled: '#fff',
    light: colorVariants.primary.main,
    outline: colorVariants.primary.main,
    default: '#ced4da',
    subtle: 'none',
  },
  secondary: {
    filled: '#fff',
    light: colorVariants.secondary.main,
    outline: colorVariants.secondary.main,
    default: '#ced4da',
    subtle: 'none',
  },
  neutral: {
    filled: '#fff',
    light: colorVariants.neutral.main,
    outline: colorVariants.neutral.main,
    default: '#ced4da',
    subtle: 'none',
  },
};

export const disabledButton = {
  'border-color': 'transparent',
  'background-color': 'rgb(233, 236, 239)',
  color: 'rgb(173, 181, 189)',
  cursor: 'not-allowed',
  'background-image': 'none',
  'pointer-events': 'none',
  'user-select': 'none',
};
