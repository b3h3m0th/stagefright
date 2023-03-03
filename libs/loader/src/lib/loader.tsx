import './loader.scss';
import { motion } from 'framer-motion';
import { loading } from '@stagefright/shared/config';
import { logoLetteringWhite } from '@stagefright/shared/assets';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  return (
    <div className="loader">
      <motion.img
        className="loader__logo"
        src={logoLetteringWhite}
        alt="StageFright Logo"
        transition={{
          duration: (loading.artificialPageMountDelay / 1000 / 5) * 3,
          delay: (loading.artificialPageMountDelay / 1000 / 5) * 2,
        }}
        animate={{ opacity: 0 }}
      />
    </div>
  );
};

export default Loader;
