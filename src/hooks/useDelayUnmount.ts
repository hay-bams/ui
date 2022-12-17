import {useEffect, useState} from 'react';

export const useDelayUnmount = (mounted: boolean, delay: number) => {
  const [showElement, setShowElement] = useState(mounted);
  useEffect(() => {
    let timeout: any;
    if (mounted && !showElement) setShowElement(true);
    if (!mounted && showElement) {
      timeout = window.setTimeout(() => setShowElement(false), delay);
    }

    return () => window.clearTimeout(timeout);
  }, [delay, mounted, showElement]);

  return showElement;
};
