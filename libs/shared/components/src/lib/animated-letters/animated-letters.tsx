import './animated-letters.scss';
import { motion, Variants } from 'framer-motion';

const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation: Variants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export interface AnimatedLettersProps {
  text: string;
  disabled?: boolean;
  wrapperClassName?: string | string[];
}

export const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  text,
  disabled,
  wrapperClassName,
}: AnimatedLettersProps) => {
  return (
    <motion.span
      variants={disabled ? undefined : banner}
      initial="initial"
      animate="animate"
      className={`animated-letters__row-title ${
        wrapperClassName
          ? wrapperClassName instanceof Array
            ? wrapperClassName.join(' ')
            : wrapperClassName
          : ''
      }`}
    >
      {[...text].map((letter: string, i: number) => (
        <motion.span
          key={i}
          className="animated-letters__row-letter"
          variants={disabled ? undefined : letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
