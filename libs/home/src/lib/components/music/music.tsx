/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './music.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';
import { useEffect } from 'react';
import { animationData } from '@stagefright/shared/config';
import { useWindowSize } from '@stagefright/shared/util';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: React.FC<MusicProps> = (props: MusicProps) => {
  useEffect(() => {
    gsap.to('.music__content__box', {
      duration: animationData.music.duration / 1000,
      width: '100%',
      ease: Power2.easeOut,
      scrollTrigger: {
        trigger: '.music__content__box',
        toggleActions: 'play none none none',
        start: 'top 80%',
        scrub: 1,
      },
    });
  });

  return (
    <section className="music" id={HomeSection.music}>
      <h2 className="music__title">Music</h2>
      <div className="music__content">
        <div className="music__content__box"></div>
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
