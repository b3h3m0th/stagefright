import { useEffect, useState } from 'react';

export type WindowSize = {
  height: number;
  width: number;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: undefined,
    width: undefined,
  });

  const onResize: () => ReturnType<typeof setWindowSize> = () =>
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return windowSize;
}
