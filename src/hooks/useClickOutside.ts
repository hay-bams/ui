import {RefObject, useEffect} from 'react';

export const useClickOutside = (ref: RefObject<any>, action:() => void) => {
  useEffect(() => {
    const evt = (e: Event) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        action();
      }
    };
    window.addEventListener('mousedown', evt);

    return () => {
      window.removeEventListener('mousedown', evt);
    };
  }, [ref, action]);
};
