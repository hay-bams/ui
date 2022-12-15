import {useEffect} from 'react';

export const useEscapeKey = (action: () => void) => {
  useEffect(() => {
    const evt = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        action();
      }
    };

    window.addEventListener('keydown', evt);

    return () => {
      window.removeEventListener('keydown', evt);
    };
  }, [action]);
};
