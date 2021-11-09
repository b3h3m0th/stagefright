/*eslint-disable-next-line */
import { AnimatedLetters } from '@stagefright/shared/components';
import { breakpoints } from '@stagefright/shared/config';
import { useWindowSize } from '@stagefright/shared/util';
import React, { useEffect, useState } from 'react';
import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const [offset, setOffset] = useState<number>(0);
  const { width: windowWidth } = useWindowSize();
  const scrollSpeedMultiplicator = 0.05 as const;

  /*eslint-disable-next-line */
  const offsetScroll: () => void =
    windowWidth >= breakpoints.phone
      ? () => setOffset(window.scrollY * scrollSpeedMultiplicator)
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
        {windowWidth >= breakpoints.phone && (
          <AnimatedLetters
            text="StageFright"
            wrapperClassName="hero__content__band hero__content__band__wrapper"
            letterClassName="hero__content__band"
            animationDirection="up"
            wrapperStyle={{
              transform:
                windowWidth >= breakpoints.phone
                  ? `translate(${offset}px, 5px)`
                  : '',
            }}
          />
        )}
        {windowWidth >= breakpoints.phone ? (
          <AnimatedLetters
            text="Wanted Coming Soon!"
            wrapperClassName="hero__content__headline"
            letterClassName="hero__content__headline"
            wrapperStyle={{
              transform:
                windowWidth >= breakpoints.phone
                  ? `translate(-${offset + 5}px, 5px)`
                  : '',
              display: 'block',
            }}
          />
        ) : (
          <h1 className="hero__content__headline">Wanted Coming Soon!</h1>
        )}
      </div>
    </div>
  );
};

export default Hero;
