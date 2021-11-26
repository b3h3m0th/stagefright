import './banner-belt.scss';
import { animationData } from '@stagefright/shared/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScrollData } from 'scroll-data-hook';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface BannerBeltProps {}

export const BannerBelt = (props: BannerBeltProps) => {
  const bannerBeltRef = useRef<HTMLDivElement>(null);
  // const {
  //   scrolling: isScrolling,
  //   time,
  //   speed,
  //   direction,
  //   position,
  //   relativeDistance,
  //   totalDistance,
  // } = useScrollData();

  useEffect(() => {
    gsap.to(bannerBeltRef.current, {
      y: -50,
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
            {new Array(10).fill(null).map((_: null, i: number) => (
              <>
                <span className="banner-belt__banner__marquee-content__item">
                  StageFright
                </span>
                <span className="banner-belt__banner__marquee-content__divider">
                  666
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
