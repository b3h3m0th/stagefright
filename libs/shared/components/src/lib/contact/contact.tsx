import './contact.scss';
import { contact } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Power4 } from 'gsap/all';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.to('.contact__content__email', {
      y: -50,
      scrollTrigger: {
        trigger: '.contact__content__email',
        scrub: 1,
      },
    });

    const onContactMouseEnter = (e: MouseEvent) => {
      gsap.to(underlineRef.current, {
        duration: 0,
        opacity: 1,
        onComplete: () => {
          gsap.to(underlineRef.current, {
            ease: Power4.easeIn,
            width: '100%',
            duration: 0.3,
          });
        },
      });
    };

    const onContactMouseLeave = (e: MouseEvent) => {
      gsap.to(underlineRef.current, {
        ease: Power4.easeIn,
        left: '100%',
        duration: 0.3,
        onComplete: () => {
          gsap.to(underlineRef.current, {
            opacity: 0,
            duration: 0,
            width: 0,
            onComplete: () => {
              gsap.to(underlineRef.current, {
                duration: 0,
                left: 0,
                onComplete: () => {
                  gsap.to(underlineRef.current, {
                    duration: 0,
                  });
                },
              });
            },
          });
        },
      });
    };

    contactRef.current?.addEventListener('mouseenter', onContactMouseEnter);
    contactRef.current?.addEventListener('mouseleave', onContactMouseLeave);

    return () => {
      contactRef.current?.removeEventListener(
        'mouseenter',
        onContactMouseEnter
      );
      contactRef.current?.removeEventListener(
        'mouseleave',
        onContactMouseLeave
      );
    };
  });

  return (
    <div className="contact" id={HomeSection.contact}>
      {/* <h2 className="contact__title">Contact</h2> */}
      <div className="contact__content">
        <div className="contact__content__email">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <a
            href={`mailto:${contact.email}`}
            className="contact__content__email__email"
            ref={contactRef}
          >
            Contact Us
          </a>
          <div
            className="contact__content__email__underline"
            ref={underlineRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
