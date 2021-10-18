import { useEffect, useState } from 'react';

export function useIsNavTransparent(
  isMenuOpened: boolean,
  breakpoint: number
): boolean {
  const [isNavTransparent, setIsNavTransparent] = useState<boolean>(true);

  const onScroll: () => ReturnType<typeof setIsNavTransparent> = () => {
    isMenuOpened
      ? setIsNavTransparent(false)
      : window.scrollY >= breakpoint
      ? isNavTransparent && setIsNavTransparent(false)
      : setIsNavTransparent(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.addEventListener('scroll', onScroll);
    };
  });

  return isNavTransparent;
}
