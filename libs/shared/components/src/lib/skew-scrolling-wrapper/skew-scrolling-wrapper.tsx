import { useWindowSize } from '@stagefright/shared/util';
import { ReactNode, useEffect, useRef } from 'react';
import './skew-scrolling-wrapper.scss';

export type SkewSrollConfig = {
  ease: number;
  current: number;
  previous: number;
  rounded: number;
};

/* eslint-disable-next-line */
export interface SkewScrollingWrapperProps {
  children: ReactNode;
  skewConfig?: SkewSrollConfig;
}

export const SkewScrollingWrapper: React.FC<SkewScrollingWrapperProps> = ({
  children,
  skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  },
}: SkewScrollingWrapperProps) => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => setBodyHeight(), [windowSize.height]);

  useEffect(
    () => requestAnimationFrame(() => skewScrolling()) as unknown as void,
    []
  );

  const setBodyHeight: () => void = () => {
    document.body.style.height = `${scrollContainer.current!.clientHeight}px`;
  };

  const skewScrolling: () => void = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    setBodyHeight();
    scrollContainer.current!.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={scrollWrapper} className="skew-scroll-wrapper">
      <div ref={scrollContainer} className="skew-scroll-wrapper__container">
        {children}
      </div>
    </div>
  );
};

export default SkewScrollingWrapper;
