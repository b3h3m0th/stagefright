/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './footer.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC = (props: FooterProps) => {
  const [, ...navItems] = Object.entries(HomeSection);

  return (
    <div className="footer">
      <div className="footer__head">
        <img src="assets/img/logo_filled.png" alt="StageFright Logo" />
      </div>
      <h1>Welcome to Footer!</h1>
      {navItems.map((e, i) => (
        <li className="" key={i}>
          <a className="" href={`#${e[0]}`}>
            {e[1]}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Footer;
