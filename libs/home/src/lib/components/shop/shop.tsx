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
import image from './assets/products/merch/stagefright_black_shirt_chest_logo.png';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  const shopTitle = useRef<HTMLHeadingElement>(null);
  const shopTitleBlender = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.to('.shop', {
      scrollTrigger: {
        trigger: '.shop',
        start: 'top 10%',
        end: '+200%',
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to('.shop__title__blender', {
      delay:
        loading.artificialPageMountDelay / 1000 +
        animationData.shop.delay / 1000,
      opacity: 1,
      duration: 0,
      scrollTrigger: {
        trigger: '.shop__title__blender',
        toggleActions: 'restart none none none',
        start: 'top bottom',
      },
      onComplete: () => {
        gsap
          .timeline()
          .to('.shop__title__blender', {
            width: '100%',
            duration: animationData.shop.duration / 1000 / 2,
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
            duration: animationData.shop.duration / 1000 / 2,
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
        start: 'top 20%',
        scrub: 1,
      },
    });

    gsap.from('.shop__shop__button-link', {
      y: -50,
      duration: animationData.shop.duration / 1000,
      scrollTrigger: {
        trigger: '.shop__shop__button-link',
        start: 'top center',
        scrub: 1,
      },
    });

    const items: NodeListOf<HTMLLIElement> = document.querySelectorAll(
      '.shop__content__products__product'
    );

    items.forEach((el) => {
      const image = el.querySelector('img');

      el.addEventListener('mouseenter', () => {
        gsap.to(image, { autoAlpha: 1, zoom: 0.6 });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(image, { autoAlpha: 0, zoom: 1.5 });
      });

      el.addEventListener('mousemove', (e: MouseEvent) => {
        gsap.to(image, {
          css: { left: e.offsetX, top: e.offsetY },
        });
      });
    });
  });

  return (
    <div className="shop" id={HomeSection.shop}>
      <h2 className="shop__title" ref={shopTitle}>
        <span className="shop__title__blender"></span>
        <span className="shop__title__text" ref={shopTitleBlender}>
          StageFright Shop
        </span>
      </h2>
      <div className="shop__content">
        <ul className="shop__content__products">
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
                    <img src={p.image} alt={p.altText} />
                    {p.name}
                  </li>
                </a>
              );
            });
          })}
        </ul>
      </div>
      <div className="shop__shop">
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
