/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './shop.scss';

import { animationData, loading, shopData } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { Button } from '@stagefright/shared/components';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import merch from './assets/products/merch/stagefright_black_shirt_chest_logo.png';
import music from './assets/products/music/music.jpg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
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
      // ease: Power4.easeInOut,
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
        gsap.set(image, { x: e.offsetX, y: e.offsetY });
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
          <a href={shopData.url} target="_blank" rel="noreferrer">
            <li className="shop__content__products__product">
              <img src={merch} alt="StagFright Merch Shirt" />
              Shirt S
            </li>
          </a>
          <a href={shopData.url} target="_blank" rel="noreferrer">
            <li className="shop__content__products__product">
              <img src={merch} alt="StagFright Merch Shirt" />
              Shirt M
            </li>
          </a>
          <a href={shopData.url} target="_blank" rel="noreferrer">
            <li className="shop__content__products__product">
              <img src={merch} alt="StagFright Merch Shirt" />
              Shirt L
            </li>
          </a>
          <a href={shopData.url} target="_blank" rel="noreferrer">
            <li className="shop__content__products__product">
              <img src={merch} alt="StagFright Merch Shirt" />
              Shirt XL
            </li>
          </a>
        </ul>
        {/* <a className="shop__content__merch" href={shopData.url}>
          <img src={merch} alt="StageFright Merch" />
          <div className="shop__content__merch__overlay">
            <h3>Out of Stock</h3>
          </div>
        </a> */}
        {/* <a className="shop__content__music" href={shopData.url}>
          <img src={music} alt="StageFright Music" />
          <div className="shop__content__merch__overlay">
            <h3>Music</h3>
          </div>
        </a> */}
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
