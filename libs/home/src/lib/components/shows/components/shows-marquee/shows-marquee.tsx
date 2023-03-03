/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import './shows-marquee.scss';
import Marquee from 'react-fast-marquee';
import {
  animationData,
  IShow,
  upcomingShows,
} from '@stagefright/shared/config';
import { Fragment } from 'react';

export interface ShowsMarqueeProps {
  className?: string | string[];
}

export const ShowsMarquee = ({ className }: ShowsMarqueeProps) => {
  return (
    <div
      className={`shows-marquee
    ${
      className
        ? className instanceof Array
          ? className.join(' ')
          : className
        : ''
    }
    `}
    >
      <Marquee gradient={false} speed={animationData.marqueeSpeed}>
        {[]
          .concat(...Array(10).fill(upcomingShows))
          .map((show: IShow, i: number) => {
            const showContent = `
              [${show.start.toLocaleDateString()} ${show.location.title}]`;
            const divider: JSX.Element = (
              <span key={`${show}-${i}`} className="shows-marquee__divider">
                {' '}
                666{' '}
              </span>
            );

            return (
              <Fragment key={i}>
                {show.location.url ? (
                  <a
                    className="shows-marquee__show"
                    href={show.location.url.toString()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {showContent}
                  </a>
                ) : (
                  <div className="shows-marquee__show">{showContent}</div>
                )}
                {divider}
              </Fragment>
            );
          })}
      </Marquee>
    </div>
  );
};

export default ShowsMarquee;
