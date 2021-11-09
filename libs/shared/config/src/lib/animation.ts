import { loading } from './loading';

export const animationData = {
  hero: {
    duration: 1000,
    delay: 500 + loading.artificialPageMountDelay,
    ease: [0.6, 0.01, -0.05, 0.95],
  },
};
