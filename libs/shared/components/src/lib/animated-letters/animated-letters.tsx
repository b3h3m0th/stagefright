import './animated-letters.scss';
import { motion, Variants } from 'framer-motion';
import { CSSProperties } from 'react';
import { animationData } from '@stagefright/shared/config';

export enum LetterAnimationDirection {
  Down = 'down',
  Up = 'up',
}

export interface AnimatedLettersProps {
  text: string;
  disabled?: boolean;
  wrapperClassName?: string | string[];
  letterClassName?: string | string[];
  wrapperStyle?: CSSProperties;
  animationDirection?: LetterAnimationDirection | 'up' | 'down';
}

export const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  text,
  disabled,
  wrapperClassName,
  letterClassName,
  wrapperStyle = {},
  animationDirection = LetterAnimationDirection.Down,
}: AnimatedLettersProps) => {
  const banner: Variants = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.07,
      },
    },
  };

  const letterAnimation: Variants = {
    initial: {
      y: animationDirection == LetterAnimationDirection.Down ? -1000 : 1000,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: animationData.hero.duration / 1000,
      },
    },
  };

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
      style={wrapperStyle}
    >
      {[...text].map((letter: string, i: number) => (
        <motion.span
          key={i}
          className={`animated-letters__row-letter ${
            letterClassName
              ? letterClassName instanceof Array
                ? letterClassName.join(' ')
                : letterClassName
              : ''
          }`}
          variants={disabled ? undefined : letterAnimation}
        >
          {letter === ' ' ? '_' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
