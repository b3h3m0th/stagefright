/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './shop.scss';

import { animationData, loading, shopData } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { Button } from '@stagefright/shared/components';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef } from 'react';
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
  const imageFollowRef = useRef<HTMLImageElement>(null);
  const mousePosition = useMousePosition();

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

    gsap.to('.shop__content__products__product', {
      opacity: 1,
      duration: animationData.shop.duration / 1000,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.shop__content__products__product',
        start: 'top 80%',
        scrub: 1,
      },
    });

    const onProductsOver: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 1,
        duration: animationData.shop.duration / 1000,
      });

    const onProductsLeave: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 0,
        duration: animationData.shop.duration / 1000,
      });

    gsap.to(imageFollowRef.current, {
      css: { left: mousePosition.x, top: mousePosition.y },
    });

    shopProducts.current?.addEventListener('mouseover', onProductsOver);
    shopProducts.current?.addEventListener('mouseleave', onProductsLeave);

    return () => {
      shopProducts.current?.removeEventListener('mouseenter', onProductsOver);
      shopProducts.current?.removeEventListener('mouseleave', onProductsLeave);
    };
  }, [mousePosition]);

  // console.log('render');

  return (
    <div className="shop" id={HomeSection.shop}>
      <h2 className="shop__title" ref={shopTitle}>
        <span className="shop__title__blender"></span>
        <span className="shop__title__text" ref={shopTitleBlender}>
          StageFright Shop
        </span>
      </h2>
      <div className="shop__content">
        <ul className="shop__content__products" ref={shopProducts}>
          <img
            src={
              'https://artistsden.com/wp-content/uploads/2019/05/john-legend-e1568041810442.jpg'
            }
            alt="StageFright merch shirt"
            ref={imageFollowRef}
            className="shop__content__products__image-follow"
          />
          {Object.values(shopData.products).map((e, _: number) => {
            return e.map((p, __: number) => {
              return (
                <a
                  href={shopData.url}
                  target="_blank"
                  rel="noreferrer"
                  key={`product-${_}-${__}`}
                >
                  <li className="shop__content__products__product">
                    <span className="shop__content__products__product__text">
                      {p.name}
                    </span>
                  </li>
                </a>
              );
            });
          })}
        </ul>
      </div>
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
  );
};

export default Shop;
