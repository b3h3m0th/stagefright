import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC = (props: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>
          Debut Album{' '}
          <span className="hero__content__album-title">"Wanted"</span> Coming
          Soon!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
