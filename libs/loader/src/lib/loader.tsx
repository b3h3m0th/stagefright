import './loader.scss';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  return (
    <div className="loader">
      <motion.img
        className="loader__logo"
        src="assets/img/logo_filled.png"
        alt="StageFright Logo"
        transition={{ duration: 1 }}
        animate={{ opacity: 0 }}
      />
    </div>
  );
};

export default Loader;
