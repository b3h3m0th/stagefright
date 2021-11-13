import './shows-marquee.scss';
import Marquee from 'react-fast-marquee';
import { IShow, shows } from '@stagefright/shared/data';

/* eslint-disable-next-line */
export interface ShowsMarqueeProps {}

export const ShowsMarquee = (props: ShowsMarqueeProps) => {
  return (
    <div className="shows-marquee">
      <Marquee gradient={false} speed={100}>
        {[].concat(...Array(10).fill(shows)).map((show: IShow, i: number) => {
          const showContent = `
              [${show.start.toLocaleDateString()} ${show.location.title}]`;
          const divider: JSX.Element = (
            <>
              {' '}
              <span className="shows-marquee__divider">/</span>{' '}
            </>
          );

          return (
            <>
              {show.location.url ? (
                <a
                  className="shows-marquee__show"
                  href={show.location.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {showContent}
                </a>
              ) : (
                <div className="shows-marquee__show">{showContent}</div>
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
