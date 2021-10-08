import { Link } from 'react-router-dom';
import './header.scss';

import { HomeSection } from '@stagefright/router';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [, ...navItems] = Object.entries(HomeSection);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.slice(0, Math.ceil(navItems.length / 2)).map((e) => (
          <li className="nav__list__item">
            <Link className="nav__list__item__link" to={{ hash: e[0] }}>
              {e[1]}
            </Link>
          </li>
        ))}
        <li className="nav__list__item">
          <Link to={`/`}>
            {/* <img className="nav__list__logo" src="assets/img/logo.png" alt="" /> */}
            <span className="nav__list__logo">StageFright</span>
          </Link>
        </li>
        {navItems.slice(-Math.ceil(navItems.length / 2)).map((e) => (
          <li className="nav__list__item">
            <Link className="nav__list__item__link" to={{ hash: e[0] }}>
              {e[1]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
