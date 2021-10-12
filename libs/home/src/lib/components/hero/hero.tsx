import './hero.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__content__headline">
          Debut Album{' '}
          <span className="hero__content__headline__album-title">"Wanted"</span>{' '}
          Coming Soon!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
