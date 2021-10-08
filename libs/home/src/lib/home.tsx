import Hero from './components/hero/hero';
import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <Hero />
      <div className="home__music"></div>
    </div>
  );
};

export default Home;
