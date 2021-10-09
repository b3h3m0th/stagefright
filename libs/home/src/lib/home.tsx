import Hero from './components/hero/hero';
import Shows from './components/shows/shows';
/*eslint-disable-next-line */
import { Footer } from '@stagefright/shared/components';
import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <Hero />
      <Shows />
      <Footer />
    </div>
  );
};

export default Home;
