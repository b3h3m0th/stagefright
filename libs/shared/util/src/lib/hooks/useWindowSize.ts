import { useEffect, useState } from 'react';

export type WindowSize = {
  height: number;
  width: number;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(<WindowSize>{
    height: 0,
    width: 0,
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
