import {TabsVariant} from './Tabs.types';

export const tabListVariantStyles = (
  variant: TabsVariant,
): {[key: string]: any} => {
  const styles = {
    default: {
      borderBottom: '2px solid #dee2e6'
    },
    outline: {
      borderBottom: '1px solid #dee2e6'
    },
    pills: {
      color: 'red',
    },
  };

  return styles[variant];
};

export const tabVariantStyles = (
  variant: TabsVariant,
  active: boolean,
): {[key: string]: any} => {
  const styles = {
    default: {
      borderBottom: '2px solid transparent',
      marginBottom: '-2px',
      borderColor: active && 'rgb(34, 139, 230)',
      '&:hover': {
        background: '#f8f9fa',
        borderColor: active ? 'rgb(34, 139, 230)' : '#dee2e6',
      },
    },
    outline: {
      border: active && '1px solid #dee2e6',
      borderBottom: 'none',
      '::before': active && {
        content: "''",
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: '-1px',
        height: '1px',
        right: '0px',
        left: '0px',
      },
    },
    pills: {
      color: 'red',
    },
  };

  return styles[variant];
};
