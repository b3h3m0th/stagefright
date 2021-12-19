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
import { Button, SectionTitle } from '@stagefright/shared/components';
import { gsap } from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { useEffect } from 'react';
import { animationData, loading } from '@stagefright/shared/config';
import { ShowsMarquee } from './components';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC<ShowsProps> = (props: ShowsProps) => {
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > breakpoints.phone) {
      gsap.to('.shows__marquee', {
        opacity: 1,
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
      <SectionTitle
        text="Upcoming Shows"
        timelineConfig={{
          delay:
            animationData.hero.delay / 1000 +
            loading.artificialPageMountDelay / 1000,
        }}
      />
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
          <p className="shows__content__empty shows__content__show">
            Coming Soon!
          </p>
        )}
      </div>
      <ShowsMarquee className={'shows__marquee'} />
      {upcomingShows.length <= 2 && (
        <div className="shows__recent">
          <SectionTitle text="Recent Shows" />
          <div className="shows__content">
            {previousShows.length > 0 ? (
              previousShows.map((show: IShow, i) => (
                <div
                  className="shows__content__show shows__recent__content__show"
                  key={i}
                >
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
