import { Link } from 'react-router-dom';
import './header.scss';
import * as config from '@stagefright/shared/config';
import AnimateHeight from 'react-animate-height';

/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  useFirstRender,
  useIsNavTransparent,
  useWindowSize,
} from '@stagefright/shared/util';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { animationData, loading } from '@stagefright/shared/config';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const scrollBreakpoint = 200 as const;
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { width: windowWidth } = useWindowSize();
  const isNavTransparent = useIsNavTransparent(isMenuOpened, scrollBreakpoint);
  const isFirstRender = useFirstRender();

  const navItems: [string, HomeSection][] = Object.entries(HomeSection).filter(
    (o) => !o.includes(HomeSection.default)
  );

  const scrollToNavigationTarget: (target: [string, HomeSection]) => void = (
    target: [string, HomeSection]
  ) =>
    window.scrollTo(
      0,
      document.getElementById(target[0])!.offsetTop -
        document.getElementById('nav')!.offsetTop
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
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
  );

  return windowWidth > config.breakpoints.phone ? (
    <motion.nav
      className={`nav ${isNavTransparent ? 'nav__transparent' : ''}`}
      id="nav"
      initial={{ transform: 'translateY(-100px)' }}
      animate={{ transform: 'translateY(0px)' }}
      transition={{
        duration: (animationData.hero.duration / 1000) * 2,
        ease: animationData.hero.ease,
        delay: isFirstRender
          ? (animationData.hero.delay + loading.artificialPageMountDelay) / 1000
          : animationData.hero.delay / 1000,
      }}
    >
      <ul className="nav__list">
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
        {navItems.map((e: [string, HomeSection], i: number) => (
          <li className="nav__list__item" key={i}>
            <a
              className="nav__list__item__link"
              href={`#${e[0]}`}
              onClick={() => scrollToNavigationTarget(e)}
            >
              {e[1]}
            </a>
          </li>
        ))}
        {renderSocials()}
      </ul>
    </motion.nav>
  ) : (
    <nav
      className={`nav ${isMenuOpened ? 'nav__opened' : ''} ${
        isNavTransparent ? 'nav__transparent' : ''
      }`}
      id="nav"
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
          {navItems.map((e: [string, HomeSection], i: number) => (
            <li
              className="nav__list__item"
              key={i}
              onClick={() => setIsMenuOpened(false)}
            >
              <a
                className="nav__list__item__link"
                href={`#${e[0]}`}
                onClick={() => scrollToNavigationTarget(e)}
              >
                {e[1]}
              </a>
            </li>
          ))}
          {renderSocials()}
        </AnimateHeight>
      </ul>
      <div
        className={`burger-menu`}
        onClick={() => setIsMenuOpened((prev: boolean) => !prev)}
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
