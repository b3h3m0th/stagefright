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
import { motion, Variants } from 'framer-motion';
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

  const navListAnimation: Variants = {
    animate: {
      transition: {
        delayChildren: isFirstRender
          ? (animationData.hero.delay + loading.artificialPageMountDelay) / 1000
          : animationData.hero.delay / 1000,
        staggerChildren: 0.2,
      },
    },
  };

  const navItemAnimation: Variants = {
    initial: {
      transform: 'translateY(-50px)',
    },
    animate: {
      transform: 'translateY(0px)',
      transition: {
        ease: animationData.hero.ease,
        duration: animationData.hero.duration / 1000,
      },
    },
  };

  const renderSocials: () => JSX.Element = () => (
    <motion.div
      className="nav__list__item__socials"
      initial="initial"
      animate="animate"
      variants={navListAnimation}
    >
      <motion.a
        href="#shop"
        variants={navItemAnimation}
        onClick={() => scrollToNavigationTarget(['shop', HomeSection.shop])}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </motion.a>
      <motion.a
        href={config.socials.instagram.link}
        target="_blank"
        rel="noreferrer"
        variants={navItemAnimation}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </motion.a>
      <motion.a
        href={config.socials.facebook.link}
        target="_blank"
        rel="noreferrer"
        variants={navItemAnimation}
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </motion.a>
    </motion.div>
  );

  return windowWidth > config.breakpoints.phone ? (
    <nav
      className={`nav ${isNavTransparent ? 'nav__transparent' : ''}`}
      id="nav"
    >
      <motion.ul
        className="nav__list"
        variants={navListAnimation}
        initial="initial"
        animate="animate"
      >
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
            <motion.a
              className="nav__list__item__link"
              href={`#${e[0]}`}
              onClick={() => scrollToNavigationTarget(e)}
              variants={navItemAnimation}
            >
              {e[1]}
            </motion.a>
          </li>
        ))}
        {/* {renderSocials()} */}
        <motion.div
          className="nav__list__item__socials"
          variants={navListAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.a
            href="#shop"
            variants={navItemAnimation}
            onClick={() => scrollToNavigationTarget(['shop', HomeSection.shop])}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </motion.a>
          <motion.a
            href={config.socials.instagram.link}
            target="_blank"
            rel="noreferrer"
            variants={navItemAnimation}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a
            href={config.socials.facebook.link}
            target="_blank"
            rel="noreferrer"
            variants={navItemAnimation}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </motion.a>
        </motion.div>
      </motion.ul>
    </nav>
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
