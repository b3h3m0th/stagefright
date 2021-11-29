import './contact.scss';
import { animationData, contact } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import { useMousePosition } from '@stagefright/shared/util';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const initCursor: (e: MouseEvent) => gsap.core.Tween = (e: MouseEvent) =>
      gsap.to(cursorRef.current, {
        scale: animationData.contact.defaultCursorScale,
        autoAlpha: 1,
        duration: animationData.contact.duration / 1000,
      });

    const exitCursor: (e: MouseEvent) => gsap.core.Tween = (e: MouseEvent) =>
      gsap.to(cursorRef.current, {
        scale: animationData.contact.reducedCursorScale,
        autoAlpha: 0,
        duration: animationData.contact.duration / 1000,
      });

    const increaseCursor: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) => {
      cursorRef.current && (cursorRef.current.innerText = 'Now!');

      return gsap.to(cursorRef.current, {
        scale: animationData.contact.increasedCursorScale,
        duration: animationData.contact.duration / 1000,
      });
    };

    const reduceCursor: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) => {
      cursorRef.current && (cursorRef.current.innerText = '666');
      return gsap.to(cursorRef.current, {
        scale: animationData.contact.increasedCursorScale,
        duration: animationData.contact.duration / 1000,
      });
    };

    gsap.to(cursorRef.current, {
      duration: 0.5,
      css: {
        left: mousePosition.x,
        top: mousePosition.y,
      },
    });

    contactRef.current?.addEventListener('mouseover', initCursor);
    contactRef.current?.addEventListener('mouseout', exitCursor);
    emailRef.current?.addEventListener('mouseenter', increaseCursor);
    emailRef.current?.addEventListener('mouseout', reduceCursor);

    return () => {
      contactRef.current?.removeEventListener('mouseover', initCursor);
      contactRef.current?.removeEventListener('mouseout', exitCursor);
      emailRef.current?.removeEventListener('mouseenter', increaseCursor);
      emailRef.current?.removeEventListener('mouseout', reduceCursor);
    };
  });

  return (
    <div className="contact" id={HomeSection.contact} ref={contactRef}>
      <div className="contact__cursor" ref={cursorRef}>
        666
      </div>
      <div className="contact__content">
        <div className="contact__content__email" ref={emailRef}>
          <a
            href={`mailto:${contact.email}`}
            className="contact__content__email__email"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
