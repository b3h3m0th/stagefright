/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './music.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { memo, MemoExoticComponent, useEffect, useRef } from 'react';
import { musicData, IMusic, animationData } from '@stagefright/shared/config';
import { useMousePosition } from '@stagefright/shared/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface MusicProps {}

export const Music: MemoExoticComponent<React.FC<MusicProps>> = memo(
  (props: MusicProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const followRef = useRef<HTMLDivElement>(null);
    const followImageRef = useRef<HTMLImageElement>(null);
    const mousePosition = useMousePosition();

    const updateFollowImage: (source: string) => void = (source: string) => {
      followImageRef.current && (followImageRef.current.src = source);
    };

    useEffect(() => {
      const onProductsOver: (e: MouseEvent) => gsap.core.Tween = (
        e: MouseEvent
      ) =>
        gsap.to(followRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: animationData.music.duration / 1000 / 4,
        });

      const onProductsLeave: (e: MouseEvent) => gsap.core.Tween = (
        e: MouseEvent
      ) =>
        gsap.to(followRef.current, {
          autoAlpha: 0,
          scale: 0.5,
          duration: animationData.shop.duration / 1000 / 4,
        });

      gsap.to(followRef.current, {
        css: {
          left: mousePosition.x,
          top: mousePosition.y,
        },
      });

      contentRef.current?.addEventListener('mouseover', onProductsOver);
      contentRef.current?.addEventListener('mouseleave', onProductsLeave);

      return () => {
        contentRef.current?.removeEventListener('mouseover', onProductsOver);
        contentRef.current?.removeEventListener('mouseleave', onProductsLeave);
      };
    });

    return (
      <section className="music" id={HomeSection.music}>
        <h2 className="music__title" ref={titleRef}>
          Music
        </h2>
        <div className="music__link"></div>
        <div className="music__content" ref={contentRef}>
          <div className="music__content__follow" ref={followRef}>
            <div className="music__content__follow__blender"></div>
            <img
              alt="StageFright merch shirt"
              className="music__content__follow__image"
              ref={followImageRef}
              src={musicData[0].cover}
            />
          </div>
          {musicData.map((m: IMusic, i: number) => {
            return (
              <div
                className="music__content__item"
                key={`${m}-${i}`}
                data-follow-image={m.cover}
                onMouseEnter={(
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) =>
                  updateFollowImage(
                    event.currentTarget.getAttribute('data-follow-image') ?? ''
                  )
                }
              >
                <div className="music__content__item__content">
                  <p className="music__content__item__content__title">
                    {m.title}
                  </p>
                  <p className="music__content__item__content__subtitle">
                    <span className="music__content__item__content__subtitle__year">
                      {m.releaseDate.getFullYear()}
                    </span>
                    <span className="music__content__item__content__subtitle__separator"></span>
                    <span className="music__content__item__content__subtitle__type">
                      {m.type}
                    </span>
                    <span className="music__content__item__content__subtitle__separator"></span>
                    <span className="music__content__item__content__subtitle__links">
                      <FontAwesomeIcon icon={faYoutube} />
                      <FontAwesomeIcon icon={faSpotify} />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
);

export default Music;
