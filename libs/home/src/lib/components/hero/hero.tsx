import { breakpoints } from '@stagefright/shared/config';
import { useWindowSize } from '@stagefright/shared/util';
import React, { useEffect, useState } from 'react';
import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const [offset, setOffset] = useState<number>(0);
  const { width: windowWidth } = useWindowSize();

  /*eslint-disable-next-line */
  const offsetScroll: () => void =
    windowWidth >= breakpoints.phone
      ? () => setOffset(window.scrollY)
      : () => void 0;

  useEffect(() => {
    window.addEventListener('scroll', offsetScroll);
    return () => {
      window.removeEventListener('scroll', offsetScroll);
    };
  }, [windowWidth, offsetScroll]);

  return (
    <div className="hero">
      <div className="hero__content">
        <h1
          className="hero__content__headline"
          style={{
            transform:
              windowWidth >= breakpoints.phone
                ? `translate(-${offset}px, 44px)`
                : '',
          }}
        >
          Debut Album{' '}
          <span className="hero__content__headline__album-title">Wanted</span>{' '}
          Coming Soon!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
