import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from '@stagefright/shared/config';
import { useScript } from '@stagefright/shared/util';
import './socials.scss';

/* eslint-disable-next-line */
export interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = (props: SocialsProps) => {
  useScript('https://cdn.lightwidget.com/widgets/lightwidget.js');

  return (
    <div className="socials-section">
      <div className="socials-section__instagram">
        <iframe
          title="StageFright Instagram Feed"
          src="//lightwidget.com/widgets/8a23b912024353d7907ce39e63b56635.html"
          scrolling="no"
          className="lightwidget-widget socials-section__instagram__feed"
        ></iframe>
        <a
          href={socials.instagram.link}
          className="socials-section__instagram__follow"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <FontAwesomeIcon icon={faInstagram} />
            <span> Follow {socials.instagram.username}</span>
          </button>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Socials;
