import Hero from './components/hero/hero';
import Music from './components/music/music';
import Shows from './components/shows/shows';
/*eslint-disable-next-line */
import { Contact } from '@stagefright/shared/components';
import './home.scss';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: React.FC = (props: HomeProps) => {
  return (
    <motion.div
      className="home"
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <Hero />
      <Shows />
      <Music />
      <Contact />
    </motion.div>
  );
};

export default Home;
