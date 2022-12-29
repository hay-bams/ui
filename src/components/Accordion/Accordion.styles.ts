import {Variant} from './Accordion.types';

export const accordionVariantStyles = (variant: Variant, open: boolean): {[key: string]: any} => {
  const styles = {
    default: {
      borderBottom: '1px solid rgb(222, 226, 230)',
      background: '#fff',
    },
    contained: {
      border: '1px solid rgb(222, 226, 230)',
      background: open && 'rgb(248, 249, 250)',
      '&:first-child': {
        'border-top-left-radius': '4px',
        'border-top-right-radius': '4px',
      },
      '&:last-child': {
        'border-bottom-left-radius': '4px',
        'border-bottom-right-radius': '4px',
      }
    },
    filled: {
      background: open && 'rgb(248, 249, 250)',
      borderRadius: '4px',
    },
    separated: {
      background: open ? '#fff' : 'rgb(248, 249, 250)',
      border: '1px solid transparent',
      borderRadius: '4px',
      //       border: `1px solid ${open ? 'rgb(222, 226, 230)' : 'transparent'} `,
      borderColor: open && 'rgb(222, 226, 230)',
      '&:not(:first-child)': {
        'margin-top': '16px'
      }
  
    },
  };

  return styles[variant];
};
