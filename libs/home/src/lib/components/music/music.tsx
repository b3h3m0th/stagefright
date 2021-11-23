/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './music.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { memo, MemoExoticComponent, useEffect, useRef } from 'react';
import { musicData, IMusic, breakpoints } from '@stagefright/shared/config';
import { useWindowSize } from '@stagefright/shared/util';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: MemoExoticComponent<React.FC<MusicProps>> = memo(
  (props: MusicProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize();

    useEffect(() => {
      if (windowSize.width > breakpoints.phone) {
        gsap.to(titleRef.current, {
          ease: 'none',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 20%',
            end: '+=300%',
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        gsap.to(progressBarRef.current, {
          ease: 'none',
          width: '100%',
          scrollTrigger: {
            trigger: progressBarRef.current,
            start: 'top 20%',
            end: '+=300%',
            scrub: 1,
          },
        });

        gsap.to(contentRef.current, {
          xPercent: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 20%',
            end: '+=300%',
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });
      }
    });

    return (
      <section className="music" id={HomeSection.music}>
        <h2 className="music__title" ref={titleRef}>
          Music
          <div className="music__progress">
            <div className="music__progress__bar" ref={progressBarRef}></div>
          </div>
        </h2>
        <div className="music__link"></div>
        <div className="music__content" ref={contentRef}>
          {musicData.map((m: IMusic, i: number) => {
            return (
              <div className="music__content__item" key={`${m}-${i}`}>
                <img src={m.cover} alt="StageFright Wanted album cover" />
                <div className="music__content__item__content">
                  <p className="music__content__item__content__title">
                    {m.title}
                  </p>
                  <p className="music__content__item__content__subtitle">
                    <span className="music__content__item__content__subtitle__year">
                      {m.releaseDate.getFullYear()}
                    </span>
                    <span className="music__content__item__content__subtitle__separator"></span>
                    <span className="music__content__item__content__subtitle__type">
                      {m.type}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
);

export default Music;
