import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <nav className="nav">
      <img className="nav__logo" src="assets/img/logo.png" alt="" />
    </nav>
  );
};

export default Header;
