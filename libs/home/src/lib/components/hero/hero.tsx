import React, { useEffect, useState } from 'react';
import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const [offset, setOffset] = useState<number>(0);

  /*eslint-disable-next-line */
  const offsetScroll: () => void = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', offsetScroll);
    return () => {
      window.removeEventListener('scroll', offsetScroll);
    };
  });

  return (
    <div className="hero">
      <div className="hero__content">
        <h1
          className="hero__content__headline"
          style={{ transform: `translate(-${offset}px, 44px)` }}
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
