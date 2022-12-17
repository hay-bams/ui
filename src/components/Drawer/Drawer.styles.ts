import {DrawerPosition, DrawerSizeDimension} from './Drawer.types';

export const drawerSizes: DrawerSizeDimension = {
  xs: {
    width: '180px',
  },
  sm: {
    width: '240px',
  },

  md: {
    width: '320px',
  },
  lg: {
    width: '360px',
  },
  xl: {
    width: '500px',
  },
  full: {
    width: '100%',
  },
};

export const drawerPositions = (position: DrawerPosition) => {
  switch (position) {
    case 'right':
      return {top: 0, right: 0, bottom: 0};
    case 'top':
      return {top: 0, left: 0, right: 0,  width: '100%'};
    case 'bottom':
      return {bottom: 0, left: 0, right: 0, width: '100%'};
    default:
      return {top: 0, left: 0, bottom: 0};
  }
};
