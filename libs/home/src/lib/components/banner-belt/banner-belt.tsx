import './banner-belt.scss';
import { animationData } from '@stagefright/shared/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Fragment, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { logoLetteringWhite } from '@stagefright/shared/assets';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface BannerBeltProps {}

export const BannerBelt = (props: BannerBeltProps) => {
  const bannerBeltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(bannerBeltRef.current, {
      y: -100,
      rotate: 3,
      scrollTrigger: {
        trigger: bannerBeltRef.current,
        start: 'top bottom',
        scrub: 1,
      },
    });
  });

  return (
    <div className="banner-belt">
      <div className="banner-belt__banner" ref={bannerBeltRef}>
        <Marquee gradient={false} speed={animationData.marqueeSpeed}>
          <div className="banner-belt__banner__marquee-content">
            {new Array(7).fill(null).map((_: null, i: number) => (
              <Fragment key={i}>
                <span className="banner-belt__banner__marquee-content__item">
                  New StageFright merch available!
                </span>
                <span className="banner-belt__banner__marquee-content__divider">
                  <img src={logoLetteringWhite} alt="StageFright Logo" />
                </span>
              </Fragment>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BannerBelt;
