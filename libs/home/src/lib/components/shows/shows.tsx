import './shows.scss';
import {
  upcomingShows,
  previousShows,
  IShow,
  breakpoints,
} from '@stagefright/shared/config';
import { removeURLProtocol, useWindowSize } from '@stagefright/shared/util';
/* eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
/* eslint-disable-next-line */
import { Button } from '@stagefright/shared/components';
import { gsap } from 'gsap';
import { ScrollTrigger, Power2, Power4 } from 'gsap/all';
import { useEffect, useRef } from 'react';
import { animationData, loading } from '@stagefright/shared/config';
import { ShowsMarquee } from './components';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC<ShowsProps> = (props: ShowsProps) => {
  const showsTitle = useRef<HTMLHeadingElement>(null);
  const showsTitleText = useRef<HTMLSpanElement>(null);
  const showsTitleBlender = useRef<HTMLDivElement>(null);
  const showsRecentTitle = useRef<HTMLHeadingElement>(null);
  const showsRecentTitleText = useRef<HTMLSpanElement>(null);
  const showsRecentTitleBlender = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > breakpoints.phone) {
      gsap
        .timeline()
        .to(showsTitleBlender.current, {
          delay:
            loading.artificialPageMountDelay / 1000 +
            animationData.hero.delay / 1000,
          opacity: 1,
          duration: 0,
        })
        .to(showsTitleBlender.current, {
          width: '100%',
          duration: animationData.shows.duration / 1000,
          ease: Power4.easeOut,
        })
        .to(showsTitleBlender.current, {
          right: '0',
          duration: 0,
        })
        .to(showsTitleText.current, {
          opacity: 1,
          duration: 0,
        })
        .to(showsTitleBlender.current, {
          x: '100%',
          duration: animationData.shows.duration / 1000,
          ease: Power4.easeOut,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: showsRecentTitle.current,
            start: 'top bottom',
          },
        })
        .to(showsRecentTitleBlender.current, {
          opacity: 1,
          duration: 0,
        })
        .to(showsRecentTitleBlender.current, {
          width: '100%',
          duration: animationData.shows.duration / 1000,
          ease: Power4.easeOut,
        })
        .to(showsRecentTitleBlender.current, {
          right: '0',
          duration: 0,
        })
        .to(showsRecentTitleText.current, {
          opacity: 1,
          duration: 0,
        })
        .to(showsRecentTitleBlender.current, {
          x: '100%',
          duration: animationData.shows.duration / 1000,
          ease: Power4.easeOut,
        });

      gsap.from('.shows__marquee', {
        opacity: 0,
        duration: animationData.shows.duration / 1000,
        delay:
          loading.artificialPageMountDelay / 1000 +
          animationData.hero.delay / 1000,
        ease: Power4.easeOut,
      });

      gsap.to('.shows__content__show', {
        delay:
          loading.artificialPageMountDelay / 1000 +
          animationData.hero.delay / 1000,
        opacity: 1,
        duration: animationData.shows.duration / 1000,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.shows__content__show',
          toggleActions: 'play none none none',
          start: 'top 90%',
        },
      });
    }
  });

  return (
    <section className="shows" id={HomeSection.shows}>
      <h2 className="shows__title" ref={showsTitle}>
        <span className="shows__title__blender" ref={showsTitleBlender}></span>
        <span className="shows__title__text" ref={showsTitleText}>
          Upcoming Shows
        </span>
      </h2>
      <div className="shows__content">
        {upcomingShows.length > 0 ? (
          upcomingShows.map((show: IShow, i) => (
            <div className="shows__content__show" key={i}>
              <div className="shows__content__show__date">
                <p className="shows__content__show__date__day">
                  {show.start.getUTCDate()}
                </p>
                <p className="shows__content__show__date__month">
                  {show.start.toLocaleString('en', { month: 'long' })}
                </p>
                <p className="shows__content__show__date__year">
                  {show.start.getUTCFullYear()}
                </p>
              </div>
              <div className="shows__content__show__location">
                <p className="shows__content__show__location__title">
                  {show.location.title}
                </p>
                <p className="shows__content__show__location__address">
                  {show.location.address}
                </p>
                {show.location.url && (
                  <a
                    href={show.location.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shows__content__show__location__url"
                  >
                    {removeURLProtocol(show.location.url)}
                  </a>
                )}
              </div>
              <div className="shows__content__show__tickets">
                {show.ticket.url ? (
                  <Button
                    text={`
                      Tickets (${show.ticket.label})
                  `}
                    link={show.ticket.url}
                    linkTarget="_blank"
                  />
                ) : (
                  <Button
                    text={`
                      Tickets (${show.ticket.label})
                  `}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="shows__content__empty">Coming Soon!</p>
        )}
      </div>
      <ShowsMarquee className={'shows__marquee'} />
      {previousShows.length <= 2 && (
        <div className="shows__recent">
          <h2
            className="shows__title shows__title__recent"
            ref={showsRecentTitle}
          >
            <span
              className="shows__title__blender"
              ref={showsRecentTitleBlender}
            ></span>
            <span className="shows__title__text" ref={showsRecentTitleText}>
              Recent Shows
            </span>
          </h2>
          <div className="shows__content">
            {previousShows.length > 0 ? (
              previousShows.map((show: IShow, i) => (
                <div className="shows__content__show" key={i}>
                  <div className="shows__content__show__date">
                    <p className="shows__content__show__date__day">
                      {show.start.getUTCDate()}
                    </p>
                    <p className="shows__content__show__date__month">
                      {show.start.toLocaleString('en', { month: 'long' })}
                    </p>
                    <p className="shows__content__show__date__year">
                      {show.start.getUTCFullYear()}
                    </p>
                  </div>
                  <div className="shows__content__show__location">
                    <p className="shows__content__show__location__title">
                      {show.location.title}
                    </p>
                    <p className="shows__content__show__location__address">
                      {show.location.address}
                    </p>
                    {show.location.url && (
                      <a
                        href={show.location.url}
                        target="_blank"
                        rel="noreferrer"
                        className="shows__content__show__location__url"
                      >
                        {removeURLProtocol(show.location.url)}
                      </a>
                    )}
                  </div>
                  <div className="shows__content__show__tickets"></div>
                </div>
              ))
            ) : (
              <p className="shows__content__empty">Coming Soon!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Shows;
