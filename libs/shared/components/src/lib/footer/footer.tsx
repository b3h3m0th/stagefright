/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import { logoFilledWhite } from '@stagefright/shared/assets';
import './footer.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const [, ...navItems] = Object.entries(HomeSection);

  return (
    <div className="footer">
      <div className="footer__head">
        <img
          src={logoFilledWhite}
          alt="StageFright Logo"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <div className="footer__content">
        <ul className="footer__content__quick-links">
          {navItems.map((e: [string, HomeSection], i) => (
            <li className="footer__content__quick-links__item" key={i}>
              <a
                className="footer__content__quick-links__item__link"
                href={`#${e[0]}`}
              >
                {e[1]}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__content__copyright">
          &copy; Copyright StageFright {new Date().getFullYear()} <br />
          Responsible editor Skip
        </p>
      </div>
    </div>
  );
};

export default Footer;
