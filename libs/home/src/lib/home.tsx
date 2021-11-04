import Hero from './components/hero/hero';
import Music from './components/music/music';
import Shows from './components/shows/shows';
/*eslint-disable-next-line */
import { Contact } from '@stagefright/shared/components';
import './home.scss';
import { motion } from 'framer-motion';
// import Shop from './components/shop/shop';
import InstagramEmbed from 'react-instagram-embed';
/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  // const accessToken = `${process.env.NX_INSTAGRAM_APP_ID ?? ''}|${
  //   process.env.NX_INSTAGRAM_CLIENT_TOKEN ?? ''
  // }` as const;

  return (
    <motion.div
      className="home"
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <Hero />
      <Shows />
      <Music />
      {/* <Shop /> */}
      {/* <InstagramEmbed
        url="https://www.instagram.com/stagefright.official/"
        clientAccessToken={accessToken}
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      /> */}
      <Contact />
    </motion.div>
  );
};

export default Home;
