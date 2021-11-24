/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './shop.scss';

import { animationData, loading, shopData } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { Button } from '@stagefright/shared/components';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { useMousePosition } from '@stagefright/shared/util';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  const shopTitle = useRef<HTMLHeadingElement>(null);
  const shopProducts = useRef<HTMLUListElement>(null);
  const shopButton = useRef<HTMLDivElement>(null);
  const shopTitleBlender = useRef<HTMLSpanElement>(null);
  const imageFollowRef = useRef<HTMLDivElement>(null);
  const imageFollowImageRef = useRef<HTMLImageElement>(null);
  const imageFollowBlenderRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const updateFollowImage: (source: string) => void = (source: string) => {
    imageFollowImageRef.current && (imageFollowImageRef.current.src = source);
  };

  useEffect(() => {
    gsap.to('.shop__title__blender', {
      opacity: 1,
      duration: 0,
      scrollTrigger: {
        trigger: '.shop__title__blender',
        toggleActions: 'play none none none',
        start: 'top bottom',
      },
      onComplete: () => {
        gsap
          .timeline()
          .to('.shop__title__blender', {
            width: '100%',
            duration: animationData.shop.duration / 1000,
            ease: Power4.easeOut,
          })
          .to('.shop__title__blender', {
            right: '0',
            duration: 0,
          })
          .to('.shop__title__text', {
            opacity: 1,
            duration: 0,
          })
          .to('.shop__title__blender', {
            x: '100%',
            duration: animationData.shop.duration / 1000,
            ease: Power4.easeOut,
          });
      },
    });

    const onProductsOver: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: animationData.shop.duration / 1000 / 4,
      });

    const onProductsLeave: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 0,
        scale: 0.5,
        duration: animationData.shop.duration / 1000 / 4,
      });

    gsap.to(imageFollowRef.current, {
      css: {
        left: mousePosition.x,
        top: mousePosition.y,
      },
    });

    shopProducts.current?.addEventListener('mouseover', onProductsOver);
    shopProducts.current?.addEventListener('mouseleave', onProductsLeave);

    return () => {
      shopProducts.current?.removeEventListener('mouseover', onProductsOver);
      shopProducts.current?.removeEventListener('mouseleave', onProductsLeave);
    };
  });

  return (
    <div className="shop" id={HomeSection.shop}>
      <div className="shop__content">
        <h2 className="shop__title" ref={shopTitle}>
          <span className="shop__title__blender"></span>
          <span className="shop__title__text" ref={shopTitleBlender}>
            StageFright Shop
          </span>
        </h2>
        <ul className="shop__content__products" ref={shopProducts}>
          <div
            className="shop__content__products__image-follow"
            ref={imageFollowRef}
          >
            <div
              className="shop__content__products__image-follow__blender"
              ref={imageFollowBlenderRef}
            ></div>
            <img
              alt="StageFright merch shirt"
              className="shop__content__products__image-follow__image"
              ref={imageFollowImageRef}
              src={shopData.products.shirt[0].image}
            />
          </div>
          {Object.values(shopData.products).map((e, _: number) => {
            return e.map((p, __: number) => {
              return (
                <a
                  href={shopData.url}
                  target="_blank"
                  rel="noreferrer"
                  key={`product-${_}-${__}`}
                >
                  <li
                    className="shop__content__products__product"
                    data-follow-image={p.image}
                    onMouseEnter={(
                      event: React.MouseEvent<HTMLLIElement, MouseEvent>
                    ) =>
                      updateFollowImage(
                        event.currentTarget.getAttribute('data-follow-image') ??
                          ''
                      )
                    }
                  >
                    <span className="shop__content__products__product__text">
                      {p.name}
                    </span>
                  </li>
                </a>
              );
            });
          })}
        </ul>
        <div className="shop__shop" ref={shopButton}>
          <Button
            text="Visit StageFright Shop"
            link={shopData.url}
            linkTarget="_blank"
            icon={faShoppingCart}
            linkClassName="shop__shop__button-link"
          />
        </div>
      </div>
      <div className="shop__col">test</div>
    </div>
  );
};

export default Shop;
