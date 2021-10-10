import Hero from './components/hero/hero';
import Music from './components/music/music';
import Shows from './components/shows/shows';
import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <Hero />
      <Shows />
      <Music />
    </div>
  );
};

export default Home;
