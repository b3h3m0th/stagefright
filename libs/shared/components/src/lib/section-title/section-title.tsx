import { useEffect, useRef } from 'react';
import './section-title.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export interface SectionTitleProps {
  text: string;
  playAnimation?: boolean;
  timelineConfig?: gsap.TimelineVars;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  text = 'Title missing',
  timelineConfig,
  playAnimation = true,
}: SectionTitleProps) => {
  const sectionTitle = useRef<HTMLHeadingElement>(null);
  const sectionTitleText = useRef<HTMLParagraphElement>(null);
  const sectionTitleBlender = useRef<HTMLDivElement>(null);

  useEffect(() => {
    playAnimation &&
      gsap
        .timeline({
          ...timelineConfig,
          scrollTrigger: {
            trigger: sectionTitle.current,
            start: 'top bottom',
          },
        })
        .to(sectionTitleBlender.current, {
          opacity: 1,
          duration: 0,
        })
        .to(sectionTitleBlender.current, {
          width: '100%',
          duration: 1,
          ease: Power4.easeOut,
        })
        .to(sectionTitleBlender.current, {
          right: 0,
          marginLeft: 5,
          duration: 0,
        })
        .to(sectionTitleText.current, {
          opacity: 1,
          duration: 0,
        })
        .to(sectionTitleBlender.current, {
          x: '100%',
          duration: 1,
          ease: Power4.easeOut,
        });
  }, []);

  return (
    <h2 className="section-title" ref={sectionTitle}>
      <div className="section-title__blender" ref={sectionTitleBlender}></div>
      <p className="section-title__text" ref={sectionTitleText}>
        {text}
      </p>
    </h2>
  );
};

export default SectionTitle;
