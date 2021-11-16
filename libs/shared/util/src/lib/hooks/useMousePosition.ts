import { useState, useEffect } from 'react';

export type MousePosition = {
  x: number;
  y: number;
};

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handlePosition(e: MouseEvent) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handlePosition);
    return () => window.removeEventListener('mousemove', handlePosition);
  }, []);

  return mousePosition;
}
