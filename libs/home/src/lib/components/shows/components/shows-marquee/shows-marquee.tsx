import './shows-marquee.scss';
import Marquee from 'react-fast-marquee';
import { IShow, upcomingShows } from '@stagefright/shared/config';

/* eslint-disable-next-line */
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
      <Marquee gradient={false} speed={100}>
        {[]
          .concat(...Array(10).fill(upcomingShows))
          .map((show: IShow, i: number) => {
            const showContent = `
              [${show.start.toLocaleDateString()} ${show.location.title}]`;
            const divider: JSX.Element = (
              <>
                {' '}
                <span key={i} className="shows-marquee__divider">
                  /
                </span>{' '}
              </>
            );

            return (
              <>
                {show.location.url ? (
                  <a
                    key={i}
                    className="shows-marquee__show"
                    href={show.location.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {showContent}
                  </a>
                ) : (
                  <div key={i} className="shows-marquee__show">
                    {showContent}
                  </div>
                )}
                {divider}
              </>
            );
          })}
      </Marquee>
    </div>
  );
};

export default ShowsMarquee;
