import './contact.scss';
import { contact } from '@stagefright/shared/config';
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
        scale: 1,
        autoAlpha: 1,
        duration: 0.25,
      });

    const exitCursor: (e: MouseEvent) => gsap.core.Tween = (e: MouseEvent) =>
      gsap.to(cursorRef.current, {
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.25,
      });

    const increaseCursor: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(cursorRef.current, {
        scale: 20,
        duration: 0.25,
      });

    const reduceCursor: (e: MouseEvent) => gsap.core.Tween = (e: MouseEvent) =>
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.25,
      });

    gsap.to(cursorRef.current, {
      css: {
        left: mousePosition.x,
        top: mousePosition.y,
      },
    });

    contactRef.current?.addEventListener('mouseover', initCursor);
    contactRef.current?.addEventListener('mouseout', exitCursor);
    emailRef.current?.addEventListener('mouseover', increaseCursor);
    emailRef.current?.addEventListener('mouseout', reduceCursor);

    return () => {
      contactRef.current?.removeEventListener('mouseover', initCursor);
      contactRef.current?.removeEventListener('mouseout', exitCursor);
      emailRef.current?.removeEventListener('mouseover', increaseCursor);
      emailRef.current?.removeEventListener('mouseout', reduceCursor);
    };
  });

  return (
    <div className="contact" id={HomeSection.contact} ref={contactRef}>
      <div className="contact__cursor" ref={cursorRef}></div>
      <div className="contact__content">
        <div className="contact__content__email" ref={emailRef}>
          <a
            href={`mailto:${contact.email}`}
            className="contact__content__email__email"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
