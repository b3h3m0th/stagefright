/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './music.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { animationData } from '@stagefright/shared/config';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: React.FC<MusicProps> = (props: MusicProps) => {
  useEffect(() => {
    // const tl: gsap.core.Timeline = gsap.timeline();
    // tl.to('.music__content__box', {
    //   duration: animationData.music.duration / 1000,
    //   height: 100,
    //   ease: 'power2',
    //   scrollTrigger: {
    //     trigger: '.music__content__box',
    //     toggleActions: 'restart none none none',
    //     start: 'top bottom',
    //     markers: true,
    //   },
    // }).to('.music__content__box', {
    //   duration: animationData.music.duration / 1000,
    //   width: 100,
    //   ease: 'power2',
    //   scrollTrigger: {
    //     trigger: '.music__content__box',
    //     toggleActions: 'restart none none none',
    //     start: 'top bottom',
    //   },
    // });

    gsap.to('.music__content__box', {
      duration: animationData.music.duration / 1000,
      height: 100,
      width: 100,
      ease: 'power2',
      scrollTrigger: {
        trigger: '.music__content__box',
        toggleActions: 'restart none none none',
        start: 'top 80%',
        markers: true,
        scrub: true,
      },
    });

    // gsap.from('.music__title', {
    //   y: 50,
    //   opacity: 1,
    //   ease: 'power2',
    //   duration: animationData.music.duration / 1000,
    //   scrollTrigger: {
    //     trigger: '.music__title',
    //     scrub: 1,
    //   },
    // });
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
