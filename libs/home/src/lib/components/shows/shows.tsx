import './shows.scss';
// import { Helmet } from 'react-helmet';
import { shows, IShow } from '@stagefright/shared/data';

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC = (props: ShowsProps) => {
  // useScript('https://widget.bandsintown.com/main.min.js');

  return (
    <div className="shows" id="shows">
      <h1 className="shows__title">Upcoming Shows</h1>
      <div className="shows__content">
        {shows.map((show: IShow) => (
          <div className="shows__content__show">
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
            </div>
            <div className="shows__content__show__tickets"></div>
          </div>
        ))}
        {/* <Helmet>
          <script
            charSet="utf-8"
            src="https://widget.bandsintown.com/main.min.js"
          ></script>
          <a
            className="bit-widget-initializer"
            data-artist-name="StageFright Official"
            data-display-past-dates="true"
            data-text-color="#000000"
            data-link-color="#830000"
            data-background-color="#ffffff"
            data-display-details="true"
            data-popup-background-color="#ffffff"
            data-link-text-color="#FFFFFF"
            data-separator-color="#CBCBCB"
            data-language="en"
            data-font="Helvetica"
            data-display-local-dates="false"
            data-auto-style="false"
            data-display-lineup="false"
            data-display-play-my-city="true"
            data-display-limit="15"
            data-display-start-time="false"
            href="https://google.com"
          >
            a
          </a>
        </Helmet> */}
        {/* <iframe src="https://bnds.us/3bze0r" title="StageFright Shows"></iframe> */}
      </div>
    </div>
  );
};

export default Shows;
