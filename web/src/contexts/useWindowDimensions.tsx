import React, { useEffect, useState } from 'react';
import { WindowSpec } from '../types';

/*
 * Custom hook to reliably fetch window dimensions.
 */
export const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState<WindowSpec>({
    width: undefined as unknown as number,
    height: undefined as unknown as number,
  });

  useEffect(() => {
    const onResize = (): void => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
};
