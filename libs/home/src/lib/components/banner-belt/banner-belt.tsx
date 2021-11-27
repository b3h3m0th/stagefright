import './banner-belt.scss';
import { animationData } from '@stagefright/shared/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
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
              <>
                <span className="banner-belt__banner__marquee-content__item">
                  New StageFright merch coming soon!
                </span>
                <span className="banner-belt__banner__marquee-content__divider">
                  <img
                    src="assets/img/logo_filled_white.png"
                    alt="StageFright Logo"
                  />
                </span>
              </>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BannerBelt;
