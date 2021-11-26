import Hero from './components/hero/hero';
import Music from './components/music/music';
import Shows from './components/shows/shows';
import Socials from './components/socials/socials';
/*eslint-disable-next-line */
import { Contact, NoiseBackground } from '@stagefright/shared/components';
import './home.scss';
import { motion } from 'framer-motion';
import Shop from './components/shop/shop';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <motion.div
      className="home"
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <Hero />
      <Shows />
      <Music />
      <Shop />
      {/* <Socials /> */}
      <Contact />
      <NoiseBackground />
    </motion.div>
  );
};

export default Home;
