import './shows.scss';
import { shows, IShow } from '@stagefright/shared/data';
import { removeURLProtocol } from '@stagefright/shared/util';

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC<ShowsProps> = (props: ShowsProps) => {
  const upcomingShows: IShow[] = shows.filter(
    (show) => new Date() < show.start
  );

  return (
    <div className="shows" id="shows">
      <h2 className="shows__title">Upcoming Shows</h2>
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
                  <a href={show.ticket.url} target="_blank" rel="noreferrer">
                    <button className="ticket-button">
                      Tickets ({show.ticket.label})
                    </button>
                  </a>
                ) : (
                  <button className="ticket-button">
                    Tickets ({show.ticket.label})
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="shows__content__empty">Coming Soon!</p>
        )}
      </div>
    </div>
  );
};

export default Shows;
