import { Link } from 'react-router-dom';
import './header.scss';
import * as config from '@stagefright/shared/config';
import AnimateHeight from 'react-animate-height';

/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAmazon,
  faDeezer,
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useIsNavTransparent, useWindowSize } from '@stagefright/shared/util';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const scrollBreakpoint = 200 as const;
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { width: windowWidth } = useWindowSize();
  const isNavTransparent = useIsNavTransparent(isMenuOpened, scrollBreakpoint);

  const navItems: [string, HomeSection][] = Object.entries(HomeSection).filter(
    (o) => !o.includes(HomeSection.default)
  );

  const renderSocials: () => JSX.Element = () => (
    <div className="nav__list__item__socials">
      <a href="#shop">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
      <a href={config.socials.instagram.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={config.socials.facebook.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
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
    <nav className={`nav ${isNavTransparent ? 'nav__transparent' : ''}`}>
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
          <Link to={`/${HomeSection.default}`}>
            <img
              src="assets/img/logo_filled_white.png"
              alt="StageFright Logo"
            />
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
    <nav
      className={`nav ${isMenuOpened ? 'nav__opened' : ''} ${
        isNavTransparent ? 'nav__transparent' : ''
      }`}
    >
      <ul className="nav__list">
        <li
          className="nav__list__item nav__list__item__logo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Link to={`/`}>
            <img
              src="assets/img/logo_filled_white.png"
              alt="StageFright Logo"
            />
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
