import { Link } from 'react-router-dom';
import './header.scss';
import * as config from '@stagefright/shared/config';
import AnimateHeight from 'react-animate-height';

/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAmazon,
  faDeezer,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const [, ...navItems] = Object.entries(HomeSection);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [windowWidth]);

  const renderSocials: () => JSX.Element = () => (
    <div className="nav__list__item__socials">
      <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      {/* <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faSpotify} />
      </a>
      <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faAmazon} />
      </a>
      <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faDeezer} />
      </a>
      <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a> */}
    </div>
  );

  return windowWidth > config.breakpoints.phone ? (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.slice(0, Math.ceil(navItems.length / 2)).map((e, i) => (
          <li className="nav__list__item" key={i}>
            <a className="nav__list__item__link" href={`#${e[0]}`}>
              {e[1]}
            </a>
          </li>
        ))}
        <li
          className="nav__list__item nav__list__item__logo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Link to={`/`}>
            <img src="assets/img/logo_filled.png" alt="StageFright Logo" />
          </Link>
        </li>
        {navItems.slice(-Math.ceil(navItems.length / 2)).map((e, i) => (
          <li className="nav__list__item" key={i}>
            <a className="nav__list__item__link" href={`#${e[0]}`}>
              {e[1]}
            </a>
          </li>
        ))}
        {renderSocials()}
      </ul>
    </nav>
  ) : (
    <nav className={`nav ${isMenuOpened ? 'nav__opened' : ''}`}>
      <ul className="nav__list">
        <li
          className="nav__list__item nav__list__item__logo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Link to={`/`}>
            <img src="assets/img/logo_filled.png" alt="StageFright Logo" />
          </Link>
        </li>
        <AnimateHeight duration={350} height={isMenuOpened ? 'auto' : 0}>
          {navItems.map((e, i) => (
            <li
              className="nav__list__item"
              key={i}
              onClick={() => setIsMenuOpened(false)}
            >
              <a className="nav__list__item__link" href={`#${e[0]}`}>
                {e[1]}
              </a>
            </li>
          ))}
          {renderSocials()}
        </AnimateHeight>
      </ul>
      <div
        className={`burger-menu`}
        onClick={() => setIsMenuOpened((prev) => !prev)}
      >
        <div
          className={`burger-menu__layer${isMenuOpened ? '__opened' : ''}`}
        ></div>
        <div
          className={`burger-menu__layer${isMenuOpened ? '__opened' : ''}`}
        ></div>
        <div
          className={`burger-menu__layer${isMenuOpened ? '__opened' : ''}`}
        ></div>
      </div>
    </nav>
  );
};

export default Header;
