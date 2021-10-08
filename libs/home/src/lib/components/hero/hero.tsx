import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC = (props: HeroProps) => {
  return (
    <div className="hero">
      <h1>Welcome to Hero!</h1>
    </div>
  );
};

export default Hero;
