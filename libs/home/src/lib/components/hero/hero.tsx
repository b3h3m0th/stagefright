import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC = (props: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Debut Album "Wanted" Coming Soon!</h1>
      </div>
    </div>
  );
};

export default Hero;
