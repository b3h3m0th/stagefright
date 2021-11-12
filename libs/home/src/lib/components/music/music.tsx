/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './music.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect, useRef } from 'react';
// import { useWindowSize } from '@stagefright/shared/util';
// gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: React.FC<MusicProps> = (props: MusicProps) => {
  // const windowSize = useWindowSize();
  // ScrollTrigger.refresh();

  // useEffect(() => {
  //   gsap.to('.music', {
  //     xPercent: -100,
  //     x: () => windowSize.width,
  //     ease: 'none',
  //     duration: 2,
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: '.music',
  //       start: 'top top ',
  //       end: () => windowSize.width * 3,
  //       scrub: true,
  //       pin: true,
  //       invalidateOnRefresh: true,
  //       anticipatePin: 1,
  //     },
  //   });
  // }, [windowSize]);

  // useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, [windowSize]);

  return (
    <section className="music" id={HomeSection.music}>
      <h2 className="music__title">Music</h2>
      <div className="music__content">
        <p className="music__content__announcement">
          Debut Album{' '}
          <span className="music__content__announcement__album-title">
            "Wanted"
          </span>{' '}
          Coming Soon!
        </p>
      </div>
    </section>
  );
};

export default Music;
