import './shows.scss';
import { useScript } from '@stagefright/shared/util';
import { Helmet } from 'react-helmet';

/* eslint-disable-next-line */
export interface ShowsProps {}

export const Shows: React.FC = (props: ShowsProps) => {
  // useScript('https://widget.bandsintown.com/main.min.js');

  return (
    <div className="shows" id="shows">
      <h1 className="shows__title">Upcoming Shows</h1>
      <div className="shows__content">
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
        {/* <iframe src="http://localhost:3000" title="x"></iframe> */}
      </div>
    </div>
  );
};

export default Shows;