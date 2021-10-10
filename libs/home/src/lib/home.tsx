import Hero from './components/hero/hero';
import Shows from './components/shows/shows';
import './home.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <BrowserRouter>
        <Hero />
        <Shows />
      </BrowserRouter >
    </div>
  );
};

export default Home;
